import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { OG_IMAGE, SITE_NAME, canonicalUrl, getPageSeo, organizationJsonLd, serviceJsonLd } from "@/lib/seo";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: object | null) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

// Keeps <head> title, description, keywords, canonical, social tags and structured data in sync with the route.
export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getPageSeo(pathname);
    const url = canonicalUrl(pathname);
    document.title = seo.title;
    upsertMeta("name", "description", seo.description);
    upsertMeta("name", "keywords", seo.keywords.join(", "));
    upsertMeta("name", "robots", seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    upsertLink("canonical", url);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", OG_IMAGE);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);
    upsertMeta("name", "twitter:image", OG_IMAGE);
    upsertJsonLd("ld-organization", organizationJsonLd);
    upsertJsonLd("ld-service", serviceJsonLd(pathname));
  }, [pathname]);

  return null;
}
