/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Inter', 'sans-serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: '#000000',
                foreground: '#ffffff',
                border: 'rgba(255, 255, 255, 0.1)',
                cyan: {
                   accent: '#00D1FF',
                },
                purple: {
                   accent: '#7C3AED',
                },
                card: {
                    DEFAULT: '#0C0C0C',
                    foreground: '#ffffff'
                },
                primary: {
                    DEFAULT: '#00D1FF',
                    foreground: '#000000'
                },
                secondary: {
                    DEFAULT: '#7C3AED',
                    foreground: '#ffffff'
                },
            },
            keyframes: {
                'fade-in-up': {
                    from: { opacity: '0', transform: 'translateY(20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' }
                },
                'glow-pulse': {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.6' }
                }
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};

