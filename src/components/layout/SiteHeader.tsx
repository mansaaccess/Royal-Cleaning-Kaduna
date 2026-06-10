import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Crown, Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig, telLink, whatsappLink } from "@/config/site";
import { services, serviceGroups } from "@/content/services";
import { areas } from "@/content/areas";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | "services" | "areas">(null);

  const cleaning = serviceGroups.cleaning.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean);
  const fumigation = serviceGroups.fumigation.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean);
  const specialist = serviceGroups.specialist.map((slug) => services.find((s) => s.slug === slug)!).filter(Boolean);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-serif text-lg font-bold">
          <Crown className="h-6 w-6 text-primary" />
          <span>{siteConfig.shortName}</span>
          <span className="text-xs font-sans font-normal text-muted-foreground">Kaduna</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>
            Home
          </Link>

          <ServicesDropdown
            isOpen={openMenu === "services"}
            onOpen={() => setOpenMenu("services")}
            onClose={() => setOpenMenu((m) => (m === "services" ? null : m))}
            groups={[
              { label: "Cleaning", items: cleaning },
              { label: "Fumigation", items: fumigation },
              { label: "Specialist", items: specialist },
            ]}
          />

          <AreasDropdown
            isOpen={openMenu === "areas"}
            onOpen={() => setOpenMenu("areas")}
            onClose={() => setOpenMenu((m) => (m === "areas" ? null : m))}
            items={areas}
          />

          <Link to="/pricing" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground" activeProps={{ className: "text-primary" }}>Pricing</Link>
          <Link to="/how-it-works" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground" activeProps={{ className: "text-primary" }}>How it works</Link>
          <Link to="/about" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground" activeProps={{ className: "text-primary" }}>About</Link>
          <Link to="/blog" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground" activeProps={{ className: "text-primary" }}>Blog</Link>
          <Link to="/contact" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground" activeProps={{ className: "text-primary" }}>Contact</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a href={telLink} className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary">
            <Phone className="h-4 w-4" /> {siteConfig.phoneDisplay}
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener" className="inline-flex h-9 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90">
            Book Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent" aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/40 bg-background max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-4 space-y-1">
            <Link to="/" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">Home</Link>
            <Link to="/pricing" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">Pricing</Link>
            <Link to="/how-it-works" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">How it works</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">About</Link>
            <Link to="/blog" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">Blog</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">Contact</Link>

            <div className="pt-2 border-t border-border/40">
              <p className="py-2 text-xs font-semibold uppercase text-muted-foreground">Cleaning Services</p>
              {cleaning.map((s) => (
                <a key={s.slug} href={`/${s.slug}`} className="block py-1.5 text-sm text-foreground/80">{s.hero.h1}</a>
              ))}
            </div>
            <div className="pt-2 border-t border-border/40">
              <p className="py-2 text-xs font-semibold uppercase text-muted-foreground">Fumigation</p>
              {fumigation.map((s) => (
                <a key={s.slug} href={`/${s.slug}`} className="block py-1.5 text-sm text-foreground/80">{s.hero.h1}</a>
              ))}
            </div>
            <div className="pt-2 border-t border-border/40">
              <p className="py-2 text-xs font-semibold uppercase text-muted-foreground">Specialist</p>
              {specialist.map((s) => (
                <a key={s.slug} href={`/${s.slug}`} className="block py-1.5 text-sm text-foreground/80">{s.hero.h1}</a>
              ))}
            </div>
            <div className="pt-2 border-t border-border/40">
              <p className="py-2 text-xs font-semibold uppercase text-muted-foreground">Areas</p>
              {areas.map((a) => (
                <a key={a.slug} href={`/${a.slug}`} className="block py-1.5 text-sm text-foreground/80">
                  {a.hero.h1.replace("Cleaning Services in ", "").replace(", Kaduna", "")}
                </a>
              ))}
              <Link to="/service-areas" onClick={() => setOpen(false)} className="block py-1.5 text-sm font-semibold text-primary">All service areas →</Link>
            </div>
            <div className="pt-3 flex flex-col gap-2">
              <a href={telLink} className="inline-flex h-10 items-center justify-center rounded-md border text-sm font-medium">
                <Phone className="mr-2 h-4 w-4" /> Call {siteConfig.phoneDisplay}
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener" className="inline-flex h-10 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                Book on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ServicesDropdown({
  isOpen,
  onOpen,
  onClose,
  groups,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  groups: { label: string; items: { slug: string; hero: { h1: string } }[] }[];
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        onClick={() => (isOpen ? onClose() : onOpen())}
        className={cn(
          "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground",
          isOpen && "text-foreground",
        )}
      >
        Services <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full w-[42rem] rounded-xl border border-border bg-popover p-4 shadow-2xl grid grid-cols-3 gap-4">
          {groups.map((g) => (
            <div key={g.label}>
              <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-primary">{g.label}</p>
              {g.items.map((item) => (
                <a key={item.slug} href={`/${item.slug}`} className="block rounded-md px-2 py-1.5 text-sm text-foreground/80 hover:bg-accent hover:text-foreground">
                  {item.hero.h1}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AreasDropdown({
  isOpen,
  onOpen,
  onClose,
  items,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  items: { slug: string; hero: { h1: string } }[];
}) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        onClick={() => (isOpen ? onClose() : onOpen())}
        className={cn(
          "inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground",
          isOpen && "text-foreground",
        )}
      >
        Areas <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full w-72 rounded-xl border border-border bg-popover p-2 shadow-2xl">
          <Link to="/service-areas" className="block rounded-md px-3 py-2 text-sm font-semibold text-primary hover:bg-accent" onClick={onClose}>
            All service areas →
          </Link>
          <div className="my-1 h-px bg-border" />
          {items.map((item) => (
            <a key={item.slug} href={`/${item.slug}`} className="block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground">
              {item.hero.h1.replace("Cleaning Services in ", "").replace(", Kaduna", "")}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
