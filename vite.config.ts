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
		// Reportar solo chunks > 600 KB
		chunkSizeWarningLimit: 600,
		rollupOptions: {
			output: {
				// Separar vendors en chunks cacheables independientes
				manualChunks(id) {
					if (!id.includes("node_modules")) return;
					if (id.includes("framer-motion"))       return "vendor-motion";
					if (
						id.includes("react-dom") ||
						id.includes("react-router") ||
						id.includes("react/")
					)                                       return "vendor-react";
					if (id.includes("@radix-ui") || id.includes("lucide-react"))
						                                    return "vendor-ui";
					if (id.includes("@tanstack"))           return "vendor-query";
					return "vendor-misc";
				},
			},
		},
	},
}));

