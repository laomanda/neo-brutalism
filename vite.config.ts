import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom") ||
              id.includes("scheduler")
            ) {
              return "react-vendor";
            }
            if (
              id.includes("motion") ||
              id.includes("gsap") ||
              id.includes("lenis")
            ) {
              return "animation-vendor";
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 1200,
  },
});
