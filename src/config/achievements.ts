export type Achievement = {
  slug: string;
  title: string;
  organization: string;
  year: string;
  periodShort: string;
  periodLong: string;
  details?: string[];
  /** Cover image for cards and detail header */
  image?: string;
  /** Pinterest-style photo gallery on the detail page */
  gallery?: string[];
  featured?: boolean;
};

export const achievements: Achievement[] = [
  {
  slug: "sih-2025",
  title: "Smart India Hackathon 2025",
  organization: "Smart India Hackathon",
  year: "2025",
  periodShort: "2025",
  periodLong: "2025",
  details: [
    "Built an IoT-integrated web platform for the Fire Department to streamline and simplify the NOC approval process.",
    "Worked on connecting real-world IoT data with a web-based system to improve monitoring and decision-making.",
    "Built and demonstrated the solution as part of a team under the constraints of a national-level hackathon.",
  ],
  featured: true,
},

  {
    slug: "leetcode-600-plus",
    title: "600+ Problems Solved",
    organization: "LeetCode",
    year: "2026",
    periodShort: "600+",
    periodLong: "600+ LeetCode Problems",
    details: [
      "Solved 600+ coding and algorithmic problems on LeetCode.",
      "Built consistency across data structures, algorithms, problem solving, and competitive programming.",
      "LeetCode: https://leetcode.com/u/Priyaanshu18/",
    ],
    featured: true,
  },

  {
    slug: "open-source-contributor",
    title: "Open Source Contributor",
    organization: "Open Source",
    year: "2026",
    periodShort: "Open Source",
    periodLong: "Open Source Contributions",
    details: [
      "Contribute to open-source projects by working with real codebases, reviewing existing implementations, and improving software collaboratively.",
      "Learning to work with maintainers, follow project conventions, and write code that fits into larger systems.",
    ],
    featured: true,
  },
];

export function getAchievement(slug: string) {
  return achievements.find((item) => item.slug === slug);
}