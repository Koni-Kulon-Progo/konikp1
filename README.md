This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Koni KP

## Project Requirements

- Node.js (16.x)
- Docker / Docker Compose (3.8)

## Setup

Run the database first

```bash
$ docker-compose up -d
```

Running the database migration

```bash
$ npx prisma migrate dev
```

To run the application on local, run :

```bash
$ npm run dev
```
