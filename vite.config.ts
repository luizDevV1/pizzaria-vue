import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import {quasar, transformAssetUrls} from "@quasar/vite-plugin";
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/system/pizzaria-slice/",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/"),
      "~config": resolve(__dirname, "./src/controllers/config"),
      "~plugins": resolve(__dirname, "./src/controllers/plugins"),
      "~service": resolve(__dirname, "./src/controllers/services"),
      "~entity": resolve(__dirname, "./src/models/entities"),
      "~components": resolve(__dirname, "./src/views/components"),
      "~pages": resolve(__dirname, "./src/views/pages"),
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
