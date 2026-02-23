const services = [
    {
        icon: <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>, tag: 'Разработка', title: 'Разработка с нуля',
        pain: 'Устали от фрилансеров, которые копируют код из YouTube и пропадают после предоплаты?',
        result: 'Создаём сайты с чистой архитектурой и честной ценой, которая не превратится в «почасовку».',
        features: ['React / Next.js / Vue', 'Адаптивный дизайн', 'Чистая архитектура', 'Фиксированная цена'],
    },
    {
        icon: <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>, tag: 'Оптимизация', title: 'Бизнес-оптимизация и SEO',
        pain: 'Ваш сайт просто «висит» в сети, не ранжируется в Google и не приносит лидов?',
        result: 'Внедряем решения, которые превращают пустой трафик в продажи и повышают ROI.',
        features: ['Техническое SEO', 'Оптимизация скорости', 'Аналитика и A/B тесты', 'GDPR compliance'],
    },
    {
        icon: <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>, tag: 'Поддержка', title: 'Пост-релизная поддержка',
        pain: 'Агентства требуют доплаты за каждое микро-изменение после запуска?',
        result: 'Берём на себя обновления и исправление уязвимостей — не бросим проект после релиза.',
        features: ['SLA-гарантии', 'Мониторинг 24/7', 'Обновления безопасности', 'Приоритетная поддержка'],
    },
]

export default function Services() {
    return (
        <section id="services" className="relative py-24 px-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[150px] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header on frosted glass */}
                <div className="text-center mb-20">
                    <div className="animate-on-scroll mb-4 flex justify-center">
                        <span className="section-badge">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Наши услуги
                        </span>
                    </div>
                    <div className="animate-on-scroll stagger-1 frosted-glass rounded-3xl px-8 py-8 max-w-3xl mx-auto">
                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4">
                            Решаем задачи бизнеса
                        </h2>
                        <p className="text-white/50 text-lg">
                            Каждая услуга закрывает конкретную боль, с которой вы уже сталкивались
                        </p>
                    </div>
                </div>

                {/* Cards on frosted glass */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <div key={i} className={`animate-on-scroll stagger-${i + 1} frosted-glass rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 flex flex-col`}>
                            <div className="p-8 lg:p-10 flex flex-col flex-1">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                        {service.icon}
                                    </div>
                                    <span className="text-xs font-bold tracking-widest uppercase text-accent/80">{service.tag}</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-5 font-heading">{service.title}</h3>
                                <div className="mb-5 p-4 rounded-2xl bg-red-500/[0.04] border border-red-500/10">
                                    <div className="flex items-start gap-3">
                                        <span className="text-red-400 text-xs mt-1 shrink-0">✕</span>
                                        <p className="text-white/40 text-sm italic leading-relaxed">{service.pain}</p>
                                    </div>
                                </div>
                                <div className="mb-6 p-4 rounded-2xl bg-accent/[0.05] border border-accent/10">
                                    <div className="flex items-start gap-3">
                                        <span className="text-accent text-xs mt-1 shrink-0">✓</span>
                                        <p className="text-white/70 text-sm leading-relaxed">{service.result}</p>
                                    </div>
                                </div>
                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <div className="flex flex-wrap gap-2">
                                        {service.features.map((f, j) => (
                                            <span key={j} className="text-xs font-medium px-3 py-1.5 rounded-xl bg-white/[0.04] text-white/60 border border-white/[0.06]">{f}</span>
                                        ))}
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
