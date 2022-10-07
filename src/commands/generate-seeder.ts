#!/usr/bin/env node

import yargs from 'yargs/yargs';
import { join } from 'path';
import { hideBin } from 'yargs/helpers';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { GenerateSeedersCommandArgs } from '@src/typings/commands/generate-seeder.interface';

const { argv } = yargs(hideBin(process.argv))
	// .usage(
	// 	`$0
	// \nUsage: generate:seeder [name] [options]`,
	// 	'Generate seeder file'
	// )
	.option('module', {
		description: 'set the module name (for modular structure)',
		string: true,
		// alias: 'm',
	})
	.option('model', {
		description: 'specify model name',
		string: true,
		demandOption: 'is required',
		alias: 'm',
	})
	.demandOption('model')
	.check(({ _: args }) => {
		if (args.length < 1) {
			throw new Error('Seeder file name is required.');
		}

		return true;
	});

const { _: args, module: moduleName, model }: GenerateSeedersCommandArgs = argv;
let base = join(__dirname, '..');
const stub = join(__dirname, '..', 'stubs', 'database', 'seeders', 'seeder.stub');

function generate(): void {
	if (moduleName) {
		base = join(base, 'modules', moduleName);
	}

	const file = join(base, 'database', 'seeders', `${args[0]}.seeder.ts`);
	const content = readFileSync(stub).toString().replace(`{{MODEL}}`, model);

	if (existsSync(file)) {
		console.error(`file ${args[0]}.seeder.ts already exists.`);
		return;
	}

	writeFileSync(file, content);

	console.log(`✔ Seeder ${args[0]}.seeder.ts created successfully.`);
}

generate();
