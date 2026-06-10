import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getPostBySlug, blogPosts } from "@/content/blog";
import { services } from "@/content/services";
import { siteConfig } from "@/config/site";
import { JsonLd, articleSchema, faqSchema, breadcrumbSchema } from "@/components/seo/JsonLd";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { post } = loaderData;
    const url = `${siteConfig.url}/blog/${post.slug}`;
    return {
      meta: [
        { title: post.seo.title },
        { name: "description", content: post.seo.metaDescription },
        ...(post.seo.keywords ? [{ name: "keywords", content: post.seo.keywords }] : []),
        { property: "og:title", content: post.seo.title },
        { property: "og:description", content: post.seo.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(post.coverImage ? [{ property: "og:image", content: post.coverImage }] : []),
        { property: "article:published_time", content: post.publishedAt },
        ...(post.updatedAt ? [{ property: "article:modified_time", content: post.updatedAt }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: BlogPostView,
  notFoundComponent: () => (
    <div className="container mx-auto px-4 py-24 text-center">
      <h1 className="font-serif text-3xl">Article not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-primary">View all articles →</Link>
    </div>
  ),
});

function BlogPostView() {
  const { post } = Route.useLoaderData() as { post: NonNullable<ReturnType<typeof getPostBySlug>> };
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const related = (post.relatedServices ?? [])
    .map((slug: string) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.url },
            { name: "Blog", url: `${siteConfig.url}/blog` },
            { name: post.title, url },
          ]),
          articleSchema({
            headline: post.title,
            description: post.excerpt,
            datePublished: post.publishedAt,
            dateModified: post.updatedAt,
            author: post.author ?? siteConfig.name,
            image: post.coverImage,
            url,
          }),
          ...(post.faqs ? [faqSchema(post.faqs)] : []),
        ]}
      />

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <nav className="mb-6 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link> /{" "}
          <Link to="/blog" className="hover:text-foreground">Blog</Link> /{" "}
          <span className="text-foreground">{post.title}</span>
        </nav>

        <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight">{post.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>
        <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />
            {new Date(post.publishedAt).toLocaleDateString("en-NG", { year: "numeric", month: "long", day: "numeric" })}
          </span>
          {post.readingMinutes && (
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {post.readingMinutes} min read</span>
          )}
        </div>

        {post.coverImage && (
          <img src={post.coverImage} alt={post.title} className="mt-8 w-full rounded-2xl" />
        )}

        <div className="mt-10 space-y-8">
          {post.body.map((s, i) => (
            <section key={i}>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">{s.heading}</h2>
              {s.paragraphs?.map((p, j) => (
                <p key={j} className="text-foreground/85 leading-relaxed mb-3">{p}</p>
              ))}
              {s.bullets && (
                <ul className="list-disc pl-6 space-y-1.5 text-foreground/85">
                  {s.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="font-serif text-2xl font-bold mb-6">FAQs</h2>
            <div className="space-y-3">
              {post.faqs.map((f, i) => (
                <details key={i} className="group rounded-xl border bg-card p-5">
                  <summary className="cursor-pointer font-semibold">{f.question}</summary>
                  <p className="mt-3 text-foreground/85">{f.answer}</p>
                </details>
              ))}
            </div>
          </section>
        )}
      </article>

      {related.length > 0 && (
        <section className="container mx-auto px-4 pb-16 max-w-3xl">
          <h2 className="font-serif text-xl font-bold mb-4">Related services</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {related.map((s) => (
              <a
                key={s.slug}
                href={`/${s.slug}`}
                className="rounded-xl border bg-card p-4 hover:border-primary inline-flex items-center justify-between"
              >
                <span className="font-medium">{s.hero.h1}</span>
                <ArrowRight className="h-4 w-4 text-primary" />
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="border-t bg-card/40 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="font-serif text-xl font-bold mb-4">Keep reading</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {blogPosts.filter((p) => p.slug !== post.slug).slice(0, 4).map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="rounded-xl border bg-card p-4 hover:border-primary">
                <p className="font-medium">{p.title}</p>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
