import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 5173
    },
    define: {
        'import.meta.env.VITE_SITE': JSON.stringify(process.env.VITE_SITE || 'main')
    }
})
