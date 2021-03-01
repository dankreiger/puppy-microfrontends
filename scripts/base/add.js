#!/usr/bin/env node
const { green, cyan, yellow } = require('chalk');
const getNPMCommand = require('./utils/getNPMCommand');
const { microfrontends } = require('../../package.json');

let { _: depsArr, dev: devDepsString, scope: mfesString } = require('minimist')(
  process.argv.slice(2)
);

const depsString = depsArr.join(', ');
if (!mfesString) {
  mfesString = microfrontends.join(', ');
}
const mfesList = mfesString.replace(/\s/g, '').split(',');

const prepare = ({ depsString, isDev }) => {
  const msg = `${green(depsString)} to ${cyan(mfesString)}`;
  const deps = depsString.replace(',', ' ');

  console.log(`┏━━━ 🏗️  ADD${isDev ? ' (DEV)' : ''}: ${msg} ━━━━━━━\n`);
  console.log(yellow('please wait...\n'));

  getNPMCommand(`npm install --save${isDev ? '-dev' : ''} ${deps}`, mfesList);
};

if (depsString.length) {
  prepare({ depsString });
}
if (devDepsString?.length) {
  prepare({ depsString: devDepsString, isDev: true });
}
