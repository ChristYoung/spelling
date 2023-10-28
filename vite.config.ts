import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: process.env.NODE_ENV === 'production' ? 'spelling' : './',
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'typo-js': ['typo-js'],
                },
            },
        },
        assetsInlineLimit: 0,
        outDir: 'dist',
        assetsDir: 'assets',
        // assetsInclude: ['node_modules/typo-js/typo/dictionaries/**/*'],
        // optimizeDeps: {
        //     include: ['typo-js'],
        // },
    },
    assetsInclude: [
        'node_modules/typo-js/dictionaries/en_US/en_US.aff',
        'node_modules/typo-js/dictionaries/en_US/en_US.dic',
    ],
    optimizeDeps: {
        include: ['typo-js'],
    },
    server: {
        proxy: {
            '/suggest': {
                target: 'https://dict.youdao.com',
                changeOrigin: true,
            },
        },
    },
});
