import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      filename: "service-worker.js",
      registerType: "prompt",
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,png,svg,woff2,woff,ttf,wasm,zip,glb,env}",
        ],
        maximumFileSizeToCacheInBytes: 20 * 1024 * 1024,
      },
      manifest: {
        name: "PWA",
        short_name: "PWA ",
        description: "PWA Practice",
        lang: "en",
        orientation: "portrait",
        theme_color: "#e07e27",
        background_color: "#e07e27",
        icons: [
          {
            src: "./favicon.ico",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon",
          },
          {
            src: "./logo192.png",
            type: "image/png",
            sizes: "192x192",
          },
          {
            src: "./logo512.png",
            type: "image/png",
            sizes: "512x512",
          },
          {
            src: "./logo512.png",
            type: "image/png",
            sizes: "512x512",
            purpose: "maskable",
          },
          //A maskable icon is an icon that can be customized to match the theme and style of the user's device, providing a consistent and integrated visual experience.
        ],
        start_url: "/",
        display: "standalone",
      },
    }),
  ],
});
