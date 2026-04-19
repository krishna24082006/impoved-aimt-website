import { useEffect } from "react";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import { NAV_ITEMS, type NavPath } from "@/lib/nav";

export function WindowFrame({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Keyboard window switching
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const idx = NAV_ITEMS.findIndex((n) => n.to === pathname);
      if (idx === -1) return;
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        const next = NAV_ITEMS[(idx + 1) % NAV_ITEMS.length];
        navigate({ to: next.to as NavPath });
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        const prev = NAV_ITEMS[(idx - 1 + NAV_ITEMS.length) % NAV_ITEMS.length];
        navigate({ to: prev.to as NavPath });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pathname, navigate]);

  return (
    <div className="relative min-h-screen w-full bg-background">
      {/* ambient backdrop */}
      <div className="pointer-events-none fixed inset-0 bg-aurora opacity-50" />

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}

export function WindowHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="space-y-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory/60 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-royal"
      >
        <span className="h-1 w-1 rounded-full bg-gold" />
        {eyebrow}
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18, duration: 0.6 }}
        className="font-display text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="max-w-xl text-base text-muted-foreground md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
