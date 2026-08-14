import type { Metadata } from "next";
import { ArrowIcon } from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project or conversation with Daniel Syauqi.",
};

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/danielsyauqi" },
  { label: "GitHub", href: "https://github.com/danielsyauqi" },
  { label: "YouTube", href: "https://www.youtube.com/@stardev4u" },
  { label: "WhatsApp", href: "https://wa.me/+601137781946" },
];

export default function ContactPage() {
  return (
    <main className="contact-page page-shell" data-reveal="up">
      <div className="contact-heading">
        <p className="eyebrow">Contact</p>
        <h1>
          Let&apos;s start
          <br />
          <span>creating together.</span>
        </h1>
        <p>
          Have a product to build, a system to untangle, or a story worth framing?
          Send the context and I&apos;ll get back to you.
        </p>
      </div>

      <div className="contact-details">
        <a className="contact-email" href="mailto:daniel.syauqi@alphv.com">
          daniel.syauqi@alphv.com <ArrowIcon diagonal />
        </a>
        <div className="contact-facts">
          <div>
            <span>Phone</span>
            <a href="tel:+601137781946">+60 11-3778 1946</a>
          </div>
          <div>
            <span>Based in</span>
            <p>Kuala Lumpur, Malaysia</p>
          </div>
        </div>
        <div className="contact-socials">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label} <ArrowIcon diagonal />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
