#!/usr/bin/env node

process.title = 'egg-csv-cli';

require('commander')
.version(require('../../package').version)
.usage('<command> [options]')
.command('generate', 'generate file from a template (short-cut alias: "g")')
.parse(process.argv)


require('./csv-generate');  