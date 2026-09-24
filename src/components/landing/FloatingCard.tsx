import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { StatusChip } from "./StatusChip";
import { Tone } from "../../types/landing";
import { BoxIcon } from "lucide-react";
interface FloatingCardProps {
  icon: BoxIcon;
  title: string;
  meta: string;
  status: string;
  tone: Tone;
  position: string;
  delay: number;
}
export function FloatingCard({
  icon: Icon,
  title,
  meta,
  status,
  tone,
  position,
  delay
}: FloatingCardProps) {
  const reduce = useReducedMotion();
  return <motion.div aria-hidden className={`absolute z-10 hidden xl:block ${position}`} animate={reduce ? undefined : {
    y: [0, -10, 0]
  }} transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
    delay
  }}>
      <div className="w-64 rounded-2xl border border-white/80 bg-white/75 p-3.5 shadow-float backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-night">
            <Icon className="h-4 w-4 text-brand" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-[13px] font-semibold text-ink">{title}</p>
              <StatusChip label={status} tone={tone} />
            </div>
            <p className="mt-0.5 truncate text-[11px] text-ink-muted">{meta}</p>
          </div>
        </div>
      </div>
    </motion.div>;
}