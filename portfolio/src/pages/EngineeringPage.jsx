import RouteTransition from '../components/animations/RouteTransition'
import MindsetCard from '../components/cards/MindsetCard'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import { mindsetItems } from '../data/mindset'
import { techStack } from '../data/techStack'
import Badge from '../components/ui/Badge'

const operatingModel = [
  ['Architecture first', 'Define boundaries, data movement, and ownership before implementation details harden into debt.'],
  ['Practical abstraction', 'Create reusable pieces when they reduce complexity, not because abstraction looks sophisticated.'],
  ['Operational thinking', 'Build interfaces and APIs with error states, recovery, observability, and team maintenance in mind.'],
  ['Delivery discipline', 'Use Git workflows, reviews, and documentation to protect quality while keeping momentum.'],
]

function EngineeringPage() {
  return (
    <RouteTransition>
      <PageHeader
        eyebrow="Engineering"
        title="A philosophy for building systems that stay understandable."
        description="My engineering approach is grounded in scalability, maintainability, performance awareness, clean workflows, and product ownership."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {mindsetItems.map((item) => (
              <MindsetCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-secondary)]">
                Operating model
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                How I make technical decisions.
              </h2>
            </div>
            <div className="grid gap-4">
              {operatingModel.map(([title, body]) => (
                <Card key={title}>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{body}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {techStack.map((group) => (
              <Card key={group.category}>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{group.category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </RouteTransition>
  )
}

export default EngineeringPage
