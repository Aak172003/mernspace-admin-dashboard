/// <reference types="vitest"/>
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    // whenever project statrt this file first execute
    setupFiles: "./setupTest.ts",
    globals: true
    
  },
})