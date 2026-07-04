import { ArrowRight } from 'lucide-react'
import RouteTransition from '../components/animations/RouteTransition'
import ProjectCard from '../components/cards/ProjectCard'
import MindsetCard from '../components/cards/MindsetCard'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Container from '../components/ui/Container'
import SectionHeader from '../components/ui/SectionHeader'
import { mindsetItems } from '../data/mindset'
import { projects } from '../data/projects'
import { SITE_CONFIG } from '../constants/site'

function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2)
  const philosophyPreview = mindsetItems.slice(0, 3)

  return (
    <RouteTransition>
      <section className="border-b border-[var(--color-border-primary)] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:items-end">
            <div className="max-w-4xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-secondary)]">
                {SITE_CONFIG.role}
              </p>
              <h1 className="mt-5 text-balance text-5xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-6xl lg:text-7xl">
                {SITE_CONFIG.headline}
              </h1>
              <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-[var(--color-text-secondary)]">
                {SITE_CONFIG.summary}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/projects" size="lg" icon={ArrowRight}>View engineering work</Button>
                <Button href="/contact" size="lg" variant="outline">Start a conversation</Button>
              </div>
            </div>

            <Card className="lg:mb-2">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
                Current focus
              </p>
              <div className="mt-5 space-y-5">
                {[
                  ['Architecture', 'Maintainable systems with clear ownership boundaries.'],
                  ['Full-stack delivery', 'Product flows spanning UI, APIs, data, and operations.'],
                  ['Leadership', 'Code reviews, workflows, mentoring, and technical direction.'],
                ].map(([title, body]) => (
                  <div key={title}>
                    <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">{title}</h2>
                    <p className="mt-1 text-sm leading-6 text-[var(--color-text-secondary)]">{body}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeader
            eyebrow="Selected systems"
            title="Project work with architecture behind it."
            subtitle="A compact preview of product systems, backend-aware frontend work, and admin workflows."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/projects" variant="outline" icon={ArrowRight}>See all projects</Button>
          </div>
        </Container>
      </section>

      <section className="border-y border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] py-20">
        <Container>
          <SectionHeader
            eyebrow="Engineering philosophy"
            title="Built around systems thinking, not just screens."
            subtitle="The portfolio is intentionally framed around architecture, maintainability, workflows, and product ownership."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {philosophyPreview.map((item) => (
              <MindsetCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </RouteTransition>
  )
}

export default HomePage
