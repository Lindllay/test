import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		// rollupOptions: {
		// 	external: [
		// 		"react", // ignore react stuff
		// 		"react-dom",
		// 		"NonExistingPath",
		// 	],
		// },
	},
	plugins: [react()],
	server: {
		proxy: {
			// "/api/v1": "http://localhost:5000",
		},
	},
});
