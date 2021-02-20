#!/usr/bin/env node

const { red } = require('chalk');
const rimraf = require('rimraf');

const message = (name) => console.log(red('DELETED: ', name));

rimraf('node_modules', {}, () => message);
