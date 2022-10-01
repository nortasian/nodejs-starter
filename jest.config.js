module.exports = {
	moduleDirectories: ['node_modules'],
	moduleFileExtensions: ['js'],
	roots: ['<rootDir>'],
	setupFiles: ['./jest.setup.js'],
	testMatch: ['**/?(*.)+(spec|test).js?(x)'],
	testPathIgnorePatterns: ['/node_modules/'],
	verbose: true,
};
