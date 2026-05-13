import { Truck, Building2, Headphones, ShieldCheck } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { Stagger, StaggerItem } from "./Reveal";

const items = [
  { icon: Truck, value: 5000, suffix: "+", label: "Deliveries", hindi: "सप्लाई पूरी" },
  { icon: Building2, value: 50, suffix: "+", label: "Hospitals", hindi: "अस्पतालों का भरोसा" },
  { icon: Headphones, value: 24, suffix: "×7", label: "Emergency desk", hindi: "तेज़ सपोर्ट" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Safety record", hindi: "सुरक्षित सेवा" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const { value, ref } = useCountUp(to);
  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-foreground tabular-nums">
      {value}
      <span className="text-gradient">{suffix}</span>
    </span>
  );
}

export function Trust() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-trust overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">By the numbers</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground text-balance">
              A decade of <span className="font-serif italic font-normal">reliable</span> supply.
            </h2>
            <p className="font-hindi mt-3 text-muted-foreground">अस्पतालों, उद्योगों और संस्थानों का भरोसा।</p>
          </div>
          <div className="text-sm text-muted-foreground max-w-xs">
            Every cylinder delivered is an act of trust between us and the institutions that keep Bihar moving.
          </div>
        </div>

        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {items.map((it) => (
            <StaggerItem key={it.label}>
              <div className="group relative rounded-3xl bg-white ring-1 ring-border shadow-soft p-6 md:p-8 hover:shadow-elegant hover:-translate-y-1 transition-all overflow-hidden h-full">
                <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
                <div className="h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-soft mb-5">
                  <it.icon className="h-5 w-5" />
                </div>
                <Counter to={it.value} suffix={it.suffix} />
                <div className="mt-3">
                  <div className="text-sm font-semibold text-foreground">{it.label}</div>
                  <div className="font-hindi text-xs text-muted-foreground mt-0.5">{it.hindi}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
