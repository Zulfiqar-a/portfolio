const nav = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Projects" },
  { href: "#top", label: "Back to top" },
];

const elsewhere = [
  { href: "https://github.com/Zulfiqar-a", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/zulfiqar-ali-4215212b1/",
    label: "LinkedIn",
  },
  {
    href: "mailto:zulfiqarkhuwaja236@gmail.com",
    label: "Email",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-[color:var(--line)]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-[1.6fr_1fr] gap-14">
        <div>
          <p className="font-mono-label text-xs text-[color:var(--cyan)] mb-4">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-5xl text-[color:var(--ink)] max-w-xl leading-tight">
            Have a signal worth building on?
          </h2>
          <p className="mt-6 text-[color:var(--fog)] max-w-md leading-relaxed">
            Open to internships, freelance builds and collaborations across
            AI, speech and full-stack products. Based in Karachi, working
            with teams anywhere.
          </p>

          <a
            href="mailto:zulfiqarkhuwaja236@gmail.com"
            className="inline-block mt-8 text-xl md:text-2xl text-[color:var(--ink)] border-b border-[color:var(--violet)] hover:text-[color:var(--violet)] transition-colors"
          >
            zulfiqarkhuwaja236@gmail.com
          </a>

          <a
            href="tel:+923162765972"
            className="block mt-3 text-sm text-[color:var(--fog)] hover:text-[color:var(--ink)] transition-colors"
          >
            +92 316 2765972
          </a>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="font-mono-label text-[11px] text-[color:var(--fog-dim)] mb-4">
              NAVIGATION
            </p>
            <ul className="flex flex-col gap-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-[color:var(--fog)] hover:text-[color:var(--ink)] transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono-label text-[11px] text-[color:var(--fog-dim)] mb-4">
              ELSEWHERE
            </p>
            <ul className="flex flex-col gap-3">
              {elsewhere.map((e) => (
                <li key={e.href}>
                  <a
                    href={e.href}
                    target={e.href.startsWith("http") ? "_blank" : undefined}
                    rel={e.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm text-[color:var(--fog)] hover:text-[color:var(--ink)] transition-colors"
                  >
                    {e.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-16 pt-8 border-t border-[color:var(--line)] flex flex-wrap items-center justify-between gap-4 text-sm text-[color:var(--fog-dim)]">
        <span>Karachi, Pakistan</span>
        <span>B.S. Computer Science · SZABIST · 2023–Present</span>
        <span>&copy; 2026 Zulfiqar Ali</span>
      </div>
    </section>
  );
}
