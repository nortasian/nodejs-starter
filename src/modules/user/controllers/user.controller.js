import db from '@src/database/db';
import { handlePagination } from '@src/utils/pagination';
import { Router } from 'express';

const userController = Router();

userController.get('/users', async (req, res) => {
	const { skip, limit, page, take } = handlePagination(req.query);
	const [data, total] = await db.$transaction([
		db.user.findMany({
			take,
			skip,
		}),
		db.user.count(),
	]);

	res.send({
		data,
		total,
		page,
		limit,
		last_page: Math.ceil(total / limit),
	});
});

export default userController;
