# Flight-Url-Breakdown

This project is an SPA that allows a user to input a url of their flight search.
If the flight is a multi-city round trip flight where, apart from the beginning and end destinations, you arrive and depart from
the same location the results you will be shown links to each individual search, and their average cost and average flight duration. Ie.

A skyscanner link containing the following flight trip:

New York - Madrid, Madrid - London, London - Paris, Paris - Singapore

will provide links of all the 6 different permutations of this multi city trip (as you must depart from NYC and arrive in SIN), and also provide you
with the average flight duration and average cost of those different flight permutations.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.