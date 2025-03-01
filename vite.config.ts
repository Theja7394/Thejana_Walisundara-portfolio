import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Thejana_Walisundara-portfolio/", 
  define: {
    'process.env': {},
  },
})
