export default function sitemap() {
  const baseUrl = "https://ascentlegal.io";

  const routes = [
    { path: "", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/services", priority: 0.9 },
    { path: "/resources", priority: 0.7 },
    { path: "/contact", priority: 0.8 },
    { path: "/services/creator-contract-review", priority: 0.9 },
    { path: "/services/entertainment", priority: 0.9 },
    { path: "/services/trademark", priority: 0.9 },
    { path: "/services/copyright", priority: 0.9 },
    { path: "/services/contracts-drafting", priority: 0.8 },
    { path: "/services/deal-desk-support", priority: 0.8 },
    { path: "/services/corporate-formation", priority: 0.9 },
    { path: "/services/team-contractor-docs", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/services" ? "weekly" : "monthly",
    priority,
  }));
}
