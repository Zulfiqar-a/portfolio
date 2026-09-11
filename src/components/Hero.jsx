import { motion } from "framer-motion";

const stats = [
  { value: "4", label: "shipped projects" },
  { value: "12", label: "RhetorIQ build phases" },
  { value: "2", label: "languages in BinTag" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* single soft ambient glow, kept behind everything */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--violet) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto w-full px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono-label text-xs text-[color:var(--violet)] mb-5">
            AI / ML ENGINEER — KARACHI, PAKISTAN
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-[color:var(--ink)]">
            I turn raw signal into
            <br />
            <span className="text-[color:var(--violet)]">structured</span>{" "}
            intelligence.
          </h1>
          <p className="mt-6 text-base md:text-lg text-[color:var(--fog)] max-w-xl mx-auto">
            Zulfiqar Ali — AI Engineering-focused CS student at SZABIST,
            building full-stack speech, voice and ML systems end to end:
            model integration to production deployment.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
             href="#work"
              className="px-6 py-3 rounded-full bg-[color:var(--violet)] text-[color:var(--void)] font-medium hover:bg-[color:var(--violet)] transition-colors"
            >
              See the work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-[color:var(--line)] text-[color:var(--ink)] hover:border-[color:var(--fog)] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 flex items-center justify-center gap-10 md:gap-16"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-2xl md:text-3xl font-display text-[color:var(--ink)]">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-[color:var(--fog-dim)] max-w-[10ch] mx-auto">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 signal-divider" />
    </section>
  );
}