import Image from "next/image";
import Link from "next/link";
import { ProcessIllustration } from "@/components/AnimatedIllustrations";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ProjectCard } from "@/components/ProjectCard";
import { mediaProjects, webProjects } from "@/data/projects";

const services = [
  {
    number: "01",
    title: "Software systems",
    items: "Full-stack web · iOS · Scrapers · CI/CD",
    description: "Products and internal systems designed around how the work actually moves.",
    image: "/media/web/seeder/cover.png",
  },
  {
    number: "02",
    title: "Product design",
    items: "UX strategy · Interface design · Responsive systems",
    description: "Clear interfaces that make complicated tools feel calm and learnable.",
    image: "/media/web/loan-bram/cover.png",
  },
  {
    number: "03",
    title: "Visual storytelling",
    items: "Creative direction · Campaigns · Film",
    description: "Campaigns and moving images built to carry a feeling, not just information.",
    image: "/media/media/kka-music-video/cover.jpeg",
  },
];

export default function Home() {
  const selectedProjects = [
    webProjects.find((project) => project.slug === "seeder")!,
    webProjects.find((project) => project.slug === "roadside-eatery")!,
    webProjects.find((project) => project.slug === "secura")!,
    mediaProjects.find((project) => project.slug === "kka-jersey-music-video")!,
    mediaProjects.find((project) => project.slug === "kka-jersey-pastel-boy")!,
  ];

  return (
    <main className="notion-home">
      <section className="home-hero page-shell">
        <div className="hero-collage hero-collage-left" aria-hidden="true">
          <div className="polaroid polaroid-event">
            <Image
              alt=""
              fill
              priority
              sizes="220px"
              src="/media/about/daniel-1.jpeg"
            />
            <span>teaching & sharing</span>
          </div>
          <span className="collage-sticker">BUILD<br />FOR<br />PEOPLE</span>
        </div>

        <div className="hero-title">
          <span className="profile-spark">
            <span>✦</span>
          </span>
          <h1>Hello, I&apos;m Syauqi <span aria-hidden="true">👋</span></h1>
          <p className="hero-role">Full-stack developer at ALPHV · Open-source maintainer · Visual storyteller</p>
          <div className="hero-bio">
            <p>
              I build useful digital products at the intersection of <strong>business,
              technology, and design</strong>. At ALPHV Technologies, and through my own
              open-source work, I turn real operations into dependable software.
            </p>
            <p>
              Based in Kuala Lumpur, I&apos;m interested in ambitious problems, clear systems,
              and work that feels distinctly human.
            </p>
          </div>
          <div className="hero-actions">
            <Link className="button button-dark" href="/web">
              Explore my work <ArrowIcon />
            </Link>
            <Link className="plain-link" href="/about">More about me →</Link>
          </div>
        </div>

        <div className="hero-collage hero-collage-right" aria-hidden="true">
          <div className="polaroid polaroid-showcase">
            <Image
              alt=""
              fill
              priority
              sizes="220px"
              src="/media/about/daniel-2.jpg"
            />
            <span>showing the work</span>
          </div>
          <div className="mini-note">currently exploring<br /><strong>AI × real-world systems</strong></div>
        </div>
      </section>

      <section
        aria-label="Current profile highlights"
        className="profile-facts page-shell"
        data-reveal="stagger"
      >
        <div>
          <span>Now</span>
          <strong>Full-stack developer</strong>
          <p>ALPHV Technologies</p>
        </div>
        <div>
          <span>Open source</span>
          <strong>Creator &amp; maintainer</strong>
          <a href="https://github.com/danielsyauqi/Seeder" target="_blank" rel="noreferrer">
            Seeder on GitHub ↗
          </a>
        </div>
        <div>
          <span>Community</span>
          <strong>Teach, share, volunteer</strong>
          <p>AI workshops · GDG KL</p>
        </div>
        <div>
          <span>Based in</span>
          <strong>Kuala Lumpur</strong>
          <p>Malaysia</p>
        </div>
      </section>

      <section className="services page-shell">
        <div className="document-heading document-heading-centered" data-reveal="up">
          <h2>Work with me</h2>
          <p>Three ways I can help turn an idea into something real.</p>
        </div>
        <div className="service-cards" data-reveal="stagger">
          {services.map((service) => (
            <Link
              className="service-card"
              href={service.number === "03" ? "/media" : "/web"}
              key={service.number}
            >
              <div className="service-card-image">
                <Image
                  alt=""
                  fill
                  loading="eager"
                  sizes="(max-width: 700px) 100vw, 33vw"
                  src={service.image}
                />
              </div>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <small>{service.items}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-work page-shell">
        <div className="document-heading" data-reveal="up">
          <div>
            <h2>Featured projects</h2>
            <p>Current products first, followed by selected systems and visual work.</p>
          </div>
          <Link className="plain-link" href="/web">View everything →</Link>
        </div>
        <div className="featured-grid" data-reveal="stagger">
          {selectedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 3} />
          ))}
        </div>
      </section>

      <section className="thinking page-shell">
        <div className="document-heading" data-reveal="up">
          <div>
            <h2>How I think about the work</h2>
            <p>A small operating system for making useful things.</p>
          </div>
        </div>
        <div className="notion-callout" data-reveal="up">
          <ProcessIllustration />
          <div>
            <strong>Left brain, meet right brain.</strong>
            <p>
              Good products need technical rigour, but they also need taste, empathy,
              and a point of view. I try to keep both sides in the room from day one.
            </p>
          </div>
        </div>
        <div className="principle-list" data-reveal="stagger">
          {[
            ["01", "Listen for the real problem", "The first request is rarely the whole brief."],
            ["02", "Make complexity legible", "A clear model makes both code and interfaces better."],
            ["03", "Build with room to evolve", "Useful systems should survive their first release."],
            ["04", "Care about the finish", "The last ten percent is where trust tends to live."],
          ].map(([number, title, body]) => (
            <div className="principle-row" key={number}>
              <span>{number}</span>
              <strong>{title}</strong>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-teaser page-shell" data-reveal="up">
        <div className="about-teaser-image">
          <Image
            alt="Daniel Syauqi leading a technology session for students"
            fill
            loading="eager"
            sizes="(max-width: 800px) 100vw, 45vw"
            src="/media/about/daniel-1.jpeg"
          />
        </div>
        <div className="about-teaser-copy">
          <span className="section-icon" aria-hidden="true">↳</span>
          <h2>A little more context</h2>
          <p>
            I move between business, art, and technology because the strongest work
            rarely belongs to one discipline. Every project is a chance to learn the
            system, find the human problem, and make the result unmistakably useful.
          </p>
          <Link className="button button-outline" href="/about">
            More about me <ArrowIcon diagonal />
          </Link>
        </div>
      </section>
    </main>
  );
}
