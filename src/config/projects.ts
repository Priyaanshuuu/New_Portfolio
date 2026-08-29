export type Project = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tech: string[];
  href: string;
  website?: string;
  featured?: boolean;
  /** Optional cover image for project cards */
  cover?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "Nexus",
    title: "Nexus",
    date: "2026",
    description:
      "AI collaborative workspace with real-time multi-user editing, distributed synchronization, AI-assisted content generation, and role-based access control.",
    tech: [
      "Next.js",
      "TypeScript",
      "ReactJS",
      "Yjs",
      "Liveblocks",
      "Gemini API",
      "PostgreSQL",
    ],
    href: "https://github.com/Priyaanshuuu/Nexus.git",
    website: "https://nexus-1hn4.vercel.app/",
    cover: "/assets/projects/Nexus.png",
    featured: true,
    gradient:
      "from-blue-500/25 via-indigo-500/15 to-violet-500/25",
  },

  {
    slug: "knowt",
    title: "Knowt",
    date: "2026",
    description:
      "Multi-modal AI study companion for processing PDFs, videos, audio, and web content with LLM-powered summaries, Q&A, and RAG.",
    tech: [
      "Next.js",
      "ReactJS",
      "TypeScript",
      "FastAPI",
      "Groq",
      "OpenAI",
      "PostgreSQL",
      "MongoDB",
    ],
    href: "https://github.com/Priyaanshuuu/Knowt.git",
    website: "https://knowt-1.onrender.com/",
    cover: "/assets/projects/knowt.png",
    featured: true,
    gradient:
      "from-emerald-500/25 via-green-500/15 to-teal-500/25",
  },

  {
    slug: "reels-pro",
    title: "Reels Pro",
    date: "2026",
    description:
      "High-performance video platform built with Next.js 15, featuring cloud-based CDN delivery, engagement analytics, nested comments, and optimized video playback.",
    tech: [
      "Next.js 15",
      "ReactJS",
      "TypeScript",
      "MongoDB",
      "ImageKit",
    ],
    href: "https://github.com/Priyaanshuuu/ReelsPro.git",
    featured: true,
    gradient:
      "from-pink-500/25 via-rose-500/15 to-orange-500/25",
  },

  {
    slug: "livekit-ai-agent",
    title: "LiveKit AI Voice Agent",
    date: "2026",
    description:
      "AI-powered voice agent built with LiveKit for real-time conversations, RAG-based responses, intent classification, call summaries, and automated follow-ups.",
    tech: [
      "LiveKit",
      "TypeScript",
      "Next.js",
      "LLMs",
      "RAG",
      "PostgreSQL",
      "Prisma",
      "WhatsApp",
    ],
    href: "https://github.com/Priyaanshuuu/ElevateBox.git",
    featured: true,
    gradient:
      "from-violet-500/25 via-purple-500/15 to-fuchsia-500/25",
  },

  {
    slug: "ecommerce-mcp-server",
    title: "E-commerce MCP Server",
    date: "2026",
    description:
      "Model Context Protocol server for an e-commerce platform, exposing structured tools and resources that allow AI agents to interact with core commerce workflows.",
    tech: [
      "TypeScript",
      "MCP",
      "Node.js",
      "Prisma",
      "SQLite",
      "REST APIs",
    ],
    href: "https://github.com/Priyaanshuuu/MCP.git",
    featured: true,
    gradient:
      "from-cyan-500/25 via-sky-500/15 to-blue-500/25",
  },
];

export function getProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}