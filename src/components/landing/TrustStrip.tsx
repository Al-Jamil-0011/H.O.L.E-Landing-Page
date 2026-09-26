import { Reveal } from "./Reveal";
import { modules } from "../../data/landing";

const stats = [
  { value: "$48M+", label: "Surgical Case Volume", note: "managed on platform" },
  { value: "99.8%", label: "On-Time OR Delivery", note: "across all territories" },
  { value: "240+", label: "Field Sales Reps", note: "active daily on mobile" },
  { value: "0 min", label: "Manual Reconciliation", note: "instant ledger closing" },
];

const partners = [
  "St. Mary's Health",
  "Baptist Surgical Network",
  "Mercy Orthopedics",
  "Northside Regional",
  "Memorial Spine Center",
];

export function TrustStrip() {
  return (
    <section aria-label="Operational scale and trust" className="border-y border-line bg-surface py-14 sm:py-16 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Healthcare Network Logos / Social Proof */}
        <Reveal>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-subtle">
              Trusted by surgical distributors, device teams, and hospital systems nationwide
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold tracking-tight text-ink-muted/80">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-lg px-3 py-1 font-display tracking-tight text-ink-muted transition-colors hover:text-ink hover:bg-surface-muted"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 4 Clean Impact Metrics */}
        <Reveal className="mt-12">
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-line bg-canvas p-6 sm:grid-cols-4 sm:p-8">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center sm:text-left ${
                  i > 0 ? "sm:border-l sm:border-line sm:pl-6 lg:pl-8" : ""
                }`}
              >
                <p className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-ink">{s.label}</p>
                <p className="text-xs text-ink-subtle">{s.note}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Core Capabilities Bar */}
        <Reveal className="mt-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {modules.map(({ label, note, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-line bg-surface p-3.5 shadow-subtle transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-card"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-ink dark:bg-brand/15 dark:text-brand">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-xs font-bold text-ink">{label}</p>
                  <p className="truncate text-[11px] text-ink-subtle">{note}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}