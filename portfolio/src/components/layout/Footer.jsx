import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { NAV_LINKS, SITE_CONFIG } from '../../constants/site'
import Container from '../ui/Container'

const socialLinks = [
  { label: 'GitHub', href: SITE_CONFIG.github, icon: FaGithub, external: true },
  { label: 'LinkedIn', href: SITE_CONFIG.linkedin, icon: FaLinkedin, external: false },
  { label: 'Email', href: `mailto:${SITE_CONFIG.email}`, icon: Mail, external: false },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] py-8">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">{SITE_CONFIG.shortName}</p>
            <p className="mt-1 max-w-xl text-sm text-[var(--color-text-secondary)]">
              Engineering-focused portfolio for scalable product systems, clean architecture, and practical delivery.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-[var(--color-text-secondary)] transition hover:text-[var(--color-text-primary)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[var(--color-border-primary)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[var(--color-text-tertiary)]">Copyright {year}. {SITE_CONFIG.name}.</p>
          <div className="flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-border-primary)] text-[var(--color-text-secondary)] transition hover:border-[var(--color-border-secondary)] hover:text-[var(--color-text-primary)]"
              >
                <Icon size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
