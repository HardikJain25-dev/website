"use client";

import { useState, useEffect, useCallback } from "react";
import { GooeyInputDemo } from "@/components/GooeyInput";
import { motion } from "motion/react";
import {
  BookOpen,
  FileText,
  Users,
  Download,
  ArrowRight,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Footer } from "@/components/Footer";

const bannerImages = [
  "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
];

const subjectCategories = [
  {
    title: "Philosophy & Spirituality",
    icon: BookOpen,
    color: "from-blue-500/10 to-blue-600/5",
    topics: [
      "Bhagavad Gita",
      "Darśana",
      "Vedic Studies",
      "Bhakti Traditions",
    ],
  },
  {
    title: "Literature & Linguistics",
    icon: FileText,
    color: "from-emerald-500/10 to-emerald-600/5",
    topics: ["Sanskrit Literature", "Colonial Linguistics", "Canon Studies", "Hindi Literature"],
  },
  {
    title: "History & Culture",
    icon: Users,
    color: "from-amber-500/10 to-amber-600/5",
    topics: ["Ancient Indian Trade", "Mauryan & Gupta Empires", "Cultural Heritage", "Civilizational Studies"],
  },
  {
    title: "Ayurveda & Wellness",
    icon: Download,
    color: "from-teal-500/10 to-teal-600/5",
    topics: [
      "Tri Guna & Tri Dosa",
      "Mental Health",
      "Panchakosha Model",
      "Traditional Food",
    ],
  },
];

const latestPublications = [
  {
    title:
      "Bharatiya Knowledge System (BKS): Analyzing Gita Pedagogy and Developing a Pedagogical Model of Bhagavad Gita",
    authors: "Dr. Sushil Kumar Tiwari",
    date: "August 16, 2025",
    volume: "Volume 2",
    slug: "sushil-kumar-tiwari",
  },
  {
    title:
      "To Eat or Not to Eat: (Non)Vegetarianism in Indian Knowledge System",
    authors: "Susheel Kumar Sharma",
    date: "August 18, 2025",
    volume: "Volume 2",
    slug: "susheel-kumar-sharma",
  },
  {
    title:
      "Sanskrit Literary Tradition: (Re)reading the Canon",
    authors: "Ravi Shankar Kumar and Dr. Manish Kumar Gaurav",
    date: "August 18, 2025",
    volume: "Volume 2",
    slug: "sanskrit-literary",
  },
  {
    title:
      "Ancient Indian Trade: Global Linkages and Economic-Cultural Dynamics of the Mauryan and Gupta Empires",
    authors: "Anurag Maurya and Slagjana Stojanovska",
    date: "August 18, 2025",
    volume: "Volume 2",
    slug: "ancient-indian-trade",
  },
  {
    title:
      "Acintyabhedābheda Darśana: The Oxymoronic Theosophy of Bhakti",
    authors: "Dr. Tirthendu Ganguly (Tirtha)",
    date: "August 19, 2025",
    volume: "Volume 2",
    slug: "acintyabhedābheda-darśana",
  },
  {
    title:
      "Colonial Language Engineering and the Fragmentation of Indian Unity",
    authors: "Dr. P. Phani Krishna & Dr. Namrata Singh",
    date: "August 22, 2025",
    volume: "Volume 2",
    slug: "colonial-language-engineering",
  },
  {
    title:
      "Traditional Food and Psychological Behaviour: An Ayurvedic Perspective on Tri Guna and Tri Dosa",
    authors: "Pramila Ramani",
    date: "August 22, 2025",
    volume: "Volume 2",
    slug: "traditional-food",
  },
  {
    title:
      "The Intellectual Contributions of Bhartiya Statisticians: A Comprehensive Literature Survey",
    authors: "Ankita Sharma, Anuj Kumar Sharma and Jagvinder Singh",
    date: "August 23, 2025",
    volume: "Volume 2",
    slug: "the-intellectual",
  },
  {
    title:
      "Psycho-Pragmatics of Motivational Counselling in the Bhagavad Gita",
    authors: "Braj Mohan",
    date: "August 23, 2025",
    volume: "Volume 2",
    slug: "psycho-pragmatics",
  },
  {
    title:
      "The Panchakosha Model in Contemporary Mental Health: A New Paradigm for Depression",
    authors: "Radhika Kundalia",
    date: "August 27, 2025",
    volume: "Volume 2",
    slug: "the-panchakosha-model",
  },
  {
    title:
      "Developing Experiential Modules on the Legacy of Ancient Indian Universities for Public Engagement: A Case Study of Param Science Experience Centre",
    authors: "Ashwini Kale, Inavamsi Enaganti and Sai Phani Utkarsh Kethan",
    date: "August 28, 2025",
    volume: "Volume 2",
    slug: "developing-experiential",
  },
];

const editorialBoard = [
  {
    name: "Prof. Kailash Chand Sharma",
    role: "Patron",
    affiliation: "Chairman, Haryana State Higher Education Council, Haryana",
    email: "kailashcsg@gmail.com",
  },
  {
    name: "Prof. Kusha Tiwari",
    role: "Editor-in-Chief",
    affiliation: "Department of English, Shyam Lal College, University of Delhi",
    email: "ktiwari@shyamlal.du.ac.in",
  },
  {
    name: "Prof. K.N. Singh",
    role: "Editorial Board Member",
    affiliation: "Vice-Chancellor, Central University of South Bihar",
    email: "vc@cub.ac.in",
  },
  {
    name: "Prof. Munim Kumar Barai",
    role: "Editorial Board Member",
    affiliation: "Professor, Ritsumeikan Asia Pacific University, Oita, Japan",
    email: "baraimk@apu.ac.jp",
  },
  {
    name: "Prof. Kaisa Sorsa",
    role: "Editorial Board Member",
    affiliation: "Principal Lecturer, Turku University of Applied Sciences, Finland",
    email: "kaisa.sorsa@turkuamk.fi",
  },
  {
    name: "Prof. S.K. Sharma",
    role: "Editorial Board Member",
    affiliation: "Head, Department of English & Modern European Languages, University of Allahabad, Prayagraj",
    email: "sksharma@allduniv.ac.in",
  },
  {
    name: "Prof. D.P. Goyal",
    role: "Editorial Board Member",
    affiliation: "Director, IIM Shillong, Shillong",
    email: "director@iimshillong.ac.in",
  },
  {
    name: "Prof. Devendra Jalihal",
    role: "Editorial Board Member",
    affiliation: "Director, IIT Guwahati, Assam",
    email: "director@iitg.ac.in",
  },
  {
    name: "Prof. Rabi Narayan Kar",
    role: "Editorial Board Member",
    affiliation: "Principal, Shyam Lal College, University of Delhi, Delhi",
    email: "principal@shyamlal.du.ac.in",
  },
];

const stats = [
  {
    label: "Published Articles",
    value: "22+",
    icon: FileText,
    color: "from-blue-500/10 to-blue-600/5",
    iconBg: "from-blue-500/15 to-blue-600/10",
  },
  {
    label: "Volumes",
    value: "2",
    icon: BookOpen,
    color: "from-emerald-500/10 to-emerald-600/5",
    iconBg: "from-emerald-500/15 to-emerald-600/10",
  },
  {
    label: "Acceptance Rate",
    value: "39.2%",
    icon: Users,
    color: "from-amber-500/10 to-amber-600/5",
    iconBg: "from-amber-500/15 to-amber-600/10",
  },
 
];

export default function Home() {

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-40">
        {/* <div className="h-1 bg-secondary"></div> */}
        <div className="bg-muted/50">
          <div className="max-w-7xl mx-auto px-6">
            {/* Search Overlay */}
            <div className="flex flex-col items-center justify-center z-10 py-12">
              <div className="flex items-center mb-4 gap-10">
                {/* <img 
                  src="/pic1.jpg"
                  alt="Journal Logo"
                  className="ml-10 h-40 w-auto"
                /> */}
                <h1 className="text-xl text-center md:5xl lg:text-5xl  font-bold text-black mb-0">
                  The International Journal of Bharatiya Knowledge System
                </h1>
              </div>
              <p className="text-black/80 text-center mb-2 max-w-2xl text-sm md:text-base drop-shadow">
                ISSN (Online): 3048-7315 &nbsp;|&nbsp; ISSN (Print): 3107-3727
              </p>
              <p className="text-black/60 text-center mb-8 max-w-2xl text-xs md:text-sm drop-shadow">
                Published by Vidya Bharati Uchcha Shiksha Sansthan (VBUSS)
              </p>
              <div className="w-full max-w-4xl">
                <div className="rounded-2xl p-5">
                  {/* <GooeyInputDemo /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 px-6  border-border ">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 ">
          {stats.map((stat, i) => (
            <div key={i} className={`flex items-center gap-4 p-2 rounded-2xl bg-gradient-to-br ${stat.color}`}>
              <div className={`size-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${stat.iconBg}`}>
                <stat.icon className="size-5 text-primary " />
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subject Categories */}
      {/* <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Browse by Discipline
              </h2>
              <p className="text-muted-foreground mt-1">
                Explore research across major academic disciplines
              </p>
            </div>
            <a
              href="/archives"
              className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
            >
              View all <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {subjectCategories.map((cat, i) => (
              <a
                key={i}
                href="/archives"
                className={`rounded-2xl border border-border bg-gradient-to-br ${cat.color} p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-lg bg-background flex items-center justify-center shadow-sm">
                    <cat.icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {cat.title}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {cat.topics.map((topic, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-border/50">
                  <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Browse articles <ArrowRight className="size-3" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section> */}

      {/* Latest Publications & Editorial Board */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Latest Publications */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                Volume 2, August 2025
              </h2>
              <a
                href="/archives"
                className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
              >
                View all <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="space-y-5 space-x-5 grid grid-cols-1">

 <span className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow group block font-semibold group-hover:text-primary transition-colors text-foreground">
                    <a href="https://vbuss.org/sites/vbuss.org/files/Editorial.pdf" target="_blank" rel="noopener noreferrer">
                      Editorial
                    </a>
                  </span>

              {latestPublications.map((pub, i) => (
                <a
                  key={i}
                  href={`https://bagwarsoftwares.co.in/IJBKS/${pub.slug}.php`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow group block"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mt-1">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1.5">
                        {pub.authors}
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="size-3" />
                          Published Online {pub.date}
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

          {/* Editorial Board */}
          {/* <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Editorial Board
            </h2>
            <div className="space-y-4">
              {editorialBoard.map((member, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl border border-border p-4 hover:shadow-md transition-shadow"
                >
                  <span className="text-[10px] uppercase tracking-wider text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">
                    {member.role}
                  </span>
                  <h3 className="font-semibold text-foreground mt-2">
                    {member.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {member.affiliation}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-xs text-primary hover:underline mt-1 block"
                  >
                    {member.email}
                  </a>
                </div>
              ))}
            </div>
            <a
              href="/editorial-board"
              className="mt-4 flex items-center justify-center gap-1 text-sm text-primary font-medium hover:underline"
            >
              View full board <ArrowRight className="size-4" />
            </a>
          </div> */}
        </div>
      </section>

      {/* About the Journal */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                About the Journal
              </h2>
              <p className="text-muted-foreground leading-relaxed text-justify">
                The International Journal of Bharatiya Knowledge System is an
                annual multidisciplinary journal published by Vidya Bharati
                Uchcha Shiksha Sansthan. This is a research based academic
                journal that focuses on creating a repository of quality work,
                in the fields of social sciences, literature, sciences, cultural
                studies and more, that relate to Bharatiya knowledge tradition.
              </p>
              <p className="text-muted-foreground leading-relaxed text-justify mt-4">
                The journal facilitates research works that trace, document, and
                take forward the intellectual and civilizational legacy of
                Bharat, and contribute to the academic resurgence and relevance
                of Bharatiya knowledge system. Themes relating to literature,
                spirituality, Vedic oeuvre, Ayurveda, culture, linguistics,
                history, philosophy, sociology, sciences, mathematics, polity,
                governance, ethics and economics contextualized in the Bharatiya
                context fall under purview of this journal.
              </p>
              <a
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Read more <ArrowRight className="size-4" />
              </a>
            </div>
            <div className="bg-muted/50 rounded-2xl p-8 border border-border">
              <h3 className="font-semibold text-foreground mb-4">
                Aims and Scope
              </h3>
              <ul className="space-y-3">
                {[
                  "Peer-reviewed multidisciplinary research",
                  "Focus on Bharatiya knowledge traditions",
                  "Social sciences, literature, and cultural studies",
                  "Vedic, Ayurvedic, and philosophical research",
                  "Historical and civilizational studies",
                  "Sciences and mathematics in Bharatiya context",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <a
              href="/submit-paper"
              className="group rounded-2xl border border-border bg-gradient-to-br from-blue-500/10 to-blue-600/5 p-8 text-center hover:shadow-md transition-all"
            >
              <div className="size-14 rounded-2xl bg-gradient-to-br from-blue-500/15 to-blue-600/10 flex items-center justify-center mx-auto mb-4 transition-colors">
                <FileText className="size-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">
                Subscriptions
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Access Journal Issues Here
              </p>
            </a>
            <a
              href="/submission-guidelines"
              className="group rounded-2xl border border-border bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 p-8 text-center hover:shadow-md transition-all"
            >
              <div className="size-14 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-emerald-600/10 flex items-center justify-center mx-auto mb-4 transition-colors">
                <BookOpen className="size-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">
                Submission Guidelines
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Review formatting and submission requirements
              </p>
            </a>
            <a
              href="/archives"
              className="group rounded-2xl border border-border bg-gradient-to-br from-amber-500/10 to-amber-600/5 p-8 text-center hover:shadow-md transition-all"
            >
              <div className="size-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-amber-600/10 flex items-center justify-center mx-auto mb-4 transition-colors">
                <Download className="size-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-lg">
                Browse Archives
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Access past issues and archived publications
              </p>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
