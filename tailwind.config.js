/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    DEFAULT: '#2dd4bf', // Teal 400
                    light: '#5eead4', // Teal 300
                    dark: '#14b8a6', // Teal 500
                },
                dark: {
                    900: '#0a0a0f',
                    800: '#12121a',
                }
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'Georgia', 'serif'],
                body: ['"Inter"', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'hero-glow': 'radial-gradient(ellipse at 50% 0%, rgba(45, 212, 191, 0.15) 0%, transparent 70%)',
            }
        },
    },
    plugins: [],
}
