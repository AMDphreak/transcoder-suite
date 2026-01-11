// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/': '/en/'
	},
	integrations: [
		starlight({
			title: 'Transcoder Suite',
			defaultLocale: 'en',
			locales: {
				en: { label: 'English', lang: 'en' },
				es: { label: 'Español', lang: 'es' },
				fr: { label: 'Français', lang: 'fr' },
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/amdphreak/transcoder-suite' }
			],
			sidebar: [
				{
					label: 'Getting Started',
					link: 'en/getting-started',
				},
				{
					label: 'Usage',
					link: 'en/usage',
				},
				{
					label: 'Configuration',
					link: 'en/configuration',
				},
			],
		}),
	],
});
