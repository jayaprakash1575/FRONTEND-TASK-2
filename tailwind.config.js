export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pulse: {
          primary: {
            DEFAULT: 'var(--color-primary, #00E5FF)',
            hover: 'var(--color-primary-hover, #00B4D8)',
            light: '#70EFFF',
            muted: 'rgba(var(--color-primary-rgb, 0, 229, 255), 0.15)',
            50: '#E6FCFF',
            100: '#CCF9FF',
            500: '#00E5FF',
            600: '#00B4D8',
            700: '#008FA3',
          },
          secondary: {
            DEFAULT: '#FF2A5F',
            hover: '#E01A4F',
            light: '#FF6B90',
            muted: 'rgba(255, 42, 95, 0.15)',
            50: '#FFF0F4',
            500: '#FF2A5F',
            600: '#E01A4F',
          },
          amber: '#FFB800',
          green: '#10B981',
          purple: '#8B5CF6',
          dark: 'rgb(var(--bg-body-rgb) / <alpha-value>)',
          surface: 'rgb(var(--bg-surface-rgb) / <alpha-value>)',
          elevated: 'rgb(var(--bg-elevated-rgb) / <alpha-value>)',
          card: 'rgb(var(--bg-card-rgb) / <alpha-value>)',
          'card-hover': 'rgb(var(--bg-card-hover-rgb) / <alpha-value>)',
          input: 'rgb(var(--bg-input-rgb) / <alpha-value>)',
          border: {
            subtle: 'var(--border-subtle)',
            medium: 'var(--border-medium)',
            highlight: 'var(--border-highlight)',
          }
        }
      },
      fontFamily: {
        heading: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 24px rgba(0, 229, 255, 0.35)',
        'glow-sm': '0 0 12px rgba(0, 229, 255, 0.25)',
        'glow-lg': '0 0 40px rgba(0, 229, 255, 0.45)',
        'glow-secondary': '0 0 24px rgba(255, 42, 95, 0.35)',
      },
      borderRadius: {
        'pulse-xs': '4px',
        'pulse-sm': '8px',
        'pulse-md': '12px',
        'pulse-lg': '18px',
        'pulse-xl': '24px',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%': { filter: 'drop-shadow(0 0 6px rgba(0,229,255,0.3))' },
          '100%': { filter: 'drop-shadow(0 0 18px rgba(0,229,255,0.75))' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
}
