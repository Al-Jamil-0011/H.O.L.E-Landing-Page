import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PhoneScreen } from "./PhoneScreen";
import { roles } from "../../data/landing";

const SURGEON_IMAGE = "/surgeon-consultation.jpg";

export function Roles() {
  const [activeId, setActiveId] = useState(roles[0].id);
  const role = roles.find((r) => r.id === activeId) ?? roles[0];

  return (
    <section id="roles" aria-labelledby="roles-title" className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          id="roles-title"
          align="left"
          title="The right experience for every role."
          description="Five roles, each seeing only what they need, working from the exact same real-time data."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Interactive Role Buttons (5 Roles) */}
          <div className="lg:col-span-5">
            <ul className="space-y-3">
              {roles.map(({ id, label, icon: Icon, description }, i) => {
                const active = id === activeId;
                return (
                  <Reveal key={id} delay={i * 0.04}>
                    <li>
                      <button
                        type="button"
                        aria-pressed={active}
                        onClick={() => setActiveId(id)}
                        onMouseEnter={() => setActiveId(id)}
                        className={`group flex w-full items-start gap-4 rounded-2xl border p-4.5 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                          active
                            ? "border-brand-line bg-surface shadow-card ring-1 ring-brand/20 -translate-y-0.5"
                            : "border-transparent bg-surface/60 hover:bg-surface hover:border-line hover:-translate-y-0.5"
                        }`}
                      >
                        <span
                          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors duration-200 ${
                            active
                              ? "bg-night text-brand"
                              : "bg-surface ring-1 ring-line text-ink-muted group-hover:text-ink"
                          }`}
                        >
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <div>
                          <span
                            className={`block font-display text-base font-bold transition-colors ${
                              active ? "text-ink" : "text-ink-muted group-hover:text-ink"
                            }`}
                          >
                            {label}
                          </span>
                          <span className="mt-1 block text-xs sm:text-sm leading-relaxed text-ink-muted">
                            {description}
                          </span>
                        </div>
                      </button>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          {/* Right Column: Layered Visual Showcase with Real Clinical Context & Phone Screen */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 overflow-hidden rounded-3xl bg-night p-6 sm:p-10 shadow-card">
                {/* Ambient glow in dark container */}
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/15 blur-[90px]"
                  aria-hidden
                />

                {/* Clinical Context Visual Card (Left in dark box) */}
                <div className="hidden md:flex flex-col justify-between w-64 h-[440px] rounded-2xl overflow-hidden border border-night-line bg-night-2 p-3">
                  <div className="relative h-44 overflow-hidden rounded-xl">
                    <img
                      src={SURGEON_IMAGE}
                      alt="Spine surgeon and device specialist reviewing surgical implant tray kit in operating room"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night-2 via-transparent to-transparent" />
                    <span className="absolute bottom-2 left-2 rounded-md bg-night/80 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur">
                      Clinical Field Reality
                    </span>
                  </div>

                  <div className="p-2 space-y-2 text-xs">
                    <p className="font-semibold text-white">OR Implant Case Planning</p>
                    <p className="text-[11px] leading-relaxed text-night-muted">
                      Reps coordinate directly with surgical teams. Instant stock visibility means the right tray is in OR 4 on time.
                    </p>
                    <div className="pt-2 border-t border-night-line flex items-center justify-between text-[10px] text-brand">
                      <span>Live Requisition</span>
                      <span>Verified</span>
                    </div>
                  </div>
                </div>

                {/* Interactive Phone Screen (Dynamic based on selected role) */}
                <div className="relative z-10 flex flex-col items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={role.id}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.98 }}
                      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                      className="relative"
                    >
                      <PhoneScreen screen={role.screen} />
                      <p className="mt-4 text-center text-xs font-medium text-night-muted">
                        Live {role.label} mobile interface
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}