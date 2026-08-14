import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectIndex({
  eyebrow,
  title,
  intro,
  projects,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  projects: Project[];
}) {
  return (
    <main>
      <section className="index-hero page-shell" data-reveal="up">
        <p className="eyebrow">{eyebrow}</p>
        <div className="index-hero-grid">
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>

      <section
        aria-label={`${eyebrow} projects`}
        className="project-index page-shell"
        data-reveal="stagger"
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index < 2}
            featured={index === 0}
          />
        ))}
      </section>
    </main>
  );
}
