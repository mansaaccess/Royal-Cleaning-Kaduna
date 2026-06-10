import { siteConfig } from "@/config/site";

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const openingHoursSpecification = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "00:00",
  closes: "23:59",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  image: `${siteConfig.url}/og-image.jpg`,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: siteConfig.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    addressCountry: siteConfig.address.country,
    postalCode: siteConfig.address.postalCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  openingHours: "Mo-Su 00:00-23:59",
  openingHoursSpecification,
  areaServed: { "@type": "City", name: "Kaduna" },
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook, siteConfig.social.twitter],
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

const PEST_CONTROL_TYPES = new Set([
  "Fumigation",
  "Pest Control",
  "Cockroach Treatment",
  "Bed Bug Treatment",
  "Mosquito Control",
]);

export const serviceSchema = (params: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  priceRange?: string;
  areaServed?: string[];
}) => {
  const isPest = PEST_CONTROL_TYPES.has(params.serviceType);
  return {
    "@context": "https://schema.org",
    "@type": isPest ? "PestControlService" : "CleaningService",
    name: params.name,
    description: params.description,
    serviceType: params.serviceType,
    url: params.url,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: (params.areaServed ?? ["Kaduna"]).map((a) => ({ "@type": "City", name: a })),
    ...(params.priceRange ? { offers: { "@type": "Offer", priceCurrency: "NGN", description: params.priceRange } } : {}),
  };
};

export const contactPageSchema = (url: string) => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${siteConfig.name}`,
  url,
  mainEntity: { "@id": `${siteConfig.url}/#organization` },
});

export const articleSchema = (params: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: params.headline,
  description: params.description,
  datePublished: params.datePublished,
  dateModified: params.dateModified ?? params.datePublished,
  author: { "@type": "Organization", name: params.author },
  publisher: { "@id": `${siteConfig.url}/#organization` },
  ...(params.image ? { image: params.image } : {}),
  mainEntityOfPage: params.url,
});
