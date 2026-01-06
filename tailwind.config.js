/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'background-light': '#f3f4f6', // gray-100
                'background-dark': '#111827', // gray-900
            },
            fontFamily: {
                display: ['Inter', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'slide-in-right': {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                }
            },
            animation: {
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'slide-in-right': 'slide-in-right 0.3s ease-out forwards',
            }
        },
    },
    plugins: [],
}
