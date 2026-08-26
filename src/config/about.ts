import { heroConfig } from "@/config/hero";

export const aboutConfig = {
  headline: ["From not knowing how to code", "to building with AI."],

  intro:
    "I'm Priyanshu Sinha — an AI engineer and full-stack developer who enjoys turning messy ideas into working products. I care about the details: clean APIs, useful interfaces, and systems that actually ship.",

  quote:
    "I believe the best way to learn is to start before you're ready, build through the confusion, and let every broken thing teach you something.",

  traits: ["Curious", "Builder", "Focused", "Persistent"] as const,

  traitStyles: {
    Curious:
      "border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/80 dark:bg-sky-950/40 dark:text-sky-300",
    Builder:
      "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800/80 dark:bg-emerald-950/40 dark:text-emerald-300",
    Focused:
      "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-amber-300",
    Persistent:
      "border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800/80 dark:bg-violet-950/40 dark:text-violet-300",
  },

  meta: [
    { label: "Location", value: heroConfig.location },
    { label: "Status", value: "Open to opportunities" },
    { label: "Focus", value: "AI · RAG · Full-stack" },
  ],

  story: {
    title: "How it started",
    paragraphs: [
      "I started coding in my second year of college. Before that, I honestly wasn't even aware of what programming really was or what went into building the software and websites I used every day. I just knew that technology was everywhere — I had no idea how it actually worked.",

      "Once I started learning, things got interesting very quickly. I went from writing my first few lines of code to building small projects, breaking them, fixing them, and slowly understanding how everything fits together. Most of my learning happened outside the classroom, through curiosity and simply trying things myself.",

      "College became a mix of coursework, hackathons, late-night experiments, and a lot of failed ideas. I wasn't always sure what I was doing, but every project pushed me a little further. Hackathons especially taught me how to work with a team, deal with pressure, and turn an idea into something that actually works instead of keeping it as a concept.",

      "Over time, I found myself drawn toward the intersection of AI and full-stack development. Today, I build things around LLMs, RAG systems, automation, and the interfaces that make these systems useful. I'm still learning, still breaking things, and still figuring out what I'm capable of — but now I know that the best way forward is to keep building.",
    ],
  },

  principles: {
    title: "How I work",
    items: [
      {
        title: "Stay curious",
        description:
          "AI moves fast. I learn by building, reading, experimenting, and going down rabbit holes whenever something catches my attention.",
      },
      {
        title: "Ship, then refine",
        description:
          "I'd rather build a working version, learn from it, and improve than spend forever trying to make the first version perfect.",
      },
      {
        title: "Sweat the details",
        description:
          "Loading states, edge cases, clean APIs, and good UX matter just as much as the model or technology behind the product.",
      },
      {
        title: "Build for humans",
        description:
          "Technology is a means to an end. If something doesn't solve a real problem or make someone's life easier, what's the point?",
      },
    ],
  },

  beyond: {
    title: "Beyond the code",
    paragraphs: [
      "Outside of coding, you'll usually find me exploring new technologies, working on random ideas, participating in hackathons, or going down some technical rabbit hole I probably didn't need to go down. I enjoy learning in public and sharing what actually worked — and what completely broke.",
      
      "I'm drawn to builders who are willing to start without knowing everything, figure things out along the way, and keep going when things get difficult. That's the kind of engineer I'm trying to become.",
    ],
  },

  connectLinks: [
    {
      name: "Email",
      href: "mailto:priyanshusinha636@gmail.com",
      icon: "mail" as const,
    },
    {
      name: "X",
      href: "https://x.com/Priyans23403147",
      icon: "x" as const,
    },
    {
      name: "GitHub",
      href: "https://github.com/Priyaanshuuu",
      icon: "github" as const,
    },
  ],
};