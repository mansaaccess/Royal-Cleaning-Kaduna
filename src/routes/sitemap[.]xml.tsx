import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";
import { services } from "@/content/services";
import { areas } from "@/content/areas";
import { blogPosts } from "@/content/blog";

export const Route = createFileRoute("/sitemap.xml")({
  // @ts-ignore - server handlers are provided by the TanStack Start plugin at runtime
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().split("T")[0];
        const urls: { loc: string; lastmod?: string; priority?: string }[] = [
          { loc: "/", priority: "1.0" },
          { loc: "/about", priority: "0.7" },
          { loc: "/our-team", priority: "0.6" },
          { loc: "/pricing", priority: "0.8" },
          { loc: "/how-it-works", priority: "0.7" },
          { loc: "/service-areas", priority: "0.8" },
          { loc: "/contact", priority: "0.7" },
          { loc: "/blog", priority: "0.8" },
          { loc: "/faq", priority: "0.6" },
          { loc: "/privacy-policy", priority: "0.3" },
          { loc: "/terms", priority: "0.3" },
        ];
        services.forEach((s) => urls.push({ loc: `/${s.slug}`, priority: "0.9" }));
        areas.forEach((a) => urls.push({ loc: `/${a.slug}`, priority: "0.8" }));
        blogPosts.forEach((p) =>
          urls.push({ loc: `/blog/${p.slug}`, lastmod: p.updatedAt ?? p.publishedAt, priority: "0.7" }),
        );

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${siteConfig.url}${u.loc}</loc>
    <lastmod>${u.lastmod ?? today}</lastmod>
    <priority>${u.priority ?? "0.5"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
