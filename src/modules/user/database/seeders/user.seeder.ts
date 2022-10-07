import { faker } from '@faker-js/faker';
import { repeat } from '@src/utils/factory';
import db from '@src/database/db';

export async function generateUsers(count = 25) {
	const data = repeat(count, () => ({
		name: faker.random.word(),
		email: faker.internet.exampleEmail(),
	}));

	return db.user.createMany({
		data,
		skipDuplicates: true,
	});
}
