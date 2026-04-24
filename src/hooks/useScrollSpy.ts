import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 80): string {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(sectionIds[i])
          return
        }
      }
      setActiveId('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return activeId
}
