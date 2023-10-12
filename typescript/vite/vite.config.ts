import { fileURLToPath, URL } from "node:url";

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/hero',
  resolve: {
    alias: {
      '@components': fileURLToPath(new URL("./src/components", import.meta.url)),
      auth: fileURLToPath(new URL("./src/auth", import.meta.url)),
      pages: fileURLToPath(new URL("./src/pages'", import.meta.url)),
      routing: fileURLToPath(new URL("./src/routing", import.meta.url)),
      theme: fileURLToPath(new URL("./src/theme", import.meta.url)),
      configs: fileURLToPath(new URL("./src/config", import.meta.url)),
      providers: fileURLToPath(new URL("./src/providers", import.meta.url)),
      utils: fileURLToPath(new URL("./src/utils", import.meta.url)),
      partials: fileURLToPath(new URL("./src/partials", import.meta.url)),
      'modules/errors': fileURLToPath(new URL("./src/modules/errors", import.meta.url)),
      'modules/users-management': fileURLToPath(new URL("./src/modules/users-management", import.meta.url)),
    },
  },
})
