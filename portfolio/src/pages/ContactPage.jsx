import { Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import RouteTransition from '../components/animations/RouteTransition'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import { SITE_CONFIG } from '../constants/site'

const contactMethods = [
  { label: 'Email', value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, icon: Mail },
  { label: 'GitHub', value: 'github.com/Abdullahi-Jimba', href: SITE_CONFIG.github, icon: FaGithub, external: true },
  { label: 'LinkedIn', value: 'Coming soon', href: SITE_CONFIG.linkedin, icon: FaLinkedin },
  { label: 'Location', value: SITE_CONFIG.location, icon: MapPin },
]

function ContactPage() {
  return (
    <RouteTransition>
      <PageHeader
        eyebrow="Contact"
        title="Let us talk about products, systems, and engineering execution."
        description="Best for product engineering, full-stack systems, admin dashboards, architecture direction, and serious collaboration."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="grid gap-4">
              {contactMethods.map(({ label, value, href, icon: Icon, external }) => {
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[var(--color-border-primary)] text-[var(--color-accent-secondary)]">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-[var(--color-text-primary)]">{label}</span>
                      <span className="block text-sm text-[var(--color-text-secondary)]">{value}</span>
                    </span>
                  </>
                )

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-4 transition hover:border-[var(--color-border-secondary)]"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="flex items-center gap-4 rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-4">
                    {content}
                  </div>
                )
              })}
            </div>

            <Card>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-[var(--color-text-primary)]">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] px-4 py-3 text-[var(--color-text-primary)] outline-none transition placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent-primary)] focus:ring-2 focus:ring-[var(--color-accent-glow)]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-[var(--color-text-primary)]">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] px-4 py-3 text-[var(--color-text-primary)] outline-none transition placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent-primary)] focus:ring-2 focus:ring-[var(--color-accent-glow)]"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-[var(--color-text-primary)]">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="6"
                    className="mt-2 w-full resize-none rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] px-4 py-3 text-[var(--color-text-primary)] outline-none transition placeholder:text-[var(--color-text-tertiary)] focus:border-[var(--color-accent-primary)] focus:ring-2 focus:ring-[var(--color-accent-glow)]"
                    placeholder="Tell me what you are building"
                  />
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit">Send message</Button>
                  <Button href={SITE_CONFIG.resumeLink} variant="outline">Resume</Button>
                </div>
              </form>
            </Card>
          </div>
        </Container>
      </section>
    </RouteTransition>
  )
}

export default ContactPage
