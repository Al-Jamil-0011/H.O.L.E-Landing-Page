import { AppleIcon, PlayIcon } from "lucide-react";

interface StoreBadgesProps {
  dark?: boolean;
  layout?: "row" | "col";
  className?: string;
}

const stores = [
  {
    icon: AppleIcon,
    small: "Download on the",
    big: "App Store",
    href: "https://apps.apple.com/us/app/h-o-l-e/id6782267938",
  },
  {
    icon: PlayIcon,
    small: "Get it on",
    big: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.holepackage.app",
  },
];

export function StoreBadges({ dark = false, layout = "row", className = "" }: StoreBadgesProps) {
  const isCol = layout === "col";
  return (
    <div className={`flex ${isCol ? "flex-col items-end gap-2" : "flex-wrap items-center gap-3"} ${className}`}>
      {stores.map(({ icon: Icon, small, big, href }) => (
        <a
          key={big}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex h-10 sm:h-10.5 items-center gap-2.5 rounded-xl border px-3.5 transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand active:scale-95 ${
            isCol ? "w-[152px] justify-start" : ""
          } ${
            dark
              ? "border-transparent bg-white text-ink hover:bg-white/90 shadow-sm"
              : "border-transparent bg-night text-white hover:bg-night-3 dark:border-line dark:bg-canvas dark:text-ink dark:hover:bg-surface-muted shadow-sm"
          }`}
        >
          <Icon className="h-4.5 w-4.5 shrink-0" aria-hidden />
          <span className="flex flex-col text-left leading-none">
            <span className="text-[9px] font-medium opacity-70">{small}</span>
            <span className="mt-0.5 text-xs sm:text-[13px] font-semibold">{big}</span>
          </span>
        </a>
      ))}
    </div>
  );
}