import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, GraduationCap, BadgeCheck } from "lucide-react";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/our-team")({
  head: () => ({
    meta: [
      { title: `Our Team | ${siteConfig.name} — Vetted Kaduna Cleaners` },
      { name: "description", content: `Meet the vetted, uniformed, insured cleaning crew behind ${siteConfig.name} — Kaduna's 24/7 premium cleaning service.` },
      { property: "og:title", content: `Our Team | ${siteConfig.name}` },
      { property: "og:description", content: "Meet the people behind Kaduna's most trusted cleaning service." },
      { property: "og:image", content: `${siteConfig.url}/og-image.jpg` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.url}/our-team` }],
  }),
  component: TeamPage,
});

const pillars = [
  { icon: Shield, title: "Background-checked", body: "Every cleaner clears identity verification, reference checks and a clean police record before stepping into a client's home." },
  { icon: GraduationCap, title: "Trained on hospitality standards", body: "Crews are trained on 60+ point cleaning checklists used in luxury hotels — covering chemistry, surfaces, safety and customer interaction." },
  { icon: BadgeCheck, title: "Uniformed and insured", body: "On-site, our team is always uniformed, ID-badged and covered under comprehensive liability insurance for your peace of mind." },
];

function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Our Team</p>
      <h1 className="font-serif text-4xl md:text-5xl font-bold">The people behind Royal Clean Kaduna</h1>
      <p className="mt-6 text-lg text-foreground/85 leading-relaxed">
        Our cleaners are the heart of the business. Every member of the Royal Clean team is a Kaduna resident,
        background-checked, professionally trained and held to a hospitality-grade standard. When we send a crew
        to your home or business, you're not getting a stranger — you're getting a vetted professional who takes
        pride in the work.
      </p>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-2xl border bg-card p-6">
            <p.icon className="h-7 w-7 text-primary" />
            <h2 className="mt-4 font-serif text-xl font-bold">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold">How we hire</h2>
        <ol className="mt-4 space-y-3 text-foreground/85 leading-relaxed">
          <li><span className="font-semibold text-primary">1. Application & references</span> — every applicant submits two verifiable references from previous employment.</li>
          <li><span className="font-semibold text-primary">2. Background verification</span> — identity, address and police-record checks before any interview.</li>
          <li><span className="font-semibold text-primary">3. Practical assessment</span> — candidates clean a real space under supervision.</li>
          <li><span className="font-semibold text-primary">4. Two-week paid training</span> — chemistry, equipment, checklists, customer service.</li>
          <li><span className="font-semibold text-primary">5. Mentored first month</span> — every new hire works alongside a senior cleaner for their first 30 days.</li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-2xl md:text-3xl font-bold">Working with us</h2>
        <p className="mt-3 text-foreground/85 leading-relaxed">
          We're always looking for committed, honest people to join the team. If you live in Kaduna and want to
          build a career in professional cleaning, get in touch via our <Link to="/contact" className="text-primary underline">contact page</Link>.
        </p>
      </section>

      <section className="mt-12 rounded-2xl border bg-card p-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold">Book a vetted Royal Clean crew today</h2>
        <p className="mt-3 text-muted-foreground">Available 24/7 across every Kaduna neighborhood.</p>
        <Link to="/contact" className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 font-semibold text-primary-foreground shadow-lg shadow-primary/25">
          Get a quote
        </Link>
      </section>
    </div>
  );
}
