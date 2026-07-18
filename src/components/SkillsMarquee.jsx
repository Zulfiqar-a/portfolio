import { capabilities } from "../data/projects";

function CapabilityCard({ id, name, note }) {
  return (
    <div className="w-64 mx-3 shrink-0 rounded-2xl border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
      <p className="font-mono-label text-[11px] text-[color:var(--cyan)] mb-4">
        {id} / Capability
      </p>
      <h3 className="text-lg text-[color:var(--ink)] mb-2">{name}</h3>
      <p className="text-sm text-[color:var(--fog)]">{note}</p>
    </div>
  );
}

export default function SkillsMarquee() {
  const doubled = [...capabilities, ...capabilities];
  return (
    <section id="skills" className="py-20 md:py-28 overflow-hidden border-t border-[color:var(--line)]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-10">
        <p className="font-mono-label text-xs text-[color:var(--cyan)] mb-3">
          CORE TOOLKIT
        </p>
        <h2 className="text-2xl md:text-3xl text-[color:var(--ink)] max-w-xl">
          Tools that carry a signal from raw audio, data or metadata to a
          structured answer.
        </h2>
      </div>
      <div className="marquee-track">
        {doubled.map((c, i) => (
          <CapabilityCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
}
