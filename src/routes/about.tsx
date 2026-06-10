import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Clock, Sparkles, Heart, Award, Users } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${siteConfig.name} | Kaduna's 24/7 Cleaning Company` },
      {
        name: "description",
        content:
          "Meet Royal Clean Kaduna — the only 24/7 cleaning and fumigation service in Kaduna. Vetted crews, premium equipment and a satisfaction guarantee.",
      },
      { property: "og:title", content: `About ${siteConfig.name}` },
      { property: "og:description", content: "Kaduna's most trusted 24/7 cleaning and fumigation company." },
      { property: "og:image", content: `${siteConfig.url}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.url}/about` }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Clock, title: "Always available", body: "We're the only cleaning company in Kaduna open 24 hours, 7 days a week — Sundays and public holidays included." },
  { icon: Shield, title: "Vetted & insured", body: "Every cleaner is background-checked, uniformed, trained and covered by our liability insurance." },
  { icon: Sparkles, title: "Hospitality-grade standards", body: "Our crews are trained on the same checklists used by 5-star hotels — nothing is missed." },
  { icon: Heart, title: "Safe for families", body: "Eco-friendly, biodegradable products certified safe for children, pregnant women and pets." },
  { icon: Award, title: "Royal Guarantee", body: "If you're not satisfied with any visit, we return and re-clean free of charge — no questions." },
  { icon: Users, title: "Local Kaduna team", body: "Our crews live in Kaduna and know every neighborhood — from GRA to Rigasa, Kakuri to Sabon Gari." },
];

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">About Us</p>
      <h1 className="font-serif text-4xl md:text-5xl font-bold">Kaduna's 24/7 cleaning and fumigation company</h1>
      <p className="mt-6 text-lg text-foreground/85 leading-relaxed">
        {siteConfig.name} was founded with one mission: bring world-class cleaning standards to homes and
        businesses across Kaduna — and be available the moment our customers need us. Today we're the only
        cleaning company in the city open 24 hours, 7 days a week, with vetted crews covering every neighborhood
        from <Link to="/cleaning-service-kaduna-gra" className="text-primary underline">Kaduna GRA</Link> to
        {" "}<Link to="/cleaning-service-rigasa-kaduna" className="text-primary underline">Rigasa</Link>.
      </p>

      <section className="mt-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold">Our story</h2>
        <div className="mt-4 space-y-4 text-foreground/85 leading-relaxed">
          <p>
            We started Royal Clean after watching too many Kaduna families and businesses struggle with no-shows,
            untrained staff and inconsistent quality. Cleaning shouldn't be a guessing game — it should be a
            premium service delivered on time, every time.
          </p>
          <p>
            Today our crews handle everything from weekly residential cleaning to industrial-scale work in the
            Kakuri Industrial Area, full-property fumigation, post-construction cleans and event turnover. We
            structure every job around fixed pricing, vetted personnel and a written satisfaction guarantee.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold">What we stand for</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border bg-card p-6">
              <v.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border bg-card p-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold">Ready to experience the Royal standard?</h2>
        <p className="mt-3 text-muted-foreground">Get a fixed quote in under 5 minutes — 24 hours a day.</p>
        <Link
          to="/contact"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 font-semibold text-primary-foreground shadow-lg shadow-primary/25"
        >
          Get a quote
        </Link>
      </section>
    </div>
  );
}
