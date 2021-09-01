import path from 'path'
import { defineConfig } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros'
import ssrgPlugin from 'vite-plugin-ssr-ssg'

import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), macrosPlugin(), ssrgPlugin({})],
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `
      import { jsx } from "@emotion/react";
    `
  },
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/types/*': path.resolve(__dirname, './@types'),
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/routes': path.resolve(__dirname, './src/routes')
    }
  }
})
