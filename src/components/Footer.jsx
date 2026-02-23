export default function Footer() {
    return (
        <footer className="relative py-16 px-6 border-t border-white/5 bg-[#050508] overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
                    <div className="md:col-span-1">
                        <a href="#" className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl overflow-hidden">
                                <img src={`${import.meta.env.BASE_URL}hero-logo.png`} alt="LEYLI LTD" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                LEYLI <span className="text-white/40 font-light">LTD</span>
                            </span>
                        </a>
                        <p className="text-white/40 text-sm leading-relaxed mb-8">
                            Создаём сайты, которые приносят прибыль. 100% in-house команда без скрытого аутсорса.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-white/80 uppercase tracking-widest mb-6">Услуги</h4>
                        <ul className="space-y-4">
                            {['Разработка с нуля', 'Бизнес-оптимизация', 'SEO-продвижение', 'SLA-поддержка'].map((item) => (
                                <li key={item}>
                                    <a href="#services" className="text-sm text-white/50 hover:text-accent hover:translate-x-1 inline-block transition-all">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-white/80 uppercase tracking-widest mb-6">Компания</h4>
                        <ul className="space-y-4">
                            {['О нас', 'Команда', 'Портфолио', 'Отзывы'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-white/50 hover:text-accent hover:translate-x-1 inline-block transition-all">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-white/80 uppercase tracking-widest mb-6">Контакты</h4>
                        <ul className="space-y-4 mb-8">
                            <li className="text-sm text-white/50 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0"><svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg></span>
                                info@leyli.ltd
                            </li>
                            <li className="text-sm text-white/50 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0"><svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg></span>
                                Лимассол, Кипр
                            </li>
                            <li className="text-sm text-white/50 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0"><svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>
                                Пн — Пт, 9:00 — 18:00
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="divider mb-8" />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <p className="text-white/30 text-sm text-center sm:text-left">
                        © {new Date().getFullYear()} LEYLI LTD. Все права защищены.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">Политика конфиденциальности</a>
                        <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">Условия использования</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
