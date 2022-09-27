import express from 'express';
import dotenv from 'dotenv-safe';

import middlewares from '@src/middleware';
import router from '@src/routes';
import { errorHandler } from '@src/handlers/error-handler';
import { notFoundHandler } from '@src/handlers/not-found-handler';
import { isDev } from '@src/utils/env';

dotenv.config({
	allowEmptyValues: true,
	path: isDev ? '.env' : `.env.${process.env.NODE_ENV}`,
});

const app = express();

app.use(...middlewares);

app.get('/health', (_, res) => res.status(200).send());

app.use('/api', router);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;
