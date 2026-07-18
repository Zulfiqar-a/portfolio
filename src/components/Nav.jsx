const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#work", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color:var(--void)]/70 border-b border-[color:var(--line)]">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">
        <a
          href="#top"
          className="font-mono-label text-sm text-[color:var(--ink)] hover:text-[color:var(--cyan)] transition-colors"
        >
          ZA<span className="text-[color:var(--violet)]">.</span>signal
        </a>
        <ul className="hidden sm:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[color:var(--fog)] hover:text-[color:var(--ink)] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-full border border-[color:var(--line)] text-[color:var(--ink)] hover:border-[color:var(--cyan)] hover:text-[color:var(--cyan)] transition-colors"
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
}
