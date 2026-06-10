import { MessageSquare, Phone } from "lucide-react";
import { siteConfig, telLink, whatsappLink } from "@/config/site";

/**
 * Fixed floating WhatsApp + click-to-call buttons on every page.
 * Required by site-wide UX spec: WhatsApp button fixed bottom-right,
 * phone always reachable.
 */
export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:bottom-6 md:right-6">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp — ${siteConfig.name}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl ring-4 ring-[#25D366]/20 transition hover:scale-105"
      >
        <MessageSquare className="h-6 w-6" />
      </a>
      <a
        href={telLink}
        aria-label={`Call ${siteConfig.name} ${siteConfig.phoneDisplay}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl ring-4 ring-primary/20 transition hover:scale-105 md:hidden"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
