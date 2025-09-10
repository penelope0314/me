import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
const flowbitePlugin = require('flowbite/plugin');


// https://vite.dev/config/
export default defineConfig({
  plugins: 
  [
    tailwindcss(),
    react()
  ],
  // base: "/me/"
  base: "./"
})
