import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { roleChain } from "../../data/landing";
import { Check, Sparkles } from "lucide-react";

const ECOSYSTEM_IMAGE = "/platform-ecosystem.jpg";

export function Ecosystem() {
  const reduce = useReducedMotion();

  return (
    <section id="ecosystem" aria-labelledby="ecosystem-title" className="bg-canvas/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          id="ecosystem-title"
          title="Everyone works from the same connected system."
          description="Each role hands work to the next inside H.O.L.E. APP. Sales, inventory, orders, shipments and payments all update the same shared record."
        />

        {/* Bento Composition: Interactive Role Chain (Left) & 3D Connected Platform Visual (Right) */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Role Progression Flow */}
          <Reveal className="lg:col-span-5">
            <div className="rounded-3xl border border-line bg-surface p-7 sm:p-9 shadow-card">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <p className="font-display text-base font-bold text-ink">Role-to-Role Handover</p>
                  <p className="text-xs text-ink-subtle">Zero data lost between transitions</p>
                </div>
                <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-semibold text-brand-ink border border-brand-line">
                  Live Sync
                </span>
              </div>

              <ol className="relative mt-6 space-y-5">
                <span className="absolute bottom-5 left-5 top-5 w-px bg-line" aria-hidden />
                {!reduce && (
                  <motion.span
                    aria-hidden
                    className="absolute left-[18px] h-2 w-2 rounded-full bg-brand ring-4 ring-brand/20"
                    animate={{ top: ["4%", "92%"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />
                )}
                {roleChain.map(({ label, detail, icon: Icon }, idx) => (
                  <li key={label} className="relative flex items-center gap-4">
                    <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-surface ring-1 ring-line shadow-subtle">
                      <Icon className="h-4 w-4 text-brand-ink" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-ink text-sm">{label}</p>
                        <span className="text-[10px] font-mono text-ink-subtle">Step 0{idx + 1}</span>
                      </div>
                      <p className="text-xs text-ink-muted leading-relaxed">{detail}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 rounded-2xl bg-canvas p-4 text-xs text-ink-muted border border-line/60">
                <span className="font-semibold text-ink">Unified Architecture:</span> Every update from a phone or browser instantly reflects in accounting, warehouse, and hospital feeds.
              </div>
            </div>
          </Reveal>

          {/* Right Column: 3D Platform Ecosystem Illustration & Feature Highlights */}
          <Reveal className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-3 sm:p-4 shadow-card">
              {/* Illustration Frame */}
              <div className="relative overflow-hidden rounded-2xl bg-white">
                <img
                  src={ECOSYSTEM_IMAGE}
                  alt="Connected medical device ecosystem showing real-time data streams between Hospital Hub, Patient Transport, Sterile Tray and Operating Room"
                  className="h-auto w-full object-cover transition-transform duration-400 hover:scale-[1.02]"
                />

                {/* Floating pill tags on illustration */}
                <div className="absolute left-4 top-4 hidden sm:flex items-center gap-2 rounded-xl border border-white/80 bg-white/90 px-3 py-1.5 shadow-subtle backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-brand" />
                  <span className="text-xs font-semibold text-ink">Automated Interoperability</span>
                </div>

                <div className="absolute right-4 bottom-4 hidden sm:flex items-center gap-2 rounded-xl border border-white/80 bg-white/90 px-3 py-1.5 shadow-subtle backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-ink">99.99% Cloud Uptime</span>
                </div>
              </div>

              {/* Bottom Feature Badges */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 p-2">
                <div className="flex items-center gap-2.5 rounded-xl bg-canvas p-3 text-xs">
                  <div className="grid h-6 w-6 place-items-center rounded-lg bg-brand-soft text-brand-ink">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-semibold text-ink">Zero Data Silos</span>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl bg-canvas p-3 text-xs">
                  <div className="grid h-6 w-6 place-items-center rounded-lg bg-brand-soft text-brand-ink">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-semibold text-ink">Instant Audit Trails</span>
                </div>

                <div className="flex items-center gap-2.5 rounded-xl bg-canvas p-3 text-xs">
                  <div className="grid h-6 w-6 place-items-center rounded-lg bg-brand-soft text-brand-ink">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="font-semibold text-ink">HIPAA &amp; SOC-2 Ready</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}