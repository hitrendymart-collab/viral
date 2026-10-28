import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header className="navbar">
        <a href="#" className="logo">
          <span className="logo-icon">▶</span>
          MELODY<span className="green">DOLL</span>
        </a>
        <span className="nav-label">VIDEO COLLECTION</span>
      </header>
      <body>{children}</body>
       <footer className="footer">
          <a href="#" className="logo">
            MELODY<span className="green">DOLL</span>
          </a>
          <span>© 2026 · All rights reserved</span>
        </footer>
    </html>
  );
}