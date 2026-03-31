export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-10 place-items-center">
          <div>
            <h4 className="font-semibold text-foreground mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About the Journal
                </a>
              </li>
              <li>
                <a
                  href="/editorial-board"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Editorial Board
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Aims &amp; Scope
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Publication Ethics
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Authors</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/submit-paper"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Submit a Paper
                </a>
              </li>
              <li>
                <a
                  href="/submission-guidelines"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Submission Guidelines
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Peer Review Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Manuscript Format
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/archives"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Archives
                </a>
              </li>
              <li>
                <a
                  href="/indexing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Indexing
                </a>
              </li>
              
            </ul>
          </div>
          {/* <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                0120-4338616, 9999694251
              </li>
              <li>
                <a
                  href="mailto:ijbks.vbuss@gmail.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  ijbks.vbuss@gmail.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Vidya Bharati Uchcha Shiksha Sansthan
                <br />
                H-107, Sector-12, Noida
                <br />
                Pin-201301, Uttar Pradesh
              </li>
            </ul>
          </div> */}
        </div>
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2026 Vidya Bharati Uchcha Shiksha Sansthan (VBUSS). All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="#"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
