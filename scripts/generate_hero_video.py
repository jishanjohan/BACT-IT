"""One-time builder script: generate the Home hero background video with Veo 3.1 (fal.ai) via the Emergent Universal Key.

Run from /app/backend:  python ../scripts/generate_hero_video.py
Saves the result to frontend/public/videos/hero.mp4 (a static site asset; no runtime generation in the app).
"""
import os
import sys
import time
from typing import Any
from urllib.parse import urlparse

import requests
from dotenv import load_dotenv

load_dotenv("/app/backend/.env")

EMERGENT_LLM_KEY = os.environ["EMERGENT_LLM_KEY"]
# Fal Universal Key supports queue inference through the Emergent proxy only, not Fal Platform APIs.
INTEGRATION_PROXY_BASE = os.environ.get("INTEGRATION_PROXY_URL", "https://integrations.emergentagent.com").rstrip("/")
CONTROL_BASE = f"{INTEGRATION_PROXY_BASE}/api/v1/fal"
PUBLIC_QUEUE_BASE = f"{CONTROL_BASE}/queue"
QUEUE_ORIGIN = "https://queue.fal.run"
ENDPOINT_ID = "fal-ai/veo3.1"
OUTPUT_PATH = "/app/frontend/public/videos/hero.mp4"

PROMPT = (
    "Cinematic, seamless corporate technology montage for an IT company, no people's faces in close-up, no text, no logos. "
    "Shot 1: slow dolly across a modern laptop screen showing clean software code and a business dashboard. "
    "Shot 2: smooth tracking shot along glowing server racks and neatly organized blue network cables in a data center. "
    "Shot 3: a glowing digital padlock and shield hologram representing cybersecurity, floating above a dark keyboard. "
    "Shot 4: bright modern IT training classroom with students at computers, softly out of focus. "
    "Deep navy blue color palette with warm orange accent lighting, shallow depth of field, soft light flares, "
    "calm steady camera movement, premium and professional, 24fps, photorealistic."
)
NEGATIVE_PROMPT = "text, captions, subtitles, watermark, logos, brand names, distorted faces, low quality, flicker, cartoon"


class MediaError(Exception):
    pass


def _headers(extra: dict[str, str] | None = None) -> dict[str, str]:
    headers = {"Authorization": f"Bearer {EMERGENT_LLM_KEY}", "Content-Type": "application/json"}
    job_id = os.environ.get("job_id")
    if job_id:
        headers["X-App-ID"] = job_id
        headers["X-Job-ID"] = job_id
    run_id = os.environ.get("run_id")
    if run_id:
        headers["X-Environment-ID"] = run_id
    if extra:
        headers.update(extra)
    return headers


def _trusted(url: str) -> str:
    c, q = urlparse(url), urlparse(PUBLIC_QUEUE_BASE)
    if c.scheme != q.scheme or c.netloc != q.netloc or not c.path.startswith(q.path.rstrip("/") + "/"):
        raise MediaError("Proxy returned an untrusted media queue URL")
    return url


def _get(url: str, deadline: float, timeout: int = 30) -> requests.Response:
    delay = 1
    for attempt in range(5):
        remaining = deadline - time.monotonic()
        if remaining <= 0:
            raise MediaError("Timed out waiting for media generation")
        try:
            return requests.get(url, headers=_headers(), timeout=min(timeout, remaining))
        except (requests.ConnectTimeout, requests.ReadTimeout, requests.ConnectionError) as exc:
            if attempt == 4:
                raise MediaError("Polling failed after transient network errors") from exc
            time.sleep(min(delay, max(0.0, deadline - time.monotonic())))
            delay *= 2
    raise AssertionError("unreachable")


def run(payload: dict[str, Any], timeout_seconds: int = 900) -> dict[str, Any]:
    # Single submit; never auto-retried (a lost response could still be a billable job).
    submit = requests.post(
        f"{CONTROL_BASE}/proxy",
        headers=_headers({"X-Fal-Target-Url": f"{QUEUE_ORIGIN}/{ENDPOINT_ID}"}),
        json=payload,
        timeout=60,
    )
    if submit.status_code == 402:
        raise MediaError("Insufficient Universal Key credits for this generation")
    if not submit.ok:
        raise MediaError(f"Submit failed {submit.status_code}: {submit.text[:300]}")
    body = submit.json()
    status_url, response_url = _trusted(body["status_url"]), _trusted(body["response_url"])
    print("submitted; polling...", flush=True)
    deadline = time.monotonic() + timeout_seconds
    while time.monotonic() < deadline:
        status_resp = _get(status_url, deadline)
        status_resp.raise_for_status()
        state = (status_resp.json().get("status") or "").upper()
        if state in {"COMPLETED", "OK"}:
            result = _get(response_url, deadline, timeout=60)
            result.raise_for_status()
            return result.json()
        if state in {"FAILED", "CANCELLED", "CANCELED", "ERROR"}:
            raise MediaError(f"Generation failed: {state}")
        print(f"status: {state}", flush=True)
        time.sleep(5)
    raise MediaError("Timed out waiting for media generation")


def main() -> None:
    result = run(
        {
            "prompt": PROMPT,
            "negative_prompt": NEGATIVE_PROMPT,
            "aspect_ratio": "16:9",
            "duration": "8s",
            "resolution": "720p",
            "generate_audio": False,
        }
    )
    video_url = (result.get("video") or {}).get("url")
    if not video_url:
        raise MediaError(f"No video in result: {str(result)[:300]}")
    os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
    with requests.get(video_url, stream=True, timeout=120) as download:
        download.raise_for_status()
        with open(OUTPUT_PATH, "wb") as handle:
            for chunk in download.iter_content(chunk_size=1 << 16):
                handle.write(chunk)
    print(f"saved {OUTPUT_PATH} ({os.path.getsize(OUTPUT_PATH)} bytes)")


if __name__ == "__main__":
    try:
        main()
    except MediaError as error:
        print(f"ERROR: {error}", file=sys.stderr)
        sys.exit(1)
