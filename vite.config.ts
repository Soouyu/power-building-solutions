import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    svgr(),
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // Función: cubre TODOS los node_modules para evitar que Rollup
        // genere un "vendor-misc" con dependencias de React que carguen
        // antes que React → corrige "createContext of undefined".
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          // framer-motion es grande; va sola para cacheo independiente
          if (id.includes("framer-motion") || id.includes("/motion/")) {
            return "vendor-motion";
          }

          // React + scheduler + radix-ui + lucide JUNTOS
          // Radix llama React.createContext en tiempo de módulo,
          // por lo que deben compartir chunk con React
          if (
            id.includes("/react/") ||
            id.includes("/react-dom/") ||
            id.includes("/react-router") ||
            id.includes("/scheduler/") ||
            id.includes("/use-sync-external-store/") ||
            id.includes("@radix-ui") ||
            id.includes("lucide-react")
          ) {
            return "vendor-react-ui";
          }

          // tanstack / query
          if (id.includes("@tanstack")) {
            return "vendor-query";
          }

          // resto (sonner, class-variance-authority, clsx, etc.)
          return "vendor-misc";
        },
      },
    },
  },
}));

