import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { WindowHeading } from "@/components/shell/WindowFrame";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title: "Placements — AIMT" },
      {
        name: "description",
        content:
          "AIMT placements: 98% placement rate, 150+ recruiters and an average package growing year over year.",
      },
      { property: "og:title", content: "Placements at AIMT" },
      { property: "og:description", content: "Where ambition meets opportunity." },
    ],
  }),
  component: Placements,
});

const stats = [
  { k: "98%", v: "Placement Rate" },
  { k: "₹14.6L", v: "Avg. Package" },
  { k: "₹46L", v: "Highest Package" },
  { k: "150+", v: "Recruiting Partners" },
];

const recruiters = [
  "TCS", "Infosys", "Wipro", "Deloitte", "EY", "KPMG", "HDFC", "ICICI",
  "Amazon", "Flipkart", "Cognizant", "Accenture", "Capgemini", "Genpact",
];

const stories = [
  { name: "Aanya Sharma", role: "Product Manager · Amazon", program: "MBA · 2024", quote: "AIMT taught me to think in systems and ship fast — that's exactly what my role demands." },
  { name: "Rohan Verma", role: "SDE-2 · Flipkart", program: "B.Tech CSE · 2023", quote: "The labs were always open and the faculty always available. That changes everything." },
  { name: "Ishita Mehra", role: "Strategy Consultant · Deloitte", program: "PGDM · 2024", quote: "Live consulting projects in semester three made the transition to client work seamless." },
];

function Placements() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-28 pb-28 md:pt-32 md:pb-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="md:col-span-6">
          <WindowHeading
            eyebrow="Placements — 06"
            title={
              <>
                Where ambition meets
                <br />
                <span className="text-gradient-crest">opportunity</span>.
              </>
            }
          />
        </div>
        <div className="md:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="grid grid-cols-2 gap-3 md:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.v} className="rounded-2xl glass p-4 shadow-elegant">
                <div className="font-display text-3xl text-gradient-crest">{s.k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="mt-10 grid flex-1 grid-cols-1 gap-6 overflow-hidden md:grid-cols-12">
        {/* Recruiter wall */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-border bg-card p-6 shadow-elegant md:col-span-5"
        >
          <div className="text-[11px] uppercase tracking-[0.25em] text-royal">Top Recruiters</div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {recruiters.map((r) => (
              <div
                key={r}
                className="rounded-lg border border-border bg-ivory/50 px-3 py-3 text-center font-display text-sm text-foreground transition hover:border-gold/60 hover:text-gradient-crest"
              >
                {r}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stories */}
        <div className="grid grid-cols-1 gap-4 md:col-span-7">
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-elegant"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-crest font-display text-lg text-primary-foreground shadow-crimson">
                  {s.name[0]}
                </div>
                <div>
                  <p className="font-display text-lg leading-snug text-foreground">
                    "{s.quote}"
                  </p>
                  <div className="mt-3 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{s.name}</span> · {s.role}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-royal">
                    {s.program}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
