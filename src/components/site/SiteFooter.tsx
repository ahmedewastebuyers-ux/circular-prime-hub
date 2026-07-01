import { Link } from "@tanstack/react-router";
import { Leaf, Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import { useSettings } from "@/hooks/useSettings";

const serviceLinks = [
  "IT Asset Recovery",
  "E-Waste Collection & Procurement",
  "Data Center Decommissioning",
  "Industrial Electronics Recovery",
  "Bulk Laptop Procurement",
  "Server Recovery",
  "Networking Equipment Purchase",
  "Corporate Electronics Buyback",
];

const companyLinks: { label: string; to: "/services" | "/industries" | "/compliance" | "/case-studies" | "/about" | "/faq" | "/contact" }[] = [
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Process", to: "/compliance" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About Us", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function SiteFooter() {
  const s = useSettings();
  return (
    <footer className="bg-charcoal text-charcoal-foreground">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-forest text-forest-foreground">
                <Leaf className="h-4 w-4" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-base font-bold">E-Waste Buyers</span>
                <span className="text-[10px] font-medium tracking-[0.18em] text-white/60 uppercase">
                  Asset Recovery
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              India's trusted buyer of corporate e-waste, retired IT assets,
              servers, networking equipment and industrial electronics.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-md border border-white/10 text-white/70 transition-colors hover:bg-forest hover:text-forest-foreground hover:border-forest"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {serviceLinks.map((l) => (
                <li key={l}>
                  <Link to="/services" className="transition-colors hover:text-white">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">Company</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {companyLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-forest" />
                <span>{s.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-forest" />
                <a href={`tel:${s.phoneTel}`} className="hover:text-white">{s.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-forest" />
                <a href={`mailto:${s.email}`} className="hover:text-white">{s.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} E-Waste Buyers Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <Link to="/compliance" className="hover:text-white">Process</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
