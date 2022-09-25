import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import {quasar, transformAssetUrls} from "@quasar/vite-plugin";
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/**"),
      "~config": resolve(__dirname, "./src/controllers/config/**"),
      "~entity": resolve(__dirname, "./src/models/entities/**"),
      "~service": resolve(__dirname, "./src/controllers/services/**"),
      "~components": resolve(__dirname, "./src/vies/components/**"),
      "~pages": resolve(__dirname, "./src/vies/pages/**"),
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    eslintPlugin(),
    quasar({
      sassVariables: "src/views/sass/_quasar.variables.sass",
    }),
  ],
});
