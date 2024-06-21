const command = require('commander')
const program = new command.Command()
const check = require('../commands/check')

program
.command('price')
.description('Check price of coins')
.option('--coin <type>',
  'Add specific coin types in CSV format',
  'bitcoin')
.option('--cur <currency>','Change the currency','USD')
.action(cmd =>check.price(cmd))

program.parse(process.argv)