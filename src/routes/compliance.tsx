import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, FileCheck2, Recycle, ClipboardCheck } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyActions } from "@/components/site/StickyActions";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { certs } from "@/lib/site-data";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Compliance & Certifications — E-Waste Buyers" },
      { name: "description", content: "CPCB authorised, ISO 14001 / 9001 / 27001 certified. Audit-ready documentation, serialised chain-of-custody and E-Waste Rules 2022 compliant." },
      { property: "og:title", content: "Compliance — E-Waste Buyers" },
      { property: "og:description", content: "Audit-ready by design. Recognised by every authority that matters." },
    ],
    links: [{ rel: "canonical", href: "/compliance" }],
  }),
  component: CompliancePage,
});

function CompliancePage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Compliance & certifications"
          title="Audit-ready by design."
          subtitle="Recognised by every authority that matters — for your auditors, your regulators, and your board."
        />
        <section className="section-y">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {certs.map((c) => (
                <div
                  key={c.code}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-forest text-forest-foreground">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-display text-sm font-bold text-charcoal">{c.code}</div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-3xl border border-border bg-gradient-to-br from-forest/5 via-card to-card p-10 md:p-14">
              <div className="grid gap-10 md:grid-cols-3">
                <div>
                  <FileCheck2 className="h-8 w-8 text-forest" />
                  <h3 className="font-display mt-5 text-lg font-bold text-charcoal">Government compliance</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Form-1 to Form-9, EPR credits, state pollution board filings.</p>
                </div>
                <div>
                  <Recycle className="h-8 w-8 text-forest" />
                  <h3 className="font-display mt-5 text-lg font-bold text-charcoal">Recycling certificates</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Serial-linked certificates of recycling for every asset disposed.</p>
                </div>
                <div>
                  <ClipboardCheck className="h-8 w-8 text-forest" />
                  <h3 className="font-display mt-5 text-lg font-bold text-charcoal">Chain-of-custody reports</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Serialised tracking from pickup to processing — auditable end to end.</p>
                </div>
              </div>
            </div>

            <div className="mt-14 text-center">
              <Link
                to="/contact"
                hash="quote"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-7 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
              >
                Request Documentation Sample <ArrowRight className="h-4 w-4" />
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
