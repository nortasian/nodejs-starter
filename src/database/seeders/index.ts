import db from '@src/database/db';
import { generateUsers } from '@src/modules/user/database/seeders/user.seeder';

const fake = {
	users: generateUsers(30),
};

async function main() {
	return db.$connect();
}

main()
	.then(() => {
		Object.entries(fake).map(async ([name, generate]) => {
			const { count } = await generate;

			console.log(`✔ ${count} ${name} has been generated.`);
		});
	})
	.catch(console.error);
