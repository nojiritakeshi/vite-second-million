import million from "million/compiler";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), million.vite({ mode: "preact" })],
});
