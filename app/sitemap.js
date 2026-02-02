export default function sitemap() {
  const baseUrl = "https://ascentlegal.io";

  const routes = [
    "",
    "/about",
    "/services",
    "/resources",
    "/contact",
    "/services/entertainment",
    "/services/trademark",
    "/services/copyright",
    "/services/contracts-drafting",
    "/services/deal-desk-support",
    "/services/corporate-formation",
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
