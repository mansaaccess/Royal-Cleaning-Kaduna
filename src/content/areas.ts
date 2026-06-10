import type { AreaPage } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// AREA PAGES REGISTRY (flat URLs)
// ─────────────────────────────────────────────────────────────────────────────

interface AreaConfig {
  slug: string;
  place: string;
  blurb: string;
  neighborhoods: string[];
  localContext: string[];
  testimonials: { name: string; location: string; quote: string; rating: number }[];
}

const buildArea = (c: AreaConfig): AreaPage => ({
  slug: c.slug,
  seo: {
    title: `Cleaning Service in ${c.place}, Kaduna | Royal Clean`,
    metaDescription: `Trusted home & office cleaning in ${c.place}, Kaduna. Sofa cleaning, deep cleaning & fumigation. Same-day booking. Fixed pricing. Call now.`,
    keywords: `cleaning service ${c.place}, house cleaning ${c.place} Kaduna, cleaners near me ${c.place}, fumigation ${c.place}`,
  },
  hero: {
    h1: `Cleaning Services in ${c.place}, Kaduna`,
    subhead: c.blurb,
  },
  neighborhoods: c.neighborhoods,
  intro: c.localContext,
  sections: [
    {
      heading: `Why ${c.place} residents choose Royal Clean`,
      bullets: [
        "Available 24 hours, 7 days a week — including Sundays and public holidays",
        "Same-day availability across every street",
        "Fixed transparent pricing — no travel surcharge in Kaduna",
        "Vetted, uniformed, insured cleaning crews",
        "Eco-friendly products safe for kids and pets",
        "Royal Guarantee — we re-clean free if not satisfied",
      ],
    },
    {
      heading: `Most-booked services in ${c.place}`,
      paragraphs: [
        `Households in ${c.place} most often book us for sofa and upholstery cleaning, monthly deep cleans, and fumigation against cockroaches and mosquitoes. Our weekly recurring contracts are popular with working families and small offices in the area.`,
      ],
    },
    {
      heading: `Local knowledge of ${c.place}`,
      paragraphs: [
        `Our crews live in Kaduna and know ${c.place} inside out — every estate gate, every back road, every market route. That local familiarity is why we can hit a 30-minute response window across the area, even at peak traffic.`,
      ],
    },
  ],
  popularServices: [
    "house-cleaning-kaduna",
    "sofa-upholstery-cleaning-kaduna",
    "deep-cleaning-kaduna",
    "fumigation-service-kaduna",
  ],
  testimonials: c.testimonials,
  faqs: [
    {
      question: `Do you charge extra for ${c.place}?`,
      answer: "No. Our pricing is fixed across all Kaduna neighborhoods — no travel surcharge.",
    },
    {
      question: `How fast can you reach ${c.place}?`,
      answer: `For emergency bookings we typically arrive in ${c.place} within 30–45 minutes. Standard appointments are scheduled at your preferred time, 24 hours a day.`,
    },
    {
      question: "Are your cleaners vetted?",
      answer: "Yes — every cleaner is background-checked, uniformed, trained and covered under our liability insurance.",
    },
    {
      question: "Can I book a recurring weekly clean?",
      answer: "Yes. Recurring clients get up to 15% off and priority scheduling. Weekly, fortnightly and monthly plans available.",
    },
  ],
});

export const areas: AreaPage[] = [
  buildArea({
    slug: "cleaning-service-kaduna-gra",
    place: "Kaduna GRA",
    blurb: "Premium cleaning for the executive homes, embassies and corporate residences of Kaduna GRA — discreet, vetted and on time.",
    neighborhoods: ["Old GRA", "New GRA", "Independence Way", "Constitution Road", "Yakubu Gowon Way"],
    localContext: [
      "Kaduna GRA is the city's most prestigious residential district — home to senior government officials, top executives, expatriate families and large duplex residences. Our GRA crews are trained for discretion, presentation and high-touch service that meets the standards expected here.",
      "We hold recurring contracts with several GRA households and corporate guest houses, with after-hours and weekend availability so cleaning never disrupts business or family routines.",
    ],
    testimonials: [
      { name: "Mrs. Okeke", location: "Old GRA", quote: "Reliable, well-presented and trustworthy. We've used Royal Clean weekly for over a year.", rating: 5 },
      { name: "Engr. Bello", location: "New GRA", quote: "The only Kaduna cleaning company I'd trust in my home unsupervised.", rating: 5 },
    ],
  }),
  {
    ...buildArea({
      slug: "cleaning-service-barnawa-kaduna",
      place: "Barnawa",
      blurb: "Royal Clean covers every street in Barnawa with vetted, uniformed cleaners and same-day availability.",
      neighborhoods: ["Barnawa Phase 1", "Barnawa Phase 2", "Barnawa Low-Cost", "NNPC Quarters"],
      localContext: [
        "Barnawa is one of Kaduna's most established residential areas — and one of the fastest-growing zones for our recurring cleaning contracts. Whether you're a family in a 4-bedroom duplex or a young professional in a 1-bedroom flat, Royal Clean has a package built for your space.",
        "Our crews live within Kaduna and reach Barnawa within 30 minutes for emergency bookings. We've cleaned homes, offices and event venues across every Barnawa phase.",
      ],
      testimonials: [
        { name: "Hauwa B.", location: "Barnawa Phase 2", quote: "I've used four cleaning companies in Kaduna. Royal Clean is in a different league.", rating: 5 },
      ],
    }),
  },
  buildArea({
    slug: "cleaning-service-narayi-kaduna",
    place: "Narayi",
    blurb: "Trusted home and apartment cleaning across Narayi High Cost and Narayi Low Cost — same-day, fixed-price, fully insured.",
    neighborhoods: ["Narayi High Cost", "Narayi Low Cost", "Sabon Tasha border"],
    localContext: [
      "Narayi is a busy mixed residential zone with a strong community of working families, civil servants and small business owners. Our most-requested services here are sofa cleaning, monthly deep cleans and full-house fumigation against cockroaches and mosquitoes — all at fixed prices with no travel surcharge.",
      "We run recurring weekly and fortnightly contracts across Narayi at a 15% discount versus one-off bookings.",
    ],
    testimonials: [
      { name: "Jamila S.", location: "Narayi High Cost", quote: "They cleaned a sofa I was about to throw out. Looks new again.", rating: 5 },
    ],
  }),
  buildArea({
    slug: "cleaning-service-sabon-gari-kaduna",
    place: "Sabon Gari",
    blurb: "Affordable, reliable cleaning and fumigation for homes, shops and small offices across Sabon Gari, Kaduna.",
    neighborhoods: ["Sabon Gari Market area", "Tudun Wada", "Kabala Doki"],
    localContext: [
      "Sabon Gari is one of Kaduna's most densely populated and commercially active areas. Shops, residential apartments and family compounds sit side by side — and pest pressure is high. Our fumigation and recurring cleaning contracts are particularly popular with shop owners and landlords here.",
      "We schedule services around market hours and offer early-morning and late-evening slots so businesses are never disrupted.",
    ],
    testimonials: [
      { name: "Musa I.", location: "Sabon Gari", quote: "Booked fumigation for my shop after roach problems. Six months later — still nothing.", rating: 5 },
    ],
  }),
  buildArea({
    slug: "cleaning-service-ungwan-rimi-kaduna",
    place: "Ungwan Rimi",
    blurb: "Premium home cleaning, deep cleaning and fumigation for residents of Ungwan Rimi — same-day booking available.",
    neighborhoods: ["Ungwan Rimi GRA", "Ungwan Rimi Township", "Ahmadu Bello Way axis"],
    localContext: [
      "Ungwan Rimi is a quiet, family-oriented neighborhood with a mix of long-established homes and new developments. Many of our recurring clients here book weekly or fortnightly visits, plus seasonal deep cleans before Sallah, Christmas and end-of-year.",
      "Crews assigned to Ungwan Rimi are familiar with the local estate layouts and security routines — bookings are smooth from first call to walkthrough.",
    ],
    testimonials: [
      { name: "Mrs. Yakubu", location: "Ungwan Rimi", quote: "Punctual, polite and thorough. I trust them with my house keys.", rating: 5 },
    ],
  }),
  buildArea({
    slug: "cleaning-service-kaduna-north",
    place: "Kaduna North",
    blurb: "Cleaning, fumigation and disinfection across Kaduna North — homes, offices and short-let apartments.",
    neighborhoods: ["Malali", "Unguwar Sarki", "Kawo", "Doka"],
    localContext: [
      "Kaduna North covers some of the city's busiest commercial corridors and most recognisable residential zones — from Malali to Kawo. We service homes, offices, banks and short-let apartments here, with same-day availability across the entire LGA.",
      "Airbnb and short-let hosts in Kaduna North use our turnover-cleaning service, with linen change and restocking included.",
    ],
    testimonials: [
      { name: "Aminu K.", location: "Malali", quote: "Best cleaning service I've used in Kaduna. Honest pricing, great team.", rating: 5 },
    ],
  }),
  buildArea({
    slug: "cleaning-service-kakuri-kaduna",
    place: "Kakuri",
    blurb: "Industrial, commercial and residential cleaning across Kakuri — including the Kakuri Industrial Area.",
    neighborhoods: ["Kakuri Industrial Area", "Kakuri Township", "Mando Road approach"],
    localContext: [
      "Kakuri sits at the heart of Kaduna's industrial corridor. We service factories, warehouses and processing plants in the Kakuri Industrial Area as well as homes in the surrounding township — with HSE-trained crews, industrial-grade equipment and after-hours scheduling that avoids production disruption.",
      "For residential clients, we offer the same fixed pricing and same-day availability as the rest of the city.",
    ],
    testimonials: [
      { name: "Plant Manager", location: "Kakuri Industrial Area", quote: "Reliable industrial cleaning partner. They follow our HSE protocols without us chasing.", rating: 5 },
    ],
  }),
  buildArea({
    slug: "cleaning-service-rigasa-kaduna",
    place: "Rigasa",
    blurb: "Honest, affordable cleaning and fumigation for Rigasa homes and small businesses — fixed pricing, no surcharge.",
    neighborhoods: ["Rigasa Township", "Rigasa Train Station axis", "Mando Road"],
    localContext: [
      "Rigasa is one of Kaduna's largest residential communities and a major commuter hub thanks to the Abuja–Kaduna train terminus. We service homes, rental properties and small businesses across Rigasa with the same fixed pricing and same-day availability we offer in GRA — no travel surcharge.",
      "Fumigation and post-construction cleaning are particularly active here as the area continues to develop.",
    ],
    testimonials: [
      { name: "Ibrahim A.", location: "Rigasa", quote: "Same fair price as my friend in GRA. That's the standard I expect.", rating: 5 },
    ],
  }),
];

export const getAreaBySlug = (slug: string) => areas.find((a) => a.slug === slug);
