/* eslint-disable consistent-return */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { NextFunction, Request, Response } from 'express';
import { ValidationChain, validationResult } from 'express-validator';

export const validate =
	(rules: ValidationChain[]) =>
	async (req: Request, res: Response, next: NextFunction): Promise<void> => {
		for (const validation of rules) {
			const result = await validation.run(req);

			if (!result.isEmpty()) {
				break;
			}
		}

		const errors = validationResult(req);

		if (errors.isEmpty()) {
			return next();
		}

		res.status(422).json({
			errors: errors.array().map(({ msg: message, param: field, location }) => ({
				field,
				message,
				location,
			})),
		});
	};
