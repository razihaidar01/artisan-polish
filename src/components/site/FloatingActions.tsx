import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="fixed bottom-5 right-4 z-40 flex flex-col gap-2.5"
    >
      <a
        href="https://wa.me/917004879171"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="relative grid place-items-center h-12 w-12 rounded-full bg-[oklch(0.55_0.18_155)] text-white shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
      >
        <span className="absolute inset-0 rounded-full bg-[oklch(0.55_0.18_155)]/40 animate-ping" />
        <MessageCircle className="relative h-5 w-5" />
      </a>
      <a
        href="tel:7004879171"
        aria-label="Call"
        className="grid place-items-center h-12 w-12 rounded-full bg-gradient-primary text-primary-foreground shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
      >
        <Phone className="h-5 w-5" />
      </a>
    </motion.div>
  );
}
