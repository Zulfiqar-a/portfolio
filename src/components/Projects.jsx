import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-28 border-t border-[color:var(--line)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <p className="font-mono-label text-xs text-[color:var(--violet)] mb-3">
          SELECTED WORK
        </p>
        <h2 className="text-2xl md:text-3xl text-[color:var(--ink)] mb-12 max-w-xl">
          Four systems, each turning something unstructured — voice,
          documents, metadata — into something usable.
        </h2>

        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
