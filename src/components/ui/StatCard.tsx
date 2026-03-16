import { cn } from "../../lib/utils";
import { type StatItem } from "../../types";

interface StatCardProps{
    stat:StatItem;
    className?:string
}

export default function StatCard({stat, className}:StatCardProps){
    return(
        <div
            className={cn(
                'p-8 bg-surface transition-colors duration-300',
                'hover:bg-[#111111]',
                className
            )}
        >
            <div className="font-display text-5xl text-text leading-none mb-2">
                {stat.value}
            </div>
            <div className="font-mono text-[11px] tracking-widest uppercase text-subtle">
                {stat.label}
            </div>
        </div>
    )
}