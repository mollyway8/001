import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/001/', // GitHub Pages 项目页路径（mollyway8.github.io/001）
})