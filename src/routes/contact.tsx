import { createFileRoute } from "@tanstack/react-router";
import { PhoneCall, Mail, MapPin, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { StickyActions } from "@/components/site/StickyActions";
import { PageHero, PageShell } from "@/components/site/PageHero";
import { QuoteForm, InspectionForm } from "@/components/site/QuoteForm";
import { PHONE, PHONE_TEL, EMAIL, WHATSAPP, siteImages } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — E-Waste Buyers" },
      { name: "description", content: "Request a corporate quote, schedule a site inspection, or reach our enterprise desk for IT asset recovery and e-waste disposal." },
      { property: "og:title", content: "Contact — E-Waste Buyers" },
      { property: "og:description", content: "Speak to our enterprise desk. Response within one business day." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Speak to our enterprise desk."
          subtitle="Request a formal quote, schedule a free site inspection, or reach us directly. We respond within one business day."
          bgImage={siteImages.contact.src}
          bgAlt={siteImages.contact.alt}
        />


        <section className="section-y">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-3">
              <ContactCard icon={PhoneCall} title="Sales hotline" primary={PHONE} href={`tel:${PHONE_TEL}`} sub="Mon–Sat · 9am–7pm IST" />
              <ContactCard icon={Mail} title="Enterprise email" primary={EMAIL} href={`mailto:${EMAIL}`} sub="Response within 4 hours" />
              <ContactCard icon={MessageCircle} title="WhatsApp" primary="Chat with our team" href={`https://wa.me/${WHATSAPP}?text=Hi%2C%20I%27d%20like%20a%20corporate%20e-waste%20quote.`} sub="Quickest response" />
            </div>
          </div>
        </section>

        <section className="section-y bg-charcoal text-white">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid gap-14 lg:grid-cols-2">
              <QuoteForm />
              <InspectionForm />
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-px mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
              <div>
                <span className="eyebrow">Visit us</span>
                <h2 className="font-display mt-3 text-2xl font-bold text-charcoal md:text-3xl">
                  Corporate office
                </h2>
                <p className="mt-5 flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                  Plot 42, Industrial Area Phase II, Gurugram, Haryana 122016
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <iframe
                  title="E-Waste Buyers office location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.0%2C28.45%2C77.12%2C28.52&layer=mapnik&marker=28.4595%2C77.0266"
                  className="h-80 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <StickyActions />
    </PageShell>
  );
}

function ContactCard({
  icon: Icon,
  title,
  primary,
  sub,
  href,
}: { icon: typeof PhoneCall; title: string; primary: string; sub: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-forest/40 hover:shadow-lg hover:shadow-forest/5"
    >
      <span className="grid h-12 w-12 place-items-center rounded-lg bg-forest text-forest-foreground">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="font-display mt-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">{title}</h3>
      <p className="font-display mt-2 text-lg font-bold text-charcoal transition-colors group-hover:text-forest">{primary}</p>
      <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
    </a>
  );
}
