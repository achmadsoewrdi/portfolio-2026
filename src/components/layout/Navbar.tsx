import useScrolled from "../../hooks/useScrolled";
import { cn } from "../../lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const scrolled = useScrolled();

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "flex items-center justify-between",
        "px-12 py-5",
        "border-b transition-all duration-300",
        scrolled
          ? "border-border bg-bg/80 backdrop-blur-lg"
          : "border-transparent",
      )}
    >
      {/* logo */}

      <div className="font-mono text-[13px] tracking-[0.05em] text-subtle">
        / <span className="text-text">Portofolio</span>
      </div>

      {/* links */}
      <ul className="flex items-center gap-8 list-none">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={cn(
                "relative font-mono text-[12px] tracking-[0.08em]",
                "uppercase text-subtle",
                "transition-colors duration-200 hover:text-text",
                "after:absolute after:-bottom-0.5 after:left-0 ",
                "after:w-0 after:h-px after:bg-text",
                "after:transition-[width] after:duration-300",
                "hover:after:w-full",
              )}
            >
                {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
