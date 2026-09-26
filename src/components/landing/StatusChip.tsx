import type { Tone } from "../../types/landing";

const toneClass: Record<Tone, string> = {
  brand: "bg-brand-soft text-brand-ink dark:bg-brand/15 dark:text-brand border border-brand/20",
  success: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20",
  warning: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20",
  neutral: "bg-canvas text-ink-muted ring-1 ring-inset ring-line",
};

interface StatusChipProps {
  label: string;
  tone?: Tone;
}

export function StatusChip({ label, tone = "neutral" }: StatusChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold transition-colors ${toneClass[tone]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" aria-hidden />
      {label}
    </span>
  );
}