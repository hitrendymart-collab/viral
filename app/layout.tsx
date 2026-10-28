
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const SMART_LINK =
  "https://www.profitableratecpmnetwork.com/bs53kqygr8?key=86673c8a90f3a1dfc426eea66db81670";

export const metadata: Metadata = {
  title: "Fucking Sex Bangla",
  description: "Fucking Sex Bangla",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <a
            href={SMART_LINK}
            className="logo"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >
            <span className="logo-icon">▶</span>
            {" "}Fucking Sex
            <span className="green">Bangla</span>
          </a>

          <a
            href={SMART_LINK}
            className="nav-label"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >
            VIDEO COLLECTION
          </a>
        </header>

        {children}

        <footer className="footer">
          <a
            href={SMART_LINK}
            className="logo"
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
          >
            Fucking Sex{" "}
            <span className="green">Bangla</span>
          </a>

          <span>© 2026 · All rights reserved</span>
        </footer>
      </body>
    </html>
  );
}
