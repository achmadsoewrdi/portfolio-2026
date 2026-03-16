import { cn } from '../../lib/utils'

const footerLinks = [
  { label: 'Resume', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'Behance', href: '#' },
]

export default function Footer() {
  return (
    <footer
      className={cn(
        'px-12 py-8',
        'border-t border-border',
        'flex items-center justify-between'
      )}
    >
      <p className="font-mono text-[12px] text-subtle">
        © 2026 — Designed & built with ♥
      </p>

      <div className="flex gap-6">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={cn(
              'font-mono text-[12px] text-subtle',
              'transition-colors duration-200 hover:text-muted'
            )}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}