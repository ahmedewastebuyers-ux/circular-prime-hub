import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FileText, Receipt, ClipboardList, PackageCheck, Briefcase } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyActions } from "@/components/site/StickyActions";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { processSteps } from "@/lib/site-data";

export const Route = createFileRoute("/compliance")({
  head: () => ({
    meta: [
      { title: "Process & Documentation — E-Waste Buyers" },
      { name: "description", content: "How we buy corporate e-waste and retired IT assets — from inquiry and valuation to pickup, handover documentation and GST invoicing." },
      { property: "og:title", content: "Process & Documentation — E-Waste Buyers" },
      { property: "og:description", content: "Transparent process and complete purchase documentation for every enterprise pickup." },
    ],
    links: [{ rel: "canonical", href: "/compliance" }],
  }),
  component: ProcessPage,
});

const docs = [
  { icon: Receipt, title: "GST Invoices", desc: "Tax-compliant GST invoices issued for every buyback transaction." },
  { icon: ClipboardList, title: "Asset Collection Records", desc: "Serialised, line-item listing of every asset collected from your site." },
  { icon: PackageCheck, title: "Material Handover Documentation", desc: "Signed handover sheets and pickup acknowledgements at the time of collection." },
  { icon: FileText, title: "Purchase Documentation", desc: "Complete purchase paperwork — quote, PO acknowledgement, dispatch note." },
  { icon: Briefcase, title: "Corporate Procurement Support", desc: "Vendor onboarding, PO-based engagements and recurring buyback contracts." },
];

function ProcessPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Process & documentation"
          title="A transparent, documented buyback process."
          subtitle="From first inquiry to final payment — every step is structured, traceable and supported by complete purchase documentation."
        />
        <section className="section-y">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((s) => (
                <div
                  key={s.code}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-7"
                >
                  <span className="font-display grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-forest/10 text-sm font-bold text-forest">
                    {s.code}
                  </span>
                  <div className="min-w-0 pt-1">
                    <div className="font-display text-base font-bold text-charcoal">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <div className="mx-auto max-w-2xl text-center">
                <span className="eyebrow">Documentation we provide</span>
                <h2 className="font-display mt-3 text-2xl font-bold text-charcoal md:text-3xl">
                  Every pickup. Every asset. Fully documented.
                </h2>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {docs.map((d) => (
                  <div key={d.title} className="rounded-2xl border border-border bg-card p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-forest/10 text-forest">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display mt-5 text-base font-bold text-charcoal">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 text-center">
              <Link
                to="/contact"
                hash="quote"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-7 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
              >
                Request Buyback Quote <ArrowRight className="h-4 w-4" />
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
