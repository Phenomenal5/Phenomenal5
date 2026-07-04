import RouteTransition from '../components/animations/RouteTransition'
import Button from '../components/ui/Button'
import Container from '../components/ui/Container'

function NotFoundPage() {
  return (
    <RouteTransition>
      <section className="py-24">
        <Container>
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-accent-secondary)]">404</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[var(--color-text-primary)]">Page not found.</h1>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              This route does not exist in the portfolio application.
            </p>
            <div className="mt-8">
              <Button href="/">Return home</Button>
            </div>
          </div>
        </Container>
      </section>
    </RouteTransition>
  )
}

export default NotFoundPage
