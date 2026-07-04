import RouteTransition from '../components/animations/RouteTransition'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'

const principles = [
  'Start with clear system boundaries before polishing interface details.',
  'Keep frontend components close to product behavior, not visual decoration.',
  'Use workflows, code reviews, and documentation to make teams calmer and faster.',
  'Treat performance, maintainability, and developer experience as product features.',
]

function AboutPage() {
  return (
    <RouteTransition>
      <PageHeader
        eyebrow="About"
        title="Engineering journey shaped by frontend craft, backend systems, and team ownership."
        description="I started in frontend engineering and grew into full-stack product delivery and engineering leadership. The common thread is structure: clean architecture, practical workflows, and systems that can keep growing."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
            <div className="space-y-8">
              {[
                ['Frontend foundation', 'Frontend work taught me to care about product clarity, interaction quality, responsiveness, and the fine details that make software feel reliable.'],
                ['Full-stack evolution', 'As I moved deeper into backend and data flows, I became more focused on API contracts, state boundaries, authentication, admin operations, and production readiness.'],
                ['Leadership growth', 'Leading frontend work and contributing to engineering direction pushed me toward better Git workflows, reviews, mentoring, documentation, and technical decision-making.'],
              ].map(([title, body]) => (
                <div key={title}>
                  <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">{title}</h2>
                  <p className="mt-3 max-w-3xl text-pretty leading-7 text-[var(--color-text-secondary)]">{body}</p>
                </div>
              ))}
            </div>

            <aside className="space-y-5">
              <div className="flex h-[360px] items-center justify-center rounded-xl border border-dashed border-[var(--color-border-secondary)] bg-[var(--color-bg-card)] text-sm text-[var(--color-text-tertiary)]">
                Profile image ready
              </div>
              <Card>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">Based in</p>
                <p className="mt-3 text-lg font-semibold text-[var(--color-text-primary)]">Lagos, Nigeria</p>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Available for serious product engineering conversations.</p>
              </Card>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((principle, index) => (
              <Card key={principle}>
                <span className="font-mono text-xs text-[var(--color-accent-secondary)]">0{index + 1}</span>
                <p className="mt-4 text-lg font-medium leading-7 text-[var(--color-text-primary)]">{principle}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </RouteTransition>
  )
}

export default AboutPage
