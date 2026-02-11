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
        primary: '#48b346',
        'primary-light': '#5ec95c',
        'primary-dark': '#3a9a38',
        accent: '#48b346',
        'accent-light': '#5ec95c',
        'accent-dark': '#3a9a38',
        secondary: '#0F172A',
        'secondary-light': '#1E293B',
        'bg-light': '#F8FAFC',
        'bg-gray': '#E2E8F0',
        'text-dark': '#1E293B',
        'text-medium': '#475569',
        'text-light': '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'medium': '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
