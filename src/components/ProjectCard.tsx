import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  priority = false,
  featured = false,
}: {
  project: Project;
  priority?: boolean;
  featured?: boolean;
}) {
  return (
    <Link
      className={`project-card${featured ? " project-card-featured" : ""}`}
      href={`/${project.category}/${project.slug}`}
    >
      <div className="project-card-media">
        <Image
          alt={`${project.title} project preview`}
          fill
          priority={priority}
          sizes={featured ? "(max-width: 900px) 100vw, 65vw" : "(max-width: 900px) 100vw, 50vw"}
          src={project.cover}
        />
        <span className="project-arrow" aria-hidden="true">
          <ArrowIcon diagonal />
        </span>
      </div>
      <div className="project-card-copy">
        <div>
          <span className="project-client">{project.client}</span>
          <h3>{project.title}</h3>
        </div>
        <p>{project.summary}</p>
      </div>
    </Link>
  );
}
