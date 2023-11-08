module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:tailwindcss/recommended',
		'plugin:storybook/recommended',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh', 'html'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		],
		'no-console': 'warn',
		'react/prop-types': 'off',
		'react/self-closing-comp': 'warn',
		'react/react-in-jsx-scope': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'return'
			},
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var'],
				next: '*'
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var']
			}
		],
		'import/order': [
			'warn',
			{
				pathGroups: [
					{
						pattern: '~/**',
						group: 'external',
						position: 'after'
					}
				],
				'newlines-between': 'always-and-inside-groups'
			}
		],
		'react/jsx-sort-props': [
			'warn',
			{
				callbacksLast: true,
				shorthandFirst: true,
				noSortAlphabetically: false,
				reservedFirst: true
			}
		],
		'tailwindcss/classnames-order': 'warn',
		'tailwindcss/no-custom-classname': 'warn',
		'tailwindcss/no-contradicting-classname': 'error'
		// 'testing-library/await-async-query': 'error',
		// 'testing-library/no-await-sync-query': 'error',
		// 'testing-library/no-debugging-utils': 'warn',
		// 'testing-library/no-dom-import': 'off',
		// 'jest-dom/prefer-checked': 'error',
		// 'jest-dom/prefer-enabled-disabled': 'error',
		// 'jest-dom/prefer-required': 'error',
		// 'jest-dom/prefer-to-have-attribute': 'error'
	}
}
