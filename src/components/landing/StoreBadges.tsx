import React from "react";
import { AppleIcon, PlayIcon } from "lucide-react";

interface StoreBadgesProps {
  dark?: boolean;
}

const stores = [
{ icon: AppleIcon, small: "Download on the", big: "App Store" },
{ icon: PlayIcon, small: "Get it on", big: "Google Play" }];


export function StoreBadges({ dark = false }: StoreBadgesProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {stores.map(({ icon: Icon, small, big }) =>
      <a
        key={big}
        href="#demo"
        className={`inline-flex h-11 items-center gap-2.5 rounded-xl px-4 transition-[background-color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
        dark ? "bg-white text-ink hover:bg-white/90" : "bg-night text-white hover:bg-night-3"}`
        }>
        
          <Icon className="h-5 w-5" aria-hidden />
          <span className="flex flex-col text-left leading-none">
            <span className="text-[9px] font-medium opacity-70">{small}</span>
            <span className="mt-0.5 text-sm font-semibold">{big}</span>
          </span>
        </a>
      )}
    </div>);

}