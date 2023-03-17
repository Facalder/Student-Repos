import react from '@vitejs/plugin-react-swc';
import imagemin from 'unplugin-imagemin/vite';
import { defineConfig } from 'vite';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagemin(),
    ViteWebfontDownload([
      'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap',
    ]),
  ],
});
