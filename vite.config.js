import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  // --- 這是部署到 GitHub Pages 的關鍵設定 ---
  // 告訴 Vite 所有資源的路徑都要加上這個前綴
  base: '/vue_homework_1/', // <-- 請確認這就是您的 repo 名稱

  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
