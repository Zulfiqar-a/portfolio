import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[1fr_2fr] gap-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-mono-label text-xs text-[color:var(--violet)]"
        >
          ABOUT
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-xl md:text-2xl leading-relaxed text-[color:var(--ink)]">
            6th-semester Computer Science student at SZABIST University,
            focused on AI engineering — with hands-on experience building
            full-stack, AI-powered applications end to end: from model
            integration to production-ready deployment.
          </p>
          <p className="mt-6 text-base md:text-lg text-[color:var(--fog)] max-w-2xl">
            I design multi-phase systems — speech analysis, predictive ML,
            agentic workflows — debug the full-stack issues that come with
            them, and ship demo-ready products. Currently an AI Engineer
            collaborator at Omdena, building toward a career in applied AI
            engineering.
          </p>

          <div className="mt-10 grid grid-cols-3 max-w-md gap-6">
            <Stat value="4" label="shipped projects" />
            <Stat value="12" label="RhetorIQ build phases" />
            <Stat value="2" label="spoken languages in BinTag" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <div className="text-3xl font-display text-[color:var(--violet)]">
        {value}
      </div>
      <div className="text-xs text-[color:var(--fog-dim)] mt-1">{label}</div>
    </div>
  );
}
