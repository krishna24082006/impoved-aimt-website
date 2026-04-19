import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { WindowHeading } from "@/components/shell/WindowFrame";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2025 — AIMT" },
      {
        name: "description",
        content:
          "Apply to AIMT for 2025 — a simple 4-step admissions process for MBA, BBA, MCA, BCA, B.Tech and PGDM.",
      },
      { property: "og:title", content: "Admissions 2025 at AIMT" },
      { property: "og:description", content: "Four steps to your seat." },
    ],
  }),
  component: Admissions,
});

const steps = [
  { n: "01", t: "Apply Online", d: "Fill the AIMT application in under 8 minutes." },
  { n: "02", t: "Entrance / Score", d: "Submit your CAT / MAT / JEE / CUET or campus-test score." },
  { n: "03", t: "Interview", d: "A 20-minute conversation with our faculty panel." },
  { n: "04", t: "Offer & Onboard", d: "Receive your offer, accept seat and join orientation." },
];

const dates = [
  { d: "Jan 15", l: "Applications open" },
  { d: "Apr 30", l: "Round 1 deadline" },
  { d: "Jun 15", l: "Round 2 deadline" },
  { d: "Aug 01", l: "Orientation week" },
];

function Admissions() {
  return (
    <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-10 px-6 pt-28 pb-28 md:grid-cols-12 md:pt-32 md:pb-10">
      <div className="md:col-span-6">
        <WindowHeading
          eyebrow="Admissions — 04"
          title={
            <>
              Four steps
              <br />
              to your <span className="text-gradient-crest">AIMT seat</span>.
            </>
          }
          subtitle="No hidden hoops. No paperwork maze. A modern, transparent admissions experience designed for serious applicants."
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            to="/admissions"
            className="group inline-flex items-center gap-3 rounded-full bg-crest px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-crimson transition hover:scale-[1.03]"
          >
            Start Application
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-ink transition group-hover:translate-x-0.5">
              →
            </span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-ivory/70 px-6 py-3.5 text-sm font-medium text-foreground"
          >
            Book a counselling call
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-10 rounded-2xl glass p-6 shadow-elegant"
        >
          <div className="text-[11px] uppercase tracking-[0.25em] text-royal">Key Dates · 2025</div>
          <ul className="mt-4 grid grid-cols-2 gap-4">
            {dates.map((x) => (
              <li key={x.l} className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-crest text-primary-foreground shadow-crimson">
                  <span className="font-display text-sm leading-none">{x.d}</span>
                </div>
                <span className="text-sm text-foreground">{x.l}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="md:col-span-6">
        <ol className="grid h-full grid-cols-1 gap-4">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-elegant"
            >
              <div className="flex items-start gap-5">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-ink text-ivory">
                  <span className="font-display text-xl">{s.n}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-foreground">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                </div>
                <div className="ml-auto hidden h-2 w-2 self-center rounded-full bg-gold shadow-gold md:block" />
              </div>
              <div className="hairline-gold absolute inset-x-6 bottom-0 h-px opacity-50" />
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
