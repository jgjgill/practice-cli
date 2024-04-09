#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .argument("<string>", "string to log")
  .option("-c, --capitalize", "Capitalize the message")
  .action(
    (
      message: string,
      opts: {
        capitalize?: boolean;
      }
    ) => {
      if (opts.capitalize) {
        console.log(message.toUpperCase());
      } else {
        console.log(message);
      }
    }
  )
  .description("Say hello");

program
  .command("add <numbers...>")
  .action((numbers: number[]) => {
    const total = numbers.reduce((a, b) => Number(a) + Number(b), 0);
    console.log(`Total ${total}`);
  })
  .description("Add numebers and log the total");

program
  .command("get-max-number <numbers...>")
  .action((numbers: number[]) => {
    const max = Math.max(...numbers);
    console.log(`Max: ${max}`);
  })
  .description("Add numbers and log the total");

program.parse(process.argv);
