import { useQuery } from "@tanstack/react-query";
import { Section } from "@/components/site/Section";
import { logosQuery } from "@/lib/cms/queries";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Building2 } from "lucide-react";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className="flex h-16 w-full flex-col items-center justify-center gap-1 rounded-md bg-muted/40 text-muted-foreground">
        <Building2 className="h-5 w-5" />
        <span className="text-[10px] font-medium">{alt}</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="h-16 w-auto max-w-full object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
    />
  );
}

export function ClientLogosSection() {
  const { data, isLoading } = useQuery(logosQuery);
  const items = data ?? [];
  return (
    <Section eyebrow="Trusted by" title="Enterprises across India partner with us.">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {isLoading && !data
          ? Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-24 w-full rounded-xl" />
            ))
          : items.map((l, i) => {
              const inner = (
                <div className="group flex h-24 items-center justify-center rounded-xl border border-border bg-card p-5 transition-all hover:border-forest/40 hover:shadow-md">
                  <LogoImage src={l.logo} alt={l.company} />
                </div>
              );
              return l.website ? (
                <a
                  key={`${l.company}-${i}`}
                  href={l.website}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${l.company}`}
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <div key={`${l.company}-${i}`}>{inner}</div>
              );
            })}
      </div>
    </Section>
  );
}
