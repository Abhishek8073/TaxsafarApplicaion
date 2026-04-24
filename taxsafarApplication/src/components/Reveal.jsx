import { useEffect, useRef, useState } from 'react'

export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  style,
  ...props
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`}
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  )
}
