import logger from '@src/utils/logger';
import db from '@src/database/db';
import User from '@user/models/user.model';
import Device from '@device/models/device.model';

if (process.env.NODE_ENV === 'test') {
	db.sync({
		force: true,
	});
}

export interface Models {
	User: typeof User;
	Device: typeof Device;
}

const models: Models = {
	User,
	Device,
};

Object.values(models).forEach(model => {
	if (model.associate && typeof model.associate === 'function') {
		logger().debug(`[MAS] Associated ${model.tableName}`);

		model.associate(models);
	}
});

export { db, User, Device };
