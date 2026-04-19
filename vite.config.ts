import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// TanStack Start on Vercel uses Nitro (official):
// https://vercel.com/docs/frameworks/full-stack/tanstack-start
export default defineConfig({
  server: {
    port: 3000,
    strictPort: false,
  },
  plugins: [tsconfigPaths(), tailwindcss(), tanstackStart(), nitro(), viteReact()],
});
