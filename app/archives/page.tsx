import { Footer } from "@/components/Footer";
import { BookOpen, Calendar, ExternalLink } from "lucide-react";

const articles = [
  {
    title:
      "Bharatiya Knowledge System (BKS): Analyzing Gita Pedagogy and Developing a Pedagogical Model of Bhagavad Gita",
    authors: "Dr. Sushil Kumar Tiwari",
    date: "August 16, 2025",
    slug: "sushil-kumar-tiwari",
  },
  {
    title:
      "To Eat or Not to Eat: (Non)Vegetarianism in Indian Knowledge System",
    authors: "Susheel Kumar Sharma",
    date: "August 18, 2025",
    slug: "susheel-kumar-sharma",
  },
  {
    title: "Sanskrit Literary Tradition: (Re)reading the Canon",
    authors: "Ravi Shankar Kumar and Dr. Manish Kumar Gaurav",
    date: "August 18, 2025",
    slug: "sanskrit-literary",
  },
  {
    title:
      "Ancient Indian Trade: Global Linkages and Economic-Cultural Dynamics of the Mauryan and Gupta Empires",
    authors: "Anurag Maurya and Slagjana Stojanovska",
    date: "August 18, 2025",
    slug: "ancient-indian-trade",
  },
  {
    title:
      "Acintyabhedābheda Darśana: The Oxymoronic Theosophy of Bhakti",
    authors: "Dr. Tirthendu Ganguly (Tirtha)",
    date: "August 19, 2025",
    slug: "acintyabhedābheda-darśana",
  },
  {
    title:
      "Colonial Language Engineering and the Fragmentation of Indian Unity",
    authors: "Dr. P. Phani Krishna & Dr. Namrata Singh",
    date: "August 22, 2025",
    slug: "colonial-language-engineering",
  },
  {
    title:
      "Traditional Food and Psychological Behaviour: An Ayurvedic Perspective on Tri Guna and Tri Dosa",
    authors: "Pramila Ramani",
    date: "August 22, 2025",
    slug: "traditional-food",
  },
  {
    title:
      "The Intellectual Contributions of Bhartiya Statisticians: A Comprehensive Literature Survey",
    authors: "Ankita Sharma, Anuj Kumar Sharma and Jagvinder Singh",
    date: "August 23, 2025",
    slug: "the-intellectual",
  },
  {
    title:
      "Psycho-Pragmatics of Motivational Counselling in the Bhagavad Gita",
    authors: "Braj Mohan",
    date: "August 23, 2025",
    slug: "psycho-pragmatics",
  },
  {
    title:
      "The Panchakosha Model in Contemporary Mental Health: A New Paradigm for Depression",
    authors: "Radhika Kundalia",
    date: "August 27, 2025",
    slug: "the-panchakosha-model",
  },
  {
    title:
      "Developing Experiential Modules on the Legacy of Ancient Indian Universities for Public Engagement: A Case Study of Param Science Experience Centre",
    authors:
      "Ashwini Kale, Inavamsi Enaganti and Sai Phani Utkarsh Kethan",
    date: "August 28, 2025",
    slug: "developing-experiential",
  },
];

export default function ArchivesPage() {
  return (
    <main className="pt-40">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-border py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Archives
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Browse all published volumes and issues of the International Journal
            of Bharatiya Knowledge System.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Volume 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="size-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Volume 2, August 2025
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Online First &middot; {articles.length} Articles
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Editorial
            </p>
            <div className="space-y-4">
              {articles.map((article, i) => (
                <a
                  key={i}
                  href={`https://bagwarsoftwares.co.in/IJBKS/${article.slug}.php`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow group block"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1.5">
                        {article.authors}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="size-3" />
                          Published Online {article.date}
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 size-9 rounded-lg border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                      <ExternalLink className="size-4" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Volume 1 Placeholder */}
          <div className="bg-muted/50 rounded-2xl border border-border p-8 text-center">
            <BookOpen className="size-10 text-muted-foreground mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-foreground">
              Volume 1, 2024
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Coming soon
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
