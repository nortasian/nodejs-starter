import { validationResult } from 'express-validator';

export const validate = (rules) => async (req, res, next) => {
	for (const validation of rules) {
		const result = await validation.run(req);

		if (result.errors.length) {
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
