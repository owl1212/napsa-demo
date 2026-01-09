/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: '#fcfdf5',
          500: '#a3c838', // Legacy support
        },
        // ECO-TECH PALETTE
        primary: {
          DEFAULT: '#1A4D2E', // Deep Forest Green
          light: '#2D5A3D',
          dark: '#0F2F1B',
        },
        action: {
          DEFAULT: '#CCFF00', // Electric Lime
          hover: '#B3E600',
        },
        accent: {
          DEFAULT: '#D4A574', // Harvest Gold
          light: '#E2BF99',
        },
        surface: {
          light: '#FAFAF8', // Cream
          dark: '#1A1A1A',  // Charcoal
        },
        // LOLC Finance Colors
        'primary-blue': '#004499',
        'accent-red': '#E30613',
        'success-green': '#66BB6A',
        // NAPSA Colors
        'primary-navy': '#1B254B',
        'primary-blue': '#111827',
        'accent-gold': '#F59E0B',
        'accent-blue': '#2563EB',
        'bg-gray': '#F8FAFC',
        'text-dark': '#1F2937',
        'text-gray': '#6B7280',
        'border-color': '#E5E7EB',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
      },
      borderRadius: {
        'pill': '9999px',
        'card': '24px',
        'sm': '4px',
        'md': '6px',
      },
      boxShadow: {
        'slider-thumb': '0 2px 5px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Open Sans', 'sans-serif'], // Primary for everything
        serif: ['Inter', 'Roboto', 'Open Sans', 'sans-serif'], // Override serif usage to enforces sans
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
