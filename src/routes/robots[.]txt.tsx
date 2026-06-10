import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/robots.txt")({
  // @ts-ignore - server handlers are provided by the TanStack Start plugin at runtime
  server: {
    handlers: {
      GET: () => {
        const body = `User-agent: *
Allow: /
Disallow: /privacy-policy
Disallow: /terms

Sitemap: ${siteConfig.url}/sitemap.xml
`;
        return new Response(body, {
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        });
      },
    },
  },
});
