import { SITE_CONFIG } from "../constants/site";

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.ownerName,
    jobTitle: SITE_CONFIG.role.en,
    url: SITE_CONFIG.siteUrl,
    email: SITE_CONFIG.email,
    sameAs: [
      SITE_CONFIG.github,
      SITE_CONFIG.linkedin,
      SITE_CONFIG.instagram,
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.siteName,
    url: SITE_CONFIG.siteUrl,
    description: SITE_CONFIG.description.id,
  };
}

export function generateCreativeWorkSchema(
  projectName: string,
  description: string,
  path: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: projectName,
    description,
    url: `${SITE_CONFIG.siteUrl}${path}`,
    creator: {
      "@type": "Person",
      name: SITE_CONFIG.ownerName,
    },
  };
}
