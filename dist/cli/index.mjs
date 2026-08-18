#!/usr/bin/env node
import {
  generate
} from "../chunk-GMINHS2C.mjs";
import {
  validate
} from "../chunk-63CW334X.mjs";
import "../chunk-MFMMDBRL.mjs";
import "../chunk-6SRCROVP.mjs";
import "../chunk-2PBOIPNY.mjs";
import "../chunk-BXO7ZPPU.mjs";

// src/cli/index.ts
import { Command } from "commander";
import chalk from "chalk";
var program = new Command();
program.command("generate").option(
  "--configPath <string>",
  "In case you have multiple docs handlers with different configurations, you can specify which configuration you want to use by providing the path to the API. Example: `/api/my-configuration`."
).description("Generate an OpenAPI spec with Next REST Framework.").action(async (options) => {
  const configPath = options.configPath ?? "";
  try {
    console.info(chalk.yellowBright("Generating OpenAPI spec..."));
    await generate({
      configPath
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
});
program.command("validate").option(
  "--configPath <string>",
  "In case you have multiple docs handlers with different configurations, you can specify which configuration you want to use by providing the path to the API. Example: `/api/my-configuration`."
).description("Validate an OpenAPI spec with Next REST Framework.").action(async (options) => {
  const configPath = options.configPath ?? "";
  try {
    console.info(chalk.yellowBright("Validating OpenAPI spec..."));
    const valid = await validate({
      configPath
    });
    if (!valid) {
      process.exit(1);
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
});
program.parse(process.argv);
