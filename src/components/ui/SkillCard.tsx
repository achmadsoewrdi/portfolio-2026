import { cn } from "../../lib/utils";
import { type Skill } from "../../types";

interface SkillCardProps {
  skill: Skill;
  className?: string;
}

export default function SkillCard({ skill, className }: SkillCardProps) {
  return (
    <div
      className={cn(
        "p-10 bg-surface transition-colors duration-300",
        "hover:bg-[#111111]",
        className,
      )}
    >
      {/* icon */}
      <div
        className={cn(
          "w-10 h-10 mb-5 flex items-center justify-center text-lg",
          "border border-border rounded-lg bg-bg",
        )}
      >
        {skill.icon}
      </div>

      <h3 className={cn("text-[15px] font-semibold text-text leading-relaxed")}>
        {skill.title}
      </h3>

      <p className={cn("text-[13px] text-subtle leading-relaxed ")}>
        {skill.description}
      </p>

      {/* skill items */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {skill.items.map((item) => (
          <span
            key={item}
            className={cn(
              "font-mono text-[11px] px-2 py-0.5",
              "rounded bg-bg border border-[#1f1f1f]",
              "text-muted",
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
