#!/usr/bin/env node
const { green } = require('chalk');
const getNPMCommand = require('./utils/getNPMCommand');

console.log(green('┏━━━ 🏗️ POSTINSTALL: MFE dependencies ━━━━━━━\n'));

getNPMCommand('npm install');
