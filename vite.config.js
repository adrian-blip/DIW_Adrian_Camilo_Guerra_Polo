import { defineConfig } from 'vite';
import { resolve } from 'path';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  appType: 'mpa',  // Para soportar múltiples páginas HTML
  base: './',
  root: resolve(__dirname, 'Fuente'),
  build: {
    outDir: '../dev',  // Directorio de salida para desarrollo
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'Fuente/index.html'),
        constitucion: resolve(__dirname, 'Fuente/html/constitucion.html'),
        contacto: resolve(__dirname, 'Fuente/html/contacto.html'),
        iniciarSesion: resolve(__dirname, 'Fuente/html/iniciar-seccion.html'),
        normativa: resolve(__dirname, 'Fuente/html/normativa.html'),
        registrate: resolve(__dirname, 'Fuente/html/registrate.html'),
        resoluciones: resolve(__dirname, 'Fuente/html/resoluciones.html'),
      },
    },
    minify: 'terser',
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
    }),
  ],
  server: {
    open: true,
  },
  preview: {
    open: true,
    port: 4173,
  },
});
