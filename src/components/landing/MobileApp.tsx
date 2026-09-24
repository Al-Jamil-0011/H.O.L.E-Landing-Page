import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PhoneScreen } from "./PhoneScreen";
import { StoreBadges } from "./StoreBadges";
import { mobileScreens } from "../../data/landing";

const offsets = ["lg:mt-16", "lg:mt-0", "lg:mt-24", "lg:mt-6", "lg:mt-20", "lg:mt-2"];

export function MobileApp() {
  const reduce = useReducedMotion();
  return (
    <section aria-labelledby="mobile-title" className="overflow-hidden bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            id="mobile-title"
            align="left"
            title="Your operations, wherever work happens."
            description="Reps in the OR, drivers on the road, managers between meetings. The H.O.L.E. mobile app is live on iOS and Android." />

          <Reveal>
            <StoreBadges />
          </Reveal>
        </div>

        <div className="no-scrollbar -mx-5 mt-16 flex gap-6 overflow-x-auto px-5 pb-6 lg:mx-0 lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible lg:px-0">
          {mobileScreens.map((m, i) =>
            <motion.figure
              key={m.label}
              className={`shrink-0 ${offsets[i]}`}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}>

              <div className="transition-transform duration-200 ease-out hover:-translate-y-1.5">
                <PhoneScreen screen={m.screen} size="sm" />
              </div>
              <figcaption className="mt-4 text-center text-sm font-semibold text-ink">{m.label}</figcaption>
            </motion.figure>
          )}
        </div>
      </div>
    </section>);

}