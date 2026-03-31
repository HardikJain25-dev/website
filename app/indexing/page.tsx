import { Footer } from "@/components/Footer";
import { Award, Shield, ExternalLink, CheckCircle } from "lucide-react";

export default function IndexingPage() {
  return (
    <main className="pt-40">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-border py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Indexing
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            The International Journal of Bharatiya Knowledge System is indexed
            in major academic databases and repositories.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Indexed In */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="size-5 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">
                  Indexed In
                </h2>
              </div>
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-4">
                  <div className="size-16 rounded-xl bg-muted flex items-center justify-center">
                    <Shield className="size-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">CrossRef</h3>
                    <p className="text-sm text-muted-foreground">
                      Digital Object Identifier (DOI) registration
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Indexing Benefits
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Global Visibility",
                    desc: "Increased discoverability across international academic databases",
                  },
                  {
                    title: "Citation Tracking",
                    desc: "DOI-based citation metrics and article tracking",
                  },
                  {
                    title: "Permanent Archiving",
                    desc: "Long-term preservation and access to published research",
                  },
                  {
                    title: "Quality Assurance",
                    desc: "Rigorous peer review process ensures academic standards",
                  },
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="bg-card rounded-xl border border-border p-5"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="size-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ISSN Info */}
            <div className="bg-muted/50 rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">
                ISSN Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Online ISSN
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-1">
                    3048-7315
                  </p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    Print ISSN
                  </p>
                  <p className="text-2xl font-bold text-foreground mt-1">
                    3107-3727
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Journal Identifiers
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ISSN (Online)</span>
                  <span className="font-medium text-foreground">
                    3048-7315
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ISSN (Print)</span>
                  <span className="font-medium text-foreground">
                    3107-3727
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Publisher</span>
                  <span className="font-medium text-foreground">VBUSS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Country</span>
                  <span className="font-medium text-foreground">India</span>
                </div>
              </div>
            </div>

            {/* <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Indexing Applications
              </h3>
              <p className="text-sm text-muted-foreground">
                The journal is currently in the process of applying for indexing
                in additional databases including:
              </p>
              <ul className="space-y-2 mt-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" />
                  UGC CARE List
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Scopus
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Web of Science
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" />
                  DOAJ
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
