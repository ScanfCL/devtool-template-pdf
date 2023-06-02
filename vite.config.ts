import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "vite-plugin-fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), fs()],
  resolve: {
    alias: {
      fs: path.resolve("rollup-plugin-node-builtins"),
    },
  },
});
