export default {
	env: {
		port: process.env.PORT || 3000,
		database: {
			dialect: process.env.DATABASE_DIALECT,
			username: process.env.DATABASE_USERNAME,
			password: process.env.DATABASE_PASSWORD,
			name: process.env.DATABASE_NAME,
			host: process.env.DATABASE_HOST,
			port: process.env.DATABASE_PORT,
		},
	},
};
