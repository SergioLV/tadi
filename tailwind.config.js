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
        // Primary - Azul profesional (confianza)
        primary: '#0F172A',
        'primary-light': '#1E293B',
        // Accent - Verde salud (CTAs y acentos)
        accent: '#059669',
        'accent-light': '#10B981',
        'accent-dark': '#047857',
        // Backgrounds
        'bg-light': '#F8FAFC',
        'bg-gray': '#E2E8F0',
        // Text
        'text-dark': '#0F172A',
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
};
