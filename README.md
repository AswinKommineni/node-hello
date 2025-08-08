# node-hello

Simple Node.js "Hello, World!" application with Jest unit tests and a Jenkins pipeline.

## Prerequisites

- Node.js 16+ and npm

## Install

```bash
npm install
```

## Run locally

```bash
npm start
```

Visit `http://localhost:3000` and you should see `Hello, World!`.

## Test

```bash
npm test
```

## CI/CD

This repo includes a `Jenkinsfile` based on the provided sample. Ensure Jenkins has a NodeJS tool named `NODEJS_HOME` configured in Global Tool Configuration.


