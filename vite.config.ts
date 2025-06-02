import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/variables/index.scss" as *;
        @use "@/styles/mixins/index.scss" as *;
      `,
      },
    },
  },
});
