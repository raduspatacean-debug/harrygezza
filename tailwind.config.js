/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'Palatino', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        psyche: {
          bg:     '#110025',
          bg2:    '#1c0040',
          amber:  '#FF8C00',
          gold:   '#FFD700',
          acid:   '#C8FF00',
          pink:   '#FF1479',
          teal:   '#00C9C9',
          violet: '#9B30FF',
          cream:  '#FFF5CC',
        },
      },
      animation: {
        'bloom':    'bloom 4s ease-in-out infinite',
        'sway':     'sway 7s ease-in-out infinite',
        'hue-drift':'hue-drift 8s ease-in-out infinite alternate',
        'spin-slow':'spin 30s linear infinite',
      },
      keyframes: {
        bloom:      { '0%,100%':{ transform:'scale(1) rotate(0deg)' }, '50%':{ transform:'scale(1.2) rotate(15deg)' } },
        sway:       { '0%,100%':{ transform:'translateY(-50%) rotate(-8deg)' }, '50%':{ transform:'translateY(-50%) rotate(8deg)' } },
        'hue-drift':{ '0%':{ filter:'hue-rotate(0deg)' }, '100%':{ filter:'hue-rotate(20deg)' } },
      },
    },
  },
  plugins: [],
}
