import cylinders from "@/assets/cylinders-bg.jpg";
import { CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const points = [
  { en: "Quality first supply", hi: "सुरक्षित और गुणवत्तापूर्ण" },
  { en: "Rapid delivery network", hi: "तेज़ डिलीवरी सेवा" },
  { en: "Experienced operators", hi: "अनुभवी टीम" },
  { en: "Customer-led service", hi: "ग्राहक संतुष्टि सर्वोपरि" },
];

export function About() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section ref={ref} id="about" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-mesh blur-3xl opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="relative lg:col-span-5 order-2 lg:order-1">
          <motion.div style={{ y }} className="relative rounded-[2rem] overflow-hidden ring-1 ring-border shadow-elegant">
            <img src={cylinders} alt="Industrial oxygen cylinders" className="w-full h-auto object-cover" width={1536} height={1024} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
          </motion.div>
          <Reveal delay={0.2}>
            <div className="absolute -top-6 -right-4 md:-right-8 glass rounded-2xl px-5 py-4 hidden sm:block shadow-elegant">
              <div className="font-display text-3xl font-bold text-gradient leading-none">10+</div>
              <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-wider">Years of trust</div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="absolute -bottom-6 left-4 glass rounded-2xl px-5 py-3 shadow-elegant">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Service area</div>
              <div className="text-sm font-semibold text-foreground mt-0.5">Saharsa & Kosi region</div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <Reveal>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">About Koshi Gas Agency</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground leading-[1.05] text-balance">
              Quietly powering Bihar's <span className="font-serif italic font-normal">hospitals</span>, labs and industries.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-hindi mt-5 text-base md:text-lg text-foreground/80 leading-relaxed">
              सुरक्षित सप्लाई · तेज़ सेवा · पूरा भरोसा।
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-3 text-muted-foreground text-base md:text-lg leading-relaxed text-pretty max-w-2xl">
              We supply medical and industrial gases to hospitals, laboratories, schools and businesses across Saharsa and the Kosi region — with the discipline, paperwork and emergency response institutions expect from a critical supplier.
            </p>
          </Reveal>
          <Stagger className="mt-7 grid sm:grid-cols-2 gap-3" delay={0.25} stagger={0.06}>
            {points.map((p) => (
              <StaggerItem key={p.en}>
                <div className="rounded-2xl bg-white ring-1 ring-border p-4 flex items-start gap-3 shadow-soft">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">{p.en}</div>
                    <div className="font-hindi text-xs text-muted-foreground mt-0.5">{p.hi}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
