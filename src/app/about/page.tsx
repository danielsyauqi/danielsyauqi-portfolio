import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DeliveryIllustration } from "@/components/AnimatedIllustrations";
import { ArrowIcon } from "@/components/ArrowIcon";

const experience = [
  {
    period: "Now",
    title: "Full-stack developer · ALPHV Technologies",
    body: "Maintaining Politikus on iOS and leading scraper engineering for LocumLah, alongside production CI/CD, client delivery, and technology education from Bangsar South.",
  },
  {
    period: "2026",
    title: "Creator & maintainer · Seeder",
    body: "Growing a self-hostable, open-source project workspace with an AI-ready MCP server and a community around it.",
  },
  {
    period: "2025",
    title: "Technology education & community",
    body: "Led a hands-on AI-assisted coding session for KITS × ALPHV and volunteered with the GDG Kuala Lumpur community at DevFest 2025.",
  },
  {
    period: "2024–25",
    title: "Developer intern · Malaysian Nuclear Agency",
    body: "Built SecuRA for ISO 27001 risk assessment, renewed SSL certificates across internal sites, and delivered an introductory web-pentesting workshop.",
  },
];

const deliveryWork = [
  {
    project: "Politikus",
    kind: "ios" as const,
    logo: "/media/brands/politikus.png",
    logoAlt: "Politikus mascot logo",
    label: "iOS maintenance · Mobile CI/CD",
    body: "I maintain Politikus on iOS across signing, push notifications, build configuration, TestFlight and App Store delivery, store-readiness fixes, and release QA. I also maintain its CI/CD path: exact-commit Codemagic quality and release workflows bridged from private Gitea through a signed Cloudflare relay, plus the landing site’s atomic Alibaba deployment.",
  },
  {
    project: "LocumLah",
    kind: "scraper" as const,
    logo: "/media/brands/locumlah.png",
    logoAlt: "LocumLah logo",
    label: "Scraper engineering · GitHub Actions",
    body: "My main focus on LocumLah is the scraper: a production Python pipeline that turns Telegram posts into structured jobs, with guarded location resolution, data repair, observability, and safe AI-assisted extraction. Alongside it, I introduced the production GitHub Actions deployment, implemented staging CI/CD, and later hardened both with fail-fast scripts and health checks.",
  },
];

const moments = [
  {
    src: "/media/about/gallery/footfallcam-presentation.jpg",
    alt: "Syauqi presenting FootfallCam use cases at ALPHV",
    caption: "Conducting FootfallCam Training for KLCCH",
    shape: "tall",
  },
  {
    src: "/media/about/gallery/ai-workshop-class.jpg",
    alt: "Syauqi with students after an AI-assisted coding workshop",
    caption: "KITS × ALPHV workshop",
    shape: "wide",
  },
  {
    src: "/media/about/gallery/ai-developer-day-group.webp",
    alt: "Syauqi and friends at Alibaba Cloud AI Developer Day",
    caption: "AI Developer Day",
    shape: "wide",
  },
  {
    src: "/media/about/gallery/asean-ai-summit.jpg",
    alt: "Syauqi at the ASEAN AI Malaysia Summit 2025",
    caption: "ASEAN AI Malaysia Summit",
    shape: "tall",
  },
  {
    src: "/media/about/gallery/alibaba-ai-hackathon.webp",
    alt: "Syauqi and team at the Alibaba Cloud Malaysia AI Hackathon 2025",
    caption: "Alibaba Cloud AI Hackathon",
    shape: "wide",
  },
  {
    src: "/media/about/gallery/developer-workshop.webp",
    alt: "Syauqi taking part in a developer workshop",
    caption: "Learning in the room",
    shape: "wide",
  },
  {
    src: "/media/about/gallery/google-malaysia.jpg",
    alt: "Syauqi visiting the Google Malaysia office",
    caption: "Google Malaysia",
    shape: "tall",
  },
  {
    src: "/media/about/gallery/developer-kaki-community.webp",
    alt: "Syauqi with the Developer Kaki community",
    caption: "Developer Kaki community",
    shape: "wide",
  },
  {
    src: "/media/about/gallery/mdx-summit-team.webp",
    alt: "Syauqi and friends at MDX Summit",
    caption: "MDX Summit",
    shape: "landscape",
  },
  {
    src: "/media/about/gallery/mdx-summit-selfie.webp",
    alt: "Syauqi at the MDX Summit event floor",
    caption: "Conversations at MDX",
    shape: "landscape",
  },
  {
    src: "/media/about/gallery/nuclear-agency-team.webp",
    alt: "Syauqi with colleagues at the Malaysian Nuclear Agency",
    caption: "Malaysian Nuclear Agency",
    shape: "landscape",
  },
  {
    src: "/media/about/gallery/nuclear-security-presentation.webp",
    alt: "Syauqi presenting web security concepts at the Malaysian Nuclear Agency",
    caption: "Conducting Pentest Training at Agensi Nuklear Malaysia",
    shape: "wide",
  },
  {
    src: "/media/about/gallery/city-team-photo.jpg",
    alt: "Syauqi and teammates in Kuala Lumpur",
    caption: "With the ALPHV Academy",
    shape: "tall",
  },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "About Daniel Syauqi, a multidisciplinary builder based in Kuala Lumpur.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="about-hero page-shell" data-reveal="up">
        <p className="eyebrow">About me</p>
        <h1>
          Your idea.
          <br />
          My execution.
          <br />
          <span>Shared momentum.</span>
        </h1>
      </section>

      <section className="about-intro page-shell" data-reveal="up">
        <p className="about-intro-lead">
          I believe the best outcomes begin with real collaboration: listening closely,
          understanding the intent, and bringing enough technical and creative range to
          carry an idea all the way through.
        </p>
        <div className="about-portrait about-portrait-primary">
          <Image
            alt="Daniel Syauqi leading a technology session for students"
            fill
            loading="eager"
            priority
            sizes="(max-width: 800px) 100vw, 58vw"
            src="/media/about/daniel-1.jpeg"
          />
        </div>
      </section>

      <section className="about-story page-shell" data-reveal="up">
        <div>
          <p className="eyebrow">My story</p>
          <h2>A builder with one foot in logic and the other in culture.</h2>
        </div>
        <div className="about-story-copy">
          <p>
            Today I work as a full-stack developer at ALPHV Technologies while building
            Seeder in the open. Across client systems, internal products, and independent
            work, I&apos;m drawn to problems that demand a fast understanding of the real
            operation—not just the first feature request.
          </p>
          <p>
            That has meant engineering full-stack systems, shaping product interfaces,
            directing visual campaigns, and filming stories. The medium changes; the
            standard does not. I care about clear thinking, strong craft, and finishing
            the work properly.
          </p>
          <p>
            I&apos;m always interested in ambitious collaborations with people who value both
            substance and a fresh point of view.
          </p>
        </div>
      </section>

      <section className="about-moments page-shell">
        <div className="document-heading" data-reveal="up">
          <div>
            <h2>A few frames from the work</h2>
            <p>Teaching, demonstrating, and building with people in the room.</p>
          </div>
        </div>
        <div className="clipboard-board" data-reveal="up">
          <div className="clipboard-clamp" aria-hidden="true">
            <span />
          </div>
          <div className="clipboard-label" aria-hidden="true">
            <span>Team board</span>
            <span>People, places &amp; field notes</span>
          </div>
          <div className="moment-grid" data-reveal="stagger">
            {moments.map((moment) => (
              <figure className={`moment-card moment-card-${moment.shape}`} key={moment.src}>
                <span className="moment-pin" aria-hidden="true" />
                <div>
                  <Image
                    alt={moment.alt}
                    fill
                    sizes="(max-width: 700px) calc(100vw - 72px), (max-width: 1100px) 50vw, 34vw"
                    src={moment.src}
                  />
                </div>
                <figcaption>{moment.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section page-shell">
        <div className="document-heading" data-reveal="up">
          <div>
            <h2>Selected chapters</h2>
            <p>The experiences that best explain how I build today.</p>
          </div>
          <a
            className="plain-link"
            href="https://www.linkedin.com/in/danielsyauqi/"
            target="_blank"
            rel="noreferrer"
          >
            Full profile on LinkedIn ↗
          </a>
        </div>
        <div className="experience-list" data-reveal="stagger">
          {experience.map((item) => (
            <article className="experience-row" key={`${item.period}-${item.title}`}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="delivery-section page-shell">
        <div className="document-heading" data-reveal="up">
          <div>
            <h2>Notable delivery engineering</h2>
            <p>CI/CD work where a successful build is only the start of the release.</p>
          </div>
        </div>
        <div className="delivery-grid" data-reveal="stagger">
          {deliveryWork.map((item) => (
            <article className="delivery-card" key={item.project}>
              <DeliveryIllustration kind={item.kind} />
              <div className="delivery-brand">
                <div className={`delivery-logo delivery-logo-${item.kind}`}>
                  <Image
                    alt={item.logoAlt}
                    height={48}
                    src={item.logo}
                    width={48}
                  />
                </div>
                <div>
                  <span className="delivery-label">{item.label}</span>
                  <h3>{item.project}</h3>
                </div>
              </div>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-values page-shell" data-reveal="up">
        <div className="about-portrait about-portrait-secondary">
          <Image
            alt="Daniel Syauqi presenting a project at a technology showcase"
            fill
            loading="eager"
            sizes="(max-width: 800px) 100vw, 42vw"
            src="/media/about/daniel-2.jpg"
          />
        </div>
        <div className="value-list">
          <p className="eyebrow">How I work</p>
          <div><span>01</span><h3>Listen for the real problem.</h3></div>
          <div><span>02</span><h3>Make complexity legible.</h3></div>
          <div><span>03</span><h3>Build with room to evolve.</h3></div>
          <div><span>04</span><h3>Care about the last ten percent.</h3></div>
          <Link className="button button-dark" href="/contact">
            Work with me <ArrowIcon diagonal />
          </Link>
        </div>
      </section>
    </main>
  );
}
