import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'anthracite': '#1A202C',
        'acier-clair': '#E2E8F0',
        'bleu-technique': '#3182CE',
        'orange-securite': '#0859a8', // Nouveau bleu client au lieu de #F6AD55
      },
      animation: {
        'slide-down': 'slide-down 0.6s ease-out',
        'fade-in': 'fade-in 0.8s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
      },
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config 