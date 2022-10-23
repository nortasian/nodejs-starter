import 'dotenv/config';
import express, { Request, Response } from 'express';
import middlewares from '@src/middleware';
import router from '@src/routes';
import { errorHandler } from '@src/handlers/errors.handler';
import { notFoundHandler } from '@src/handlers/not-found.handler';

const app = express();

app.use(...middlewares);

app.get('/health', (_req: Request, res: Response) => res.status(200).send());

app.use('/api', router);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;
