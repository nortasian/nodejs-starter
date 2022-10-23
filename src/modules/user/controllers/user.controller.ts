import { Request, Response, Router } from 'express';
import asyncHandler from '@src/handlers/async-handler';
import { handlePagination } from '@src/utils/pagination';
import { User } from '@src/models';
import { validate } from '@src/middleware/validation.middleware';
import userSchema from '@user/schema/user.schema';

const userController = Router();

userController.get(
	'/users',
	asyncHandler(async (req: Request, res: Response) => {
		const { skip, offset, limit, page, take } = handlePagination(req.query);
		const { rows: data, count: total } = await User.findAndCountAll({
			limit,
			offset,
			include: ['devices'],
		});

		res.send({
			data,
			total,
			page,
			limit,
			last_page: Math.ceil(total / limit),
		});
	})
);

userController.get(
	'/users/:id',
	validate(userSchema.show),
	asyncHandler(async (req: Request, res: Response) => {
		const { id } = req.params;
		const user = await User.findByPk(id, {
			include: ['devices'],
		});

		if (!user?.devices?.length) {
			await user?.createDevice({
				ip: req.ip,
				client: req.headers['user-agent'] || '',
			});

			await user?.reload();
		}

		res.send({
			user,
		});
	})
);

export default userController;
