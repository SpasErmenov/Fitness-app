import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, UserConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default ({ mode }: UserConfig) => {
  process.env = { ...process.env, ...loadEnv(mode || '', process.cwd()) };
  return defineConfig({
    plugins: [react(), nodePolyfills()],
    server: {
      host: true,
      port: Number(process.env.VITE_PORT) || 3000,
    },
    base: './',
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  });
};
