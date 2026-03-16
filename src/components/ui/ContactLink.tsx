import { cn } from '../../lib/utils'
import { type ContactLinkItem } from '../../types'

interface ContactLinkProps {
  item: ContactLinkItem
  className?: string
}

export default function ContactLink({ item, className }: ContactLinkProps) {
  return (
    <a 
      href={item.href}
      className={cn(
        'flex items-center gap-3 px-4.5 py-3.5',
        'border border-border rounded-lg',
        'text-muted text-sm bg-bg',
        'transition-all duration-200 cursor-none',
        'hover:border-muted hover:text-text hover:translate-x-1',
        className
      )}
    >
      <span className={cn(
        'w-8 h-8 flex items-center justify-center text-sm shrink-0',
        'bg-surface border border-border rounded-md'
      )}>
        {item.icon}
      </span>
      {item.label}
    </a>
  )
}