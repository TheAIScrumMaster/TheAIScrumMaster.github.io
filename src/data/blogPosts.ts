export interface BlogPost {
  id: string;
  title: string;
  snippet: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Scrum Master Is Dead. Long Live the Delivery Orchestrator.",
    snippet: "Why the traditional Scrum Master role is evolving into something far more strategic — and how AI is accelerating the shift from ceremony facilitator to intelligent delivery partner.",
    category: "Role Evolution",
    readTime: "8 min read",
    date: "Mar 4, 2026",
    featured: true,
  },
  {
    id: "2",
    title: "5 AI Workflows That Replace 10 Hours of Sprint Prep",
    snippet: "From auto-generated standup summaries to backlog clarity scoring — practical Copilot Studio patterns that free your week for high-impact coaching.",
    category: "AI Workflows",
    readTime: "6 min read",
    date: "Feb 28, 2026",
  },
  {
    id: "3",
    title: "Hiring an AI-Driven Scrum Master: What Managers Actually Need to Look For",
    snippet: "Forget CSM certifications alone. Here's how to evaluate candidates who can blend delivery expertise with AI fluency — and why your JD probably needs rewriting.",
    category: "Hiring & Leadership",
    readTime: "7 min read",
    date: "Feb 21, 2026",
  },
  {
    id: "4",
    title: "Cycle Time, Throughput, Aging WIP: The AI-Powered Metrics That Matter",
    snippet: "Stop drowning in vanity metrics. Learn how AI pattern detection in Azure DevOps surfaces the signals that actually predict delivery risk.",
    category: "Flow Metrics",
    readTime: "9 min read",
    date: "Feb 14, 2026",
  },
  {
    id: "5",
    title: "Risk Surfacing Is Not Risk Solving: Drawing the Line as an AI Scrum Master",
    snippet: "The most dangerous anti-pattern for the modern delivery orchestrator is trying to fix engineering problems. Here's how to stay in your lane — powerfully.",
    category: "Risk Management",
    readTime: "5 min read",
    date: "Feb 7, 2026",
  },
  {
    id: "6",
    title: "From Quarterly Planning to Sprint Execution: AI as Your Alignment Engine",
    snippet: "How to use AI tooling to bridge the gap between big-picture roadmap commitments and the daily reality of sprint-level delivery.",
    category: "Planning",
    readTime: "7 min read",
    date: "Jan 31, 2026",
  },
  {
    id: "7",
    title: "The Manager's Guide to Sponsoring AI Delivery Transformation",
    snippet: "Your AI Scrum Master can only go as far as your organizational support allows. A practical playbook for engineering managers championing this new role.",
    category: "Hiring & Leadership",
    readTime: "10 min read",
    date: "Jan 24, 2026",
  },
  {
    id: "8",
    title: "Copilot Studio for Scrum Masters: Building Your First Delivery Bot",
    snippet: "A step-by-step walkthrough of creating a lightweight AI assistant that preps your sprint review deck, flags stale work items, and drafts dependency alerts.",
    category: "AI Workflows",
    readTime: "12 min read",
    date: "Jan 17, 2026",
  },
];
