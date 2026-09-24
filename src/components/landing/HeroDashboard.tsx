import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BoxesIcon,
  CheckCircle2Icon,
  ClipboardListIcon,
  CoinsIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  Navigation2Icon,
  PlusIcon,
  RadioIcon,
  SearchIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  TruckIcon,
  UserCogIcon,
  WalletIcon,
} from "lucide-react";
import { StatusChip } from "./StatusChip";

/* ─── Role definitions ─────────────────────────────────────────────────── */
type Role = "command" | "manager" | "rep" | "driver" | "finance";

const ROLES: { id: Role; label: string; subtitle: string }[] = [
  { id: "command",  label: "Command Hub", subtitle: "Global Multi-Role Operational Mesh" },
  { id: "manager",  label: "Manager",     subtitle: "Regional Director · All Territories" },
  { id: "rep",      label: "Sales Rep",   subtitle: "Southeast Territory · J. Rivera" },
  { id: "driver",   label: "Driver",      subtitle: "Courier #8 · Active Route" },
  { id: "finance",  label: "Finance",     subtitle: "Finance Ops · P. Shah" },
];

/* ─── Shared nav ────────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "Overview",        icon: LayoutDashboardIcon },
  { label: "Sales",           icon: TrendingUpIcon },
  { label: "Inventory",       icon: BoxesIcon },
  { label: "Shipments",       icon: TruckIcon },
  { label: "Purchase Orders", icon: ClipboardListIcon },
  { label: "Finance",         icon: WalletIcon },
  { label: "Admin",           icon: ShieldCheckIcon },
];

/* ─── Role-specific dashboard content ──────────────────────────────────── */
const ease = [0.23, 1, 0.32, 1] as const;

function CommandHubView() {
  return (
    <div className="p-4 sm:p-6 space-y-5 bg-white">
      {/* 4 Multi-Role Metric Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        
        {/* Col 1: Surgery Sales Pipeline */}
        <div className="pr-0 lg:pr-5 pb-4 md:pb-0">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold tracking-wider text-slate-400 uppercase text-[10px]">
              SURGERY SALES PIPELINE
            </span>
            <span className="inline-flex items-center gap-0.5 rounded bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
              <TrendingUpIcon className="h-2.5 w-2.5" /> +24.8% vs last cycle
            </span>
          </div>
          <p className="mt-2 font-mono text-2xl lg:text-[26px] font-extrabold tracking-tight text-slate-900">
            $148,200.00
          </p>
          <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500">
            <span>Cases: 42 Scheduled</span>
            <span className="inline-flex items-center gap-1 font-medium text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" /> Bill Split: Active
            </span>
          </div>
        </div>

        {/* Col 2: UDI Serialized Scan */}
        <div className="px-0 lg:px-5 py-4 md:py-0">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold tracking-wider text-slate-400 uppercase text-[10px] flex items-center gap-1">
              <BoxesIcon className="h-3 w-3 text-slate-400" /> UDI SERIALIZED SCAN
            </span>
          </div>
          <p className="mt-2 text-base lg:text-[17px] font-bold text-slate-900 truncate">
            Titanium Tibial Tray
          </p>
          <p className="font-mono text-xs text-slate-500">SB-9823471-LOT-89</p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="inline-flex items-center gap-1 rounded bg-teal-50 border border-teal-200/60 px-1.5 py-0.5 text-[10px] font-semibold text-teal-700">
              <CheckCircle2Icon className="h-2.5 w-2.5 text-teal-600" /> Tray Verified
            </span>
            <span className="text-slate-500 text-[11px]">Baylor Surgicenter</span>
          </div>
        </div>

        {/* Col 3: Logistics & Cold-Chain */}
        <div className="px-0 lg:px-5 py-4 md:py-0">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold tracking-wider text-slate-400 uppercase text-[10px] flex items-center gap-1">
              <TruckIcon className="h-3 w-3 text-slate-400" /> LOGISTICS &amp; COLD-CHAIN
            </span>
          </div>
          <p className="mt-2 text-sm font-bold text-slate-900 truncate">
            Courier: Marcus Thorne
          </p>
          <p className="text-xs text-slate-500 truncate">Route: Memorial Hermann OR #4</p>
          <div className="mt-2 flex items-center justify-between text-[11px]">
            <span className="inline-flex items-center gap-1 rounded bg-teal-50 border border-teal-200/60 px-1.5 py-0.5 text-[10px] font-semibold text-teal-700">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" /> +3.8°C Steady
            </span>
            <span className="font-mono font-semibold text-slate-700 text-xs">ETA 17:45</span>
          </div>
        </div>

        {/* Col 4: Commission Settlement */}
        <div className="pl-0 lg:pl-5 pt-4 md:pt-0">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-bold tracking-wider text-slate-400 uppercase text-[10px] flex items-center gap-1">
              <WalletIcon className="h-3 w-3 text-slate-400" /> COMMISSION SETTLEMENT
            </span>
          </div>
          <p className="mt-2 font-mono text-2xl lg:text-[26px] font-extrabold tracking-tight text-slate-900">
            $4,200.00
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="inline-flex items-center gap-1 rounded bg-teal-50 border border-teal-200/60 px-1.5 py-0.5 text-[10px] font-semibold text-teal-700">
              <CheckCircle2Icon className="h-2.5 w-2.5 text-teal-600" /> Paid &amp; Synced to QB
            </span>
          </div>
          <p className="mt-1 text-[11px] text-slate-500">
            Tier: Ortho Principal <span className="mx-1">•</span> Rate: 14.5%
          </p>
        </div>

      </div>

      {/* Live Events Telemetry Footer Ticker */}
      <div className="rounded-xl bg-slate-50/90 border border-slate-100 px-3.5 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-slate-700 uppercase tracking-wider text-[10px] flex items-center gap-1">
            <RadioIcon className="h-3 w-3 text-teal-600 animate-pulse" /> LIVE EVENTS TELEMETRY:
          </span>
          <span className="inline-flex items-center gap-1 rounded bg-blue-50 border border-blue-200/60 px-2 py-0.5 text-[10px] font-medium text-blue-700">
            Shipment #SHP-4019 Delivered (Dock B)
          </span>
          <span className="text-slate-600">
            • Inventory Recount Completed: 1,840 items
          </span>
          <span className="hidden lg:inline text-slate-600">
            • New Surgery Case Approved (Dr. Vance)
          </span>
        </div>
        <div className="shrink-0 font-mono text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Network Uptime: 99.99%
        </div>
      </div>
    </div>
  );
}

function ManagerView() {
  const kpis = [
    { label: "Sales this month", value: "$148,200", note: "+12.4% vs Aug",  primary: true },
    { label: "Inventory units",  value: "1,536",    note: "3 low-stock items" },
    { label: "In transit",       value: "9",         note: "36 open today" },
    { label: "Commission queue", value: "$24,860",   note: "42 approved" },
  ];
  const bars  = [42, 55, 48, 62, 58, 70, 66, 78, 74, 86, 82, 94];
  const stock = [
    { label: "Implants",     pct: 82, tone: "bg-brand" },
    { label: "Trays",        pct: 64, tone: "bg-brand" },
    { label: "Bio Products", pct: 28, tone: "bg-warning-ink" },
  ];
  const shipments = [
    { id: "SHP-20418", route: "Warehouse → St. Mary's",    driver: "M. Lewis", status: "In transit",      tone: "brand"   as const },
    { id: "SHP-20415", route: "Warehouse → Mercy General", driver: "A. Diaz",  status: "Driver assigned", tone: "warning" as const },
    { id: "SHP-20412", route: "Northside → Memorial",      driver: "M. Lewis", status: "Delivered",       tone: "success" as const },
  ];
  const activity = [
    { who: "Rep",     text: "J. Rivera created SL-10482",       time: "2m"  },
    { who: "Manager", text: "D. Whitfield approved PO-3391",     time: "9m"  },
    { who: "Driver",  text: "M. Lewis picked up T-112",          time: "18m" },
    { who: "Finance", text: "P. Shah paid VP-771",               time: "41m" },
  ];

  return (
    <div className="space-y-3.5">
      {/* Greeting + actions */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-display text-sm font-bold text-ink sm:text-base">Good morning, Dana</p>
          <p className="text-[11px] text-ink-subtle">Southeast territory · Wednesday, Sep 23</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden h-7 w-36 items-center gap-2 rounded-lg bg-canvas px-2.5 text-[10px] text-ink-subtle ring-1 ring-line sm:flex">
            <SearchIcon className="h-3 w-3" /> Search orders…
          </span>
          <span className="inline-flex h-7 items-center gap-1 whitespace-nowrap rounded-lg bg-night px-2.5 text-[10px] font-semibold text-white">
            <PlusIcon className="h-3 w-3" /> New sale
          </span>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {kpis.map((k) => (
          <div key={k.label} className={`rounded-xl p-2.5 ${k.primary ? "bg-night text-white" : "bg-canvas ring-1 ring-line"}`}>
            <p className={`text-[9px] ${k.primary ? "text-white/60" : "text-ink-subtle"}`}>{k.label}</p>
            <p className={`mt-0.5 font-display text-base font-extrabold tracking-tight ${k.primary ? "text-white" : "text-ink"}`}>{k.value}</p>
            <p className={`text-[9px] ${k.primary ? "text-brand" : "text-ink-subtle"}`}>{k.note}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="rounded-xl p-3 ring-1 ring-line lg:col-span-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold text-ink">Sales overview</p>
            <span className="text-[10px] text-ink-subtle">Last 12 weeks</span>
          </div>
          <svg viewBox="0 0 240 80" className="mt-2 h-24 w-full" preserveAspectRatio="none">
            {[18, 40, 62].map((y) => (
              <line key={y} x1="0" x2="240" y1={y} y2={y} stroke="#E3E8E9" strokeWidth="0.5" />
            ))}
            {bars.map((b, i) => (
              <rect key={i} x={i * 20 + 4} y={80 - b * 0.8} width="12" height={b * 0.8} rx="2"
                fill={i === bars.length - 1 ? "#00C5DA" : "#CFEFF3"} />
            ))}
          </svg>
        </div>
        <div className="rounded-xl p-3 ring-1 ring-line">
          <p className="text-[11px] font-semibold text-ink">Inventory status</p>
          <ul className="mt-2.5 space-y-2.5">
            {stock.map((s) => (
              <li key={s.label}>
                <div className="flex justify-between text-[10px]">
                  <span className="text-ink-muted">{s.label}</span>
                  <span className="font-semibold text-ink">{s.pct}% available</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-canvas">
                  <div className={`h-full rounded-full ${s.tone}`} style={{ width: `${s.pct}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Shipments + activity */}
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="rounded-xl p-3 ring-1 ring-line lg:col-span-2">
          <p className="text-[11px] font-semibold text-ink">Shipment tracking</p>
          <ul className="mt-2 divide-y divide-line">
            {shipments.map((s) => (
              <li key={s.id} className="flex items-center justify-between gap-2 py-1.5 text-[10px]">
                <span className="w-[72px] shrink-0 font-mono font-medium text-ink">{s.id}</span>
                <span className="hidden flex-1 truncate text-ink-muted sm:block">{s.route}</span>
                <span className="hidden w-14 text-ink-subtle md:block">{s.driver}</span>
                <StatusChip label={s.status} tone={s.tone} />
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl p-3 ring-1 ring-line">
          <p className="text-[11px] font-semibold text-ink">Recent activity</p>
          <ul className="mt-2 space-y-2">
            {activity.map((a) => (
              <li key={a.text} className="flex gap-2 text-[10px]">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                <span className="min-w-0 flex-1">
                  <span className="font-semibold text-ink">{a.who}</span>{" "}
                  <span className="text-ink-muted">{a.text}</span>
                </span>
                <span className="text-ink-subtle">{a.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function RepView() {
  const cases = [
    { id: "SL-10482", surgeon: "Dr. A. Patel",  hospital: "St. Mary's · OR 4",     value: "$12,400", status: "Approved",  tone: "success"  as const },
    { id: "SL-10479", surgeon: "Dr. K. Torres",  hospital: "Mercy General · OR 2",  value: "$8,750",  status: "Pending",   tone: "warning"  as const },
    { id: "SL-10471", surgeon: "Dr. S. Park",    hospital: "Memorial · OR 1",        value: "$6,200",  status: "Submitted", tone: "brand"    as const },
  ];
  const inventory = [
    { label: "Spinal Fusion Tray T-112",  qty: "2 units",   avail: true  },
    { label: "Pedicle Screws 6.5×45",     qty: "12 units",  avail: true  },
    { label: "Bone Allograft 10cc",        qty: "1 unit",    avail: false },
  ];

  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-display text-sm font-bold text-ink sm:text-base">My Cases – This Week</p>
          <p className="text-[11px] text-ink-subtle">Southeast territory · 3 active · $27,350 total</p>
        </div>
        <span className="inline-flex h-7 items-center gap-1 whitespace-nowrap rounded-lg bg-brand px-2.5 text-[10px] font-semibold text-ink">
          <PlusIcon className="h-3 w-3" /> New case
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "My sales MTD",   value: "$41,800", note: "+8.3% goal",   highlight: true },
          { label: "Commission YTD", value: "$4,320",  note: "10% Tier A"                    },
          { label: "Pending review", value: "2",       note: "cases queued"                  },
        ].map((k) => (
          <div key={k.label} className={`rounded-xl p-2.5 ${k.highlight ? "bg-brand-soft ring-1 ring-brand-line" : "bg-canvas ring-1 ring-line"}`}>
            <p className="text-[9px] text-ink-subtle">{k.label}</p>
            <p className={`mt-0.5 font-display text-base font-extrabold ${k.highlight ? "text-brand-ink" : "text-ink"}`}>{k.value}</p>
            <p className="text-[9px] text-ink-subtle">{k.note}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl p-3 ring-1 ring-line">
        <p className="text-[11px] font-semibold text-ink">Active cases</p>
        <ul className="mt-2 divide-y divide-line">
          {cases.map((c) => (
            <li key={c.id} className="flex items-center justify-between gap-2 py-1.5 text-[10px]">
              <span className="w-[60px] shrink-0 font-mono font-medium text-ink">{c.id}</span>
              <span className="hidden flex-1 truncate text-ink-muted sm:block">{c.surgeon} · {c.hospital}</span>
              <span className="hidden font-semibold text-ink md:block">{c.value}</span>
              <StatusChip label={c.status} tone={c.tone} />
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl p-3 ring-1 ring-line">
        <p className="text-[11px] font-semibold text-ink">My field inventory</p>
        <ul className="mt-2 space-y-1.5">
          {inventory.map((item) => (
            <li key={item.label} className="flex items-center justify-between text-[10px]">
              <span className="text-ink-muted">{item.label}</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-ink">{item.qty}</span>
                <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${item.avail ? "bg-success-soft text-success-ink" : "bg-warning-soft text-warning-ink"}`}>
                  {item.avail ? "In stock" : "Low"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DriverView() {
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-display text-sm font-bold text-ink sm:text-base">Active Route — M. Lewis</p>
          <p className="text-[11px] text-ink-subtle">Sprinter #8 · On duty since 8:00 AM</p>
        </div>
        <span className="inline-flex h-7 items-center gap-1.5 rounded-lg bg-brand-soft px-2.5 text-[10px] font-semibold text-brand-ink ring-1 ring-brand-line">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" /> Live GPS
        </span>
      </div>

      <div className="rounded-xl overflow-hidden ring-1 ring-line">
        {/* Stylised map placeholder */}
        <div className="relative h-32 bg-gradient-to-br from-brand-soft via-[#EAF9FC] to-canvas">
          <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 400 128">
            <path d="M0 64 Q100 30 200 64 T400 64" stroke="#00C5DA" strokeWidth="2" fill="none" strokeDasharray="8 4" />
            <circle cx="340" cy="64" r="8" fill="#00C5DA" opacity="0.5" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-1">
              <Navigation2Icon className="h-7 w-7 text-brand" />
              <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-brand-ink shadow-sm backdrop-blur">
                I-85 North · 2.1 mi to St. Mary's
              </span>
            </div>
          </div>
          <div className="absolute bottom-2 right-3 text-[10px] font-semibold text-brand-ink">ETA: 2:40 PM (14 min)</div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-line p-0">
          {[
            { label: "Speed",        value: "52 mph" },
            { label: "Temp Logger",  value: "3.8 °C ✓" },
            { label: "Seal",         value: "#99214 OK" },
          ].map((s) => (
            <div key={s.label} className="px-3 py-2 text-center">
              <p className="text-[9px] text-ink-subtle">{s.label}</p>
              <p className="text-[11px] font-semibold text-ink">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl p-3 ring-1 ring-line">
        <p className="text-[11px] font-semibold text-ink">Today's stops</p>
        <ul className="mt-2 space-y-2">
          {[
            { stop: "1", loc: "Central Depot Bay 3",    time: "1:45 PM", done: true,  action: "Picked up" },
            { stop: "2", loc: "St. Mary's OR 4",         time: "2:40 PM", done: false, action: "Deliver tray T-112" },
            { stop: "3", loc: "Memorial · Supply Dock",  time: "4:15 PM", done: false, action: "Return empties" },
          ].map((s) => (
            <li key={s.stop} className="flex items-start gap-2 text-[10px]">
              <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${s.done ? "bg-success-soft text-success-ink" : "bg-canvas ring-1 ring-line text-ink-subtle"}`}>{s.stop}</span>
              <div className="flex-1">
                <span className={`font-semibold ${s.done ? "text-ink-subtle line-through" : "text-ink"}`}>{s.loc}</span>
                <span className="ml-1.5 text-ink-subtle">{s.action}</span>
              </div>
              <span className="shrink-0 text-ink-subtle">{s.time}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-canvas p-3 ring-1 ring-line text-[10px]">
        <span className="text-ink-muted">Deliveries today</span>
        <span className="font-bold text-ink">2 of 3 complete</span>
        <div className="w-24 h-1.5 rounded-full bg-line">
          <div className="h-full w-2/3 rounded-full bg-brand" />
        </div>
      </div>
    </div>
  );
}

function FinanceView() {
  const ledger = [
    { ref: "SL-10482", hospital: "St. Mary's",    gross: "$12,400", margin: "44.2%", rep: "Rivera",    status: "Closed",    tone: "success" as const },
    { ref: "SL-10475", hospital: "Mercy General", gross: "$8,750",  margin: "41.8%", rep: "Torres",    status: "Invoiced",  tone: "brand"   as const },
    { ref: "SL-10463", hospital: "Memorial",      gross: "$6,200",  margin: "38.5%", rep: "Park",      status: "Pending",   tone: "warning" as const },
  ];
  return (
    <div className="space-y-3.5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="font-display text-sm font-bold text-ink sm:text-base">Finance — September 2025</p>
          <p className="text-[11px] text-ink-subtle">Closed: $148,200 · Open: $15,350 · 42 commissions queued</p>
        </div>
        <span className="inline-flex h-7 items-center gap-1 whitespace-nowrap rounded-lg bg-success-soft px-2.5 text-[10px] font-semibold text-success-ink ring-1 ring-success-ink/20">
          <CoinsIcon className="h-3 w-3" /> Run payroll
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Net revenue MTD",  value: "$113,640", note: "+8.2% YoY",        highlight: true },
          { label: "Commissions due",  value: "$14,820",  note: "42 reps · Fri pay"               },
          { label: "Avg gross margin", value: "41.5%",    note: "Target: ≥40%"                     },
        ].map((k) => (
          <div key={k.label} className={`rounded-xl p-2.5 ${k.highlight ? "bg-night text-white" : "bg-canvas ring-1 ring-line"}`}>
            <p className={`text-[9px] ${k.highlight ? "text-white/60" : "text-ink-subtle"}`}>{k.label}</p>
            <p className={`mt-0.5 font-display text-sm font-extrabold ${k.highlight ? "text-white" : "text-ink"}`}>{k.value}</p>
            <p className={`text-[9px] ${k.highlight ? "text-brand" : "text-ink-subtle"}`}>{k.note}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl p-3 ring-1 ring-line">
        <p className="text-[11px] font-semibold text-ink">Open ledger — cases</p>
        <ul className="mt-2 divide-y divide-line">
          {ledger.map((l) => (
            <li key={l.ref} className="flex items-center justify-between gap-2 py-1.5 text-[10px]">
              <span className="w-[60px] shrink-0 font-mono font-medium text-ink">{l.ref}</span>
              <span className="hidden flex-1 truncate text-ink-muted sm:block">{l.hospital} · {l.rep}</span>
              <span className="hidden font-semibold text-ink md:block">{l.gross}</span>
              <span className="hidden text-ink-subtle md:block">{l.margin}</span>
              <StatusChip label={l.status} tone={l.tone} />
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl p-3 ring-1 ring-line">
        <p className="text-[11px] font-semibold text-ink">Commission breakdown</p>
        <ul className="mt-2 space-y-2">
          {[
            { name: "J. Rivera",  amt: "$1,240", tier: "Tier A · 10%", ready: true  },
            { name: "K. Torres",  amt: "$875",   tier: "Tier A · 10%", ready: true  },
            { name: "S. Park",    amt: "$620",   tier: "Tier B · 8%",  ready: false },
          ].map((c) => (
            <li key={c.name} className="flex items-center justify-between text-[10px]">
              <span className="font-semibold text-ink">{c.name}</span>
              <span className="text-ink-subtle">{c.tier}</span>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-ink">{c.amt}</span>
                <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${c.ready ? "bg-success-soft text-success-ink" : "bg-warning-soft text-warning-ink"}`}>
                  {c.ready ? "Ready" : "Pending"}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Main HeroDashboard component ─────────────────────────────────────── */
export function HeroDashboard() {
  const [activeRole, setActiveRole] = useState<Role>("command");

  const currentRole = ROLES.find((r) => r.id === activeRole)!;

  const navActiveLabel =
    activeRole === "manager" ? "Overview" :
    activeRole === "rep"     ? "Sales"    :
    activeRole === "driver"  ? "Shipments":
                               "Finance";

  return (
    <div
      className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/60"
      role="img"
      aria-label={`H.O.L.E. APP dashboard — ${currentRole.label} view`}
    >
      {/* ── Top Chrome / Header Bar matching Html_Body_3.png ───────────────── */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-100 bg-[#FAFAFA] px-4 py-2.5 text-xs" aria-hidden>
        {/* Left: Green status dot + Network name + Mesh badge */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-semibold text-slate-800 text-[12px] sm:text-[13px]">
            OrthoGlobal Health Network // Global Command Hub
          </span>
          <span className="hidden sm:inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-[10px] font-semibold text-[#00707E]">
            Mesh v4.19 Stable
          </span>
        </div>

        {/* Right: GPS Telemetry + Role Switcher Tabs */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>GPS Telemetry 100%</span>
            <span className="text-slate-300">|</span>
            <span className="font-mono">Sync: 1.2s ago</span>
          </div>

          {/* ── Interactive role-switcher tabs ───────────────────────────── */}
          <div className="flex items-center gap-1 rounded-lg bg-slate-100/90 p-0.5 border border-slate-200/60" aria-label="View dashboard as role">
            {ROLES.map((r) => (
              <button
                key={r.id}
                type="button"
                onMouseEnter={() => setActiveRole(r.id)}
                onClick={() => setActiveRole(r.id)}
                className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-semibold transition-all duration-150 ${
                  activeRole === r.id
                    ? "bg-[#00707E] text-white shadow-sm"
                    : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
                }`}
              >
                {activeRole === r.id && <span className="h-1.5 w-1.5 rounded-full bg-white/70" />}
                {r.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Dashboard Content ───────────────────────────────────────────── */}
      {activeRole === "command" ? (
        <AnimatePresence mode="wait">
          <motion.div
            key="command"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease }}
          >
            <CommandHubView />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="grid grid-cols-12" aria-hidden>
          {/* Sidebar */}
          <aside className="col-span-2 hidden border-r border-slate-100 bg-[#FAFAFA]/50 p-3 md:block">
            <ul className="space-y-0.5">
              {NAV_ITEMS.map(({ label, icon: Icon }) => {
                const isActive = label === navActiveLabel;
                return (
                  <li
                    key={label}
                    className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] font-medium transition-colors ${
                      isActive ? "bg-teal-50 text-[#00707E] font-semibold" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    <span className="truncate">{label}</span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 rounded-xl bg-slate-50 border border-slate-100 p-2.5">
              <p className="text-[10px] font-semibold text-slate-800">
                {activeRole === "driver" ? "Sprinter #8" : "Southeast"}
              </p>
              <p className="text-[9px] text-slate-500">
                {activeRole === "driver" ? "Active · En route" : "12 reps · 6 drivers"}
              </p>
            </div>
            {/* Role indicator at bottom of sidebar */}
            <div className="mt-3 flex items-center gap-1.5 rounded-xl border border-teal-200/70 bg-teal-50/80 px-2 py-1.5">
              <UserCogIcon className="h-3 w-3 text-[#00707E] shrink-0" />
              <span className="text-[9px] font-semibold text-[#00707E] truncate">{currentRole.label}</span>
            </div>
          </aside>

          {/* Main content — animated role transition */}
          <div className="col-span-12 p-4 sm:p-5 md:col-span-10 overflow-hidden bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease }}
              >
                {activeRole === "manager" && <ManagerView />}
                {activeRole === "rep"     && <RepView />}
                {activeRole === "driver"  && <DriverView />}
                {activeRole === "finance" && <FinanceView />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}