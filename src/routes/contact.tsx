import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";
import { siteConfig, telLink, whatsappLink } from "@/config/site";
import { JsonLd, contactPageSchema, breadcrumbSchema } from "@/components/seo/JsonLd";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact ${siteConfig.shortName} | Book Cleaning Service Kaduna | Call or WhatsApp` },
      {
        name: "description",
        content:
          "Contact Royal Clean Kaduna 24/7 by phone, WhatsApp or form. Free quotes in 5 minutes. Same-day cleaning and fumigation across Kaduna.",
      },
      { property: "og:title", content: `Contact ${siteConfig.name}` },
      { property: "og:description", content: "Get a free cleaning quote in 5 minutes — 24 hours a day." },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.url}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 grid gap-12 lg:grid-cols-2 max-w-6xl">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Contact", url: `${siteConfig.url}/contact` },
          ]),
          contactPageSchema(`${siteConfig.url}/contact`),
        ]}
      />
      <div>
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Contact</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold">Contact {siteConfig.shortName} — Book Your Cleaning Service Today</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Reach us by phone, WhatsApp or email — we respond within 5 minutes, 24 hours a day. Unlike other Kaduna cleaners, we never close.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-2 text-sm font-semibold text-primary">
          <Clock className="h-4 w-4" /> Available 24/7 — including Sundays & holidays
        </div>
        <div className="mt-8 space-y-4">
          <a href={telLink} className="flex items-center gap-3 rounded-xl border bg-card p-4 hover:border-primary">
            <Phone className="h-5 w-5 text-primary" />
            <div><p className="text-xs text-muted-foreground">Call</p><p className="font-semibold">{siteConfig.phoneDisplay}</p></div>
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="flex items-center gap-3 rounded-xl border bg-card p-4 hover:border-primary">
            <MessageSquare className="h-5 w-5 text-primary" />
            <div><p className="text-xs text-muted-foreground">WhatsApp</p><p className="font-semibold">Chat with us instantly</p></div>
          </a>
          <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 rounded-xl border bg-card p-4 hover:border-primary">
            <Mail className="h-5 w-5 text-primary" />
            <div><p className="text-xs text-muted-foreground">Email</p><p className="font-semibold">{siteConfig.email}</p></div>
          </a>
          <div className="flex items-center gap-3 rounded-xl border bg-card p-4">
            <MapPin className="h-5 w-5 text-primary" />
            <div><p className="text-xs text-muted-foreground">Location</p><p className="font-semibold">{siteConfig.address.city}, {siteConfig.address.state}</p></div>
          </div>
        </div>
      </div>

      <form
        className="rounded-2xl border bg-card p-6 space-y-4"
        action={`https://wa.me/${siteConfig.whatsapp}`}
        method="get"
        target="_blank"
        onSubmit={(e) => {
          e.preventDefault();
          const f = e.currentTarget;
          const data = new FormData(f);
          const msg = `Hi Royal Clean!%0A%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0AService: ${data.get("service")}%0AArea: ${data.get("area")}%0ANotes: ${data.get("notes")}`;
          window.open(`https://wa.me/${siteConfig.whatsapp}?text=${msg}`, "_blank");
        }}
      >
        <h2 className="font-serif text-2xl font-bold">Request a quote</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <input name="name" required placeholder="Your name" className="h-11 rounded-md border bg-background px-3 text-sm" />
          <input name="phone" required placeholder="Phone number" className="h-11 rounded-md border bg-background px-3 text-sm" />
        </div>
        <select name="service" required className="h-11 w-full rounded-md border bg-background px-3 text-sm">
          <option value="">Select a service</option>
          <option>House cleaning</option>
          <option>Office cleaning</option>
          <option>Sofa cleaning</option>
          <option>Deep cleaning</option>
          <option>Fumigation + cleaning</option>
          <option>Post-construction</option>
        </select>
        <input name="area" placeholder="Area in Kaduna (e.g. Barnawa)" className="h-11 w-full rounded-md border bg-background px-3 text-sm" />
        <textarea name="notes" rows={4} placeholder="Tell us about your space..." className="w-full rounded-md border bg-background p-3 text-sm" />
        <button type="submit" className="h-12 w-full rounded-full bg-primary font-semibold text-primary-foreground shadow-lg shadow-primary/25">
          Send via WhatsApp
        </button>
        <p className="text-xs text-muted-foreground text-center">We'll reply within minutes during business hours.</p>
      </form>
    </div>
  );
}
