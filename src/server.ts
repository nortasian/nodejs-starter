import logger from '@src/utils/logger';
import db from '@src/database/db';
import app from '@src/app';
import config from '@src/config';

app.listen(config.env.port, async () => {
	try {
		await db.$connect();
	} catch (error) {
		logger().error(error.message);
	}

	logger().info(`Server is running on http://localhost:${config.env.port}`);
});
