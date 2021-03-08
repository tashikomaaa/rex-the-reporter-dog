#!/usr/bin/env node

const yargs = require("yargs");
const chalk = require("chalk");
const fs = require("fs-extra");
const figlet = require("figlet");
const fetch = require("node-fetch");
const CLI = require("clui");
const files = require("../lib/files");
const inquirer = require("../lib/inquirer");
const config = require("../lib/config");
const Spinner = CLI.Spinner;

const options = yargs.usage("Usage: -b <bones>").option("b", {
  alias: "bones",
  describe: "Bones for Rex",
  type: "string",
}).argv;

const clearConsole = () => {
  console.clear();

  console.log(chalk.red(figlet.textSync("REX", { horizontalLayout: "full" })));
};

const status = new Spinner(`Rex went to look for his bones 🦴....`);
const run = async () => {
  clearConsole();
  const conf = await config.setup();
  let data;
  if (conf !== {}) {
    clearConsole();

    fetch(conf.uri)
      .then(status.start())
      .then((res) => res.text())
      .then(() => {
        status.stop()
       console.log(chalk.green("Rex find the bones 🦴"));
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

run();
