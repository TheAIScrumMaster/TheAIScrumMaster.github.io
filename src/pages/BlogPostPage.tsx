import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <p className="font-body text-muted-foreground">Article not found.</p>
          <Link to="/" className="mt-4 inline-block font-body text-sm text-primary hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-6 pt-28 pb-24 max-w-3xl">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          All articles
        </Link>

        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-medium tracking-wide text-primary">
            {post.category}
          </span>
          <span className="font-body text-xs text-muted-foreground">{post.date}</span>
          <span className="font-body text-xs text-muted-foreground">{post.readTime}</span>
        </div>

        <h1 className="font-display text-4xl md:text-5xl leading-tight mb-6">{post.title}</h1>
        <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12 border-b border-border pb-12">
          {post.snippet}
        </p>

        <article className="space-y-6">
          {post.content.map((block, i) => {
            if (block.type === "h2") {
              return (
                <h2
                  key={i}
                  className="font-display text-2xl md:text-3xl leading-snug mt-10 mb-2"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={i} className="space-y-3 pl-5 list-disc marker:text-primary">
                  {block.items?.map((item, j) => (
                    <li key={j} className="font-body text-base text-muted-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="font-body text-base text-muted-foreground leading-relaxed">
                {block.text}
              </p>
            );
          })}
        </article>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center font-body text-xs text-muted-foreground">
          © 2026 Orchestrator. Insights for AI-driven delivery leaders.
        </div>
      </footer>
    </div>
  );
};

export default BlogPostPage;
