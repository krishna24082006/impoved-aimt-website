import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroScene } from "@/components/three/HeroScene";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AIMT — Learning Without Limits" },
      {
        name: "description",
        content:
          "AIMT is a premier institute for management & technology. Discover programs, admissions, campus life and placements.",
      },
      { property: "og:title", content: "AIMT — Learning Without Limits" },
      {
        property: "og:description",
        content: "A modern home for ambitious minds.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { k: "25+", v: "Years of Legacy" },
  { k: "10k+", v: "Alumni Worldwide" },
  { k: "150+", v: "Recruiting Partners" },
  { k: "98%", v: "Placement Rate" },
];

function Home() {
  // Scroll-driven parallax for the 3D scene
  const { scrollY } = useScroll();
  const sceneY = useTransform(scrollY, [0, 800], [0, 160]);
  const sceneScale = useTransform(scrollY, [0, 800], [1, 1.08]);
  const sceneOpacity = useTransform(scrollY, [0, 600], [1, 0.35]);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <motion.div
          style={{ y: sceneY, scale: sceneScale, opacity: sceneOpacity }}
          className="absolute inset-0 will-change-transform"
        >
          <div className="absolute right-[-10%] top-[-10%] h-[120%] w-[85%] md:w-[65%]">
            <HeroScene />
          </div>
          {/* Soft horizontal blend — no hard seam over the logo */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent md:from-background md:via-background/55 md:to-transparent" />
          {/* Subtle radial vignette behind text for legibility */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left_center,color-mix(in_oklch,var(--background)_85%,transparent)_0%,transparent_55%)]" />
          {/* Bottom fade into next section */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-28 pb-20 md:pl-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-ivory/70 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-royal backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Admissions 2025 Open
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.7 }}
            className="mt-5 max-w-3xl font-display text-6xl leading-[1] text-foreground md:text-7xl lg:text-[7rem]"
          >
            Learning <em className="not-italic text-gradient-crest">without</em>
            <br />
            <span className="shimmer-gold">limits.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            Accurate Institute of Management & Technology — where rigorous academics
            meet industry, design, and a lifelong community of doers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/admissions"
              className="group inline-flex items-center gap-3 rounded-full bg-crest px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-crimson transition hover:scale-[1.03]"
            >
              Apply for 2025
              <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-ink transition group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              to="/courses"
              className="inline-flex items-center gap-3 rounded-full border border-border bg-ivory/70 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition hover:bg-ivory"
            >
              Explore Courses
            </Link>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-8 left-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground md:left-16"
          >
            <span className="h-px w-10 bg-foreground/30" />
            Scroll to explore
          </motion.div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="relative section-pad px-6 md:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-8 rounded-3xl glass p-8 shadow-elegant md:grid-cols-4 md:p-12"
          >
            {stats.map((s) => (
              <div key={s.v} className="text-center md:text-left">
                <div className="font-display text-4xl text-gradient-crest md:text-5xl">{s.k}</div>
                <div className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="relative section-pad px-6 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            { to: "/courses", t: "Programs", d: "MBA, B.Tech, BCA, MCA & more — designed with industry." },
            { to: "/admissions", t: "Admissions 2025", d: "Four simple steps to join the AIMT community." },
            { to: "/placements", t: "Placements", d: "98% placement rate, 150+ recruiting partners." },
          ].map((c, i) => (
            <motion.div
              key={c.to}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={c.to}
                className="group block rounded-2xl border border-border bg-card p-7 shadow-elegant transition hover:-translate-y-1 hover:shadow-crimson"
              >
                <div className="text-[11px] uppercase tracking-[0.25em] text-royal">0{i + 1}</div>
                <h3 className="mt-3 font-display text-2xl text-foreground">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
