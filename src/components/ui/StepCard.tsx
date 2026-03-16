import { cn } from "../../lib/utils";
import { type ProcessStep } from "../../types";

interface StepCardProps {
  step: ProcessStep;
  className?: string;
}

export default function StepCard({ step, className }: StepCardProps) {
  return (
    <div
      className={cn(
        "p-10 bg-surface transition-colors duration-300",
        "hover:bg-[#111111] group",
        className,
      )}
    >
      <div className="font-display text-[64px] text-border leading-none mb-4">
        {step.num}
      </div>
      <h3 className="text-[15px] font-semibold text-text mb-2">{step.title}</h3>
      <p className="text-[13px] text-subtle leading-relaxed">
        {step.description}
      </p>
    </div>
  );
}
