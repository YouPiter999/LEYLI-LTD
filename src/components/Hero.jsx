export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-hero-glow opacity-60 pointer-events-none" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
            }} />

            {/* Content on frosted glass */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="animate-on-scroll mb-8">
                    <span className="section-badge inline-flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        Веб-разработка нового уровня
                    </span>
                </div>

                {/* Main text on frosted glass */}
                <div className="animate-on-scroll stagger-1 frosted-glass rounded-3xl px-8 py-10 sm:px-12 sm:py-14 mb-10 max-w-5xl mx-auto">
                    <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                        <span className="text-gradient">Хватит сливать бюджет.</span>
                        <br />
                        <span className="text-gradient-accent">Создаём сайты,</span>
                        <br />
                        <span className="text-white">приносящие прибыль.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/60 leading-relaxed">
                        Никакого скрытого аутсорса и раздутых часов. Разрабатываем веб-проекты
                        с прозрачным доступом к коду с первого дня.
                    </p>
                </div>

                {/* CTAs */}
                <div className="animate-on-scroll stagger-2 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <a href="#contact" className="btn-primary flex items-center gap-2 group text-base">
                        <span>Получить бесплатный аудит</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a href="#services" className="btn-outline text-base">
                        Узнать подробнее
                    </a>
                </div>

                {/* Stats on frosted glass */}
                <div className="animate-on-scroll stagger-3 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {[
                        { value: '10+', label: 'Лет опыта' },
                        { value: '150+', label: 'Проектов' },
                        { value: '0', suffix: ' доплат', label: 'Фиксированная цена' },
                        { value: '100%', label: 'In-house команда' },
                    ].map((stat, i) => (
                        <div key={i} className="frosted-glass rounded-2xl p-5 text-center hover:-translate-y-1 transition-all duration-300">
                            <div className="text-3xl sm:text-4xl font-bold text-accent mb-1 font-heading">
                                {stat.value}{stat.suffix && <span className="text-sm font-body text-white/40">{stat.suffix}</span>}
                            </div>
                            <div className="text-xs font-medium text-white/50 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
        </section>
    )
}
