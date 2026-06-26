/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1e40af',
                'primary-dark': '#1e3a8a',
                secondary: '#f1f5f9',
                'secondary-dark': '#e2e8f0',
                accent: '#2563eb',
                'bg-dark': '#0f172a',
                'bg-light': '#f8fafc',
                'text-dark': '#1e293b',
                'text-light': '#f8fafc',
            },
        },
    },
    plugins: [],
}
