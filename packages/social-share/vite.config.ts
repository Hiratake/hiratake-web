// https://ja.vitejs.dev/config/
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'SocialShare',
      fileName: (format) => `social-share.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    emptyOutDir: false,
  },
})
