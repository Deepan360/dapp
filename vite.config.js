import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173 // you can set this to any port you'd like, just make sure it matches your EXPOSE in Dockerfile
  }
})
