import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vite-test/',
  resolve: {
    alias: {
      // 部署到github時打開
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
