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
    title: "Hospitals across Bihar",
    hindi: "बिहार के अस्पताल",
    body: "Regular medical oxygen and gas pipeline support for hospitals, nursing homes and ICUs across Saharsa, Kosi and nearby districts.",
  },
  {
    icon: Factory,
    title: "Industrial supply, multiple districts",
    hindi: "औद्योगिक आपूर्ति",
    body: "Welding, cutting and process gases for fabrication units, workshops and project sites across north and central Bihar.",
  },
  {
    icon: Globe2,
    title: "Selected projects beyond Bihar",
    hindi: "अन्य राज्यों में चुनिंदा प्रोजेक्ट",
    body: "Project-based oxygen plant, tank installation and commissioning support for industrial and hospital clients in nearby states and a few selected projects outside India.",
  },
];

export function Coverage() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Service reach</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground text-balance leading-[1.05]">
                Rooted in Saharsa. <span className="font-serif italic font-normal">Working</span> across Bihar.
              </h2>
              <p className="font-hindi mt-3 text-muted-foreground">
                सहारसा से शुरू, पूरे बिहार और चुनिंदा क्षेत्रों में सेवा।
              </p>
              <p className="mt-4 text-muted-foreground text-base leading-relaxed max-w-md text-pretty">
                Trusted supply and installation support across Bihar, with project work in nearby states and a few selected industrial projects outside India. Coverage is built one hospital, one workshop and one site at a time.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Stagger className="grid sm:grid-cols-3 gap-4">
              {reach.map((r) => (
                <StaggerItem key={r.title}>
                  <div className="rounded-2xl bg-white ring-1 ring-border p-5 h-full">
                    <div className="h-10 w-10 rounded-xl bg-secondary ring-1 ring-border flex items-center justify-center text-foreground/80">
                      <r.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-sm font-semibold text-foreground">{r.title}</div>
                    <div className="font-hindi text-[11px] text-muted-foreground mt-0.5">{r.hindi}</div>
                    <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed text-pretty">{r.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-2xl bg-white ring-1 ring-border p-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/70">
                  <MapPin className="h-4 w-4 text-primary" /> Districts we regularly supply
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {districts.map((d) => (
                    <span
                      key={d}
                      className="text-xs font-medium text-foreground/75 bg-secondary/70 ring-1 ring-border rounded-full px-3 py-1.5"
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
