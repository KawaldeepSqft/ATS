import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Adsadapt India/',  // ← VERY IMPORTANT
  plugins: [react()],
})
