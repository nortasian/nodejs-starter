import 'dotenv/config';

export default {
	env: {
		// port: process.env.PORT || 3000,
		// timezone: process.env.TZ,
	},
	database: {
		dialect: 'postgres',
		username: process.env.DATABASE_USERNAME,
		password: process.env.DATABASE_PASSWORD,
		name: process.env.DATABASE_NAME,
		host: process.env.DATABASE_HOST,
		port: Number(process.env.DATABASE_PORT),
	},
};
