import os
from typing import Optional

import cloudinary
import cloudinary.uploader
from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from starlette.concurrency import run_in_threadpool

from lib.db import db
from routers.admin import require_admin

router = APIRouter(prefix="/content")

cloudinary.config(
    cloud_name=os.environ.get("CLOUDINARY_CLOUD_NAME"),
    api_key=os.environ.get("CLOUDINARY_API_KEY"),
    api_secret=os.environ.get("CLOUDINARY_API_SECRET"),
    secure=True,
)


@router.get("/services")
async def get_services():
    """Public: edited image/title/short text for each service."""
    return await db.service_content.find({}, {"_id": 0}).to_list(100)


@router.put("/services/{slug}")
async def update_service(
    slug: str,
    title: Optional[str] = Form(None),
    short: Optional[str] = Form(None),
    image: Optional[UploadFile] = File(None),
    _: dict = Depends(require_admin),
):
    """Admin only: change a service's image, title or short text."""
    update = {}
    if title:
        update["title"] = title
    if short:
        update["short"] = short
    if image is not None and image.filename:
        if not (image.content_type or "").startswith("image/"):
            raise HTTPException(status_code=400, detail="Only image files are allowed")
        data = await image.read()
        result = await run_in_threadpool(
            cloudinary.uploader.upload,
            data,
            folder="bactit/services",
            public_id=slug,
            overwrite=True,
        )
        update["image"] = result["secure_url"]
    if not update:
        raise HTTPException(status_code=400, detail="Nothing to update")
    await db.service_content.update_one(
        {"slug": slug}, {"$set": {**update, "slug": slug}}, upsert=True
    )
    return await db.service_content.find_one({"slug": slug}, {"_id": 0})