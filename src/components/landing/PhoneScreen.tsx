import { BellIcon, HomeIcon, PackageIcon, TruckIcon, UserIcon } from "lucide-react";
import { StatusChip } from "./StatusChip";
import type { PhoneScreenData } from "../../types/landing";

interface PhoneScreenProps {
  screen: PhoneScreenData;
  size?: "md" | "sm";
}

export function PhoneScreen({ screen, size = "md" }: PhoneScreenProps) {
  const sm = size === "sm";
  return (
    <div className={`relative mx-auto overflow-hidden rounded-[2.4rem] border-[6px] border-night bg-night shadow-phone ${sm ? "w-[200px]" : "w-[270px]"}`}>
      <div className={`flex flex-col bg-canvas ${sm ? "h-[410px]" : "h-[550px]"} rounded-[1.9rem] overflow-hidden`}>
        <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-semibold text-ink">
          <span>9:41</span>
          <span className="h-4 w-16 rounded-full bg-night" aria-hidden />
          <span className="flex gap-0.5" aria-hidden>
            <span className="h-2 w-1 rounded-sm bg-ink" />
            <span className="h-2 w-1 rounded-sm bg-ink" />
            <span className="h-2 w-1 rounded-sm bg-ink/30" />
          </span>
        </div>

        <div className={`flex flex-1 flex-col ${sm ? "px-3 pt-3" : "px-4 pt-4"}`}>
          <div className="flex items-start justify-between">
            <div className="min-w-0">
              <p className={`truncate text-ink-subtle ${sm ? "text-[9px]" : "text-[11px]"}`}>{screen.greeting}</p>
              <p className={`truncate font-display font-extrabold tracking-tight text-ink ${sm ? "text-[15px]" : "text-lg"}`}>{screen.title}</p>
            </div>
            <span className={`grid shrink-0 place-items-center rounded-full bg-surface ring-1 ring-line ${sm ? "h-6 w-6" : "h-8 w-8"}`}>
              <BellIcon className={sm ? "h-3 w-3 text-ink-muted" : "h-3.5 w-3.5 text-ink-muted"} aria-hidden />
            </span>
          </div>

          <div className={`grid grid-cols-2 gap-2 ${sm ? "mt-3" : "mt-4"}`}>
            {screen.stats.map((s, i) =>
            <div key={s.label} className={`rounded-xl ${i === 0 ? "bg-night text-white" : "bg-surface text-ink ring-1 ring-line"} ${sm ? "p-2" : "p-3"}`}>
                <p className={`truncate ${i === 0 ? "text-white/60" : "text-ink-subtle"} ${sm ? "text-[8px]" : "text-[10px]"}`}>{s.label}</p>
                <p className={`mt-0.5 truncate font-display font-bold ${i === 0 ? "text-brand" : ""} ${sm ? "text-[13px]" : "text-base"}`}>{s.value}</p>
              </div>
            )}
          </div>

          <p className={`font-semibold text-ink ${sm ? "mt-3 text-[10px]" : "mt-5 text-xs"}`}>Activity</p>
          <ul className={`space-y-1.5 ${sm ? "mt-1.5" : "mt-2"}`}>
            {screen.items.map((item) =>
            <li key={item.title} className={`flex items-center justify-between gap-2 rounded-xl bg-surface ring-1 ring-line ${sm ? "p-2" : "p-2.5"}`}>
                <div className="min-w-0">
                  <p className={`truncate font-semibold text-ink ${sm ? "text-[9px]" : "text-[11px]"}`}>{item.title}</p>
                  <p className={`truncate text-ink-subtle ${sm ? "text-[8px]" : "text-[10px]"}`}>{item.meta}</p>
                </div>
                <StatusChip label={item.status} tone={item.tone} />
              </li>
            )}
          </ul>

          <div className="mt-auto pb-2">
            <div className={`flex items-center justify-center rounded-xl bg-brand font-semibold text-ink ${sm ? "h-8 text-[10px]" : "h-10 text-xs"}`}>
              {screen.action}
            </div>
            <div className={`flex items-center justify-around text-ink-subtle ${sm ? "mt-2" : "mt-3"}`} aria-hidden>
              <HomeIcon className="h-4 w-4 text-brand-ink" />
              <PackageIcon className="h-4 w-4" />
              <TruckIcon className="h-4 w-4" />
              <UserIcon className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>);

}