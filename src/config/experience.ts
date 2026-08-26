export type ExperienceItem = {
  company: string;
  role: string;
  periodShort: string;
  periodLong: string;
  locationShort: string;
  locationLong: string;
  working?: boolean;
  details?: string[];
  tech?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Cybersense IT Services",
    role: "Full-stack Engineer Intern",
    periodShort: "Apr 25 – Jun 26",
    periodLong: "April 2025 – June 2026",
    locationShort: "Remote, USA",
    locationLong: "Remote, USA",
    details: [
      "Shipped end-to-end full-stack features across a microservices-oriented stack using ReactJS, Next.js, and Python, collaborating directly with founders and product leads from design through cloud deployment on AWS.",
      "Designed and maintained scalable Python-backed REST APIs following a security-first approach, implementing JWT authentication, input validation, and rate limiting; integrated LLM-driven components that improved automated data processing throughput by ~35%.",
      "Owned features end-to-end — from solution design and distributed API architecture to frontend delivery — implementing real-time WebSocket features, automated test suites, and performance optimizations including code-splitting and lazy loading.",
    ],
    tech: [
      "ReactJS",
      "Next.js",
      "Python",
      "AWS",
      "REST APIs",
      "JWT",
      "LLMs",
      "WebSockets",
      "Microservices",
    ],
  },
];