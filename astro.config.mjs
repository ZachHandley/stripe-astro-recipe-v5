import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: import.meta.env.DEV
    ? "http://localhost:4321"
    : "https://www.my-site.dev",

  vite: {
    ssr: { noExternal: ["@splendidlabs/astro"] },
  },
});
