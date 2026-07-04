import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import Badge from '../ui/Badge'
import Button from '../ui/Button'
import Card from '../ui/Card'

const statusVariant = {
  Live: 'success',
  Completed: 'accent',
  'In Progress': 'warning',
}

function ProjectCard({ project, featured = false }) {
  return (
    <Card className="group flex h-full flex-col hover:border-[var(--color-border-secondary)]">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
            {project.type}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">
            {project.title}
          </h3>
        </div>
        <Badge variant={statusVariant[project.status] || 'default'}>{project.status}</Badge>
      </div>

      <p className="mt-5 text-pretty text-sm leading-6 text-[var(--color-text-secondary)]">{project.description}</p>

      <div className="mt-6 grid gap-5">
        <div>
          <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">Engineering focus</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.focus.map((item) => (
              <Badge key={item} variant="outline">{item}</Badge>
            ))}
          </div>
        </div>

        {featured ? (
          <div>
            <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">Architecture notes</h4>
            <ul className="mt-3 space-y-2">
              {project.architecture.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--color-text-secondary)]">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div>
          <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">Stack</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] p-4">
        <h4 className="text-sm font-semibold text-[var(--color-text-primary)]">Contribution</h4>
        <p className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{project.contribution}</p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.liveLink ? (
          <Button href={project.liveLink} variant="outline" size="sm" icon={ExternalLink} external>
            Live demo
          </Button>
        ) : null}
        {project.githubLink ? (
          <Button href={project.githubLink} variant="ghost" size="sm" icon={FaGithub} external>
            GitHub
          </Button>
        ) : null}
        {!project.liveLink && !project.githubLink ? (
          <span className="text-sm text-[var(--color-text-tertiary)]">Private repository / internal build</span>
        ) : null}
      </div>
    </Card>
  )
}

export default ProjectCard
