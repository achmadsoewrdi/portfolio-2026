import { cn } from "../../lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center gap-2 rounded-lg",
    "text-sm font-semibold cursor-none", // ← hapus font-body
    "transition-all duration-200",
    "px-[24px] py-[12px]",
    variant === "primary" && [
      "bg-[#fafafa] text-[#0a0a0a]",
      "hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,255,255,0.12)]",
    ],
    variant === "ghost" && [
      "bg-transparent text-[#a1a1aa]",
      "border border-[#262626]",
      "hover:border-[#a1a1aa] hover:text-[#fafafa] hover:-translate-y-0.5",
    ],
    className,
  );

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
