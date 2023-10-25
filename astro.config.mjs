import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // site: "https://judethegemini.github.io",
  // base: "/contact-credit",
  integrations: [tailwind(), react()],
});
