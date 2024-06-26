import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
// import { loadEnv } from "vite";
// const { BUILD_TYPE } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

export default defineConfig({
  site: 'https://paperwrld.github.io',
  base: 'ethanokamura/', // 'ethanokamura/',
  output: 'static',
  integrations: [tailwind()],
});