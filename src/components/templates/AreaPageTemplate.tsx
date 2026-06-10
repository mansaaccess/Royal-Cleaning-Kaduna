import { Link } from "@tanstack/react-router";
import { Check, Phone, MessageSquare, MapPin, Star } from "lucide-react";
import { getAreaBySlug } from "@/content/areas";
import { services } from "@/content/services";
import { siteConfig, telLink, whatsappLink } from "@/config/site";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/components/seo/JsonLd";

export function areaHead(slug: string) {
  const area = getAreaBySlug(slug);
  if (!area) return {};
  const url = `${siteConfig.url}/${slug}`;
  return {
    meta: [
      { title: area.seo.title },
      { name: "description", content: area.seo.metaDescription },
      ...(area.seo.keywords ? [{ name: "keywords", content: area.seo.keywords }] : []),
      { property: "og:title", content: area.seo.title },
      { property: "og:description", content: area.seo.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function AreaPageTemplate({ slug }: { slug: string }) {
  const area = getAreaBySlug(slug);
  if (!area) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-3xl">Area not found</h1>
        <Link to="/service-areas" className="mt-4 inline-block text-primary">View all areas →</Link>
      </div>
    );
  }
  const url = `${siteConfig.url}/${slug}`;
  const popular = (area.popularServices ?? [])
    .map((s) => services.find((x) => x.slug === s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Service Areas", url: `${siteConfig.url}/service-areas` },
            { name: area.hero.h1, url },
          ]),
          faqSchema(area.faqs),
        ]}
      />

      <section className="relative border-b py-20">
        <div className="container mx-auto px-4">
          <nav className="mb-6 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link> /{" "}
            <Link to="/service-areas" className="hover:text-foreground">Areas</Link> /{" "}
            <span className="text-foreground">{area.hero.h1}</span>
          </nav>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold">
            <MapPin className="h-3 w-3 text-primary" /> Local cleaners in Kaduna
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold max-w-4xl">{area.hero.h1}</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{area.hero.subhead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsappLink(`Hi Royal Clean, I want to book in ${area.hero.h1}.`)}
              target="_blank"
              rel="noopener"
              className="inline-flex h-12 items-center rounded-full bg-primary px-7 font-semibold text-primary-foreground shadow-lg shadow-primary/25"
            >
              <MessageSquare className="mr-2 h-4 w-4" /> Book on WhatsApp
            </a>
            <a href={telLink} className="inline-flex h-12 items-center rounded-full border px-7 font-semibold">
              <Phone className="mr-2 h-4 w-4" /> {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-4xl">
        {area.intro.map((p, i) => (
          <p key={i} className="text-lg leading-relaxed text-foreground/90 mb-4">{p}</p>
        ))}
        {area.neighborhoods && (
          <div className="mt-8 flex flex-wrap gap-2">
            {area.neighborhoods.map((n) => (
              <span key={n} className="inline-flex items-center gap-1 rounded-full border bg-card px-3 py-1 text-xs">
                <MapPin className="h-3 w-3 text-primary" /> {n}
              </span>
            ))}
          </div>
        )}
      </section>

      <section className="container mx-auto px-4 pb-16 max-w-4xl space-y-10">
        {area.sections.map((s, i) => (
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
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {popular.length > 0 && (
        <section className="bg-card/40 border-y py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-center mb-10">Popular services here</h2>
            <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
              {popular.map((s) => (
                <a
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="rounded-2xl border bg-card p-6 hover:border-primary"
                >
                  <h3 className="font-serif text-lg font-bold">{s.hero.h1}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.hero.subhead}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {area.testimonials && area.testimonials.length > 0 && (
        <section className="container mx-auto px-4 py-16 max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {area.testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border bg-card p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating ?? 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="italic">"{t.quote}"</p>
                <p className="mt-3 text-sm font-semibold">{t.name}</p>
                {t.location && <p className="text-xs text-muted-foreground">{t.location}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <h2 className="font-serif text-3xl font-bold text-center mb-10">FAQs</h2>
        <div className="space-y-4">
          {area.faqs.map((f, i) => (
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
    </>
  );
}
