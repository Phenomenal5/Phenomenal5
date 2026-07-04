import RouteTransition from '../components/animations/RouteTransition'
import LabCard from '../components/cards/LabCard'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import { labsItems } from '../data/labs'

function LabsPage() {
  return (
    <RouteTransition>
      <PageHeader
        eyebrow="Engineering Labs"
        title="Experiments for backend systems, platform patterns, and reusable frontend infrastructure."
        description="A living area for systems I am actively designing, testing, or preparing to ship as they mature."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {labsItems.map((item) => (
              <LabCard key={item.id} item={item} />
            ))}
          </div>

          <Card className="mt-8">
            <p className="text-sm leading-6 text-[var(--color-text-secondary)]">
              These labs are intentionally technical. They represent reusable system concepts that can become production
              features, internal tooling, or open portfolio case studies once they are mature enough to publish.
            </p>
          </Card>
        </Container>
      </section>
    </RouteTransition>
  )
}

export default LabsPage
