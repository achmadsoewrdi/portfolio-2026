export interface Project{
    id: string;
    num: string;
    title: string;
    description: string;
    tags: string[];
    href?: string;
}

export interface Skill{
    id: string;
    icon: string;
    title: string;
    description: string;
    items: string[];
}

export interface ProcessStep{
    num: string;
    title:string;
    description: string;
}

export interface StatItem{
    value: string;
    label: string;
}

export interface ContactLinkItem{
    icon: string;
    label: string;
    href:string;
}