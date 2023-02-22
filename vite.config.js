import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Lines 5 and 7 allows to set a 'localhost:----' in the address line
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
