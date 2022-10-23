import { faker } from '@faker-js/faker';
import { InferCreationAttributes } from 'sequelize';
import { repeat } from '@src/utils/factory';
import { User } from '@src/models';

export async function generateUsers(count = 25) {
	const data = repeat(
		count,
		() =>
			<InferCreationAttributes<User>>{
				name: faker.name.fullName(),
				email: faker.internet.exampleEmail().toLowerCase(),
			}
	);

	return User.bulkCreate(data, {
		ignoreDuplicates: true,
	});
}
