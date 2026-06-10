import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/content/blog";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Cleaning Tips & Guides for Kaduna Homes | Royal Clean Blog" },
      {
        name: "description",
        content:
          "Practical cleaning, fumigation and home care guides written for Kaduna residents — from pricing breakdowns to seasonal cleaning checklists.",
      },
      { property: "og:title", content: "Royal Clean Kaduna Blog" },
      { property: "og:description", content: "Cleaning tips, guides and pricing insights for Kaduna." },
    ],
    links: [{ rel: "canonical", href: `${siteConfig.url}/blog` }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const sorted = [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  return (
    <div className="container mx-auto px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">The Royal Journal</p>
      <h1 className="font-serif text-4xl md:text-5xl font-bold">Cleaning insights for Kaduna</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Honest pricing breakdowns, seasonal checklists and local guides written by professional cleaners.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((p) => (
          <Link
            key={p.slug}
            to="/blog/$slug"
            params={{ slug: p.slug }}
            className="group rounded-2xl border bg-card p-6 hover:border-primary"
          >
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />
                {new Date(p.publishedAt).toLocaleDateString("en-NG", { month: "short", day: "numeric", year: "numeric" })}
              </span>
              {p.readingMinutes && (
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.readingMinutes} min</span>
              )}
            </div>
            <h2 className="mt-3 font-serif text-xl font-bold group-hover:text-primary line-clamp-2">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>
            <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">
              Read article <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
