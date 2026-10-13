"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
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

function highlightMatch(value: string, search: string): ReactNode {
  if (!search) return value;

  const lowerValue = value.toLocaleLowerCase();
  const lowerSearch = search.toLocaleLowerCase();
  const parts: ReactNode[] = [];
  let start = 0;
  let match = lowerValue.indexOf(lowerSearch);

  while (match !== -1) {
    if (match > start) parts.push(value.slice(start, match));
    parts.push(
      <mark className="contribution-search-match" key={match}>
        {value.slice(match, match + search.length)}
      </mark>,
    );
    start = match + search.length;
    match = lowerValue.indexOf(lowerSearch, start);
  }

  if (start < value.length) parts.push(value.slice(start));
  return parts;
}

export function ContributionsExplorer({
  contributions,
}: {
  contributions: readonly Contribution[];
}) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Contribution | null>(null);
  const resultsRef = useRef<HTMLUListElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const searchTerm = query.trim();

  useEffect(() => {
    if (selected && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, [selected]);

  const matches = useMemo(() => {
    const search = searchTerm.toLocaleLowerCase();

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
  }, [contributions, searchTerm]);

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

      <ul id="contribution-results" className="contribution-items" ref={resultsRef}>
        {visible.map((item) => (
          <li className="contribution-row" key={item.pullRequest}>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-label={`View details for ${item.title}`}
              onClick={() => setSelected(item)}
            >
              <span>{highlightMatch(item.title, searchTerm)}</span>
              <span aria-hidden="true">+</span>
            </button>
            <a href={item.pullRequest} target="_blank" rel="noreferrer">
              PR #{highlightMatch(item.pullNumber.toString(), searchTerm)} <ArrowIcon diagonal />
            </a>
          </li>
        ))}
      </ul>

      {selected && (
        <dialog
          className="contribution-dialog"
          ref={dialogRef}
          aria-labelledby="contribution-dialog-title"
          onClose={() => setSelected(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) event.currentTarget.close();
          }}
        >
          <div className="contribution-dialog-header">
            <span>Contribution details</span>
            <button
              type="button"
              aria-label="Close contribution details"
              onClick={() => dialogRef.current?.close()}
            >
              ×
            </button>
          </div>
          <div className="contribution-dialog-content">
            <div className="contribution-topline">
              <div className="contribution-repository">
                <Image
                  className="contribution-owner-logo"
                  src={selected.ownerLogo}
                  alt={`${selected.ownerName} logo`}
                  width={46}
                  height={46}
                />
                <div>
                  <span>{highlightMatch(selected.repository, searchTerm)}</span>
                  <span>PR #{highlightMatch(selected.pullNumber.toString(), searchTerm)}</span>
                </div>
              </div>
              <span className="contribution-status">
                Merged upstream · <time dateTime={selected.dateTime}>{selected.date}</time>
              </span>
            </div>

            <h2 id="contribution-dialog-title">{highlightMatch(selected.title, searchTerm)}</h2>

            <div className="contribution-body">
              <div className="contribution-story">
                <div>
                  <span className="contribution-label">The problem</span>
                  <p>{highlightMatch(selected.problem, searchTerm)}</p>
                </div>
                <div>
                  <span className="contribution-label">What I changed</span>
                  <p>{highlightMatch(selected.change, searchTerm)}</p>
                </div>
              </div>

              <div className="contribution-diff" aria-label={`Diff excerpt from ${selected.file}`}>
                <div className="contribution-diff-heading">
                  <div>
                    <span>Diff preview</span>
                    <strong>{highlightMatch(selected.file, searchTerm)}</strong>
                  </div>
                  <a href={`${selected.pullRequest}/files`} target="_blank" rel="noreferrer">
                    Full diff <ArrowIcon diagonal />
                  </a>
                </div>
                <div className="contribution-diff-hunk">{selected.diffHunk}</div>
                <div className="contribution-diff-lines" aria-label="Selected changed lines">
                  {selected.diffLines.map((line, index) => (
                    <div className={`contribution-diff-row diff-${line.kind}`} key={`${line.kind}-${index}`}>
                      <span aria-hidden="true">{line.oldLine ?? ""}</span>
                      <span aria-hidden="true">{line.newLine ?? ""}</span>
                      <code>
                        {line.kind === "added" ? "+" : line.kind === "removed" ? "−" : " "}{" "}
                        {highlightMatch(line.code, searchTerm)}
                      </code>
                    </div>
                  ))}
                </div>
                <p>Selected lines from merged PR #{selected.pullNumber}.</p>
              </div>
            </div>

            <div className="contribution-links">
              <a href={selected.pullRequest} target="_blank" rel="noreferrer">
                View merged PR #{highlightMatch(selected.pullNumber.toString(), searchTerm)} <ArrowIcon diagonal />
              </a>
              <a href={selected.commit} target="_blank" rel="noreferrer">
                Authored commit <span>{highlightMatch(selected.shortCommit, searchTerm)}</span> <ArrowIcon diagonal />
              </a>
            </div>
          </div>
        </dialog>
      )}

      {matches.length === 0 && (
        <div className="contribution-empty">
          <h3>No contributions found.</h3>
          <p>Try a repository, topic, PR number, or commit ID.</p>
          <button type="button" onClick={() => setQuery("")}>Clear search</button>
        </div>
      )}

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
