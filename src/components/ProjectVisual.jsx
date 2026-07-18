const variants = {
  waveform: (seed) => (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      <rect width="160" height="100" fill="var(--surface-2)" />
      {Array.from({ length: 22 }).map((_, i) => {
        const h = 10 + Math.abs(Math.sin(i * 0.7 + seed)) * 60;
        return (
          <rect
            key={i}
            x={6 + i * 7}
            y={50 - h / 2}
            width="3.5"
            height={h}
            rx="1.5"
            fill={i % 2 === 0 ? "var(--violet)" : "var(--cyan)"}
            opacity="0.85"
          />
        );
      })}
    </svg>
  ),
  ledger: () => (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      <rect width="160" height="100" fill="var(--surface-2)" />
      <rect x="14" y="16" width="70" height="8" rx="4" fill="var(--violet)" opacity="0.8" />
      {[34, 46, 58, 70].map((y) => (
        <rect key={y} x="14" y={y} width="132" height="6" rx="3" fill="var(--line)" />
      ))}
      <circle cx="132" cy="20" r="10" fill="var(--cyan)" opacity="0.7" />
    </svg>
  ),
  mic: () => (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      <rect width="160" height="100" fill="var(--surface-2)" />
      <rect x="70" y="24" width="20" height="34" rx="10" fill="var(--violet)" />
      <path
        d="M52 50a28 28 0 0 0 56 0"
        stroke="var(--cyan)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
      <line x1="80" y1="78" x2="80" y2="88" stroke="var(--cyan)" strokeWidth="4" strokeLinecap="round" />
      <line x1="64" y1="88" x2="96" y2="88" stroke="var(--fog-dim)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  graph: () => (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      <rect width="160" height="100" fill="var(--surface-2)" />
      {[
        [24, 24, 70, 20],
        [70, 20, 120, 32],
        [24, 24, 40, 68],
        [40, 68, 100, 78],
        [70, 20, 100, 78],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--line)" strokeWidth="2" />
      ))}
      {[
        [24, 24],
        [70, 20],
        [120, 32],
        [40, 68],
        [100, 78],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill={i % 2 === 0 ? "var(--violet)" : "var(--cyan)"} />
      ))}
    </svg>
  ),
};

export default function ProjectVisual({ variant, seed = 0 }) {
  const render = variants[variant] || variants.waveform;
  return (
    <div className="rounded-xl overflow-hidden border border-[color:var(--line)]">
      {render(seed)}
    </div>
  );
}
