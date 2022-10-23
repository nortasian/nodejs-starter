import { NextFunction, Request, Response } from 'express';
import { isDebugMode } from '@src/config/env';
import ErrorResponse from '@src/handlers/error-response';

export function errorHandler(error: ErrorResponse | Error | any, _req: Request, res: Response, _next: NextFunction): Response {
	return res.status(error.status || 500).send({
		message: error.message || `Something wen't wrong`,
		errors: error.errors,
		code: isDebugMode && error.code ? error.code : undefined,
		stack: isDebugMode ? error.stack.split('\n').map(word => word.trim()) : undefined,
	});
}
