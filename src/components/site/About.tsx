import { CheckCircle2, ImageIcon } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const points = [
  "Reliable medical & industrial gas supply",
  "On-time delivery network across Bihar",
  "Experienced operators and engineering team",
  "Documented, compliant, customer-led service",
];

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: image placeholder */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full border border-border bg-secondary overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: "repeating-linear-gradient(45deg, rgba(0,51,102,0.12) 0, rgba(0,51,102,0.12) 1px, transparent 1px, transparent 12px)",
            }} />
            <div className="absolute inset-0 flex items-center justify-center text-foreground/55">
              <div className="text-center px-4">
                <ImageIcon className="h-10 w-10 mx-auto mb-3" strokeWidth={1.2} />
                <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-foreground/45">Image · to be replaced</div>
                <div className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--brand-navy)]">Indian Oxygen Cylinder Warehouse</div>
              </div>
            </div>
            <div className="absolute top-0 left-0 bg-[var(--brand-navy)] text-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em]">
              Est. Operations
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-px bg-border border border-border">
            <div className="bg-white p-4">
              <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Service Area</div>
              <div className="text-sm font-bold text-[var(--brand-navy)] mt-1">Saharsa &amp; Kosi Region</div>
            </div>
            <div className="bg-white p-4">
              <div className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Experience</div>
              <div className="text-sm font-bold text-[var(--brand-navy)] mt-1">10+ Years</div>
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-red)]">About Koshi Gas Agency</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 font-display font-bold uppercase text-3xl md:text-4xl text-[var(--brand-navy)] leading-tight text-balance">
              A trusted name in medical &amp; industrial gas supply across Bihar.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-foreground/75 text-base md:text-lg leading-relaxed text-pretty">
              Koshi Gas Agency supplies medical and industrial gases to hospitals, laboratories, schools and businesses across Saharsa and the Kosi region. Our work is built around discipline, paperwork and emergency response — the things institutional supply actually depends on.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-hindi mt-3 text-muted-foreground text-base leading-relaxed">
              सुरक्षित सप्लाई, समय पर डिलीवरी और इंजीनियरिंग सहायता — हर अस्पताल, संस्थान और उद्योग के लिए।
            </p>
          </Reveal>
          <Stagger className="mt-7 grid sm:grid-cols-2 gap-px bg-border border border-border">
            {points.map((p) => (
              <StaggerItem key={p}>
                <div className="bg-white p-4 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[var(--brand-navy)] mt-0.5 shrink-0" />
                  <div className="text-sm font-semibold text-foreground">{p}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
