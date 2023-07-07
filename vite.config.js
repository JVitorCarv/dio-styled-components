import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import base from './src/basename'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  rules: {"react/prop-types": 0},
  base: base,
})
