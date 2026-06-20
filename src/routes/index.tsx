import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyActions } from "@/components/site/StickyActions";
import { Section } from "@/components/site/Section";
import { industries, services, why, cases, faqs, siteImages, PHONE_TEL, WHATSAPP } from "@/lib/site-data";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "E-Waste Buyers — Corporate E-Waste Disposal & IT Asset Recovery in India" },
      {
        name: "description",
        content:
          "India's premium B2B partner for IT asset recovery, secure data destruction, data center decommissioning and CPCB-compliant e-waste disposal. Pan-India service for enterprises.",
      },
      { property: "og:title", content: "E-Waste Buyers — Corporate IT Asset Recovery" },
      {
        property: "og:description",
        content:
          "Secure, compliant, profitable e-waste disposal and IT asset recovery for India's enterprises.",
      },
      { property: "og:type", content: "website" },
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
          name: "E-Waste Buyers",
          url: "https://ewastebuyers.com",
          description:
            "Corporate e-waste disposal and IT asset recovery company in India.",
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
        <IndustriesPreview />
        <ServicesPreview />
        <WhyUs />
        <CasesPreview />
        <FAQPreview />
        <CTA />
      </main>
      <SiteFooter />
      <StickyActions />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal pt-28 text-white md:pt-36">
      <div className="absolute inset-0 -z-10">
        <img
          src={siteImages.hero.src}
          alt={siteImages.hero.alt}
          width={1920}
          height={1280}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.38_0.07_160_/_0.35),transparent_60%)]" />
      </div>


      <div className="container-px mx-auto max-w-7xl pb-24 md:pb-36">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-forest" />
            CPCB Authorised · ISO 14001 · ISO 27001
          </span>

          <h1 className="font-display mt-8 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Corporate E-Waste Disposal{" "}
            <span className="text-forest">&</span> IT Asset Recovery
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            We help businesses recover value from retired IT assets through secure
            collection, data destruction, asset recovery, and certified recycling.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              hash="quote"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-7 text-sm font-semibold text-forest-foreground shadow-lg shadow-black/30 transition-all hover:bg-forest/90"
            >
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              hash="inspection"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Schedule Inspection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}





/* ---------- Industries (6) ---------- */
function IndustriesPreview() {
  const six = industries.slice(0, 6);
  return (
    <Section
      eyebrow="Industries we serve"
      title="Built for regulated enterprise environments."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {six.map((i) => (
          <div
            key={i.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-forest/40 hover:shadow-lg hover:shadow-forest/5"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
              <img
                src={i.image}
                alt={i.alt}
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
            </div>
            <div className="flex flex-col p-7">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-forest/10 text-forest transition-colors group-hover:bg-forest group-hover:text-forest-foreground">
                <i.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display mt-5 text-lg font-bold text-charcoal">{i.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/industries"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-card px-6 text-sm font-semibold text-charcoal transition-colors hover:border-forest hover:text-forest"
        >
          View All Industries <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

/* ---------- Services (4) ---------- */
function ServicesPreview() {
  const four = services.slice(0, 4);
  return (
    <section className="section-y bg-charcoal text-white">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-forest">Core services</span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            End-to-end enterprise asset lifecycle retirement.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {four.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-charcoal/60 transition-colors hover:border-forest/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-forest/15 text-forest transition-colors group-hover:bg-forest group-hover:text-forest-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Explore All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- Why Us (6) ---------- */
function WhyUs() {
  return (
    <Section
      eyebrow="Why choose us"
      title="The operational standards procurement and compliance teams expect."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {why.map((w) => (
          <div
            key={w.title}
            className="flex gap-5 rounded-2xl border border-border bg-card p-7"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-forest/10 text-forest">
              <w.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h3 className="font-display text-base font-bold text-charcoal">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Case Studies (3) ---------- */
function CasesPreview() {
  const three = cases.slice(0, 3);
  return (
    <section className="section-y bg-sand/30">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Client success highlights</span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-charcoal md:text-4xl lg:text-5xl">
            Enterprises that trust our process.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {three.map((c) => (
            <article
              key={c.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/5"
            >
              <div className="relative h-44 overflow-hidden bg-charcoal">
                <img
                  src={c.image}
                  alt={c.alt}
                  width={800}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
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

        <div className="mt-10 text-center">
          <Link
            to="/case-studies"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-card px-6 text-sm font-semibold text-charcoal transition-colors hover:border-forest hover:text-forest"
          >
            View More Case Studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ (3) ---------- */
function FAQPreview() {
  const three = faqs.slice(0, 3);
  return (
    <Section eyebrow="Frequently asked" title="Answers procurement and IT teams need.">
      <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
        {three.map((f, i) => (
          <FaqItem key={i} q={f.q} a={f.a} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/faq"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-card px-6 text-sm font-semibold text-charcoal transition-colors hover:border-forest hover:text-forest"
        >
          View All FAQs <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="font-display text-sm font-bold text-charcoal md:text-base">{q}</span>
        <ChevronDown
          className={"h-4 w-4 shrink-0 text-forest transition-transform " + (open ? "rotate-180" : "")}
        />
      </button>
      {open && <div className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{a}</div>}
    </div>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="section-y bg-charcoal text-white">
      <div className="container-px mx-auto max-w-5xl text-center">
        <span className="eyebrow text-forest">Get started</span>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Ready to dispose of corporate e-waste?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Speak to our enterprise desk. We'll respond with a transparent, line-item
          proposal within one business day.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/contact"
            hash="quote"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-forest px-7 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90 sm:w-auto"
          >
            Request Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            hash="inspection"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            <Calendar className="h-4 w-4 text-forest" /> Schedule Inspection
          </Link>
          <a
            href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%27d%20like%20a%20corporate%20e-waste%20quote.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#25D366]/90 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
        <p className="mt-8 text-xs text-white/50">
          Or call us directly:{" "}
          <a href={`tel:${PHONE_TEL}`} className="font-semibold text-white hover:text-forest">
            +91 98801 12263
          </a>
        </p>
      </div>
    </section>
  );
}
