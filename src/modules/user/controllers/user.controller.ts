import { Request, Response, Router } from 'express';
import db from '@src/database/db';
import asyncHandler from '@src/handlers/async-handler';
import { handlePagination } from '@src/utils/pagination';

const userController = Router();

userController.get(
	'/users',
	asyncHandler(async (req: Request, res: Response) => {
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
	})
);

export default userController;
