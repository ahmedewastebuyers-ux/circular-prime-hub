import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyActions } from "@/components/site/StickyActions";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { caseStudiesQuery } from "@/lib/cms/queries";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — E-Waste Buyers" },
      { name: "description", content: "Enterprise IT equipment buyback and e-waste collection case studies across data centers, manufacturing, BFSI, telecom, healthcare and government." },
      { property: "og:title", content: "Case Studies — E-Waste Buyers" },
      { property: "og:description", content: "Real enterprise engagements with measurable recovery value and on-time delivery." },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  const { data, isLoading } = useQuery(caseStudiesQuery);
  const items = data ?? [];
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Case studies"
          title="Enterprises that trust our process."
          subtitle="Real engagements. Real numbers. On-time delivery."
          bgImage="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=70"
          bgAlt="Enterprise data center server racks"
        />
        <section className="section-y">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-3">
              {isLoading && !data
                ? Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="overflow-hidden rounded-2xl border border-border bg-card">
                      <Skeleton className="h-44 w-full rounded-none" />
                      <div className="p-7"><Skeleton className="h-5 w-3/4" /><Skeleton className="mt-3 h-16 w-full" /></div>
                    </div>
                  ))
                : items.map((c, idx) => (
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
                        <p className="mt-2 text-sm font-medium text-forest">{c.material}</p>
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
