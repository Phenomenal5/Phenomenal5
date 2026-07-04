import { motion as Motion } from 'framer-motion'

function RouteTransition({ children }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      {children}
    </Motion.div>
  )
}

export default RouteTransition
