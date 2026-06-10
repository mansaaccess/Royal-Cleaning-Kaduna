import { createFileRoute } from "@tanstack/react-router";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: `Privacy Policy | ${siteConfig.name}` },
      { name: "description", content: `How ${siteConfig.name} collects, uses and protects the personal information you share when booking our cleaning service in Kaduna.` },
      { property: "og:title", content: `Privacy Policy | ${siteConfig.name}` },
      { property: "og:description", content: `Privacy policy for ${siteConfig.name}.` },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.url}/privacy-policy` }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="font-serif text-4xl md:text-5xl font-bold">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="prose prose-neutral mt-8 max-w-none space-y-6 text-foreground/85 leading-relaxed">
        <p>
          {siteConfig.name} ("we", "us", "our") respects your privacy. This page explains what information we collect when you contact us or book our cleaning and fumigation services in Kaduna, how we use it, and the rights you have over it.
        </p>

        <div>
          <h2 className="font-serif text-2xl font-bold mt-8 mb-3">Information we collect</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Contact details you provide — name, phone number, email address, service address.</li>
            <li>Booking details — service type, preferred date and time, special instructions.</li>
            <li>Payment confirmation details (we do not store card numbers).</li>
            <li>Standard website analytics — IP, browser, pages viewed — to improve our site.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold mt-8 mb-3">How we use your information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To deliver the cleaning or fumigation service you booked.</li>
            <li>To contact you about your booking, quote, or follow-up.</li>
            <li>To send service reminders and recurring booking confirmations (only if you have opted in).</li>
            <li>To improve our service quality and respond to feedback.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold mt-8 mb-3">Information sharing</h2>
          <p>
            We never sell your personal information. We share it only with the cleaning crew assigned to your booking, and with payment or messaging providers (e.g. WhatsApp) strictly to complete your booking.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold mt-8 mb-3">Data retention</h2>
          <p>
            We retain booking records for as long as required for service quality, accounting and legal compliance. You can request deletion at any time by contacting us.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold mt-8 mb-3">Your rights</h2>
          <p>
            You may request a copy of the data we hold about you, ask us to correct it, or ask us to delete it. We will respond within 30 days.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold mt-8 mb-3">Cookies</h2>
          <p>
            Our website uses standard cookies for analytics and to remember your preferences. You can disable cookies in your browser at any time.
          </p>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold mt-8 mb-3">Contact</h2>
          <p>
            For any privacy-related question, email <a className="text-primary underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call <a className="text-primary underline" href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
