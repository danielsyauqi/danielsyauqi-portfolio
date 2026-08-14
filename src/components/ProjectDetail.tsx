import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import type { Project } from "@/data/projects";

export function ProjectDetail({ project }: { project: Project }) {
  const categoryLabel = project.category === "web" ? "Web & systems" : "Media & visuals";
  const ctaHref = project.externalUrl ?? "/contact";

  return (
    <main>
      <article className="project-detail">
        <header className="detail-header page-shell" data-reveal="up">
          <Link className="back-link" href={`/${project.category}`}>
            <span aria-hidden="true">←</span> All {project.category} projects
          </Link>
          <div className="detail-kicker">
            <span>{categoryLabel}</span>
            <span>{project.industry}</span>
          </div>
          <h1>{project.title}</h1>
          <div className="detail-intro">
            <p>{project.summary}</p>
            <div>
              <span className="detail-meta-label">Client</span>
              <span>{project.client}</span>
            </div>
          </div>
        </header>

        <div className="detail-cover page-shell" data-reveal="up">
          <Image
            alt={`${project.title} cover artwork`}
            fill
            priority
            sizes="100vw"
            src={project.cover}
          />
        </div>

        <div className="detail-story page-shell">
          {project.sections.map((section, index) => (
            <section className="story-section" data-reveal="up" key={section.heading}>
              <span className="section-number">0{index + 1}</span>
              <div>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          {(project.externalUrl || project.externalLabel) && (
            <a
              className="button button-dark project-external"
              href={ctaHref}
              target={project.externalUrl ? "_blank" : undefined}
              rel={project.externalUrl ? "noreferrer" : undefined}
            >
              {project.externalLabel ?? "View project"} <ArrowIcon diagonal />
            </a>
          )}
        </div>

        {project.videos && (
          <section
            aria-label="Project videos"
            className="video-list page-shell"
            data-reveal="up"
          >
            {project.videos.map((video) => (
              <div className="video-block" key={video.youtubeId}>
                <div className="video-heading">
                  <span>Film</span>
                  <h2>{video.title}</h2>
                </div>
                <div className="video-frame">
                  <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
                    title={`${project.title} — ${video.title}`}
                  />
                </div>
              </div>
            ))}
          </section>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <section
            aria-label="Project gallery"
            className="project-gallery page-shell"
            data-reveal="stagger"
          >
            {project.gallery.map((image, index) => (
              <div className="gallery-image" key={image}>
                <Image
                  alt={`${project.title} project image ${index + 1}`}
                  fill
                  sizes="(max-width: 800px) 100vw, 50vw"
                  src={image}
                />
              </div>
            ))}
          </section>
        )}
      </article>
    </main>
  );
}
