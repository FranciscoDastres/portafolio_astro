import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  adapter: vercel({
    runtime: 'nodejs20.x',
    edgeMiddleware: false,
    functionPerRoute: false
  })
});