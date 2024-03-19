/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'sen': ['Sen', 'sans-serif']
            },
            colors: {
                'accent-blue': 'hsl(213,72%,37%)'
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require("tailwindcss-animation-delay"),
    ],
}
