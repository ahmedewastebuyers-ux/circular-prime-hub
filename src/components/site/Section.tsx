import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  align = "center",
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <section id={id} className={`section-y ${className}`}>
      <div className="container-px mx-auto max-w-7xl">
        <div
          className={
            align === "center"
              ? "mx-auto max-w-3xl text-center"
              : "max-w-3xl"
          }
        >
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-charcoal md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-16">{children}</div>
      </div>
    </section>
  );
}
