function Stars({ count }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            ))}
        </div>
    )
}

const testimonials = [
    {
        text: 'Боялись стать "мелкой рыбой" для крупного агентства, но здесь нашей команде дали 100% приоритет. Никаких скрытых комиссий. Платформа работает идеально!',
        name: 'Игорь К.',
        role: 'CEO финтех-стартапа',
        avatar: '/reviewer-igor.png'
    },
    {
        text: 'Прошлые подрядчики просто игнорировали мои правки. Эти ребята сразу дали доступ к GitHub и каждый день писали детальные апдейты. Максимально прозрачно.',
        name: 'Анна М.',
        role: 'Head of Marketing',
        avatar: '/reviewer-anna.png'
    },
    {
        text: 'Первые, кто не начал вымогать деньги за каждую кнопку после старта. Запустили магазин точно в срок, трафик пошёл уже на второй месяц.',
        name: 'Дмитрий В.',
        role: 'Founder',
        avatar: '/reviewer-dmitry.png'
    }
]

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-24 px-6 overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-accent/[0.03] blur-[160px] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <div className="animate-on-scroll mb-4 flex justify-center">
                        <span className="section-badge">
                            <span className="w-2 h-2 rounded-full bg-accent" />
                            Отзывы клиентов
                        </span>
                    </div>
                    <div className="animate-on-scroll stagger-1 frosted-glass rounded-3xl px-8 py-8 max-w-3xl mx-auto">
                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4">
                            Не верьте нам на слово
                        </h2>
                        <p className="text-white/50 text-lg">
                            Послушайте фаундеров и стартаперов, доверивших нам свои проекты
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div key={i} className={`animate-on-scroll stagger-${i + 1} frosted-glass rounded-3xl p-8 lg:p-10 relative flex flex-col hover:-translate-y-2 transition-transform duration-500`}>
                            <div className="absolute top-6 right-8 text-8xl font-heading text-white/[0.03] leading-none select-none pointer-events-none">"</div>
                            <div className="relative z-10 flex flex-col flex-1">
                                <Stars count={5} />
                                <p className="text-white/70 text-base leading-relaxed my-6 flex-1 italic">«{t.text}»</p>
                                <div className="flex items-center gap-4 mt-auto pt-5 border-t border-white/5">
                                    <div className="w-14 h-14 rounded-full border-2 border-accent/20 overflow-hidden flex-shrink-0">
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-sm">{t.name}</div>
                                        <div className="text-white/40 text-xs uppercase tracking-wider mt-1">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
