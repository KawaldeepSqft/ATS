import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './adsadapt-india/',  // ← VERY IMPORTANT
  plugins: [react()],
})
