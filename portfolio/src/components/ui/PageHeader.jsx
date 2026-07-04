import Container from './Container'

function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="border-b border-[var(--color-border-primary)] bg-[var(--color-bg-secondary)]/45 py-16 sm:py-20">
      <Container>
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-secondary)]">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-[var(--color-text-primary)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-3xl text-pretty text-lg text-[var(--color-text-secondary)]">{description}</p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  )
}

export default PageHeader
