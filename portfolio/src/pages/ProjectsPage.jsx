import RouteTransition from '../components/animations/RouteTransition'
import ProjectCard from '../components/cards/ProjectCard'
import Container from '../components/ui/Container'
import PageHeader from '../components/ui/PageHeader'
import { projects } from '../data/projects'

function ProjectsPage() {
  const featured = projects.filter((project) => project.featured)
  const other = projects.filter((project) => !project.featured)

  return (
    <RouteTransition>
      <PageHeader
        eyebrow="Projects"
        title="Product work presented through engineering decisions."
        description="These projects are framed around architecture, integration, ownership, and system behavior rather than screenshots alone."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {other.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </RouteTransition>
  )
}

export default ProjectsPage
