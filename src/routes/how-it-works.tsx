import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: `How It Works | ${siteConfig.name}` },
      { name: "description", content: `Booking ${siteConfig.name} takes under 5 minutes — quote, schedule, clean, guarantee.` },
      { property: "og:title", content: `How It Works | ${siteConfig.name}` },
      { property: "og:description", content: "From quote to clean in under 24 hours. Here's our 4-step process." },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.url}/how-it-works` }],
  }),
  component: () => (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="font-serif text-4xl md:text-5xl font-bold">How It Works</h1>
      <p className="mt-4 text-muted-foreground">Content coming soon.</p>
    </div>
  ),
});
