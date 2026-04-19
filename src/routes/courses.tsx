import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { WindowHeading } from "@/components/shell/WindowFrame";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses & Programs — AIMT" },
      {
        name: "description",
        content:
          "Explore AIMT's MBA, BBA, MCA, BCA and B.Tech programs — built with industry, taught by practitioners.",
      },
      { property: "og:title", content: "Programs at AIMT" },
      { property: "og:description", content: "Programs built with industry, taught by practitioners." },
    ],
  }),
  component: Courses,
});

const programs = [
  {
    code: "MBA",
    name: "Master of Business Administration",
    duration: "2 years",
    seats: "180",
    tracks: ["Marketing", "Finance", "HR", "Operations", "Analytics"],
    blurb:
      "A globally benchmarked MBA with live consulting projects, summer internships, and a capstone with industry partners.",
  },
  {
    code: "BBA",
    name: "Bachelor of Business Administration",
    duration: "3 years",
    seats: "120",
    tracks: ["General", "Digital Business", "Entrepreneurship"],
    blurb: "An undergraduate program for future founders, strategists and leaders.",
  },
  {
    code: "MCA",
    name: "Master of Computer Applications",
    duration: "2 years",
    seats: "60",
    tracks: ["AI/ML", "Full-Stack", "Cloud & DevOps"],
    blurb: "Hands-on graduate computing with industry-led labs and capstone product builds.",
  },
  {
    code: "BCA",
    name: "Bachelor of Computer Applications",
    duration: "3 years",
    seats: "120",
    tracks: ["Software", "Data Science", "Cyber Security"],
    blurb: "Foundational and advanced computing for the next generation of engineers.",
  },
  {
    code: "B.Tech",
    name: "Bachelor of Technology",
    duration: "4 years",
    seats: "240",
    tracks: ["CSE", "AI/ML", "ECE", "Mechanical", "Civil"],
    blurb: "Engineering programs accredited by AICTE with a maker-first curriculum.",
  },
  {
    code: "PGDM",
    name: "Post Graduate Diploma in Management",
    duration: "2 years",
    seats: "60",
    tracks: ["Strategy", "Product", "Finance"],
    blurb: "An accelerated, industry-aligned diploma with a global immersion module.",
  },
];

function Courses() {
  const [active, setActive] = useState(0);
  const p = programs[active];
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-28 pb-28 md:pt-32 md:pb-10">
      <WindowHeading
        eyebrow="Programs — 03"
        title={
          <>
            Programs built <span className="text-gradient-crest">with industry</span>,
            <br />
            taught by practitioners.
          </>
        }
      />

      <div className="mt-10 grid flex-1 grid-cols-1 gap-6 overflow-hidden md:grid-cols-12">
        {/* List */}
        <div className="md:col-span-5">
          <ul className="panel-scroll grid h-full grid-cols-2 content-start gap-3 pr-2">
            {programs.map((prog, i) => (
              <li key={prog.code}>
                <button
                  onClick={() => setActive(i)}
                  className={`group w-full rounded-xl border p-4 text-left transition ${
                    i === active
                      ? "border-crimson/50 bg-crest text-primary-foreground shadow-crimson"
                      : "border-border bg-card hover:-translate-y-0.5 hover:border-gold/50"
                  }`}
                >
                  <div
                    className={`font-display text-2xl ${
                      i === active ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {prog.code}
                  </div>
                  <div
                    className={`mt-1 text-[11px] uppercase tracking-wider ${
                      i === active ? "text-ivory/80" : "text-muted-foreground"
                    }`}
                  >
                    {prog.duration} · {prog.seats} seats
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Detail */}
        <div className="md:col-span-7">
          <motion.div
            key={p.code}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-elegant"
          >
            <div className="absolute -right-12 -top-12 font-display text-[12rem] leading-none text-muted opacity-40">
              {p.code}
            </div>
            <div className="relative flex h-full flex-col">
              <div className="text-[11px] uppercase tracking-[0.25em] text-royal">{p.code}</div>
              <h3 className="mt-2 font-display text-3xl text-foreground md:text-4xl">{p.name}</h3>
              <p className="mt-4 max-w-lg text-muted-foreground">{p.blurb}</p>

              <div className="mt-6 grid grid-cols-2 gap-4 max-w-sm">
                <div className="rounded-xl bg-muted px-4 py-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Duration
                  </div>
                  <div className="font-display text-xl">{p.duration}</div>
                </div>
                <div className="rounded-xl bg-muted px-4 py-3">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Seats
                  </div>
                  <div className="font-display text-xl">{p.seats}</div>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Specialisations
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tracks.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-gold/40 bg-ivory/60 px-3 py-1 text-xs text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-3 pt-8">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 rounded-full bg-crest px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-crimson"
                >
                  Apply for {p.code}
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-gold text-ink">
                    →
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-ivory/70 px-5 py-2.5 text-sm font-medium text-foreground"
                >
                  Talk to admissions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
