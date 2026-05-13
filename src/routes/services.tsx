import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Services, services } from "@/components/site/Services";
import { Hospitals } from "@/components/site/Hospitals";
import { Reveal } from "@/components/site/Reveal";
import { CheckCircle2, Phone, ArrowUpRight } from "lucide-react";
import industrial from "@/assets/industrial.jpg";
import hospital from "@/assets/hospital.jpg";
import cylinders from "@/assets/cylinders-bg.jpg";

const banners = [cylinders, hospital, industrial, cylinders, hospital, industrial];

const TITLE = "Services — Medical Oxygen, Nitrogen, Helium & Industrial Gas | Koshi Gas Agency";
const DESC = "Medical oxygen, industrial nitrogen, helium and full hospital gas programs across Saharsa, Bihar — with 24×7 emergency response and managed cylinder inventory.";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
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
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Services"
        title={<>Specialty gas — <span className="text-gradient">delivered</span> on time.</>}
        subtitle="A complete medical and industrial gas program for hospitals, laboratories, schools and industries."
      />

      <Services />

      {/* Detailed alternating sections */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-20 md:space-y-28">
          {services.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={s.slug}>
                <article className="grid md:grid-cols-12 gap-8 md:gap-14 items-center">
                  <div className={`md:col-span-6 relative rounded-[2rem] overflow-hidden ring-1 ring-border shadow-elegant ${reversed ? "md:order-2" : ""}`}>
                    <img src={banners[i]} alt={s.title} className="w-full h-72 md:h-96 object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-primary/10" />
                    <div className="absolute bottom-5 left-5 flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl glass flex items-center justify-center">
                        <s.icon className="h-6 w-6 text-primary" />
                      </div>
                      {s.formula && (
                        <span className="font-mono text-xs uppercase tracking-wider glass rounded-full px-3 py-1.5 text-foreground">
                          {s.formula}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={`md:col-span-6 ${reversed ? "md:order-1" : ""}`}>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Service · {String(i + 1).padStart(2, "0")}</span>
                    <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.05] text-balance">
                      {s.title}
                    </h2>
                    <div className="font-hindi text-base text-muted-foreground mt-1">{s.hindi}</div>
                    <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed text-pretty">{s.long}</p>
                    <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
                      {s.highlights.map((h) => (
                        <li key={h} className="text-sm text-foreground flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /> {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5">
                        Request a quote
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                      <a href="tel:7004879171" className="inline-flex items-center gap-2 rounded-full glass text-foreground px-5 py-3 text-sm font-semibold hover:bg-white transition-colors">
                        <Phone className="h-4 w-4" /> Call us
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Hospitals />
    </Layout>
  );
}
