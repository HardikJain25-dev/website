import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="pt-40">
      {/* Hero */}
      <section className="bg-primary/5 border-b border-border py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Contact Us
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Get in touch with the International Journal of Bharatiya Knowledge
            System for any queries or assistance.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button type="submit" className="py-6 px-8 text-base">
                  <Send className="size-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      Vidya Bharati Uchcha Shiksha Sansthan
                      <br />
                      H-107, Sector-12, Noida
                      <br />
                      Pin-201301, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+919311331434"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +91-9311331434
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:ijbks.vbuss@gmail.com"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      ijbks.vbuss@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      Office Hours
                    </p>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      Monday - Friday
                      <br />
                      9:30 AM - 5:30 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6">
              <h3 className="font-semibold text-foreground mb-3">
                For Submissions
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Submit your manuscripts directly to our editorial team:
              </p>
              <a
                href="mailto:ijbks.vbuss@gmail.com"
                className="text-primary font-medium hover:underline text-sm"
              >
                ijbks.vbuss@gmail.com
              </a>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold text-foreground mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/submission-guidelines"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Submission Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="/submit-paper"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Submit Your Paper
                  </a>
                </li>
                <li>
                  <a
                    href="/editorial-board"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Editorial Board
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
