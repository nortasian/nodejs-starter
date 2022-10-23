export function truthy(value: any): boolean {
	return ![false, 'false', 0, '0', undefined, 'undefined', null, 'null'].includes(value);
}
