import type { Metadata } from "next";
import { ProjectIndex } from "@/components/ProjectIndex";
import { mediaProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Media & visuals",
  description:
    "Films, campaigns, and visual storytelling directed by Daniel Syauqi.",
};

export default function MediaPage() {
  return (
    <ProjectIndex
      eyebrow="Media & visuals"
      title="Raw capture. Clear intent."
      intro="Graphic campaigns and moving images crafted to hold attention, carry an identity, and leave a feeling behind."
      projects={mediaProjects}
    />
  );
}
