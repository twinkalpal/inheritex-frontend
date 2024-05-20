import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';

import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

export default defineConfig({
	plugins: [
		react(),
		svgr(),
		ckeditor5({ theme: require.resolve('@ckeditor/ckeditor5-theme-lark') })
	],
	envPrefix: 'test_',
	server: {
		
		host: '0.0.0.0',
	},
	resolve: {
		alias: {

			'@assets': resolve(__dirname, 'src/assets'),
			'@components': resolve(__dirname, 'src/components'),
			'@middleware': resolve(__dirname, 'src/middleware'),
			'@pages': resolve(__dirname, 'src/pages'),
			'@routes': resolve(__dirname, 'src/routes'),
			'@schema': resolve(__dirname, 'src/schema'),
			'@services': resolve(__dirname, 'src/services'),
			'@shared': resolve(__dirname, 'src/shared'),
			'@store': resolve(__dirname, 'src/store'),
			'@models': resolve(__dirname, 'src/models'),
			'@utils': resolve(__dirname, 'src/utils'),
			'@style': resolve(__dirname, 'src/style'),
			'@layout': resolve(__dirname, 'src/layout'),
			'@App': resolve(__dirname, 'src/App.tsx')
		}
	}
});
