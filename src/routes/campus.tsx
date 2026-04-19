import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { WindowHeading } from "@/components/shell/WindowFrame";

export const Route = createFileRoute("/campus")({
  head: () => ({
    meta: [
      { title: "Campus Life — AIMT" },
      {
        name: "description",
        content:
          "Explore AIMT's 25-acre campus — labs, libraries, sports, residences and a culture built for ambition.",
      },
      { property: "og:title", content: "Campus Life at AIMT" },
      { property: "og:description", content: "A 25-acre living, learning ecosystem." },
    ],
  }),
  component: Campus,
});

const facilities = [
  { t: "Smart Classrooms", d: "Studio-quality, hybrid-enabled classrooms across 6 academic blocks." },
  { t: "Innovation Labs", d: "AI/ML, robotics, IoT and product studios with 24×7 access." },
  { t: "Central Library", d: "60,000+ titles, IEEE/EBSCO archives and quiet zones." },
  { t: "Sports Arena", d: "Cricket, football, basketball, indoor sports and a fitness centre." },
  { t: "Residences", d: "Boys & girls hostels with mess, common rooms and high-speed wifi." },
  { t: "Wellness Center", d: "Counsellors, infirmary and mindfulness programs year-round." },
];

const tour = [
  { k: "25", v: "Acres of campus" },
  { k: "06", v: "Academic blocks" },
  { k: "12", v: "Specialised labs" },
  { k: "1.2k", v: "Hostel beds" },
];

function Campus() {
  return (
    <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-10 px-6 pt-28 pb-28 md:grid-cols-12 md:pt-32 md:pb-10">
      <div className="md:col-span-5">
        <WindowHeading
          eyebrow="Campus — 05"
          title={
            <>
              A 25-acre
              <br />
              <span className="text-gradient-crest">living</span> classroom.
            </>
          }
          subtitle="A residential campus designed around how students actually learn — focus zones, maker spaces, sport, art and quiet corners for the work that matters."
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 grid grid-cols-2 gap-3"
        >
          {tour.map((t) => (
            <div key={t.v} className="rounded-2xl glass p-4">
              <div className="font-display text-3xl text-gradient-crest">{t.k}</div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                {t.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="md:col-span-7">
        <ul className="grid h-full grid-cols-1 gap-3 sm:grid-cols-2">
          {facilities.map((f, i) => (
            <motion.li
              key={f.t}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-elegant transition hover:-translate-y-1 hover:border-gold/50"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-crest text-primary-foreground shadow-crimson">
                  <span className="font-display text-sm">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">{f.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
