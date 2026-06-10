import { Link } from "@tanstack/react-router";
import { Crown, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { siteConfig, whatsappLink, telLink } from "@/config/site";
import { services } from "@/content/services";
import { areas } from "@/content/areas";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card text-card-foreground">
      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-[1fr_1.2fr] items-center">
          <div>
            <h2 className="font-serif text-2xl font-bold">Find us on Google</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Visit our Google Business Profile for reviews, photos, and directions. We're open 24/7 across {siteConfig.address.city}.
            </p>
            <a
              href={siteConfig.gmbShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
            >
              View on Google Maps
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/40 shadow-sm">
            <iframe
              src={siteConfig.gmbEmbedUrl}
              title={`${siteConfig.name} on Google Maps`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-serif text-lg font-bold">
            <Crown className="h-6 w-6 text-primary" />
            {siteConfig.shortName}
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">{siteConfig.description}</p>
          <div className="mt-4 flex gap-3">
            <a href={siteConfig.social.instagram} aria-label="Instagram" target="_blank" rel="noopener">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
            <a href={siteConfig.social.facebook} aria-label="Facebook" target="_blank" rel="noopener">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">Services</h3>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <a href={`/${s.slug}`} className="text-muted-foreground hover:text-foreground">
                  {s.hero.h1}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">Areas We Serve</h3>
          <ul className="space-y-2 text-sm">
            {areas.map((a) => (
              <li key={a.slug}>
                <a href={`/${a.slug}`} className="text-muted-foreground hover:text-foreground">
                  {a.hero.h1.replace("Cleaning Services in ", "").replace(", Kaduna", "")}
                </a>
              </li>
            ))}
            <li>
              <Link to="/service-areas" className="text-primary font-medium">All areas →</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5" /><a href={telLink}>{siteConfig.phoneDisplay}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5" /><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5" />{siteConfig.address.city}, {siteConfig.address.state}</li>
          </ul>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="mt-4 inline-flex h-10 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground">
            Book on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
            <Link to="/faq" className="hover:text-foreground">FAQ</Link>
            <Link to="/contact" className="hover:text-foreground">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
