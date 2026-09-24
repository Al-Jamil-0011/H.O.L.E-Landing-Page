import React from "react";
import type { Tone } from "../../types/landing";

const toneClass: Record<Tone, string> = {
  brand: "bg-brand-soft text-brand-ink",
  success: "bg-success-soft text-success-ink",
  warning: "bg-warning-soft text-warning-ink",
  neutral: "bg-canvas text-ink-muted ring-1 ring-inset ring-line"
};

interface StatusChipProps {
  label: string;
  tone?: Tone;
}

export function StatusChip({ label, tone = "neutral" }: StatusChipProps) {
  return (
    <span className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold ${toneClass[tone]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" aria-hidden />
      {label}
    </span>);

}