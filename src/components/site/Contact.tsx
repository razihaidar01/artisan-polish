import { Phone, MessageCircle, MapPin, Mail, Send, AlertCircle, CheckCircle2, Loader2, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

const phones = ["7004879171", "9546756767", "8709338784"];

const services = [
  "Medical Oxygen",
  "Industrial Nitrogen",
  "Helium",
  "Hospital Medical Gas",
  "Hospital 24×7 Support",
  "Industrial Gas Supply",
  "Other",
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter at least 2 characters").max(80, "Name is too long"),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/u, "Please enter a valid 10-digit mobile"),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().trim().min(5, "Please describe your requirement").max(800, "Message too long"),
});

type FormState = { name: string; phone: string; service: string; message: string };
type Errors = Partial<Record<keyof FormState, string>>;

export function ContactSection({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState<FormState>({ name: "", phone: "", service: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (k && !fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("error");
      toast.error("Please fix the highlighted fields");
      return;
    }
    setStatus("submitting");
    try {
      const text =
`*New inquiry — Koshi Gas Agency*

*Name:* ${parsed.data.name}
*Mobile:* +91 ${parsed.data.phone}
*Service:* ${parsed.data.service}

*Requirement:*
${parsed.data.message}

— sent from koshigasagency.com`;
      const url = `https://wa.me/917004879171?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("success");
      toast.success("Opening WhatsApp with your inquiry");
      setForm({ name: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
      toast.error("Something went wrong. Please call us directly.");
    }
  };

  return (
    <section id="contact" className={`relative ${compact ? "py-14" : "py-20 md:py-28"} overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-trust pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-mesh blur-3xl opacity-60 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {!compact && (
          <Reveal>
            <div className="max-w-2xl">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">Contact</span>
              <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground text-balance leading-[1.05]">
                Tell us what you need — we'll <span className="font-serif italic font-normal">respond fast</span>.
              </h2>
              <p className="font-hindi mt-3 text-muted-foreground">तेज़ सेवा के लिए अभी कॉल या WhatsApp करें।</p>
            </div>
          </Reveal>
        )}

        <div className={`${compact ? "" : "mt-12"} grid lg:grid-cols-12 gap-5 md:gap-6`}>
          {/* Left column */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal>
              <div className="rounded-3xl bg-white ring-1 ring-border shadow-soft p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Visit</div>
                    <div className="font-semibold text-foreground mt-1">Address</div>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                      Near Guddu Hardware, Hatiya Gachi,<br />Saharsa, Bihar – 852201
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="rounded-3xl bg-white ring-1 ring-border shadow-soft p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Call · 24×7</div>
                    <div className="font-semibold text-foreground mt-1">Direct lines</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {phones.map((p) => (
                        <a
                          key={p}
                          href={`tel:${p}`}
                          className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-3 py-1.5 text-sm font-semibold hover:bg-accent transition-colors"
                        >
                          <Phone className="h-3.5 w-3.5" /> {p}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href="https://wa.me/917004879171"
                target="_blank"
                rel="noreferrer"
                className="group relative block rounded-3xl bg-gradient-ink text-white p-6 shadow-elegant overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-[oklch(0.55_0.18_155)]/40 blur-3xl" />
                <div className="relative flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[oklch(0.55_0.18_155)] flex items-center justify-center">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">Instant chat</div>
                    <div className="font-semibold mt-0.5">Message us on WhatsApp</div>
                    <div className="text-sm opacity-80 font-hindi mt-0.5">तुरंत जवाब · 24×7 सेवा</div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl overflow-hidden ring-1 ring-border shadow-soft bg-white">
                <iframe
                  title="Koshi Gas Agency Saharsa"
                  src="https://www.google.com/maps?q=Hatiya+Gachi+Saharsa+Bihar+852201&output=embed"
                  width="100%"
                  height="240"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </div>
            </Reveal>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7">
            <Reveal>
              <form
                onSubmit={onSubmit}
                noValidate
                className="relative rounded-3xl glass shadow-elegant p-6 md:p-8 space-y-5"
              >
                <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary-glow/30 blur-3xl pointer-events-none" />

                <div className="relative">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-primary">Inquiry form</div>
                  <h3 className="mt-1 text-2xl md:text-3xl font-bold text-foreground tracking-tight">Send us a quick brief</h3>
                  <p className="text-sm text-muted-foreground mt-1">We'll receive it on WhatsApp and respond within minutes.</p>
                </div>

                <div className="relative grid sm:grid-cols-2 gap-4">
                  <Field label="Full name" htmlFor="c-name" error={errors.name}>
                    <input
                      id="c-name"
                      type="text"
                      value={form.name}
                      onChange={update("name")}
                      aria-invalid={!!errors.name}
                      className={inputCls(!!errors.name)}
                      placeholder="Sanjay Singh"
                      maxLength={80}
                    />
                  </Field>
                  <Field label="Mobile number" htmlFor="c-phone" error={errors.phone}>
                    <input
                      id="c-phone"
                      type="tel"
                      inputMode="numeric"
                      value={form.phone}
                      onChange={update("phone")}
                      aria-invalid={!!errors.phone}
                      className={inputCls(!!errors.phone)}
                      placeholder="10-digit mobile"
                      maxLength={10}
                    />
                  </Field>
                </div>

                <Field label="Service required" htmlFor="c-service" error={errors.service}>
                  <select
                    id="c-service"
                    value={form.service}
                    onChange={update("service")}
                    aria-invalid={!!errors.service}
                    className={inputCls(!!errors.service)}
                  >
                    <option value="">Choose a service…</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>

                <Field label="Your requirement" htmlFor="c-msg" error={errors.message}>
                  <textarea
                    id="c-msg"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    aria-invalid={!!errors.message}
                    className={inputCls(!!errors.message)}
                    placeholder="Quantity, location, urgency…"
                    maxLength={800}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group relative w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-6 py-4 text-sm font-semibold shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {status === "submitting" ? "Sending…" : "Send via WhatsApp"}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                {status === "success" && (
                  <div className="rounded-2xl bg-success/10 ring-1 ring-success/30 p-3.5 text-sm flex items-start gap-2" style={{ color: "oklch(0.40 0.14 155)" }}>
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>Inquiry sent. We'll respond on WhatsApp shortly.</span>
                  </div>
                )}
                {status === "error" && Object.keys(errors).length === 0 && (
                  <div className="rounded-2xl bg-destructive/10 ring-1 ring-destructive/30 p-3.5 text-sm text-destructive flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>Something went wrong. Please call <a className="underline" href="tel:7004879171">7004879171</a>.</span>
                  </div>
                )}

                <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Mail className="h-3 w-3" /> Your information is used only to respond to this inquiry.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function inputCls(err: boolean) {
  return `mt-1.5 w-full rounded-2xl border bg-white/70 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition-shadow ${err ? "border-destructive ring-1 ring-destructive/30" : "border-input"}`;
}

function Field({ label, htmlFor, error, children }: { label: string; htmlFor: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground font-semibold">{label}</label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-destructive flex items-center gap-1.5">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </p>
      )}
    </div>
  );
}
