import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero-luxury.jpg";
import {
  Sparkles, Sofa, Building2, Bug, Home, Hammer, Phone, Star, ShieldCheck,
  Crown, Check, ArrowRight, Clock, MapPin, Award, Leaf, Users, CalendarCheck,
  MessageSquare, ChevronDown, Quote, Zap, Diamond, ThumbsUp,
} from "lucide-react";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";
import { siteConfig, telLink, whatsappLink } from "@/config/site";
import { areas as areaPages } from "@/content/areas";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "24/7 Cleaning & Fumigation Kaduna | Royal Clean" },
      {
        name: "description",
        content:
          "Kaduna's 24/7 cleaning & fumigation service. House, deep, sofa & office cleaning plus pest control. Vetted crews, fixed pricing. Book in 5 minutes.",
      },
      { name: "keywords", content: "cleaning service Kaduna, fumigation Kaduna, house cleaning Kaduna, office cleaning Kaduna, sofa cleaning Kaduna, deep cleaning Kaduna, pest control Kaduna" },
      { property: "og:title", content: "24/7 Cleaning & Fumigation Kaduna | Royal Clean" },
      { property: "og:description", content: "Kaduna's only 24/7 cleaning & fumigation service. House, office, deep, sofa cleaning + pest control." },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [{ rel: "canonical", href: "https://royalcleankd.lovable.app/" }],
  }),
});

const services: { slug: string; icon: typeof Home; title: string; desc: string; group: "Cleaning" | "Fumigation" | "Specialist" }[] = [
  // Cleaning
  { group: "Cleaning", slug: "house-cleaning-kaduna", icon: Home, title: "House Cleaning", desc: "Spotless homes, weekly or one-time. Trained, vetted, uniformed cleaners." },
  { group: "Cleaning", slug: "deep-cleaning-kaduna", icon: Sparkles, title: "Deep Cleaning", desc: "Top-to-bottom deep cleans for move-in, move-out & seasonal refresh." },
  { group: "Cleaning", slug: "office-cleaning-kaduna", icon: Building2, title: "Office Cleaning", desc: "Janitorial service for offices, banks, clinics & retail. Recurring contracts available." },
  { group: "Cleaning", slug: "post-construction-cleaning-kaduna", icon: Hammer, title: "Post-Construction Cleaning", desc: "Industrial-grade cleanup for new builds, renovations & luxury apartments." },
  { group: "Cleaning", slug: "carpet-cleaning-kaduna", icon: Diamond, title: "Carpet Cleaning", desc: "Deep extraction for rugs and carpets — stain, dust & odour removal." },
  { group: "Cleaning", slug: "sofa-upholstery-cleaning-kaduna", icon: Sofa, title: "Sofa & Upholstery Cleaning", desc: "Steam-extraction for sofas, mattresses and upholstery. Restored & sanitised." },
  { group: "Cleaning", slug: "window-cleaning-kaduna", icon: Award, title: "Window Cleaning", desc: "Streak-free interior and exterior glass for homes and offices." },
  { group: "Cleaning", slug: "move-in-move-out-cleaning-kaduna", icon: CalendarCheck, title: "Move In / Move Out Cleaning", desc: "Hand over or move in to a spotless home. Landlord-ready finish." },
  // Fumigation
  { group: "Fumigation", slug: "fumigation-service-kaduna", icon: Bug, title: "Fumigation Service", desc: "Licensed, safe & effective pest treatment for homes and businesses." },
  { group: "Fumigation", slug: "pest-control-kaduna", icon: ShieldCheck, title: "Pest Control", desc: "Comprehensive pest elimination — rodents, ants, termites and more." },
  { group: "Fumigation", slug: "cockroach-treatment-kaduna", icon: Zap, title: "Cockroach Treatment", desc: "Fast, guaranteed roach elimination using gel baits and IGRs." },
  { group: "Fumigation", slug: "bed-bug-treatment-kaduna", icon: ThumbsUp, title: "Bed Bug Treatment", desc: "Complete bed bug elimination — heat & chemical treatment, guaranteed." },
  { group: "Fumigation", slug: "mosquito-control-kaduna", icon: Leaf, title: "Mosquito Control", desc: "Indoor & outdoor mosquito control to protect your family from malaria." },
  // Specialist
  { group: "Specialist", slug: "disinfection-sanitization-kaduna", icon: ShieldCheck, title: "Disinfection & Sanitization", desc: "Hospital-grade disinfection for homes, offices, schools and clinics." },
  { group: "Specialist", slug: "airbnb-short-let-cleaning-kaduna", icon: Clock, title: "Airbnb / Short-Let Cleaning", desc: "Fast same-day turnover cleaning for short-let hosts and property managers." },
  { group: "Specialist", slug: "event-cleaning-kaduna", icon: Users, title: "Event Cleaning", desc: "Pre-event, mid-event and post-event cleaning crews for any venue." },
  { group: "Specialist", slug: "industrial-cleaning-kaduna", icon: Building2, title: "Industrial Cleaning", desc: "Factory, warehouse and facility cleaning at industrial scale." },
];

const stats = [
  { num: "1,200+", label: "Homes & offices cleaned" },
  { num: "4.9★", label: "Average client rating" },
  { num: "100%", label: "Vetted & uniformed staff" },
  { num: "24/7", label: "Booking & support" },
];

const reasons = [
  "Insured, background-checked cleaning crews",
  "Eco-friendly, premium-grade products",
  "Fixed transparent pricing — no surprises",
  "Same-day & emergency cleaning available",
  "Recurring weekly & monthly plans",
  "Satisfaction guaranteed or we re-clean free",
];

const testimonials = [
  { name: "Aisha M.", role: "Malali, Kaduna", quote: "Royal Clean transformed our home before Sallah. Honestly the most professional cleaners in Kaduna." },
  { name: "Engr. Tunde O.", role: "Office Manager, Kaduna South", quote: "We switched our entire office janitorial contract to them. Reliable, discreet, immaculate." },
  { name: "Hauwa B.", role: "Barnawa", quote: "My sofa looks brand new. The fumigation combo is worth every naira." },
];

const process = [
  { step: "01", icon: MessageSquare, title: "Tell us your space", desc: "Share your address, rooms & preferred date via call or WhatsApp." },
  { step: "02", icon: CalendarCheck, title: "Get a fixed quote", desc: "Transparent pricing in under 5 minutes. No hidden fees, ever." },
  { step: "03", icon: Users, title: "Royal crew arrives", desc: "Uniformed, vetted cleaners arrive on time with premium equipment." },
  { step: "04", icon: ThumbsUp, title: "Inspect & enjoy", desc: "Walk-through inspection. Spotless or we re-clean free — guaranteed." },
];

const packages = [
  {
    name: "Imperial",
    tag: "Tailored to your space",
    price: "Custom",
    unit: "tailored quote",
    features: [
      "Recurring contracts",
      "Dedicated account manager",
      "Fumigation combo",
      "Post-construction add-on",
      "On-call emergency team",
    ],
    highlight: true,
  },
];

const areas = [
  "Malali", "Barnawa", "Narayi", "Ungwan Rimi", "Kaduna South", "Sabon Tasha",
  "Trikania", "Kawo", "Rigasa", "Tudun Wada", "Kabala", "Kakuri", "Gonin Gora", "Mando",
];

const faqs = [
  { q: "How fast can you send a crew in Kaduna?", a: "We offer same-day cleaning across Kaduna metropolis. Most bookings before 2pm get a crew dispatched within 3 hours." },
  { q: "Are your cleaners insured and vetted?", a: "Yes. Every Royal Clean crew member is background-checked, trained, uniformed and covered by liability insurance." },
  { q: "What products do you use?", a: "Hospitality-grade, eco-friendly products safe for kids, pets and asthmatic family members. Hospital-grade options available on request." },
  { q: "Do you offer fumigation alongside cleaning?", a: "Yes — our signature Fumigation + Cleaning combo handles pests and full sanitisation in one visit. Especially popular for new tenants." },
  { q: "What if I'm not satisfied?", a: "The Royal Guarantee: if any spot isn't up to standard, we return and re-clean it free within 48 hours. No questions." },
];

const trustBadges = [
  { icon: ShieldCheck, label: "Fully insured" },
  { icon: Leaf, label: "Eco-friendly" },
  { icon: Award, label: "5-star rated" },
  { icon: Zap, label: "Same-day service" },
  { icon: Diamond, label: "Premium grade" },
  { icon: Crown, label: "Royal Guarantee" },
  { icon: Users, label: "Vetted crews" },
  { icon: Clock, label: "On-time always" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <div className="reveal border border-border rounded-2xl bg-card overflow-hidden hover:border-gold/50 transition-colors" style={{ animationDelay: `${i * 60}ms` }}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <span className="font-serif text-lg md:text-xl font-semibold text-primary">{q}</span>
        <ChevronDown className={`w-5 h-5 text-gold-deep flex-shrink-0 transition-transform duration-500 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

function Index() {
  useReveal();
  const heroRef = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    const onScroll = () => setParallax(window.scrollY * 0.3);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury clean living room in Kaduna"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ transform: `translateY(${parallax}px) scale(1.1)` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/60 to-transparent" />

        {/* Floating decorative blobs */}
        <div className="absolute top-32 left-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

        <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 backdrop-blur border border-gold/30 text-gold-light text-xs font-semibold tracking-wider uppercase mb-6 animate-glow-pulse">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" /> Kaduna's #1 Premium Cleaning Service
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
              Luxury Cleaning,
              <br />
              <span className="text-gradient-gold">Royally Done.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
              Kaduna's most trusted name in <strong className="text-gold-light">house cleaning, office cleaning, deep cleaning,
              sofa cleaning</strong> and <strong className="text-gold-light">fumigation</strong>. Vetted crews, premium products,
              5-star results — every single visit.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="group inline-flex items-center gap-2 bg-gradient-gold text-emerald-deep font-bold px-8 py-4 rounded-full shadow-gold hover:shadow-luxury transition-all hover:-translate-y-1 shimmer-overlay">
                Book a Cleaning <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 border-2 border-gold/50 text-gold-light backdrop-blur px-8 py-4 rounded-full font-semibold hover:bg-gold/10 hover:border-gold transition">
                Explore Services
              </a>
            </div>

            <div className="flex items-center gap-6 mt-12 text-white/80 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-gold border-2 border-emerald-deep animate-scale-in" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current animate-scale-in" style={{ animationDelay: `${i * 80}ms` }} />)}
                </div>
                <div>Trusted by 1,200+ Kaduna homes & offices</div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex justify-end animate-float">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold rounded-3xl blur-2xl opacity-30 animate-glow-pulse" />
              <div className="relative bg-white/10 backdrop-blur-xl border border-gold/30 rounded-3xl p-8 shadow-luxury max-w-sm">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-8 h-8 text-gold" />
                  <div>
                    <div className="font-serif text-xl font-bold text-white">Royal Guarantee</div>
                    <div className="text-xs text-white/70">Spotless or we re-clean free</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {["Insured & vetted crews", "Eco-premium products", "Fixed transparent pricing", "Same-day availability"].map((t, i) => (
                    <div key={t} className="flex items-center gap-3 text-white/90 text-sm animate-slide-in-right" style={{ animationDelay: `${300 + i * 120}ms` }}>
                      <div className="w-5 h-5 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-deep" strokeWidth={3} />
                      </div>
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs flex flex-col items-center gap-2 animate-float">
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold to-transparent" />
          <span className="tracking-[0.3em] uppercase">Scroll</span>
        </div>
      </section>

      {/* JSON-LD: FAQ schema for homepage */}
      <JsonLd data={faqSchema(faqs.map((f) => ({ question: f.q, answer: f.a })))} />

      {/* 24/7 Availability Band */}
      <section aria-label="Availability" className="bg-gold text-emerald-deep">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-center">
          <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-sm">
            <Clock className="w-5 h-5 animate-spin-slow" />
            Available Right Now — 24 Hours, 7 Days a Week
          </div>
          <a href={telLink} className="inline-flex items-center gap-2 bg-emerald-deep text-gold px-5 py-2 rounded-full font-semibold text-sm hover:scale-105 transition">
            <Phone className="w-4 h-4" /> {siteConfig.phoneDisplay}
          </a>
        </div>
      </section>

      {/* Trust marquee */}
      <section className="bg-emerald-deep py-8 border-y border-gold/20 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...trustBadges, ...trustBadges].map((b, i) => (
            <div key={i} className="flex items-center gap-3 px-10 text-gold-light/80">
              <b.icon className="w-5 h-5 text-gold" />
              <span className="font-serif text-lg tracking-wide">{b.label}</span>
              <Diamond className="w-2 h-2 text-gold/50 ml-6" />
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-luxury py-16 border-b border-gold/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-blob" />
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="reveal text-center" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-2">{s.num}</div>
              <div className="text-white/70 text-sm uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold mb-4">Our Services</div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">
              Premium cleaning for <span className="text-gradient-luxury">every space in Kaduna</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From luxury apartments in Malali to corporate offices in Kaduna South — we deliver white-glove service tailored to you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <a
                href={`/${s.slug}`}
                key={s.slug}
                className="reveal group relative bg-card border border-border rounded-2xl p-8 shadow-elegant hover:shadow-luxury transition-all duration-500 hover:-translate-y-2 overflow-hidden block"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-gold rounded-full opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/5 group-hover:to-primary/5 transition-all duration-700" />
                <div className="relative">
                  <div className="text-[10px] tracking-[0.25em] uppercase text-gold-deep font-semibold mb-3">{s.group}</div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-luxury flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <s.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-gold-deep font-semibold text-sm group-hover:gap-3 transition-all">
                    View {s.title.toLowerCase()} details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-blob" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold mb-4">How it works</div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">
              Booking is <span className="text-gradient-luxury">effortless</span>
            </h2>
            <p className="text-muted-foreground text-lg">From hello to spotless in four refined steps.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            {process.map((p, i) => (
              <div key={p.step} className="reveal relative text-center" style={{ animationDelay: `${i * 130}ms` }}>
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-gradient-gold rounded-full blur-xl opacity-30 animate-glow-pulse" />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-luxury border-2 border-gold/40 flex items-center justify-center shadow-luxury">
                    <p.icon className="w-9 h-9 text-gold" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-gold text-emerald-deep font-serif font-bold flex items-center justify-center shadow-gold">
                    {p.step}
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="py-24 md:py-32 bg-gradient-luxury relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold rounded-full blur-[150px] opacity-20 animate-blob" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-glow rounded-full blur-[120px] opacity-30 animate-blob" style={{ animationDelay: "5s" }} />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-4">Why Royal Clean</div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The standard for <span className="text-gradient-gold">luxury cleaning</span> in Kaduna.
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              We combine hospitality-grade attention to detail with industrial reliability. Our crews are trained the way 5-star hotels train theirs.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-gold text-emerald-deep font-bold px-8 py-4 rounded-full shadow-gold hover:scale-105 hover:shadow-luxury transition-all">
              Request a quote <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div key={r} className="reveal flex items-start gap-3 bg-white/5 backdrop-blur-sm border border-gold/20 rounded-xl p-5 hover:border-gold/60 hover:bg-white/10 hover:-translate-y-1 transition-all duration-500" style={{ animationDelay: `${i * 90}ms` }}>
                <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-emerald-deep" strokeWidth={3} />
                </div>
                <p className="text-white/90 font-medium">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-24 md:py-32 bg-background relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold mb-4">Royal Packages</div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">
              Custom-built, <span className="text-gradient-luxury">no two spaces alike</span>
            </h2>
            <p className="text-muted-foreground text-lg">Every Kaduna home, office and estate is different. We build a quote around your exact space — no generic packages.</p>
          </div>

          <div className="grid md:grid-cols-1 gap-6 max-w-md mx-auto">
            {packages.map((p, i) => (
              <div
                key={p.name}
                className={`reveal relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  p.highlight
                    ? "bg-gradient-luxury text-white border-2 border-gold shadow-luxury"
                    : "bg-card border border-border shadow-elegant hover:shadow-luxury"
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {p.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-emerald-deep text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-gold animate-glow-pulse">
                    Tailored Quote
                  </div>
                )}
                <div className={`text-xs uppercase tracking-[0.3em] font-semibold mb-2 ${p.highlight ? "text-gold" : "text-gold-deep"}`}>{p.tag}</div>
                <h3 className={`font-serif text-3xl font-bold mb-4 ${p.highlight ? "text-white" : "text-primary"}`}>{p.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className={`font-serif text-4xl font-bold ${p.highlight ? "text-gradient-gold" : "text-primary"}`}>{p.price}</span>
                  <span className={p.highlight ? "text-white/60 text-sm" : "text-muted-foreground text-sm"}>{p.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-3 text-sm ${p.highlight ? "text-white/90" : "text-foreground/80"}`}>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${p.highlight ? "bg-gradient-gold" : "bg-primary/10"}`}>
                        <Check className={`w-3 h-3 ${p.highlight ? "text-emerald-deep" : "text-primary"}`} strokeWidth={3} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block text-center font-semibold py-3.5 rounded-full transition-all hover:scale-105 ${
                    p.highlight
                      ? "bg-gradient-gold text-emerald-deep shadow-gold"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold mb-4">Coverage</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Serving <span className="text-gradient-luxury">all of Kaduna</span>
            </h2>
            <p className="text-muted-foreground">From the heart of the city to the outer estates — your crew is minutes away.</p>
          </div>
          <div className="reveal flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {areaPages.map((a, i) => {
              const name = a.hero.h1.replace("Cleaning Services in ", "").replace(", Kaduna", "");
              return (
                <a
                  key={a.slug}
                  href={`/${a.slug}`}
                  className="group flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 hover:border-gold hover:bg-gradient-gold hover:text-emerald-deep hover:-translate-y-1 hover:shadow-gold transition-all duration-500 animate-scale-in"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <MapPin className="w-3.5 h-3.5 text-gold-deep group-hover:text-emerald-deep transition" />
                  <span className="text-sm font-medium">{name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="reveal text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold mb-4">Client Stories</div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary">Loved by Kaduna's finest</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="reveal bg-card border border-border rounded-2xl p-8 shadow-elegant hover:shadow-luxury hover:-translate-y-2 transition-all duration-500 relative group"
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/20 group-hover:text-gold/40 transition" />
                <div className="flex gap-0.5 text-gold mb-5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <blockquote className="text-foreground/90 leading-relaxed mb-6 font-serif text-lg">"{t.quote}"</blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center font-serif font-bold text-emerald-deep">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-32 bg-secondary relative">
        <div className="max-w-3xl mx-auto px-6">
          <div className="reveal text-center mb-12">
            <div className="text-xs uppercase tracking-[0.3em] text-gold-deep font-semibold mb-4">Questions</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">Frequently asked</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => <FAQItem key={f.q} q={f.q} a={f.a} i={i} />)}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-light/10 via-transparent to-primary/5" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold-deep text-xs font-semibold tracking-wider uppercase mb-6 animate-glow-pulse">
            <Crown className="w-3.5 h-3.5" /> Book Royal Service
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">
            Ready for a <span className="text-gradient-luxury">spotless</span> space?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Get a free, fixed quote in under 5 minutes. Same-day cleaning available across Kaduna — Malali, Barnawa, Narayi, Ungwan Rimi, Kaduna South & beyond.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10">
            <a href={telLink} className="group flex items-center justify-center gap-3 bg-gradient-luxury text-white px-6 py-5 rounded-2xl shadow-luxury hover:shadow-gold transition-all hover:-translate-y-1">
              <Phone className="w-5 h-5 text-gold group-hover:rotate-12 transition" />
              <div className="text-left">
                <div className="text-xs text-white/60 uppercase tracking-wider">Call us</div>
                <div className="font-semibold">{siteConfig.phoneDisplay}</div>
              </div>
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 bg-gradient-gold text-emerald-deep px-6 py-5 rounded-2xl shadow-gold hover:shadow-luxury transition-all hover:-translate-y-1 shimmer-overlay">
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition" />
              <div className="text-left">
                <div className="text-xs opacity-70 uppercase tracking-wider">WhatsApp</div>
                <div className="font-bold">Chat & book instantly</div>
              </div>
            </a>
          </div>

          <p className="text-sm text-muted-foreground">Serving all of Kaduna metropolis · Open 24 hours, 7 days a week</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-deep text-white/70 py-12 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center">
              <Crown className="w-4 h-4 text-emerald-deep" />
            </div>
            <div>
              <div className="font-serif font-bold text-white">Royal Clean Kaduna</div>
              <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Luxury cleaning services</div>
            </div>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#services" className="hover:text-gold transition">Services</a>
            <a href="#packages" className="hover:text-gold transition">Packages</a>
            <a href="#faq" className="hover:text-gold transition">FAQ</a>
            <a href="#contact" className="hover:text-gold transition">Contact</a>
          </div>
          <div className="text-sm">© {new Date().getFullYear()} Royal Clean Kaduna</div>
        </div>
      </footer>

      {/* Floating WhatsApp/Call buttons rendered globally via FloatingActions */}
    </div>
  );
}
