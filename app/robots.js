export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://ascentlegal.io/sitemap.xml",
    host: "https://ascentlegal.io",
  };
}
