// vite.config.js
// ... other imports
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss({
      config: {
        content: [
          // Keep content path
          "./index.html",
          "./src/**/*.{vue,js,ts,jsx,tsx}",
        ],
        darkMode: "class", // Keep darkMode setting
        // Temporarily remove theme: { extend: {} }
      },
    }),
  ],
});
