import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  theme: {
    extend: {
      colors: {
        primary: "#E8E8E2",   // whitish
        secondary: "#080807", // blackinsh
        accent: "#383632",    // brounish
        dark: "#0F172A",      // Dark navy
        light: "#F8FAFC"      // Very light gray
      }
    },
  },
})
