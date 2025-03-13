import React, { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  url?: string;
  keywords?: string;
}

export default function SEO({
  title = "Woolgar Media",
  description = "Digital marketing agency specializing in web development, social media marketing, and content creation.",
  ogImage = "/images/og-image.png",
  url = "https://woolgarmedia.com",
  keywords = "digital marketing, web development, social media marketing",
}: SEOProps) {
  const fullTitle =
    title === "Woolgar Media" ? title : `${title} | Woolgar Media`;

  useEffect(() => {
    // Update the document title
    document.title = fullTitle;

    // Update or create meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);

    // Open Graph / Facebook
    updateMetaTag("og:type", "website", "property");
    updateMetaTag("og:url", url, "property");
    updateMetaTag("og:title", fullTitle, "property");
    updateMetaTag("og:description", description, "property");
    updateMetaTag("og:image", ogImage, "property");

    // Twitter
    updateMetaTag("twitter:card", "summary_large_image", "property");
    updateMetaTag("twitter:url", url, "property");
    updateMetaTag("twitter:title", fullTitle, "property");
    updateMetaTag("twitter:description", description, "property");
    updateMetaTag("twitter:image", ogImage, "property");

    // Canonical URL
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", url);

    // Clean up function
    return () => {
      // Optional: Remove tags when component unmounts if desired
      // This is usually not necessary for SEO tags
    };
  }, [fullTitle, description, keywords, ogImage, url]);

  // Helper function to update meta tags
  function updateMetaTag(
    name: string,
    content: string,
    attributeType: "name" | "property" = "name"
  ) {
    let metaTag = document.querySelector(`meta[${attributeType}="${name}"]`);
    if (!metaTag) {
      metaTag = document.createElement("meta");
      metaTag.setAttribute(attributeType, name);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute("content", content);
  }

  // This component doesn't render anything visible
  return null;
}
