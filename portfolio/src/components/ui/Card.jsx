import { cn } from '../../lib/cn'

function Card({ children, className = '', as: Component = 'article' }) {
  return (
    <Component
      className={cn(
        'rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-bg-card)] p-6 transition-colors duration-200',
        className,
      )}
    >
      {children}
    </Component>
  )
}

export default Card
