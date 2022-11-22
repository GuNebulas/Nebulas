import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  const shared = {
    define: {
      __APP_ENV__: env.NODE_ENV,
    },
    plugins: [
      vue(),
      legacy({
        targets: ["defaults", "not IE 11"],
      }),
    ],
  };
  if (command === "serve") {
    return {
      ...shared,
      server: {
        port: 5000,
      },
      // dev specific config
    };
  } else {
    // command === 'build'
    return {
      ...shared,
      // build specific config
      build: {
        outDir: "dist",
        minify: "terser",
        terserOptions: {
          compress: {
            //生产环境时移除console
            drop_console: true,
            drop_debugger: true,
          },
        },
        base: 'Nebulas'
      },
    };
  }
});
