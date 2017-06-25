#!/usr/bin/env node

import program from 'commander';
import promoCode from '../';
import pjson from '../../package.json';

program
  .version(pjson.version)
  .description(`${pjson.description}\n Default pattern is 'XX-XXXX1234'`)
  .option('-p, --pattern [pattern], Pattern of coupon')
  .parse(process.argv);

if (program.pattern) {
  console.log(promoCode(program.pattern));
} else {
  console.log(promoCode());
}
