import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { chromeExtension } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), chromeExtension({ manifest })]
})
