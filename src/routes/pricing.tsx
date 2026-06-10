import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Cleaning Service Pricing in Kaduna | Royal Clean" },
      {
        name: "description",
        content:
          "Custom-built cleaning quotes for every Kaduna home, office and estate. Get a tailored quote in minutes — no hidden fees.",
      },
      { property: "og:title", content: "Royal Clean Kaduna Pricing" },
      { property: "og:description", content: "Custom cleaning quotes tailored to your space in Kaduna." },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.url}/pricing` }],
  }),
  component: PricingPage,
});

const features = [
  "Recurring weekly, bi-weekly & monthly contracts",
  "Dedicated account manager",
  "Fumigation + cleaning combo packages",
  "Post-construction & move-in/move-out add-ons",
  "On-call emergency response team",
  "Volume discounts for offices & estates",
];

function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Pricing</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold">Custom quotes, built for your space</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Every Kaduna home, office and estate is different — so we don't sell generic packages. Tell us about your space and we'll send a tailored quote within minutes.
        </p>
      </div>

      <div className="max-w-md mx-auto rounded-3xl border-2 border-primary bg-primary/5 p-10 shadow-xl">
        <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground mb-4">
          Tailored Quote
        </div>
        <h2 className="font-serif text-3xl font-bold">Imperial</h2>
        <div className="mt-2 mb-6">
          <span className="text-4xl font-bold">Custom</span>
          <span className="text-sm text-muted-foreground"> tailored quote</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm">
              <Check className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <a
          href="/contact"
          className="block text-center font-semibold py-3.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all hover:scale-[1.02]"
        >
          Get a Quote
        </a>
      </div>
    </div>
  );
}
