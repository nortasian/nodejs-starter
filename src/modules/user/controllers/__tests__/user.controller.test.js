import { request } from '@request';

describe('user.controller.js', () => {
	describe('# index()', () => {
		it('should return a 200 response code', async () => {
			const { ok } = await request.get('/api/users');

			expect(ok).toBeTruthy();
		});
	});
});
