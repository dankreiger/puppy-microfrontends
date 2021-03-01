#!/usr/bin/env node
const { green, yellow } = require('chalk');
const getNPMCommand = require('./utils/getNPMCommand');

console.log(green('┏━━━ 🏗️ POSTINSTALL: MFE dependencies ━━━━━━━\n'));
console.log(yellow('please wait...\n'));

getNPMCommand('npm install');
