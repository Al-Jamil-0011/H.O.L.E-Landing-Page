import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { StatusChip } from "./StatusChip";
import { features } from "../../data/landing";

export function Features() {
  const [activeId, setActiveId] = useState(features[0].id);
  const feature = features.find((f) => f.id === activeId) ?? features[0];

  return (
    <section id="features" aria-labelledby="features-title" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          id="features-title"
          title="Six modules. One operational record."
          description="Each module is built for how healthcare device teams actually work, and they all share the same data." />
        

        <Reveal className="mt-12">
          <div role="tablist" aria-label="Platform modules" className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:justify-center lg:px-0">
            {features.map(({ id, label, icon: Icon }) => {
              const active = id === activeId;
              return (
                <button
                  key={id}
                  role="tab"
                  id={`tab-${id}`}
                  aria-selected={active}
                  aria-controls={`panel-${id}`}
                  onClick={() => setActiveId(id)}
                  className={`inline-flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-[background-color,color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  active ? "bg-night text-white" : "bg-canvas text-ink-muted hover:text-ink"}`
                  }>
                  
                  <Icon className={`h-4 w-4 ${active ? "text-brand" : ""}`} aria-hidden />
                  {label}
                </button>);

            })}
          </div>
        </Reveal>

        <div className="mt-10" role="tabpanel" id={`panel-${feature.id}`} aria-labelledby={`tab-${feature.id}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="grid gap-10 rounded-3xl bg-canvas p-6 sm:p-10 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
              
              <div>
                <h3 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink">{feature.headline}</h3>
                <p className="mt-4 leading-relaxed text-ink-muted">{feature.description}</p>
                <ul className="mt-8 space-y-3">
                  {feature.bullets.map((b) =>
                  <li key={b} className="flex items-center gap-3 text-sm font-medium text-ink">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                      {b}
                    </li>
                  )}
                </ul>
              </div>

              <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
                <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
                  <p className="text-sm font-semibold text-ink">{feature.table.title}</p>
                  <div className="flex gap-1.5" aria-hidden>
                    <span className="h-7 w-20 rounded-lg bg-canvas ring-1 ring-line" />
                    <span className="h-7 w-16 rounded-lg bg-night" />
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] text-left text-[13px]">
                    <thead>
                      <tr className="text-xs text-ink-subtle">
                        {feature.table.columns.map((c) =>
                        <th key={c} scope="col" className="px-5 py-3 font-medium">
                            {c}
                          </th>
                        )}
                        <th scope="col" className="px-5 py-3 font-medium">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {feature.table.rows.map((r) =>
                      <tr key={r.cells[0]} className="transition-colors duration-150 hover:bg-canvas">
                          {r.cells.map((cell, ci) =>
                        <td key={ci} className={`whitespace-nowrap px-5 py-3.5 ${ci === 0 ? "font-mono text-xs font-medium text-ink" : "text-ink-muted"}`}>
                              {cell}
                            </td>
                        )}
                          <td className="px-5 py-3.5">
                            <StatusChip label={r.status.label} tone={r.status.tone} />
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>);

}