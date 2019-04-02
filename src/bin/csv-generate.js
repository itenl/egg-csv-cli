#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const csv = require('./generate');

/**
 * Usage.
 */

program
  .command('generate')
  .description('quick generate your file')
  .alias('g')
  .action(function(type, name) {
    csv.invoke(type, name);
  });

program
  .command('extend')
  .description('quick extend your command')
  .alias('e')
  .action(function(type, name) {
    csv.extend(type, name);
  });
  
program.parse(process.argv);
