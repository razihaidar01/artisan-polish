import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { About } from "@/components/site/About";
import { Trust } from "@/components/site/Trust";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Award, Target, Sparkles, Users, MapPin, Calendar } from "lucide-react";
import owner from "@/assets/owner-hero.jpg";

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
  { icon: Award, title: "Quality", hi: "गुणवत्ता", desc: "Every cylinder ISI-certified, leak-tested and traceable." },
  { icon: Target, title: "Mission", hi: "मिशन", desc: "Uninterrupted gas supply for hospitals and industries." },
  { icon: Sparkles, title: "Vision", hi: "विज़न", desc: "Bihar's most trusted specialty-gas partner." },
  { icon: Users, title: "Team", hi: "टीम", desc: "Trained operators on call, every hour of the day." },
];

const timeline = [
  { tag: "Founding", title: "Local hospital supply", text: "Started supplying medical oxygen to local hospitals across Saharsa." },
  { tag: "Expansion", title: "Specialty gases", text: "Added nitrogen and helium for laboratories and specialty applications." },
  { tag: "Network", title: "50+ partners", text: "Trusted by 50+ hospitals, clinics and laboratories across the Kosi region." },
  { tag: "Today", title: "24×7 emergency", text: "Round-the-clock emergency desk and growing industrial customer base." },
];

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About"
        title={<>Built on <span className="font-serif italic font-normal">trust</span>. Run with <span className="text-gradient">discipline</span>.</>}
        subtitle="Koshi Gas Agency has quietly powered Saharsa's hospitals, laboratories and industries for over a decade."
      />

      <About />

      {/* Owner */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal as="div" className="lg:col-span-5">
            <div className="relative rounded-[2rem] overflow-hidden ring-1 ring-border shadow-elegant">
              <img src={owner} alt="Sanjay Singh, Founder of Koshi Gas Agency" className="w-full h-auto object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              <div className="absolute bottom-5 left-5 glass rounded-2xl px-4 py-2.5 shadow-soft">
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Founder</div>
                <div className="text-sm font-semibold text-foreground">Sanjay Singh</div>
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Founder's note</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground tracking-tight text-balance leading-[1.05]">
                "We're not just delivering cylinders — we're delivering <span className="font-serif italic font-normal">continuity</span>."
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed text-pretty">
                Every cylinder we deliver carries a patient's breath or a factory's production line. That responsibility shapes how we operate — from the paperwork to the emergency response.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-hindi mt-3 text-foreground/80 text-base md:text-lg leading-relaxed">
                "हर सिलिंडर पर एक मरीज़ की साँस और एक उद्योग का काम निर्भर करता है। यही ज़िम्मेदारी हमें बेहतर बनाती है।"
              </p>
            </Reveal>
            <Stagger className="mt-7 grid sm:grid-cols-2 gap-3">
              <StaggerItem>
                <div className="rounded-2xl glass p-4 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Service area</div>
                    <div className="text-sm font-semibold text-foreground">Saharsa &amp; Kosi region</div>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="rounded-2xl glass p-4 flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Experience</div>
                    <div className="text-sm font-semibold text-foreground">10+ years of trust</div>
                  </div>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-20 md:py-28 bg-gradient-trust overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">What we stand for</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.05] text-balance">
                Values that <span className="font-serif italic font-normal">set us apart</span>.
              </h2>
            </div>
          </Reveal>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="rounded-3xl bg-white ring-1 ring-border p-7 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 h-full">
                  <div className="h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground tracking-tight">{v.title}</h3>
                  <div className="font-hindi text-xs text-muted-foreground mt-0.5">{v.hi}</div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Our journey</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.05] text-balance">
                A decade of <span className="font-serif italic font-normal">quiet</span> work.
              </h2>
            </div>
          </Reveal>
          <Stagger className="mt-14 relative pl-7 md:pl-10 border-l-2 border-primary/20 space-y-10">
            {timeline.map((t, i) => (
              <StaggerItem key={i}>
                <div className="relative">
                  <div className="absolute -left-[36px] md:-left-[48px] top-1.5 h-4 w-4 rounded-full bg-gradient-primary ring-4 ring-background shadow-glow" />
                  <div className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">{t.tag}</div>
                  <div className="mt-1 text-xl md:text-2xl font-bold text-foreground tracking-tight">{t.title}</div>
                  <p className="mt-1.5 text-muted-foreground">{t.text}</p>
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
