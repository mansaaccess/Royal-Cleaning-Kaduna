import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: `Terms of Service | ${siteConfig.name}` },
      { name: "description", content: `Terms of service for ${siteConfig.name}.` },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.url}/terms` }],
  }),
  component: () => (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="font-serif text-4xl font-bold">Terms of Service</h1>
      <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mt-6 text-foreground/85">
        By booking {siteConfig.name}, you agree to our service terms. Cancellations require 24 hours notice.
        Payments are due on completion. Our Royal Guarantee promises a free re-clean if you're not satisfied.
      </p>
      <p className="mt-3 text-muted-foreground"><em>Replace with your full terms.</em></p>
    </div>
  ),
});
