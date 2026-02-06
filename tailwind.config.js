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
        // Primary - Deep Chilean Blue (trust)
        primary: '#1E3A8A',
        'primary-light': '#3B5998',
        'primary-dark': '#1E3A5F',
        // Secondary - Clinical White
        white: '#FFFFFF',
        // Accent Chile - Soft Chilean Red
        'chile-red': '#C53030',
        'chile-red-light': '#E53E3E',
        // Accent Health - Health Green
        'health-green': '#16A34A',
        'health-green-dark': '#15803D',
        'health-green-light': '#22C55E',
        // Background - Light Gray
        'bg-light': '#F1F5F9',
        'bg-gray': '#E2E8F0',
        // Text - Dark Gray
        'text-dark': '#0F172A',
        'text-medium': '#475569',
        'text-light': '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(30, 58, 138, 0.08)',
        'medium': '0 8px 30px rgba(30, 58, 138, 0.12)',
        'strong': '0 12px 40px rgba(30, 58, 138, 0.16)',
      },
    },
  },
  plugins: [],
};
