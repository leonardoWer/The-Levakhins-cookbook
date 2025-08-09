import { defineConfig } from 'vite'
import {resolve} from 'path';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      's': resolve(__dirname, './src'),
      'p': resolve(__dirname, './public'),
    },
  },
  base: '/The-Levakhins-cookbook/',
})
