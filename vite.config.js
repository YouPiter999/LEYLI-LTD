import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/LEYLI-LTD/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    open: true
  }
})
