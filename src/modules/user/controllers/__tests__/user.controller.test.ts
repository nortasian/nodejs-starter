import { request } from '@request';

describe('@user/user.controller.ts', () => {
	describe('# index()', () => {
		it('should return a 200 response code', async () => {
			const { ok } = await request.get('/api/users');

			expect(ok).toBeTruthy();
		});
	});
});
