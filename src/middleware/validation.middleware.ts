/* eslint-disable consistent-return, no-await-in-loop, no-restricted-syntax */
import { NextFunction, Request, Response } from 'express';
import { ValidationChain, validationResult } from 'express-validator';
import ErrorResponse from '@src/handlers/error-response';

export const validate =
	(rules: ValidationChain[]) =>
	async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
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

		next(
			new ErrorResponse(
				'The entered data is invalid',
				422,
				errors.array().map(({ msg: message, param: field, location }) => ({
					field,
					message,
					location,
				}))
			)
		);
	};
