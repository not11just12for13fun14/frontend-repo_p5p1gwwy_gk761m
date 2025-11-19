import { useEffect, useRef } from 'react'

export default function ScrollFadeIn({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = 0
    el.style.transform = 'translateY(12px)'

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transition = 'opacity 600ms ease, transform 600ms ease'
            el.style.opacity = 1
            el.style.transform = 'translateY(0)'
            obs.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
