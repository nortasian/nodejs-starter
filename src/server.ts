import logger from '@src/utils/logger';
import db from '@src/database/db';
import app from '@src/app';
import { port } from '@src/config/env';

app.listen(port, async () => {
	try {
		await db.authenticate();
	} catch (error: any) {
		logger().error(error?.message);
	}

	logger().info(`Server is running on http://localhost:${port}`);
});
