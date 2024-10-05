/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extends: {
      colors: {
        'color-primary': '#141496',
        'color-secondary': '#3b413c',
        'color-tertiary': '#d10000',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
