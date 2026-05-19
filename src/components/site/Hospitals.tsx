import { Building2, Stethoscope, MapPin } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

type Partner = {
  name: string;
  location: string;
  type: "Hospital" | "Doctor" | "Nursing Home";
};

const partners: Partner[] = [
  { name: "Surya Hospital", location: "Saharsa", type: "Hospital" },
  { name: "Madhav Hospital", location: "Saharsa", type: "Hospital" },
  { name: "Kiran Aditya Hospital", location: "Sonbarsa", type: "Hospital" },
  { name: "Cure Hospital", location: "Saur Bazar", type: "Hospital" },
  { name: "Cure Hospital", location: "Saharsa", type: "Hospital" },
  { name: "Parvati Hospital", location: "Saharsa", type: "Hospital" },
  { name: "Dev Hospital", location: "Saharsa", type: "Hospital" },
  { name: "Satyam Hospital", location: "Saharsa", type: "Hospital" },
  { name: "Aarog Mandir Hospital", location: "Saharsa", type: "Hospital" },
  { name: "Vaishnavi Nursing Home", location: "Saharsa", type: "Nursing Home" },
  { name: "Dr. B.K. Kumar", location: "Kash Nagar", type: "Doctor" },
  { name: "Dr. Paritosh", location: "Saharsa", type: "Doctor" },
  { name: "Dr. Gopal Ji", location: "Saharsa", type: "Doctor" },
];

export function Hospitals() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Trusted by</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground text-balance leading-[1.05]">
              Hospitals, nursing homes &amp; <span className="font-serif italic font-normal">consulting doctors</span> we supply.
            </h2>
            <p className="font-hindi mt-3 text-muted-foreground">
              सहारसा एवं आसपास के क्षेत्रों के अस्पताल, नर्सिंग होम और चिकित्सकों के साथ नियमित आपूर्ति।
            </p>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl">
              A working list of long-standing supply relationships across Saharsa, Sonbarsa, Saur Bazar and nearby areas. Names shown with the permission of partner institutions and practitioners.
            </p>
          </div>
        </Reveal>

        {/* Editorial list — institutions */}
        <Reveal delay={0.05}>
          <div className="mt-12">
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/70">Hospitals &amp; nursing homes</h3>
              <span className="text-[11px] text-muted-foreground tabular-nums">
                {partners.filter((p) => p.type !== "Doctor").length} partners
              </span>
            </div>
            <Stagger className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {partners
                .filter((p) => p.type !== "Doctor")
                .map((p) => (
                  <StaggerItem key={p.name + p.location}>
                    <div className="group flex items-start gap-3 py-2.5 border-b border-border/60">
                      <Building2 className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-foreground text-[15px] tracking-tight">{p.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                          <MapPin className="h-3 w-3 shrink-0" /> {p.location}
                          {p.type === "Nursing Home" && (
                            <span className="ml-2 text-[10px] uppercase tracking-wider text-foreground/50">Nursing home</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
            </Stagger>
          </div>
        </Reveal>

        {/* Editorial list — doctors */}
        <Reveal delay={0.1}>
          <div className="mt-12">
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-foreground/70">Consulting doctors</h3>
              <span className="text-[11px] text-muted-foreground tabular-nums">
                {partners.filter((p) => p.type === "Doctor").length} practitioners
              </span>
            </div>
            <Stagger className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {partners
                .filter((p) => p.type === "Doctor")
                .map((p) => (
                  <StaggerItem key={p.name}>
                    <div className="flex items-start gap-3 py-2.5 border-b border-border/60">
                      <Stethoscope className="h-4 w-4 text-primary mt-1 shrink-0" />
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold text-foreground text-[15px] tracking-tight">{p.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                          <MapPin className="h-3 w-3 shrink-0" /> {p.location}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
            </Stagger>
          </div>
        </Reveal>

        {/* Quiet marquee row */}
        <div className="mt-14 marquee-mask overflow-hidden">
          <div className="flex gap-10 animate-marquee whitespace-nowrap text-foreground/45">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex gap-10 shrink-0">
                {partners.map((p) => (
                  <span key={p.name + p.location + k} className="font-display text-base md:text-lg font-medium tracking-tight">
                    {p.name}
                    <span className="mx-3 text-foreground/20">·</span>
                    <span className="text-foreground/35">{p.location}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
