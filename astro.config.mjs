import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://knowlton.co.nz",
  integrations: [sitemap({ filter: (page) => {
    const path = new URL(page).pathname;
    return path !== "/404/" && path !== "/404.html" &&
      path !== "/161777/" && !path.startsWith("/mi/");
  } })],
  vite: {
    plugins: [tailwindcss()]
  }
});
