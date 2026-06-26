import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyActions } from "@/components/site/StickyActions";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { industries } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve — E-Waste Buyers" },
      { name: "description", content: "Industry-specific IT equipment buyback and corporate e-waste collection for IT, data centers, manufacturing, BFSI, healthcare, telecom, government, education and OEMs." },
      { property: "og:title", content: "Industries — E-Waste Buyers" },
      { property: "og:description", content: "Bulk corporate e-waste collection and IT asset recovery across enterprise sectors." },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Industries"
          title="Industry-specific solutions."
          subtitle="Compliance, security and recovery tuned to the operating constraints of your sector."
          bgImage="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=70"
          bgAlt="Enterprise server racks and corporate IT infrastructure"
        />
        <section className="section-y">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((i) => (
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
                  <div className="flex flex-1 flex-col p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-forest/10 text-forest">
                      <i.icon className="h-5 w-5" />
                    </span>
                    <h2 className="font-display mt-5 text-lg font-bold text-charcoal">{i.name}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
                    <p className="mt-4 text-xs font-semibold text-forest">{i.ex}</p>
                  </div>
                </div>
              ))}
            </div>


            <div className="mt-16 text-center">
              <Link
                to="/contact"
                hash="quote"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-7 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
              >
                Discuss Your Requirement <ArrowRight className="h-4 w-4" />
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
