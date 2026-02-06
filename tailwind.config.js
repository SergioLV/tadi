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
        primary: '#059669',
        'primary-light': '#10B981',
        'primary-dark': '#047857',
        accent: '#059669',
        'accent-light': '#10B981',
        'accent-dark': '#047857',
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
