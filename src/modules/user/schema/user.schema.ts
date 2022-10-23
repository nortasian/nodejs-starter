import { param } from 'express-validator';

export default {
	show: [param('id').exists().isNumeric()],
};
