import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },
  },
});
