// ini konfigurasi buat vite biar jalan lancar jaya atuh
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // kita load environment variable dulu mah di sini biar kebaca sistem
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000, // jalanin di port 3000 ya, jangan lupa tah
      host: '0.0.0.0',
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
