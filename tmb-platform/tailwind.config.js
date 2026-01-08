/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
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
            }
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'], // Primary for everything
            serif: ['Inter', 'sans-serif'], // Override serif usage to enforces sans
        },
        borderRadius: {
            'pill': '9999px',
            'card': '24px',
        }
    },
    plugins: [],
}
