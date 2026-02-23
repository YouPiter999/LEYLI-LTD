const team = [
    {
        name: 'Александр',
        role: 'Lead Frontend',
        color: 'from-blue-500/20 to-cyan-500/20',
        avatar: 'team-alexander.png',
        highlight: 'Ускорил загрузку в 3×',
        description: 'Переписал архитектуру клиентского портала, ускорив загрузку в 3 раза. Пишет чистый код.',
        skills: ['React', 'Next.js', 'TypeScript', 'Performance']
    },
    {
        name: 'Елена',
        role: 'UX/UI Дизайнер',
        color: 'from-purple-500/20 to-pink-500/20',
        avatar: 'team-elena.png',
        highlight: '100% ROI за 12 часов',
        description: 'Спроектировала интерфейс для e-commerce проекта с окупаемостью за первые сутки.',
        skills: ['Figma', 'UX Research', 'Прототипы', 'Анимации']
    },
    {
        name: 'Михаил',
        role: 'Tech Lead',
        color: 'from-emerald-500/20 to-teal-500/20',
        avatar: 'team-mikhail.png',
        highlight: '15+ международных проектов',
        description: 'Выстроил безопасную серверную инфраструктуру со строгим соблюдением GDPR.',
        skills: ['Node.js', 'AWS', 'PostgreSQL', 'GDPR']
    },
]

export default function Team() {
    return (
        <section id="team" className="relative py-24 px-6 overflow-hidden">
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-purple-500/[0.03] blur-[140px] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="animate-on-scroll mb-4 flex justify-center">
                        <span className="section-badge">
                            <span className="w-2 h-2 rounded-full bg-accent" />
                            Наша команда
                        </span>
                    </div>
                    <div className="animate-on-scroll stagger-1 frosted-glass rounded-3xl px-8 py-8 max-w-3xl mx-auto">
                        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient mb-4">
                            Senior-разработчики,<br className="hidden sm:block" /> а не новички с бирж
                        </h2>
                        <p className="text-white/50 text-lg">
                            Каждый из нас — специалист с многолетним опытом и реальными результатами
                        </p>
                    </div>
                </div>
                <div className="divider mb-16" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {team.map((member, i) => (
                        <div key={i} className={`animate-on-scroll stagger-${i + 1} frosted-glass rounded-3xl p-8 lg:p-10 transition-all duration-500 group relative overflow-hidden hover:-translate-y-2`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                            <div className="relative z-10">
                                <div className="w-24 h-24 rounded-2xl border-2 border-white/10 mb-6 group-hover:scale-105 group-hover:border-accent/30 transition-all duration-300 overflow-hidden">
                                    <img
                                        src={`${import.meta.env.BASE_URL}${member.avatar}`}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1 font-heading">{member.name}</h3>
                                <p className="text-accent text-sm font-bold tracking-wider uppercase mb-5">{member.role}</p>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-5">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                    {member.highlight}
                                </div>
                                <p className="text-white/50 text-[15px] leading-relaxed mb-5">{member.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {member.skills.map((skill, j) => (
                                        <span key={j} className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-white/60 border border-white/10">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
