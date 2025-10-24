/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Waykeeper Master Brand Colors
        'skypath-blue': '#77BEF0',
        'sunrise-gold': '#FFCB61',
        'journey-coral': '#FF894F',
        'heart-rose': '#EA5B6F',
        'deep-earth': '#3A3A3A',
        'morning-light': '#F5F3EE',
        'soft-stone': '#D4C5B0',
      },
      fontFamily: {
        headline: ['Libre Baskerville', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

