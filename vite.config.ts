import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 會把網站放在 https://<帳號>.github.io/<repo 名稱>/
// base 必須是 "/<repo 名稱>/"。改自訂網域或根目錄時把 base 改成 "/"。
// 也可用環境變數覆寫：BASE_PATH=/my-repo/ npm run build
const repoName = process.env.BASE_PATH ?? '/LTC-personal-brand/'

export default defineConfig({
  base: repoName,
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
