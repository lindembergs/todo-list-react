import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Certifique-se de importar o plugin React, se você estiver usando React
import VitePWA from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(), // Certifique-se de adicionar o plugin React se você estiver usando React
    VitePWA({
      registerType: "autoUpdate", // Define como você deseja que o Service Worker seja registrado

      // Configurações do PWA aqui
      manifest: {
        name: "MeuApp",
        short_name: "App",
        description: "Uma descrição do aplicativo",
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
