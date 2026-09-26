import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRightIcon,
  BoxesIcon,
  CheckIcon,
  CoinsIcon,
  CompassIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  TruckIcon,
  WalletIcon,
} from "lucide-react";
import { HeroDashboard } from "./HeroDashboard";

const HERO_IMAGE = "/b82a359f-8057-4983-97b6-90f5e6a5a822.jpg";
const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 75]);
  const dashY = useTransform(scrollY, [0, 900], [0, reduce ? 0 : -20]);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-canvas pb-0 pt-32 sm:pt-36 transition-colors duration-300"
    >
      {/* ── Background hospital photograph — subtle & cinematic ─────────── */}
      <motion.div
        aria-hidden
        style={{ y: imageY }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[720px] select-none opacity-80 dark:opacity-40"
      >
        <img
          src={HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover object-[center_25%]"
        />
        {/* Light theme gradient overlay */}
        <div className="absolute inset-0 block dark:hidden bg-gradient-to-b from-white/70 via-white/50 to-canvas" />
        <div
          className="absolute inset-0 block dark:hidden"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 35%, rgba(249,249,249,0.92) 0%, rgba(249,249,249,0.5) 100%)",
          }}
        />

        {/* Dark theme gradient overlay */}
        <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-[#1B1B1B]/80 via-[#1B1B1B]/60 to-canvas" />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% 35%, rgba(27,27,27,0.85) 0%, rgba(27,27,27,0.98) 100%)",
          }}
        />
      </motion.div>

      {/* ── Ambient brand glow ──────────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[340px] h-[340px] w-[900px] -translate-x-1/2 rounded-full bg-brand/10 blur-[110px]"
      />

      {/* ── Content wrapper ─────────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft/80 px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-ink shadow-sm dark:bg-brand/10 dark:text-brand dark:border-brand/40">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            THE CONNECTED HEALTHCARE OPERATIONS PLATFORM
          </div>

          {/* Main Headline */}
          <h1
            id="hero-title"
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-[54px] xl:text-[56px] font-extrabold leading-[1.12] tracking-[-0.03em] text-ink"
          >
            <span className="inline-block">One Platform. Complete Control Over</span>
            <br className="hidden sm:inline" />{" "}
            <span className="inline-block">Healthcare Operations.</span>
          </h1>

          {/* Subline */}
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg md:text-[18px] leading-relaxed text-ink-muted">
            H.O.L.E. helps healthcare organizations simplify complex workflows, improve operational visibility,
            and keep every team connected — from field representatives to management, finance, drivers, and administrators.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Primary CTA */}
            <a
              href="#demo"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-7 text-[15px] font-bold text-slate-950 shadow-sm transition-all duration-150 ease-out hover:opacity-95 hover:shadow-glow active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              Explore The Platform
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#ecosystem"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-line bg-surface/90 px-6 text-[15px] font-medium text-ink shadow-sm backdrop-blur transition-all duration-150 ease-out hover:border-brand/40 hover:bg-surface active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <CompassIcon className="h-4 w-4 text-ink-muted" aria-hidden="true" />
              How It Works
            </a>
          </div>
        </motion.div>

        {/* ── Dashboard Showcase ──────────────────────────────────────────── */}
        <motion.div
          style={{ y: dashY }}
          className="relative mx-auto mt-14 max-w-[1120px] sm:mt-16"
        >
          {/* Ambient soft glow ring */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 rounded-[32px] bg-brand/10 blur-2xl"
          />

          {/* Floating hint label above the dashboard */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2, ease }}
            className="mb-3 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/90 px-3.5 py-1 text-[11px] font-medium text-brand-ink shadow-sm backdrop-blur dark:text-brand">
              <CheckIcon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Hover or click role tabs to preview live view for each team
            </span>
          </motion.div>

          {/* The dashboard card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease }}
            className="relative"
          >
            <HeroDashboard />
          </motion.div>
        </motion.div>

        {/* ── 6-module Operational Strip ─────────────────────────────────── */}
        <div className="mx-auto mt-14 max-w-5xl text-center pb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-subtle">
            EVERYTHING YOUR HEALTHCARE OPERATIONS TEAM NEEDS — CONNECTED IN ONE PLATFORM.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "Sales", desc: "Case-linked billing", icon: TrendingUpIcon },
              { label: "Inventory", desc: "UDI & tray verification", icon: BoxesIcon },
              { label: "Logistics", desc: "Cold-chain telemetry", icon: TruckIcon },
              { label: "Finance", desc: "Auto-sync with QB", icon: WalletIcon },
              { label: "Commissions", desc: "Tiered settlement engine", icon: CoinsIcon },
              { label: "Operations", desc: "Multi-role governance", icon: ShieldCheckIcon },
            ].map(({ label, desc, icon: Icon }) => (
              <div
                key={label}
                className="group flex flex-col items-center rounded-2xl border border-line bg-surface/90 p-3.5 text-center shadow-card transition-all duration-150 hover:border-brand/40 hover:shadow-float hover:-translate-y-0.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand-ink dark:bg-brand/15 dark:text-brand group-hover:bg-brand group-hover:text-slate-950 transition-colors">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mt-2.5 text-xs font-bold text-ink">{label}</p>
                <p className="mt-0.5 text-[10px] leading-tight text-ink-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}