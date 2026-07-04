import { motion as Motion } from 'framer-motion'
import { cn } from '../../lib/cn'

function SectionHeader({ title, subtitle, eyebrow, align = 'left', className = '' }) {
  const isCentered = align === 'center'

  return (
    <Motion.div
      className={cn('mb-12', isCentered ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl', className)}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-secondary)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="mt-4 text-pretty text-base text-[var(--color-text-secondary)]">{subtitle}</p> : null}
    </Motion.div>
  )
}

export default SectionHeader
