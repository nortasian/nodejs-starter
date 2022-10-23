module.exports = {
	env: {
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb-base',
		'plugin:prettier/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier', 'import'],
	rules: {
		'prettier/prettier': 'error',
		'import/extensions': 'off',
		'import/no-cycle': 'off',
		'no-await-in-loop': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'no-unused-vars': 'off',
		'import/prefer-default-export': 'off',
		'import/no-unresolved': 'off',
		'no-use-before-define': 'off',
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'no-console': 'off',
		'import/order': [
			'error',
			{
				'newlines-between': 'never',
				groups: [
					['builtin', 'external'],
					['internal', 'parent', 'sibling', 'index'],
				],
			},
		],
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: './tsconfig.json',
			},
			jest: {
				jestConfigFile: './jest.config.js',
				alwaysTryTypes: true,
				project: './tsconfig.json',
			},
		},
	},
};
