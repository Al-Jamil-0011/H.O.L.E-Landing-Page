import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon, CompassIcon, CheckIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";

const CTA_IMAGE = "/healthcare-atrium.jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
};

export function FinalCta() {
  const reduce = useReducedMotion();

  return (
    <section
      id="demo"
      aria-labelledby="cta-title"
      className="bg-canvas px-4 sm:px-6 lg:px-8 py-10 sm:py-14 transition-colors duration-200"
    >
      <Reveal>
        <div className="group relative mx-auto max-w-6xl overflow-hidden rounded-[28px] sm:rounded-[32px] border border-white/15 bg-[#0D1214] text-white shadow-2xl transition-all duration-500 hover:border-brand/40 hover:shadow-[0_20px_50px_-15px_rgba(0,197,218,0.22)] cursor-default">
          {/* ── Background Architectural Hospital Atrium Image (Clear & Interactive Hover) ── */}
          <div className="absolute inset-0 select-none overflow-hidden" aria-hidden="true">
            <img
              src={CTA_IMAGE}
              alt=""
              className="h-full w-full object-cover object-[center_42%] opacity-60 brightness-100 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-95 group-hover:brightness-110"
            />
            {/* Soft, balanced gradient overlays — keeps image crystal clear while ensuring WCAG contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1113]/85 via-[#0C1113]/40 to-[#0C1113]/30 transition-opacity duration-500 group-hover:opacity-80" />
            <div
              className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-75"
              style={{
                background:
                  "radial-gradient(ellipse 95% 85% at 50% 40%, rgba(0, 197, 218, 0.12) 0%, rgba(12, 17, 19, 0.40) 60%, rgba(12, 17, 19, 0.90) 100%)",
              }}
            />
          </div>

          {/* ── Animated Ambient Brand Glow ─────────────────────────────────── */}
          {!reduce && (
            <motion.div
              aria-hidden="true"
              animate={{
                opacity: [0.18, 0.35, 0.18],
                scale: [0.95, 1.06, 0.95],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[120px] transition-all duration-700 group-hover:bg-brand/35 group-hover:scale-110"
            />
          )}

          {/* ── Minimal, Animated & Stylish Content ─────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial={reduce ? undefined : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative z-10 mx-auto max-w-3xl px-6 py-12 sm:px-8 sm:py-16 text-center"
          >
            {/* Logo Eyebrow without pill border + Flanking Left & Right Lines */}
            <motion.div variants={childVariants} className="mx-auto flex items-center justify-center gap-3 sm:gap-4 md:gap-5">
              {/* Left decorative line */}
              <div
                aria-hidden="true"
                className="h-px flex-1 max-w-[40px] sm:max-w-[80px] md:max-w-[120px] bg-gradient-to-r from-transparent via-brand/40 to-brand/80"
              />

              {/* Eyebrow content (no border) */}
              <div className="inline-flex items-center gap-2.5 select-none">
                <Logo dark imgClassName="h-6 w-auto object-contain" />
                <span className="h-3 w-px bg-white/25" aria-hidden="true" />
                <span className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                  Enterprise Operations
                </span>
              </div>

              {/* Right decorative line */}
              <div
                aria-hidden="true"
                className="h-px flex-1 max-w-[40px] sm:max-w-[80px] md:max-w-[120px] bg-gradient-to-l from-transparent via-brand/40 to-brand/80"
              />
            </motion.div>

            {/* Main Headline (Animated) */}
            <motion.h2
              variants={childVariants}
              id="cta-title"
              className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.12] tracking-[-0.03em] text-white"
            >
              Bring your healthcare operations together<span className="text-brand">.</span>
            </motion.h2>

            {/* Subline (Animated) */}
            <motion.p
              variants={childVariants}
              className="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-200/90"
            >
              Connect sales, inventory, logistics, finance, and field teams through one intelligent operational platform.
            </motion.p>

            {/* Action Buttons (Animated) */}
            <motion.div
              variants={childVariants}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href="#demo"
                className="group/btn relative inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-brand px-7 text-[15px] font-bold text-slate-950 shadow-glow transition-all duration-200 ease-out hover:opacity-95 hover:shadow-[0_0_30px_rgba(0,197,218,0.55)] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Request a Demo
                <ArrowRightIcon
                  className="h-4 w-4 transition-transform duration-200 ease-out group-hover/btn:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#ecosystem"
                className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/20 bg-white/10 px-6 text-[15px] font-semibold text-white backdrop-blur-md transition-all duration-200 ease-out hover:bg-white/20 hover:border-white/35 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <CompassIcon className="h-4 w-4 text-brand" aria-hidden="true" />
                Explore the Platform
              </a>
            </motion.div>

            {/* Subtle Trust Badges (Animated) */}
            <motion.div
              variants={childVariants}
              className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-300/80"
            >
              <span className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                14-day guided trial
              </span>
              <span className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                HIPAA & SOC-2 compliant
              </span>
            </motion.div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  );
}