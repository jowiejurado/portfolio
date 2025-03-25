import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { splitVendorChunkPlugin } from 'vite';
import { resolve } from 'path';
// https://vitejs.dev/config/

/**
 * Vite configuration
 * @param {string} mode - The current mode ('development' or 'production')
 * @returns {import('vite').UserConfig}
 */
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), 'PORTFOLIO_') };

  return defineConfig({
    /**
     * Environment variables prefix
     * @type {string}
     */
    envPrefix: 'PORTFOLIO_',

    /**
     * List of Vite plugins
     * @type {Array<import('vite').Plugin>}
     */
    plugins: [
      vue(),
      splitVendorChunkPlugin(),
    ],

    /**
     * Build configuration
     * @type {import('vite').BuildConfig}
     */
    build: {
      minify: true,
      sourcemap: true,
      rollupOptions: {
        preserveSymlinks: true,
        input: {
          main: resolve(__dirname, 'index.html'),
        },
      }
    },

    /**
     * Resolve configuration
     * @type {import('vite').ResolveConfig}
     */
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },

    /**
     * Server configuration
     * @type {import('vite').ServerConfig}
     */
    server: {
      host: process.env.PORTFOLIO_BASE_URL || 'localhost',
      port: process.env.PORTFOLIO_BASE_PORT || 3000,
      watch: {
        usePolling: true
      }
    }
  });
};
