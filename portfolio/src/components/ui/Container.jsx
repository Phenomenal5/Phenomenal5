import { cn } from '../../lib/cn'

function Container({ children, className = '' }) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}

export default Container
