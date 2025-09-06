import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// --- 這裡有變動 ---
// 引入 Node.js 的 url 模組，用來處理檔案路徑
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // --- 這裡有變動 ---
      // 使用 import.meta.url 來取得目前檔案的路徑，並解析出 src 資料夾的絕對路徑
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
