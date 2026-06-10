import { Link } from "@tanstack/react-router";
import { Check, Phone, MessageSquare, Star, ArrowRight } from "lucide-react";
import { services, getServiceBySlug } from "@/content/services";
import { siteConfig, telLink, whatsappLink } from "@/config/site";
import {
  JsonLd,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/components/seo/JsonLd";

export function serviceHead(slug: string) {
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const url = `${siteConfig.url}/${slug}`;
  return {
    meta: [
      { title: service.seo.title },
      { name: "description", content: service.seo.metaDescription },
      ...(service.seo.keywords ? [{ name: "keywords", content: service.seo.keywords }] : []),
      { property: "og:title", content: service.seo.title },
      { property: "og:description", content: service.seo.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      ...(service.seo.ogImage ? [{ property: "og:image", content: service.seo.ogImage }] : []),
      { name: "twitter:title", content: service.seo.title },
      { name: "twitter:description", content: service.seo.metaDescription },
      ...(service.seo.ogImage ? [{ name: "twitter:image", content: service.seo.ogImage }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function ServicePageTemplate({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-3xl">Service not found</h1>
        <Link to="/" className="mt-4 inline-block text-primary">Back home →</Link>
      </div>
    );
  }
  const url = `${siteConfig.url}/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: service.hero.h1, url },
          ]),
          serviceSchema({
            name: service.hero.h1,
            description: service.seo.metaDescription,
            serviceType: service.schema?.serviceType ?? service.hero.h1,
            url,
            priceRange: service.schema?.priceRange,
            areaServed: service.schema?.areaServed,
          }),
          faqSchema(service.faqs),
        ]}
      />

      <section className="relative overflow-hidden border-b">
        {service.hero.image && (
          <div className="absolute inset-0 -z-10">
            <img src={service.hero.image} alt="" className="h-full w-full object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>
        )}
        <div className="container mx-auto px-4 py-20 md:py-28">
          <nav className="mb-6 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-foreground">Home</Link> /{" "}
            <span className="text-foreground">{service.hero.h1}</span>
          </nav>
          {service.hero.eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              {service.hero.eyebrow}
            </p>
          )}
          <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
            {service.hero.h1}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{service.hero.subhead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink(`Hi Royal Clean, I want to book ${service.hero.h1}.`)}
              target="_blank"
              rel="noopener"
              className="inline-flex h-12 items-center rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-90"
            >
              <MessageSquare className="mr-2 h-4 w-4" /> Book on WhatsApp
            </a>
            <a
              href={telLink}
              className="inline-flex h-12 items-center rounded-full border border-border bg-background/50 backdrop-blur px-7 font-semibold hover:bg-accent"
            >
              <Phone className="mr-2 h-4 w-4" /> {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-4xl">
        {service.intro.map((p, i) => (
          <p key={i} className="text-lg leading-relaxed text-foreground/90 mb-4">{p}</p>
        ))}
      </section>

      <section className="container mx-auto px-4 pb-16 max-w-4xl space-y-12">
        {service.sections.map((s, i) => (
          <div key={i}>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">{s.heading}</h2>
            {s.paragraphs?.map((p, j) => (
              <p key={j} className="text-foreground/85 leading-relaxed mb-3">{p}</p>
            ))}
            {s.bullets && (
              <ul className="space-y-2 mt-3">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <Check className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                    <span className="text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {service.process && (
        <section className="bg-card/40 border-y py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-center mb-12">How it works</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {service.process.map((step, i) => (
                <div key={i} className="rounded-2xl border bg-card p-6">
                  <div className="text-3xl font-serif text-primary mb-2">0{i + 1}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.pricing && (
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto rounded-3xl border-2 border-primary bg-primary/5 p-10 text-center shadow-xl">
            <div className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground mb-4">
              Tailored Quote
            </div>
            <h2 className="font-serif text-3xl font-bold mb-3">Custom pricing for your space</h2>
            <p className="text-muted-foreground mb-6">
              {service.pricing.note ??
                "Every job is unique — we price based on size, condition and frequency. Get a no-obligation quote in minutes."}
            </p>
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Get a Quote
            </a>
          </div>
        </section>
      )}

      {service.testimonials && service.testimonials.length > 0 && (
        <section className="bg-card/40 border-y py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-center mb-10">What clients say</h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {service.testimonials.map((t, i) => (
                <div key={i} className="rounded-2xl border bg-card p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating ?? 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="italic text-foreground/90">"{t.quote}"</p>
                  <p className="mt-3 text-sm font-semibold">{t.name}</p>
                  {t.location && <p className="text-xs text-muted-foreground">{t.location}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="font-serif text-3xl font-bold text-center mb-10">Frequently asked questions</h2>
        <div className="space-y-4">
          {service.faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border bg-card p-5">
              <summary className="cursor-pointer font-semibold flex items-center justify-between">
                {f.question}
                <span className="ml-2 text-primary group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-foreground/85">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {service.related && service.related.length > 0 && (
        <section className="container mx-auto px-4 pb-16">
          <h2 className="font-serif text-2xl font-bold mb-6">Related services</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {service.related
              .map((s) => services.find((x) => x.slug === s))
              .filter((s): s is NonNullable<typeof s> => Boolean(s))
              .map((s) => (
                <a
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="group rounded-2xl border bg-card p-6 hover:border-primary transition-colors"
                >
                  <h3 className="font-serif text-lg font-bold group-hover:text-primary">{s.hero.h1}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.hero.subhead}</p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-primary">
                    View {s.hero.h1} details <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </a>
              ))}
          </div>
        </section>
      )}

      <section className="border-t bg-gradient-to-b from-background to-card/40 py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Ready for the Royal treatment?</h2>
          <p className="mt-3 text-muted-foreground">
            Get a fixed quote in under 5 minutes. No surprises, no hidden fees.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              className="inline-flex h-12 items-center rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-lg shadow-primary/25"
            >
              <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp us
            </a>
            <a
              href={telLink}
              className="inline-flex h-12 items-center rounded-full border px-7 font-semibold"
            >
              <Phone className="mr-2 h-4 w-4" /> Call now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
