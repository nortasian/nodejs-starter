# Nortasian | Express-Prisma Node.js Starter

A Simple Node.js Express starter project.

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/nortasian/starter/GitHub%20CI?style=for-the-badge)](https://github.com/nortasian/starter/actions/) [![GitHub release (release name instead of tag name)](https://img.shields.io/github/v/release/nortasian/starter?include_prereleases&sort=date&style=for-the-badge)](https://github.com/nortasian/starter/releases/latest) [![Made with Node.js](https://img.shields.io/badge/Node.js->=16-blue?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/en/) [![Made with Express js](https://img.shields.io/badge/Express.js->=4.18-blue?logo=express.js&logoColor=white&style=for-the-badge)](https://nodejs.org/en/) [![Made with Prisma](https://img.shields.io/badge/Prisma-%3E=4.3-blue?logo=prisma&logoColor=white&style=for-the-badge)](https://www.prisma.io/) [![Made with Prisma](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/) [![LICENSE](https://img.shields.io/github/license/nortasian/starter?logoColor=blue&style=for-the-badge)](./LICENSE.md)

## Installation

```bash
  npx @nortasian/starter [project name] --ts

  cd [project name]

  npx prisma migrate dev --name init
```

## 🚀 Run Locally

Run the project

```bash
  yarn dev
```

OR

```bash
  npm run dev
```

## 🍄 List of available commands

- ### Generate Seeder

```bash
  yarn generate:seeder [file name] -m [model name] --module [module name]
```

***i.e. generate a seeder file as user.seeder.ts for user module and use the user model.***

```bash
  yarn generate:seeder user -m user --module user
```

- ### Run Database Seeders (Generate fake data)

```bash
  yarn db:seed
```

## 🧪 Running Tests

To run tests, run the following command

```bash
  yarn test
```

OR

```bash
  npm run test
```

## Authors

- [@ahmdswerky](https://www.github.com/ahmdswerky)

## License

Nortasian is licensed under the [Apache License](./LICENSE.md), Version 2.0. See [LICENSE](./LICENSE.md) for the full license text.
