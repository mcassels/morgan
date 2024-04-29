import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          antd: ['antd'],
          react: ['react'],
          'react-dom': ['react-dom'],
        },
      },
    }
  }
})
