import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/nav";
import logo from "@/assets/aimt-logo.png";


export function TopBar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-6 pt-6">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 rounded-xl glass shadow-elegant grid place-items-center overflow-hidden">
            <img src={logo} alt="AIMT crest" className="h-10 w-10 object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-foreground">
              <span className="text-gradient-crest font-semibold">AIMT</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Learning Without Limits
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            to="/admissions"
            className="group inline-flex items-center gap-2 rounded-full bg-crest px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-crimson transition hover:scale-[1.03] md:px-5"
          >
            <span className="hidden sm:inline">Apply Now</span>
            <span className="sm:hidden">Apply</span>
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gold text-ink transition group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SideDock() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 md:block">
      <ul className="flex flex-col gap-3 rounded-full glass px-3 py-4 shadow-elegant">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.to;
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                aria-label={item.label}
                className="group relative flex h-9 w-9 items-center justify-center"
              >
                <span
                  className={`absolute inset-0 rounded-full transition ${
                    active ? "bg-crest shadow-crimson" : "bg-transparent group-hover:bg-muted"
                  }`}
                />
                <span
                  className={`relative font-display text-[11px] tracking-wider transition ${
                    active ? "text-primary-foreground" : "text-foreground/70"
                  }`}
                >
                  {item.short}
                </span>
                {active && (
                  <motion.span
                    layoutId="dock-active"
                    className="absolute -left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-gold shadow-gold"
                  />
                )}
                <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-[11px] font-medium text-ivory opacity-0 shadow-elegant transition group-hover:opacity-100">
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileBar() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <ul className="flex items-center justify-between gap-1 rounded-2xl glass px-2 py-2 shadow-elegant">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.to;
          return (
            <li key={item.to} className="flex-1">
              <Link
                to={item.to}
                className={`flex flex-col items-center justify-center rounded-xl px-1 py-1.5 text-[10px] font-medium transition ${
                  active
                    ? "bg-crest text-primary-foreground shadow-crimson"
                    : "text-foreground"
                }`}
              >
                <span className="font-display text-[12px]">{item.short}</span>
                <span className={`text-[9px] uppercase tracking-wider ${active ? "text-ivory/90" : "text-foreground/70"}`}>
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
