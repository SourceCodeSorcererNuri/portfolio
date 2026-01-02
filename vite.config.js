import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        allowedHosts: [
            'a52fcab14f2d.ngrok-free.app', // Add your specific ngrok URL here
            '.ngrok-free.app'              // This allows ANY ngrok URL (very helpful)
        ]
    }
})
