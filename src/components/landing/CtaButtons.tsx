import { ArrowRightIcon } from "lucide-react";

interface CtaButtonsProps {
  dark?: boolean;
}

export function CtaButtons({ dark = false }: CtaButtonsProps) {
  return (
    <>
      <a
        href="#demo"
        className="group inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-brand px-6 text-[15px] font-bold text-slate-950 shadow-[0_4px_14px_-3px_rgba(0,197,218,0.35)] transition-all duration-150 ease-out hover:opacity-95 hover:shadow-[0_6px_20px_-3px_rgba(0,197,218,0.45)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        Request a Demo
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden />
      </a>
      <a
        href="#ecosystem"
        className={`inline-flex h-12 items-center justify-center whitespace-nowrap rounded-xl border px-6 text-[15px] font-semibold transition-all duration-150 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
          dark
            ? "border-white/15 bg-white/10 text-white hover:bg-white/15 hover:border-white/25"
            : "border-line bg-surface/90 text-ink backdrop-blur hover:border-brand/40 hover:bg-surface"
        }`}
      >
        Explore the Platform
      </a>
    </>
  );
}