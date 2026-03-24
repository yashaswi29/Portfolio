import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const backendUrl = process.env.BACKEND_URL || 'http://localhost:7001';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['www.yashaswi.space', 'yashaswi.space'],
    proxy: {
      '/api': {
        target: backendUrl,
        changeOrigin: true,
      },
      '/analytics': {
        target: backendUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/analytics/, '/api/analytics'),
      }
    }
  }
});
