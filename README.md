# Nortasian | Express-Sequelize Node.js Starter

A Simple Node.js Express starter project.

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/nortasian/starter/GitHub%20CI?style=for-the-badge)](https://github.com/nortasian/starter/actions/) [![Made with Node.js](https://img.shields.io/badge/Node.js->=16-blue?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/en/) [![Made with Express js](https://img.shields.io/badge/Express.js->=4.18-blue?logo=express&logoColor=white&style=for-the-badge)](https://expressjs.com/) [![Made with Sequelize](https://img.shields.io/badge/Sequelize-%3E=6.25-blue?logo=sequelize&logoColor=white&style=for-the-badge)](https://sequelize.org/) [![Made with Sequelize](https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white&style=for-the-badge)](https://www.typescriptlang.org/) [![Made with Express js](https://img.shields.io/badge/Jest->=29-blue?logo=Jest&logoColor=white&style=for-the-badge)](https://jestjs.io/) [![LICENSE](https://img.shields.io/github/license/nortasian/starter?logoColor=blue&style=for-the-badge)](./LICENSE.md)

## Installation

```bash
  npx @nortasian/starter [project name] --orm sequelize --ts

  cd [project name]

  yarn db:migrate
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

- ### Generate Migration

```bash
  yarn generate:migration [file name]
```

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

- ### Run Database Migrations

```bash
  yarn db:migrate
```

- ### Undo Last Database Migrations

```bash
  yarn db:migrate:undo
```

- ### Reset Database Migrations

```bash
  yarn db:migrate:undo:all
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
