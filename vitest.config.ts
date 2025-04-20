import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom', // Next.jsのDOM操作を可能にする
    globals: true, // `expect` や `test` をグローバルで使えるようにする
    setupFiles: './vitest.setup.ts', // Jestの設定を模倣
  },
})
