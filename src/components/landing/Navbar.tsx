import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks } from "../../data/landing";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200 ease-out ${
        scrolled || open
          ? "border-line bg-surface/85 shadow-sm backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a
          href="#top"
          aria-label="H.O.L.E. APP home"
          className="flex items-center gap-2 rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <Logo imgClassName="h-9 w-auto object-contain" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors duration-150 hover:text-ink hover:bg-surface-muted/60"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <a
            href="#demo"
            className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors duration-150 hover:text-ink"
          >
            Sign in
          </a>

          <a
            href="#demo"
            className="whitespace-nowrap rounded-lg bg-brand px-4 py-2 text-sm font-bold text-slate-950 shadow-sm transition-all duration-150 hover:opacity-95 hover:shadow-glow active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            Request a Demo
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg text-ink hover:bg-surface-muted"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="border-t border-line bg-surface px-5 pb-6 shadow-xl lg:hidden"
          >
            <ul className="py-3 divide-y divide-line/60">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 text-base font-medium text-ink hover:bg-surface-muted"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="flex h-11 items-center justify-center rounded-lg bg-brand font-bold text-slate-950 shadow-sm"
              >
                Request a Demo
              </a>
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="flex h-10 items-center justify-center rounded-lg border border-line bg-surface text-sm font-medium text-ink"
              >
                Sign in
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}