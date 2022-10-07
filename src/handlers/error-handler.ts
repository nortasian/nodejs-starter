import { Prisma } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';
import { isDev } from '@src/utils/env';

export function errorHandler(error, _req: Request, res: Response, _next: NextFunction): Response {
	if (error instanceof Prisma.PrismaClientInitializationError) {
		return res.status(500).send({
			message: `Database connection error`,
			code: isDev ? error.errorCode : undefined,
			stack: isDev ? error.stack.split('\n').map((word) => word.trim()) : undefined,
		});
	}

	if (error instanceof Prisma.PrismaClientKnownRequestError) {
		return res.status(500).send({
			message: error.message || `Something wen't wrong`,
			code: isDev ? error.code : undefined,
			stack: isDev ? error.stack.split('\n').map((word) => word.trim()) : undefined,
		});
	}

	return res.status(error.status || 500).send({
		message: error.message || `Something wen't wrong`,
		code: isDev && 'code' in error ? error.code : undefined,
		stack: isDev ? error.stack.split('\n').map((word) => word.trim()) : undefined,
	});
}
