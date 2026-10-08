import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/danielsyauqi" },
  { label: "GitHub", href: "https://github.com/danielsyauqi" },
  { label: "YouTube", href: "https://www.youtube.com/@stardev4u" },
  { label: "WhatsApp", href: "https://wa.me/+601137781946" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-lead">
        <div>
          <span className="footer-star">✦</span>
          <h2>Daniel Syauqi</h2>
          <p>Builder across software, product design, and visual storytelling.</p>
        </div>
        <Link className="button button-dark" href="/contact">
          Work with me <ArrowIcon diagonal />
        </Link>
      </div>

      <div className="footer-grid">
        <div>
          <span className="footer-label">Navigate</span>
          <Link href="/">Home</Link>
          <Link href="/web">Web</Link>
          <Link href="/media">Media</Link>
          <Link href="/contributions">Contributions</Link>
          <Link href="/about">About</Link>
        </div>
        <div>
          <span className="footer-label">Find me</span>
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label} <ArrowIcon diagonal />
            </a>
          ))}
        </div>
        <div className="footer-location">
          <span className="footer-label">Based in</span>
          <p>Kuala Lumpur, Malaysia</p>
          <a href="mailto:danielcruzz04@gmail.com">danielcruzz04@gmail.com</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Daniel Syauqi</span>
        <span>Built in Kuala Lumpur</span>
      </div>
    </footer>
  );
}
