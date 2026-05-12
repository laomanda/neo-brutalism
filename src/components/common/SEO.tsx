import { useEffect } from "react";
import { SITE_CONFIG } from "../../constants/site";
import { generatePersonSchema, generateWebSiteSchema } from "../../utils/seo";

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  schemas?: Record<string, unknown>[];
};

function updateMetaTag(nameOrProperty: string, value: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let meta = document.querySelector(`meta[${attr}="${nameOrProperty}"]`);
  
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attr, nameOrProperty);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", value);
}

function updateCanonicalLink(url: string) {
  let link = document.querySelector(`link[rel="canonical"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

function updateStructuredData(schemas: Record<string, unknown>[]) {
  let script = document.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement("script");
    script.setAttribute("type", "application/ld+json");
    document.head.appendChild(script);
  }
  
  // Combine multiple schemas if provided
  const data = schemas.length === 1 ? schemas[0] : schemas;
  script.textContent = JSON.stringify(data);
}


export function SEO({
  title = SITE_CONFIG.defaultTitle,
  description = SITE_CONFIG.description.id,
  path = "",
  image = SITE_CONFIG.ogImage,
  type = "website",
  noIndex = false,
  schemas = [],
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    const formattedTitle = title === SITE_CONFIG.defaultTitle 
      ? title 
      : SITE_CONFIG.titleTemplate.replace("%s", title);
    document.title = formattedTitle;

    // 2. Base Meta
    updateMetaTag("description", description);
    updateMetaTag("keywords", SITE_CONFIG.keywords.join(", "));
    
    // 3. Robots
    if (noIndex) {
      updateMetaTag("robots", "noindex, nofollow");
    } else {
      updateMetaTag("robots", "index, follow");
    }

    // 4. Canonical
    const fullUrl = `${SITE_CONFIG.siteUrl}${path}`;
    updateCanonicalLink(fullUrl);

    // 5. Open Graph
    updateMetaTag("og:title", formattedTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:site_name", SITE_CONFIG.siteName, true);
    updateMetaTag("og:locale", SITE_CONFIG.locale, true);
    
    const fullImageUrl = image.startsWith("http") ? image : `${SITE_CONFIG.siteUrl}${image}`;
    updateMetaTag("og:image", fullImageUrl, true);
    updateMetaTag("og:image:width", "1200", true);
    updateMetaTag("og:image:height", "630", true);
    updateMetaTag("og:image:type", "image/png", true);

    // 6. Twitter
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", formattedTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", fullImageUrl);

    // 7. Structured Data (JSON-LD)
    const activeSchemas = schemas.length > 0 ? schemas : [generatePersonSchema(), generateWebSiteSchema()];
    updateStructuredData(activeSchemas);

  }, [title, description, path, image, type, noIndex, schemas]);

  return null;
}

