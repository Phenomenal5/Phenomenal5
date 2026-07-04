import { useEffect, useState } from 'react'

export function useScrollspy(sectionIds = []) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '')

  useEffect(() => {
    if (!sectionIds.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleEntries[0]) {
          setActiveId(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
