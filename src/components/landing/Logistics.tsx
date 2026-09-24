import React from "react";
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
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
        <div>
          <SectionHeading
            id="logistics-title"
            align="left"
            title="From pickup to drop-off, always in view."
            description="Managers assign a driver, the driver updates each step from the app, and everyone sees the same shipment status." />

          <Reveal className="mt-10">
            <ol className="space-y-4">
              {logisticsStatuses.map((s) =>
                <li key={s.label} className="flex items-center gap-4">
                  <span className={`grid h-7 w-7 place-items-center rounded-full ${s.done ? "bg-brand text-ink" : "bg-canvas ring-1 ring-line"}`} aria-hidden>
                    {s.done && <CheckIcon className="h-3.5 w-3.5" />}
                  </span>
                  <span className={`font-medium ${s.done ? "text-ink" : "text-ink-muted"}`}>{s.label}</span>
                  <span className="ml-auto text-sm text-ink-subtle">{s.time}</span>
                </li>
              )}
            </ol>
          </Reveal>
          <Reveal className="mt-8">
            <div className="overflow-hidden rounded-2xl border border-line bg-canvas p-4 shadow-subtle">
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

        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-[#EEF3F4] shadow-card">
            <svg viewBox="0 0 600 420" className="block h-auto w-full" role="img" aria-label="Map showing a route from the warehouse pickup point to St. Mary's Hospital with the driver en route">
              <rect width="600" height="420" fill="#EEF3F4" />
              <rect x="400" y="250" width="160" height="120" rx="14" fill="#DCEFE6" />
              <path d="M0 300 Q 200 280 300 320 T 600 330" stroke="#D4E6F0" strokeWidth="26" fill="none" />
              {[60, 150, 250, 350, 450, 540].map((x) =>
                <line key={`v${x}`} x1={x} y1="0" x2={x} y2="420" stroke="#FFFFFF" strokeWidth="10" />
              )}
              {[50, 130, 210, 290, 380].map((y) =>
                <line key={`h${y}`} x1="0" y1={y} x2="600" y2={y} stroke="#FFFFFF" strokeWidth="8" />
              )}
              <line x1="0" y1="420" x2="600" y2="0" stroke="#FFFFFF" strokeWidth="14" opacity="0.9" />
              <path d={ROUTE} stroke="#FFFFFF" strokeWidth="12" fill="none" strokeLinecap="round" />
              <path d={ROUTE} stroke="#00C5DA" strokeWidth="5" fill="none" strokeLinecap="round" />
              <path d={ROUTE} stroke="#0E1718" strokeWidth="1.5" fill="none" strokeDasharray="3 9" className="animate-dash" opacity="0.35" />
              <g>
                <circle r="14" fill="#00C5DA" opacity="0.2" />
                <circle r="8" fill="#0E1718" stroke="#FFFFFF" strokeWidth="3" />
                {reduce ?
                  <animateTransform attributeName="transform" type="translate" values="300 205" dur="1s" fill="freeze" /> :

                  <animateMotion dur="16s" repeatCount="indefinite" path={ROUTE} keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
                }
              </g>
            </svg>

            <div className="absolute" style={{ left: "15%", top: "81%" }}>
              <div className="flex -translate-x-1/2 -translate-y-full flex-col items-center">
                <span className="whitespace-nowrap rounded-lg bg-surface px-2.5 py-1 text-[11px] font-semibold text-ink shadow-card">Pickup · Main warehouse</span>
                <PackageIcon className="mt-1 h-6 w-6 fill-surface text-ink" aria-hidden />
              </div>
            </div>
            <div className="absolute" style={{ left: "85%", top: "18.5%" }}>
              <div className="flex -translate-x-1/2 -translate-y-full flex-col items-center">
                <span className="whitespace-nowrap rounded-lg bg-night px-2.5 py-1 text-[11px] font-semibold text-white shadow-card">St. Mary's Hospital</span>
                <MapPinIcon className="mt-1 h-7 w-7 fill-brand text-night" aria-hidden />
              </div>
            </div>

            <div className="absolute left-4 top-4 w-[250px] rounded-2xl border border-white/80 bg-white/80 p-4 shadow-float backdrop-blur-xl sm:left-6 sm:top-6">
              <div className="flex items-center justify-between">
                <p className="font-mono text-xs font-medium text-ink-subtle">SHP-20418</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-2 py-0.5 text-[11px] font-semibold text-brand-ink">
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
          </div>
        </Reveal>
      </div>
    </section>);

}