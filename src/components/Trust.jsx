const trustItems = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        value: '100%',
        title: 'In-house команда',
        description: 'Никаких бирж и дешёвых фрилансеров — ваш код не передаётся третьим лицам.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
        value: '24/7',
        title: 'Абсолютный контроль',
        description: 'Ежедневные апдейты в Slack и полный доступ к репозиторию на GitHub.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
            </svg>
        ),
        value: '+20%',
        title: 'Органический трафик',
        description: 'Сайты, готовые к продвижению на рынках США, Европы и Кипра.',
    },
]

export default function Trust() {
    return (
        <section className="relative py-24 px-6">
            <div className="max-w-7xl mx-auto z-10 relative">
                <div className="divider mb-24" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {trustItems.map((item, i) => (
                        <div
                            key={i}
                            className={`animate-on-scroll stagger-${i + 1} frosted-glass rounded-3xl p-8 lg:p-10 transition-all duration-500 group relative overflow-hidden hover:-translate-y-2`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <div className="text-4xl lg:text-5xl font-bold text-accent font-heading mb-3">{item.value}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-white/50 leading-relaxed text-[15px]">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
