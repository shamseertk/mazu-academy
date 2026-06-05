import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'transform-require-to-new-url',
      transform(code, id) {
        if (!id.match(/src\/.*\.[jt]sx?$/)) return null;
        if (code.includes('require(')) {
          const transformed = code.replace(/require\((['"`].*?['"`])\)/g, 'new URL($1, import.meta.url).href');
          return {
            code: transformed,
            map: null,
          };
        }
        return null;
      },
    },
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env.PUBLIC_URL': JSON.stringify(''),
  },
  server: {
    port: 3000,
    open: true,
  },
});
