import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const { triggerOnce = true, root = null, rootMargin = '0px', threshold = 0 } = options

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        if (triggerOnce) {
          observer.unobserve(entry.target)
        }
      } else if (!triggerOnce) {
        setIsInView(false)
      }
    }, { root, rootMargin, threshold })

    observer.observe(node)

    return () => observer.disconnect()
  }, [root, rootMargin, threshold, triggerOnce])

  return [ref, isInView]
}
