#!/usr/bin/env node
const { _: files } = require('minimist')(process.argv.slice(2));

const { cyan } = require('chalk');
const getNPMCommand = require('./utils/getNPMCommand');

const getFiles = () => (files.length ? files : ['node_modules']);

const names = getFiles().join(', ');
console.log(
  cyan(`┏━━━ 🧹 CLEAN ${names} ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`)
);

getNPMCommand('npm run clean');
