import { Link, useLocation } from 'react-router-dom'
import useScrolled from '../../hooks/useScrolled'
import { cn } from '../../lib/utils'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/#work' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const scrolled = useScrolled()
  const location = useLocation()
  const isAbout = location.pathname === '/about'

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'flex items-center justify-between',
        'px-12 py-5',
        'border-b transition-all duration-300',
        scrolled
          ? 'border-border bg-bg/80 backdrop-blur-lg'
          : 'border-transparent'
      )}
    >
      {/* logo — klik balik ke home */}
      <Link
        to="/"
        className="font-mono text-[13px] tracking-[0.05em] text-subtle hover:text-text transition-colors"
      >
        /{' '}
        <span className="text-text">portfolio</span>
      </Link>

      {/* links */}
      <ul className="flex items-center gap-8 list-none">
        {navLinks.map((link) => {
          const isActive =
            link.href === '/about' && isAbout

          return (
            <li key={link.label}>
              <Link
                to={link.href}
                className={cn(
                  'relative font-mono text-[12px] tracking-[0.08em]',
                  'uppercase transition-colors duration-200',
                  'after:absolute after:-bottom-0.5 after:left-0',
                  'after:h-px after:bg-text',
                  'after:transition-[width] after:duration-300',
                  isActive
                    ? 'text-text after:w-full'
                    : 'text-subtle hover:text-text after:w-0 hover:after:w-full'
                )}
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}