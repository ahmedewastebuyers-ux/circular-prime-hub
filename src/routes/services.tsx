import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyActions } from "@/components/site/StickyActions";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Corporate Services — E-Waste Buyers" },
      { name: "description", content: "IT asset recovery, secure data destruction, reverse logistics, data center decommissioning, ESG support, enterprise buyback and compliance reporting." },
      { property: "og:title", content: "Services — E-Waste Buyers" },
      { property: "og:description", content: "End-to-end enterprise IT lifecycle retirement services." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Services"
          title="End-to-end enterprise asset retirement."
          subtitle="Eight integrated services, one accountable partner — from valuation through certified disposal."
          bgImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=70"
          bgAlt="Technician decommissioning enterprise server equipment"
        />
        <section className="section-y">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-forest/40 hover:shadow-lg hover:shadow-forest/5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                    <img
                      src={s.image}
                      alt={s.alt}
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
                      <s.icon className="h-5 w-5" />
                    </span>
                    <h2 className="font-display mt-5 text-lg font-bold text-charcoal">{s.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>


            <div className="mt-16 rounded-3xl border border-border bg-charcoal p-10 text-center text-white md:p-16">
              <h3 className="font-display text-2xl font-bold md:text-3xl">
                Need a tailored programme?
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-white/70">
                Multi-site refresh, data center sunset, or recurring lifecycle contract — speak to our enterprise desk.
              </p>
              <Link
                to="/contact"
                hash="quote"
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-7 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
              >
                Request Quote <ArrowRight className="h-4 w-4" />
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
