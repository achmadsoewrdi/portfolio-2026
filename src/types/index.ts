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

export interface Education {
  id: string
  institution: string
  major: string
  degree: string
  startYear: string
  endYear: string
  location: string
}

export interface Experience {
  id: string
  company: string
  role: string
  type: 'Freelance' | 'Full-time' | 'Part-time' | 'Internship' | 'Organization'
  startDate: string
  endDate: string
  description: string
  tags: string[]
}

export interface Certificate {
  id: string
  name: string
  issuer: string
  year: string
  category: 'organization' | 'competency'
  credentialUrl?: string
}