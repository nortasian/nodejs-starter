export function repeat(count, callback) {
	return '1'
		.repeat(count)
		.split('')
		.map((_, index) => callback(index));
}
