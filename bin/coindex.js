#!/usr/bin/env node
const command = require('commander')
const program = new command.Command()
const pkg = require('../package.json')

program
.version(pkg.version)
.command('key','Manage API Key -- https://nomics.com')
.command('check','Check Coin Price Info')
.parse(process.argv)

// console.log('hello')
process.argv
