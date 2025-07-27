// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import 'dotenv/config';

const siteUrl = process.env.PUBLIC_SITE_URL ?? import.meta.env.PUBLIC_SITE_URL;
// https://astro.build/config
export default defineConfig({
    site: siteUrl,
    integrations: [
        tailwind(), 
        mdx(), 
        sitemap(), 
        react()
    ],
    output: 'server',
    adapter: cloudflare()
});