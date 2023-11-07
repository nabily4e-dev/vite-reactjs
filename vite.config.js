import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: '.vitest/setup.js',
		reporters: ['verbose'],
		coverage: {
			all: true,
			reporter: ['text', 'html', 'lcov'],
			include: ['**/src/**/*.{js,jsx,ts,tsx}'],
			exclude: [
				'**/src/main.{js,jsx,ts,tsx}',
				'**/*.types.{ts,tsx}',
				'**/*.test.{js,jsx,ts,tsx}',
				'**/src/vite-env*'
			],
			statements: 0,
			branches: 0,
			functions: 0,
			lines: 0
		}
	}
})
