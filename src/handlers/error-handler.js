import { Prisma } from '@prisma/client';
import { isDev } from '@src/utils/env';

export function errorHandler(error, _req, res, _next) {
	if (error instanceof Prisma.PrismaClientInitializationError) {
		return res.status(500).send({
			message: `Database connection error`,
			code: isDev ? error.errorCode : undefined,
			stack: isDev ? error.stack : undefined,
		});
	}

	if (error instanceof Prisma.PrismaClientKnownRequestError) {
		return res.status(500).send({
			message: error.message || `Something wen't wrong`,
			code: isDev ? error.code : undefined,
			stack: isDev ? error.stack : undefined,
		});
	}

	res.status(error.status || 500).send({
		message: error.message || `Something wen't wrong`,
		code: isDev && 'code' in error ? error.code : undefined,
		stack: isDev ? error.stack : undefined,
	});
}
