import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // Active les sourcemaps pour voir l'origine des erreurs
  },
  server: {
    open: true, // Ouvre automatiquement le navigateur au démarrage
    strictPort: true, // Évite que Vite change de port automatiquement
    watch: {
      usePolling: true, // Assure la détection des changements de fichiers
    },
  },
});

