// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://rdlfkz.github.io',
    markdown: {
        remarkPlugins: ['remark-breaks'], 
        extendDefaultPlugins: true,
    },
});
