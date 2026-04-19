import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { WindowHeading } from "@/components/shell/WindowFrame";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AIMT — Visit, Call or Apply" },
      {
        name: "description",
        content:
          "Reach AIMT — visit the Greater Noida campus, call admissions, or send a message to start your journey.",
      },
      { property: "og:title", content: "Contact AIMT" },
      { property: "og:description", content: "We'd love to hear from you." },
    ],
  }),
  component: Contact,
});

const channels = [
  { t: "Admissions", v: "+91 120 232 3001", sub: "Mon–Sat · 9am–6pm" },
  { t: "General", v: "info@aimt.edu.in", sub: "We respond within 24h" },
  { t: "Visit", v: "Knowledge Park-III, Greater Noida", sub: "Uttar Pradesh, India" },
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-10 px-6 pt-28 pb-28 md:grid-cols-12 md:pt-32 md:pb-10">
      <div className="md:col-span-5">
        <WindowHeading
          eyebrow="Contact — 07"
          title={
            <>
              Let's start
              <br />
              a <span className="text-gradient-crest">conversation</span>.
            </>
          }
          subtitle="Whether you're applying, partnering, or just curious — we're a message away."
        />

        <ul className="mt-8 grid gap-3">
          {channels.map((c, i) => (
            <motion.li
              key={c.t}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="rounded-2xl glass p-4 shadow-elegant"
            >
              <div className="text-[11px] uppercase tracking-[0.25em] text-royal">{c.t}</div>
              <div className="mt-1 font-display text-xl text-foreground">{c.v}</div>
              <div className="text-xs text-muted-foreground">{c.sub}</div>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="md:col-span-7">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-elegant"
        >
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-crest opacity-20 blur-3xl" />
          <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-gold opacity-30 blur-3xl" />

          {!sent ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="relative grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              <Field label="Your name" name="name" />
              <Field label="Email" name="email" type="email" />
              <Field label="Phone" name="phone" />
              <Field label="Program of interest" name="program" placeholder="MBA, B.Tech…" />
              <div className="md:col-span-2">
                <label className="text-[11px] uppercase tracking-[0.25em] text-royal">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-border bg-ivory/60 px-4 py-3 text-sm outline-none transition focus:border-crimson focus:bg-card"
                />
              </div>
              <button
                type="submit"
                className="md:col-span-2 group inline-flex items-center justify-center gap-3 rounded-full bg-crest px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-crimson transition hover:scale-[1.02]"
              >
                Send message
                <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-ink transition group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative grid place-items-center py-16 text-center"
            >
              <div className="grid h-16 w-16 place-items-center rounded-full bg-crest text-3xl text-primary-foreground shadow-crimson">
                ✓
              </div>
              <h3 className="mt-5 font-display text-2xl text-foreground">Message received</h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Our admissions team will reach out within one working day.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.25em] text-royal">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-ivory/60 px-4 py-3 text-sm outline-none transition focus:border-crimson focus:bg-card"
      />
    </div>
  );
}
