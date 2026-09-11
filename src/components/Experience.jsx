import { motion } from "framer-motion";
import { experience } from "../data/projects";

export default function Experience() {
  return (
    <section className="py-20 md:py-28 border-t border-[color:var(--line)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-mono-label text-xs text-[color:var(--violet)] mb-3">
          CAREER SNAPSHOT
        </p>
        <h2 className="text-2xl md:text-3xl text-[color:var(--ink)] mb-12 max-w-xl">
          Experience
        </h2>

        <div className="flex flex-col gap-10">
          {experience.map((e, i) => (
            <motion.div
              key={e.org}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-10"
            >
              <span className="font-mono-label text-sm text-[color:var(--fog-dim)]">
                {e.period}
              </span>
              <div>
                <h3 className="text-xl text-[color:var(--ink)]">{e.org}</h3>
                <p className="text-sm text-[color:var(--violet)] mt-1 mb-3">
                  {e.role}
                </p>
                <p className="text-[color:var(--fog)] leading-relaxed max-w-2xl">
                  {e.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
