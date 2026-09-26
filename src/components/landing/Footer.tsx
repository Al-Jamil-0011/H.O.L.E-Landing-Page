import { Logo } from "./Logo";

const navLinks = [
  { label: "Platform", href: "#top" },
  { label: "How It Works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Roles", href: "#roles" },
  { label: "Logistics", href: "#logistics" },
  { label: "Finance", href: "#finance" },
  { label: "Request a Demo", href: "#demo" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        {/* Main Minimal Brand Stage */}
        <div className="flex flex-col items-center text-center">
          {/* Bigger, Beautiful H.O.L.E. Logo Presentation */}
          <a
            href="#top"
            aria-label="H.O.L.E. APP — Back to top"
            className="group relative inline-flex flex-col items-center justify-center p-3 rounded-3xl transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {/* Ambient Brand Backlight Glow */}
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-brand/15 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 dark:bg-brand/20"
              aria-hidden
            />
            <Logo imgClassName="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform duration-200 drop-shadow-sm" />
          </a>

          {/* Minimal Subtitle */}
          <p className="mt-5 max-w-lg text-sm sm:text-base leading-relaxed text-ink-muted">
            The connected healthcare operations platform. Complete control from field to finance.
          </p>

          {/* Clean Single-Row Navigation */}
          <nav aria-label="Footer Navigation" className="mt-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-ink-muted transition-colors duration-150 hover:text-ink hover:underline underline-offset-4"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Minimal Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-line flex flex-col items-center justify-between gap-4 text-xs text-ink-subtle sm:flex-row">
          <p>© 2026 H.O.L.E. APP. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[11px] text-ink-subtle">All Systems Operational</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#top" className="transition-colors hover:text-ink">
              Privacy Policy
            </a>
            <a href="#top" className="transition-colors hover:text-ink">
              Terms of Service
            </a>
            <a href="#top" className="transition-colors hover:text-ink">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}