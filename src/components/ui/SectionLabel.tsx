import { cn } from "../../lib/utils";

interface SectionLabelProps{
    text:string;
    className?:string;
}

export default function SectionLabel({text, className}:SectionLabelProps){
    return(
        <div
            className={cn(
                'flex items-center gap-3 mb-10',
                'font-mono text-[11px] tracking-[0.05em] uppercase text-subtle',
                className
            )}
        >
            {text}
            <span className="block h-px w-15 bg-border"></span>
        </div>
    )
}