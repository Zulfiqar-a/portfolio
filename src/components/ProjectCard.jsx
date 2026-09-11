import { motion } from "framer-motion";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project, index }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-[color:var(--line)] py-12 first:border-t-0"
    >
      <div className="grid md:grid-cols-[70px_1fr_180px] gap-4 md:gap-10">
        <span className="font-mono-label text-sm text-[color:var(--fog-dim)]">
          {num}
        </span>

        <div>
          <p className="font-mono-label text-[11px] text-[color:var(--violet)] mb-3">
            {project.tag.toUpperCase()}
          </p>
          <h3 className="text-2xl md:text-3xl text-[color:var(--ink)] mb-3">
            {project.name}
          </h3>
          <p className="text-[color:var(--fog)] leading-relaxed max-w-2xl">
            {project.blurb}
          </p>
          <p className="mt-3 text-sm text-[color:var(--fog-dim)] leading-relaxed max-w-2xl">
            {project.detail}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="text-xs px-3 py-1 rounded-full border border-[color:var(--line)] text-[color:var(--fog)]"
              >
                {s}
              </span>
            ))}
          </div>

          <a
            href={`mailto:zulfiqarkhuwaja236@gmail.com?subject=Project inquiry: ${encodeURIComponent(
              project.name
            )}`}
            className="inline-block mt-6 text-sm text-[color:var(--ink)] border-b border-[color:var(--violet)] hover:text-[color:var(--violet)] transition-colors"
          >
            Discuss this project
          </a>
        </div>

        <div className="flex md:flex-col gap-6 md:gap-4 md:items-end md:text-right">
          <div>
            <div className="text-4xl font-display text-[color:var(--ink)]">
              {project.stat.value}
            </div>
            <div className="text-xs text-[color:var(--fog-dim)] font-mono-label">
              {project.stat.label}
            </div>
          </div>
          <div className="w-24 md:w-full">
            <ProjectVisual variant={project.visual} seed={index} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
