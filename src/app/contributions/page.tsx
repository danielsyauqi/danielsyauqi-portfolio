import type { Metadata } from "next";
import Image from "next/image";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ContributionsExplorer } from "@/components/ContributionsExplorer";

const contributions = [
  {
    repository: "uutils/coreutils",
    ownerName: "Uutils",
    ownerLogo: "/media/contributions/uutils.png",
    pullNumber: 15161,
    date: "8 Oct 2026",
    dateTime: "2026-10-08T20:09:10Z",
    title: "Report touch access errors as “cannot touch”",
    problem:
      'For ordinary touch operations, inaccessible files and parent directories produced a “setting times of” error where GNU touch reports “cannot touch”.',
    change:
      'I made the error wording depend on the Unix access failure and touch options, preserving “setting times of” for -c and -h. Regression tests cover protected files and inaccessible parent directories.',
    file: "src/uu/touch/src/touch.rs",
    diffHunk: "@@ -484,9 +496,12 @@",
    diffLines: [
      {
        kind: "added",
        newLine: 499,
        code: "let context = if cannot_touch_on_access_error(opts, &e) {",
      },
      {
        kind: "added",
        newLine: 500,
        code: 'translate!("touch-error-cannot-touch", "filename" => filename.quote())',
      },
      { kind: "added", newLine: 501, code: "} else {" },
      {
        kind: "added",
        newLine: 502,
        code: 'translate!("touch-error-setting-times-of", "filename" => filename.quote())',
      },
      { kind: "added", newLine: 503, code: "};" },
    ],
    pullRequest: "https://github.com/uutils/coreutils/pull/15161",
    commit: "https://github.com/uutils/coreutils/pull/15161/commits/29c7330080ecb44062779a67d53638669d005e1f",
    shortCommit: "29c7330",
  },
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
    diffHunk: "@@ -287,7 +287,8 @@",
    diffLines: [
      {
        kind: "removed",
        oldLine: 290,
        code: '} else if let entrypoint = config?.entrypoint, !entrypoint.isEmpty {',
      },
      {
        kind: "added",
        newLine: 290,
        code: '} else if let entrypoint = config?.entrypoint, !entrypoint.isEmpty, entrypoint != [""] {',
      },
      {
        kind: "added",
        newLine: 291,
        code: "// A single empty string clears the image entrypoint.",
      },
      { kind: "context", oldLine: 291, newLine: 292, code: "result = entrypoint" },
    ],
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
    diffHunk: "@@ -74,6 +81,11 @@",
    diffLines: [
      {
        kind: "context",
        oldLine: 75,
        newLine: 82,
        code: "clientParameters.defaultStack.transport = .udp(clientUDPOptions)",
      },
      { kind: "context", oldLine: 76, newLine: 83, code: "" },
      {
        kind: "added",
        newLine: 84,
        code: "let clientOutput = BridgeDatagramProtocol.instance(context: context)",
      },
      {
        kind: "added",
        newLine: 85,
        code: "let clientBridgeOptions = BridgeDatagramProtocol.options()",
      },
      {
        kind: "added",
        newLine: 86,
        code: "clientBridgeOptions.setProtocolInstance(clientOutput)",
      },
      {
        kind: "added",
        newLine: 87,
        code: "clientParameters.defaultStack.link = .custom(clientBridgeOptions)",
      },
    ],
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
          <div className="contributions-hero-copy">
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
          <Image
            className="contributions-hero-illustration"
            src="/media/illustrations/open-source-code.svg"
            alt="Illustration of an open-source code interface"
            width={960}
            height={743}
            priority
          />
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
        <a
          className="button button-dark"
          href="https://seederpm.xyz"
          target="_blank"
          rel="noreferrer"
        >
          Explore Seeder <ArrowIcon diagonal />
        </a>
      </section>
    </main>
  );
}
