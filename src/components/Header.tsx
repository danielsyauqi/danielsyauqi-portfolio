import Link from "next/link";
const navigation = [
  { href: "/web", label: "Web" },
  { href: "/media", label: "Media" },
  { href: "/contributions", label: "Contributions" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Daniel Syauqi, home">
        <span className="brand-name">danielsyauqi.</span>
      </Link>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="header-cta" href="/contact">
        Contact ↗
      </Link>

      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact">Contact</Link>
        </nav>
      </details>
    </header>
  );
}
