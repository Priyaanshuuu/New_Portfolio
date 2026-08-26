import { Hero } from "@/components/landing/hero";
import { TechStackSection } from "@/components/landing/tech-stack-section";
import { ExperienceSection } from "@/components/landing/experience-section";
import { AchievementsSection } from "@/components/landing/achievements-section";
import { FeaturedProjects } from "@/components/landing/featured-projects";
import { GitHubContributions } from "@/components/landing/github-contributions";
import { QuoteVisitorCard } from "@/components/landing/quote-visitor-card";
import { BlogPreview } from "@/components/landing/blog-preview";
import { LinkCardSection } from "@/components/landing/link-card-section";
import { personalLinks } from "@/config/sections";
import { createPageMetadata, pageTitle } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: pageTitle("Home"),
  description:
    "Portfolio of Priyanshu Urmaliya featuring AI systems, full-stack projects, writing, and experience.",
  path: "/",
});

export default async function HomePage() {
  return (
    <div className="space-y-10 pb-16 pt-8">
      <Hero />
      <TechStackSection />
      <ExperienceSection limit={3} showAllLink />
      <AchievementsSection limit={2} showAllLink />
      <FeaturedProjects limit={2} />
      <GitHubContributions />
      <QuoteVisitorCard />
      <BlogPreview limit={3} />
      <LinkCardSection title="Elsewhere" items={personalLinks} />
    </div>
  );
}
