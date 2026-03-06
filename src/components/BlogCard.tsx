import { BlogPost } from "@/data/blogPosts";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  variant?: "default" | "featured";
}

const BlogCard = ({ post, variant = "default" }: BlogCardProps) => {
  if (variant === "featured") {
    return (
      <article className="group relative rounded-lg border border-border bg-card p-8 md:p-10 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_hsl(35_90%_55%_/_0.15)] cursor-pointer">
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-medium tracking-wide text-primary">
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">{post.date}</span>
        </div>
        <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4 group-hover:text-gradient transition-colors duration-300">
          {post.title}
        </h2>
        <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-6">
          {post.snippet}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-body">{post.readTime}</span>
          <span className="flex items-center gap-1 text-sm font-body font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Read article <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative rounded-lg border border-border bg-card p-6 transition-all duration-400 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(35_90%_55%_/_0.1)] cursor-pointer flex flex-col h-full">
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-full bg-secondary px-3 py-1 font-body text-xs font-medium tracking-wide text-accent">
          {post.category}
        </span>
        <span className="text-xs text-muted-foreground">{post.date}</span>
      </div>
      <h3 className="font-display text-xl md:text-2xl leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
        {post.title}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
        {post.snippet}
      </p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
        <span className="text-xs text-muted-foreground font-body">{post.readTime}</span>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
    </article>
  );
};

export default BlogCard;
