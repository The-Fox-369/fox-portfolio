// vite.config.js (or vite.config.ts)
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite"; // Import the plugin

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss({
      // Configuration options for Tailwind CSS v4 go here
      config: {
        // You still need to specify content paths so v4 knows what to scan
        content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
        // --- THIS IS THE KEY ---
        darkMode: "class",
        // You can add theme extensions etc. here if needed
        theme: {
          extend: {},
        },
        // Other v4 config if necessary
      },
    }),
  ],
});
