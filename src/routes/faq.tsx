import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyActions } from "@/components/site/StickyActions";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — E-Waste Buyers" },
      { name: "description", content: "Answers to common questions about corporate e-waste collection, IT equipment buyback, bulk laptop and server procurement, logistics and purchase documentation." },
      { property: "og:title", content: "FAQ — E-Waste Buyers" },
      { property: "og:description", content: "Everything procurement and IT teams want to know about our buyback process." },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Frequently asked"
          title="Answers for procurement, IT and compliance teams."
        />
        <section className="section-y">
          <div className="container-px mx-auto max-w-3xl">
            <div className="divide-y divide-border rounded-2xl border border-border bg-card">
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} />
              ))}
            </div>

            <div className="mt-14 text-center">
              <Link
                to="/contact"
                hash="quote"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest px-7 text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
              >
                Still have questions? Contact Us <ArrowRight className="h-4 w-4" />
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
