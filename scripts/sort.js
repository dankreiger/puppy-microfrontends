#!/usr/bin/env node
const fs = require('fs');
const { green } = require('chalk');
const sortPackageJson = require('sort-package-json');
const getNPMCommand = require('./utils/getNPMCommand');
const base = 'microfrontends';
const sort = () => {
  getNPMCommand('npm run sort');
};

module.exports = sort();
