import { createFileRoute } from "@tanstack/react-router";
import { siteConfig, telLink, whatsappLink } from "@/config/site";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/components/seo/JsonLd";
import { Phone, MessageSquare } from "lucide-react";

const faqs: { question: string; answer: string }[] = [
  { question: "Do you operate 24 hours in Kaduna?", answer: "Yes. Royal Clean Kaduna is the only cleaning and fumigation service in Kaduna available 24 hours a day, 7 days a week — including weekends and public holidays. Call or WhatsApp anytime." },
  { question: "How much does house cleaning cost in Kaduna?", answer: "Pricing depends on the size of your home, the type of cleaning (standard, deep, post-construction), and frequency. We give every customer a transparent fixed quote in under 5 minutes — no hidden fees." },
  { question: "Do you offer fumigation as well as cleaning?", answer: "Yes. We are one of the very few companies in Kaduna offering combined cleaning and fumigation. You can book them together or separately." },
  { question: "How long does a standard clean take?", answer: "A standard 3-bedroom flat takes about 3–4 hours with a 2-person crew. Deep cleans and post-construction cleans take longer. We give you a time estimate when you book." },
  { question: "Do you bring your own cleaning products?", answer: "Yes. Every Royal Clean crew arrives fully equipped with eco-friendly, premium-grade products and professional equipment. You don't need to provide anything." },
  { question: "Are your staff vetted and trustworthy?", answer: "Every team member is background-checked, trained, uniformed and insured. We treat your home with the same respect we would our own." },
  { question: "Do you clean on Sundays?", answer: "Yes. We clean every day of the week, including Sundays and public holidays — at no extra charge." },
  { question: "What areas in Kaduna do you cover?", answer: "We cover all of Kaduna metropolis — including Kaduna GRA, Barnawa, Narayi, Sabon Gari, Ungwan Rimi, Kaduna North, Kakuri, Rigasa and surrounding zones." },
  { question: "How do I book a cleaning?", answer: "The fastest way is WhatsApp — message us your name, area and what you need cleaned. You can also call directly. We respond within 5 minutes during the day and within 30 minutes overnight." },
  { question: "Do you offer deep cleaning?", answer: "Yes. Our deep clean covers everything a standard clean does plus inside ovens, fridges, cabinets, behind appliances, baseboards, light fixtures and grout. Perfect before Sallah, Christmas, or moving in." },
  { question: "Can you clean after construction or renovation?", answer: "Yes. Our post-construction cleaning team handles dust removal, paint splatter, debris, and fine finishing on new builds and renovations across Kaduna." },
  { question: "Do you clean sofas and carpets?", answer: "Yes. We use steam-extraction technology to remove stains, dust mites and odours from sofas, carpets, mattresses and rugs — safe for kids and pets." },
  { question: "How much does fumigation cost in Kaduna?", answer: "Fumigation pricing depends on the size of the property and the pest. We give a fixed quote upfront — most homes range from affordable single-room treatments to whole-house fumigation." },
  { question: "Is fumigation safe for my children and pets?", answer: "Yes. We use products approved for residential use. We advise vacating the treated area for the recommended re-entry time, which we explain clearly when you book." },
  { question: "Do you offer office and commercial cleaning?", answer: "Yes. We clean offices, banks, NGOs, schools, hotels, clinics and construction sites — both one-off and on recurring contracts. Ask about our after-hours commercial schedule." },
  { question: "What payment methods do you accept?", answer: "We accept bank transfer, POS and cash. Payment is due after you've inspected the work and are satisfied." },
  { question: "Do you have a satisfaction guarantee?", answer: "Yes — the Royal Guarantee. If any spot isn't up to standard, we return and re-clean it free within 48 hours. No questions asked." },
  { question: "How quickly can you come?", answer: "Most same-day bookings are dispatched within 2–3 hours. For urgent overnight or emergency cleans, our 24/7 team can usually arrive within an hour." },
  { question: "Do you offer recurring weekly or monthly cleaning?", answer: "Yes. We run discounted recurring contracts — weekly, fortnightly or monthly. Perfect for busy professionals, families and offices." },
  { question: "Can you clean an event venue?", answer: "Yes. We handle pre-event setup cleaning and post-event clean-up for weddings, conferences, parties and corporate events across Kaduna." },
  { question: "Do you have female cleaners available?", answer: "Yes. On request, we send all-female crews — common for ladies-only homes and certain religious or cultural preferences. Just mention it when booking." },
  { question: "Do your staff speak Hausa?", answer: "Yes. Our crews speak Hausa and English fluently, so communication is never a barrier — whether you're in GRA or Rigasa." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `Cleaning Service FAQs Kaduna | Common Questions | ${siteConfig.shortName}` },
      { name: "description", content: "Answers to the most common questions about cleaning, fumigation, pricing and 24/7 service in Kaduna. Royal Clean — Kaduna's only 24-hour cleaning company." },
      { property: "og:title", content: `Cleaning Service FAQs | ${siteConfig.name}` },
      { property: "og:description", content: "Common questions about our cleaning and fumigation service in Kaduna." },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.url}/faq` }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "FAQ", url: `${siteConfig.url}/faq` },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">FAQ</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold">
          Frequently Asked Questions About Our Cleaning Service in Kaduna
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to know about booking Royal Clean — Kaduna's only 24/7 cleaning and fumigation company.
        </p>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl border bg-card p-5 open:border-primary/60">
              <summary className="cursor-pointer font-semibold flex items-center justify-between gap-4">
                <span>{f.question}</span>
                <span className="ml-2 text-primary group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-foreground/85 leading-relaxed">{f.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border bg-card p-6 text-center">
          <h2 className="font-serif text-2xl font-bold">Still have a question?</h2>
          <p className="mt-2 text-muted-foreground">We respond within 5 minutes — 24 hours a day.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener" className="inline-flex h-11 items-center rounded-full bg-primary px-6 font-semibold text-primary-foreground">
              <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp us
            </a>
            <a href={telLink} className="inline-flex h-11 items-center rounded-full border px-6 font-semibold">
              <Phone className="mr-2 h-4 w-4" /> {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
