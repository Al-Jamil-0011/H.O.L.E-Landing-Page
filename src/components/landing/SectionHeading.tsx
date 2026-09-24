import React from "react";
import { Reveal } from "./Reveal";

export interface SectionHeadingProps {
  id?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeading({
  id,
  title,
  description,
  align = "center",
  dark = false,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={`${centered ? "mx-auto text-center" : ""} ${className || (centered ? "max-w-4xl" : "max-w-2xl")}`}>
      <h2
        id={id}
        className={`font-display text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl ${
          dark ? "text-white" : "text-ink"
        } ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${descriptionClassName || (centered ? "max-w-3xl" : "")} ${
            dark ? "text-night-muted" : "text-ink-muted"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}