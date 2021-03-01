#!/usr/bin/env node
const fs = require('fs');
const { green } = require('chalk');
const sortPackageJson = require('sort-package-json');
const base = 'microfrontends';
console.log(green('┏━━━ SORT ━━━━━━━\n'));

fs.readdir(base, (err, files) => {
  files.forEach((file) => {
    const packageJson = require(`../${base}/${file}/package.json`);
    sortPackageJson(packageJson);
  });
});
