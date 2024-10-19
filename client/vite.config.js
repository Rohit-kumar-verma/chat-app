import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // esline-disabled-next-line no-undef
      '@': path.resolve(__dirname, './src'),  // This creates an alias '@' for the './src' folder
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});
