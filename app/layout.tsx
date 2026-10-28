
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const SMART_LINK =
  "https://www.profitableratecpmnetwork.com/bs53kqygr8?key=86673c8a90f3a1dfc426eea66db81670";

export const metadata: Metadata = {
  title: "Viral Bangladeshi Videos",
  description: "Latest viral videos from Bangladesh",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {children}

      </body>
    </html>
  );
}
