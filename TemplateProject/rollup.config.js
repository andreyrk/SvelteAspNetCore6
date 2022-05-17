import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'wwwroot/main.js',
    output: {
        file: 'wwwroot/bundle.js',
        format: 'iife',
        name: 'app',
    },
    plugins: [
        svelte({
            include: 'wwwroot/**/*.svelte',
            emitCss: false,
            compilerOptions: {
                customElement: true
            }
        }),
        resolve({ browser: true }),
    ]
}
