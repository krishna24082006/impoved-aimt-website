import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { WindowHeading } from "@/components/shell/WindowFrame";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AIMT — Vision, Mission & Legacy" },
      {
        name: "description",
        content:
          "Discover AIMT's mission, vision, and 25-year legacy of shaping leaders in management & technology.",
      },
      { property: "og:title", content: "About AIMT" },
      { property: "og:description", content: "A legacy of learning without limits." },
    ],
  }),
  component: About,
});

const pillars = [
  {
    n: "01",
    t: "Academic Rigor",
    d: "AICTE-approved programs designed with industry boards and refreshed every cycle.",
  },
  {
    n: "02",
    t: "Industry Immersion",
    d: "150+ recruiters, live projects with Fortune 500s, and a year-round mentor network.",
  },
  {
    n: "03",
    t: "Holistic Growth",
    d: "Sport, arts, entrepreneurship & wellbeing baked into the academic calendar.",
  },
  {
    n: "04",
    t: "Global Outlook",
    d: "Exchange tracks, international faculty fellowships and a 20-country alumni base.",
  },
];

function About() {
  return (
    <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-10 px-6 pt-28 pb-28 md:grid-cols-12 md:pt-32 md:pb-12">
      <div className="md:col-span-5">
        <WindowHeading
          eyebrow="About — 02"
          title={
            <>
              A quarter-century
              <br />
              of <span className="text-gradient-crest">shaping leaders</span>.
            </>
          }
          subtitle="Founded with a single belief — that ambition deserves an institution worthy of it — AIMT has grown into one of North India's most respected centres for management & technology."
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 rounded-2xl glass p-6 shadow-elegant"
        >
          <div className="text-[11px] uppercase tracking-[0.25em] text-royal">Our Mission</div>
          <p className="mt-3 font-display text-xl leading-snug text-foreground">
            To prepare graduates who think clearly, build thoughtfully and lead with integrity in
            a world that won't stand still.
          </p>
        </motion.div>
      </div>

      <div className="md:col-span-7">
        <div className="grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.t}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-elegant transition hover:-translate-y-1"
            >
              <div className="absolute -right-6 -top-6 font-display text-7xl text-muted opacity-50 transition group-hover:text-gold/40">
                {p.n}
              </div>
              <div className="relative">
                <h3 className="font-display text-2xl text-foreground">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
              </div>
              <div className="hairline-gold absolute inset-x-6 bottom-0 h-px opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
