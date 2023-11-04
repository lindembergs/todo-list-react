import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      name: "Weather Ups",
      short_name: "Weather Ups",
      description: "An app that shows weather forecasts for your city.",
      start_url: "/",
      display: "standalone",
      background_color: "#e8ebf2",
      theme_color: "#171717",
      icons: [
        {
          src: "./src/icons/logoapp.jpg",
          sizes: "192x192",
          type: "image/jpg",
        },
        {
          src: "./src/icons/logoapp.jpg",
          sizes: "512x512",
          type: "image/jpg",
        },
        {
          src: "./src/icons/logoapp.jpg",
          sizes: "180x180",
          type: "image/jpg",
        },
        {
          src: "./src/icons/logoapp.jpg",
          sizes: "225x225",
          type: "image/jpg",
          purpose: "maskable",
        },
      ],
    }),
  ],
});
