import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Recycle,
  FileCheck2,
  Lock,
  Building2,
  Server,
  Cpu,
  HardDrive,
  Network,
  Router,
  Radio,
  Battery,
  CircuitBoard,
  Factory,
  Wrench,
  Boxes,
  Laptop,
  Monitor,
  GraduationCap,
  Stethoscope,
  Landmark,
  Briefcase,
  ShieldCheck as Shield,
  Building,
  CheckCircle2,
  Award,
  Leaf,
  Users,
  Gauge,
  Globe2,
  PhoneCall,
  Mail,
  MapPin,
  Star,
  ChevronDown,
  Calendar,
  Upload,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyActions } from "@/components/site/StickyActions";
import heroImg from "@/assets/hero-datacenter.jpg";
import assetsImg from "@/assets/assets-grid.jpg";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VertGreen — Corporate E-Waste Disposal & IT Asset Recovery in India" },
      {
        name: "description",
        content:
          "India's premium B2B e-waste management partner. Secure data destruction, IT asset recovery, data center decommissioning, and CPCB-compliant recycling for enterprises, BFSI, manufacturing, healthcare, telecom and government.",
      },
      { name: "keywords", content: "corporate e-waste disposal India, IT asset recovery services, enterprise asset buyback, data center decommissioning, secure data destruction, corporate electronics recycling, e-waste management company India, IT asset disposal services, enterprise e-waste solutions" },
      { property: "og:title", content: "VertGreen — Corporate E-Waste & IT Asset Recovery" },
      {
        property: "og:description",
        content:
          "Secure, compliant, profitable e-waste disposal and IT asset recovery for India's enterprises. Pan-India collection, certified recycling, maximum value recovery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "VertGreen Asset Recovery",
          url: "https://vertgreen.in",
          logo: "https://vertgreen.in/logo.png",
          description:
            "Corporate e-waste disposal and IT asset recovery company in India serving enterprises, data centers, BFSI, healthcare, telecom and government.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plot 42, Industrial Area Phase II",
            addressLocality: "Gurugram",
            addressRegion: "Haryana",
            postalCode: "122016",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-98801-12263",
            contactType: "Sales",
            areaServed: "IN",
            availableLanguage: ["en", "hi"],
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TrustStrip />
        <Industries />
        <Assets />
        <Process />
        <Services />
        <WhyUs />
        <Calculator />
        <CaseStudies />
        <Testimonials />
        <Compliance />
        <Forms />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
      <StickyActions />
    </div>
  );
}

/* ============================================================
 * HERO
 * ========================================================== */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal pt-28 text-white md:pt-32">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Enterprise data center decommissioning"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.38_0.07_160_/_0.35),transparent_60%)]" />
      </div>

      <div className="container-px mx-auto max-w-7xl pb-20 md:pb-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-forest" />
            CPCB Authorised · ISO 14001 · ISO 27001
          </span>

          <h1 className="font-display mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Corporate E-Waste Disposal{" "}
            <span className="text-forest">&</span>{" "}
            IT Asset Recovery
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Secure, compliant and profitable e-waste disposal for enterprises, manufacturing
            facilities, educational institutions, healthcare, data centers, telecom providers
            and government departments. Nationwide collection, certified recycling, secure
            data destruction, and maximum value recovery from retired technology assets.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-7 text-sm font-semibold text-forest-foreground shadow-lg shadow-black/30 transition-all hover:bg-forest/90"
            >
              Request Corporate Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#inspection"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Schedule Site Inspection
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 border-t border-white/10 pt-8 md:grid-cols-4">
            {[
              { v: "850+", l: "Enterprise clients" },
              { v: "12,400T", l: "E-waste processed" },
              { v: "28", l: "States covered" },
              { v: "100%", l: "Audit-ready" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold text-white md:text-3xl">{s.v}</div>
                <div className="mt-1 text-xs text-white/60 uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * TRUST STRIP
 * ========================================================== */
function TrustStrip() {
  const items = [
    "RELIANCE", "INFOSYS", "HDFC BANK", "TATA STEEL", "AIRTEL",
    "WIPRO", "L&T", "ICICI", "MAHINDRA",
  ];
  return (
    <section className="border-y border-border bg-sand/40">
      <div className="container-px mx-auto max-w-7xl py-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by India's leading enterprises
        </p>
        <div className="mt-5 grid grid-cols-3 items-center gap-y-4 md:grid-cols-9">
          {items.map((n) => (
            <div key={n} className="text-center font-display text-sm font-bold tracking-[0.15em] text-charcoal/40">
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * INDUSTRIES
 * ========================================================== */
const industries = [
  { icon: Cpu, name: "IT Companies", desc: "Refresh cycle recovery for workstations, laptops, peripherals.", ex: "Laptops · Workstations · Monitors" },
  { icon: Server, name: "Data Centers", desc: "End-to-end rack decommissioning with audit-grade chain of custody.", ex: "Servers · Storage · Networking" },
  { icon: Factory, name: "Manufacturing", desc: "Industrial electronics, control panels, automation hardware.", ex: "PCBs · PLCs · Drives" },
  { icon: GraduationCap, name: "Education", desc: "Bulk disposal for labs, libraries and admin infrastructure.", ex: "Desktops · Projectors · Lab kits" },
  { icon: Stethoscope, name: "Hospitals", desc: "Compliant disposal of medical electronics and IT assets.", ex: "Diagnostics · Workstations" },
  { icon: Landmark, name: "Banks & BFSI", desc: "Certified data destruction with regulatory documentation.", ex: "ATMs · Servers · Drives" },
  { icon: Radio, name: "Telecom", desc: "Network infrastructure recovery and component buyback.", ex: "BTS · Routers · Switches" },
  { icon: Building, name: "Government", desc: "Tender-based disposal with full statutory compliance.", ex: "Office IT · Servers" },
  { icon: Briefcase, name: "Corporate Offices", desc: "Office relocations, refresh cycles and bulk decommissions.", ex: "Laptops · Furniture-IT" },
  { icon: CircuitBoard, name: "Electronics OEMs", desc: "Production scrap, returned units, EOL inventory.", ex: "PCB scrap · Components" },
];

function Industries() {
  return (
    <Section id="industries" eyebrow="Industries we serve" title="Built for the demands of regulated enterprise environments">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {industries.map((i) => (
          <div
            key={i.name}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-forest/40 hover:shadow-lg hover:shadow-forest/5"
          >
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-forest-foreground">
              <i.icon className="h-5 w-5" />
            </span>
            <h3 className="font-display mt-5 text-base font-bold text-charcoal">{i.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
            <p className="mt-4 text-xs font-medium text-forest">{i.ex}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
 * ASSETS
 * ========================================================== */
const assets = [
  { icon: Server, name: "Enterprise Servers", desc: "Rack & tower servers, blade chassis" },
  { icon: Laptop, name: "Laptops", desc: "Business notebooks, ultrabooks, workstations" },
  { icon: Monitor, name: "Desktop Computers", desc: "All-in-ones, workstations, mini PCs" },
  { icon: HardDrive, name: "Storage Systems", desc: "SAN, NAS, tape libraries, JBODs" },
  { icon: Network, name: "Networking Equipment", desc: "Firewalls, load balancers, modems" },
  { icon: Router, name: "Switches & Routers", desc: "Enterprise-class L2/L3 hardware" },
  { icon: Radio, name: "Telecom Equipment", desc: "BTS, RAN, microwave, transmission" },
  { icon: Battery, name: "UPS Systems", desc: "Online UPS, batteries, inverters" },
  { icon: CircuitBoard, name: "PCB Assemblies", desc: "Boards, modules, sub-assemblies" },
  { icon: Factory, name: "Industrial Electronics", desc: "Drives, controllers, automation" },
  { icon: Wrench, name: "Test Equipment", desc: "Oscilloscopes, analyzers, test rigs" },
  { icon: Boxes, name: "End-of-Life IT Assets", desc: "Mixed-lot retired technology" },
];

function Assets() {
  return (
    <section id="assets" className="section-y bg-sand/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <span className="eyebrow">Assets we recover</span>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-charcoal md:text-4xl lg:text-5xl">
              From a single laptop to a 500-rack data center.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              We recover, refurbish and recycle every class of retired enterprise technology —
              with maximum value back to your balance sheet and zero compliance risk.
            </p>
            <img
              src={assetsImg}
              alt="Sorted IT assets ready for recovery"
              width={1600}
              height={1000}
              loading="lazy"
              className="mt-8 hidden rounded-xl border border-border object-cover lg:block"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {assets.map((a) => (
              <div
                key={a.name}
                className="rounded-xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-forest/40 hover:shadow-md"
              >
                <a.icon className="h-6 w-6 text-forest" />
                <h3 className="font-display mt-4 text-sm font-bold text-charcoal">{a.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * PROCESS
 * ========================================================== */
const steps = [
  { n: "01", title: "Asset Assessment", desc: "We evaluate retired assets, business requirements and disposal scope." },
  { n: "02", title: "Site Inspection", desc: "Our team inspects on-site inventory and determines recovery potential." },
  { n: "03", title: "Quotation & Proposal", desc: "Transparent asset-level valuation and a documented disposal plan." },
  { n: "04", title: "Collection & Logistics", desc: "Secure GPS-tracked pickup with insured transportation, pan-India." },
  { n: "05", title: "Data Destruction", desc: "Certified wiping (NIST 800-88) and physical shredding with video proof." },
  { n: "06", title: "Recycling & Recovery", desc: "Responsible processing at authorised facilities; maximum value return." },
  { n: "07", title: "Compliance Documentation", desc: "Recycling certificates, Form-6/9 trail and ESG impact reports." },
];

function Process() {
  return (
    <Section id="process" eyebrow="How it works" title="A controlled, documented process from quote to certificate.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, idx) => (
          <div
            key={s.n}
            className="relative rounded-xl border border-border bg-card p-6 transition-all hover:border-forest/40"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-3xl font-extrabold text-forest/30">{s.n}</span>
              {idx < steps.length - 1 && (
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
            <h3 className="font-display mt-6 text-base font-bold text-charcoal">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
 * SERVICES
 * ========================================================== */
const services = [
  { icon: HardDrive, title: "IT Asset Recovery", desc: "Maximize returns from retired enterprise hardware through resale, refurbishment and component recovery." },
  { icon: Truck, title: "E-Waste Collection & Disposal", desc: "Nationwide collection with environmentally responsible recycling at CPCB-authorised facilities." },
  { icon: Lock, title: "Secure Data Destruction", desc: "On-site or off-site hard drive shredding, degaussing and NIST 800-88 wiping with video proof." },
  { icon: Globe2, title: "Reverse Logistics", desc: "Multi-location asset collection and consolidation across India with GPS-tracked vehicles." },
  { icon: FileCheck2, title: "Compliance Documentation", desc: "Audit-ready Form-6/9, recycling certificates and complete chain-of-custody reporting." },
  { icon: Leaf, title: "ESG & Sustainability Support", desc: "Carbon offset reports, ESG metrics, and disclosure-ready environmental impact data." },
  { icon: Server, title: "Data Center Decommissioning", desc: "Turnkey rack-to-truck retirement with project management, packing and serialised tracking." },
  { icon: Building2, title: "Enterprise Asset Buyback", desc: "Direct purchase of retired corporate equipment with transparent fair-market valuation." },
];

function Services() {
  return (
    <section id="services" className="section-y bg-charcoal text-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-end">
          <div>
            <span className="eyebrow text-forest">Corporate services</span>
            <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              End-to-end services for enterprise IT lifecycle retirement.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/70">
            Eight integrated services, one accountable partner. Whether you're refreshing
            500 laptops or decommissioning an entire data center, we manage every step —
            asset recovery, secure data destruction, compliant recycling and ESG reporting.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col bg-charcoal p-7 transition-colors hover:bg-charcoal/70"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-forest/15 text-forest transition-colors group-hover:bg-forest group-hover:text-forest-foreground">
                <s.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display mt-6 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * WHY US
 * ========================================================== */
const why = [
  { icon: Briefcase, title: "Corporate Focused", desc: "Built for B2B scale — not scrap dealers." },
  { icon: Globe2, title: "Pan-India Collection", desc: "Operations across 28 states." },
  { icon: Truck, title: "Secure Logistics", desc: "GPS-tracked, insured, tamper-evident." },
  { icon: Gauge, title: "Transparent Valuation", desc: "Line-item pricing, no hidden deductions." },
  { icon: ArrowRight, title: "Fast Turnaround", desc: "Pickups within 48–72 hours." },
  { icon: ShieldCheck, title: "Data Security First", desc: "NIST 800-88 wiping + shredding." },
  { icon: Users, title: "Dedicated Account Managers", desc: "Named POC for every enterprise." },
  { icon: FileCheck2, title: "Compliance Driven", desc: "Audit-ready paperwork, every time." },
  { icon: Leaf, title: "Sustainability Focused", desc: "ESG reporting & carbon offset data." },
  { icon: Award, title: "Experienced Industry Team", desc: "15+ years across enterprise lifecycle." },
];

function WhyUs() {
  return (
    <Section id="why" eyebrow="Why enterprises choose us" title="The operational standards your procurement, IT and compliance teams expect.">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {why.map((w) => (
          <div
            key={w.title}
            className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-forest/40"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-forest/10 text-forest">
              <w.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-sm font-bold text-charcoal">{w.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
 * CALCULATOR
 * ========================================================== */
const assetTypes: { key: string; label: string; low: number; high: number }[] = [
  { key: "server", label: "Enterprise Server", low: 8000, high: 35000 },
  { key: "laptop", label: "Business Laptop", low: 3500, high: 18000 },
  { key: "desktop", label: "Desktop / Workstation", low: 2200, high: 12000 },
  { key: "storage", label: "Storage Array", low: 12000, high: 90000 },
  { key: "switch", label: "Network Switch / Router", low: 1500, high: 25000 },
  { key: "ups", label: "UPS / Battery", low: 1800, high: 15000 },
];

function Calculator() {
  const [type, setType] = useState(assetTypes[0].key);
  const [qty, setQty] = useState(50);
  const [condition, setCondition] = useState<"working" | "partial" | "scrap">("working");
  const [age, setAge] = useState<"0-3" | "3-6" | "6+">("3-6");

  const { low, high } = useMemo(() => {
    const a = assetTypes.find((x) => x.key === type)!;
    const cond = condition === "working" ? 1 : condition === "partial" ? 0.55 : 0.22;
    const ageMul = age === "0-3" ? 1 : age === "3-6" ? 0.7 : 0.4;
    const m = cond * ageMul;
    return {
      low: Math.round(a.low * m * qty),
      high: Math.round(a.high * m * qty),
    };
  }, [type, qty, condition, age]);

  const fmt = (n: number) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

  return (
    <Section id="calculator" eyebrow="Asset valuation calculator" title="An instant recovery-value estimate for your retired IT inventory.">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="grid lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6 p-7 md:p-10">
            <Field label="Asset type">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
              >
                {assetTypes.map((a) => (
                  <option key={a.key} value={a.key}>{a.label}</option>
                ))}
              </select>
            </Field>

            <Field label={`Quantity: ${qty} units`}>
              <input
                type="range"
                min={1}
                max={1000}
                step={1}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
                className="w-full accent-forest"
              />
            </Field>

            <Field label="Condition">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { k: "working", l: "Working" },
                  { k: "partial", l: "Partial" },
                  { k: "scrap", l: "Scrap / Dead" },
                ].map((o) => (
                  <button
                    key={o.k}
                    onClick={() => setCondition(o.k as "working" | "partial" | "scrap")}
                    className={
                      "h-11 rounded-md border text-sm font-medium transition-colors " +
                      (condition === o.k
                        ? "border-forest bg-forest text-forest-foreground"
                        : "border-input bg-background text-charcoal hover:border-forest/50")
                    }
                  >
                    {o.l}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Asset age">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { k: "0-3", l: "0–3 years" },
                  { k: "3-6", l: "3–6 years" },
                  { k: "6+", l: "6+ years" },
                ].map((o) => (
                  <button
                    key={o.k}
                    onClick={() => setAge(o.k as "0-3" | "3-6" | "6+")}
                    className={
                      "h-11 rounded-md border text-sm font-medium transition-colors " +
                      (age === o.k
                        ? "border-forest bg-forest text-forest-foreground"
                        : "border-input bg-background text-charcoal hover:border-forest/50")
                    }
                  >
                    {o.l}
                  </button>
                ))}
              </div>
            </Field>
          </div>

          <div className="flex flex-col justify-between bg-charcoal p-7 text-white md:p-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
                Estimated recovery value
              </span>
              <div className="mt-4 font-display text-3xl font-extrabold leading-tight md:text-4xl">
                {fmt(low)} <span className="text-white/40">–</span> {fmt(high)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                Indicative range only. Final valuation depends on physical inspection,
                serial-level grading, data-bearing media count and market conditions on
                date of pickup.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {[
                  "Formal valuation within 48 hours",
                  "Free site inspection for orders ≥ 100 units",
                  "PAN-India insured collection",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#quote"
              className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
            >
              Request Formal Assessment <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

/* ============================================================
 * CASE STUDIES
 * ========================================================== */
const cases = [
  {
    tag: "Data Center Decommissioning",
    title: "500+ servers recovered for a hyperscale tenant",
    desc: "Turnkey decommissioning of a 9,000 sq ft co-location footprint across Bengaluru and Mumbai with serialised chain of custody.",
    stats: [
      { v: "512", l: "Servers recovered" },
      { v: "₹2.1 Cr", l: "Recovery value" },
      { v: "84 T", l: "CO₂ avoided" },
    ],
  },
  {
    tag: "Manufacturing Facility Upgrade",
    title: "Large-scale IT and industrial asset disposal",
    desc: "Tier-1 auto supplier facility refresh — 1,800+ assets including industrial controllers, PCBs and office IT.",
    stats: [
      { v: "1,820", l: "Assets processed" },
      { v: "₹84 L", l: "Recovery value" },
      { v: "0", l: "Compliance findings" },
    ],
  },
  {
    tag: "Corporate Office Refresh",
    title: "Secure recovery of end-of-life IT assets",
    desc: "Pan-India laptop refresh for a BFSI client across 47 branches with on-site shredding and Form-6 documentation.",
    stats: [
      { v: "3,400", l: "Laptops handled" },
      { v: "47", l: "Locations" },
      { v: "100%", l: "Drives destroyed" },
    ],
  },
];

function CaseStudies() {
  return (
    <Section id="cases" eyebrow="Client success" title="Case studies from enterprises that trust our process.">
      <div className="grid gap-5 lg:grid-cols-3">
        {cases.map((c) => (
          <article
            key={c.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/5"
          >
            <div className="relative h-44 overflow-hidden bg-charcoal">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,oklch(0.38_0.07_160_/_0.4),transparent_60%)]" />
              <div className="absolute inset-x-6 bottom-6">
                <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                  {c.tag}
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-display text-lg font-bold leading-snug text-charcoal">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                {c.stats.map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-base font-bold text-forest">{s.v}</div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
 * TESTIMONIALS
 * ========================================================== */
const testimonials = [
  {
    img: t1,
    name: "Rajesh Iyer",
    role: "IT Director, Fintech Enterprise",
    quote:
      "VertGreen handled the disposal of 800+ laptops and 60 servers across our offices with the kind of documentation our internal auditors expect. Zero gaps.",
  },
  {
    img: t2,
    name: "Anjali Mehra",
    role: "Procurement Manager, Pharma Major",
    quote:
      "Transparent valuation, fast turnaround, and a single point of contact across pickups in 12 cities. We recovered 38% more than our previous vendor.",
  },
  {
    img: t3,
    name: "Suresh Krishnan",
    role: "Sustainability Officer, BFSI",
    quote:
      "Their ESG reporting plugs directly into our annual sustainability disclosures. The compliance trail and carbon offset data are best-in-class.",
  },
];

function Testimonials() {
  return (
    <section className="section-y bg-sand/40">
      <div className="container-px mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <span className="eyebrow">Testimonials</span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-charcoal md:text-4xl lg:text-5xl">
            Trusted by IT, procurement and sustainability leaders.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <div className="flex gap-0.5 text-forest">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-charcoal">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <img
                  src={t.img}
                  alt={t.name}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-display text-sm font-bold text-charcoal">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * COMPLIANCE
 * ========================================================== */
const certs = [
  { code: "CPCB", label: "Authorised Recycler" },
  { code: "ISO 14001", label: "Environment Mgmt" },
  { code: "ISO 9001", label: "Quality Mgmt" },
  { code: "ISO 27001", label: "Information Security" },
  { code: "OHSAS 18001", label: "Occupational H&S" },
  { code: "NIST 800-88", label: "Data Sanitization" },
  { code: "R2v3", label: "Responsible Recycling" },
  { code: "E-Waste Rules 2022", label: "MoEF&CC Compliant" },
];

function Compliance() {
  return (
    <Section id="compliance" eyebrow="Compliance & certifications" title="Audit-ready by design. Recognised by every authority that matters.">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {certs.map((c) => (
          <div
            key={c.code}
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-forest/50"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-forest text-forest-foreground">
              <Shield className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <div className="font-display text-sm font-bold text-charcoal">{c.code}</div>
              <div className="text-xs text-muted-foreground">{c.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-gradient-to-br from-forest/5 via-card to-card p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <FileCheck2 className="h-7 w-7 text-forest" />
            <h3 className="font-display mt-4 text-lg font-bold text-charcoal">Government compliance</h3>
            <p className="mt-2 text-sm text-muted-foreground">Form-1 to Form-9, EPR credits, state pollution board filings.</p>
          </div>
          <div>
            <Recycle className="h-7 w-7 text-forest" />
            <h3 className="font-display mt-4 text-lg font-bold text-charcoal">Recycling certificates</h3>
            <p className="mt-2 text-sm text-muted-foreground">Serial-linked certificates of recycling for every asset disposed.</p>
          </div>
          <div>
            <Lock className="h-7 w-7 text-forest" />
            <h3 className="font-display mt-4 text-lg font-bold text-charcoal">Data destruction certificates</h3>
            <p className="mt-2 text-sm text-muted-foreground">Per-drive destruction certificate with method, timestamp and operator.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
 * FORMS — Quote + Inspection
 * ========================================================== */
function Forms() {
  return (
    <section id="quote" className="section-y bg-charcoal text-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <QuoteForm />
          <InspectionForm />
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  return (
    <div>
      <span className="eyebrow text-forest">Corporate quote request</span>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-4xl">
        Get a transparent enterprise quote in 48 hours.
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-white/70">
        Share your retirement scope and our enterprise team will respond with a formal,
        line-item proposal — no obligation, full NDA.
      </p>

      <form
        onSubmit={(e) => { e.preventDefault(); alert("Thanks — our enterprise team will reach out within 1 business day."); }}
        className="mt-8 grid gap-3 sm:grid-cols-2"
      >
        <Input name="name" placeholder="Full name *" required />
        <Input name="company" placeholder="Company name *" required />
        <Input name="designation" placeholder="Designation" />
        <Input name="email" type="email" placeholder="Business email *" required />
        <Input name="phone" type="tel" placeholder="Phone number *" required />
        <Input name="city" placeholder="City" />
        <Select name="industry">
          <option value="">Industry</option>
          {industries.map((i) => (<option key={i.name} value={i.name}>{i.name}</option>))}
        </Select>
        <Select name="asset">
          <option value="">Asset category</option>
          {assets.map((a) => (<option key={a.name} value={a.name}>{a.name}</option>))}
        </Select>
        <Input name="qty" type="number" placeholder="Estimated quantity" />
        <Input name="date" type="date" placeholder="Preferred collection date" />
        <label className="sm:col-span-2 flex h-12 cursor-pointer items-center gap-3 rounded-md border border-dashed border-white/20 bg-white/5 px-4 text-sm text-white/60 hover:border-forest/50">
          <Upload className="h-4 w-4 text-forest" />
          Upload asset images (optional)
          <input type="file" multiple className="hidden" />
        </label>
        <textarea
          name="notes"
          rows={3}
          placeholder="Additional notes"
          className="sm:col-span-2 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-forest focus:outline-none"
        />
        <button
          type="submit"
          className="sm:col-span-2 mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
        >
          Request Corporate Quote <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

function InspectionForm() {
  return (
    <div id="inspection" className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
      <span className="eyebrow text-forest">Site inspection booking</span>
      <h3 className="font-display mt-3 text-2xl font-bold md:text-3xl">
        Schedule a free on-site inventory assessment.
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/70">
        For orders over 100 units we visit your facility, audit inventory, and provide a
        formal valuation — usually within 5 working days.
      </p>

      <form
        onSubmit={(e) => { e.preventDefault(); alert("Inspection request received. We'll confirm within 1 business day."); }}
        className="mt-7 grid gap-3 sm:grid-cols-2"
      >
        <Input name="name" placeholder="Name *" required />
        <Input name="company" placeholder="Company *" required />
        <Input name="phone" type="tel" placeholder="Phone *" required />
        <Input name="email" type="email" placeholder="Email *" required />
        <textarea
          name="address"
          rows={2}
          placeholder="Facility address *"
          required
          className="sm:col-span-2 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-forest focus:outline-none"
        />
        <Input name="visit" type="date" placeholder="Preferred visit date" />
        <Select name="atype">
          <option value="">Asset type</option>
          {assets.slice(0, 6).map((a) => (<option key={a.name} value={a.name}>{a.name}</option>))}
        </Select>
        <Input name="volume" placeholder="Estimated volume (units / kg)" className="sm:col-span-2" />
        <button
          type="submit"
          className="sm:col-span-2 mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          <Calendar className="h-4 w-4 text-forest" />
          Schedule Inspection
        </button>
      </form>
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className = "", ...rest } = props;
  return (
    <input
      {...rest}
      className={
        "h-12 rounded-md border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-forest focus:outline-none " +
        className
      }
    />
  );
}
function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const { className = "", children, ...rest } = props;
  return (
    <select
      {...rest}
      className={
        "h-12 rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white focus:border-forest focus:outline-none " +
        className
      }
    >
      {children}
    </select>
  );
}

/* ============================================================
 * FAQ
 * ========================================================== */
const faqs = [
  { q: "What types of corporate assets do you purchase?", a: "We buy and dispose of all classes of retired enterprise technology: laptops, desktops, servers, storage, networking gear, telecom infrastructure, UPS systems, PCBs, industrial electronics, test equipment, and end-of-life mixed IT lots." },
  { q: "Do you provide nationwide collection?", a: "Yes. We operate across 28 Indian states with GPS-tracked, insured logistics. Multi-city consolidations and single-pickup contracts are both supported." },
  { q: "How is asset valuation determined?", a: "Valuation is based on serial-level inspection, market resale value, working condition, age, and recoverable material content. Every line item is disclosed transparently in the proposal." },
  { q: "Do you offer secure data destruction?", a: "Yes — NIST 800-88 compliant wiping, degaussing and physical shredding. On-site shredding is available with video proof and per-drive destruction certificates." },
  { q: "Can you handle data center decommissioning?", a: "Yes. Our turnkey decommissioning service covers project planning, racks-to-truck removal, packing, serialised tracking, transportation, processing and final reporting." },
  { q: "Do you provide compliance documentation?", a: "Every engagement includes Form-6/Form-9 trail, recycling certificates, data destruction certificates and ESG-grade environmental reports — all audit-ready." },
  { q: "What industries do you serve?", a: "Enterprises across IT, data centers, manufacturing, BFSI, healthcare, telecom, education, government, electronics OEMs and corporate offices of every scale." },
  { q: "How quickly can collections be scheduled?", a: "Standard collections are scheduled within 48–72 hours of accepted quotation. Emergency and same-week pickups are available for enterprise clients." },
];

function FAQ() {
  return (
    <Section id="faq" eyebrow="Frequently asked" title="Everything procurement and IT teams want to know — answered.">
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
        {faqs.map((f, i) => (
          <FaqItem key={i} q={f.q} a={f.a} />
        ))}
      </div>
    </Section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="font-display text-sm font-bold text-charcoal md:text-base">{q}</span>
        <ChevronDown
          className={"h-4 w-4 shrink-0 text-forest transition-transform " + (open ? "rotate-180" : "")}
        />
      </button>
      {open && (
        <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{a}</div>
      )}
    </div>
  );
}

/* ============================================================
 * CONTACT
 * ========================================================== */
function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Speak to our enterprise desk.">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        <ContactCard icon={PhoneCall} title="Sales hotline" lines={["+91 98801 12263", "Mon–Sat · 9am–7pm IST"]} />
        <ContactCard icon={Mail} title="Enterprise email" lines={["enterprise@vertgreen.in", "Response within 4 hours"]} />
        <ContactCard icon={MapPin} title="Corporate office" lines={["Plot 42, Industrial Area Phase II", "Gurugram, Haryana 122016"]} />
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card">
        <iframe
          title="VertGreen office location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=77.0%2C28.45%2C77.12%2C28.52&layer=mapnik&marker=28.4595%2C77.0266"
          className="h-80 w-full"
          loading="lazy"
        />
      </div>
    </Section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
}: { icon: typeof PhoneCall; title: string; lines: string[] }) {
  return (
    <div className="bg-card p-7">
      <span className="grid h-11 w-11 place-items-center rounded-lg bg-forest text-forest-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="font-display mt-5 text-base font-bold text-charcoal">{title}</h3>
      <div className="mt-2 space-y-1 text-sm text-muted-foreground">
        {lines.map((l) => <p key={l}>{l}</p>)}
      </div>
    </div>
  );
}

/* ============================================================
 * SECTION WRAPPER
 * ========================================================== */
function Section({
  id, eyebrow, title, children,
}: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section-y">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-charcoal md:text-4xl lg:text-5xl">
            {title}
          </h2>
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
