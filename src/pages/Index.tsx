import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";

const featuredPost = blogPosts.find((p) => p.featured)!;
const otherPosts = blogPosts.filter((p) => !p.featured);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <p className="mb-4 font-body text-sm font-medium tracking-[0.2em] uppercase text-primary">
            Thought Leadership
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 max-w-4xl mx-auto">
            The AI-Driven{" "}
            <span className="text-gradient italic">Delivery</span>{" "}
            Orchestrator
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Insights for the modern Scrum Master embracing AI — and the managers building teams around them.
          </p>
          <a
            href="#articles"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-body text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
          >
            Explore articles <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Featured */}
      <section id="articles" className="container mx-auto px-6 py-20">
        <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-primary mb-6">
          Featured
        </p>
        <BlogCard post={featuredPost} variant="featured" />
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6 pb-24">
        <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-8">
          Latest Articles
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="container mx-auto px-6 py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl mb-4">
            Stay ahead of the shift
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto mb-8">
            Weekly insights on AI-augmented delivery, flow metrics, and the evolving Scrum Master role.
          </p>
          <div className="flex items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-full border border-border bg-card px-5 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50"
            />
            <button className="rounded-full bg-primary px-6 py-3 font-body text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 text-center font-body text-xs text-muted-foreground">
          © 2026 Orchestrator. Insights for AI-driven delivery leaders.
        </div>
      </footer>
    </div>
  );
};

export default Index;
