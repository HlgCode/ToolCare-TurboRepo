# ToolCare-TurboRepo

This is an official starter Turborepo with multiple meta-frameworks all working in harmony and sharing packages.

## Getting started

Run the following commands:

```sh
npm intall
```
```sh
npm run dev
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `ToolCare-API`: an [Express](https://expressjs.com/) server
- `ToolCare-Admin`: a [Vite](https://vitejs.dev/) single page app
- `logger`: isomorphic logger (a small wrapper around console.log)
- `ui`: a dummy React UI library (which contains a single `<CounterButton>` component)
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json;s used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
