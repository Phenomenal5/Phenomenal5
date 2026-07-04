import RouteTransition from '../components/animations/RouteTransition'
import ExperienceItem from '../components/cards/ExperienceItem'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import { experience } from '../data/experience'

function ExperiencePage() {
  return (
    <RouteTransition>
      <PageHeader
        eyebrow="Experience"
        title="Ownership across frontend systems, backend alignment, and engineering workflows."
        description="A practical timeline of product work, technical leadership, system stabilization, and collaborative delivery."
      />

      <section className="py-20">
        <Container>
          <div className="relative space-y-6 lg:pl-8">
            <div className="absolute left-0 top-0 hidden h-full w-px bg-[var(--color-border-primary)] lg:block" />
            {experience.map((item) => (
              <div key={item.id} className="relative">
                <span className="absolute -left-[39px] top-8 hidden h-3 w-3 rounded-full bg-[var(--color-accent-primary)] ring-4 ring-[var(--color-bg-primary)] lg:block" />
                <ExperienceItem item={item} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </RouteTransition>
  )
}

export default ExperiencePage
