import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-scale-in': 'spinScaleIn 0.5s ease-out',
        'spin-scale-out': 'spinScaleOut 0.5s ease-out',
      },
      keyframes: {
        spinScaleIn: {
          '0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' },
        },
        spinScaleOut: {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'scale(0) rotate(-360deg)', opacity: '0' },
        },
      },
      fontSize: {
        'base': '1rem',    // デフォルトのフォントサイズ
        'lg': '1.125rem',   // 中サイズのフォントサイズ
        'xl': '1.25rem',    // 大サイズのフォントサイズ
        '2xl': '1.5rem',    // 超大サイズのフォントサイズ
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
