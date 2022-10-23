import 'dotenv/config';
import { Sequelize } from 'sequelize';
import { isDebugMode } from '@src/config/env';
import logger from '@src/utils/logger';

export default new Sequelize({
	dialect: 'postgres',
	host: process.env.DATABASE_HOST,
	port: 5432,
	database: process.env.DATABASE_NAME,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	timezone: process.env.TZ,
	pool: {
		min: 0,
		max: 10,
		acquire: 30000,
	},
	define: {
		freezeTableName: true,
		timestamps: true,
		paranoid: true,
		underscored: true,
		createdAt: 'created_at',
		updatedAt: 'updated_at',
		deletedAt: 'deleted_at',
	},
	logging: msg => (isDebugMode && process.env.NODE_ENV !== 'test' ? logger().debug(msg) : false),
	logQueryParameters: isDebugMode && process.env.NODE_ENV !== 'test',
});
