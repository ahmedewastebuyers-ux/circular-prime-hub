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
import { StatsSection } from "@/components/site/StatsSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { ClientLogosSection } from "@/components/site/ClientLogosSection";
import { industries, services, why, faqs, siteImages, BUSINESS_STREET_ADDRESS, BUSINESS_LOCALITY, BUSINESS_REGION, BUSINESS_POSTAL_CODE, BUSINESS_COUNTRY } from "@/lib/site-data";
import { useSettings } from "@/hooks/useSettings";
import { useQuery } from "@tanstack/react-query";
import { caseStudiesQuery } from "@/lib/cms/queries";
import { Skeleton } from "@/components/ui/skeleton";
import heroVideoAsset from "@/assets/hero-datacenter-v2.mp4.asset.json";
import heroPoster from "@/assets/hero-datacenter-poster.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "E-Waste Buyers — Bulk IT Asset Recovery & Corporate E-Waste Procurement in India" },
      {
        name: "description",
        content:
          "We buy retired IT assets, servers, networking equipment, laptops, industrial electronics and corporate e-waste in bulk. Pan-India IT equipment buyback and electronics procurement.",
      },
      { property: "og:title", content: "E-Waste Buyers — Corporate IT Asset Recovery & Procurement" },
      {
        property: "og:description",
        content:
          "Bulk buyback of corporate IT assets, servers, networking gear, laptops and industrial electronics across India.",
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
          "@type": "LocalBusiness",
          name: "E-Waste Buyers",
          url: "https://ewastebuyers.com",
          description:
            "Corporate e-waste disposal and IT asset recovery company in India.",
          address: {
            "@type": "PostalAddress",
            streetAddress: BUSINESS_STREET_ADDRESS,
            addressLocality: BUSINESS_LOCALITY,
            addressRegion: BUSINESS_REGION,
            postalCode: BUSINESS_POSTAL_CODE,
            addressCountry: BUSINESS_COUNTRY,
          },
          areaServed: "IN",
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
        <ClientLogosSection />
        <StatsSection />
        <IndustriesPreview />
        <ServicesPreview />
        <WhyUs />
        <CasesPreview />
        <TestimonialsSection />
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
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.38_0.07_160_/_0.35),transparent_60%)]" />
      </div>

      <div className="container-px mx-auto max-w-7xl pb-24 md:pb-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-forest" />
              Bulk IT Asset Recovery & E-Waste Procurement
            </span>

            <h1 className="font-display mt-8 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-6xl xl:text-7xl">
              We Buy Retired IT Assets{" "}
              <span className="text-forest">&</span> Corporate E-Waste
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              Bulk buyback of servers, networking equipment, laptops, industrial
              electronics and corporate e-waste — with transparent valuation and
              pan-India pickup.
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

          <HeroVideo />
        </div>
      </div>
    </section>
  );
}

function HeroVideo() {
  const videoUrl = heroVideoAsset.url;
  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal shadow-2xl shadow-black/40 aspect-[4/3] sm:aspect-video lg:aspect-[4/3]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
          aria-label="Professional data center server racks and enterprise IT infrastructure"
          className="h-full w-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
          <img
            src={heroPoster}
            alt="Enterprise data center server racks"
            className="h-full w-full object-cover"
          />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-charcoal/40 via-transparent to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[18rem] animate-fade-in">
          <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-charcoal/70 px-4 py-3 backdrop-blur-md">
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest/20 text-forest">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.5 7.566a1 1 0 0 1-1.42.006L3.29 9.796a1 1 0 1 1 1.42-1.408l3.787 3.82 6.793-6.852a1 1 0 0 1 1.414-.066Z" clipRule="evenodd" />
              </svg>
            </span>
            <div className="min-w-0">
              <div className="text-xs font-bold leading-tight text-white">
                Corporate IT Asset Recovery
              </div>
              <div className="mt-1 text-[10px] leading-snug text-white/70">
                Professional Collection • Secure Logistics • Enterprise E-Waste Solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      title="The operational standards enterprise procurement teams expect."
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

/* ---------- Case Studies (3, from CMS) ---------- */
function CasesPreview() {
  const { data, isLoading } = useQuery(caseStudiesQuery);
  const three = (data ?? []).slice(0, 3);
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
          {isLoading && !data
            ? Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <Skeleton className="h-44 w-full rounded-none" />
                  <div className="p-7"><Skeleton className="h-5 w-3/4" /><Skeleton className="mt-3 h-16 w-full" /></div>
                </div>
              ))
            : three.map((c, idx) => (
                <article
                  key={`${c.company}-${idx}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-forest/5"
                >
                  <div className="relative h-44 overflow-hidden bg-charcoal">
                    {c.image && (
                      <img
                        src={c.image}
                        alt={`${c.company} — ${c.material}`}
                        width={800}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
                    <div className="absolute inset-x-6 bottom-6">
                      <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur">
                        {c.industry}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-lg font-bold leading-snug text-charcoal">
                      {c.company}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                    <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
                      <div>
                        <div className="font-display text-base font-bold text-forest">{c.quantity}</div>
                        <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">Quantity</div>
                      </div>
                      <div>
                        <div className="font-display text-base font-bold text-forest">{c.location}</div>
                        <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">Location</div>
                      </div>
                      <div>
                        <div className="font-display text-base font-bold text-forest">{c.date}</div>
                        <div className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">Date</div>
                      </div>
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
  const s = useSettings();
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
            href={`https://wa.me/${s.whatsapp}?text=Hi%2C%20I%27d%20like%20a%20corporate%20e-waste%20quote.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#25D366]/90 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
        <p className="mt-8 text-xs text-white/50">
          Or call us directly:{" "}
          <a href={`tel:${s.phoneTel}`} className="font-semibold text-white hover:text-forest">
            {s.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
