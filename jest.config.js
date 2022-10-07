/* eslint-disable */
const tsconfig = require('./tsconfig.json');
const moduleNameMapper = require('tsconfig-paths-jest')(tsconfig);

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	notify: true,
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	setupFiles: ['./jest.setup.ts'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	moduleNameMapper,
	testEnvironment: 'node',
};
