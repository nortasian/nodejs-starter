import { NextFunction, Request, Response } from 'express';

export function notFoundHandler(_req: Request, _res: Response, next: NextFunction): void {
	next(new Error('Not Found'));
}
