import chalk from 'chalk';

export const logPagesEdgeRuntimeErrorForRoute = (route: string) => {
  console.error(
    chalk.red(`---
${route} is using Edge runtime in \`/pages\` folder that is not supported with \`apiRoute\`.
Please use \`route\` instead: https://vercel.com/docs/functions/edge-functions/quickstart
---`)
  );
};

export const logPagesEdgeRuntimeErrorForDocsRoute = (route: string) => {
  console.error(
    chalk.red(`---
${route} is using Edge runtime in \`/pages\` folder that is not supported with \`docsApiRoute\`.
Please use \`docsRoute\` instead: https://vercel.com/docs/functions/edge-functions/quickstart
---`)
  );
};

export const logNextRestFrameworkError = (error: unknown) => {
  const lines: string[] = ['Next REST Framework encountered an error:'];
  if (error instanceof Error) {
    lines.push(error.stack ?? `${error.name}: ${error.message}`);
    let cause: unknown = (error as { cause?: unknown }).cause;
    let depth = 0;
    while (cause !== undefined && cause !== null && depth < 5) {
      lines.push('Caused by:');
      if (cause instanceof Error) {
        lines.push(cause.stack ?? `${cause.name}: ${cause.message}`);
        cause = (cause as { cause?: unknown }).cause;
      } else {
        lines.push(typeof cause === 'string' ? cause : String(cause));
        cause = undefined;
      }
      depth += 1;
    }
  } else {
    lines.push(typeof error === 'string' ? error : String(error));
  }
  console.error(chalk.red(lines.join('\n')));
};

export const logGenerateErrorForRoute = (path: string, error: unknown) => {
  console.info(
    chalk.yellow(`---
Error while importing ${path}, skipping path...`)
  );

  console.error(chalk.red(error));

  console.info(
    chalk.yellow(
      `If you don't want this path to be part of your generated OpenAPI spec and want to prevent seeing this error in the future, please add ${path} to 'deniedPaths'.`
    )
  );
};
