// vite.config.js
import { defineConfig } from "vite"; // <-- ADD THIS LINE AT THE TOP
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Now 'defineConfig' is known
  plugins: [
    vue(),
    tailwindcss({
      config: {
        content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
        darkMode: "class",
        // You can add back your theme object if needed, once this works
        // theme: {
        //   extend: {},
        // },
      },
    }),
  ],
});
