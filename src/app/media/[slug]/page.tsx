import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/ProjectDetail";
import { getProject, mediaProjects } from "@/data/projects";

export function generateStaticParams() {
  return mediaProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject("media", slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function MediaProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject("media", slug);

  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
