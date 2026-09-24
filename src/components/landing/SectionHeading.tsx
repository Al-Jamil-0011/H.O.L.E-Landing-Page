import React from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  id?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
}

export function SectionHeading({ id, title, description, align = "center", dark = false }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <h2
        id={id}
        className={`font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl ${dark ? "text-white" : "text-ink"}`}>
        
        {title}
      </h2>
      {description &&
      <p className={`mt-5 text-lg leading-relaxed ${centered ? "mx-auto max-w-2xl" : ""} ${dark ? "text-night-muted" : "text-ink-muted"}`}>
          {description}
        </p>
      }
    </Reveal>);

}