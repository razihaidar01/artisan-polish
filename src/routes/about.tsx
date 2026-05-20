import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { About } from "@/components/site/About";
import { Trust } from "@/components/site/Trust";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Award, Target, Sparkles, Users } from "lucide-react";

const TITLE = "About Koshi Gas Agency — Saharsa's Trusted Gas Supplier";
const DESC = "Founded by Sanjay Singh, Koshi Gas Agency has supplied medical and industrial gases to hospitals, laboratories and industries across Saharsa and the Kosi region for over a decade.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
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
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  { icon: Award, title: "Quality", desc: "ISI-certified cylinders, leak-tested and traceable supply." },
  { icon: Target, title: "Mission", desc: "Uninterrupted gas supply for hospitals and industries." },
  { icon: Sparkles, title: "Vision", desc: "Bihar's most trusted specialty-gas partner." },
  { icon: Users, title: "Team", desc: "Trained operators and engineers on call, every hour." },
];

const timeline = [
  { tag: "Founding", title: "Local Hospital Supply", text: "Started supplying medical oxygen to hospitals across Saharsa." },
  { tag: "Expansion", title: "Specialty Gases", text: "Added nitrogen and helium for labs and specialty applications." },
  { tag: "Network", title: "50+ Partners", text: "Trusted by 50+ hospitals, clinics and labs across the Kosi region." },
  { tag: "Today", title: "Engineering & 24×7", text: "Plant, tank & pipeline installation projects with 24×7 emergency desk." },
];

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Us"
        title={<>Built on trust. Run with discipline.</>}
        subtitle="Koshi Gas Agency has powered Saharsa's hospitals, laboratories and industries for over a decade — with structured supply, engineering and emergency response."
      />

      <About />

      {/* Values */}
      <section className="relative py-16 md:py-24 bg-secondary border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-red)]">What We Stand For</div>
              <h2 className="mt-2 font-display font-bold uppercase text-3xl md:text-4xl text-[var(--brand-navy)] leading-tight">
                Values that shape our operations.
              </h2>
            </div>
          </Reveal>
          <Stagger className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-white p-6 h-full">
                  <div className="h-10 w-10 bg-[var(--brand-navy)] text-white flex items-center justify-center">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display font-bold uppercase text-[15px] text-[var(--brand-navy)] tracking-tight">{v.title}</h3>
                  <p className="mt-2 text-[13px] text-foreground/75 leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-xl">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-red)]">Our Journey</div>
              <h2 className="mt-2 font-display font-bold uppercase text-3xl md:text-4xl text-[var(--brand-navy)] leading-tight">
                A decade of structured work.
              </h2>
            </div>
          </Reveal>
          <Stagger className="mt-10 relative pl-6 border-l-2 border-[var(--brand-navy)] space-y-8">
            {timeline.map((t, i) => (
              <StaggerItem key={i}>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 h-3 w-3 bg-[var(--brand-red)] border-2 border-white" />
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--brand-red)] font-bold">{t.tag}</div>
                  <div className="mt-1 font-display text-lg font-bold uppercase text-[var(--brand-navy)] tracking-tight">{t.title}</div>
                  <p className="mt-1.5 text-foreground/75 text-sm">{t.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Trust />
    </Layout>
  );
}
