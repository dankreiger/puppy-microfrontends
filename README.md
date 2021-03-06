# Welcome to puppy-microfrontends 🐶

[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/dankreiger/puppy-microfrontends#readme) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/dankreiger/puppy-microfrontends/graphs/commit-activity)

### 🏠 [Homepage](https://github.com/dankreiger/puppy-microfrontends#readme)

## Install

```sh
npm install
```

## Usage

### Start All

```sh
npm run start
```

### Start some

ex. start only `marketing` and `auth`

```sh
npm run start -- --scope=auth,dashboard
```

### Add dependencies to all microfrontends

ex. add ramda microfrontends

```sh
npm run add -- ramda
```

### Add dependencies some microfrontends

ex. add ramda microfrontends to `auth` and `container` microfrontends

```sh
npm run add -- ramda --scope=auth,container
```

### Add dev dependencies to all microfrontends

ex. add `scripty` and `webpack` to all microfrontends

```sh
npm run add -- --dev=scripty,webpack
```

### Add dev dependencies some microfrontends

ex. add `scripty` and `webpack` to `auth` and `container` microfrontends

```sh
npm run add -- --dev=scripty,webpack --scope=auth,container
```
