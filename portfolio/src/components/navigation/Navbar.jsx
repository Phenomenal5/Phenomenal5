import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE_CONFIG } from '../../constants/site'
import { cn } from '../../lib/cn'
import Button from '../ui/Button'
import Container from '../ui/Container'
import ThemeToggle from '../ui/ThemeToggle'

function navLinkClass({ isActive }) {
  return cn(
    'rounded-md px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'text-[var(--color-text-primary)]'
      : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
  )
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-primary)] bg-[var(--color-bg-primary)]/90 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary navigation">
          <NavLink to="/" onClick={closeMenu} className="group flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border-secondary)] bg-[var(--color-bg-card)] font-mono text-xs font-semibold text-[var(--color-text-primary)] transition group-hover:border-[var(--color-accent-primary)]">
              {SITE_CONFIG.initials}
            </span>
            <span className="hidden text-sm font-semibold text-[var(--color-text-primary)] sm:inline">
              {SITE_CONFIG.shortName}
            </span>
          </NavLink>

          <div className="hidden items-center rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]/70 p-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} to={link.href} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <Button href={SITE_CONFIG.resumeLink} variant="outline" size="sm">
              Resume
            </Button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] text-[var(--color-text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent-primary)]"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {isOpen ? (
          <Motion.div
            className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-primary)] lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <Container className="py-4">
              <div className="grid gap-1">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      cn(
                        'rounded-lg px-3 py-3 text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)]'
                          : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]',
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <Button href={SITE_CONFIG.resumeLink} variant="outline" size="sm" className="mt-3 w-full">
                  Resume
                </Button>
              </div>
            </Container>
          </Motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
