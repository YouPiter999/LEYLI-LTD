import { useEffect, useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trust from './components/Trust'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function FloatingLogo() {
    const canvasRef = useRef(null)
    const [rotate, setRotate] = useState(0)
    const [mouse, setMouse] = useState({ x: 0, y: 0 })
    const [ready, setReady] = useState(false)

    // Remove dark background via Canvas
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = () => {
            canvas.width = img.width
            canvas.height = img.height
            ctx.drawImage(img, 0, 0)
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
            const data = imageData.data
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i], g = data[i + 1], b = data[i + 2]
                const brightness = (r + g + b) / 3
                if (brightness < 45) {
                    data[i + 3] = 0 // fully transparent
                } else if (brightness < 80) {
                    data[i + 3] = Math.round((brightness - 45) / 35 * 255) // fade
                }
            }
            ctx.putImageData(imageData, 0, 0)
            setReady(true)
        }
        img.src = `${import.meta.env.BASE_URL}hero-logo.png`
    }, [])

    useEffect(() => {
        const onScroll = () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight
            const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
            setRotate(progress * 360)
        }
        const onMouse = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2
            const y = (e.clientY / window.innerHeight - 0.5) * 2
            setMouse({ x, y })
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('mousemove', onMouse, { passive: true })
        onScroll()
        return () => {
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('mousemove', onMouse)
        }
    }, [])

    const rotateX = mouse.y * -8
    const rotateY = mouse.x * 8

    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1]">
            <canvas
                ref={canvasRef}
                className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] select-none"
                style={{
                    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotate(${rotate}deg)`,
                    transition: 'transform 0.1s ease-out',
                    willChange: 'transform',
                    filter: 'drop-shadow(0 0 60px rgba(45, 212, 191, 0.3))',
                    opacity: ready ? 0.3 : 0
                }}
            />
        </div>
    )
}

export default function App() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

        setTimeout(() => {
            document.querySelectorAll('.animate-on-scroll').forEach((el) => {
                observer.observe(el)
            })
        }, 100)

        return () => observer.disconnect()
    }, [])

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden relative">
            {/* Global floating 3D logo — always behind content */}
            <FloatingLogo />

            <Navbar />
            <main className="relative z-[2]">
                <Hero />
                <Trust />
                <Services />
                <Team />
                <Testimonials />
                <ContactForm />
            </main>
            <Footer />
        </div>
    )
}
