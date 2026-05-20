import { Truck, Building2, Headphones, ShieldCheck, MapPin, Wrench } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { Stagger, StaggerItem } from "./Reveal";

const items = [
  { icon: Truck, value: 5000, suffix: "+", label: "Deliveries Completed" },
  { icon: Building2, value: 50, suffix: "+", label: "Hospital Support Network" },
  { icon: Headphones, value: 24, suffix: "×7", label: "Emergency Support" },
  { icon: MapPin, value: 13, suffix: "+", label: "Bihar Districts Served" },
  { icon: Wrench, value: 40, suffix: "+", label: "Installation & Commissioning Projects" },
  { icon: ShieldCheck, value: 10, suffix: "+", label: "Years Operating" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const { value, ref } = useCountUp(to);
  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-[var(--brand-navy)] tabular-nums leading-none">
      {value}
      <span className="text-[var(--brand-red)]">{suffix}</span>
    </span>
  );
}

export function Trust() {
  return (
    <section className="relative py-16 md:py-24 bg-secondary border-y border-border">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 md:mb-14 max-w-3xl">
          <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-red)]">Operational Strength</div>
          <h2 className="mt-2 font-display font-bold uppercase text-3xl md:text-4xl text-[var(--brand-navy)] leading-tight">
            Built on consistency. Measured in numbers.
          </h2>
          <p className="mt-3 text-muted-foreground text-base">
            A decade of structured supply and engineering work across Bihar and selected projects beyond.
          </p>
        </div>

        <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
          {items.map((it) => (
            <StaggerItem key={it.label}>
              <div className="bg-white p-6 md:p-7 h-full flex flex-col justify-between min-h-[160px]">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 bg-[var(--brand-navy)] text-white flex items-center justify-center">
                    <it.icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-6">
                  <Counter to={it.value} suffix={it.suffix} />
                  <div className="mt-3 text-[12px] font-semibold uppercase tracking-[0.1em] text-foreground/70">{it.label}</div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
