import heroImg from "@/assets/hero-luxury.jpg";
import type { ServicePage, ProcessStep } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES REGISTRY — Royal Clean Kaduna (flat URLs at /[slug])
// All 17 service pages populated with rich SEO content.
// ─────────────────────────────────────────────────────────────────────────────

const standardProcess: ProcessStep[] = [
  { title: "Call or WhatsApp", description: "Tell us what you need. We confirm your slot in under 5 minutes." },
  { title: "Transparent quote", description: "Fixed price upfront — no hidden fees, no surprises on the day." },
  { title: "We arrive equipped", description: "Uniformed, vetted crew arrives on time with all tools and products." },
  { title: "Inspect & pay", description: "Walk-through together. You only pay when fully satisfied." },
];

const trustBullets = [
  "Available 24 hours, 7 days a week — only one in Kaduna",
  "Trained, uniformed, background-checked staff",
  "Eco-friendly products safe for children and pets",
  "Transparent pricing — no hidden charges",
  "100% satisfaction guarantee — we return free if not happy",
  "Fully insured service across all Kaduna zones",
];

// ─────────────────────────────────────────────────────────────────────────────
// CLEANING SERVICES (×8)
// ─────────────────────────────────────────────────────────────────────────────

const houseCleaning: ServicePage = {
  slug: "house-cleaning-kaduna",
  seo: {
    title: "House Cleaning Kaduna | 24/7 Home Cleaners | Royal Clean",
    metaDescription:
      "Professional house cleaning in Kaduna — available 24/7. Bedrooms, kitchens, bathrooms cleaned by vetted, uniformed staff. Eco-friendly, insured. Book today.",
    keywords:
      "house cleaning Kaduna, home cleaning Kaduna, domestic cleaners Kaduna, residential cleaning Kaduna, cleaners near me Kaduna",
  },
  hero: {
    eyebrow: "Residential Cleaning",
    h1: "House Cleaning Service in Kaduna — Spotless Homes, Every Time",
    subhead:
      "Kaduna's only 24/7 home cleaning service. Vetted, uniformed cleaners. Eco-friendly products safe for children and pets. Book in under 5 minutes.",
    image: heroImg,
  },
  intro: [
    "Royal Clean Kaduna provides professional house cleaning across every neighborhood in Kaduna — from GRA and Barnawa to Narayi, Sabon Gari and Ungwan Rimi. We are the only cleaning company in Kaduna available 24 hours, 7 days a week, so whether you need a one-off clean before guests arrive or a regular weekly service, we are ready when you are.",
    "Our cleaners are background-checked, uniformed and trained on hospitality-grade standards. Every clean uses eco-friendly products that are safe for children and pets, and every job is backed by our Royal Guarantee — if you are not satisfied, we return free of charge.",
  ],
  sections: [
    {
      heading: "What our house cleaning includes",
      paragraphs: [
        "Every standard house clean covers the full property top to bottom. We do not cut corners — your home is treated like our own.",
      ],
      bullets: [
        "Bedrooms — dusting, vacuuming, mopping, bed-making and light tidying",
        "Living rooms — sofas wiped, floors mopped, surfaces dusted, decor cleaned",
        "Kitchen — worktops, sink, cooker top, microwave, cupboard exteriors",
        "Bathrooms — toilet, sink, tiles, shower, mirrors, polished and disinfected",
        "General — interior windows, skirting boards, light switches, door handles",
        "Floors — sweeping, vacuuming and mopping of all hard surfaces and rugs",
      ],
    },
    {
      heading: "Standard clean vs deep clean — which do you need?",
      paragraphs: [
        "A standard house clean is for homes that are already maintained and need regular upkeep — weekly, fortnightly or monthly. A deep clean is for homes that have been neglected, are moving in or out, or need a seasonal reset that covers inside cupboards, behind appliances and grout lines.",
        "If your home hasn't had a professional clean in over 3 months, we usually recommend starting with a deep clean and then moving onto a standard recurring schedule.",
      ],
    },
    {
      heading: "How often should you clean your home?",
      bullets: [
        "Weekly — busy families, pets, young children, working professionals",
        "Fortnightly — couples, smaller homes, low-traffic households",
        "Monthly — single occupants, frequent travellers, light use",
        "One-off — pre-event, post-party, before guests, seasonal refresh",
      ],
    },
    {
      heading: "Our cleaning products — eco-friendly and child-safe",
      paragraphs: [
        "Every product we use is biodegradable and certified safe for use around children, pregnant women and pets. We avoid harsh ammonia and bleach unless specifically requested for stain removal in bathrooms. On request, we can use fragrance-free options for sensitive households.",
      ],
    },
    {
      heading: "Why choose Royal Clean for house cleaning",
      bullets: trustBullets,
    },
    {
      heading: "Areas we cover in Kaduna",
      paragraphs: [
        "We service every major neighborhood including Kaduna GRA, Barnawa, Narayi, Sabon Gari, Ungwan Rimi, Kakuri, Rigasa, Kaduna North, Malali, Kawo and surrounding zones. Same-day bookings are typically available across all areas.",
      ],
    },
  ],
  process: standardProcess,
  pricing: {
    note: "Prices are estimates for standard homes in Kaduna. Final quote depends on property size and condition.",
    tiers: [
      {
        name: "1–2 Bedroom",
        price: "₦10,000",
        unit: "per visit",
        features: ["Full standard clean", "All rooms covered", "Eco-friendly products", "2–3 hour service"],
      },
      {
        name: "3–4 Bedroom",
        price: "₦18,000",
        unit: "per visit",
        features: ["Full standard clean", "All rooms covered", "Eco-friendly products", "Priority scheduling"],
        highlight: true,
        tag: "Most booked",
      },
      {
        name: "5+ Bedroom / Duplex",
        price: "₦30,000",
        unit: "per visit",
        features: ["Multi-cleaner team", "Full standard clean", "Eco-friendly products", "Same-day available"],
      },
    ],
  },
  testimonials: [
    {
      name: "Aisha M.",
      location: "Barnawa, Kaduna",
      quote: "I switched from another company after one clean. The attention to detail is on another level.",
      rating: 5,
    },
    {
      name: "Mr. & Mrs. Okeke",
      location: "Kaduna GRA",
      quote: "Reliable, punctual and trustworthy. We've used them weekly for over a year.",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "How long does a house cleaning take in Kaduna?",
      answer:
        "A standard 2-bedroom apartment takes 2–3 hours. A 4-bedroom house typically takes 4–5 hours with a 2-person crew. Larger homes are scheduled with bigger teams to keep the visit short.",
    },
    {
      question: "Do I need to provide cleaning supplies?",
      answer:
        "No. Royal Clean brings everything — eco-friendly detergents, microfiber cloths, mops, vacuums and protective gear. You don't need to provide anything except access to the property.",
    },
    {
      question: "Are your cleaners insured and vetted?",
      answer:
        "Yes. Every cleaner is background-checked, uniformed, trained and covered under our liability insurance. Your home and belongings are fully protected.",
    },
    {
      question: "Can you clean while I'm not home?",
      answer:
        "Absolutely. Many clients give us secure access via key, code or estate security. We send you photos of the completed work.",
    },
    {
      question: "Do you offer recurring weekly or monthly contracts?",
      answer:
        "Yes — and recurring clients get up to 15% off standard rates plus priority scheduling. Ask about our weekly, fortnightly and monthly plans.",
    },
  ],
  schema: {
    serviceType: "House Cleaning",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦10,000 – ₦30,000",
  },
  related: ["deep-cleaning-kaduna", "sofa-upholstery-cleaning-kaduna", "fumigation-service-kaduna"],
};

const deepCleaning: ServicePage = {
  slug: "deep-cleaning-kaduna",
  seo: {
    title: "Deep Cleaning Kaduna | Thorough Deep Clean Service | Royal Clean",
    metaDescription:
      "Professional deep cleaning service in Kaduna. We clean every corner — inside cupboards, behind appliances, grout lines, ovens and more. Book today.",
    keywords:
      "deep cleaning Kaduna, deep clean service Kaduna, spring cleaning Kaduna, thorough cleaning Kaduna, one-off cleaning Kaduna",
  },
  hero: {
    eyebrow: "Top-to-Bottom Deep Cleaning",
    h1: "Deep Cleaning Service in Kaduna — Every Corner, Every Surface",
    subhead:
      "Going beyond surface cleaning. We clean inside cupboards, behind appliances, grout lines, light fittings — areas standard cleans never reach.",
  },
  intro: [
    "A Royal Clean deep clean in Kaduna is a full top-to-bottom reset of your home. Unlike a standard clean, every corner, crevice, appliance interior and grout line gets attention. This is the service our clients book before moving in, after renovations, or once or twice a year for a seasonal refresh.",
    "Our deep cleans use a 60+ point checklist, professional-grade equipment and eco-friendly products safe for children and pets. We work in 2–4 person teams to finish even large homes in a single visit.",
  ],
  sections: [
    {
      heading: "What makes deep cleaning different from standard cleaning?",
      paragraphs: [
        "Standard cleaning maintains a home that's already in good order. Deep cleaning resets a home that has accumulated dirt, grime, grease and dust in places normal cleans don't touch. It is intensive, thorough and typically takes 2–3 times longer than a regular service.",
      ],
    },
    {
      heading: "What deep cleaning covers that standard doesn't",
      bullets: [
        "Inside cupboards, drawers, wardrobes and pantries",
        "Behind and under fridges, ovens, washing machines and beds",
        "Grout lines scrubbed, tiles deep-cleaned in kitchens and bathrooms",
        "Inside oven, microwave, fridge and freezer",
        "Light fittings, ceiling fans and chandeliers",
        "Skirting boards, door frames, architraves and switch plates",
        "Window tracks, frames, sills and blinds",
        "Extractor fan, range hood and filters",
        "Walls spot-cleaned for marks and fingerprints",
      ],
    },
    {
      heading: "When do you need a deep clean?",
      bullets: [
        "Moving into a new home — start fresh",
        "Moving out — get your deposit back in full",
        "After renovations or construction work",
        "Seasonal — Eid, Christmas, Sallah, end-of-year reset",
        "After illness in the household",
        "Pre-event — before hosting family or guests",
      ],
    },
    {
      heading: "How long does a deep clean take?",
      paragraphs: [
        "A 2-bedroom apartment typically takes 4–6 hours with a 2-person team. A 4-bedroom house takes 6–8 hours with a 3-person team. Larger duplexes and mansions are scheduled with 4+ cleaners and may run across two days.",
      ],
    },
    {
      heading: "Our deep cleaning team and equipment",
      bullets: [
        "Industrial-grade vacuums with HEPA filters",
        "Steam cleaners for grout, tiles and tough grease",
        "Specialised oven and fridge cleaning agents",
        "Eco-friendly multi-surface degreasers",
        "Microfiber systems to avoid cross-contamination",
        "2–4 person teams trained on a 60+ point checklist",
      ],
    },
  ],
  process: standardProcess,
  pricing: {
    note: "Deep clean pricing varies by property size and condition. Heavily soiled homes may add a small premium.",
    tiers: [
      {
        name: "1–2 Bedroom",
        price: "₦25,000",
        unit: "per deep clean",
        features: ["60+ point checklist", "Inside oven & fridge", "Grout & tile scrubbing", "4–6 hour service"],
      },
      {
        name: "3–4 Bedroom",
        price: "₦45,000",
        unit: "per deep clean",
        features: ["Everything in 1-2 BR", "3-person team", "Priority scheduling", "Free re-clean if unhappy"],
        highlight: true,
        tag: "Most popular",
      },
      {
        name: "Duplex / 5+ BR",
        price: "₦80,000+",
        unit: "per deep clean",
        features: ["4+ person team", "Custom checklist", "Same-day or 2-day option", "Site visit available"],
      },
    ],
  },
  testimonials: [
    {
      name: "Fatima A.",
      location: "Narayi, Kaduna",
      quote: "I didn't recognise my own kitchen. The oven looked brand new. Worth every kobo.",
      rating: 5,
    },
    {
      name: "Engr. Bello",
      location: "Kaduna GRA",
      quote: "Booked them after a 6-month renovation. They removed cement dust I thought was permanent.",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "How long does a deep clean take?",
      answer:
        "Expect 4–8 hours depending on property size and condition. A 2-bedroom is typically 4–6 hours; a 4-bedroom is 6–8 hours. We deploy bigger teams to keep the visit short.",
    },
    {
      question: "What is NOT included in a deep clean?",
      answer:
        "Exterior windows above ground floor, carpet shampooing and sofa steam-cleaning are separate services. We can bundle them at a discount on request.",
    },
    {
      question: "How often should I book a deep clean?",
      answer:
        "Most homes need a deep clean every 3–6 months between standard recurring cleans. Larger families with pets often book quarterly.",
    },
    {
      question: "Are your deep clean products safe for children and pets?",
      answer:
        "Yes. All products are eco-friendly and certified non-toxic. We use fragrance-free options on request for asthma or sensitivity concerns.",
    },
    {
      question: "Do I need to be home during the deep clean?",
      answer:
        "No. Many clients give us secure access and review photos of the finished work afterwards.",
    },
  ],
  schema: {
    serviceType: "Deep Cleaning",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦25,000 – ₦80,000",
  },
  related: ["house-cleaning-kaduna", "move-in-move-out-cleaning-kaduna", "post-construction-cleaning-kaduna"],
};

const officeCleaning: ServicePage = {
  slug: "office-cleaning-kaduna",
  seo: {
    title: "Office Cleaning Kaduna | Commercial Cleaning Service | Royal Clean",
    metaDescription:
      "Professional office and commercial cleaning in Kaduna. Daily, weekly or monthly contracts for businesses, banks, NGOs and government offices.",
    keywords:
      "office cleaning Kaduna, commercial cleaning Kaduna, janitorial service Kaduna, corporate cleaning Kaduna, business cleaning Kaduna",
  },
  hero: {
    eyebrow: "Commercial & Corporate",
    h1: "Office Cleaning Service in Kaduna — Professional Commercial Cleaning",
    subhead:
      "Reliable janitorial contracts for offices, banks, NGOs, schools and clinics across Kaduna. After-hours service, vetted staff, flexible terms.",
  },
  intro: [
    "Royal Clean Kaduna runs commercial cleaning contracts for some of the most discerning businesses in Kaduna — financial institutions, international NGOs, government agencies, schools and healthcare facilities. We bring corporate-grade reliability, vetted staff and after-hours scheduling so your operations are never disrupted.",
    "Whether you need daily janitorial coverage for a head office or weekly servicing for a satellite branch, we structure the contract around your hours, your compliance requirements and your budget — with no long-term lock-in.",
  ],
  sections: [
    {
      heading: "Why offices need professional cleaning",
      paragraphs: [
        "A clean office is not cosmetic — it directly impacts staff productivity, sick-day rates, client perception and regulatory compliance. Bacteria on shared keyboards, phones and door handles spread illness rapidly in shared spaces. Professional cleaning is a measurable productivity investment, not an expense.",
      ],
    },
    {
      heading: "Our office cleaning services",
      bullets: [
        "Daily janitorial — for high-traffic offices, banks, clinics",
        "Weekly cleaning — small offices, professional services firms",
        "Monthly deep cleaning — alongside daily light cleaning",
        "One-off corporate cleans — pre-launch, post-event, AGMs",
        "After-hours service — we work around your business hours",
      ],
    },
    {
      heading: "What we clean in your office",
      bullets: [
        "Workstations, desks, monitors, keyboards and phones",
        "Meeting rooms, boardrooms and conference facilities",
        "Reception, lobby and common areas",
        "Toilets, kitchens and break rooms — sanitised daily",
        "Floors — vacuum, mop, polish (marble, tile, vinyl, carpet)",
        "Bins emptied and liners replaced",
        "Glass doors, partitions and interior windows",
      ],
    },
    {
      heading: "Industries we serve in Kaduna",
      bullets: [
        "Banks and financial institutions",
        "NGOs and international organisations",
        "Government ministries and agencies",
        "Schools, universities and educational institutes",
        "Healthcare — hospitals, clinics, pharmacies",
        "Hotels, guesthouses and short-let operators",
        "Retail outlets, supermarkets and showrooms",
      ],
    },
    {
      heading: "After-hours and weekend cleaning",
      paragraphs: [
        "We clean after your team has left so your office is fresh and ready when they arrive in the morning. For 24/7 operations like banks and clinics, we coordinate cleaning windows around lower-traffic periods.",
      ],
    },
    {
      heading: "Staff vetting and security",
      bullets: [
        "All cleaners background-checked and reference-verified",
        "Uniformed with photo ID badges",
        "Trained on confidentiality — sign NDAs on request",
        "Liability and theft insurance included",
        "Supervisor on-site for larger contracts",
      ],
    },
    {
      heading: "Flexible contract terms",
      paragraphs: [
        "Royal Clean does not lock clients into long contracts. Most office contracts are month-to-month with 30 days' notice, so you keep control. We structure pricing per visit or as a flat monthly fee — whichever works for your finance team.",
      ],
    },
  ],
  process: [
    { title: "Book a site visit", description: "We come, measure and understand your operations — at no cost." },
    { title: "Custom quote", description: "Within 24 hours: detailed scope, schedule and monthly price." },
    { title: "Onboarding", description: "Vetted crew assigned, NDA signed, access cards configured." },
    { title: "Service starts", description: "Daily/weekly cleaning with monthly performance review." },
  ],
  pricing: {
    note: "Office contracts are quoted per site visit. Below are typical starting rates for monthly contracts.",
    tiers: [
      {
        name: "Small Office",
        price: "₦80,000",
        unit: "per month",
        features: ["Up to 1,000 sqft", "Daily clean (Mon–Fri)", "After-hours service", "Supplies included"],
      },
      {
        name: "Medium Office",
        price: "₦180,000",
        unit: "per month",
        features: ["1,000–3,000 sqft", "Daily clean (Mon–Sat)", "Supervisor on-site", "Monthly deep clean"],
        highlight: true,
        tag: "Most contracts",
      },
      {
        name: "Enterprise",
        price: "Custom",
        unit: "site-visit quote",
        features: ["3,000+ sqft", "Multi-crew teams", "24/7 coverage option", "Compliance reporting"],
      },
    ],
  },
  testimonials: [
    {
      name: "Operations Manager",
      location: "Bank in Kaduna GRA",
      quote: "Royal Clean replaced two previous vendors. Reliability and reporting are unmatched in Kaduna.",
      rating: 5,
    },
    {
      name: "HR Lead",
      location: "International NGO, Kaduna",
      quote: "Their staff are professional, discreet and on time. Compliance documentation is always ready.",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "Do you provide cleaning supplies and equipment?",
      answer:
        "Yes. All consumables — detergents, paper towels, toilet paper, hand soap — and equipment are included in the monthly contract. You don't manage anything.",
    },
    {
      question: "Can you clean on weekends or public holidays?",
      answer:
        "Yes. We operate 24/7 and offer weekend, evening and holiday cleaning at no premium rate for contract clients.",
    },
    {
      question: "How quickly can a contract start?",
      answer:
        "Typically within 5–7 business days from contract signing — including site visit, staff vetting and access setup.",
    },
    {
      question: "Are your cleaners EHCON certified?",
      answer:
        "Our specialised pest control technicians are EHCON certified. Cleaning crews are trained internally to international janitorial standards.",
    },
    {
      question: "Can we cancel the contract if not satisfied?",
      answer:
        "Yes. All contracts are month-to-month with 30 days' notice. We earn your business every month — no long-term lock-in.",
    },
  ],
  schema: {
    serviceType: "Commercial Cleaning",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦80,000 – ₦500,000+ per month",
  },
  related: ["industrial-cleaning-kaduna", "disinfection-sanitization-kaduna", "fumigation-service-kaduna"],
};

const postConstruction: ServicePage = {
  slug: "post-construction-cleaning-kaduna",
  seo: {
    title: "Post Construction Cleaning Kaduna | After Build Cleaning | Royal Clean",
    metaDescription:
      "Professional post-construction cleaning in Kaduna. We remove dust, debris, cement and paint from new builds and renovations. Fast, thorough, reliable.",
    keywords:
      "post construction cleaning Kaduna, after build cleaning Kaduna, builders clean Kaduna, renovation cleanup Kaduna, handover cleaning Kaduna",
  },
  hero: {
    eyebrow: "New Builds & Renovations",
    h1: "Post Construction Cleaning in Kaduna — New Build & Renovation Clean-Up",
    subhead:
      "Industrial-grade cleanup for new homes and renovated properties. We remove cement dust, paint splatters and debris so you can move in immediately.",
  },
  intro: [
    "Post-construction cleaning is one of the most demanding cleaning categories — and one of the most underrated. New builds and renovations leave behind cement dust, paint, adhesive residue and microscopic debris that ordinary cleaning cannot handle. Royal Clean Kaduna is one of the few companies in the city with the equipment and trained crews to deliver true handover-grade cleaning.",
    "Whether you are a property developer handing over to a buyer, a homeowner finishing a renovation, or a business completing a new fit-out, we deliver a property that looks, smells and feels brand new.",
  ],
  sections: [
    {
      heading: "What post-construction cleaning involves",
      paragraphs: [
        "Post-construction cleaning is fundamentally different from regular cleaning. Construction generates ultra-fine dust that penetrates every surface, settles inside light fittings and HVAC vents, and triggers respiratory issues. We use industrial vacuums with HEPA filtration, multi-stage wet cleaning and specialist agents to remove every trace.",
      ],
    },
    {
      heading: "What we remove",
      bullets: [
        "Cement and concrete dust — every surface, every crevice",
        "Paint splatters from floors, glass, fittings and sockets",
        "Adhesive and silicone residue",
        "Plaster and POP dust from skirting, ceilings and corners",
        "Sticker and tape residue from windows and appliances",
        "Construction debris and packaging waste",
        "Tile grout haze and protective film",
      ],
    },
    {
      heading: "Our post-construction cleaning process",
      paragraphs: [
        "We work in three stages to ensure no dust is missed and no surface is damaged.",
      ],
      bullets: [
        "Stage 1 — Rough clean: debris and waste removal, gross dust extraction",
        "Stage 2 — Detail clean: surface scrubbing, fitting cleaning, paint removal",
        "Stage 3 — Final touch: polish, glass cleaning, handover-grade finish",
      ],
    },
    {
      heading: "Equipment we use",
      bullets: [
        "Industrial HEPA-filter vacuums",
        "Pressure washers for exterior surfaces",
        "Specialised cement and paint removers",
        "Telescopic poles for high-level cleaning",
        "Window squeegees and scrapers",
        "Truck-mounted extractors for large sites",
      ],
    },
    {
      heading: "How long it takes",
      paragraphs: [
        "A 3-bedroom new build typically takes 1–2 days with a 4-person team. Larger properties and commercial fit-outs take 3–5 days. Site visits are free — we quote precisely after seeing the scope.",
      ],
    },
    {
      heading: "Who books post-construction cleaning",
      bullets: [
        "Homeowners completing renovations or new builds",
        "Property developers handing over to buyers",
        "Estate developers — multi-unit handover packages",
        "Businesses completing new office fit-outs",
        "Contractors needing handover certification",
      ],
    },
    {
      heading: "Why you can't do this yourself",
      paragraphs: [
        "Construction dust contains silica, which causes long-term lung damage. Without HEPA filtration and proper PPE, DIY cleaning spreads dust further into HVAC systems and soft furnishings. Professional post-construction cleaning is a health investment, not a luxury.",
      ],
    },
  ],
  process: standardProcess,
  pricing: {
    note: "Post-construction cleaning is quoted per site visit. Below are typical starting rates.",
    tiers: [
      {
        name: "1–2 Bedroom",
        price: "₦70,000",
        unit: "per project",
        features: ["3-stage cleaning", "HEPA vacuums", "Cement & paint removal", "Handover-ready finish"],
      },
      {
        name: "3–4 Bedroom",
        price: "₦120,000",
        unit: "per project",
        features: ["Everything in 1-2 BR", "4-person team", "1–2 day completion", "Free re-touch"],
        highlight: true,
        tag: "Most projects",
      },
      {
        name: "Duplex / Commercial",
        price: "₦250,000+",
        unit: "site-visit quote",
        features: ["Multi-day project", "Site supervisor", "Compliance reporting", "Developer handover pack"],
      },
    ],
  },
  testimonials: [
    {
      name: "Property Developer",
      location: "Kaduna",
      quote: "We've used Royal Clean on 14 handovers. Buyers walk in and think the house has never been touched.",
      rating: 5,
    },
    {
      name: "Mrs. Yusuf",
      location: "Malali, Kaduna",
      quote: "After a 4-month renovation I thought my house was unliveable. Two days later it was perfect.",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "How long after construction should I book the clean?",
      answer:
        "Ideally within 48 hours of construction completion, before dust settles deeper. We can also clean partially-occupied homes if work overran.",
    },
    {
      question: "Do you remove construction debris and waste?",
      answer:
        "Yes. Light debris and packaging are included. Heavy rubble and skip-load disposal are quoted separately on the site visit.",
    },
    {
      question: "Can you clean before the handover deadline?",
      answer:
        "Yes. We routinely deliver same-week handover cleans for developers. Book early to lock the slot.",
    },
    {
      question: "What if dust returns after we move in?",
      answer:
        "Construction dust can re-emerge from HVAC vents for weeks. We offer a 14-day re-clean option at 50% off to address this.",
    },
    {
      question: "Do you handle multi-unit estate handovers?",
      answer:
        "Absolutely. We schedule sequential handover cleans for estate developers with dedicated multi-crew teams.",
    },
  ],
  schema: {
    serviceType: "Post-Construction Cleaning",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦70,000 – ₦500,000+",
  },
  related: ["deep-cleaning-kaduna", "industrial-cleaning-kaduna", "move-in-move-out-cleaning-kaduna"],
};

const carpetCleaning: ServicePage = {
  slug: "carpet-cleaning-kaduna",
  seo: {
    title: "Carpet Cleaning Kaduna | Professional Carpet Cleaner | Royal Clean",
    metaDescription:
      "Professional carpet cleaning service in Kaduna. We remove stains, odours and dirt using hot water extraction. All carpet types. Book today.",
    keywords:
      "carpet cleaning Kaduna, rug cleaning Kaduna, carpet shampoo Kaduna, carpet cleaner Kaduna, stain removal Kaduna",
  },
  hero: {
    eyebrow: "Carpet & Rug Specialists",
    h1: "Carpet Cleaning Service in Kaduna — Deep Clean, Stain & Odour Removal",
    subhead:
      "Hot water extraction that lifts stains, kills dust mites and restores carpets to like-new condition. Persian, Turkish, woollen and synthetic.",
  },
  intro: [
    "Carpets and rugs trap more dust, allergens, dust mites and bacteria than any other surface in your home — typically 4× their weight in dirt before they look soiled. Royal Clean Kaduna uses commercial hot water extraction equipment to deep-clean carpets without damaging fibres or backing.",
    "We service homes across Kaduna and clean every common carpet type, from delicate Persian rugs to heavy office carpet tiles.",
  ],
  sections: [
    {
      heading: "Why professional carpet cleaning beats DIY",
      paragraphs: [
        "Renting a domestic carpet machine seems cheap — but consumer machines lack the suction power to extract trapped water, leaving carpets damp for days, growing mildew underneath. Our truck-mounted and high-powered portable extractors remove 95%+ of moisture, drying carpets in 4–6 hours.",
      ],
    },
    {
      heading: "Our carpet cleaning method — hot water extraction",
      paragraphs: [
        "Hot water extraction (often called 'steam cleaning') injects hot water and eco-friendly detergent deep into carpet fibres, then immediately extracts the dirty solution under high pressure. It removes embedded dirt, kills dust mites and lifts stains without saturating the backing.",
      ],
    },
    {
      heading: "What we remove",
      bullets: [
        "Food and drink stains — coffee, juice, wine, oil",
        "Pet stains, urine and odours",
        "Dust mites and allergens",
        "Sweat, body oils and deep grime",
        "Smoke and cooking odours",
        "Pet hair and embedded fibres",
      ],
    },
    {
      heading: "Carpet types we clean",
      bullets: [
        "Persian and Turkish handwoven rugs — gentle low-moisture method",
        "Woollen carpets — pH-balanced wool-safe detergents",
        "Synthetic carpets (nylon, polyester) — standard hot extraction",
        "Berber and looped carpets",
        "Office carpet tiles and broadloom",
        "Sisal, jute and natural fibre rugs (dry method)",
      ],
    },
    {
      heading: "Drying time",
      paragraphs: [
        "Most synthetic carpets dry in 4–6 hours. Woollen and dense pile carpets take 6–8 hours. We can deploy fans on request for faster drying. Walking on the carpet sooner is fine if you wear clean socks.",
      ],
    },
    {
      heading: "How often should carpets be cleaned?",
      bullets: [
        "Annually — minimum for any home with carpet",
        "Every 6 months — homes with pets or young children",
        "Every 3 months — high-traffic offices and commercial spaces",
        "Spot cleaning — as soon as spills happen",
      ],
    },
  ],
  process: standardProcess,
  pricing: {
    note: "Carpet cleaning is priced per square meter for offices and per rug for homes.",
    tiers: [
      {
        name: "Single Rug",
        price: "₦8,000",
        unit: "per rug (small)",
        features: ["Hot water extraction", "Stain pre-treatment", "Deodorisation", "4–6 hour dry"],
      },
      {
        name: "Living Room",
        price: "₦20,000",
        unit: "per room (avg)",
        features: ["Full extraction", "Stain removal", "Dust mite treatment", "Fast dry"],
        highlight: true,
        tag: "Most booked",
      },
      {
        name: "Carpet + Sofa Combo",
        price: "₦35,000",
        unit: "package",
        features: ["Living room carpet", "3-seater sofa", "10% combo discount", "Same-day service"],
      },
    ],
  },
  testimonials: [
    {
      name: "Hauwa B.",
      location: "Barnawa, Kaduna",
      quote: "My white Persian rug had a juice stain for two years. They removed it completely.",
      rating: 5,
    },
    {
      name: "Office Manager",
      location: "Kaduna GRA",
      quote: "We've cycled them through three offices. Carpets always look brand new.",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "Will my carpet shrink after cleaning?",
      answer:
        "No. Our hot water extraction is calibrated to avoid over-saturation. We use wool-safe detergents on natural fibre carpets specifically to protect against shrinkage.",
    },
    {
      question: "Can you remove pet urine stains and odours?",
      answer:
        "Yes — we use enzymatic treatments specifically designed to break down urine proteins at the source, eliminating odour rather than masking it.",
    },
    {
      question: "How long until I can walk on the carpet?",
      answer:
        "Right away with clean socks. For heavy furniture, wait until fully dry — usually 6 hours. We bring fans for faster drying on request.",
    },
    {
      question: "Do you clean office carpet tiles?",
      answer:
        "Yes. We service banks, offices and commercial spaces with low-moisture encapsulation cleaning that allows immediate use.",
    },
    {
      question: "Is the cleaning safe for asthma sufferers?",
      answer:
        "Yes. Our products are hypoallergenic and we offer fragrance-free options. Carpet cleaning actually reduces asthma triggers by removing dust mites.",
    },
  ],
  schema: {
    serviceType: "Carpet Cleaning",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦8,000 – ₦50,000",
  },
  related: ["sofa-upholstery-cleaning-kaduna", "deep-cleaning-kaduna", "house-cleaning-kaduna"],
};

const sofaCleaning: ServicePage = {
  slug: "sofa-upholstery-cleaning-kaduna",
  seo: {
    title: "Sofa Cleaning Kaduna | Upholstery Cleaning Service | Royal Clean",
    metaDescription:
      "Professional sofa and upholstery cleaning in Kaduna. We clean fabric, leather and velvet sofas — removing stains, odours and bacteria. Book today.",
    keywords:
      "sofa cleaning Kaduna, upholstery cleaning Kaduna, couch cleaning Kaduna, leather sofa cleaning Kaduna, chair cleaning Kaduna",
    ogImage: heroImg,
  },
  hero: {
    eyebrow: "Upholstery Specialists",
    h1: "Sofa & Upholstery Cleaning in Kaduna — Restore Your Furniture",
    subhead:
      "Steam-extraction technology that lifts stains, kills dust mites and restores fabric, leather and velvet sofas to like-new condition. As seen across Kaduna social media.",
    image: heroImg,
  },
  intro: [
    "Your sofa absorbs more dirt, sweat, food residue and bacteria than any other piece of furniture in your home. Royal Clean Kaduna uses commercial-grade hot-water extraction to deep-clean fabric, leather, velvet and microfiber sofas without damaging the material — and the before/after results have made our cleans some of the most-shared cleaning content on Kaduna TikTok and Instagram.",
    "Every job includes pre-treatment of stains, dust-mite sanitisation and a fresh fragrance finish. We service homes across Malali, Barnawa, Ungwan Rimi, Kawo and all major Kaduna neighborhoods.",
  ],
  sections: [
    {
      heading: "Why sofa cleaning matters",
      paragraphs: [
        "An average sofa harbours millions of dust mites, dead skin cells, food crumbs, pet dander and sweat. These trigger allergies, skin irritation and asthma — particularly in children. Even sofas that look clean are often deeply contaminated. Professional cleaning restores hygiene, removes odours and extends sofa lifespan by years.",
      ],
    },
    {
      heading: "Types of sofa we clean",
      bullets: [
        "Fabric sofas — cotton, polyester, linen, microfiber",
        "Leather sofas — genuine, bonded, faux leather",
        "Velvet sofas — gentle low-moisture method",
        "Suede and nubuck — specialist dry cleaning",
        "Office chairs and dining chairs",
        "Mattresses and headboards",
      ],
    },
    {
      heading: "Our cleaning process",
      bullets: [
        "Vacuum extraction of loose dirt, crumbs and pet hair",
        "Pre-treatment of visible stains, food spills and pet marks",
        "Hot-water steam extraction with eco-friendly detergent",
        "Anti-bacterial and dust-mite sanitisation",
        "Deodorisation and fast-dry finish (2–4 hours)",
        "Fabric protection spray (optional add-on)",
      ],
    },
    {
      heading: "What we remove",
      bullets: [
        "Food stains, drink spills, oil marks",
        "Pet odours, urine and dander",
        "Sweat stains and body oils",
        "Dust mites and allergens",
        "Smoke and cooking smells",
        "Yellowing on light fabric",
      ],
    },
    {
      heading: "Leather sofa care",
      paragraphs: [
        "Leather requires a different approach to fabric. We use pH-balanced leather cleaners followed by conditioning treatment that restores moisture and prevents cracking. UV protection is included in our Leather Royal package to slow fading from sunlight.",
      ],
    },
    {
      heading: "How long does it take?",
      paragraphs: [
        "A standard 3-seater takes 45–60 minutes on-site. A full living-room set (3+2+1) takes 2–3 hours. Drying takes another 2–4 hours depending on fabric and humidity.",
      ],
    },
    {
      heading: "In-home service — we come to you",
      paragraphs: [
        "There is no need to move heavy sofas anywhere. Our portable steam extractors come to your home or office. We work around your space and ensure no water damage to floors or walls.",
      ],
    },
    {
      heading: "As seen on TikTok and Instagram",
      paragraphs: [
        "Our before/after sofa videos have gone viral across Kaduna social media — clients regularly tell us they booked after seeing our cleans on TikTok. The transformation, especially on light fabric and old leather, has to be seen to be believed.",
      ],
    },
  ],
  process: [
    { title: "Book in 2 minutes", description: "Call or WhatsApp us with sofa size, fabric and location." },
    { title: "Free quote", description: "Get a fixed price per seat — no surprises on the day." },
    { title: "On-site deep clean", description: "Our crew arrives with steam extractors and eco solutions." },
    { title: "Walk-through & dry", description: "Inspect together. Sofa dries in 2–4 hours." },
  ],
  pricing: {
    note: "Prices are estimates for standard fabric sofas in Kaduna. Leather and heavy stains may add a small premium.",
    tiers: [
      {
        name: "3-Seater",
        price: "₦15,000",
        unit: "per sofa",
        features: ["Steam extraction", "Stain pre-treatment", "Deodorisation", "2–4 hour dry time"],
      },
      {
        name: "Full Set",
        price: "₦35,000",
        unit: "3+2+1 seater",
        features: ["Everything in 3-Seater", "Cushion sanitisation", "Fabric protection spray", "Priority slot"],
        highlight: true,
        tag: "Most booked",
      },
      {
        name: "Leather Royal",
        price: "₦45,000",
        unit: "full set",
        features: ["Leather-safe cleaning", "Conditioning treatment", "UV protection", "Premium finish"],
      },
    ],
  },
  testimonials: [
    {
      name: "Hauwa B.",
      location: "Barnawa, Kaduna",
      quote: "My sofa looks brand new. The smell alone made it worth every naira.",
      rating: 5,
    },
    {
      name: "Mr. Yakubu",
      location: "Malali, Kaduna",
      quote: "They removed stains I thought were permanent. Highly professional crew.",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "Can you remove old stains?",
      answer:
        "Most stains, even those years old, can be significantly reduced or fully removed with our steam extraction process and pre-treatment. We give an honest assessment on arrival.",
    },
    {
      question: "Is it safe for pets and children?",
      answer:
        "Yes. All detergents we use are eco-friendly, child-safe and pet-safe. We can use fragrance-free options on request for sensitive households.",
    },
    {
      question: "How long does sofa cleaning take?",
      answer:
        "A 3-seater takes 45–60 minutes on-site. A full set takes 2–3 hours. Drying adds another 2–4 hours depending on fabric and humidity.",
    },
    {
      question: "Will my fabric shrink or fade?",
      answer:
        "No. Our equipment is calibrated to extract water rapidly without saturating fabric. We test colour-fastness on hidden areas before any treatment.",
    },
    {
      question: "Do you clean leather sofas?",
      answer:
        "Yes — with specialist pH-balanced leather cleaners and conditioning. Our Leather Royal package includes UV protection.",
    },
  ],
  schema: {
    serviceType: "Upholstery Cleaning",
    areaServed: ["Kaduna"],
    priceRange: "₦15,000 – ₦45,000",
  },
  related: ["carpet-cleaning-kaduna", "deep-cleaning-kaduna", "house-cleaning-kaduna"],
};

const windowCleaning: ServicePage = {
  slug: "window-cleaning-kaduna",
  seo: {
    title: "Window Cleaning Kaduna | Professional Window Cleaner | Royal Clean",
    metaDescription:
      "Professional window cleaning in Kaduna for homes and offices. Streak-free results, interior and exterior, high-rise capable. Book today.",
    keywords:
      "window cleaning Kaduna, window cleaner Kaduna, glass cleaning Kaduna, high rise window cleaning Kaduna",
  },
  hero: {
    eyebrow: "Streak-Free Glass",
    h1: "Window Cleaning Service in Kaduna — Streak-Free Results",
    subhead:
      "Crystal-clear windows for homes, offices and high-rise buildings across Kaduna. Interior, exterior, frames and tracks included.",
  },
  intro: [
    "Royal Clean Kaduna offers professional window cleaning for residential homes and commercial buildings across Kaduna. Whether you need a one-off polish before guests arrive or a recurring quarterly service for a multi-storey office, we deliver streak-free results that last.",
  ],
  sections: [
    {
      heading: "Residential vs commercial window cleaning",
      paragraphs: [
        "Residential window cleaning typically covers interior and exterior glass on ground floor and reachable upper floors. Commercial cleaning includes office partitions, glass facades, atriums and high-rise exteriors using rope access or extension equipment where needed.",
      ],
    },
    {
      heading: "Our window cleaning process",
      bullets: [
        "Frame and sill dusting first",
        "Track cleaning — often missed but critical",
        "Pure-water rinse system for streak-free finish",
        "Squeegee technique for glass",
        "Microfiber edge polish",
        "Final inspection in natural light",
      ],
    },
    {
      heading: "What we clean",
      bullets: [
        "Interior glass — homes and offices",
        "Exterior glass — ground and upper floors",
        "Window frames, sills and tracks",
        "Glass doors and partitions",
        "Mirrors and glass tabletops",
        "High-rise facades (specialist quote)",
      ],
    },
    {
      heading: "Frequency recommendations",
      bullets: [
        "Quarterly — most homes in dusty Kaduna climate",
        "Monthly — offices and ground-floor commercial",
        "Bi-monthly — homes near construction or major roads",
        "Annually — minimum for occasional users",
      ],
    },
    {
      heading: "Combine with house cleaning for a discount",
      paragraphs: [
        "Booking window cleaning alongside a house clean or deep clean gets you 10–15% off the combined price. Most of our regular house cleaning clients add windows quarterly.",
      ],
    },
  ],
  process: standardProcess,
  pricing: {
    note: "Window cleaning is priced per window or per property. Below are typical rates.",
    tiers: [
      {
        name: "Per Window",
        price: "₦500",
        unit: "per window",
        features: ["Both sides", "Frame & track included", "Streak-free guarantee", "Min 10 windows"],
      },
      {
        name: "Whole House",
        price: "₦15,000",
        unit: "avg 3-bed",
        features: ["All windows inside & out", "Frames & tracks", "Skylights extra", "Same-day service"],
        highlight: true,
        tag: "Most booked",
      },
      {
        name: "Office / Commercial",
        price: "Custom",
        unit: "site quote",
        features: ["Multi-storey capable", "After-hours service", "Recurring contract option", "Insured"],
      },
    ],
  },
  faqs: [
    {
      question: "Do you clean exterior windows on upper floors?",
      answer:
        "Yes — up to 3 storeys with extension poles. For high-rise buildings we deploy specialist rope-access teams and quote per site visit.",
    },
    {
      question: "Will the windows streak after cleaning?",
      answer:
        "No. We use a pure-water rinse system that leaves no mineral residue, plus professional squeegee technique. Streak-free guaranteed.",
    },
    {
      question: "How often should I clean my windows?",
      answer:
        "Quarterly is standard for most Kaduna homes. Properties near construction or main roads benefit from monthly service due to dust.",
    },
    {
      question: "Do you clean glass shower screens and mirrors?",
      answer:
        "Yes — included free with any whole-house window cleaning booking.",
    },
  ],
  schema: {
    serviceType: "Window Cleaning",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦500 – ₦100,000+",
  },
  related: ["house-cleaning-kaduna", "office-cleaning-kaduna", "deep-cleaning-kaduna"],
};

const moveInOut: ServicePage = {
  slug: "move-in-move-out-cleaning-kaduna",
  seo: {
    title: "Move In Move Out Cleaning Kaduna | End of Tenancy Clean | Royal Clean",
    metaDescription:
      "Professional move-in and move-out cleaning in Kaduna. Get your deposit back or move into a spotless home. Full property clean guaranteed.",
    keywords:
      "move in cleaning Kaduna, move out cleaning Kaduna, end of tenancy cleaning Kaduna, deposit cleaning Kaduna, vacate cleaning Kaduna",
  },
  hero: {
    eyebrow: "Tenancy Specialists",
    h1: "Move In and Move Out Cleaning in Kaduna — Start Fresh, Leave Clean",
    subhead:
      "Get your deposit back in full or move into a spotless home. Comprehensive top-to-bottom cleaning with our landlord-approved checklist.",
  },
  intro: [
    "Moving is stressful enough without worrying about deposits and deep cleans. Royal Clean Kaduna handles end-of-tenancy and move-in cleans that meet the highest landlord and estate agent standards across Kaduna. Our work is so consistent that several Kaduna landlords now require Royal Clean before releasing deposits.",
  ],
  sections: [
    {
      heading: "Why move-out cleaning matters",
      paragraphs: [
        "Most tenancy disputes in Kaduna come down to cleaning. Landlords legally withhold deposits for properties returned in poor condition. A professional move-out clean — with documentation — almost always returns more than its cost in protected deposit.",
      ],
    },
    {
      heading: "What our move-out clean includes",
      bullets: [
        "Inside all cupboards, drawers and wardrobes",
        "Inside oven, fridge, freezer, microwave",
        "Behind appliances — fridge, washing machine, cooker",
        "All grout lines and tile work scrubbed",
        "Skirting boards, door frames, light switches",
        "Window interiors, frames and tracks",
        "Walls spot-cleaned for marks",
        "All floors deep-cleaned",
        "Bathrooms — descaled and disinfected",
      ],
    },
    {
      heading: "Move-in cleaning — start fresh",
      paragraphs: [
        "Even properties that look clean often need a deep reset before you bring in your belongings. Move-in cleans focus on disinfection, mattress and surface sanitisation, and removing any lingering odours from the previous occupants.",
      ],
    },
    {
      heading: "Our deposit-back guarantee",
      paragraphs: [
        "If your landlord or estate agent flags any cleaning issue within 48 hours of our service, we return free of charge to fix it. Bring us the inventory report — we handle the rest.",
      ],
    },
    {
      heading: "How to book",
      paragraphs: [
        "We can usually accommodate same-day or next-day bookings — important when handover dates are tight. WhatsApp or call with your address, property size and handover time.",
      ],
    },
  ],
  process: standardProcess,
  pricing: {
    note: "Move-in/out cleans are priced like deep cleans, with documentation included for deposit protection.",
    tiers: [
      {
        name: "1–2 Bedroom",
        price: "₦25,000",
        unit: "per property",
        features: ["Full deep clean", "Inside oven & fridge", "Photo documentation", "Deposit-back guarantee"],
      },
      {
        name: "3–4 Bedroom",
        price: "₦45,000",
        unit: "per property",
        features: ["Everything in 1-2 BR", "3-person team", "Same-day option", "Free re-clean if flagged"],
        highlight: true,
        tag: "Most booked",
      },
      {
        name: "Duplex / 5+ BR",
        price: "₦80,000+",
        unit: "site quote",
        features: ["4-person team", "Compliance documentation", "Inventory walkthrough", "Priority slot"],
      },
    ],
  },
  testimonials: [
    {
      name: "Tunde A.",
      location: "Kaduna",
      quote: "Got my full ₦600k deposit back. The landlord said the property looked better than when I moved in.",
      rating: 5,
    },
    {
      name: "Sarah O.",
      location: "Ungwan Rimi, Kaduna",
      quote: "Booked them the day before handover. They saved my deposit and my sanity.",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "Will I get my deposit back if I use Royal Clean?",
      answer:
        "We can't make promises on landlord behaviour, but we deliver a property that meets standard inventory checks. If anything is flagged within 48 hours, we return free of charge.",
    },
    {
      question: "How long does a move-out clean take?",
      answer:
        "4–8 hours depending on property size. We deploy multi-person teams to finish in a single visit so you can hand over the keys the same day.",
    },
    {
      question: "Can you clean before the new tenants arrive?",
      answer:
        "Yes. Move-in cleans are scheduled around your handover. We coordinate directly with your estate agent if needed.",
    },
    {
      question: "Do you provide cleaning documentation for landlords?",
      answer:
        "Yes — photo documentation and a checklist signed by our supervisor are included for any move-out clean.",
    },
    {
      question: "Can you do same-day move-out cleaning?",
      answer:
        "Often yes, depending on availability. Book by 9am for same-day service in most Kaduna areas.",
    },
  ],
  schema: {
    serviceType: "Move-In/Out Cleaning",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦25,000 – ₦80,000",
  },
  related: ["deep-cleaning-kaduna", "post-construction-cleaning-kaduna", "house-cleaning-kaduna"],
};

// ─────────────────────────────────────────────────────────────────────────────
// FUMIGATION SERVICES (×5)
// ─────────────────────────────────────────────────────────────────────────────

const fumigationService: ServicePage = {
  slug: "fumigation-service-kaduna",
  seo: {
    title: "Fumigation Service Kaduna | Professional Pest Fumigation 24/7 | Royal Clean",
    metaDescription:
      "Professional fumigation in Kaduna. We treat cockroaches, bed bugs, mosquitoes, rats and all pests. EHCON-licensed technicians. 24/7 service.",
    keywords:
      "fumigation Kaduna, fumigation service Kaduna, pest fumigation Kaduna, fumigation company Kaduna, EHCON fumigation Kaduna",
  },
  hero: {
    eyebrow: "EHCON Licensed",
    h1: "Fumigation Service in Kaduna — Licensed, Safe, Effective Pest Treatment",
    subhead:
      "Kaduna's only 24/7 fumigation service. EHCON-certified technicians. Cockroaches, bed bugs, mosquitoes, rats — all pests handled. 30-day re-treatment guarantee.",
  },
  intro: [
    "Royal Clean Kaduna is an EHCON-licensed fumigation provider serving homes, offices, hotels, schools and industrial facilities across Kaduna. We are the only fumigation company in Kaduna available 24 hours, 7 days a week — meaning bed bug emergencies, cockroach outbreaks and pre-event treatments can all be handled the same day.",
    "Every treatment uses regulated, professional-grade chemicals applied by certified technicians, and every job is backed by our 30-day re-treatment guarantee — if pests return, we return free.",
  ],
  sections: [
    {
      heading: "Why fumigation works better than DIY sprays",
      paragraphs: [
        "Store-bought sprays kill the pests you can see — but pests reproduce in places you can't. Cockroaches lay eggs inside walls. Bed bugs hide in mattress seams. Mosquitoes breed in standing water you may not know exists. Professional fumigation treats the entire ecosystem: adults, eggs, larvae, harbourage and entry points. That's why pests come back days after DIY but stay away for months after professional treatment.",
      ],
    },
    {
      heading: "Pests we treat",
      bullets: [
        "Cockroaches — German, American, Oriental species",
        "Bed bugs — adults, nymphs and eggs",
        "Mosquitoes — adults and breeding sites",
        "Rats and mice — rodent baiting and exclusion",
        "Ants — including pharaoh ants and sugar ants",
        "Termites — soil treatment and wood injection",
        "Flies, weevils, silverfish and stored-product pests",
        "Spiders and scorpions",
      ],
    },
    {
      heading: "Types of fumigation we offer",
      bullets: [
        "Space fumigation — gaseous treatment of enclosed spaces",
        "Residual spraying — long-lasting surface treatment",
        "Gel baiting — discreet treatment for cockroaches and ants",
        "Thermal fogging — outdoor and large area mosquito control",
        "ULV cold fogging — interior mosquito and fly treatment",
        "Rodent baiting — secure tamper-proof bait stations",
      ],
    },
    {
      heading: "Our licensed technicians",
      paragraphs: [
        "Every fumigation technician on our team is certified by the Environmental Health Council of Nigeria (EHCON). We carry full liability insurance and follow international IPM (Integrated Pest Management) protocols.",
      ],
    },
    {
      heading: "Safety procedures — before and after",
      bullets: [
        "Before — cover food, remove pets and fish tanks, brief children",
        "During — only the technician remains in the property",
        "After — ventilate for 2–4 hours before reoccupying",
        "Wash all food-contact surfaces before next meal preparation",
        "We provide written safety briefing on arrival",
      ],
    },
    {
      heading: "How long to stay out of the property",
      paragraphs: [
        "Most residual sprays require only 2–4 hours of ventilation before reoccupying. Space fumigation requires 6–12 hours. Thermal fogging requires only 1 hour. Bed bug treatments may require longer depending on intensity.",
      ],
    },
    {
      heading: "Our 30-day guarantee",
      paragraphs: [
        "If targeted pests reappear within 30 days of treatment, we return and re-treat free of charge. For ongoing pest pressure, our quarterly contract includes unlimited re-treatments.",
      ],
    },
    {
      heading: "Eco-friendly options",
      paragraphs: [
        "On request we apply WHO-classified Class III low-toxicity formulations and natural pyrethrin-based products — safe for households with children, pregnant women and pets.",
      ],
    },
  ],
  process: standardProcess,
  pricing: {
    note: "Fumigation is priced by property size and treatment type. Quarterly contracts get up to 30% off.",
    tiers: [
      {
        name: "1–2 Bedroom",
        price: "₦15,000",
        unit: "per treatment",
        features: ["General pest fumigation", "EHCON technician", "30-day guarantee", "Eco-friendly option"],
      },
      {
        name: "3–4 Bedroom",
        price: "₦25,000",
        unit: "per treatment",
        features: ["Full property treatment", "Multiple chemicals", "30-day guarantee", "Same-day available"],
        highlight: true,
        tag: "Most booked",
      },
      {
        name: "Quarterly Contract",
        price: "₦80,000",
        unit: "4 visits / year",
        features: ["Save 30%", "Unlimited re-treatments", "Priority scheduling", "Free pest inspections"],
      },
    ],
  },
  testimonials: [
    {
      name: "Mrs. Adamu",
      location: "Sabon Gari, Kaduna",
      quote: "Cockroaches gone in 48 hours. We've had zero issues for 6 months now.",
      rating: 5,
    },
    {
      name: "Hotel Owner",
      location: "Kaduna GRA",
      quote: "Royal Clean handles all 32 of our rooms quarterly. Guest complaints about pests are zero.",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "How long does fumigation last?",
      answer:
        "A typical residual treatment lasts 2–3 months for cockroaches and ants, and 6+ months for termites. Quarterly contracts maintain pest-free status year-round.",
    },
    {
      question: "Is fumigation safe for children and pets?",
      answer:
        "Yes — when proper safety procedures are followed. Eco-friendly low-toxicity options are available specifically for households with young children, pregnant women or pets.",
    },
    {
      question: "How long do I need to stay out of the property?",
      answer:
        "Residual spray: 2–4 hours. Space fumigation: 6–12 hours. Thermal fogging: 1 hour. We give exact timings before treatment.",
    },
    {
      question: "Do you offer fumigation contracts for businesses?",
      answer:
        "Yes — quarterly and monthly contracts for offices, hotels, schools, factories and food businesses. Compliance documentation included.",
    },
    {
      question: "What if the pests come back?",
      answer:
        "Within 30 days of treatment, we return free. Quarterly contracts include unlimited re-treatments at no charge.",
    },
    {
      question: "Are you EHCON licensed?",
      answer:
        "Yes. All our technicians hold individual EHCON certification, and our company carries full operating licence and liability insurance.",
    },
  ],
  schema: {
    serviceType: "Fumigation",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦15,000 – ₦200,000+",
  },
  related: ["pest-control-kaduna", "cockroach-treatment-kaduna", "bed-bug-treatment-kaduna"],
};

const pestControl: ServicePage = {
  slug: "pest-control-kaduna",
  seo: {
    title: "Pest Control Kaduna | Pest Exterminator Service | Royal Clean",
    metaDescription:
      "Professional pest control in Kaduna. Integrated pest management for homes and businesses. Cockroaches, rats, termites, ants and more.",
    keywords:
      "pest control Kaduna, pest exterminator Kaduna, IPM Kaduna, pest management Kaduna, exterminator Kaduna",
  },
  hero: {
    eyebrow: "Integrated Pest Management",
    h1: "Pest Control Service in Kaduna — Eliminate Every Pest",
    subhead:
      "Comprehensive pest management for residential and commercial properties. Inspection, treatment and prevention — backed by our re-treatment guarantee.",
  },
  intro: [
    "While our fumigation service handles acute pest treatment, our pest control programme takes a broader Integrated Pest Management (IPM) approach — combining inspection, exclusion, treatment and ongoing monitoring to eliminate root causes, not just symptoms. This is particularly important for businesses, food premises and homes with recurring infestations.",
  ],
  sections: [
    {
      heading: "What is Integrated Pest Management?",
      paragraphs: [
        "IPM is the gold-standard pest control methodology used worldwide. Instead of repeated chemical spraying, we identify why pests are entering, what they're feeding on, and where they're harbouring — then we eliminate those drivers alongside treatment. The result: fewer chemicals, longer-lasting results and pest pressure that reduces over time.",
      ],
    },
    {
      heading: "All pests we handle",
      bullets: [
        "Cockroaches — all species",
        "Rats and mice",
        "Termites — soil and wood treatment",
        "Bed bugs",
        "Mosquitoes",
        "Ants — including pharaoh and carpenter",
        "Flies and fruit flies",
        "Weevils, silverfish and stored product pests",
        "Spiders and scorpions",
        "Snakes (removal & exclusion)",
      ],
    },
    {
      heading: "Commercial pest control",
      paragraphs: [
        "Restaurants, supermarkets, food processing facilities, warehouses and offices need documented pest control for health inspections and food safety compliance. We provide monthly service reports, treatment logs and certification suitable for NAFDAC and SON inspections.",
      ],
    },
    {
      heading: "Residential pest control programmes",
      bullets: [
        "Annual inspection — single visit assessment",
        "Quarterly programme — 4 treatments per year",
        "Monthly programme — for high-pressure properties",
        "On-demand — emergency treatments at any time",
      ],
    },
    {
      heading: "Inspection process",
      paragraphs: [
        "Every contract begins with a free inspection. We document entry points, harbourage areas, food sources and current pest activity. The inspection report becomes the basis for your treatment plan and contract pricing.",
      ],
    },
    {
      heading: "Prevention advice",
      bullets: [
        "Sealing entry points around doors, vents and pipes",
        "Eliminating standing water sources",
        "Food storage best practices",
        "Waste management improvements",
        "Vegetation management around buildings",
        "Drainage and gutter maintenance",
      ],
    },
  ],
  process: standardProcess,
  pricing: {
    note: "Pest control programmes are quoted per property after free inspection. Below are typical contract rates.",
    tiers: [
      {
        name: "Annual Plan",
        price: "₦40,000",
        unit: "per year",
        features: ["1 full treatment", "Free inspection", "Free 1 re-visit", "Suitable for low-risk homes"],
      },
      {
        name: "Quarterly Plan",
        price: "₦80,000",
        unit: "per year",
        features: ["4 treatments", "Unlimited re-visits", "Priority response", "Compliance reports"],
        highlight: true,
        tag: "Recommended",
      },
      {
        name: "Commercial",
        price: "Custom",
        unit: "site quote",
        features: ["Monthly service", "NAFDAC documentation", "Multi-site option", "Dedicated technician"],
      },
    ],
  },
  faqs: [
    {
      question: "What's the difference between pest control and fumigation?",
      answer:
        "Fumigation is a single treatment focused on killing existing pests. Pest control is an ongoing programme combining inspection, exclusion, treatment and monitoring to prevent infestation long-term.",
    },
    {
      question: "Do you handle commercial food businesses?",
      answer:
        "Yes — restaurants, bakeries, supermarkets and food processing facilities. We provide NAFDAC-compliant documentation.",
    },
    {
      question: "Will I see results immediately?",
      answer:
        "Most pest activity reduces within 24–72 hours. Full elimination of established colonies (especially cockroaches and ants) takes 1–2 weeks.",
    },
    {
      question: "Is the inspection really free?",
      answer:
        "Yes — for any property considering a contract. We document everything and quote based on what we find.",
    },
  ],
  schema: {
    serviceType: "Pest Control",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦40,000 – ₦500,000+",
  },
  related: ["fumigation-service-kaduna", "cockroach-treatment-kaduna", "mosquito-control-kaduna"],
};

const cockroach: ServicePage = {
  slug: "cockroach-treatment-kaduna",
  seo: {
    title: "Cockroach Treatment Kaduna | Get Rid of Cockroaches | Royal Clean",
    metaDescription:
      "Fast, effective cockroach treatment in Kaduna. Gel baiting, residual spray, IGR. EHCON-licensed technicians. 30-day guarantee. Same-day service.",
    keywords:
      "cockroach treatment Kaduna, kill cockroaches Kaduna, cockroach exterminator Kaduna, roach control Kaduna",
  },
  hero: {
    eyebrow: "Cockroach Specialists",
    h1: "Cockroach Treatment in Kaduna — Fast, Effective, Guaranteed",
    subhead:
      "Stop wasting money on store sprays. Professional gel baiting and residual treatment that eliminates cockroaches at the source. 30-day guarantee.",
  },
  intro: [
    "Cockroaches are not just disgusting — they spread salmonella, E. coli and trigger asthma. Worse, the cockroaches you see represent only 10% of the population. The rest are hiding inside walls, behind appliances and in cracks, breeding constantly. Royal Clean Kaduna's cockroach treatment targets the entire colony, not just visible adults — so the problem actually goes away.",
  ],
  sections: [
    {
      heading: "Why cockroaches are dangerous",
      bullets: [
        "Spread salmonella, E. coli and dysentery bacteria",
        "Contaminate food and food preparation surfaces",
        "Trigger asthma attacks — especially in children",
        "Carry parasitic worms and pathogens",
        "Multiply exponentially — one female lays 300+ eggs per year",
      ],
    },
    {
      heading: "Signs of a cockroach infestation",
      bullets: [
        "Live cockroaches at night when lights come on",
        "Dark pepper-like droppings near food areas",
        "Egg cases (oothecae) in dark crevices",
        "Musty, oily smell in kitchens",
        "Smear marks along baseboards",
        "Dead roaches in unused cupboards",
      ],
    },
    {
      heading: "Why DIY sprays don't work",
      paragraphs: [
        "Cockroaches in Kaduna have developed resistance to most over-the-counter pyrethroid sprays. Worse, contact sprays scatter the colony, sending breeding females deeper into walls. The result: temporary reduction followed by population rebound within 2–3 weeks.",
      ],
    },
    {
      heading: "Our cockroach treatment method",
      bullets: [
        "Gel baiting — non-toxic gel that roaches carry back to the colony",
        "Residual perimeter spray — long-lasting kill barrier",
        "Insect Growth Regulator (IGR) — prevents nymphs maturing",
        "Crack and crevice injection",
        "Drain treatment — major harbourage in Kaduna kitchens",
      ],
    },
    {
      heading: "Treatment process",
      paragraphs: [
        "Treatment takes 30–45 minutes for a typical home. You can return after 2 hours of ventilation. Cockroach activity often visibly increases in the first 24–48 hours as poisoned roaches emerge from harbourage to die — this is normal and confirms the bait is working.",
      ],
    },
    {
      heading: "How long until cockroaches are eliminated?",
      paragraphs: [
        "Visible activity typically drops 80% within 7 days. Complete elimination of a mature colony takes 14–21 days as the next generation hatches and dies. We schedule a free follow-up at day 14 if needed.",
      ],
    },
    {
      heading: "Prevention after treatment",
      bullets: [
        "Fix water leaks — cockroaches need moisture",
        "Store food in sealed containers",
        "Take out rubbish daily",
        "Seal cracks around plumbing entries",
        "Clean behind and under appliances",
      ],
    },
  ],
  process: standardProcess,
  pricing: {
    note: "Cockroach treatment is priced by property size. Quarterly programmes recommended for kitchens, restaurants and food businesses.",
    tiers: [
      {
        name: "Single Treatment",
        price: "₦15,000",
        unit: "1–2 bedroom",
        features: ["Gel + spray combo", "30-day guarantee", "Same-day available", "Free re-visit if needed"],
      },
      {
        name: "Whole House",
        price: "₦25,000",
        unit: "3–4 bedroom",
        features: ["Full property treatment", "IGR included", "Drain treatment", "Most booked"],
        highlight: true,
        tag: "Most popular",
      },
      {
        name: "Quarterly Plan",
        price: "₦70,000",
        unit: "4 visits/year",
        features: ["Save 30%", "Unlimited re-visits", "Priority scheduling", "Restaurant compliance"],
      },
    ],
  },
  testimonials: [
    {
      name: "Mr. Sani",
      location: "Kakuri, Kaduna",
      quote: "I tried 5 different sprays. Royal Clean cleared the kitchen in 2 weeks. No roaches in 4 months.",
      rating: 5,
    },
    {
      name: "Restaurant Manager",
      location: "Kaduna",
      quote: "We went from monthly health inspection issues to zero in three months on their quarterly contract.",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "How long does cockroach treatment take?",
      answer:
        "On-site treatment takes 30–45 minutes. You can return after 2 hours of ventilation.",
    },
    {
      question: "Is the treatment safe for my kitchen?",
      answer:
        "Yes. Gel bait is applied in tiny dots inside cracks — never on food surfaces. Residual spray is applied behind appliances and along baseboards. Wipe food prep surfaces before next use.",
    },
    {
      question: "Why do I see more cockroaches after treatment?",
      answer:
        "This is normal — and a good sign. Poisoned roaches leave harbourage to find water and die in the open. Activity drops sharply by day 5–7.",
    },
    {
      question: "Will the cockroaches come back?",
      answer:
        "Within 30 days, we return free if they do. Long-term recurrence depends on hygiene, leaks and entry points — quarterly programmes maintain zero activity.",
    },
    {
      question: "Do you treat restaurants and food businesses?",
      answer:
        "Yes — with food-safe protocols and NAFDAC-compliant documentation.",
    },
  ],
  schema: {
    serviceType: "Cockroach Treatment",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦15,000 – ₦70,000",
  },
  related: ["fumigation-service-kaduna", "pest-control-kaduna", "bed-bug-treatment-kaduna"],
};

const bedBug: ServicePage = {
  slug: "bed-bug-treatment-kaduna",
  seo: {
    title: "Bed Bug Treatment Kaduna | Bed Bug Exterminator | Royal Clean",
    metaDescription:
      "Complete bed bug elimination in Kaduna. Heat and chemical treatment. Discreet service. EHCON-licensed. Same-day emergency response. 30-day guarantee.",
    keywords:
      "bed bug treatment Kaduna, bed bug exterminator Kaduna, kill bed bugs Kaduna, bed bug fumigation Kaduna",
  },
  hero: {
    eyebrow: "Discreet Emergency Service",
    h1: "Bed Bug Treatment in Kaduna — Complete Elimination Guaranteed",
    subhead:
      "Don't lose another night's sleep. Same-day discreet bed bug treatment with combined heat and chemical methods. 30-day re-treatment guarantee.",
  },
  intro: [
    "Bed bugs are one of the most stressful and embarrassing pest problems anyone can face. They feed on you while you sleep, leaving itchy bites and ruining sheets — and they multiply rapidly. Royal Clean Kaduna offers fast, discreet, complete bed bug treatment with a combined heat and chemical method that eliminates adults, nymphs and eggs in a single visit. We arrive in unmarked vehicles for client privacy.",
  ],
  sections: [
    {
      heading: "How to know if you have bed bugs",
      bullets: [
        "Small reddish-brown bites in lines or clusters on skin",
        "Dark spots (digested blood) on sheets and mattress seams",
        "Rust-coloured stains on bedding from crushed bugs",
        "Tiny pale shed skins along mattress piping",
        "Sweet, musty odour in heavily infested rooms",
        "Live bugs in mattress seams, headboard cracks or bed frame joints",
      ],
    },
    {
      heading: "Why bed bugs are so difficult to eliminate",
      paragraphs: [
        "Bed bugs hide in tiny cracks during the day and only feed at night. Eggs are resistant to most insecticides and hatch up to 14 days after laying. A single missed female can rebuild a population in weeks. Effective treatment must reach every harbourage and survive long enough to kill emerging nymphs — which is why DIY almost always fails.",
      ],
    },
    {
      heading: "Our bed bug treatment method",
      bullets: [
        "Inspection and identification — confirm species and infestation level",
        "Heat treatment — portable steamers reach 60°C+ in mattress seams (kills eggs)",
        "Targeted residual chemical — long-lasting kill in cracks and crevices",
        "Encasement recommendations — for mattress and box springs",
        "14-day follow-up inspection",
      ],
    },
    {
      heading: "How many treatments are needed?",
      paragraphs: [
        "Most light-to-moderate infestations are eliminated in a single combined treatment. Heavier infestations or shared-wall apartments may require a second treatment at day 14 to catch newly hatched nymphs. We give an honest assessment after inspection.",
      ],
    },
    {
      heading: "Preparation checklist (before treatment)",
      bullets: [
        "Strip all bedding and wash at 60°C+ or tumble dry on hot for 30 mins",
        "Bag all clothing in sealed bin liners",
        "Vacuum thoroughly — dispose of bag immediately",
        "Move bed 30cm away from walls",
        "Remove items from under the bed",
        "Don't use any DIY sprays — they scatter the bugs deeper",
      ],
    },
    {
      heading: "After treatment care",
      bullets: [
        "Sleep in your bed — vacating sends bugs to other rooms",
        "Don't shampoo carpets for 4 weeks",
        "Use mattress encasements to seal in any survivors",
        "Inspect weekly for 30 days",
      ],
    },
    {
      heading: "Our discretion guarantee",
      paragraphs: [
        "Bed bugs carry social stigma despite having nothing to do with cleanliness. We arrive in unmarked vehicles, in plain clothing, and discuss your case only with you. Estate security and neighbours are never informed of the nature of our visit.",
      ],
    },
  ],
  process: standardProcess,
  pricing: {
    note: "Bed bug treatment is priced per room treated. Whole-property pricing available.",
    tiers: [
      {
        name: "Single Room",
        price: "₦25,000",
        unit: "per room",
        features: ["Heat + chemical combo", "Mattress treatment", "30-day guarantee", "Discreet service"],
      },
      {
        name: "Whole House",
        price: "₦60,000",
        unit: "3–4 bedroom",
        features: ["All bedrooms", "Living area treatment", "Free 14-day follow-up", "Priority response"],
        highlight: true,
        tag: "Most booked",
      },
      {
        name: "Hotel / Hostel",
        price: "Custom",
        unit: "per site",
        features: ["Multi-room scheduling", "Compliance certificate", "Discreet timing", "Recurring contract"],
      },
    ],
  },
  testimonials: [
    {
      name: "Confidential Client",
      location: "Kaduna",
      quote: "I hadn't slept properly in 3 weeks. After one treatment, the bites stopped completely.",
      rating: 5,
    },
    {
      name: "Hostel Manager",
      location: "Kaduna",
      quote: "Royal Clean handled an entire 18-bed hostel without any guest knowing. Lifesaver.",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "Can bed bugs come back after treatment?",
      answer:
        "Within our 30-day guarantee window, we return free of charge. Re-infestation usually comes from outside (luggage, second-hand furniture) — not from incomplete treatment.",
    },
    {
      question: "Do I need to throw my mattress away?",
      answer:
        "No. Our heat treatment reaches inside seams and kills eggs without damaging the mattress. Encasement after treatment seals in any survivors.",
    },
    {
      question: "How long does treatment take?",
      answer:
        "2–3 hours for a single room. 4–6 hours for a whole house with multiple bedrooms.",
    },
    {
      question: "Is the treatment safe for children?",
      answer:
        "Yes. Heat treatment is chemical-free. Residual chemicals are applied only in cracks and crevices — children and pets can return after 4 hours of ventilation.",
    },
    {
      question: "Will my neighbours be told?",
      answer:
        "No. We operate discreetly in unmarked vehicles. Treatment details are confidential between us and you.",
    },
  ],
  schema: {
    serviceType: "Bed Bug Treatment",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦25,000 – ₦200,000",
  },
  related: ["fumigation-service-kaduna", "pest-control-kaduna", "disinfection-sanitization-kaduna"],
};

const mosquito: ServicePage = {
  slug: "mosquito-control-kaduna",
  seo: {
    title: "Mosquito Control Kaduna | Mosquito Fumigation Service | Royal Clean",
    metaDescription:
      "Mosquito control in Kaduna — protect your family from malaria. Indoor and outdoor fogging. Estate-wide programmes. Safe for children and pets.",
    keywords:
      "mosquito control Kaduna, mosquito fumigation Kaduna, anti malaria fumigation Kaduna, mosquito fogging Kaduna",
  },
  hero: {
    eyebrow: "Family Health Protection",
    h1: "Mosquito Control in Kaduna — Protect Your Family from Malaria",
    subhead:
      "Beyond bed nets. Professional indoor and outdoor mosquito treatment that breaks the breeding cycle and keeps your home malaria-safer year-round.",
  },
  intro: [
    "Malaria is not just a nuisance in Kaduna — it is a serious and persistent health threat, causing thousands of preventable hospitalisations every year. Mosquito nets help, but mosquitoes also bite outdoors at dusk, hide indoors during the day and breed in any standing water on your compound. Royal Clean Kaduna's mosquito control programme is designed as family health protection: indoor and outdoor treatment combined with breeding-site elimination to dramatically reduce mosquito pressure around your home.",
  ],
  sections: [
    {
      heading: "Mosquito-borne disease risk in Kaduna",
      paragraphs: [
        "Kaduna's climate and rainy seasons create ideal conditions for Anopheles mosquitoes (malaria vectors), Aedes mosquitoes (dengue, yellow fever, Zika) and Culex mosquitoes (West Nile, filariasis). Children under 5 and pregnant women are particularly vulnerable. Reducing mosquito populations around your home is one of the most cost-effective health investments you can make.",
      ],
    },
    {
      heading: "Why indoor mosquito control matters beyond nets",
      bullets: [
        "Mosquitoes bite at dusk before bedtime — outside net coverage",
        "Resting mosquitoes hide on walls and dark corners during the day",
        "Children and visitors don't always sleep under nets",
        "Nets don't help in living rooms, balconies, dining areas",
        "Treating walls kills resting females before they bite again",
      ],
    },
    {
      heading: "Our mosquito control process",
      bullets: [
        "Site survey — identify breeding sites on your compound",
        "Larviciding — treat standing water to kill larvae",
        "Indoor residual spraying — long-lasting wall treatment",
        "ULV cold fogging — instant indoor adult kill",
        "Outdoor thermal fogging — compound, garden, perimeter",
        "Drain treatment — major breeding site in Kaduna",
      ],
    },
    {
      heading: "Outdoor and indoor treatment",
      paragraphs: [
        "Indoor treatment kills mosquitoes that have already entered your home and creates a residual barrier on walls. Outdoor treatment hits mosquitoes outside before they reach you and treats breeding sites at the source. We typically combine both for full protection.",
      ],
    },
    {
      heading: "Estate and compound-wide mosquito control",
      paragraphs: [
        "We run estate-wide mosquito programmes for residential estates, hotels, schools and corporate compounds across Kaduna. Group treatment is dramatically more effective than individual properties — mosquitoes don't respect compound walls.",
      ],
    },
    {
      heading: "How often to treat",
      bullets: [
        "Monthly — peak rainy season (May to October)",
        "Bi-monthly — dry season maintenance",
        "Weekly fogging — for compounds, hotels, restaurants with outdoor seating",
        "Pre-event — for outdoor weddings, parties, dinners",
      ],
    },
    {
      heading: "Safe for children and pets",
      paragraphs: [
        "Our mosquito treatments use WHO-approved Class III low-toxicity formulations and natural pyrethrin-based products. Children, pregnant women and pets can return to treated areas after 1–2 hours of ventilation. Eco-friendly options are available on request.",
      ],
    },
  ],
  process: standardProcess,
  pricing: {
    note: "Mosquito control is priced by area covered. Estate and corporate contracts available.",
    tiers: [
      {
        name: "Indoor Only",
        price: "₦12,000",
        unit: "per home",
        features: ["Residual wall spray", "ULV indoor fogging", "Drain treatment", "1 month protection"],
      },
      {
        name: "Indoor + Outdoor",
        price: "₦20,000",
        unit: "per home + compound",
        features: ["Full indoor treatment", "Outdoor thermal fogging", "Larviciding", "1 month protection"],
        highlight: true,
        tag: "Family favourite",
      },
      {
        name: "Estate / Corporate",
        price: "Custom",
        unit: "site quote",
        features: ["Compound-wide coverage", "Monthly schedule", "Hotels & restaurants", "Compliance reporting"],
      },
    ],
  },
  faqs: [
    {
      question: "How long does mosquito treatment last?",
      answer:
        "Indoor residual spraying gives 4–6 weeks of protection. Outdoor fogging gives 2–3 weeks. We recommend monthly treatment during rainy season for maximum protection.",
    },
    {
      question: "Is mosquito fumigation safe for my children?",
      answer:
        "Yes — our products are WHO-approved low-toxicity formulations. Children and pets can return after 1–2 hours of ventilation. Eco-friendly options available.",
    },
    {
      question: "Can you fumigate before an outdoor event?",
      answer:
        "Yes — outdoor thermal fogging is highly effective when done 2–3 hours before the event. Popular for weddings, naming ceremonies and outdoor dinners.",
    },
    {
      question: "Do you treat hotel grounds and restaurants?",
      answer:
        "Yes — we run weekly and monthly contracts for hotels, restaurants with outdoor seating, schools and event venues across Kaduna.",
    },
    {
      question: "What about breeding sites I can't reach?",
      answer:
        "Our larvicidal treatment works on standing water in drains, gutters, and hidden containers. We also identify and recommend elimination of breeding sites during the survey.",
    },
  ],
  schema: {
    serviceType: "Mosquito Control",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦12,000 – ₦300,000+",
  },
  related: ["fumigation-service-kaduna", "pest-control-kaduna", "disinfection-sanitization-kaduna"],
};

// ─────────────────────────────────────────────────────────────────────────────
// SPECIALIST SERVICES (×4)
// ─────────────────────────────────────────────────────────────────────────────

const disinfection: ServicePage = {
  slug: "disinfection-sanitization-kaduna",
  seo: {
    title: "Disinfection Service Kaduna | Sanitization Service | Royal Clean",
    metaDescription:
      "Hospital-grade disinfection and sanitization in Kaduna. Fogging, surface treatment for offices, schools, clinics and homes. Certificate provided.",
    keywords:
      "disinfection Kaduna, sanitization Kaduna, fogging service Kaduna, COVID disinfection Kaduna, disinfectant fogging Kaduna",
  },
  hero: {
    eyebrow: "Hospital-Grade Protection",
    h1: "Disinfection and Sanitization Service in Kaduna — Deep Clean Protection",
    subhead:
      "Hospital-grade disinfection for offices, schools, clinics and homes. Fogging plus surface wiping with WHO-approved agents. Certificate of treatment provided.",
  },
  intro: [
    "Disinfection is not the same as cleaning. While cleaning removes visible dirt, disinfection eliminates the invisible — bacteria, viruses, fungi and bloodborne pathogens. Royal Clean Kaduna provides hospital-grade disinfection and sanitization services for properties recovering from illness, high-traffic offices, schools, healthcare facilities and food businesses.",
  ],
  sections: [
    {
      heading: "Difference between cleaning, disinfecting and sanitizing",
      paragraphs: [
        "Cleaning physically removes dirt and germs but doesn't necessarily kill them. Sanitizing reduces germ levels to safe public-health standards. Disinfecting kills 99.9%+ of viruses, bacteria and fungi on contact. Each has its place — and serious health protection requires the right level of treatment.",
      ],
    },
    {
      heading: "When disinfection is necessary",
      bullets: [
        "After illness in the household — flu, COVID, measles, hepatitis",
        "High-traffic public areas — banks, schools, government offices",
        "Healthcare facilities — clinics, hospitals, pharmacies",
        "Food businesses — restaurants, supermarkets, catering",
        "Post-funeral, post-birth, post-recovery sanitisation",
        "Periodic preventive treatment for offices and schools",
      ],
    },
    {
      heading: "Our disinfection process",
      bullets: [
        "ULV cold fogging — fine mist reaches every corner",
        "Surface wiping with EPA-registered disinfectants",
        "High-touch point treatment — handles, switches, phones",
        "HVAC vent and air-conditioning unit treatment",
        "Soft surface treatment — sofas, carpets, curtains",
        "Final inspection and certification",
      ],
    },
    {
      heading: "Products used",
      bullets: [
        "Hospital-grade quaternary ammonium compounds",
        "Hydrogen peroxide-based broad-spectrum disinfectants",
        "WHO-approved formulations",
        "EPA-listed virucidal agents",
        "Eco-friendly options for sensitive environments",
      ],
    },
    {
      heading: "Certification provided",
      paragraphs: [
        "After every disinfection service we provide a written certificate stating the date of treatment, products used, areas covered and the technician's certification number. Required by many corporate clients, schools and healthcare facilities.",
      ],
    },
    {
      heading: "Corporate and institutional disinfection",
      bullets: [
        "Offices — periodic sanitisation programmes",
        "Schools — termly disinfection during holidays",
        "Banks and financial institutions",
        "Hospitals and clinics",
        "Restaurants and food premises",
        "Hotels and serviced apartments",
      ],
    },
  ],
  process: standardProcess,
  pricing: {
    note: "Disinfection is priced by area treated. Recurring corporate contracts available.",
    tiers: [
      {
        name: "Home / Apartment",
        price: "₦18,000",
        unit: "per service",
        features: ["Full property fogging", "Surface wiping", "Certificate provided", "2-hour turnaround"],
      },
      {
        name: "Office (medium)",
        price: "₦40,000",
        unit: "per service",
        features: ["Up to 2,000 sqft", "Including HVAC vents", "After-hours service", "Compliance certificate"],
        highlight: true,
        tag: "Most booked",
      },
      {
        name: "Institutional",
        price: "Custom",
        unit: "site quote",
        features: ["Schools & hospitals", "Recurring programme", "Multi-site capable", "Audit-grade reports"],
      },
    ],
  },
  faqs: [
    {
      question: "How long does the disinfection effect last?",
      answer:
        "Active disinfection kills pathogens on contact. Re-contamination begins immediately after treatment. For ongoing protection, we recommend monthly fogging in high-traffic environments.",
    },
    {
      question: "Is the treatment safe for children and pets?",
      answer:
        "Yes — once the recommended ventilation period (1–2 hours) has passed. We use WHO-approved formulations.",
    },
    {
      question: "Do you treat offices outside business hours?",
      answer:
        "Yes — most office disinfection happens evenings or weekends to avoid disruption.",
    },
    {
      question: "Can you disinfect after a confirmed COVID or illness case?",
      answer:
        "Yes. We have specific protocols for post-illness sanitisation including isolation procedures and PPE for our team.",
    },
  ],
  schema: {
    serviceType: "Disinfection",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦18,000 – ₦200,000+",
  },
  related: ["fumigation-service-kaduna", "office-cleaning-kaduna", "deep-cleaning-kaduna"],
};

const airbnb: ServicePage = {
  slug: "airbnb-short-let-cleaning-kaduna",
  seo: {
    title: "Airbnb Cleaning Kaduna | Short Let Cleaning Service | Royal Clean",
    metaDescription:
      "Airbnb and short-let cleaning in Kaduna. Fast 2–4 hour turnover, fresh linen, restocking. Reliable hosts use Royal Clean. Book your turnover today.",
    keywords:
      "airbnb cleaning Kaduna, short let cleaning Kaduna, airbnb turnover Kaduna, vacation rental cleaning Kaduna",
  },
  hero: {
    eyebrow: "Host-Trusted Turnovers",
    h1: "Airbnb and Short Let Cleaning in Kaduna — Fast Turnover, Perfect Results",
    subhead:
      "Reliable 2–4 hour turnovers. Fresh linen, restocked supplies, photo-ready finish. Built for hosts who can't afford a single bad review.",
  },
  intro: [
    "Kaduna's growing NGO sector, business traveller traffic and event circuit have created a thriving short-let market. Royal Clean Kaduna specialises in turnaround cleans for Airbnb, Booking.com and short-let hosts — delivering hotel-grade quality between guests with the speed and reliability that protects your reviews and revenue.",
  ],
  sections: [
    {
      heading: "Why Airbnb cleaning is different from regular cleaning",
      paragraphs: [
        "A regular house clean has hours and forgiving standards. An Airbnb turnover has 4 hours between checkout and check-in, zero room for error, and a guest who will publicly review the moment they spot a hair on the pillow. Hospitality cleaning requires hospitality-grade standards: every surface, every angle, every detail like the front desk of a 4-star hotel.",
      ],
    },
    {
      heading: "What we do between guests",
      bullets: [
        "Strip and replace all bed linen with fresh sets",
        "Bathroom deep clean — toilet, shower, sink, mirror",
        "Towel replacement — bath, hand, face, kitchen",
        "Kitchen reset — dishes, surfaces, fridge wipe",
        "Restock supplies — toilet paper, soap, coffee, tea",
        "Floor cleaning — vacuum and mop throughout",
        "Surface dusting and polishing",
        "Trash removal and bin liners replaced",
        "Photo-ready staging — pillows, cushions, decor",
        "Final inspection against host checklist",
      ],
    },
    {
      heading: "Turnaround time",
      paragraphs: [
        "Standard 2-bedroom apartment turnover takes 2–3 hours. Studio apartments take 90 minutes. Larger properties take 3–4 hours with a 2-person crew. We arrive within 30 minutes of guest checkout and finish before next check-in — guaranteed.",
      ],
    },
    {
      heading: "Our reliability guarantee",
      paragraphs: [
        "We don't cancel. We don't show up late. We don't miss bookings. Hosts depend on us, and we know one missed turnover can cost a 5-star streak. If we ever no-show, the next 3 cleans are free — that's never happened.",
      ],
    },
    {
      heading: "Communication with hosts",
      bullets: [
        "Booking confirmation by WhatsApp",
        "Photos of completed clean before checkout",
        "Damage and stock alerts in real-time",
        "Lost-and-found logging",
        "Optional guest welcome basket setup",
      ],
    },
    {
      heading: "Linen management",
      paragraphs: [
        "We can manage linen separately — collecting used sets, professionally laundering, and bringing fresh sets to every turnover. Fixed monthly fee for high-turnover hosts.",
      ],
    },
    {
      heading: "Kaduna's growing short-let market",
      paragraphs: [
        "With NGOs, oil and gas business, government visitors, family events and growing tourism, Kaduna short-lets are booked 60-80% of the year. That means 30+ turnovers per property annually — making reliable cleaning the single biggest operational cost. Our packaged pricing makes the math simple.",
      ],
    },
  ],
  process: [
    { title: "Add us to your channel manager", description: "We integrate with Airbnb, Booking.com or your host system." },
    { title: "Auto-scheduled turnovers", description: "Bookings sync automatically — no per-clean coordination." },
    { title: "We arrive, clean, photograph", description: "Photos sent for your review before next check-in." },
    { title: "Monthly invoice", description: "Single consolidated invoice — no per-clean payments." },
  ],
  pricing: {
    note: "Per-clean pricing for occasional hosts. Discounted monthly packages for high-turnover properties.",
    tiers: [
      {
        name: "Per Turnover",
        price: "₦12,000",
        unit: "1-bed studio",
        features: ["Standard turnover clean", "Fresh linen swap", "Restocking included", "Photos sent"],
      },
      {
        name: "Per Turnover (3-bed)",
        price: "₦25,000",
        unit: "per clean",
        features: ["Multi-room turnover", "Linen + towels", "Kitchen reset", "Same-day guarantee"],
        highlight: true,
        tag: "Most common",
      },
      {
        name: "Monthly Package",
        price: "Custom",
        unit: "high-turnover",
        features: ["10+ cleans/month", "Save 25%", "Priority scheduling", "Linen management option"],
      },
    ],
  },
  faqs: [
    {
      question: "Can you manage linen separately for me?",
      answer:
        "Yes. We collect used linen, professionally launder, and bring fresh sets to every turnover. Fixed monthly fee available.",
    },
    {
      question: "Do you restock supplies?",
      answer:
        "Yes — toilet paper, hand soap, dish soap, sponges, coffee, tea, sugar, and any guest welcome items you specify. We bill at cost + 10%.",
    },
    {
      question: "What if you find damage or missing items?",
      answer:
        "We photograph and report immediately so you can claim from the guest's deposit before they leave a review.",
    },
    {
      question: "Can you handle same-day turnovers?",
      answer:
        "Yes — that's the standard. We routinely clean a property between an 11am checkout and a 3pm check-in.",
    },
    {
      question: "Do you handle multiple properties?",
      answer:
        "Yes — many of our hosts have 3, 5 or 10+ properties on rotating schedules. We assign dedicated crews for portfolio hosts.",
    },
  ],
  schema: {
    serviceType: "Short-Let Cleaning",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦12,000 – ₦40,000",
  },
  related: ["house-cleaning-kaduna", "deep-cleaning-kaduna", "disinfection-sanitization-kaduna"],
};

const eventCleaning: ServicePage = {
  slug: "event-cleaning-kaduna",
  seo: {
    title: "Event Cleaning Kaduna | Before and After Event Clean | Royal Clean",
    metaDescription:
      "Event cleaning in Kaduna for weddings, parties, corporate events, conferences. Before, during and after. Standby staff. Same-day cleanup.",
    keywords:
      "event cleaning Kaduna, wedding cleaning Kaduna, party cleaning Kaduna, after event cleanup Kaduna",
  },
  hero: {
    eyebrow: "Events & Functions",
    h1: "Event Cleaning Service in Kaduna — Before, During and After",
    subhead:
      "From weddings to corporate launches, we handle the cleaning so you handle the moments. Pre-event prep, on-call standby crew, full post-event cleanup.",
  },
  intro: [
    "Events are unforgettable — for hosts and guests alike. The cleaning before and after them shouldn't be. Royal Clean Kaduna provides full event cleaning support for weddings, naming ceremonies, corporate launches, conferences, funerals, parties and concerts across Kaduna. Whether you need pre-event venue prep, on-call cleaning during the event, or full overnight cleanup afterwards, we have the team and equipment to deliver.",
  ],
  sections: [
    {
      heading: "Types of events we clean",
      bullets: [
        "Weddings, traditional ceremonies and receptions",
        "Naming ceremonies and family functions",
        "Corporate events — launches, AGMs, training",
        "Conferences and seminars",
        "Funerals, memorial services and wakes",
        "Birthday parties and anniversary celebrations",
        "Concerts, charity events and fundraisers",
        "Religious gatherings and crusades",
      ],
    },
    {
      heading: "Before-event cleaning",
      paragraphs: [
        "We arrive 12–24 hours before your event to deep-clean the venue. Floors mopped and polished, restrooms deep-cleaned and stocked, surfaces wiped, decor dusted, glass doors polished. Your venue greets the first guest looking immaculate.",
      ],
    },
    {
      heading: "During-event standby cleaning",
      paragraphs: [
        "For larger events, we provide on-call cleaning crews that handle spills, restock restrooms, manage waste and keep common areas presentable while your guests enjoy themselves. Crews work discreetly in uniform without disrupting the atmosphere.",
      ],
    },
    {
      heading: "After-event cleanup",
      bullets: [
        "Full waste collection and disposal",
        "Furniture rearrangement and venue restoration",
        "Floor cleaning — sweep, mop, polish",
        "Restroom deep cleaning and sanitisation",
        "Decor and equipment dismantling support",
        "Spill cleanup and stain treatment",
        "Glass and mirror polishing",
        "Final venue handover photos",
      ],
    },
    {
      heading: "Timing — we work around your schedule",
      paragraphs: [
        "Most events run late, and venues often need to be returned to owners by morning. Our overnight crews routinely deliver fully cleaned venues by 6am after a midnight finish. We also handle multi-day event cycles for conferences and weddings spanning 3+ days.",
      ],
    },
    {
      heading: "Kaduna wedding and event scene",
      paragraphs: [
        "Kaduna's growing wedding industry, business hosting and cultural calendar mean Royal Clean handles 2–4 events every weekend during peak seasons. We have established relationships with major Kaduna venues, event planners and caterers — making coordination seamless.",
      ],
    },
  ],
  process: [
    { title: "Discuss event details", description: "Date, venue, scale, schedule and cleaning needs." },
    { title: "Get fixed quote", description: "Single price covering pre, during and after — no surprises." },
    { title: "Pre-event arrival", description: "Crew arrives 12–24 hours before and preps venue fully." },
    { title: "Cleanup completed", description: "Venue returned to owner clean. Photos sent for confirmation." },
  ],
  pricing: {
    note: "Event cleaning is quoted per event. Pricing depends on venue size, guest count and scope.",
    tiers: [
      {
        name: "Small Event",
        price: "₦40,000",
        unit: "up to 100 guests",
        features: ["Pre-event prep", "Post-event cleanup", "4-person crew", "Same-day service"],
      },
      {
        name: "Wedding / Mid-Event",
        price: "₦100,000",
        unit: "100–500 guests",
        features: ["Full pre + post", "Standby crew option", "Overnight cleanup", "Venue restoration"],
        highlight: true,
        tag: "Most popular",
      },
      {
        name: "Large / Multi-Day",
        price: "Custom",
        unit: "site quote",
        features: ["Conferences, concerts", "Multi-crew teams", "24/7 coverage", "Multi-venue option"],
      },
    ],
  },
  faqs: [
    {
      question: "How early do I need to book?",
      answer:
        "For weekend events during peak season, book 2–3 weeks ahead. Mid-week events can usually be booked 3–5 days ahead. Emergency same-day cleanup is available for an after-hours premium.",
    },
    {
      question: "Do you handle waste disposal?",
      answer:
        "Yes — we handle bagged waste removal and disposal. For very large events with significant waste, we coordinate skip hire on your behalf.",
    },
    {
      question: "Can you work with my event planner?",
      answer:
        "Yes — we coordinate directly with planners, venues and caterers. Many Kaduna planners use us as their preferred cleaning vendor.",
    },
    {
      question: "Will the venue be ready by morning?",
      answer:
        "Yes. Standard handover by 6am for events finishing at midnight. We'll commit to your specific deadline before booking.",
    },
  ],
  schema: {
    serviceType: "Event Cleaning",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦40,000 – ₦500,000+",
  },
  related: ["deep-cleaning-kaduna", "office-cleaning-kaduna", "disinfection-sanitization-kaduna"],
};

const industrial: ServicePage = {
  slug: "industrial-cleaning-kaduna",
  seo: {
    title: "Industrial Cleaning Kaduna | Factory & Warehouse Cleaning | Royal Clean",
    metaDescription:
      "Industrial cleaning in Kaduna for factories, warehouses, food processing and manufacturing. HSE-compliant, after-hours scheduling, contract programmes.",
    keywords:
      "industrial cleaning Kaduna, factory cleaning Kaduna, warehouse cleaning Kaduna, manufacturing cleaning Kaduna, Kakuri industrial cleaning",
  },
  hero: {
    eyebrow: "Industrial & Manufacturing",
    h1: "Industrial Cleaning Service in Kaduna — Factory, Warehouse and Facility Cleaning",
    subhead:
      "Heavy-duty industrial cleaning for Kaduna's manufacturing, food processing and warehousing sector. HSE-compliant, insured, after-hours capable.",
  },
  intro: [
    "Royal Clean Kaduna runs industrial cleaning contracts for factories, warehouses, food processing facilities and manufacturing plants across the Kakuri Industrial Area, Mando Road and surrounding industrial zones. Industrial cleaning is fundamentally different from commercial cleaning — it requires heavy-duty equipment, specialist agents, HSE compliance and crews trained to work safely around machinery.",
  ],
  sections: [
    {
      heading: "What industrial cleaning covers",
      bullets: [
        "Factories — assembly lines, equipment, floors, walls",
        "Warehouses — racking, floors, dock areas, ceiling",
        "Food processing — sanitation-grade cleaning, NAFDAC compliant",
        "Manufacturing plants — heavy machinery, oil and grease removal",
        "Cement and chemical facilities — specialist PPE protocols",
        "Auto workshops and garages",
        "Refineries and oil facilities (specialist quote)",
      ],
    },
    {
      heading: "Our industrial equipment",
      bullets: [
        "Heavy-duty pressure washers up to 4,000 PSI",
        "Industrial wet/dry vacuums",
        "Walk-behind floor scrubbers",
        "Ride-on sweepers for large facilities",
        "Telescopic poles and scissor lift access",
        "Truck-mounted extraction units",
        "Specialist degreasing chemicals",
        "Steam cleaners for sanitation work",
      ],
    },
    {
      heading: "High-level cleaning",
      paragraphs: [
        "Industrial buildings have ceilings, rafters, beams, ductwork and lighting that accumulate grease, dust and contamination over years. Our high-level cleaning teams use scissor lifts, scaffolding and telescopic equipment to safely access and clean these areas without disrupting production.",
      ],
    },
    {
      heading: "Floor cleaning",
      bullets: [
        "Concrete — pressure wash, degrease, seal",
        "Epoxy and resin floors — pH-balanced cleaning to preserve coating",
        "Tile and ceramic — grout deep clean",
        "Vinyl industrial flooring — strip and reseal",
        "Loading dock and warehouse floors — heavy soil removal",
      ],
    },
    {
      heading: "Safety and HSE compliance",
      bullets: [
        "All technicians PPE-equipped (helmets, gloves, eye protection, harnesses)",
        "Method statements and risk assessments provided before work",
        "Working at heights certified",
        "Confined space entry trained",
        "COSHH-compliant chemical handling",
        "Liability insurance covering ₦50M+ work",
      ],
    },
    {
      heading: "After-hours and weekend scheduling",
      paragraphs: [
        "We schedule cleaning around your production windows — overnight, weekends or during planned shutdowns. For 24/7 facilities, we coordinate cleaning windows zone-by-zone to keep operations running.",
      ],
    },
    {
      heading: "Regular contracts vs one-off projects",
      paragraphs: [
        "Most industrial clients combine monthly maintenance cleaning with quarterly or annual deep cleans. One-off projects suit shutdown maintenance, post-flood recovery, or pre-audit deep cleans before regulatory inspections.",
      ],
    },
    {
      heading: "Kaduna industrial zones we serve",
      bullets: [
        "Kakuri Industrial Area",
        "Mando Road industrial estates",
        "Kaduna refinery vicinity",
        "Ungwan Sanusi industrial zone",
        "Rigasa logistics warehouses",
        "Kaduna Inland Dry Port operators",
      ],
    },
  ],
  process: [
    { title: "Site visit & survey", description: "Free survey covering scope, hazards, scheduling and access." },
    { title: "Method statement & quote", description: "Detailed work plan, risk assessment and fixed quote within 48 hours." },
    { title: "HSE briefing & start", description: "Toolbox talk, PPE check, signed permits — work begins safely." },
    { title: "Sign-off & reporting", description: "Walkthrough with site manager. Photo reports for compliance files." },
  ],
  pricing: {
    note: "Industrial cleaning is always quoted per site visit. Below are starting indicators.",
    tiers: [
      {
        name: "Small Facility",
        price: "₦150,000",
        unit: "from",
        features: ["Up to 5,000 sqft", "One-off deep clean", "HSE compliant", "Photo reporting"],
      },
      {
        name: "Medium Factory",
        price: "₦400,000",
        unit: "per project",
        features: ["5,000–20,000 sqft", "High-level cleaning", "Multi-day scheduling", "After-hours capable"],
        highlight: true,
        tag: "Most projects",
      },
      {
        name: "Enterprise Contract",
        price: "Custom",
        unit: "monthly",
        features: ["Multi-site", "Dedicated crews", "Compliance reporting", "24/7 response"],
      },
    ],
  },
  testimonials: [
    {
      name: "Plant Manager",
      location: "Kakuri Industrial Area",
      quote: "Royal Clean handled our annual shutdown clean across 3 buildings in 4 days. Zero safety incidents.",
      rating: 5,
    },
    {
      name: "Warehouse Operations",
      location: "Mando Road, Kaduna",
      quote: "We've used 4 cleaning vendors before. Royal Clean is the only one that delivers HSE documentation correctly.",
      rating: 5,
    },
  ],
  faqs: [
    {
      question: "Are you HSE compliant?",
      answer:
        "Yes — we provide method statements and risk assessments before every project. All technicians are PPE-equipped, working-at-heights certified and trained on COSHH chemical handling.",
    },
    {
      question: "Can you work during production?",
      answer:
        "Most industrial cleaning happens during shutdowns, overnight or weekends to avoid production disruption. We coordinate zone-by-zone for 24/7 facilities.",
    },
    {
      question: "Do you handle food-grade facilities?",
      answer:
        "Yes — with sanitation-grade chemicals, NAFDAC-compliant protocols and food-safe documentation suitable for regulatory inspections.",
    },
    {
      question: "What's the minimum project size?",
      answer:
        "We typically take projects from ₦150,000+. Smaller industrial sites are usually better served by our commercial office cleaning service.",
    },
    {
      question: "Do you have insurance for industrial work?",
      answer:
        "Yes — public liability insurance covering ₦50M+ in damages, plus employer's liability for our crews. Certificates available on request.",
    },
  ],
  schema: {
    serviceType: "Industrial Cleaning",
    areaServed: ["Kaduna", "Kaduna State"],
    priceRange: "₦150,000 – ₦5,000,000+",
  },
  related: ["post-construction-cleaning-kaduna", "office-cleaning-kaduna", "disinfection-sanitization-kaduna"],
};

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export const services: ServicePage[] = [
  // Cleaning (8)
  houseCleaning,
  deepCleaning,
  officeCleaning,
  postConstruction,
  carpetCleaning,
  sofaCleaning,
  windowCleaning,
  moveInOut,
  // Fumigation (5)
  fumigationService,
  pestControl,
  cockroach,
  bedBug,
  mosquito,
  // Specialist (4)
  disinfection,
  airbnb,
  eventCleaning,
  industrial,
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);

// Convenience grouping for nav
export const serviceGroups = {
  cleaning: [
    "house-cleaning-kaduna",
    "deep-cleaning-kaduna",
    "office-cleaning-kaduna",
    "post-construction-cleaning-kaduna",
    "carpet-cleaning-kaduna",
    "sofa-upholstery-cleaning-kaduna",
    "window-cleaning-kaduna",
    "move-in-move-out-cleaning-kaduna",
  ],
  fumigation: [
    "fumigation-service-kaduna",
    "pest-control-kaduna",
    "cockroach-treatment-kaduna",
    "bed-bug-treatment-kaduna",
    "mosquito-control-kaduna",
  ],
  specialist: [
    "disinfection-sanitization-kaduna",
    "airbnb-short-let-cleaning-kaduna",
    "event-cleaning-kaduna",
    "industrial-cleaning-kaduna",
  ],
} as const;
