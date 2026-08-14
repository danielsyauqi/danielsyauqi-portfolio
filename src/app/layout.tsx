import type { Metadata } from "next";
import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MotionObserver } from "@/components/MotionObserver";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danielsyauqi.site"),
  title: {
    default: "Daniel Syauqi — Full-stack Developer & Product Builder",
    template: "%s — Daniel Syauqi",
  },
  description:
    "Portfolio of Daniel Syauqi, a Kuala Lumpur-based full-stack developer and open-source product builder working across software, design, and visual storytelling.",
  openGraph: {
    title: "Daniel Syauqi — Full-stack Developer & Product Builder",
    description:
      "Full-stack products, thoughtful interfaces, and visual stories built in Kuala Lumpur.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${spaceMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <MotionObserver />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
