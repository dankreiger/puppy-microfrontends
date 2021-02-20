#!/usr/bin/env node

const { green } = require('chalk');
const getNPMCommand = require('./utils/getNPMCommand');
console.log(green('┏━━━ 🚀 START ━━━━━━━\n'));

getNPMCommand('npm start');
