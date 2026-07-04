import { cn } from '../../lib/cn'

const variants = {
  default: 'bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]',
  accent: 'bg-[var(--color-accent-glow)] text-[var(--color-accent-secondary)]',
  success: 'bg-green-500/10 text-green-500',
  warning: 'bg-yellow-500/10 text-yellow-500',
  outline: 'border border-[var(--color-border-primary)] text-[var(--color-text-secondary)]',
}

function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium leading-none',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}

export default Badge
