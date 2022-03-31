# blinq-challenge

## prerequisite collection

You will need to download and install the following software such that you can call them from any directory in your terminal or shell:

- [Node](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)

## how to start development

1. install dependencies

```
D:\shertu\blinq-challenge> pnpm i
```

2. execute the application in development mode

```
D:\shertu\blinq-challenge\apps\client-web> pnpm dev
```

## how to execute unit tests

1. execute the test script

```
D:\shertu\blinq-challenge\apps\client-web> pnpm test
```

P.S. Jest, by default, doesn't include `fetch` and I was uncertain as to whether I should mock the responses or not.
