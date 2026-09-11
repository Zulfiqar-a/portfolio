import { motion } from "framer-motion";
import { currentWork } from "../data/projects";

export default function CurrentWork() {
  return (
    <section className="py-20 md:py-28 border-t border-[color:var(--line)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[1fr_1.4fr] gap-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
            <p className="font-mono-label text-xs text-[color:var(--violet)] mb-3">
            WHAT I'M BUILDING NOW
          </p>
          <h2 className="text-2xl md:text-3xl text-[color:var(--ink)] mb-3">
            {currentWork.org}
          </h2>
          <p className="text-sm text-[color:var(--violet)] mb-4">
            {currentWork.role}
          </p>
          <p className="text-[color:var(--fog)] leading-relaxed">
            {currentWork.body}
          </p>

          <ul className="mt-8 flex flex-col gap-2">
            {currentWork.responsibilities.map((r) => (
              <li
                key={r}
                className="text-sm text-[color:var(--fog)] pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-[color:var(--fog-dim)]"
              >
                {r}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="flex flex-col gap-4">
          {currentWork.active.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6"
            >
              <p className="font-mono-label text-[11px] text-[color:var(--violet)] mb-2">
                {a.label.toUpperCase()}
              </p>
              <h3 className="text-lg text-[color:var(--ink)] mb-1">
                {a.name}
              </h3>
              <p className="text-sm text-[color:var(--fog)]">{a.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
