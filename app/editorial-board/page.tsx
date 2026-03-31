import { Footer } from "@/components/Footer";
import { Crown, Star, Users, Mail } from "lucide-react";

const patron = {
  name: "Prof. Kailash Chan Sharma",
  role: "Patron",
  affiliation: "Chairman, Haryana State Higher Education Council, Haryana",
  email: "kailashcsg@gmail.com",
};

const editorInChief = {
  name: "Prof. Kusha Tiwari",
  role: "Editor-in-Chief",
  affiliation: "Department of English, Shyam Lal College, University of Delhi",
  email: "ktiwari@shyamlal.du.ac.in",
};

const boardMembers = [
  {
    name: "Prof. K.N. Singh",
    affiliation: "Vice-Chancellor, Central University of South Bihar",
    email: "vc@cub.ac.in",
    location: "Bihar",
  },
  {
    name: "Prof. Munim Kumar Barai",
    affiliation: "Ritsumeikan Asia Pacific University",
    email: "baraimk@apu.ac.jp",
    location: "Oita, Japan",
  },
  {
    name: "Prof. Kaisa Sorsa",
    affiliation: "Principal Lecturer, Turku University of Applied Sciences",
    email: "kaisa.sorsa@turkuamk.fi",
    location: "Finland",
  },
  {
    name: "Prof. S.K. Sharma",
    affiliation:
      "Head, Department of English & Modern European Languages, University of Allahabad",
    email: "sksharma@allduniv.ac.in",
    location: "Prayagraj",
  },
  {
    name: "Prof. D.P. Goyal",
    affiliation: "Director, IIM Shillong",
    email: "director@iimshillong.ac.in",
    location: "Shillong",
  },
  {
    name: "Dr. Sanjeev Kumar Ningombam",
    affiliation:
      "Centre Head, Dr APJ Abdul Kalam Centre for Policy Research and Analysis, IIM Shillong",
    email: "sanjeev@iimshillong.ac.in",
    location: "Shillong",
  },
  {
    name: "Prof. Prabha Shankar Shukla",
    affiliation: "Vice-Chancellor, North Eastern Hill University",
    email: "vcnehu@nehu.ac.in",
    location: "Shillong",
  },
  {
    name: "Dr. Shashi Ranjan Akela",
    affiliation: "Rajiv Gandhi Prodyogiki University",
    email: "cocp126rgpv@gmail.com",
    location: "Bhopal",
  },
  {
    name: "Prof. Devendra Jalihal",
    affiliation: "Director, IIT Guwahati",
    email: "director@iitg.ac.in",
    location: "Assam",
  },
  {
    name: "Prof. Avinash Agarwal",
    affiliation: "IIT Jodhpur",
    email: "akag@iitk.ac.in",
    location: "Rajasthan",
  },
  {
    name: "Prof. Raj Kishore",
    affiliation: "Professor, Department of Chemistry, University of Delhi",
    email: "rajksharma@chemistry.du.ac.in",
    location: "Delhi",
  },
  {
    name: "Prof. Rabi Narayan Kar",
    affiliation: "Principal, Shyam Lal College, University of Delhi",
    email: "principal@shyamlal.du.ac.in",
    location: "Delhi",
  },
  {
    name: "Prof. Surendra Kumar Sia",
    affiliation: "Professor, Department of Psychology, University of Delhi",
    email: "",
    location: "Delhi",
  },
];

export default function EditorialBoardPage() {
  return (
    <main className="pt-40">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-border py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Editorial Board
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Meet the distinguished scholars and academicians guiding the
            International Journal of Bharatiya Knowledge System.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Patron */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Crown className="size-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Patron</h2>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-border p-6">
              <h3 className="text-xl font-semibold text-foreground">
                {patron.name}
              </h3>
              <p className="text-muted-foreground mt-1">{patron.role}</p>
              <p className="text-sm text-muted-foreground mt-2">
                {patron.affiliation}
              </p>
              <a
                href={`mailto:${patron.email}`}
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2"
              >
                <Mail className="size-4" />
                {patron.email}
              </a>
            </div>
          </div>

          {/* Editor-in-Chief */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Star className="size-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Editor-in-Chief
              </h2>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-border p-6">
              <h3 className="text-xl font-semibold text-foreground">
                {editorInChief.name}
              </h3>
              <p className="text-muted-foreground mt-1">
                {editorInChief.role}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {editorInChief.affiliation}
              </p>
              <a
                href={`mailto:${editorInChief.email}`}
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2"
              >
                <Mail className="size-4" />
                {editorInChief.email}
              </a>
            </div>
          </div>

          {/* Board Members */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="size-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">
                Editorial Board Members
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {boardMembers.map((member, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {member.affiliation}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {member.location}
                  </p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline mt-2"
                    >
                      <Mail className="size-3" />
                      {member.email}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
