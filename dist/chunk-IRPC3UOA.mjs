import {
  findConfig,
  generateOpenApiSpec
} from "./chunk-AYENIK7K.mjs";

// src/cli/validate.ts
import { join } from "path";
import { readFileSync } from "fs";
import chalk from "chalk";
var validate = async ({ configPath }) => {
  const config = await findConfig({ configPath });
  if (!config) {
    return;
  }
  const spec = await generateOpenApiSpec({ config });
  const path = join(process.cwd(), "public", config.openApiJsonPath);
  try {
    const data = readFileSync(path);
    const openApiSpec = JSON.parse(data.toString());
    if (!(JSON.stringify(openApiSpec) === JSON.stringify(spec))) {
      console.error(
        chalk.red(
          "API spec changed is not up-to-date. Run `next-rest-framework generate` to update it."
        )
      );
    } else {
      console.info(chalk.green("OpenAPI spec up to date!"));
      return true;
    }
  } catch {
    console.error(
      chalk.red(
        "No OpenAPI spec found. Run `next-rest-framework generate` to generate it."
      )
    );
  }
  return false;
};

export {
  validate
};
