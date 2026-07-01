import { useQuery } from "@tanstack/react-query";
import { Star, Quote } from "lucide-react";
import { Section } from "@/components/site/Section";
import { testimonialsQuery } from "@/lib/cms/queries";
import { Skeleton } from "@/components/ui/skeleton";

export function TestimonialsSection() {
  const { data, isLoading } = useQuery(testimonialsQuery);
  const items = data ?? [];
  return (
    <Section eyebrow="What clients say" title="Trusted by enterprise procurement and IT teams.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {isLoading && !data
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-7">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="mt-4 h-24 w-full" />
                <Skeleton className="mt-6 h-4 w-32" />
                <Skeleton className="mt-2 h-3 w-40" />
              </div>
            ))
          : items.map((t, i) => (
              <figure
                key={`${t.name}-${i}`}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-forest/40 hover:shadow-lg hover:shadow-forest/5"
              >
                <div className="flex items-center justify-between">
                  {t.rating > 0 ? (
                    <div className="flex items-center gap-0.5" aria-label={`Rated ${t.rating} of 5`}>
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star
                          key={idx}
                          className={
                            "h-4 w-4 " +
                            (idx < t.rating ? "fill-forest text-forest" : "text-border")
                          }
                        />
                      ))}
                    </div>
                  ) : <span />}
                  <Quote className="h-6 w-6 text-forest/40" />
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-charcoal/80">
                  "{t.review}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <div className="font-display text-sm font-bold text-charcoal">{t.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {[t.designation, t.company].filter(Boolean).join(" · ")}
                  </div>
                </figcaption>
              </figure>
            ))}
      </div>
    </Section>
  );
}
