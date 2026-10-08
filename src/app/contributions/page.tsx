import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ContributionsExplorer } from "@/components/ContributionsExplorer";

const contributions = [
  {
    repository: "apple/container",
    ownerName: "Apple",
    ownerLogo: "/media/contributions/apple.jpg",
    pullNumber: 2296,
    date: "22 Sep 2026",
    dateTime: "2026-09-22T23:36:21Z",
    title: "Run commands when an image entrypoint is empty",
    problem:
      'An image with Entrypoint: [""] tried to run an empty executable, so a command supplied to container run failed.',
    change:
      "I made the parser treat that value as a cleared entrypoint, letting the supplied command or the image’s Cmd run. Three regression tests cover both fallbacks and a normal entrypoint.",
    file: "Parser.swift",
    removed: 'else if let entrypoint = config?.entrypoint, !entrypoint.isEmpty {',
    added: 'else if let entrypoint = config?.entrypoint, !entrypoint.isEmpty, entrypoint != [""] {',
    pullRequest: "https://github.com/apple/container/pull/2296",
    commit: "https://github.com/apple/container/pull/2296/commits/1b02937c1b34651797e3ae51ed12b5e5f75d17a0",
    shortCommit: "1b02937",
  },
  {
    repository: "apple/swift-network-evolution",
    ownerName: "Apple",
    ownerLogo: "/media/contributions/apple.jpg",
    pullNumber: 168,
    date: "24 Sep 2026",
    dateTime: "2026-09-24T17:09:40Z",
    title: "Move the UDP benchmark onto the datagram bridge",
    problem:
      "The IPUDPTransfer benchmark manually passed packets between harnesses instead of using the bridge used by the networking stack.",
    change:
      "I connected both endpoints through BridgeDatagramProtocol, gave them distinct ports, and made incomplete transfers fail instead of counting as completed iterations.",
    file: "IPUDPTransfer/main.swift",
    removed: "let clientOutput = DatagramLowerHarness(",
    added: "let clientOutput = BridgeDatagramProtocol.instance(context: context)",
    pullRequest: "https://github.com/apple/swift-network-evolution/pull/168",
    commit: "https://github.com/apple/swift-network-evolution/pull/168/commits/265e9b6f26aa5115f28e791610508e8d4a1c3139",
    shortCommit: "265e9b6",
  },
] as const;

export const metadata: Metadata = {
  title: "Contributions",
  description:
    "Selected open-source contributions by Daniel Syauqi, with the problem, code change, and links to merged upstream pull requests.",
};

export default function ContributionsPage() {
  return (
    <main className="contributions-page">
      <section className="contributions-hero page-shell" data-reveal="up">
        <p className="eyebrow">Contributions</p>
        <div className="contributions-hero-grid">
          <h1>
            Code that
            <br />
            landed upstream.
          </h1>
          <p>
            A selection of fixes I contributed to projects maintained by others. Each
            entry shows the problem, the change I made, and the public record behind it.
          </p>
        </div>
      </section>

      <section className="contributions-list page-shell" aria-labelledby="contributions-heading">
        <div className="document-heading" data-reveal="up">
          <div>
            <h2 id="contributions-heading">Merged contributions</h2>
            <p>Small, focused patches with a clear reason to exist.</p>
          </div>
          <a
            className="plain-link"
            href="https://github.com/danielsyauqi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub profile ↗
          </a>
        </div>

        <ContributionsExplorer contributions={contributions} />
      </section>

      <section className="contributions-maintainer page-shell" data-reveal="up">
        <div className="contributions-maintainer-content">
          <Image
            className="contributions-maintainer-logo"
            src="/media/contributions/seeder-icon.png"
            alt="Seeder logo"
            width={72}
            height={72}
          />
          <div>
            <p className="eyebrow">Beyond upstream patches</p>
            <h2>I also build and maintain Seeder.</h2>
            <p>
              My longer-running product work has its own case study, from the workspace
              experience to the self-hosted architecture and AI-ready MCP server.
            </p>
          </div>
        </div>
        <Link className="button button-dark" href="/web/seeder">
          Explore Seeder <ArrowIcon diagonal />
        </Link>
      </section>
    </main>
  );
}
