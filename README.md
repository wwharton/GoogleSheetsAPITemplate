# Google Sheets Template
This is a boilerplate React App to help you get started with integrating the Google Sheets API into your web app development.

Using GoogleSheets as your backend is a free way to begin developing a WebApp with read and write. I was inspired to build a WebApp backed by Google Spreadsheets after reading about how levels.fyi initially used Sheets as their backend: https://www.levels.fyi/blog/scaling-to-millions-with-google-sheets.html

You will face a 60 requests per minute rate-limit with GoogleSpreadsheets, per service account.

When I initially set this up, I had trouble with the Google-Spreadsheet NPM library due to missing polyfills. The `next.config.js` changes address that.


## Set up your Spreadsheet and Credentials
- Create a Google Spreadsheet with some example data
  - The Google-Spreadsheets library reads rows, with column header keys
- Visit `https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication?id=service-account` follow instructions to create service account and credentials
- Don't forget to Share your spreadsheet with your service account, as if you were sharing the sheet with a friend.

## Clone Project
- Clone this project and run 'npm i'
- provide your own credentials in `index.js`
- `npm run dev`

## Create your own proejct and Copy/Paste essentials
- Create new project with `npx create-next-app@13.2.4 project-name`
- `npm i google-spreadsheet --save`
- Copy over `next.js.config`
- Copy over `index.js`
- Copy over `package-lock.json`
- Copy over `package.json`
- run `npm i`
- Provide your credentials in `index.js`
- `npm run dev` and see the values in your sheets

#############################################################################

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


