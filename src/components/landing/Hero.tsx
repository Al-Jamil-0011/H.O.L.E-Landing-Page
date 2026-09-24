import React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  AppleIcon,
  ArrowRightIcon,
  BoxesIcon,
  CheckIcon,
  CoinsIcon,
  CompassIcon,
  PlayIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  TruckIcon,
  WalletIcon,
} from "lucide-react";
import { HeroDashboard } from "./HeroDashboard";
import { FloatingCard } from "./FloatingCard";
import { heroFloatingCards } from "../../data/landing";

const HERO_IMAGE = "/b82a359f-8057-4983-97b6-90f5e6a5a822.jpg";
const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 90]);
  const dashY  = useTransform(scrollY, [0, 900], [0, reduce ? 0 : -25]);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-white pb-0 pt-32 sm:pt-36"
    >
      {/* ── Background hospital photograph — subtle & clean ─────────────── */}
      <motion.div
        aria-hidden
        style={{ y: imageY }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[700px] select-none opacity-20"
      >
        <img
          src={HERO_IMAGE}
          alt=""
          className="h-full w-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 35%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.4) 100%)",
          }}
        />
      </motion.div>

      {/* ── Ambient brand glow ──────────────────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[380px] h-[300px] w-[860px] -translate-x-1/2 rounded-full bg-teal-500/[0.05] blur-[100px]"
      ></div>

      {/* ── Content wrapper ─────────────────────────────────────────────── */}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* ── Hero text block matching Html_Body_3.png exactly ─────────────── */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow: Exact pill from reference image */}
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-teal-50/80 px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#00707E] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00707E]" />
            THE CONNECTED HEALTHCARE OPERATIONS PLATFORM
          </div>

          {/* Main Headline: Exact typography and text from reference image */}
          <h1
            id="hero-title"
            className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900"
          >
            One Platform. Complete Control Over
            <br className="hidden sm:inline" /> Healthcare Operations.
          </h1>

          {/* Subline: Exact description from reference image */}
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg md:text-[18px] leading-relaxed text-slate-600">
            H.O.L.E. helps healthcare organizations simplify complex workflows, improve operational visibility,
            and keep every team connected — from field representatives to management, finance, drivers, and administrators.
          </p>

          {/* CTAs: Exact button styles from reference image */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Primary CTA */}
            <a
              href="#demo"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#00707E] px-7 text-[15px] font-medium text-white shadow-sm transition-all duration-150 ease-out hover:bg-[#005E6A] hover:shadow active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00707E] focus-visible:ring-offset-2"
            >
              Request a Demo
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden="true" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#platform"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 text-[15px] font-medium text-slate-800 shadow-sm transition-all duration-150 ease-out hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              <CompassIcon className="h-4 w-4 text-slate-600" aria-hidden="true" />
              Explore the Platform
            </a>
          </div>

          {/* App Store / Google Play Badges directly below buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2.5 rounded-lg border border-slate-200/90 bg-white px-3.5 py-1.5 text-left text-xs font-medium text-slate-800 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              <AppleIcon className="h-4 w-4 text-slate-900 fill-current" aria-hidden="true" />
              <div className="leading-tight">
                <span className="block text-[9px] uppercase tracking-wider text-slate-400">Available on</span>
                <span className="font-semibold text-slate-800">Apple iOS</span>
              </div>
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2.5 rounded-lg border border-slate-200/90 bg-white px-3.5 py-1.5 text-left text-xs font-medium text-slate-800 shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
            >
              <PlayIcon className="h-4 w-4 text-slate-900 fill-current" aria-hidden="true" />
              <div className="leading-tight">
                <span className="block text-[9px] uppercase tracking-wider text-slate-400">Get it for</span>
                <span className="font-semibold text-slate-800">Google Play</span>
              </div>
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
            className="pointer-events-none absolute -inset-4 rounded-[32px] bg-teal-500/[0.04] blur-2xl"
          />

          {/* Floating hint label above the dashboard */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.2, ease }}
            className="mb-3 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200/60 bg-teal-50/70 px-3.5 py-1 text-[11px] font-medium text-[#00707E] shadow-sm">
              <CheckIcon className="h-3.5 w-3.5 text-[#00707E]" aria-hidden="true" />
              Hover role tabs in header to preview live view for each team
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

          {/* 4 Floating contextual info cards */}
          {heroFloatingCards.map(({ id, ...card }) => (
            <FloatingCard key={id} {...card} />
          ))}
        </motion.div>

        {/* ── 6-module Operational Strip from Reference Image ────────────── */}
        <div className="mx-auto mt-14 max-w-5xl text-center pb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
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
                className="group flex flex-col items-center rounded-xl border border-slate-200/80 bg-white/90 p-3.5 text-center shadow-sm transition-all duration-150 hover:border-teal-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-[#00707E] group-hover:bg-[#00707E] group-hover:text-white transition-colors">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mt-2.5 text-xs font-bold text-slate-800">{label}</p>
                <p className="mt-0.5 text-[10px] leading-tight text-slate-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}