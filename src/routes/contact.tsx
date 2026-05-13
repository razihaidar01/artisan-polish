import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ContactSection } from "@/components/site/Contact";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Clock, Phone, Zap, ShieldCheck } from "lucide-react";

const TITLE = "Contact Koshi Gas Agency — Saharsa | Call 7004879171";
const DESC = "Reach Koshi Gas Agency at Hatiya Gachi, Saharsa, Bihar. Call 7004879171, 9546756767 or 8709338784 for medical & industrial gas supply with 24×7 emergency response.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Koshi Gas Agency Contact",
          telephone: "+917004879171",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Near Guddu Hardware, Hatiya Gachi",
            addressLocality: "Saharsa",
            addressRegion: "Bihar",
            postalCode: "852201",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
});

const strip = [
  { icon: Clock, title: "Open hours", sub: "Mon–Sun · 24×7 emergency desk" },
  { icon: Zap, title: "Fast dispatch", sub: "Up to 60 min within Saharsa city" },
  { icon: ShieldCheck, title: "Safety first", sub: "ISI-certified cylinders, trained team" },
  { icon: Phone, title: "Helpline", sub: "Direct line: 7004879171" },
];

function ContactPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title={<>One call — <span className="text-gradient">fast</span> response.</>}
        subtitle="24×7 emergency gas supply for hospitals and industries across Saharsa and the Kosi region."
      >
        <a href="tel:7004879171" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-elegant hover:shadow-glow transition-shadow">
          <Phone className="h-4 w-4" /> 7004879171
        </a>
        <a href="https://wa.me/917004879171" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass text-foreground px-6 py-3.5 text-sm font-semibold hover:bg-white transition-colors">
          WhatsApp
        </a>
      </PageHero>

      <section className="py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {strip.map((s) => (
              <StaggerItem key={s.title}>
                <div className="rounded-3xl bg-white ring-1 ring-border shadow-soft p-5 flex items-start gap-4 hover:shadow-elegant transition-shadow h-full">
                  <div className="h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0"><s.icon className="h-5 w-5" /></div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Always</div>
                    <div className="font-semibold text-foreground mt-0.5">{s.title}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{s.sub}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <ContactSection compact />
    </Layout>
  );
}
