import { cn } from "../../lib/utils";

interface TagProps{
    label:string;
    className?: string; 
}

export default function Tag({label, className}:TagProps){
    return(
        <span 
            className={cn(
                'font-mono text-[11px] tracking-[0.05em] px-2.5 py-1 flex items-center',
                'border border-border rounded-sm',
                'text-subtle bg-bg',
                'transition-colors duration-200',
                className
            )}
        >
            {label}
        </span>
    )
}