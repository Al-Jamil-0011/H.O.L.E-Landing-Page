import { Logo } from "./Logo";
import { StoreBadges } from "./StoreBadges";
import { footerColumns } from "../../data/landing";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface transition-colors duration-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_2fr] lg:px-8">
        <div>
          <Logo imgClassName="h-9 w-auto object-contain" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
            The connected operations platform for healthcare sales, inventory, logistics, finance and administration.
          </p>
          <div className="mt-6">
            <StoreBadges />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-sm font-semibold text-ink">{col.title}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm text-ink-muted transition-colors duration-150 hover:text-ink">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-6 text-xs text-ink-subtle sm:flex-row lg:px-8">
          <p>© 2026 H.O.L.E. APP. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#top" className="hover:text-ink">Privacy</a>
            <a href="#top" className="hover:text-ink">Terms</a>
            <a href="#top" className="hover:text-ink">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}