import { ArrowRight, Upload, Calendar } from "lucide-react";
import { industries, assets } from "@/lib/site-data";

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className = "", ...rest } = props;
  return (
    <input
      {...rest}
      className={
        "h-12 rounded-md border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 focus:border-forest focus:outline-none " +
        className
      }
    />
  );
}
function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const { className = "", children, ...rest } = props;
  return (
    <select
      {...rest}
      className={
        "h-12 rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white focus:border-forest focus:outline-none " +
        className
      }
    >
      {children}
    </select>
  );
}

export function QuoteForm() {
  return (
    <div id="quote">
      <span className="eyebrow text-forest">Corporate quote request</span>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-4xl">
        Get a transparent enterprise quote in 48 hours.
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-white/70">
        Share your retirement scope and our enterprise team will respond with a formal,
        line-item proposal — no obligation, full NDA.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks — our enterprise team will reach out within 1 business day.");
        }}
        className="mt-8 grid gap-3 sm:grid-cols-2"
      >
        <Input name="name" placeholder="Full name *" required />
        <Input name="company" placeholder="Company name *" required />
        <Input name="designation" placeholder="Designation" />
        <Input name="email" type="email" placeholder="Business email *" required />
        <Input name="phone" type="tel" placeholder="Phone number *" required />
        <Input name="city" placeholder="City" />
        <Select name="industry">
          <option value="">Industry</option>
          {industries.map((i) => (
            <option key={i.name} value={i.name}>
              {i.name}
            </option>
          ))}
        </Select>
        <Select name="asset">
          <option value="">Asset category</option>
          {assets.map((a) => (
            <option key={a.name} value={a.name}>
              {a.name}
            </option>
          ))}
        </Select>
        <Input name="qty" type="number" placeholder="Estimated quantity" />
        <Input name="date" type="date" placeholder="Preferred collection date" />
        <label className="sm:col-span-2 flex h-12 cursor-pointer items-center gap-3 rounded-md border border-dashed border-white/20 bg-white/5 px-4 text-sm text-white/60 hover:border-forest/50">
          <Upload className="h-4 w-4 text-forest" />
          Upload asset images (optional)
          <input type="file" multiple className="hidden" />
        </label>
        <textarea
          name="notes"
          rows={3}
          placeholder="Additional notes"
          className="sm:col-span-2 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-forest focus:outline-none"
        />
        <button
          type="submit"
          className="sm:col-span-2 mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-forest text-sm font-semibold text-forest-foreground transition-colors hover:bg-forest/90"
        >
          Request Corporate Quote <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

export function InspectionForm() {
  return (
    <div id="inspection" className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
      <span className="eyebrow text-forest">Site inspection booking</span>
      <h3 className="font-display mt-3 text-2xl font-bold md:text-3xl">
        Schedule a free on-site inventory assessment.
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/70">
        For orders over 100 units we visit your facility, audit inventory, and provide a
        formal valuation — usually within 5 working days.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Inspection request received. We'll confirm within 1 business day.");
        }}
        className="mt-7 grid gap-3 sm:grid-cols-2"
      >
        <Input name="name" placeholder="Name *" required />
        <Input name="company" placeholder="Company *" required />
        <Input name="phone" type="tel" placeholder="Phone *" required />
        <Input name="email" type="email" placeholder="Email *" required />
        <textarea
          name="address"
          rows={2}
          placeholder="Facility address *"
          required
          className="sm:col-span-2 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-forest focus:outline-none"
        />
        <Input name="visit" type="date" placeholder="Preferred visit date" />
        <Select name="atype">
          <option value="">Asset type</option>
          {assets.slice(0, 6).map((a) => (
            <option key={a.name} value={a.name}>
              {a.name}
            </option>
          ))}
        </Select>
        <Input name="volume" placeholder="Estimated volume (units / kg)" className="sm:col-span-2" />
        <button
          type="submit"
          className="sm:col-span-2 mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          <Calendar className="h-4 w-4 text-forest" />
          Schedule Inspection
        </button>
      </form>
    </div>
  );
}
