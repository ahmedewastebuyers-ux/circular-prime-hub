import { Leaf, Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

export function SiteFooter() {
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
                <span className="font-display text-base font-bold">VertGreen</span>
                <span className="text-[10px] font-medium tracking-[0.18em] text-white/60 uppercase">
                  Asset Recovery
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              India's trusted partner for corporate e-waste disposal, IT asset recovery,
              secure data destruction, and data center decommissioning. Authorised under CPCB,
              audit-ready compliance documentation, nationwide reverse logistics.
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

          <FooterCol
            title="Services"
            links={[
              "IT Asset Recovery",
              "E-Waste Collection",
              "Data Destruction",
              "Reverse Logistics",
              "Compliance Reports",
              "Data Center Decommissioning",
            ]}
          />
          <FooterCol
            title="Industries"
            links={[
              "IT & SaaS",
              "Data Centers",
              "Manufacturing",
              "BFSI",
              "Healthcare",
              "Government",
            ]}
          />

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-forest" />
                <span>Plot 42, Industrial Area Phase II, Gurugram, Haryana 122016</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-forest" />
                <a href="tel:+919999999999" className="hover:text-white">+91 99999 99999</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-forest" />
                <a href="mailto:enterprise@vertgreen.in" className="hover:text-white">
                  enterprise@vertgreen.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} VertGreen Asset Recovery Pvt. Ltd. All rights reserved. CIN: U37100HR2018PTC000000</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
        {title}
      </h4>
      <ul className="mt-5 space-y-3 text-sm text-white/70">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-white">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
