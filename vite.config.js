import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
import pxtovw  from 'postcss-px-to-viewport';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: true,
    host: "0.0.0.0"
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       pxtovw({
  //         viewportWidth: 375
  //       })
  //     ]
  //   }
  // }
})
