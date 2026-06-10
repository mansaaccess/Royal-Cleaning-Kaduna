// Rich content schema. Add entries to services.ts / areas.ts / blog.ts
// to automatically generate fully SEO-optimized pages.

export interface SeoMeta {
  title: string; // <60 chars
  metaDescription: string; // <160 chars
  keywords?: string; // comma-separated
  ogImage?: string; // absolute URL or imported asset path
}

export interface Section {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  unit?: string; // "per visit", "per month"
  features: string[];
  highlight?: boolean;
  tag?: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Testimonial {
  name: string;
  location?: string;
  quote: string;
  rating?: number; // 1-5
}

export interface ServicePage {
  slug: string;
  seo: SeoMeta;
  hero: {
    eyebrow?: string;
    h1: string;
    subhead: string;
    image?: string;
  };
  intro: string[];
  sections: Section[];
  process?: ProcessStep[];
  pricing?: {
    note?: string;
    tiers: PricingTier[];
  };
  gallery?: GalleryImage[];
  testimonials?: Testimonial[];
  faqs: FAQ[];
  schema?: {
    serviceType: string;
    areaServed?: string[];
    priceRange?: string;
  };
  related?: string[]; // slugs of related services
  relatedAreas?: string[]; // slugs of related areas
}

export interface AreaPage {
  slug: string;
  seo: SeoMeta;
  hero: {
    h1: string;
    subhead: string;
    image?: string;
  };
  neighborhoods?: string[];
  intro: string[];
  sections: Section[];
  popularServices?: string[]; // slugs from services
  testimonials?: Testimonial[];
  faqs: FAQ[];
}

export interface BlogPost {
  slug: string;
  seo: SeoMeta;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date
  updatedAt?: string;
  author?: string;
  coverImage?: string;
  readingMinutes?: number;
  body: Section[]; // sequential sections form the article body
  faqs?: FAQ[];
  related?: string[]; // related blog slugs
  relatedServices?: string[]; // service slugs to cross-link
}
