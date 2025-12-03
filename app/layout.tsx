import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Manipal Elective Guide",
  description: "Student-run guide for PE/OE selection at Manipal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="header">
            <a href="/" className="logo">
              Manipal Elective Guide
            </a>
            <nav className="nav">
              <a href="/guide">PE/OE Guide</a>
              <a href="/courses">Browse Electives</a>
            </nav>
          </header>
          <main className="main">{children}</main>
          <footer className="footer">
            Built by students for students · {new Date().getFullYear()}
          </footer>
        </div>
      </body>
    </html>
  );
}
