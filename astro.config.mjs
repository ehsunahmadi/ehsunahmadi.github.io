// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';
export default defineConfig({
	site: 'https://ehsunahmadi.github.io',
	integrations: [mdx(), sitemap(), react()],
});
