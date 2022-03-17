import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {join} from "path";
import {builtinModules} from "module";
// import { node } from 'electron-vendors.cache.json';

const PACKAGE_ROOT = __dirname;

const config = {
    mode: process.env.MODE,
    root: PACKAGE_ROOT,
    envDir: process.cwd(),
    resolve: {
        alias: {
            '@/': join(PACKAGE_ROOT, 'src') + '/',
            'renderer': join(PACKAGE_ROOT, 'src', 'renderer'),
        },
    },
    build: {
        sourcemap: 'inline',
        // target: `node${node}`,
        outDir: PACKAGE_ROOT + '/build',
        assetsDir: PACKAGE_ROOT + '/public',
        minify: process.env.MODE !== 'development',
        lib: {
            entry: join(PACKAGE_ROOT, 'src/main/main.js'),
            formats: ['cjs'],
        },
        rollupOptions: {
            input: {
                main: join(PACKAGE_ROOT, 'src/main/main.js'),
                preload: join(PACKAGE_ROOT, 'src/preload/preload.js'),
                renderer: join(PACKAGE_ROOT, 'src/renderer/index.html'),
            },
            external: [
                'vue',
                'electron',
                // 'electron-devtools-installer',
                ...builtinModules.flatMap(p => [p, `node:${p}`]),
            ],
            output: {
                entryFileNames: '[name].cjs',
            },
        },
        emptyOutDir: true,
        brotliSize: false,
    },
};

// https://vitejs.dev/config/
export default defineConfig({
    ...config,
    plugins: [vue()],
});

