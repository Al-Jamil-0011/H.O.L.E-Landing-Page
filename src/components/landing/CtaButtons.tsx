import React from "react";
import { ArrowRightIcon } from "lucide-react";

interface CtaButtonsProps {
  dark?: boolean;
}

export function CtaButtons({ dark = false }: CtaButtonsProps) {
  return (
    <>
      <a
        href="#demo"
        className="group inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-brand px-6 text-[15px] font-semibold text-ink shadow-[0_4px_14px_-3px_rgba(0,197,218,0.35)] transition-[transform,background-color,box-shadow] duration-150 ease-out hover:bg-[#12D2E6] hover:shadow-[0_6px_20px_-3px_rgba(0,197,218,0.45)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2">
        
        Request a Demo
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5" aria-hidden />
      </a>
      <a
        href="#ecosystem"
        className={`inline-flex h-12 items-center justify-center whitespace-nowrap rounded-xl border px-6 text-[15px] font-semibold transition-[background-color,border-color,transform] duration-150 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
        dark ?
        "border-white/15 bg-white/5 text-white hover:bg-white/10" :
        "border-line bg-surface/80 text-ink backdrop-blur hover:border-ink/20 hover:bg-surface"}`
        }>
        
        Explore the Platform
      </a>
    </>);

}