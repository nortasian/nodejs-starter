export function notFoundHandler(_req, _res, next) {
	next(new Error('Not Found'));
}
