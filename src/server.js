import logger from '@src/utils/logger';
import db from '@src/database/db';
import app from '@src/app';

app.listen(3000, async () => {
	try {
		await db.$connect();
	} catch (error) {
		logger().error(error.message);
	}

	logger().info(`Server is running on http://localhost:3000`);
});
