# Nortasian | Express-Prisma Node.js Starter

A Simple Node.js Express starter project.

[![Made with Node.js](https://img.shields.io/badge/Node.js->=16-blue?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/en/) [![Made with Express js](https://img.shields.io/badge/Express.js->=4.18-blue?logo=express.js&logoColor=white&style=for-the-badge)](https://nodejs.org/en/) [![Made with Prisma](https://img.shields.io/badge/Prisma-%3E=4.3-blue?logo=prisma&logoColor=white&style=for-the-badge)](https://www.prisma.io/) [![MIT](https://img.shields.io/github/license/nortasian/starter?logoColor=blue&style=for-the-badge)](./LICENSE.md)

## Installation

01.Clone project

```bash
  git clone https://github.com/nortasian/starter
```

02.Install dependencies

```bash
  yarn install
```

OR

```bash
  npm install
```

03.Copy `.env.example` to `.env` then change the `{{DB}}` to your choice of database i.e. `mysql` and `{{DB_NAME}}` to your database name.

```bash
  DATABASE_URL="mysql://root:@localhost:3306/db_name"
```

> 💡 **NOTE** the same process should be done with the `.env.test` file.

---

04.Run database migrations

```bash
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
