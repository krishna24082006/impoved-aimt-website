import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// TanStack Start requires `tanstackStart()` before `@vitejs/plugin-react`.
// Tailwind v4 uses the Vite plugin from `@tailwindcss/vite`.
export default defineConfig({
  server: {
    port: 3000,
    strictPort: false,
  },
  plugins: [tsconfigPaths(), tailwindcss(), tanstackStart(), viteReact()],
});
