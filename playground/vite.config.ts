import path from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import DevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [DevTools(), vue()],
  resolve: {
    alias: {
      '@bigquant/icons-vue': path.resolve(__dirname, '../packages/vue/src'),
    },
  },
})
