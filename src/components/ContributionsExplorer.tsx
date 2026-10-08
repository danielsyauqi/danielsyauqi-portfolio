"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { ArrowIcon } from "@/components/ArrowIcon";

type Contribution = {
  repository: string;
  ownerName: string;
  ownerLogo: string;
  pullNumber: number;
  date: string;
  dateTime: string;
  title: string;
  problem: string;
  change: string;
  file: string;
  diffHunk: string;
  diffLines: readonly {
    kind: "context" | "removed" | "added";
    oldLine?: number;
    newLine?: number;
    code: string;
  }[];
  pullRequest: string;
  commit: string;
  shortCommit: string;
};

const PAGE_SIZE = 5;

export function ContributionsExplorer({
  contributions,
}: {
  contributions: readonly Contribution[];
}) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const resultsRef = useRef<HTMLDivElement>(null);

  const matches = useMemo(() => {
    const search = query.trim().toLocaleLowerCase();

    return contributions
      .filter((item) =>
        [
          item.repository,
          item.pullNumber.toString(),
          item.title,
          item.problem,
          item.change,
          item.file,
          item.shortCommit,
          ...item.diffLines.map((line) => line.code),
        ].some((value) => value.toLocaleLowerCase().includes(search)),
      )
      .sort((a, b) => b.dateTime.localeCompare(a.dateTime));
  }, [contributions, query]);

  const pageCount = Math.max(1, Math.ceil(matches.length / PAGE_SIZE));
  const activePage = Math.min(page, pageCount);
  const visible = matches.slice((activePage - 1) * PAGE_SIZE, activePage * PAGE_SIZE);

  function goToPage(nextPage: number) {
    setPage(nextPage);
    resultsRef.current?.scrollIntoView({ behavior: "auto", block: "start" });
  }

  return (
    <>
      <div className="contribution-controls">
        <div className="contribution-search" role="search">
          <label htmlFor="contribution-search">Search contributions</label>
          <input
            id="contribution-search"
            type="search"
            placeholder="Repository, fix, or commit"
            value={query}
            aria-controls="contribution-results"
            onChange={(event) => {
              setQuery(event.target.value);
              setPage(1);
            }}
          />
        </div>
        <div className="contribution-results-meta" aria-live="polite">
          <span>
            {matches.length === 0
              ? "No matches"
              : `Showing ${(activePage - 1) * PAGE_SIZE + 1}–${Math.min(activePage * PAGE_SIZE, matches.length)} of ${matches.length}`}
          </span>
          <span>Newest merged first</span>
        </div>
      </div>

      <div id="contribution-results" className="contribution-items" ref={resultsRef}>
        {visible.map((item) => (
          <article className="contribution-card" key={item.pullRequest}>
            <div className="contribution-topline">
              <div className="contribution-repository">
                <Image
                  className="contribution-owner-logo"
                  src={item.ownerLogo}
                  alt={`${item.ownerName} logo`}
                  width={46}
                  height={46}
                />
                <div>
                  <span>{item.repository}</span>
                  <span>PR #{item.pullNumber}</span>
                </div>
              </div>
              <span className="contribution-status">
                Merged upstream · <time dateTime={item.dateTime}>{item.date}</time>
              </span>
            </div>

            <h3>{item.title}</h3>

            <div className="contribution-body">
              <div className="contribution-story">
                <div>
                  <span className="contribution-label">The problem</span>
                  <p>{item.problem}</p>
                </div>
                <div>
                  <span className="contribution-label">What I changed</span>
                  <p>{item.change}</p>
                </div>
              </div>

              <div className="contribution-diff" aria-label={`Diff excerpt from ${item.file}`}>
                <div className="contribution-diff-heading">
                  <div>
                    <span>Diff preview</span>
                    <strong>{item.file}</strong>
                  </div>
                  <a href={`${item.pullRequest}/files`} target="_blank" rel="noreferrer">
                    Full diff <ArrowIcon diagonal />
                  </a>
                </div>
                <div className="contribution-diff-hunk">{item.diffHunk}</div>
                <div className="contribution-diff-lines" aria-label="Selected changed lines">
                  {item.diffLines.map((line, index) => (
                    <div className={`contribution-diff-row diff-${line.kind}`} key={`${line.kind}-${index}`}>
                      <span aria-hidden="true">{line.oldLine ?? ""}</span>
                      <span aria-hidden="true">{line.newLine ?? ""}</span>
                      <code>{line.kind === "added" ? "+" : line.kind === "removed" ? "−" : " "} {line.code}</code>
                    </div>
                  ))}
                </div>
                <p>Selected lines from merged PR #{item.pullNumber}.</p>
              </div>
            </div>

            <div className="contribution-links">
              <a href={item.pullRequest} target="_blank" rel="noreferrer">
                View merged PR #{item.pullNumber} <ArrowIcon diagonal />
              </a>
              <a href={item.commit} target="_blank" rel="noreferrer">
                Authored commit <span>{item.shortCommit}</span> <ArrowIcon diagonal />
              </a>
            </div>
          </article>
        ))}

        {matches.length === 0 && (
          <div className="contribution-empty">
            <h3>No contributions found.</h3>
            <p>Try a repository, topic, PR number, or commit ID.</p>
            <button type="button" onClick={() => setQuery("")}>Clear search</button>
          </div>
        )}
      </div>

      {matches.length > 0 && (
        <nav className="contribution-pagination" aria-label="Contribution pages">
          <button
            type="button"
            disabled={activePage === 1}
            onClick={() => goToPage(activePage - 1)}
          >
            Previous
          </button>
          <span>Page {activePage} of {pageCount}</span>
          <button
            type="button"
            disabled={activePage === pageCount}
            onClick={() => goToPage(activePage + 1)}
          >
            Next
          </button>
        </nav>
      )}
    </>
  );
}
