// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: "http://portfolio.arthur.iouzalen.com/",
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",

    routing: {
      prefixDefaultLocale: true,
    },
  },
});
