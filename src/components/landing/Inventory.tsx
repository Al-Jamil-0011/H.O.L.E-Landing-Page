import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ScanLineIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { StatusChip } from "./StatusChip";
import { CountUp } from "./CountUp";
import { inventoryCategories, inventoryMovement } from "../../data/landing";

const INVENTORY_IMAGE = "/7271d6c1-2924-4537-abee-61dc7472eb19.jpg";

export function Inventory() {
  const [activeId, setActiveId] = useState(inventoryCategories[0].id);
  const category = inventoryCategories.find((c) => c.id === activeId) ?? inventoryCategories[0];
  const stats = [
    { label: "Available", value: category.available, primary: true },
    { label: "Assigned", value: category.assigned },
    { label: "In movement", value: category.moving }];


  return (
    <section aria-labelledby="inventory-title" className="bg-canvas py-28 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          id="inventory-title"
          title="Know what you have. Know where it is."
          description="Implants, trays and bio products tracked by serial and lot, from warehouse shelf to operating room."
          className="max-w-5xl"
          titleClassName="whitespace-normal md:whitespace-nowrap"
          descriptionClassName="whitespace-normal lg:whitespace-nowrap max-w-5xl"
        />


        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <figure className="relative h-full min-h-[420px] overflow-hidden rounded-3xl">
              <img src={INVENTORY_IMAGE} alt="Sterile surgical trays and implant kits organized on hospital supply shelving" className="absolute inset-0 h-full w-full object-cover" />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/80 bg-white/85 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs text-ink-subtle">T-112</p>
                  <StatusChip label="Checked in" tone="success" />
                </div>
                <p className="mt-1 font-semibold text-ink">Spinal Fusion Tray</p>
                <p className="text-xs text-ink-muted">Sterile processing complete · 42 instruments</p>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-8">
            <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
                <div role="tablist" aria-label="Inventory categories" className="inline-flex rounded-xl bg-canvas p-1 ring-1 ring-line">
                  {inventoryCategories.map((c) =>
                    <button
                      key={c.id}
                      role="tab"
                      aria-selected={c.id === activeId}
                      onClick={() => setActiveId(c.id)}
                      className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-semibold transition-[background-color,color] duration-150 ${c.id === activeId ? "bg-surface text-ink shadow-card" : "text-ink-muted hover:text-ink"}`
                      }>

                      {c.label}
                    </button>
                  )}
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-ink-muted">
                  <ScanLineIcon className="h-4 w-4 text-brand-ink" aria-hidden /> Serial & lot tracking
                </span>
              </div>

              <div className="grid grid-cols-3 divide-x divide-line border-b border-line">
                {stats.map((s) =>
                  <div key={s.label} className="px-5 py-5 sm:px-6">
                    <p className="text-xs text-ink-muted">{s.label}</p>
                    <p className={`mt-1 font-display font-extrabold tracking-tight ${s.primary ? "text-3xl text-ink sm:text-4xl" : "text-2xl text-ink-muted"}`}>
                      <CountUp key={`${category.id}-${s.label}`} value={s.value} />
                    </p>
                  </div>
                )}
              </div>

              <AnimatePresence mode="wait">
                <motion.ul
                  key={category.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="divide-y divide-line">

                  {category.items.map((item) =>
                    <li key={item.serial} className="grid grid-cols-[1fr_auto] items-center gap-3 px-5 py-3.5 transition-colors duration-150 hover:bg-canvas sm:grid-cols-[1.4fr_1fr_1fr_auto] sm:px-6">
                      <span className="text-sm font-semibold text-ink">{item.name}</span>
                      <span className="hidden font-mono text-xs text-ink-muted sm:block">{item.serial}</span>
                      <span className="hidden text-sm text-ink-muted sm:block">{item.location}</span>
                      <StatusChip label={item.status} tone={item.tone} />
                    </li>
                  )}
                </motion.ul>
              </AnimatePresence>

              <div className="border-t border-line bg-canvas px-5 py-5 sm:px-6">
                <p className="text-xs font-semibold text-ink">
                  Movement history · <span className="font-mono font-medium text-ink-muted">T-112</span>
                </p>
                <ol className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {inventoryMovement.map((m, i) =>
                    <li key={m.step} className="relative">
                      <span className={`block h-1 rounded-full ${i < 3 ? "bg-brand" : "bg-line"}`} aria-hidden />
                      <p className="mt-2 text-sm font-semibold text-ink">{m.step}</p>
                      <p className="text-xs text-ink-muted">{m.place}</p>
                      <p className="text-[11px] text-ink-subtle">{m.time}</p>
                    </li>
                  )}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}