import Badge from '../ui/Badge'
import Card from '../ui/Card'

function LabCard({ item }) {
  return (
    <Card className="h-full hover:border-[var(--color-border-secondary)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">{item.track}</p>
          <h3 className="mt-3 text-lg font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
        </div>
        <Badge variant={item.status === 'In Development' ? 'accent' : 'warning'}>{item.status}</Badge>
      </div>
      <p className="mt-4 text-sm leading-6 text-[var(--color-text-secondary)]">{item.description}</p>
    </Card>
  )
}

export default LabCard
