import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, ArrowRight } from "lucide-react";
import { areas } from "@/content/areas";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: [
      { title: `Service Areas in Kaduna | ${siteConfig.name}` },
      { name: "description", content: "Royal Clean covers every neighborhood in Kaduna — GRA, Barnawa, Narayi, Sabon Gari, Ungwan Rimi, Kaduna North, Kakuri & Rigasa." },
      { property: "og:title", content: "Cleaning Service Areas in Kaduna" },
      { property: "og:description", content: "Find professional cleaners in your Kaduna neighborhood." },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.url}/service-areas` }],
  }),
  component: ServiceAreas,
});

function ServiceAreas() {
  return (
    <div className="container mx-auto px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Service Areas</p>
      <h1 className="font-serif text-4xl md:text-5xl font-bold">Cleaning across Kaduna</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        We service every major neighborhood in Kaduna with same-day availability and fixed pricing.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {areas.map((a) => (
          <a
            key={a.slug}
            href={`/${a.slug}`}
            className="group rounded-2xl border bg-card p-6 hover:border-primary"
          >
            <MapPin className="h-5 w-5 text-primary mb-2" />
            <h2 className="font-serif text-xl font-bold group-hover:text-primary">
              {a.hero.h1.replace("Cleaning Services in ", "").replace(", Kaduna", "")}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{a.hero.subhead}</p>
            <span className="mt-3 inline-flex items-center text-sm font-semibold text-primary">
              View page <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
