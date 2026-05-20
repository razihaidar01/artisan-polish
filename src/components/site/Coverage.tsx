import { MapPin, Building2, Factory, Globe2 } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const districts = [
  "Saharsa", "Madhepura", "Supaul", "Khagaria", "Begusarai",
  "Darbhanga", "Samastipur", "Purnia", "Katihar", "Madhubani",
  "Muzaffarpur", "Bhagalpur", "Patna",
];

const reach = [
  {
    icon: Building2,
    title: "Hospitals Across Bihar",
    body: "Regular medical oxygen and pipeline support for hospitals, nursing homes and ICUs across Saharsa, Kosi and nearby districts.",
  },
  {
    icon: Factory,
    title: "Industrial Supply, Multiple Districts",
    body: "Welding, cutting and process gases for fabrication units, workshops and project sites across north and central Bihar.",
  },
  {
    icon: Globe2,
    title: "Selected Projects Beyond Bihar",
    body: "Project-based oxygen plant, tank installation and commissioning support for industrial and hospital clients in nearby states and selected projects outside India.",
  },
];

export function Coverage() {
  return (
    <section className="relative py-16 md:py-24 bg-secondary border-y border-border">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-red)]">Service Coverage</div>
              <h2 className="mt-2 font-display font-bold uppercase text-3xl md:text-4xl text-[var(--brand-navy)] leading-tight">
                Rooted in Saharsa. Operating across Bihar.
              </h2>
              <p className="mt-4 text-foreground/75 leading-relaxed max-w-md">
                Trusted supply and installation support across Bihar, with project work in nearby states and a few selected industrial projects outside India.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Stagger className="grid sm:grid-cols-3 gap-px bg-border border border-border">
              {reach.map((r) => (
                <StaggerItem key={r.title}>
                  <div className="bg-white p-5 h-full">
                    <div className="h-10 w-10 bg-[var(--brand-navy)] text-white flex items-center justify-center">
                      <r.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-[13px] font-bold uppercase tracking-[0.06em] text-[var(--brand-navy)]">{r.title}</div>
                    <p className="mt-2 text-[13px] text-foreground/70 leading-relaxed">{r.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1}>
              <div className="mt-6 border border-border bg-white p-6">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--brand-navy)]">
                  <MapPin className="h-4 w-4 text-[var(--brand-red)]" /> Districts We Regularly Supply
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {districts.map((d) => (
                    <span
                      key={d}
                      className="text-[12px] font-semibold text-foreground/80 bg-secondary border border-border px-3 py-1.5"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-[12px] text-muted-foreground">
                  Other locations on request — including project-based installation and commissioning work.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
