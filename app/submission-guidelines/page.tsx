import { Footer } from "@/components/Footer";
import { FileText, Shield, AlertTriangle, ArrowRight } from "lucide-react";

export default function SubmissionGuidelinesPage() {
  return (
    <main className="pt-30">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-border py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Submission Guidelines
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Please read the following guidelines carefully before submitting
            your manuscript.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            {/* Submission Process */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Submission Process
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Manuscripts and all editorial correspondence should be addressed
                to the Editor at{" "}
                <a
                  href="mailto:ijbks.vbuss@gmail.com"
                  className="text-primary hover:underline"
                >
                  ijbks.vbuss@gmail.com
                </a>
                . Manuscripts should be submitted via email to the
                above-mentioned email address. The corresponding author will be
                provided with a copyright form once the contribution is accepted
                for publication. The submission will be considered as final only
                after the filled-in and signed copyright form is received.
                Manuscripts should be prepared in accordance with the 7th
                edition of the Publication Manual of the American Psychological
                Association (APA).
              </p>
            </div>

            {/* Review Policy */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="size-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  Review Policy
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The International Journal of Bharatiya Knowledge System pursues
                double blind peer review of the submitted manuscripts. As the
                manuscript is submitted, the managing editor goes through it to
                check basic formatting and once the Editor determines that the
                manuscript is according to the submission guidelines, it is
                assigned for review to the registered reviewers based on their
                subject expertise. And if the manuscript is not according to the
                journal submission guidelines or if the manuscript subject is not
                appropriate to the journal scope, the managing editor rejects the
                manuscript with no further processing (desk rejection).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                If the Editor determines that the submitted manuscript is of
                sufficient quality and falls within the scope of the Journal, the
                manuscript is assigned to 2 external reviewers for peer review.
                The reviewers submit their reports on the manuscripts along with
                their recommendations. After this, the Editor can make one of the
                following decisions: Publish in the forthcoming issue, Consider
                after Minor Changes, Consider after Major Changes, and Reject.
                The subsequent process is accordingly pursued.
              </p>
            </div>

            {/* Plagiarism Policy */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="size-5 text-destructive" />
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  Plagiarism Policy
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The International Journal of Bharatiya Knowledge System is
                strictly against any unethical act of copying or plagiarism in
                any form. All manuscripts submitted for publication to the
                International Journal of Bharatiya Knowledge System are
                cross-checked for plagiarism using Turnitin software. Plagiarism
                is the unethical act of copying someone else's prior ideas,
                processes, results or words without explicit acknowledgement of
                the original author and source. Self-plagiarism occurs when an
                author utilizes large part of his/her own previously published
                work without using appropriate references. This can range from
                getting the same manuscript published in multiple journals to
                modifying a previously published manuscript with some new data.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Manuscripts found to be plagiarized during initial stages of
                review are out-rightly rejected and not considered for
                publication in the journal. In case a manuscript is found to be
                plagiarized after publication, the Editor-in-Chief will conduct
                preliminary investigation, may be with the help of a suitable
                committee constituted for the purpose for necessary appropriate
                action.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="bg-muted/50 rounded-2xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-3">Disclaimer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Editorial Board, the International Journal of Bharatiya
                Knowledge System and our parent organization VBUSS make every
                effort to ensure the accuracy of all the information (the
                &quot;Content&quot;) contained in our publications. However, the
                Editorial Board, the International Journal of Bharatiya
                Knowledge System and our parent organization VBUSS, any guest
                editor, reviewers make no representations or warranties
                whatsoever as to the accuracy, completeness, or suitability for
                any purpose of the Content.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">
                  Manuscript Format
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Format", value: "DOC or DOCX" },
                  { label: "Language", value: "English" },
                  { label: "Length", value: "5,000 - 8,000 words" },
                  { label: "Font", value: "Times New Roman, 12pt" },
                  { label: "Spacing", value: "Double-spaced, single column" },
                  { label: "Style Guide", value: "APA 7th Edition" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-foreground">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Review Timeline
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Initial screening: 1-2 weeks
                </li>
                <li className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Peer review: 4-6 weeks
                </li>
                <li className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Decision notification: 1-2 weeks
                </li>
                <li className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Publication: Next available issue
                </li>
              </ul>
            </div>

            <a
              href="/submit-paper"
              className="block bg-primary text-primary-foreground rounded-xl p-4 text-center font-medium hover:bg-primary/90 transition-colors"
            >
              <span className="flex items-center justify-center gap-2">
                Submit Your Paper <ArrowRight className="size-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
