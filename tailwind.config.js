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
                primary: '#1f2937', /* deep dark grey */
                'primary-dark': '#111827',
                secondary: '#f3f4f6', /* light grey */
                'secondary-dark': '#e5e7eb',
                accent: '#374151', /* dark grey */
                'bg-dark': '#111827',
                'bg-light': '#f9fafb',
                'text-dark': '#111827',
                'text-light': '#f9fafb',
            },
        },
    },
    plugins: [],
}
