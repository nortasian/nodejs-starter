import Winston from 'winston';
import { join } from 'path';
import { isTesting } from './env';

export default function logger() {
	return Winston.createLogger({
		exitOnError: false,
		silent: isTesting,
		transports: [
			new Winston.transports.Console({
				level: 'debug',
				format: Winston.format.combine(Winston.format.colorize(), Winston.format.simple()),
			}),
			new Winston.transports.File({
				format: Winston.format.json(),
				level: 'error',
				filename: 'project.log',
				dirname: join(__dirname, '..', '..', 'logs'),
			}),
		],
	});
}
