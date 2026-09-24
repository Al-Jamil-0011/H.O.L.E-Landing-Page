import React from "react";

interface LogoProps {
  dark?: boolean;
}

export function Logo({ dark = false }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-night" aria-hidden>
        <span className="h-3.5 w-3.5 rounded-full border-[3px] border-brand" />
      </span>
      <span className={`whitespace-nowrap font-display text-[17px] font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        H.O.L.E.
        <span className={`ml-1 font-semibold ${dark ? "text-white/50" : "text-ink-subtle"}`}>APP</span>
      </span>
    </span>);

}