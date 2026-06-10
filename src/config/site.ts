export const siteConfig = {
  name: "Royal Clean Kaduna",
  shortName: "Royal Clean",
  url: "https://royalcleankd.lovable.app",
  tagline: "Kaduna's 24/7 Cleaning & Fumigation Service",
  description:
    "Royal Clean Kaduna delivers 24/7 house, office, sofa, deep cleaning and fumigation services across Kaduna. Vetted, insured, 5-star rated cleaners.",
  phone: "+2349068856773",
  phoneDisplay: "0906 885 6773",
  whatsapp: "2349068856773", // digits only, no +
  email: "Royalcleankaduna@gmail.com",
  gmbEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502009.98118852265!2d7.01909985!3d10.582849500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac0b531c7fccfcfd%3A0x74e15318aba84c78!2sRoyal%20Clean%20Kaduna%20%7C%20Professional%20Cleaning%20and%20Fumigation%20Services!5e0!3m2!1sen!2sng!4v1781093527167!5m2!1sen!2sng",
  gmbShareUrl: "https://share.google/pbbOFk6MqWa9Fh7Pv",
  address: {
    street: "Kaduna",
    city: "Kaduna",
    state: "Kaduna State",
    country: "Nigeria",
    postalCode: "800001",
  },
  geo: { latitude: 10.5222, longitude: 7.4383 },
  hours: "Mo-Su 00:00-23:59", // 24/7
  hoursDisplay: "Open 24 hours, 7 days a week",
  priceRange: "₦₦",
  social: {
    instagram: "https://instagram.com/royalcleankaduna",
    facebook: "https://facebook.com/royalcleankaduna",
    twitter: "https://twitter.com/royalcleankaduna",
  },
};

export const whatsappLink = (msg = "I'd like to book a cleaning service in Kaduna") =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${siteConfig.phone}`;
