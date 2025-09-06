import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  // =================================================
  // --- 在這裡新增一個物件來覆寫或新增規則 ---
  {
    name: 'app/custom-rules-override',
    rules: {
      // 關閉多單字元件名稱的規則
      'vue/multi-word-component-names': 'off',

      // 您未來也可以在這裡新增或覆寫其他規則
      // 範例：'vue/no-unused-vars': 'warn',
    },
  },
  // --- 新增結束 ---
  // =================================================

  skipFormatting,
])
