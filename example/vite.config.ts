import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import twvgPlugin from '../lib/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), twvgPlugin()],
});
