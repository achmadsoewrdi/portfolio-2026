const items = [
  "UI Design",
  "UX Research",
  "Web Development",
  "Design Systems",
  "Interaction Design",
  "Frontend Engineering",
  "Prototyping",
  "Accessibility",
];

export default function MarqueeBanner() {
  const doubled = [...items, ...items];

  return (
    <div className="border-y border-border bg-[#111111] overflow-hidden py-3.5">
      <div
        className="flex gap-12 w-max"
        style={{ animation: "marquee 20s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12 shrink-0">
            <span className="font-mono text-[12px] tracking-[0.12em] uppercase text-subtle">
              {item}
            </span>
            <span className="text-border">✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
