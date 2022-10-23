import { json } from 'express';
import { urlencoded } from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import { isDebugMode, isTesting } from '@src/config/env';

const middlewares = [urlencoded({ extended: false }), json(), cors(), compression(), helmet()];

if (isDebugMode && !isTesting) {
	middlewares.push(
		morgan('combined', {
			skip(_req, res) {
				return res.statusCode < 400;
			},
		})
	);
}

export default middlewares;
