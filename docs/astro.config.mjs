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
				en: {
					label: 'English',
					lang: 'en',
					sidebar: [
						{ label: 'Getting Started', link: 'en/getting-started' },
						{ label: 'Usage', link: 'en/usage' },
						{ label: 'Configuration', link: 'en/configuration' },
					],
				},
				es: {
					label: 'Español',
					lang: 'es',
					sidebar: [
						{ label: 'Primeros pasos', link: 'es/getting-started' },
						{ label: 'Guía de uso', link: 'es/usage' },
						{ label: 'Configuración', link: 'es/configuration' },
					],
				},
				fr: {
					label: 'Français',
					lang: 'fr',
					sidebar: [
						{ label: 'Pour commencer', link: 'fr/getting-started' },
						{ label: 'Guide d\'utilisation', link: 'fr/usage' },
						{ label: 'Configuration', link: 'fr/configuration' },
					],
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/amdphreak/transcoder-suite' }
			],
		}),
	],
});
