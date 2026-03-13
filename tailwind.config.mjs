/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0B1D3A',
        'midnight-light': '#162544',
        ash: '#4A4A4A',
        amber: '#E8A838',
        'amber-dark': '#D4872B',
        pine: '#2D5A3D',
        atlantic: '#1E6B8C',
        salt: '#F5F0E8',
        ember: '#C4392D',
        sand: '#D4C5A9',
        charcoal: '#1A1A2E',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
      },
      animation: {
        'float-up': 'floatUp 3s ease-in-out infinite',
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'fade-in-slow': 'fadeIn 3s ease-out forwards',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'smoke-rise': 'smokeRise 8s ease-in-out infinite',
        'typewriter': 'typewriter 0.05s steps(1) forwards',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-100px) scale(0.5)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.3)' },
        },
        smokeRise: {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0.3' },
          '50%': { transform: 'translateY(-50px) scaleX(1.5)', opacity: '0.15' },
          '100%': { transform: 'translateY(-100px) scaleX(2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
