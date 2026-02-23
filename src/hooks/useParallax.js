import { useState, useEffect, useRef } from 'react'

export function useParallax(speed = 0.3) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const distance = center - window.innerHeight / 2
      setOffset(distance * speed)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return {
    ref,
    offset,
    style: {
      transform: `translateY(${offset}px)`,
      willChange: 'transform'
    }
  }
}

export function use3DLogo() {
  const ref = useRef(null)
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scrollY: 0
  })

  useEffect(() => {
    const onScroll = () => {
      setTransform(prev => ({
        ...prev,
        scrollY: window.scrollY * 0.3
      }))
    }

    const onMouseMove = (e) => {
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const x = (e.clientX - centerX) / centerX
      const y = (e.clientY - centerY) / centerY
      setTransform(prev => ({
        ...prev,
        rotateX: y * -15,
        rotateY: x * 15
      }))
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return {
    ref,
    style: {
      transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translateY(${transform.scrollY}px) rotateZ(${transform.scrollY * 0.05}deg)`,
      transition: 'transform 0.1s ease-out',
      willChange: 'transform'
    }
  }
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? top / height : 0)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return progress
}
