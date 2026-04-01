import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#e6f2f8',
          100: '#cce5f1',
          200: '#99cbe3',
          300: '#66b1d5',
          400: '#3397c7',
          500: '#007db9',
          600: '#006494',
          700: '#004b6f',
          800: '#00324a',
          900: '#0a2540',
        },
        sunset: {
          400: '#ff9a56',
          500: '#ff7b3d',
          600: '#e65c1f',
        },
        aqua: {
          400: '#6dd5ed',
          500: '#2193b0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
      keyframes: {
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'scale-in': 'scale-in 0.15s ease-out',
      },
    },
  },
  plugins: [forms, typography],
}
export default config
