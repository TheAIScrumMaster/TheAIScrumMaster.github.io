import { Bot } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
    <div className="container mx-auto flex h-16 items-center justify-between px-6">
      <a href="/" className="flex items-center gap-2">
        <Bot className="h-5 w-5 text-primary" />
        <span className="font-display text-xl tracking-tight">Orchestrator</span>
      </a>
      <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
        <a href="#articles" className="hover:text-foreground transition-colors">Articles</a>
        <a href="#for-managers" className="hover:text-foreground transition-colors">For Managers</a>
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
      </div>
    </div>
  </nav>
);

export default Navbar;
