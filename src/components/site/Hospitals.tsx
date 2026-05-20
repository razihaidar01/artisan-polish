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
  const hospitals = partners.filter((p) => p.type !== "Doctor");
  const doctors = partners.filter((p) => p.type === "Doctor");

  return (
    <section className="relative py-16 md:py-24 bg-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-red)]">Hospital &amp; Client Network</div>
            <h2 className="mt-2 font-display font-bold uppercase text-3xl md:text-4xl text-[var(--brand-navy)] leading-tight">
              Hospitals &amp; healthcare facilities we serve.
            </h2>
            <p className="mt-3 text-muted-foreground text-base">
              A working list of long-standing supply relationships across Saharsa, Sonbarsa, Saur Bazar and nearby areas. Names listed with the permission of partner institutions and practitioners.
            </p>
          </div>
        </Reveal>

        {/* Hospitals */}
        <Reveal delay={0.05}>
          <div className="mt-10">
            <div className="flex items-baseline justify-between border-b-2 border-[var(--brand-navy)] pb-3">
              <h3 className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--brand-navy)]">Hospitals &amp; Nursing Homes</h3>
              <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                {String(hospitals.length).padStart(2, "0")} partners
              </span>
            </div>
            <Stagger className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border-x border-b border-border">
              {hospitals.map((p) => (
                <StaggerItem key={p.name + p.location}>
                  <div className="bg-white p-4 flex items-start gap-3 h-full">
                    <Building2 className="h-4 w-4 text-[var(--brand-navy)] mt-1 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-foreground text-[14px]">{p.name}</div>
                      <div className="text-[12px] text-muted-foreground flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3 shrink-0" /> {p.location}
                        {p.type === "Nursing Home" && (
                          <span className="ml-2 text-[10px] uppercase tracking-[0.1em] text-foreground/50">· Nursing Home</span>
                        )}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>

        {/* Doctors */}
        <Reveal delay={0.1}>
          <div className="mt-12">
            <div className="flex items-baseline justify-between border-b-2 border-[var(--brand-navy)] pb-3">
              <h3 className="font-display text-[12px] font-bold uppercase tracking-[0.16em] text-[var(--brand-navy)]">Doctors &amp; Medical Support Network</h3>
              <span className="font-mono text-[11px] text-muted-foreground tabular-nums">
                {String(doctors.length).padStart(2, "0")} practitioners
              </span>
            </div>
            <Stagger className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border-x border-b border-border">
              {doctors.map((p) => (
                <StaggerItem key={p.name}>
                  <div className="bg-white p-4 flex items-start gap-3 h-full">
                    <Stethoscope className="h-4 w-4 text-[var(--brand-navy)] mt-1 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-foreground text-[14px]">{p.name}</div>
                      <div className="text-[12px] text-muted-foreground flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3 shrink-0" /> {p.location}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
