import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Compass, Users, Building2 } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyActions } from "@/components/site/StickyActions";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { siteImages } from "@/lib/site-data";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — E-Waste Buyers" },
      { name: "description", content: "India's trusted corporate asset recovery and e-waste management partner. Our story, mission, leadership and operations." },
      { property: "og:title", content: "About — E-Waste Buyers" },
      { property: "og:description", content: "A premium B2B partner for IT asset recovery and certified e-waste disposal." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  { icon: Target, title: "Mission", desc: "Recover maximum value from retired enterprise technology while guaranteeing compliance, security and chain of custody." },
  { icon: Compass, title: "Vision", desc: "Be India's most trusted corporate asset recovery partner — built for audit-grade B2B engagements, not scrap." },
  { icon: Users, title: "Leadership", desc: "Founded by industry veterans with 15+ years across enterprise IT, logistics and environmental compliance." },
  { icon: Building2, title: "Operations", desc: "Pan-India footprint across 28 states, authorised facilities, GPS-tracked logistics and dedicated enterprise account managers." },
];

function AboutPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About us"
          title="Corporate asset recovery, not scrap."
          subtitle="Built for India's enterprises that demand transparency, security and certified compliance from every disposal."
          bgImage={siteImages.about.src}
          bgAlt={siteImages.about.alt}
        />
        <section className="section-y">
          <div className="container-px mx-auto max-w-5xl">
            <div className="mb-14 overflow-hidden rounded-2xl border border-border">
              <img
                src={siteImages.about.src}
                alt={siteImages.about.alt}
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                className="h-72 w-full object-cover md:h-96"
              />
            </div>

            <div className="prose-lg space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                E-Waste Buyers was founded to professionalise corporate e-waste in India.
                For too long, enterprises have handed retired technology to informal scrap
                channels — losing recoverable value, creating data-security risk and
                generating zero compliance documentation.
              </p>
              <p>
                We built the opposite: a B2B-first operation with serial-level asset
                grading, bulk buyback of servers, networking and laptops, insured
                pan-India logistics and audit-grade reporting. Today we serve
                enterprises across IT, BFSI, healthcare, manufacturing, telecom
                and government — from single-site refreshes to multi-state data
                center sunsets.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {pillars.map((p) => (
                <div key={p.title} className="rounded-2xl border border-border bg-card p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-lg bg-forest/10 text-forest">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <h2 className="font-display mt-6 text-lg font-bold text-charcoal">{p.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/contact"
                hash="quote"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-7 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
              >
                Talk to Our Team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyActions />
    </PageShell>
  );
}
