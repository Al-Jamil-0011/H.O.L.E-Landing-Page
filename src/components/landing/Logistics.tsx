import { useReducedMotion } from "framer-motion";
import { CheckIcon, MapPinIcon, PackageIcon, TruckIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { logisticsStatuses } from "../../data/landing";

const LOGISTICS_IMAGE = "/4bcbfa35-9f75-4495-808d-7dc5323c83fd.jpg";
const ROUTE = "M90 340 C 150 320, 170 250, 240 235 S 330 210, 360 160 S 440 100, 510 78";

export function Logistics() {
  const reduce = useReducedMotion();

  return (
    <section id="logistics" aria-labelledby="logistics-title" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          id="logistics-title"
          align="center"
          className="max-w-4xl mx-auto"
          title="From pickup to drop-off, always in view."
          description="Managers assign a driver, the driver updates each step from the app, and everyone sees the same shipment status."
        />

        <div className="mt-12 sm:mt-16 grid gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Milestones Stepper + Field Dispatch Card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Milestone Tracker Card */}
            <Reveal>
              <div className="rounded-2xl border border-line bg-canvas p-5 sm:p-6 shadow-subtle">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-ink">Live Shipment Tracking</span>
                    <p className="mt-0.5 text-base font-bold text-ink">Trip Milestones</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand-ink">
                    <span className="h-2 w-2 rounded-full bg-brand animate-pulse" /> In Transit
                  </span>
                </div>

                <ol className="mt-5 space-y-4 relative">
                  {/* Connecting vertical line track */}
                  <div className="absolute left-3.5 top-3.5 bottom-3.5 w-0.5 bg-line -z-0" />

                  {logisticsStatuses.map((s) => {
                    const isCurrent = s.label === "In transit";
                    return (
                      <li key={s.label} className="relative z-10 flex items-center gap-4">
                        <span
                          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-all duration-200 ${
                            s.done
                              ? "bg-brand text-ink shadow-sm ring-4 ring-brand/15"
                              : isCurrent
                              ? "bg-night text-brand ring-4 ring-brand/30 animate-pulse"
                              : "bg-surface ring-1 ring-line text-ink-subtle"
                          }`}
                          aria-hidden
                        >
                          {s.done ? (
                            <CheckIcon className="h-3.5 w-3.5" />
                          ) : isCurrent ? (
                            <TruckIcon className="h-3.5 w-3.5 text-brand" />
                          ) : (
                            <span className="h-2 w-2 rounded-full bg-ink-subtle/50" />
                          )}
                        </span>
                        <div className="flex-1 min-w-0 flex items-center justify-between">
                          <span className={`text-sm font-semibold transition-colors ${s.done || isCurrent ? "text-ink" : "text-ink-muted"}`}>
                            {s.label}
                          </span>
                          <span className={`text-xs font-medium ${isCurrent ? "text-brand-ink font-semibold" : "text-ink-subtle"}`}>
                            {s.time}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </Reveal>

            {/* Field Dispatch Courier Card */}
            <Reveal delay={0.06}>
              <div className="overflow-hidden rounded-2xl border border-line bg-canvas p-4 sm:p-5 shadow-subtle">
                <div className="relative h-44 w-full overflow-hidden rounded-xl">
                  <img
                    src={LOGISTICS_IMAGE}
                    alt="Medical courier loading a sealed transport case into a delivery van at a hospital loading bay"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute bottom-2.5 left-2.5 rounded-lg bg-night/80 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                    Live Field Dispatch
                  </span>
                </div>
                <div className="mt-3.5 space-y-1">
                  <p className="text-sm font-bold text-ink">Built for certified couriers</p>
                  <p className="text-xs leading-relaxed text-ink-muted">
                    Drivers accept jobs in-app, follow optimized sterile transport routes, and capture electronic proof of delivery at the hospital loading dock.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Realistic GPS Navigation Map with Route & Moving Logistics Van */}
          <div className="lg:col-span-7 flex flex-col">
            <Reveal className="h-full flex-1">
              <div className="relative h-full min-h-[520px] w-full overflow-hidden rounded-3xl border border-line bg-[#EEF3F4] dark:bg-[#12181A] shadow-card flex flex-col justify-between transition-colors duration-200">
                {/* Realistic City Map Background Image */}
                <img
                  src="/realistic-city-map.jpg"
                  alt="Real-time GPS navigation city map"
                  className="absolute inset-0 h-full w-full object-cover object-center opacity-85 dark:opacity-30 dark:invert-[0.75] dark:hue-rotate-180 select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/10 dark:from-[#1B1B1B]/80 dark:via-transparent dark:to-[#1B1B1B]/40 pointer-events-none" />

                {/* SVG Route & Moving Logistics Car */}
                <svg
                  viewBox="0 0 600 420"
                  className="absolute inset-0 h-full w-full pointer-events-none"
                  preserveAspectRatio="none"
                  role="img"
                  aria-label="Map showing route from warehouse to St. Mary's Hospital"
                >
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00C5DA" />
                      <stop offset="50%" stopColor="#0284C7" />
                      <stop offset="100%" stopColor="#00C5DA" />
                    </linearGradient>

                    <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00C5DA" stopOpacity="0.65" />
                      <stop offset="100%" stopColor="#00C5DA" stopOpacity="0" />
                    </linearGradient>

                    <filter id="carShadow" x="-30%" y="-30%" width="160%" height="160%">
                      <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#0E1718" floodOpacity="0.45" />
                    </filter>
                  </defs>

                  {/* Route outer casing / glow */}
                  <path d={ROUTE} className="stroke-white dark:stroke-[#1E293B]" strokeWidth="14" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
                  {/* Route gradient line */}
                  <path d={ROUTE} stroke="url(#routeGradient)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Flow indicator dashes */}
                  <path d={ROUTE} className="stroke-white dark:stroke-cyan-200 animate-dash" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="4 8" opacity="0.75" />

                  {/* Animated Moving Logistics Vehicle */}
                  <g>
                    {/* Pulsing GPS Radar Wave */}
                    <circle r="22" fill="#00C5DA" opacity="0.3">
                      <animate attributeName="r" values="16;32;16" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0.05;0.4" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle r="14" fill="#00C5DA" opacity="0.4" />

                    {/* Headlight beam shining forward */}
                    <path d="M 14 -5 L 38 -12 L 38 12 L 14 5 Z" fill="url(#headlightBeam)" />

                    {/* Logistics Courier Van (Facing +X) */}
                    <g filter="url(#carShadow)">
                      {/* 4 Wheels */}
                      <rect x="-11" y="-9.5" width="6" height="2.5" rx="1" fill="#0F172A" />
                      <rect x="5" y="-9.5" width="6" height="2.5" rx="1" fill="#0F172A" />
                      <rect x="-11" y="7" width="6" height="2.5" rx="1" fill="#0F172A" />
                      <rect x="5" y="7" width="6" height="2.5" rx="1" fill="#0F172A" />

                      {/* Van Body */}
                      <rect x="-14" y="-7.5" width="28" height="15" rx="4" fill="#0E1718" stroke="#FFFFFF" strokeWidth="1.8" />

                      {/* Cargo Roof Area */}
                      <rect x="-12" y="-6" width="15" height="12" rx="2" fill="#1E293B" />
                      {/* Cyan Cross Logistics Medical Emblem */}
                      <line x1="-8" y1="0" x2="-1" y2="0" stroke="#00C5DA" strokeWidth="2" strokeLinecap="round" />
                      <line x1="-4.5" y1="-3.5" x2="-4.5" y2="3.5" stroke="#00C5DA" strokeWidth="2" strokeLinecap="round" />

                      {/* Front Windshield */}
                      <path d="M 4 -6 L 9.5 -4.5 Q 12 0 9.5 4.5 L 4 6 Z" fill="#38BDF8" opacity="0.95" />

                      {/* Headlights (Warm Yellow) */}
                      <circle cx="13.5" cy="-5" r="1.3" fill="#FEF08A" />
                      <circle cx="13.5" cy="5" r="1.3" fill="#FEF08A" />

                      {/* Taillights (Red) */}
                      <rect x="-14.5" y="-6" width="1.2" height="2.5" rx="0.5" fill="#EF4444" />
                      <rect x="-14.5" y="3.5" width="1.2" height="2.5" rx="0.5" fill="#EF4444" />
                    </g>

                    {reduce ? (
                      <animateTransform attributeName="transform" type="translate" values="260 200" dur="1s" fill="freeze" />
                    ) : (
                      <animateMotion dur="14s" repeatCount="indefinite" path={ROUTE} rotate="auto" calcMode="linear" />
                    )}
                  </g>
                </svg>

                {/* Start Point Pin: Warehouse */}
                <div className="absolute" style={{ left: "15%", top: "81%" }}>
                  <div className="flex -translate-x-1/2 -translate-y-full flex-col items-center">
                    <span className="flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-line bg-surface/95 px-2.5 py-1 text-[11px] font-semibold text-ink shadow-card backdrop-blur">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Pickup · Main warehouse
                    </span>
                    <div className="mt-1 grid h-7 w-7 place-items-center rounded-full bg-surface border border-line shadow-card text-ink">
                      <PackageIcon className="h-4 w-4 text-ink" aria-hidden />
                    </div>
                  </div>
                </div>

                {/* End Point Pin: St. Mary's Hospital */}
                <div className="absolute" style={{ left: "85%", top: "18.5%" }}>
                  <div className="flex -translate-x-1/2 -translate-y-full flex-col items-center">
                    <span className="flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-night px-2.5 py-1 text-[11px] font-semibold text-white shadow-card">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                      St. Mary's Hospital
                    </span>
                    <div className="mt-1 grid h-8 w-8 place-items-center rounded-full bg-brand shadow-card text-night ring-4 ring-brand/20">
                      <MapPinIcon className="h-5 w-5 fill-night text-brand" aria-hidden />
                    </div>
                  </div>
                </div>

                {/* Top Left Floating Dispatch Card */}
                <div className="absolute left-4 top-4 w-[250px] rounded-2xl border border-line bg-surface/90 dark:bg-surface/95 p-4 shadow-float backdrop-blur-xl sm:left-6 sm:top-6 transition-colors duration-200">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs font-medium text-ink-subtle">SHP-20418</p>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2 py-0.5 text-[11px] font-semibold text-brand-ink dark:text-brand dark:bg-brand/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden /> In Transit
                    </span>
                  </div>
                  <p className="mt-2 font-semibold text-ink">Spinal Fusion Tray · T-112</p>
                  <dl className="mt-3 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <dt className="flex items-center gap-1.5 text-ink-muted">
                        <TruckIcon className="h-3.5 w-3.5" aria-hidden /> Driver assigned
                      </dt>
                      <dd className="font-semibold text-ink">Marcus Lewis</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-ink-muted">Estimated delivery</dt>
                      <dd className="font-semibold text-ink">2:40 PM</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-ink-muted">Last driver update</dt>
                      <dd className="text-ink-muted">2 min ago</dd>
                    </div>
                  </dl>
                </div>

                {/* Bottom Right Live Telemetry Badge */}
                <div className="absolute right-4 bottom-4 hidden sm:flex items-center gap-2 rounded-xl border border-line bg-surface/90 px-3 py-1.5 shadow-subtle backdrop-blur-md transition-colors duration-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-ink">Live GPS Telemetry Active</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}