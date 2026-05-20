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
            const normalizedId = id.replace(/\\/g, "/");
            if (
              normalizedId.includes("/react/") ||
              normalizedId.includes("/react-dom/") ||
              normalizedId.includes("/react-router-dom/") ||
              normalizedId.includes("/scheduler/")
            ) {
              return "react-vendor";
            }
            if (
              normalizedId.includes("motion") ||
              normalizedId.includes("gsap") ||
              normalizedId.includes("lenis")
            ) {
              return "animation-vendor";
            }
            if (normalizedId.includes("@iconify")) {
              return "iconify-vendor";
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 1200,
  },
});
