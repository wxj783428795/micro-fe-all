import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";
// https://vite.dev/config/
const port = 7000;
export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  return {
    base: isDev ? "/" : `http://localhost:${port}`,
    plugins: [
      react(),
      qiankun("micro1", {
        useDevMode: isDev,
      }),
    ],
    server: {
      port,
    },
  };
});
