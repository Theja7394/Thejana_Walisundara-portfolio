import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Thejana_Walisundara-portfolio/", // Set the correct base path for GitHub Pages
  define: {
    'process.env': {}, // Fix "process is not defined" error
  },
})
