import { motion } from "framer-motion";
import { expertise } from "../data/projects";

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 border-t border-[color:var(--line)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-mono-label text-xs text-[color:var(--violet)] mb-3">
          EXPERTISE
        </p>
        <h2 className="text-2xl md:text-3xl text-[color:var(--ink)] mb-12 max-w-xl">
          Six areas that show up in every build.
        </h2>

        <div className="divide-y divide-[color:var(--line)] border-t border-b border-[color:var(--line)]">
          {expertise.map((e, i) => (
            <motion.div
              key={e.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="grid md:grid-cols-[80px_1fr_2fr] gap-3 md:gap-8 py-7"
            >
              <span className="font-mono-label text-[color:var(--fog-dim)] text-sm">
                {e.n}
              </span>
              <h3 className="text-lg md:text-xl text-[color:var(--ink)]">
                {e.title}
              </h3>
              <p className="text-[color:var(--fog)] leading-relaxed">
                {e.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
