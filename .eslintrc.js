module.exports = {
	env: {
		es2021: true,
		node: true,
		jest: true,
	},
	extends: ['airbnb-base', 'prettier'],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': ['error'],
		'consistent-return': 'off',
		'no-restricted-syntax': 'off',
		'no-await-in-loop': 'off',
		'import/no-cycle': 'off',
		'import/prefer-default-export': 'off',
		'no-undef': process.env.NODE === 'production' ? 'error' : 'off',
		'no-unused-vars': process.env.NODE === 'production' ? 'error' : 'off',
		'no-console': process.env.NODE === 'production' ? 'error' : 'off',
	},
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
};
