import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },
  },
  output: 'server',
  adapter: vercel(),
});
