import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { JsonLd, localBusinessSchema } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

const seoDescription =
  "Royal Clean Kaduna provides 24/7 cleaning and fumigation in Kaduna, including house cleaning, deep cleaning, office cleaning, pest control, and disinfection.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "robots", content: "index, follow" },
      { name: "author", content: siteConfig.name },
      { name: "description", content: seoDescription },
      { property: "og:site_name", content: siteConfig.name },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_NG" },
      { property: "og:description", content: seoDescription },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:description", content: seoDescription },
      { title: "Royal Clean Kaduna | Professional Cleaning and Fumigation #" },
      { property: "og:title", content: "Royal Clean Kaduna | Professional Cleaning and Fumigation #" },
      { name: "twitter:title", content: "Royal Clean Kaduna | Professional Cleaning and Fumigation #" },
      { name: "description", content: "A modern, professional homepage for Royal Clean Kaduna, showcasing premium cleaning services with gradients and animations." },
      { property: "og:description", content: "A modern, professional homepage for Royal Clean Kaduna, showcasing premium cleaning services with gradients and animations." },
      { name: "twitter:description", content: "A modern, professional homepage for Royal Clean Kaduna, showcasing premium cleaning services with gradients and animations." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b8158036-b8cc-4874-af1c-ad238dc30dd5/id-preview-e83a1aca--52a4e46e-ae2b-498c-a239-be7bf93bf3a1.lovable.app-1781092840337.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b8158036-b8cc-4874-af1c-ad238dc30dd5/id-preview-e83a1aca--52a4e46e-ae2b-498c-a239-be7bf93bf3a1.lovable.app-1781092840337.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <JsonLd data={localBusinessSchema} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}
