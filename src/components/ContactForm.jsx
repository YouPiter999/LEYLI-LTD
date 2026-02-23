import { useState } from 'react'

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
    }

    return (
        <section id="contact" className="relative py-24 px-6">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.04] blur-[160px] pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="divider mb-20" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-on-scroll">
                        <span className="section-badge mb-6 inline-flex">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Первый шаг
                        </span>
                        <div className="frosted-glass rounded-3xl px-8 py-10 mt-4">
                            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gradient mb-6 leading-tight">
                                Готовы получить 100% приоритет?
                            </h2>
                            <p className="text-white/50 text-lg leading-relaxed mb-8">
                                Запишитесь на бесплатную 45-минутную стратегическую сессию. Рассчитаем честную фиксированную цену.
                            </p>
                            <div className="space-y-5">
                                {[
                                    { icon: <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" /></svg>, text: 'Стратегическая сессия' },
                                    { icon: <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" /></svg>, text: 'Детальный аудит сайта' },
                                    { icon: <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>, text: 'Фиксированный расчёт стоимости' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">{item.icon}</div>
                                        <span className="text-white/70 font-medium">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="animate-on-scroll stagger-2">
                        <div className="frosted-glass rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] pointer-events-none" />
                            {submitted ? (
                                <div className="text-center py-16 relative z-10">
                                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                                        <svg className="w-12 h-12 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4 font-heading">Отправлено!</h3>
                                    <p className="text-white/50 text-lg">Мы свяжемся с вами в течение 2 часов</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                                    <div className="mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-2 font-heading">Заполните форму</h3>
                                        <p className="text-accent/80 text-sm">Ответим в течение 2 рабочих часов</p>
                                    </div>
                                    <input required className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all" placeholder="Ваше имя" />
                                    <input type="email" required className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all" placeholder="Email" />
                                    <textarea rows="3" required className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-white/30 focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none" placeholder="Опишите задачу" />
                                    <button type="submit" className="btn-primary w-full !py-4 text-lg flex items-center justify-center gap-3">
                                        <span>Отправить</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
