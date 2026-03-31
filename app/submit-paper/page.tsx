import { Footer } from "@/components/Footer";
import { Upload, FileText, Mail, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubmitPaperPage() {
  return (
    <main className="pt-40">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-border py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Submit Your Paper
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Submit your manuscript for peer review and publication in the
            International Journal of Bharatiya Knowledge System.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Submission Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Manuscript Submission Form
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                    <input
                      type="tel"
                      placeholder="+91 XXXXXXXXXX"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Manuscript Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter manuscript title"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Abstract
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Enter manuscript abstract (250-300 words)"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Keywords
                  </label>
                  <input
                    type="text"
                    placeholder="Enter keywords separated by commas"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Upload Manuscript
                  </label>
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="size-10 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">
                      Drag and drop your manuscript here, or{" "}
                      <span className="text-primary font-medium">browse</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      DOC or DOCX format, max 10MB
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mt-1 size-4 rounded border-border"
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    I confirm that this manuscript is original, has not been
                    published elsewhere, and is not under consideration by any
                    other journal. I agree to the journal's{" "}
                    <a href="/submission-guidelines" className="text-primary hover:underline">
                      submission guidelines
                    </a>{" "}
                    and publication ethics.
                  </label>
                </div>

                <Button type="submit" className="w-full py-6 text-base">
                  Submit Manuscript
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Submission Checklist
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "Manuscript in DOC/DOCX format",
                  "Word count: 5,000 - 8,000",
                  "Times New Roman, 12pt font",
                  "Double-spaced, single column",
                  "APA 7th Edition style",
                  "Abstract (250-300 words)",
                  "Keywords (4-6 terms)",
                  "References formatted correctly",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="size-4 rounded border border-border mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6">
              <h3 className="font-semibold text-foreground mb-3">
                Email Submission
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                You can also submit your manuscript directly via email:
              </p>
              <a
                href="mailto:ijbks.vbuss@gmail.com"
                className="text-primary font-medium hover:underline text-sm"
              >
                ijbks.vbuss@gmail.com
              </a>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Need Help?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contact us for any queries regarding submission:
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Phone:</span>{" "}
                  +91-9311331434
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Email:</span>{" "}
                  ijbks.vbuss@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
