import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2">
      <a
        href="https://wa.me/917004879171"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="grid place-items-center h-12 w-12 bg-[#16794a] text-white shadow-elegant hover:shadow-glow transition-shadow"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        href="tel:7004879171"
        aria-label="Call"
        className="grid place-items-center h-12 w-12 bg-[var(--brand-red)] text-white shadow-elegant hover:shadow-glow transition-shadow"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}
