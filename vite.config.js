import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import VitePWA from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "Lista de tarefas",
        short_name: "Lista de tarefas",
        description:
          "Aplicação para lembrar da lista de tarefas e saber as tarefas que já foram feitas.",
        theme_color: "#000000",
        background_color: "#ffffff",
        icons: [
          {
            src: "/path/to/icon.png", // Substitua pelo caminho correto para o ícone
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
