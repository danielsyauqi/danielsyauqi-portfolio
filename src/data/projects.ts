export type ProjectCategory = "web" | "media";

export type Project = {
  slug: string;
  category: ProjectCategory;
  title: string;
  client: string;
  industry: string;
  summary: string;
  cover: string;
  externalUrl?: string;
  externalLabel?: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  gallery?: string[];
  videos?: Array<{
    title: string;
    youtubeId: string;
  }>;
};

export const webProjects: Project[] = [
  {
    slug: "seeder",
    category: "web",
    title: "Seeder",
    client: "Open source · 2026",
    industry: "Productivity",
    summary:
      "A self-hostable project workspace for small teams—with Kanban, client requests, a daily planner, and an AI-ready MCP server.",
    cover: "/media/web/seeder/cover.png",
    externalUrl: "https://seederpm.xyz",
    externalLabel: "Visit Seeder",
    sections: [
      {
        heading: "A project manager that stays small on purpose",
        paragraphs: [
          "Seeder grew from an original idea by Thaqif Rosdi into the open-source product I now build and maintain. It sits between heavyweight enterprise suites and boards that teams quickly outgrow: enough structure for real delivery work, without turning project management into its own project.",
          "Projects and Kanban boards live alongside client requests, a public progress board, rich notes, activity history, and a drag-and-drop daily planner. The result is one calm operating surface for a small team and the clients around it.",
        ],
      },
      {
        heading: "Open source, self-hostable, and ready for AI workflows",
        paragraphs: [
          "I built Seeder with Next.js, Drizzle ORM, Better Auth, and Tailwind. Teams can run it on Cloudflare Workers with D1 and R2 or on a single Node server, keeping their workflow and data under their own control.",
          "A built-in Model Context Protocol server lets approved AI assistants read and update projects, tasks, requests, comments, and settings. Permission-scoped tokens and a complete activity trail keep those automations accountable instead of invisible.",
        ],
      },
    ],
    gallery: [
      "/media/web/seeder/board.png",
      "/media/web/seeder/daily-planner.png",
      "/media/web/seeder/mcp-tokens.png",
    ],
  },
  {
    slug: "roadside-eatery",
    category: "web",
    title: "The Roadside Eatery",
    client: "The Roadside Eatery · 2026",
    industry: "Hospitality",
    summary:
      "An editorial restaurant platform that turns a large, changing menu into a fast, searchable route from discovery to ordering.",
    cover: "/media/web/roadside-eatery/cover.png",
    externalUrl: "https://theroadsideeatery.com",
    externalLabel: "Visit live website",
    sections: [
      {
        heading: "A digital front door for two neighbourhood restaurants",
        paragraphs: [
          "The Roadside Eatery needed more than a brochure site. I shaped and built a responsive experience around how guests actually decide: see what is happening, search the full catalogue, find a nearby branch, then continue to delivery, pickup, or a reservation.",
          "The visual system carries the restaurant’s warm, retro personality across animated food photography, promotions, locations, and ordering flows—without letting the personality slow down the practical parts.",
        ],
      },
      {
        heading: "A maintainable publishing system behind the experience",
        paragraphs: [
          "The application combines Next.js and Payload CMS in one deployment, giving staff control over menu availability, promotions, locations, homepage content, and ordering links. Instant multi-term search and clear availability states make a large catalogue easier for guests to navigate.",
          "I also prepared the production foundation: structured restaurant data, canonical metadata, sitemap and search indexing, HTTPS, and a VPS deployment designed around persistent content and media. The result is a live operating channel, not a static campaign page.",
        ],
      },
    ],
    gallery: [
      "/media/web/roadside-eatery/menu.png",
      "/media/web/roadside-eatery/storefront.jpeg",
    ],
  },
  {
    slug: "loan-bram",
    category: "web",
    title: "Loan Management System",
    client: "Bram Resources Agency",
    industry: "Finance",
    summary:
      "A full-stack loan platform that replaces paperwork with transparent applications, configurable products, and real-time operations.",
    cover: "/media/web/loan-bram/cover.png",
    externalUrl: "https://bram.com.my",
    externalLabel: "Visit website",
    sections: [
      {
        heading: "Digital transformation for a modern loan agency",
        paragraphs: [
          "Bram Resources Agency was constrained by a legacy process built around manual work, slow handovers, and a disconnected client experience. The brief was to rethink the operation as one cohesive digital product.",
          "I designed and developed a full-stack loan management platform with Laravel and Vue.js. Dedicated customer and administrator portals now carry each application from enquiry to approval, replacing ambiguity with clear status updates and intelligent automation.",
        ],
      },
      {
        heading: "A user-centred platform with room to grow",
        paragraphs: [
          "Administrators gained a central dashboard, real-time analytics, faster application processing, and fewer opportunities for human error. Customers gained a self-service portal that makes the application journey easier to understand and trust.",
          "A modular backend lets the agency add and configure new loan products as the market changes. The result is a practical example of modern web technology solving a complex operational problem while improving the experience on both sides.",
        ],
      },
    ],
    gallery: [
      "/media/web/loan-bram/screen-1.png",
      "/media/web/loan-bram/screen-2.png",
      "/media/web/loan-bram/screen-3.png",
      "/media/web/loan-bram/screen-4.png",
    ],
  },
  {
    slug: "secura",
    category: "web",
    title: "SecuRA",
    client: "Malaysian Nuclear Agency",
    industry: "Research",
    summary:
      "An ISO/ISMS risk-assessment platform that turns spreadsheet-heavy audits into a controlled, report-ready workflow.",
    cover: "/media/web/secura/cover.png",
    externalLabel: "Request a demo",
    sections: [
      {
        heading: "ISO 27001 risk assessment, without the spreadsheet maze",
        paragraphs: [
          "SecuRA was designed for the Malaysian Nuclear Agency to automate and streamline security risk assessment. It replaces fragmented manual methods with one web application for asset management, threat identification, risk calculation, and report generation.",
          "Built with Laravel and Orchid, the platform centralises critical data while role-based access control keeps sensitive work available only to the right people.",
        ],
      },
      {
        heading: "A faster, more reliable audit process",
        paragraphs: [
          "Automating repetitive collection, analysis, and reporting work gives assessment teams more time for judgement. It also reduces transcription errors and creates a more consistent trail from evidence to finding.",
          "The project demonstrates how a Malaysian-built compliance platform can improve audit efficiency, strengthen data handling, and support a more reliable ISO 27001 process.",
        ],
      },
    ],
    gallery: [
      "/media/web/secura/screen-1.png",
      "/media/web/secura/screen-2.png",
      "/media/web/secura/screen-3.png",
    ],
  },
  {
    slug: "okcsnilai",
    category: "web",
    title: "OKCS Nilai",
    client: "OK Computer Solution Nilai",
    industry: "IT services",
    summary:
      "A focused company site for a long-running Malaysian IT provider, built to make its services and local presence immediately clear.",
    cover: "/media/web/okcsnilai/cover.png",
    externalUrl: "https://stardev.my/okcsnilai",
    externalLabel: "Visit website",
    sections: [
      {
        heading: "A clear digital home for a growing IT business",
        paragraphs: [
          "OK Computer Solution began in 2009 with computer and laptop repair before growing into OKCS Holdings and expanding across Malaysia. The site presents that journey while giving the Nilai branch a direct, useful way to communicate its services.",
          "The content balances equipment and repair offerings with the company’s wider commitment to training future IT entrepreneurs in marketing, operations, and administration.",
        ],
      },
    ],
  },
  {
    slug: "gas-it",
    category: "web",
    title: "Gas IT System",
    client: "Gas IT",
    industry: "Oil & gas",
    summary:
      "A delivery and inventory platform connecting gas providers, lorry drivers, and customers around one live order flow.",
    cover: "/media/web/gas-it/cover.png",
    externalUrl: "https://bangiavenue.com/gas-it",
    externalLabel: "Visit website",
    sections: [
      {
        heading: "Reframing everyday gas delivery as a live system",
        paragraphs: [
          "Gas IT moves cooking-gas providers beyond traditional delivery tracking. The platform gives administrators real-time visibility into orders, driver registration, and inventory, while drivers get a simpler acceptance and delivery flow.",
          "Customers can buy gas online and follow the delivery as it happens. One shared source of truth makes the operation easier to coordinate from warehouse to doorstep.",
        ],
      },
    ],
  },
  {
    slug: "mfl",
    category: "web",
    title: "MFL Ticketing System",
    client: "UiTM final project",
    industry: "Sports",
    summary:
      "A football ticketing concept designed around Malaysian league operations, club autonomy, and sustainable match-day revenue.",
    cover: "/media/web/mfl/cover.png",
    externalUrl: "https://stardev.my/mfl/php",
    externalLabel: "Visit website",
    sections: [
      {
        heading: "Football ticketing built around the league ecosystem",
        paragraphs: [
          "This final-year project explores a football ticketing system for the Malaysian Football League and its participating Football Associations. It supports three connected roles: league administrators, FAs, and customers.",
          "MFL administrators oversee sales, match requests, and standings. FAs submit matches, set ticket prices, and review their analytics while contributing a five-percent levy on every ticket sold. Customers get a streamlined purchase flow and secure QR-coded PDF tickets for match entry.",
        ],
      },
    ],
  },
];

export const mediaProjects: Project[] = [
  {
    slug: "kka-jersey-music-video",
    category: "media",
    title: "KKA Jersey: Music Video",
    client: "JPKA 2022/2023",
    industry: "Fashion film",
    summary:
      "Two visual cuts for the KKA 23–24 collection—one hypnotic and restrained, the other a full-force declaration.",
    cover: "/media/media/kka-music-video/cover.jpeg",
    sections: [
      {
        heading: "This isn’t a launch video. It’s a declaration.",
        paragraphs: [
          "FRANCHISE is the visual statement for the KKA 23–24 collection, presented by THISISHIT, HARD. and directed by Daniel Syauqi. Its nocturnal, high-contrast language pulls the Retro-Man and Pastel-Boy identities into one cinematic world.",
          "The MASKKA cut is a slow descent through shadow, silhouette, and quiet menace. The full cut changes the temperature completely: faster, louder, and built around the collective energy behind the collection. Together they make the release feel less like merchandise and more like culture.",
        ],
      },
    ],
    videos: [
      { title: "MASKKA version", youtubeId: "MYz3eIH1n5U" },
      { title: "Full version", youtubeId: "te7npVsw3xk" },
    ],
  },
  {
    slug: "kka-jersey-pastel-boy",
    category: "media",
    title: "KKA Jersey: Pastel Boy",
    client: "JPKA 2022/2023",
    industry: "Fashion campaign",
    summary:
      "A pastel tie-dye campaign built around quiet confidence, creative rebellion, and a very limited release.",
    cover: "/media/media/pastel-boy/cover.jpg",
    sections: [
      {
        heading: "The other side of the coin",
        paragraphs: [
          "Where Retro-Man is the uniform of the grind, Pastel-Boy is armour for the visionary. The dreamy tie-dye palette is not about blending in; it is about owning your frequency and finding strength in peace.",
          "Phrases such as “Unleash Your Colour” and “Eye candy. Visionary. Peaceful.” define a campaign for people who know impact does not always have to shout. Limited to fifty pieces, the release feels like an invitation to a small group who see the world differently.",
        ],
      },
    ],
    gallery: Array.from(
      { length: 7 },
      (_, index) => `/media/media/pastel-boy/gallery-${index + 1}.jpg`,
    ),
  },
  {
    slug: "kka-jersey-retro-man",
    category: "media",
    title: "KKA Jersey: Retro-Man",
    client: "JPKA 2022/2023",
    industry: "Fashion campaign",
    summary:
      "A gritty monochrome campaign that rejects short-lived trends in favour of an old-school, purposeful identity.",
    cover: "/media/media/retro-man/cover.jpg",
    sections: [
      {
        heading: "More than a jersey—an identity",
        paragraphs: [
          "Retro-Man is KKA’s 2023/2024 release for people who move with purpose. Stark black-and-white visuals and lines such as “Stay Menace” and “Divide and Conquer” turn the campaign into a statement rather than a conventional product launch.",
          "The result is a timeless, raw visual system: an old-school soul carrying a modern fight.",
        ],
      },
    ],
    gallery: Array.from(
      { length: 7 },
      (_, index) => `/media/media/retro-man/gallery-${index + 1}.jpg`,
    ),
  },
  {
    slug: "jpka-franchise",
    category: "media",
    title: "JPKA: Franchise",
    client: "JPKA 2022/2023",
    industry: "University campaign",
    summary:
      "A high-contrast collage and visual mission statement for a collective that values action over posturing.",
    cover: "/media/media/jpka-franchise/cover.png",
    sections: [
      {
        heading: "Raw energy, made graphic",
        paragraphs: [
          "The aggressive collage treatment is not decoration; it is the campaign’s declaration. Distressed typography, clipped portraits, and hard contrast capture a group operating on its own terms and prepared to walk the talk.",
        ],
      },
    ],
    gallery: ["/media/media/jpka-franchise/poster.png"],
  },
  {
    slug: "jpka-24-25-montage",
    category: "media",
    title: "JPKA 24/25: Montage",
    client: "JPKA 2024/2025",
    industry: "University film",
    summary:
      "A cinematic record of a student leadership era, moving from a monochrome prologue into a kinetic final act.",
    cover: "/media/media/jpka-montage/cover.png",
    sections: [
      {
        heading: "Not just a montage—the story of an era",
        paragraphs: [
          "The film records a defining moment for the JPKA 24–25 administration. Its prologue begins in monochrome: a fever dream of shadows and silhouettes that holds the quiet confidence before the storm.",
          "Then the world ignites with colour. The rhythm shifts, the collective enters at full force, and the film becomes proof of a generation at its peak. It is less interested in showing faces than in cementing the feeling of a golden era.",
        ],
      },
    ],
    videos: [{ title: "Montage", youtubeId: "eXRNp39WCtE" }],
  },
  {
    slug: "love",
    category: "media",
    title: "Love.",
    client: "0687.",
    industry: "Short film",
    summary:
      "A visual poem about heartbreak, solitude, and the faint but enduring possibility of healing.",
    cover: "/media/media/love/cover.jpg",
    sections: [
      {
        heading: "A story told in images and silence",
        paragraphs: [
          "Filmed across atmospheric Malaysian landscapes, Love. trades a traditional plot for fragments of feeling: rain on a car window, solitary reflection, and a city stretching into the distance.",
          "Questions such as “Can I love the same way again?” turn a private moment into a shared human anxiety. The film invites the viewer to sit with that feeling and find their own meaning in the silence between its images.",
        ],
      },
    ],
    videos: [{ title: "Love.", youtubeId: "oXp7Gm9YmSE" }],
  },
];

export const allProjects = [...webProjects, ...mediaProjects];

export function getProject(category: ProjectCategory, slug: string) {
  return allProjects.find(
    (project) => project.category === category && project.slug === slug,
  );
}
