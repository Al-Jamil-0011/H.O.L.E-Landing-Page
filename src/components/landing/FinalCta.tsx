import React from "react";
import { CtaButtons } from "./CtaButtons";
import { Reveal } from "./Reveal";

const CTA_IMAGE = "/ae1cf3f1-4897-4bc7-9664-7325233cc7de.jpg";

export function FinalCta() {
  return (
    <section id="demo" aria-labelledby="cta-title" className="bg-surface px-5 pb-24 pt-8 lg:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-night">
          <img src={CTA_IMAGE} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-night/60" aria-hidden />
          <div className="pointer-events-none absolute left-1/2 top-full h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[120px]" aria-hidden />
          <div className="relative mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
            <h2 id="cta-title" className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl">
              Bring your healthcare operations together<span className="text-brand">.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Connect sales, inventory, logistics, finance, and field teams through one intelligent operational platform.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaButtons dark />
            </div>
          </div>
        </div>
      </Reveal>
    </section>);

}