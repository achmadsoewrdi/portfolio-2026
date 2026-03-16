import { cn } from "../../lib/utils";
import { type Project } from "../../types";
import Tag from "./Tag";
import { ArrowUpRight } from "lucide-react";

interface ProjectProps{
    project:Project
    className?:string
}

export default function ProjectItem({project, className}:ProjectProps){
    return(
        <a 
            href={project.href ?? '#'}
            className={cn(
                'grid grid-cols-[80px_1fr_auto_24px] gap-8 items-center',
                'px-10 py-8 bg-surface',
                'relative overflow-hidden group',
                'transition-colors duration-200 hover:bg-[#111111]',
                'cursor-none',
                className
            )}
        >
            
            {/* left border hover effect */}
            <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-text scale-y-0 origin-bottom group-hover:scale-y-100 transition transform duration-300 "/>

            {/* number */}
            <span className="font-mono text-[13px] text-subtle">
                {project.num}
            </span>

            {/* info */}
            <div>
                <h3 className="text-lg font-semibold text-text mb-1">
                    {project.title}
                </h3>
                <p className="text-sm text-muted">
                    {project.description}
                </p>
            </div>

            {/* tags */}
            <div>
                {project.tags.map((tag)=>(
                    <Tag
                        key={tag}
                        label={tag}
                        className="group-hover:border-subtle group-hover:text-muted"
                    />
                ))}
            </div>

            {/* arrow */}
            <span className="text-lg text-subtle transition-all duration-300 group-hover:text-muted group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight />
            </span>
        </a>
    )
}