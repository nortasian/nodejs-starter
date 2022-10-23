import 'dotenv/config';
import { truthy } from '@src/utils/boolean';

export const isProduction = process.env.NODE_ENV === 'production';

export const isTesting = process.env.NODE_ENV === 'test';

export const isDev = process.env.NODE_ENV === undefined || process.env.NODE_ENV === 'development';

export const isDebugMode = truthy(process.env.DEBUG);

export const lang = process.env.LANG || 'en';

export const timezone = process.env.TZ || 'UTC';

export const port = process.env.PORT || 3000;
