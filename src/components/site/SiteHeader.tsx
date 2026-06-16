import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Leaf, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Industries", href: "#industries" },
  { label: "Assets", href: "#assets" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Compliance", href: "#compliance" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-forest text-forest-foreground">
            <Leaf className="h-4 w-4" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold text-charcoal">VertGreen</span>
            <span className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Asset Recovery
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-charcoal/80 transition-colors hover:text-forest"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+919880112263"
            className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal"
          >
            <Phone className="h-4 w-4 text-forest" />
            +91 98801 12263
          </a>
          <a
            href="#quote"
            className="inline-flex h-10 items-center justify-center rounded-md bg-forest px-5 text-sm font-semibold text-forest-foreground shadow-sm transition-all hover:bg-forest/90 hover:shadow"
          >
            Request Quote
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="grid h-10 w-10 place-items-center rounded-md text-charcoal lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-charcoal hover:bg-muted"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-forest text-sm font-semibold text-forest-foreground"
            >
              Request Corporate Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
