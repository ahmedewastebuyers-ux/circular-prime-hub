import { useQuery } from "@tanstack/react-query";
import {
  Users, Monitor, Recycle, MapPin, Briefcase, Building2, Clock, CheckCircle,
  Truck, Server, HardDrive, Cpu, Award, Leaf, Star, Package, Factory, Globe2,
  ShieldCheck, Gauge, type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/site/Section";
import { statsQuery } from "@/lib/cms/queries";
import { Skeleton } from "@/components/ui/skeleton";

const ICONS: Record<string, LucideIcon> = {
  users: Users, monitor: Monitor, recycle: Recycle, "map-pin": MapPin,
  briefcase: Briefcase, "building-2": Building2, building: Building2,
  clock: Clock, "check-circle": CheckCircle, check: CheckCircle,
  truck: Truck, server: Server, "hard-drive": HardDrive, cpu: Cpu,
  award: Award, leaf: Leaf, star: Star, package: Package,
  factory: Factory, globe: Globe2, "globe-2": Globe2,
  shield: ShieldCheck, "shield-check": ShieldCheck, gauge: Gauge,
};

const FALLBACK_ICONS: LucideIcon[] = [Users, Monitor, Recycle, MapPin, Briefcase, Building2, Clock, CheckCircle];

export function StatsSection() {
  const { data, isLoading } = useQuery(statsQuery);
  return (
    <Section eyebrow="By the numbers" title="A track record enterprise procurement teams rely on.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading && !data
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-7">
                <Skeleton className="h-11 w-11 rounded-lg" />
                <Skeleton className="mt-6 h-8 w-24" />
                <Skeleton className="mt-2 h-4 w-32" />
              </div>
            ))
          : (data ?? []).map((s, i) => {
              const Icon = ICONS[s.icon] ?? FALLBACK_ICONS[i % FALLBACK_ICONS.length];
              return (
                <div
                  key={`${s.title}-${i}`}
                  className="flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-forest/40 hover:shadow-lg hover:shadow-forest/5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-forest/10 text-forest">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="font-display mt-6 text-3xl font-extrabold text-charcoal md:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-sm font-medium text-muted-foreground">{s.title}</div>
                </div>
              );
            })}
      </div>
    </Section>
  );
}
