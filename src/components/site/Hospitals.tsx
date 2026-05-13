import { Building2, MapPin } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const hospitals = [
  { name: "SWARAJ Hospital", note: "Saharsa" },
  { name: "Kaushik Hospital", note: "Dr H.S. Thakur · Dr Preeti Mishra" },
  { name: "Aarogya Mandir Hospital", note: "Saharsa" },
  { name: "Pranjal Shri Hospital", note: "Dr. Ravindra · Dr. Vinita" },
  { name: "SR Hospital Pvt Ltd", note: "Saharsa" },
  { name: "Sunrise Hospital", note: "Saharsa" },
  { name: "Madhav Hospital", note: "Saharsa" },
];

export function Hospitals() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Trusted partners</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground text-balance leading-[1.05]">
              The institutions that <span className="font-serif italic font-normal">trust</span> us.
            </h2>
            <p className="font-hindi mt-3 text-muted-foreground">साहारसा क्षेत्र के प्रमुख अस्पतालों के साथ साझेदारी।</p>
          </div>
        </Reveal>

        {/* Featured grid */}
        <Stagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {hospitals.map((h) => (
            <StaggerItem key={h.name}>
              <div className="group relative rounded-2xl bg-white ring-1 ring-border p-5 md:p-6 flex items-center gap-4 hover:shadow-elegant hover:-translate-y-1 transition-all overflow-hidden h-full">
                <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
                <div className="h-14 w-14 rounded-2xl bg-gradient-trust ring-1 ring-border shadow-inner-glow flex items-center justify-center shrink-0">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-foreground text-base md:text-lg truncate tracking-tight">{h.name}</div>
                  <div className="text-xs md:text-sm text-muted-foreground flex items-center gap-1 mt-0.5 truncate">
                    <MapPin className="h-3.5 w-3.5 shrink-0" /> <span className="truncate">{h.note}</span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Marquee row */}
        <div className="mt-12 marquee-mask overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex gap-8 shrink-0">
                {hospitals.map((h) => (
                  <div key={h.name + k} className="glass rounded-full px-5 py-2.5 text-sm font-semibold text-foreground/80 shrink-0">
                    {h.name}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
