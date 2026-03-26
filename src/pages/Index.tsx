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


      {/* About */}
      <section id="about" className="border-t border-border">
        <div className="container mx-auto px-6 py-20">
          <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-primary mb-8">
            About
          </p>
          <div className="max-w-3xl flex flex-col md:flex-row gap-10 items-start">
            <img
              src="/kevin-foster.jpg"
              alt="Kevin Foster"
              className="w-36 h-36 rounded-full object-cover object-top border border-border shrink-0"
            />
            <div className="flex-1">
            <h2 className="font-display text-4xl md:text-5xl mb-6">Kevin Foster</h2>
            <p className="font-body text-lg text-primary mb-2 tracking-wide">Scrum Master</p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-10">
              Certified SAFe Scrum Master and Agile Coach with 7+ years of experience leading
              high-performance teams across fintech, SaaS, and enterprise software. Proven track
              record of reducing project delivery time and increasing team velocity through Agile
              best practices, coaching, and data-driven servant leadership.
            </p>
            <div>
              <p className="font-body text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
                Certifications
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full border border-border px-4 py-2 font-body text-sm text-foreground">
                  SAFe Scrum Master
                </span>
                <span className="rounded-full border border-border px-4 py-2 font-body text-sm text-foreground">
                  Professional Scrum Master (PSM)
                </span>
              </div>
            </div>
            </div>
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
