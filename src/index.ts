#! /usr/bin/env node
import { Command } from 'commander';
import { run } from './process';
const program = new Command();
program
  .name('rgb-extractor')
  .description('Simple CLI to extract RGB from Image to JSON')
program.command('extract')
  .description('Simple CLI to extract RGB from Image to JSON')
  .argument('<filepath>', 'Input file')
  .argument('<filepath>', 'Output file')
  .action(async (inputpath,outputpath) => {
    await run(inputpath,outputpath)
  });
program.parse();