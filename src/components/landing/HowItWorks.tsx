import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Coins,
  FileText,
  Navigation,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

interface StepInfo {
  id: string;
  stepNum: string;
  title: string;
  role: string;
  headline: string;
  description: string;
  status: string;
  statusColor: string;
  bullets: string[];
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  imageAlt: string;
  stageTag: string;
}

const steps: StepInfo[] = [
  {
    id: "create",
    stepNum: "01",
    title: "Create",
    role: "Sales Rep",
    headline: "Create surgical cases from the field in 45 seconds.",
    description:
      "Sales reps configure surgery needs, surgeon preference cards, and required trays directly from mobile. Inventory reserves immediately without morning-of phone calls.",
    status: "Draft · Submitted",
    statusColor: "bg-brand-soft text-brand-ink border-brand-line",
    bullets: [
      "Surgeon preference cards pre-fill screw sizes & biologics",
      "Tray T-112 instantly reserved from field stock",
      "Automated handoff to regional manager for review",
    ],
    icon: FileText,
    image: "/steps/step-1-create.jpg",
    imageAlt: "Medical device sales representative configuring surgical orthopedic case orders on iPad",
    stageTag: "Mobile iPad Case Setup",
  },
  {
    id: "review",
    stepNum: "02",
    title: "Review",
    role: "Manager",
    headline: "Instant manager audit and one-click authorization.",
    description:
      "Managers review surgery requirements with automated hospital credit verification and gross margin checks, authorizing logistics dispatch with a single click.",
    status: "Approved",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    bullets: [
      "Facility credit line ($150,000) verified in real time",
      "Gross margin policy (44.2%) checked automatically",
      "Instantly queues order for logistics courier dispatch",
    ],
    icon: ShieldCheck,
    image: "/steps/step-2-review.jpg",
    imageAlt: "Hospital operations director reviewing surgical order authorization on workstation",
    stageTag: "Compliance & Margin Audit",
  },
  {
    id: "assign",
    stepNum: "03",
    title: "Assign",
    role: "Dispatch",
    headline: "Smart courier pairing and route optimization.",
    description:
      "The platform matches the surgery delivery with the nearest certified medical courier, setting sterile pickup windows and OR arrival timing.",
    status: "Driver Assigned",
    statusColor: "bg-brand-soft text-brand-ink border-brand-line",
    bullets: [
      "Courier matched by proximity (2.4 miles from Central Depot)",
      "Temperature-controlled Sprinter vehicle assigned",
      "Sterile security seal #99214 registered to chain-of-custody",
    ],
    icon: Truck,
    image: "/steps/step-3-assign.jpg",
    imageAlt: "Logistics dispatch hub scanning barcode on sterile surgical instrument container",
    stageTag: "Depot Courier Dispatch",
  },
  {
    id: "track",
    stepNum: "04",
    title: "Track",
    role: "Driver",
    headline: "Live GPS telemetry and continuous cold-chain monitoring.",
    description:
      "Track the shipment in motion: live vehicle satellite GPS, continuous temperature logging for biologics, and automated ETA alerts sent to hospital surgical staff.",
    status: "In Transit",
    statusColor: "bg-brand-soft text-brand-ink border-brand-line",
    bullets: [
      "Turn-by-turn satellite GPS route tracking on I-85 North",
      "Biologic cold-chain logger maintains nominal 3.8°C",
      "Automated ETA notification sent to OR Suite 4 team",
    ],
    icon: Navigation,
    image: "/steps/step-4-track.jpg",
    imageAlt: "Medical delivery driver monitoring GPS navigation and cold-chain temperature telemetry",
    stageTag: "Active GPS & Biologics Telemetry",
  },
  {
    id: "complete",
    stepNum: "05",
    title: "Complete",
    role: "Hospital OR",
    headline: "Sterile OR handover and digital custody verification.",
    description:
      "Delivery is completed at the operating room door. Tamper seals are verified, staff electronic signature is captured, and inventory shifts to consumed.",
    status: "Delivered & Verified",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    bullets: [
      "Tamper-evident seal #99214 verified intact upon delivery",
      "Charge nurse digital signature captured with geo-timestamp",
      "Central inventory automatically updated for tomorrow's case",
    ],
    icon: Building2,
    image: "/steps/step-5-complete.jpg",
    imageAlt: "Hospital surgical nurse outside Operating Room 4 signing digital delivery verification",
    stageTag: "OR 4 Custody Handover",
  },
  {
    id: "manage",
    stepNum: "06",
    title: "Manage",
    role: "Finance",
    headline: "Zero-touch ledger closing and automated commission.",
    description:
      "Upon case completion, billing closes automatically. Sales rep commission is calculated to the cent, vendor replenishment triggers, and books reconcile.",
    status: "Reconciled",
    statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    bullets: [
      "$1,240 rep commission queued for Friday direct deposit",
      "Hospital billing (SL-10482) closed with zero manual entry",
      "Automated vendor replenishment PO sent to BioGraft Labs",
    ],
    icon: Coins,
    image: "/steps/step-6-manage.jpg",
    imageAlt: "Healthcare financial analyst reviewing automated ledger closing and commission payout",
    stageTag: "Automated Ledger & Commissions",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.25 });

  // Smooth auto-advancement that pauses on user hover or interaction
  useEffect(() => {
    if (isPaused || !inView) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, inView]);

  const currentStep = steps[active];

  return (
    <section id="how" aria-labelledby="how-title" className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8" ref={ref}>
        {/* Section Heading: Clean, Easy to Read, Elegant */}
        <SectionHeading
          id="how-title"
          title="From field to finance in six steps."
          description="Follow a single order through H.O.L.E. APP, from the rep who creates it to the finance team who closes it out."
        />

        {/* 6 Step Horizontal Selector: Clean, Spacious, and Highly Usable */}
        <Reveal className="mt-14">
          <div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {steps.map((s, idx) => {
              const isActive = idx === active;
              const isPast = idx < active;
              const StepIcon = s.icon;

              return (
                <button
                  key={s.id}
                  type="button"
                  onMouseEnter={() => {
                    setActive(idx);
                    setIsPaused(true);
                  }}
                  onFocus={() => {
                    setActive(idx);
                    setIsPaused(true);
                  }}
                  onClick={() => {
                    setActive(idx);
                    setIsPaused(true);
                  }}
                  className={`group relative flex flex-col items-start rounded-2xl border p-4 text-left transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer ${
                    isActive
                      ? "border-brand-line bg-surface shadow-card ring-1 ring-brand/20 -translate-y-0.5"
                      : "border-line bg-surface/70 hover:border-brand/40 hover:bg-surface hover:-translate-y-0.5"
                  }`}
                >
                  {/* Step Number + Icon */}
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-xl text-xs font-bold transition-colors ${
                        isActive
                          ? "bg-brand text-ink"
                          : isPast
                          ? "bg-brand-soft text-brand-ink"
                          : "bg-canvas text-ink-subtle group-hover:text-ink"
                      }`}
                    >
                      {isPast ? <Check className="h-4 w-4" /> : s.stepNum}
                    </span>

                    <StepIcon
                      className={`h-4 w-4 transition-colors ${
                        isActive ? "text-brand-ink" : "text-ink-subtle group-hover:text-ink"
                      }`}
                    />
                  </div>

                  {/* Title & Role */}
                  <span
                    className={`mt-3 block font-display text-base font-bold transition-colors ${
                      isActive ? "text-ink" : "text-ink-muted group-hover:text-ink"
                    }`}
                  >
                    {s.title}
                  </span>
                  <span className="text-xs text-ink-subtle">{s.role}</span>

                  {/* Progress Indicator Line on Active Item */}
                  {isActive && (
                    <motion.div
                      layoutId="stepActiveLine"
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-brand"
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Showcase Stage: Breathable, Beautiful, Clean Dual Panel */}
        <Reveal className="mt-8">
          <div
            className="overflow-hidden rounded-3xl border border-line bg-surface shadow-card"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="grid lg:grid-cols-12 min-h-[500px]">
              {/* Left Column: Clear Narrative & Key Takeaways */}
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-6 lg:p-12 lg:border-r lg:border-line">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                    className="space-y-6"
                  >
                    {/* Role & Step Tag */}
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-brand" />
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-ink">
                        Step {currentStep.stepNum} · {currentStep.role}
                      </span>
                    </div>

                    {/* Headline & Description */}
                    <div>
                      <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl sm:leading-tight">
                        {currentStep.headline}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-ink-muted">
                        {currentStep.description}
                      </p>
                    </div>

                    {/* 3 Clear, Clean Value Bullets */}
                    <ul className="space-y-3 pt-2">
                      {currentStep.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-ink">
                          <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-ink">
                            <Check className="h-2.5 w-2.5 stroke-[3]" />
                          </span>
                          <span className="font-medium text-ink-muted">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Step Navigation: Simple & Intuitive */}
                <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
                  <span className="text-xs font-medium text-ink-subtle">
                    Step {currentStep.stepNum} of 06
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setActive((prev) => (prev - 1 + steps.length) % steps.length);
                        setIsPaused(true);
                      }}
                      className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-line bg-surface px-3 text-xs font-semibold text-ink transition-colors hover:border-ink/20 hover:bg-canvas active:scale-95 cursor-pointer"
                      aria-label="Previous step"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setActive((prev) => (prev + 1) % steps.length);
                        setIsPaused(true);
                      }}
                      className="inline-flex h-9 items-center gap-1.5 rounded-xl bg-night dark:bg-brand px-3.5 text-xs font-semibold text-white dark:text-slate-950 transition-colors hover:bg-night-2 dark:hover:bg-[#12D2E6] active:scale-95 cursor-pointer shadow-sm"
                      aria-label="Next step"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Stage with AI-Generated Image & Order Telemetry Preview */}
              <div className="flex items-center justify-center bg-canvas/60 p-4 sm:p-6 lg:col-span-6 lg:p-8">
                <div className="w-full max-w-md">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep.id}
                      initial={{ opacity: 0, scale: 0.98, y: 6 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: -6 }}
                      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-shadow duration-300 hover:shadow-card-hover"
                    >
                      {/* Step Visual Preview: Crisp AI-Generated Scene */}
                      <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-night/5">
                        <img
                          src={currentStep.image}
                          alt={currentStep.imageAlt}
                          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                          loading="eager"
                        />
                        {/* Gentle cinematic gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none" />

                        {/* Floating Badges Over Image */}
                        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 dark:bg-night/90 dark:border dark:border-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-ink dark:text-white shadow-sm backdrop-blur-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                            {currentStep.stageTag}
                          </span>
                          <span
                            className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold shadow-sm backdrop-blur-md ${currentStep.statusColor}`}
                          >
                            {currentStep.status}
                          </span>
                        </div>

                        {/* Bottom Overlay Label */}
                        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-baseline justify-between text-white pointer-events-none">
                          <span className="font-mono text-[10px] uppercase tracking-wider text-white/80">
                            Custody Chain · Step {currentStep.stepNum}
                          </span>
                          <span className="text-[11px] font-medium text-white/95">
                            {currentStep.role} Phase
                          </span>
                        </div>
                      </div>

                      {/* Live Operational Telemetry & Order Details */}
                      <div className="p-4 sm:p-5">
                        {/* Card Header: Order reference */}
                        <div className="flex items-start justify-between border-b border-line pb-3">
                          <div>
                            <p className="font-mono text-[11px] font-semibold text-ink-subtle">
                              ORDER SL-10482
                            </p>
                            <p className="mt-0.5 font-display text-sm font-bold text-ink">
                              Spinal fusion · Dr. A. Patel
                            </p>
                            <p className="text-[11px] text-ink-subtle">St. Mary&apos;s Hospital · OR 4</p>
                          </div>
                          <span className="text-right">
                            <span className="block font-mono text-[10px] text-ink-subtle uppercase">Custody Seal</span>
                            <span className="font-mono text-xs font-bold text-brand-ink">#99214-T</span>
                          </span>
                        </div>

                        {/* Card Body - Content Tailored to Active Step */}
                        <div className="py-3.5">
                          {active === 0 && (
                            <div className="space-y-2.5 text-xs">
                              <p className="text-[11px] font-semibold text-ink-subtle uppercase tracking-wider">
                                Requested Implants &amp; Trays
                              </p>
                              <div className="flex items-center justify-between rounded-xl bg-canvas p-2.5">
                                <span className="font-medium text-ink">Spinal Fusion Tray T-112</span>
                                <span className="text-brand-ink font-semibold">Rep Stock</span>
                              </div>
                              <div className="flex items-center justify-between rounded-xl bg-canvas p-2.5">
                                <span className="font-medium text-ink">Pedicle Screws 6.5×45 (×4)</span>
                                <span className="text-emerald-700 font-semibold">In Stock</span>
                              </div>
                              <div className="flex items-center justify-between rounded-xl bg-canvas p-2.5">
                                <span className="font-medium text-ink">Bone Allograft 10cc</span>
                                <span className="text-amber-700 font-semibold">Cold Storage</span>
                              </div>
                              <div className="mt-2.5 flex items-center justify-between pt-1">
                                <span className="text-ink-muted">Estimated Case Value:</span>
                                <span className="font-display text-sm font-extrabold text-ink">
                                  $12,400.00
                                </span>
                              </div>
                            </div>
                          )}

                          {active === 1 && (
                            <div className="space-y-2.5 text-xs">
                              <p className="text-[11px] font-semibold text-ink-subtle uppercase tracking-wider">
                                Manager Review &amp; Clearance
                              </p>
                              <div className="flex items-center justify-between rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/40 p-2.5">
                                <span className="font-medium text-ink">Facility Credit Limit</span>
                                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">✓ $150k Approved</span>
                              </div>
                              <div className="flex items-center justify-between rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/40 p-2.5">
                                <span className="font-medium text-ink">Depot Inventory Reserved</span>
                                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">✓ 3 Items Locked</span>
                              </div>
                              <div className="flex items-center justify-between rounded-xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/40 p-2.5">
                                <span className="font-medium text-ink">Target Margin Check</span>
                                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">✓ 44.2% Pass</span>
                              </div>
                              <div className="mt-2.5 flex items-center justify-between pt-1">
                                <span className="text-ink-muted">Authorized by:</span>
                                <span className="font-semibold text-ink">
                                  D. Whitfield (Regional Dir.)
                                </span>
                              </div>
                            </div>
                          )}

                          {active === 2 && (
                            <div className="space-y-2.5 text-xs">
                              <p className="text-[11px] font-semibold text-ink-subtle uppercase tracking-wider">
                                Assigned Courier &amp; Vehicle
                              </p>
                              <div className="flex items-center justify-between rounded-xl bg-canvas p-2.5">
                                <div>
                                  <p className="font-semibold text-ink">Marcus Lewis</p>
                                  <p className="text-[11px] text-ink-subtle">Sprinter #8 · 4.98 ★</p>
                                </div>
                                <span className="text-brand-ink font-semibold">Paired (2.4 mi)</span>
                              </div>
                              <div className="rounded-xl bg-canvas p-2.5 space-y-1">
                                <div className="flex justify-between">
                                  <span className="text-ink-subtle">Pickup:</span>
                                  <span className="font-medium text-ink">Central Depot Bay 3 · 1:45 PM</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-ink-subtle">Delivery:</span>
                                  <span className="font-medium text-ink">St. Mary&apos;s OR 4 · 2:40 PM</span>
                                </div>
                              </div>
                              <div className="mt-1.5 text-center text-[11px] font-medium text-brand-ink">
                                Sterile Security Seal #99214 Applied
                              </div>
                            </div>
                          )}

                          {active === 3 && (
                            <div className="space-y-2.5 text-xs">
                              <div className="flex items-center justify-between">
                                <span className="text-ink-subtle">Route Progress:</span>
                                <span className="font-semibold text-brand-ink">ETA: 2:40 PM (14m)</span>
                              </div>
                              {/* Route Bar */}
                              <div className="relative h-2 w-full rounded-full bg-line">
                                <div className="h-full rounded-full bg-brand" style={{ width: "70%" }} />
                              </div>
                              <div className="grid grid-cols-2 gap-2 pt-1">
                                <div className="rounded-xl bg-canvas p-2">
                                  <span className="text-[10px] text-ink-subtle block">Speed &amp; Location</span>
                                  <span className="font-semibold text-ink">52 mph · I-85 N</span>
                                </div>
                                <div className="rounded-xl bg-canvas p-2">
                                  <span className="text-[10px] text-ink-subtle block">Bio-Temp Logger</span>
                                  <span className="font-semibold text-emerald-700">3.8°C (Nominal)</span>
                                </div>
                              </div>
                              <p className="text-[11px] text-ink-subtle text-center">
                                Hospital surgical board notified via automated geofence
                              </p>
                            </div>
                          )}

                          {active === 4 && (
                            <div className="space-y-2.5 text-xs">
                              <p className="text-[11px] font-semibold text-ink-subtle uppercase tracking-wider">
                                Handover &amp; Custody Sign-off
                              </p>
                              <div className="flex items-center justify-between rounded-xl bg-canvas p-2.5">
                                <span className="text-ink-subtle">Received By:</span>
                                <span className="font-semibold text-ink">Sarah Jenkins, RN</span>
                              </div>
                              <div className="flex items-center justify-between rounded-xl bg-canvas p-2.5">
                                <span className="text-ink-subtle">Tamper Seal #99214:</span>
                                <span className="font-semibold text-emerald-700">Verified Intact</span>
                              </div>
                              <div className="rounded-xl bg-canvas p-2.5">
                                <div className="flex justify-between text-[11px] text-ink-subtle mb-1">
                                  <span>Digital Signature:</span>
                                  <span>11:05 AM EDT</span>
                                </div>
                                <div className="h-9 flex items-center justify-center font-display italic text-brand-ink text-sm border-b border-line">
                                  Sarah Jenkins, BSN RN
                                </div>
                              </div>
                            </div>
                          )}

                          {active === 5 && (
                            <div className="space-y-2.5 text-xs">
                              <p className="text-[11px] font-semibold text-ink-subtle uppercase tracking-wider">
                                Ledger Breakdown
                              </p>
                              <div className="flex items-center justify-between rounded-xl bg-canvas p-2.5">
                                <span className="text-ink">Hospital Case Gross Billing</span>
                                <span className="font-semibold text-ink">$12,400.00</span>
                              </div>
                              <div className="flex items-center justify-between rounded-xl bg-brand-soft p-2.5 text-brand-ink">
                                <span>Rep Commission (10% Tier A)</span>
                                <span className="font-bold">+$1,240.00</span>
                              </div>
                              <div className="flex items-center justify-between rounded-xl bg-canvas p-2.5">
                                <span className="text-ink-muted">Courier Logistics Fee</span>
                                <span className="font-medium text-ink">$86.00</span>
                              </div>
                              <div className="flex items-center justify-between pt-1">
                                <span className="font-medium text-ink">Net Operating Margin:</span>
                                <span className="font-display text-sm font-extrabold text-emerald-700 dark:text-emerald-400">
                                  +$9,624.00 (77.6%)
                                </span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Card Footer: Interactive Lifecycle Progress Line */}
                        <div className="border-t border-line pt-3 flex items-center justify-between text-[11px] text-ink-subtle">
                          <span>Workflow Step {active + 1} of 6</span>
                          <div className="flex items-center gap-1.5" role="tablist" aria-label="Step progress">
                            {steps.map((s, i) => (
                              <button
                                key={s.id}
                                type="button"
                                onMouseEnter={() => {
                                  setActive(i);
                                  setIsPaused(true);
                                }}
                                onClick={() => {
                                  setActive(i);
                                  setIsPaused(true);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                  i === active
                                    ? "w-5 bg-brand"
                                    : i < active
                                    ? "w-2 bg-brand/40 hover:bg-brand/70"
                                    : "w-2 bg-line hover:bg-ink/30"
                                }`}
                                aria-label={`Jump to step ${s.stepNum}: ${s.title}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}