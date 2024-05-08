This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Environment setup

```bash
npm install
cp .env.example .env.local
```

### Env vars

[Set Clerk environment keys](https://clerk.com/docs/quickstarts/nextjs#set-your-environment-variables):
`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`

[unsplash-js key](https://www.npmjs.com/package/unsplash-js#unsplash):
`NEXT_PUBLIC_UNSPLASH_ACCESS_KEY`

[stripe keys](https://www.npmjs.com/package/stripe):
`STRIPE_API_KEY`
[`STRIPE_WEBHOOK_SECRET`](#running-stripe-locally)

[prisma database url](https://www.npmjs.com/package/prisma):
`DATABASE_URL`

### Running Stripe locally

For testing the webhook locally with the Stripe CLI you can find the endpoint's secret by running `stripe listen`. Otherwise, find your endpoint's secret in your webhook settings in the Developer Dashboard

```bash
brew install stripe/stripe-cli/stripe
stripe listen --forward-to localhost:3000/api/webhook
```

### Init database

```bash
npx prisma generate
```

If you are need to sync the local schemas with the server you can run `npx prisma db push`.
Use `npx prisma migrate reset` to start over.

### Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Prisma

Prisma provides a local view of the data, by running `npx prisma studio` you can see how the data is allocated in the database.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
