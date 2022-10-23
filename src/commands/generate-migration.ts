#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { join } from 'path';
import { hideBin } from 'yargs/helpers';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { DateTime } from 'luxon';

const { argv } = yargs(hideBin(process.argv))
	.check(({ _: args }) => {
		if (args.length < 1) {
			throw new Error(`\nMigration file name is required.\n`);
		}

		return true;
	})
	.showHelpOnFail(false);

const { _: args } = argv;
const base = join(__dirname, '..');
const stub = join(base, 'stubs', 'database', 'migrations', 'migration.stub');

function generate(): void {
	const prefix = DateTime.now().toFormat('yyyyMMddhhmmss');
	const filename = `${prefix}-${args[0]}.ts`;
	const file = join(base, 'database', 'migrations', filename);
	let content = readFileSync(stub).toString();

	if (!args[0]) {
		return;
	}

	const [, tableName]: any = /^create-(.+)-table$/g.exec(`${args[0]}`);

	if (tableName) {
		content = content.replaceAll('tableName', tableName);
	}

	if (existsSync(file)) {
		console.error(`file ${filename} already exists.`);
		return;
	}

	writeFileSync(file, content);

	console.log(`✔ Migration file ${filename} is created successfully.`);
}

generate();
