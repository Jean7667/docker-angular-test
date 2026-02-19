import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    origin: 'http://ng.home',
    strictPort: true,
    fs: { strict: false },                 // optional for cross-path usage
    historyApiFallback: true               // ✅ critical for Angular routing to work
  }
});
