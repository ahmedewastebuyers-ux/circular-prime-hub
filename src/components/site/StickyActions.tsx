import { MessageCircle, Phone, FileText } from "lucide-react";
import { useSettings } from "@/hooks/useSettings";

export function StickyActions() {
  const s = useSettings();
  return (
    <>
      <div className="fixed right-4 bottom-24 z-30 flex flex-col gap-3 md:bottom-8">
        <a
          href={`https://wa.me/${s.whatsapp}?text=Hi%2C%20I%27d%20like%20a%20corporate%20e-waste%20quote.`}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp us"
          className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href={`tel:${s.phoneTel}`}
          aria-label="Call now"
          className="grid h-12 w-12 place-items-center rounded-full bg-forest text-forest-foreground shadow-lg shadow-black/20 transition-transform hover:scale-105"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur md:hidden">
        <a
          href="/contact#inspection"
          className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-charcoal"
        >
          <FileText className="h-4 w-4 text-forest" />
          Site Inspection
        </a>
        <a
          href="/contact#quote"
          className="flex items-center justify-center gap-2 bg-forest py-3 text-sm font-semibold text-forest-foreground"
        >
          Request Quote
        </a>
      </div>
    </>
  );
}
