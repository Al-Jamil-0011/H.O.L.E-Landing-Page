import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`group relative inline-flex items-center gap-2 rounded-xl border border-line bg-surface/90 px-2.5 py-1.5 text-xs font-medium text-ink shadow-sm backdrop-blur transition-all duration-200 hover:border-brand/50 hover:bg-surface hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${className}`}
    >
      <div className="relative h-4 w-4">
        <motion.div
          key={theme}
          initial={{ rotate: -60, opacity: 0, scale: 0.7 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 60, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 grid place-items-center"
        >
          {isDark ? (
            <SunIcon className="h-4 w-4 text-amber-400 group-hover:rotate-45 transition-transform" />
          ) : (
            <MoonIcon className="h-4 w-4 text-slate-700 group-hover:-rotate-12 transition-transform" />
          )}
        </motion.div>
      </div>

      {showLabel && (
        <span className="font-medium text-ink-muted group-hover:text-ink">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}
