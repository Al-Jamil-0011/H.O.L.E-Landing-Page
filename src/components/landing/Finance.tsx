import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { commissionPipeline, financeMetrics, financeSeries } from "../../data/landing";

export function Finance() {
  return (
    <section id="finance" aria-labelledby="finance-title" className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          id="finance-title"
          title="Turn operational data into financial clarity."
          description="Revenue, commission, vendor payments, expenses and shipping costs, each traced back to the sale, PO or shipment behind it." />
        

        <Reveal className="mt-14">
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="rounded-3xl border border-line bg-surface p-6 shadow-card sm:p-8 lg:col-span-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-ink-muted">Sales revenue · 6 months</p>
                  <p className="mt-1 font-display text-5xl font-extrabold tracking-tight text-ink">
                    <CountUp value={2258} prefix="$" suffix="k" />
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs text-ink-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-brand" aria-hidden /> Revenue
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-0.5 w-3 bg-ink" aria-hidden /> Commission
                  </span>
                </div>
              </div>
              <div className="mt-6 h-[260px]" role="img" aria-label="Illustrative chart of monthly revenue rising from $312k in April to $452k in September">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={financeSeries} margin={{ top: 10, right: 8, left: -14, bottom: 0 }}>
                    <CartesianGrid stroke="#E3E8E9" vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: "#838E90", fontSize: 12 }} />
                    <YAxis tickLine={false} axisLine={false} tick={{ fill: "#838E90", fontSize: 12 }} tickFormatter={(v: number) => `$${v}k`} />
                    <Tooltip
                      cursor={{ stroke: "#BDEFF5" }}
                      contentStyle={{ borderRadius: 12, border: "1px solid #E3E8E9", fontSize: 12 }}
                      formatter={(v: number) => `$${v}k`} />
                    
                    <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#00C5DA" strokeWidth={2.5} fill="#00C5DA" fillOpacity={0.12} />
                    <Area type="monotone" dataKey="commission" name="Commission" stroke="#0E1718" strokeWidth={1.5} strokeDasharray="4 4" fill="transparent" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
              {financeMetrics.map((m) =>
              <li key={m.label} className="flex flex-col rounded-2xl border border-line bg-surface p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-ink-muted">{m.label}</p>
                    <span className="text-xs font-semibold text-ink-muted">{m.change}</span>
                  </div>
                  <p className="mt-1 font-display text-2xl font-bold tracking-tight text-ink">
                    <CountUp value={m.value} prefix="$" />
                  </p>
                  <div className="mt-3 h-1 rounded-full bg-canvas">
                    <div className="h-full rounded-full bg-brand" style={{ width: `${m.share}%` }} />
                  </div>
                </li>
              )}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-4">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
            {commissionPipeline.map((c, i) =>
            <div key={c.label} className="bg-surface p-6">
                <p className="text-sm text-ink-muted">Commission · {c.label}</p>
                <div className="mt-2 flex items-baseline gap-3">
                  <span className={`font-display text-3xl font-extrabold ${i === 2 ? "text-brand-ink" : "text-ink"}`}>{c.count}</span>
                  <span className="text-sm text-ink-subtle">{c.amount}</span>
                </div>
              </div>
            )}
          </div>
          <p className="mt-4 text-center text-xs text-ink-subtle">All figures shown are illustrative.</p>
        </Reveal>
      </div>
    </section>);

}