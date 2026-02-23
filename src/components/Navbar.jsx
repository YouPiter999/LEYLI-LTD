export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-3 px-6 bg-[#0a0a0f]/70 backdrop-blur-2xl border-b border-white/5">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <img src={`${import.meta.env.BASE_URL}hero-logo.png`} alt="LEYLI LTD" className="w-11 h-11 object-cover" />
                    </div>
                    <span className="text-xl font-bold tracking-tight">LEYLI <span className="text-white/50 font-light">LTD</span></span>
                </a>
                <div className="hidden md:flex gap-8 items-center">
                    <a href="#services" className="text-sm text-white/60 hover:text-accent transition-colors">Услуги</a>
                    <a href="#team" className="text-sm text-white/60 hover:text-accent transition-colors">Команда</a>
                    <a href="#testimonials" className="text-sm text-white/60 hover:text-accent transition-colors">Отзывы</a>
                    <a href="#contact" className="btn-primary !px-5 !py-2.5 text-sm !rounded-xl">Бесплатный аудит</a>
                </div>
            </div>
        </nav>
    )
}
