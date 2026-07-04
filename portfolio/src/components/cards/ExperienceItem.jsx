import Badge from '../ui/Badge'
import Card from '../ui/Card'

function ExperienceItem({ item }) {
  return (
    <Card className="relative">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">{item.role}</h2>
          <p className="mt-2 text-sm font-medium text-[var(--color-text-secondary)]">{item.company}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>{item.period}</Badge>
          {item.type === 'current' ? <Badge variant="success">Current</Badge> : null}
        </div>
      </div>

      <p className="mt-5 max-w-3xl text-sm leading-6 text-[var(--color-text-secondary)]">{item.summary}</p>

      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-sm text-[var(--color-text-secondary)]">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-primary)]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default ExperienceItem
