import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      'ivory': 'rgb(243,243,239)',
      'maire': 'rgb(27,27,20)',
    },
    extend: {
      keyframes: {
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(200%)',
            visibility: 'visible',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'slide-out-bottom': {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            visibility: 'hidden',
            transform: 'translateY(200%)',
          },
        },
      },
      animation: {
        'slide-in-bottom': 'slide-in-bottom 0.5s ease-out',
        'slide-out-bottom': 'slide-out-bottom 0.5s ease-in forwards',
      },
    },
  },
  plugins: [],
}
export default config
