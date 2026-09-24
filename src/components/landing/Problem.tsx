import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { UnlinkIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { fragmentedNodes, painPoints } from "../../data/landing";

const brokenPairs: [number, number][] = [
[0, 2],
[1, 3],
[4, 6],
[5, 7],
[2, 5]];


function ringPosition(i: number, n: number) {
  const a = i / n * Math.PI * 2 - Math.PI / 2;
  return { x: 50 + 36 * Math.cos(a), y: 50 + 36 * Math.sin(a) };
}

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [connected, setConnected] = useState(false);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (!inView || touched) return;
    const t = setTimeout(() => setConnected(true), 1600);
    return () => clearTimeout(t);
  }, [inView, touched]);

  const choose = (value: boolean) => {
    setTouched(true);
    setConnected(value);
  };

  const n = fragmentedNodes.length;

  return (
    <section aria-labelledby="problem-title" className="bg-canvas py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
        <div>
          <Reveal>
            <h2 id="problem-title" className="font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl">
              Healthcare operations shouldn't feel this fragmented.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
              Eight teams, eight tools, and nothing shared between them. H.O.L.E. APP puts them on one system.
            </p>
          </Reveal>
          <div className="mt-10 space-y-3.5">
            {painPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-line/70 bg-surface p-4 sm:p-5 shadow-subtle transition-all duration-200 hover:border-brand/40">
                  <div className="flex items-center gap-3">
                    <span className="grid h-7 w-7 place-items-center rounded-xl bg-canvas text-xs font-bold font-mono text-ink-subtle ring-1 ring-line">
                      0{i + 1}
                    </span>
                    <p className="font-semibold text-ink text-sm sm:text-base">{p.title}</p>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink-muted pl-10">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div
            ref={ref}
            className="relative h-[460px] overflow-hidden rounded-3xl border border-line bg-surface sm:h-[520px]"
            style={{ backgroundImage: "radial-gradient(#E3E8E9 1px, transparent 1px)", backgroundSize: "22px 22px" }}>
            
            <div className="absolute left-4 top-4 z-20 inline-flex rounded-xl bg-canvas p-1 ring-1 ring-line" role="group" aria-label="Toggle view">
              {[
              { label: "Fragmented", value: false },
              { label: "Connected", value: true }].
              map((o) =>
              <button
                key={o.label}
                type="button"
                aria-pressed={connected === o.value}
                onClick={() => choose(o.value)}
                className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-semibold transition-[background-color,color] duration-150 ${
                connected === o.value ? "bg-surface text-ink shadow-card" : "text-ink-muted hover:text-ink"}`
                }>
                
                  {o.label}
                </button>
              )}
            </div>

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              {connected ?
              fragmentedNodes.map((node, i) => {
                const p = ringPosition(i, n);
                return (
                  <motion.line
                    key={node.label}
                    x1="50"
                    y1="50"
                    x2={p.x}
                    y2={p.y}
                    stroke="#00C5DA"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    vectorEffect="non-scaling-stroke"
                    className="animate-dash"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: reduce ? 0 : 0.25 + i * 0.04, duration: 0.25 }} />);


              }) :
              brokenPairs.map(([a, b]) => {
                const A = fragmentedNodes[a];
                const B = fragmentedNodes[b];
                const mx1 = A.x + (B.x - A.x) * 0.4;
                const my1 = A.y + (B.y - A.y) * 0.4;
                const mx2 = A.x + (B.x - A.x) * 0.6;
                const my2 = A.y + (B.y - A.y) * 0.6;
                return (
                  <g key={`${a}-${b}`} stroke="#C9D1D2" strokeWidth="1.2" strokeDasharray="3 4">
                        <line x1={A.x} y1={A.y} x2={mx1} y2={my1} vectorEffect="non-scaling-stroke" />
                        <line x1={mx2} y1={my2} x2={B.x} y2={B.y} vectorEffect="non-scaling-stroke" />
                      </g>);

              })}
            </svg>

            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={false}
                animate={{ opacity: connected ? 1 : 0, scale: connected ? 1 : 0.96 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1], delay: connected ? 0.15 : 0 }}
                className="grid h-28 w-28 place-items-center rounded-3xl bg-night text-center shadow-float">
                
                <div>
                  <span className="mx-auto block h-5 w-5 rounded-full border-[4px] border-brand" aria-hidden />
                  <p className="mt-2 font-display text-sm font-extrabold text-white">H.O.L.E.</p>
                  <p className="text-[10px] text-white/60">One system</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={false}
              animate={{ opacity: connected ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 rounded-lg bg-canvas px-2.5 py-1.5 text-[11px] font-medium text-ink-muted ring-1 ring-line">
              
              <UnlinkIcon className="h-3.5 w-3.5" aria-hidden /> No shared source of truth
            </motion.div>

            {fragmentedNodes.map(({ label, icon: Icon, x, y }, i) => {
              const p = connected ? ringPosition(i, n) : { x, y };
              return (
                <motion.div
                  key={label}
                  className="absolute z-10"
                  initial={false}
                  animate={{ left: `${p.x}%`, top: `${p.y}%` }}
                  transition={{ duration: reduce ? 0 : 0.3, ease: [0.77, 0, 0.175, 1], delay: reduce ? 0 : i * 0.035 }}>
                  
                  <div
                    className={`flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-xl border bg-surface px-3 py-2 text-xs font-semibold shadow-card transition-[border-color,color] duration-200 ${
                    connected ? "border-brand-line text-ink" : "border-line text-ink-muted"}`
                    }>
                    
                    <Icon className={`h-3.5 w-3.5 ${connected ? "text-brand-ink" : "text-ink-subtle"}`} aria-hidden />
                    {label}
                  </div>
                </motion.div>);

            })}
          </div>
        </Reveal>
      </div>
    </section>);

}