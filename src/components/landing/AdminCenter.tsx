import { SearchIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";
import { adminKpis, adminNav, systemActivity, usersByRole } from "../../data/landing";

const maxUsers = Math.max(...usersByRole.map((u) => u.count));

export function AdminCenter() {
  return (
    <section aria-labelledby="admin-title" className="bg-canvas py-24 sm:py-32 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          id="admin-title"
          title="Complete operational visibility from one place."
          description="Users, roles, inventory, shipments, sales, finance and system activity, all in one admin control center."
        />

        <Reveal className="mt-14">
          <div
            className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card transition-colors duration-200 dark:shadow-[0_20px_50px_-20px_rgba(0,197,218,0.14)]"
            role="img"
            aria-label="Admin control center showing users by role, system activity and key operational metrics"
          >
            <div className="grid lg:grid-cols-[220px_1fr]" aria-hidden>
              {/* Admin Sidebar */}
              <aside className="hidden border-r border-line bg-surface-muted/40 p-4 lg:block">
                <Logo imgClassName="h-7 w-auto object-contain" />
                <ul className="mt-8 space-y-0.5">
                  {adminNav.map(({ label, icon: Icon }, i) => (
                    <li
                      key={label}
                      className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition-colors ${
                        i === 0
                          ? "bg-brand-soft font-semibold text-brand-ink dark:bg-brand/15 dark:text-brand"
                          : "text-ink-muted hover:bg-surface-muted hover:text-ink"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${i === 0 ? "text-brand" : ""}`} />
                      {label}
                    </li>
                  ))}
                </ul>
              </aside>

              {/* Main Admin Workspace */}
              <div className="p-5 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-display text-xl font-bold text-ink">Control center</p>
                    <p className="text-xs text-ink-muted">All territories · Live workspace</p>
                  </div>
                  <span className="hidden h-9 w-56 items-center gap-2 rounded-lg border border-line bg-canvas px-3 text-xs text-ink-muted sm:flex">
                    <SearchIcon className="h-3.5 w-3.5" /> Search users, orders, serials
                  </span>
                </div>

                {/* KPI Metrics */}
                <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {adminKpis.map((k, i) => (
                    <div
                      key={k.label}
                      className={`rounded-2xl border border-line p-4 transition-colors ${
                        i === 0
                          ? "border-brand bg-brand text-slate-950 shadow-sm"
                          : "bg-canvas"
                      }`}
                    >
                      <p className={`text-xs ${i === 0 ? "text-slate-950/80 font-medium" : "text-ink-muted"}`}>
                        {k.label}
                      </p>
                      <p className={`mt-1 font-display text-3xl font-extrabold ${i === 0 ? "text-slate-950" : "text-ink"}`}>
                        {k.value}
                      </p>
                      <p className={`mt-0.5 text-xs ${i === 0 ? "text-slate-950/75" : "text-ink-muted"}`}>
                        {k.note}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Lower Grid: Users by Role + Live Activity */}
                <div className="mt-4 grid gap-4 lg:grid-cols-5">
                  <div className="rounded-2xl border border-line bg-canvas p-5 lg:col-span-2">
                    <p className="text-sm font-semibold text-ink">Users by role</p>
                    <ul className="mt-5 space-y-3.5">
                      {usersByRole.map((u) => (
                        <li key={u.role} className="grid grid-cols-[88px_1fr_32px] items-center gap-3 text-xs">
                          <span className="text-ink-muted">{u.role}</span>
                          <span className="h-2 rounded-full bg-surface ring-1 ring-line overflow-hidden">
                            <span
                              className="block h-full rounded-full bg-brand"
                              style={{ width: `${(u.count / maxUsers) * 100}%` }}
                            />
                          </span>
                          <span className="text-right font-semibold text-ink">{u.count}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-line bg-canvas p-5 lg:col-span-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-ink">System activity</p>
                      <span className="flex items-center gap-1.5 text-[11px] font-semibold text-brand-ink dark:text-brand">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" /> Live
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2.5 font-mono text-[12px]">
                      {systemActivity.map((a) => (
                        <li key={a.time + a.text} className="flex gap-3">
                          <span className="text-ink-subtle">{a.time}</span>
                          <span className="min-w-0 truncate text-ink">
                            <span className="font-semibold text-brand-ink dark:text-brand">{a.actor}</span> {a.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}