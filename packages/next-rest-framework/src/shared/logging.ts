import chalk from 'chalk';

export type NextRestFrameworkErrorLogContext = {
  method?: string;
  operationId?: string;
  route?: string;
  url?: string;
};

const formatValue = (value: unknown) => {
  if (typeof value === 'string') {
    return value;
  }

  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
};

const formatError = (error: unknown, depth = 0): string => {
  const lines: string[] = [];

  if (error instanceof Error) {
    lines.push(error.stack ?? `${error.name}: ${error.message}`);

    const props = Object.fromEntries(
      Object.entries(error).filter(([key]) => key !== 'cause')
    );

    if (Object.keys(props).length > 0) {
      lines.push(`properties: ${formatValue(props)}`);
    }

    const cause = (error as Error & { cause?: unknown }).cause;
    if (cause !== undefined && depth < 3) {
      lines.push(`cause:\n${formatError(cause, depth + 1)}`);
    }
  } else {
    lines.push(formatValue(error));
  }

  return lines.join('\n');
};

const formatContext = (context?: NextRestFrameworkErrorLogContext) => {
  if (!context) {
    return '';
  }

  const entries = Object.entries(context).filter(
    ([, value]) => value !== undefined && value !== ''
  );

  if (entries.length === 0) {
    return '';
  }

  return `${entries.map(([key, value]) => `${key}: ${value}`).join('\n')}\n`;
};

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

export const logNextRestFrameworkError = (
  error: unknown,
  context?: NextRestFrameworkErrorLogContext
) => {
  console.error(
    chalk.red(`Next REST Framework encountered an error:
${formatContext(context)}${formatError(error)}`)
  );
};

export const logNextRestFrameworkResponse = async (
  response: Response,
  context?: NextRestFrameworkErrorLogContext
) => {
  if (response.status < 500) {
    return;
  }

  let body: unknown;
  try {
    const text = await response.clone().text();
    if (text) {
      try {
        body = JSON.parse(text);
      } catch {
        body = text;
      }
    }
  } catch (error) {
    body = `Failed to read response body: ${formatError(error)}`;
  }

  console.error(
    chalk.red(`Next REST Framework returned an error response:
${formatContext(context)}status: ${response.status}
body: ${formatValue(body)}`)
  );
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
