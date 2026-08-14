import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";

export default function NotFound() {
  return (
    <main className="not-found page-shell">
      <p className="eyebrow">404 / Wrong turn</p>
      <h1>This page wandered off.</h1>
      <p>The work is still here. Let&apos;s get you back to it.</p>
      <Link className="button button-dark" href="/">
        Return home <ArrowIcon />
      </Link>
    </main>
  );
}
