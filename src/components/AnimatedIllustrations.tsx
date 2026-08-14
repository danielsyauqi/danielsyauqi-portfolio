export function ProcessIllustration() {
  return (
    <svg
      aria-hidden="true"
      className="process-illustration"
      viewBox="0 0 124 72"
    >
      <rect className="illustration-sheet" height="56" rx="6" width="112" x="6" y="8" />
      <circle className="illustration-node node-one" cx="23" cy="26" r="6" />
      <circle className="illustration-node node-two" cx="23" cy="48" r="6" />
      <path className="illustration-route route-one" d="M29 26H46C53 26 53 36 60 36H72" />
      <path className="illustration-route route-two" d="M29 48H46C53 48 53 36 60 36H72" />
      <rect className="illustration-result" height="24" rx="5" width="30" x="72" y="24" />
      <path className="illustration-check" d="m81 36 5 5 9-11" />
      <circle className="illustration-pulse" cx="110" cy="17" r="3" />
    </svg>
  );
}

export function DeliveryIllustration({ kind }: { kind: "ios" | "scraper" }) {
  if (kind === "ios") {
    return (
      <svg aria-hidden="true" className="delivery-illustration" viewBox="0 0 220 92">
        <path className="delivery-orbit" d="M50 46C50 19 78 8 107 8c32 0 60 15 60 38s-26 38-57 38" />
        <rect className="phone-shell" height="72" rx="11" width="40" x="90" y="10" />
        <rect className="phone-screen" height="49" rx="5" width="30" x="95" y="18" />
        <path className="phone-wave wave-one" d="M100 51c5-11 10-11 15 0" />
        <path className="phone-wave wave-two" d="M100 43c5-11 10-11 15 0" />
        <circle className="delivery-dot dot-one" cx="51" cy="46" r="5" />
        <circle className="delivery-dot dot-two" cx="168" cy="46" r="5" />
        <path className="delivery-check" d="m159 46 5 5 10-12" />
        <circle className="phone-home" cx="110" cy="75" r="2" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="delivery-illustration" viewBox="0 0 220 92">
      <rect className="message-card card-one" height="19" rx="5" width="54" x="12" y="17" />
      <rect className="message-card card-two" height="19" rx="5" width="54" x="12" y="54" />
      <path className="message-line" d="M22 25h31M22 62h31" />
      <path className="scraper-route route-top" d="M67 26h25c8 0 8 12 16 12" />
      <path className="scraper-route route-bottom" d="M67 63h25c8 0 8-25 16-25" />
      <path className="filter-shape" d="M101 24h38l-14 17v20l-10 7V41Z" />
      <rect className="data-card" height="58" rx="7" width="56" x="152" y="17" />
      <path className="data-line line-one" d="M163 31h33" />
      <path className="data-line line-two" d="M163 45h25" />
      <path className="data-line line-three" d="M163 59h30" />
      <circle className="scraper-pulse" cx="145" cy="46" r="4" />
    </svg>
  );
}
