import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyActions } from "@/components/site/StickyActions";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { cases } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — E-Waste Buyers" },
      { name: "description", content: "Enterprise e-waste and IT asset recovery case studies across data centers, manufacturing, BFSI, telecom, healthcare and government." },
      { property: "og:title", content: "Case Studies — E-Waste Buyers" },
      { property: "og:description", content: "Real enterprise engagements with measurable recovery and compliance outcomes." },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Case studies"
          title="Enterprises that trust our process."
          subtitle="Real engagements. Real numbers. Audit-clear outcomes."
          bgImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=70"
          bgAlt="Enterprise data center server racks"
        />
        <section className="section-y">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-3">
              {cases.map((c) => (
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

            <div className="mt-16 text-center">
              <Link
                to="/contact"
                hash="quote"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-7 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
              >
                Start Your Engagement <ArrowRight className="h-4 w-4" />
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
