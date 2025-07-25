
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      // Optional: Add if you're using `@` as alias
      "@": "/src",
    },
  },
});
