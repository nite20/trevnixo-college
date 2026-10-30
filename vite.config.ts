import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
const rootDir = path.dirname(fileURLToPath(import.meta.url));
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    build: { rollupOptions: { input: { index: resolve(rootDir, 'index.html'), admin: resolve(rootDir, 'admin.html'), shop: resolve(rootDir, 'shop.html'), cart: resolve(rootDir, 'cart.html'), checkout: resolve(rootDir, 'checkout.html'), wishlist: resolve(rootDir, 'wishlist.html'), auto: resolve(rootDir, 'auto.html'), autoBike: resolve(rootDir, 'auto-bike.html') } } },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      proxy: { '/api': 'http://localhost:4000' },
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
