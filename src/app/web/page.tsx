import type { Metadata } from "next";
import { ProjectIndex } from "@/components/ProjectIndex";
import { webProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Web & systems",
  description:
    "Full-stack platforms and product systems designed and developed by Daniel Syauqi.",
};

export default function WebPage() {
  return (
    <ProjectIndex
      eyebrow="Web & systems"
      title="Designing useful systems."
      intro="From open-source product development and hospitality to finance and compliance—systems built to replace friction with a clear, dependable flow."
      projects={webProjects}
    />
  );
}
