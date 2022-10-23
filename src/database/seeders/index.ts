import db from '@src/database/db';
import { generateUsers } from '@user/database/seeders/user.seeder';

const fake = {
	users: generateUsers(30),
};

async function main() {
	return db.authenticate();
}

main()
	.then(() => {
		Object.entries(fake).map(async ([name, generate]) => {
			const { length: count } = await generate;
			console.log(`✔ ${count} ${name} has been generated.`);
		});
	})
	.catch(console.error);
