import { CtaButtons } from "./CtaButtons";
import { Reveal } from "./Reveal";
import { Logo } from "./Logo";

const CTA_IMAGE = "/ae1cf3f1-4897-4bc7-9664-7325233cc7de.jpg";

export function FinalCta() {
  return (
    <section id="demo" aria-labelledby="cta-title" className="bg-canvas px-5 pb-24 pt-8 lg:px-8 transition-colors duration-200">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-night border border-night-line shadow-2xl">
          <img src={CTA_IMAGE} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-night/70" aria-hidden />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[130px]" aria-hidden />
          <div className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
            <div className="mx-auto mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                <Logo dark imgClassName="h-7 w-auto object-contain" />
              </span>
            </div>
            <h2 id="cta-title" className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl">
              Bring your healthcare operations together<span className="text-brand">.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Connect sales, inventory, logistics, finance, and field teams through one intelligent operational platform.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CtaButtons dark />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}