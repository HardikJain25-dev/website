import { Footer } from "@/components/Footer";
import { BookOpen, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-40">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-border py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            About the Journal
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Learn about the International Journal of Bharatiya Knowledge System,
            its mission, scope, and publication standards.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                About the Journal
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The International Journal of Bharatiya Knowledge System is an
                annual multidisciplinary journal published by Vidya Bharati
                Uchcha Shiksha Sansthan. This is a research based academic
                journal that focuses on creating a repository of quality work,
                in the fields of social sciences, literature, sciences, cultural
                studies and more, that relate to Bharatiya knowledge tradition.
                The International Journal of Bharatiya Knowledge System
                facilitates research works that trace, document, and take
                forward the intellectual and civilizational legacy of Bharat,
                and contribute to the academic resurgence and relevance of
                Bharatiya knowledge system.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Each issue of the Copyright &copy; 2024 Vidya Bharati Uchcha
                Shiksha Sansthan (VBUSS). All rights reserved. No portion of
                the contents may be reproduced in any form without permission in
                writing from the publisher. To access the journal, simply visit
                the VBUSS website and follow instructions on the Journal
                webpage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Aims and Scope
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The International Journal of Bharatiya Knowledge System is a
                peer reviewed journal of multidisciplinary research. It is
                launched in 2024 with the focus primarily on providing a
                platform to research being conducted in the fields of Bharatiya
                knowledge system. The International Journal of Bharatiya
                Knowledge System facilitates research works that trace,
                document, and take forward the intellectual and civilizational
                legacy of Bharat, and contribute to the academic resurgence and
                relevance of Bharatiya knowledge system.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                As the flagship publication of Vidya Bharati Uchcha Shiksha
                Sansthan (VBUSS), the International Journal of Bharatiya
                Knowledge System aims to encourage scholars, academics,
                researchers and other intellectuals to contribute original
                articles on areas concerning the intellectual traditions of
                Bharat in different disciplines. It promotes research-based
                discourse and analysis on themes of critical importance for
                understanding Bharatiya knowledge tradition. Most importantly,
                the journal encourages prospective authors and contributors to
                submit conceptually sound, empirically grounded and policy
                driven articles. Themes relating to literature, spirituality,
                Vedic oeuvre, Ayurveda, culture, linguistics, history,
                philosophy, sociology, sciences, mathematics, polity,
                governance, ethics and economics contextualized in the Bharatiya
                context fall under purview of this journal.
              </p>
            </div>

            <div className="bg-muted/50 rounded-2xl p-6 border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The opinions expressed in the International Journal of Bharatiya
                Knowledge System are those of the authors and need not
                necessarily be in conformity with the outlook of VBUSS. Apart
                from the articles, the journal also features book review section
                and commentaries.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Journal Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ISSN (Online)</span>
                  <span className="font-medium text-foreground">3048-7315</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ISSN (Print)</span>
                  <span className="font-medium text-foreground">3107-3727</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Frequency</span>
                  <span className="font-medium text-foreground">Annual</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Publisher</span>
                  <span className="font-medium text-foreground">VBUSS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Language</span>
                  <span className="font-medium text-foreground">English</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Review Type</span>
                  <span className="font-medium text-foreground">
                    Double Blind
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Manuscript Requirements
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Format: DOC or DOCX
                </li>
                <li className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Language: English
                </li>
                <li className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Length: 5000 - 8000 words
                </li>
                <li className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Font: Times New Roman, 12pt
                </li>
                <li className="flex items-start gap-2">
                  <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  Spacing: Double-spaced
                </li>
              </ul>
            </div>

            <a
              href="/submission-guidelines"
              className="block bg-primary text-primary-foreground rounded-xl p-4 text-center font-medium hover:bg-primary/90 transition-colors"
            >
              <span className="flex items-center justify-center gap-2">
                Submission Guidelines <ArrowRight className="size-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
