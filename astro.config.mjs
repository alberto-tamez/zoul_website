import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://zoul.capital",
  integrations: [tailwind({ applyBaseStyles: false })],
  output: "static",
  server: {
    port: 4000,
  },
  preview: {
    port: 4000,
  },
  trailingSlash: "never",
  build: {
    format: "file",
  },
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
      },
    },
  },
});
