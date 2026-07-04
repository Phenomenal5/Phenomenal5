import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

const variants = {
  primary:
    'border-[var(--color-accent-primary)] bg-[var(--color-accent-primary)] text-white hover:bg-[var(--color-accent-secondary)]',
  secondary:
    'border-[var(--color-border-primary)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] hover:border-[var(--color-border-secondary)]',
  outline:
    'border-[var(--color-border-secondary)] bg-transparent text-[var(--color-text-primary)] hover:border-[var(--color-accent-primary)] hover:text-[var(--color-accent-secondary)]',
  ghost:
    'border-transparent bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-tertiary)] hover:text-[var(--color-text-primary)]',
}

const sizes = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base',
}

function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  icon: Icon,
  external = false,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg border font-medium transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent-primary)]',
    variants[variant],
    sizes[size],
    className,
  )
  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" size={18} /> : null}
      {children}
    </>
  )

  if (href) {
    const isExternalLink = external || /^(https?:|mailto:|tel:)/.test(href)

    if (!isExternalLink && href.startsWith('/')) {
      return (
        <Link className={classes} to={href} {...props}>
          {content}
        </Link>
      )
    }

    return (
      <a
        className={classes}
        href={href}
        target={isExternalLink && external ? '_blank' : undefined}
        rel={isExternalLink && external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} type={type} {...props}>
      {content}
    </button>
  )
}

export default Button
