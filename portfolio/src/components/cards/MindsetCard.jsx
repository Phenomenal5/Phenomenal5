import { Gauge, GitBranch, Layers, Network, Terminal, Workflow } from 'lucide-react'
import Card from '../ui/Card'

const iconMap = {
  Gauge,
  GitBranch,
  Layers,
  Network,
  Terminal,
  Workflow,
}

function MindsetCard({ item }) {
  const Icon = iconMap[item.icon] || Layers

  return (
    <Card className="h-full hover:border-[var(--color-border-secondary)]">
      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)] text-[var(--color-accent-secondary)]">
        <Icon size={19} aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[var(--color-text-primary)]">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">{item.description}</p>
    </Card>
  )
}

export default MindsetCard
