#!/usr/bin/env node
const { green, yellow } = require('chalk');
const getNPMCommand = require('./utils/getNPMCommand');

const postInstall = async () => {
  console.log(green('┏━━━ 🏗️ POSTINSTALL: MFE dependencies ━━━━━━━\n'));
  console.log(yellow('please wait...\n'));
  await getNPMCommand('npm install');

  console.log('\n');
  require('./sort');
};

module.exports = postInstall();
