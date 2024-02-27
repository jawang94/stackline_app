/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      _redux: path.resolve(__dirname, "./src/_redux"),
      components: path.resolve(__dirname, "./src/components"),
      css: path.resolve(__dirname, "./src/css"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      mock_data: path.resolve(__dirname, "./src/mock_data"),
      types: path.resolve(__dirname, "./src/types"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },
});
