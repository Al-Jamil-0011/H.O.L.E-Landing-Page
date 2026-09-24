import type { LucideIcon } from "lucide-react";

export type Tone = "brand" | "success" | "warning" | "neutral";

export interface StatusItem {
  title: string;
  meta: string;
  status: string;
  tone: Tone;
}

export interface PhoneScreenData {
  greeting: string;
  title: string;
  stats: {label: string;value: string;}[];
  items: StatusItem[];
  action: string;
}

export interface FeatureTable {
  title: string;
  columns: string[];
  rows: {cells: string[];status: {label: string;tone: Tone;};}[];
}

export interface Feature {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  description: string;
  bullets: string[];
  table: FeatureTable;
}

export interface Role {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
  screen: PhoneScreenData;
}

export interface InventoryCategory {
  id: string;
  label: string;
  available: number;
  assigned: number;
  moving: number;
  items: {name: string;serial: string;location: string;status: string;tone: Tone;}[];
}