import {
  DEFAULT_DESCRIPTION,
  DEFAULT_ERRORS,
  DEFAULT_FAVICON_URL,
  DEFAULT_LOGO_URL,
  DEFAULT_OG_TYPE,
  DEFAULT_TITLE,
  ERROR_MESSAGE_SCHEMA,
  HOMEPAGE,
  INVALID_PATH_PARAMETERS_RESPONSE,
  INVALID_QUERY_PARAMETERS_RESPONSE,
  INVALID_REQUEST_BODY_RESPONSE,
  INVALID_RPC_REQUEST_RESPONSE,
  MESSAGE_WITH_ERRORS_SCHEMA,
  UNEXPECTED_ERROR_RESPONSE,
  VERSION,
  ValidMethod
} from "./chunk-2PBOIPNY.mjs";

// src/shared/schemas.ts
import { z } from "zod";
import chalk from "chalk";
var isZodSchema = (schema) => !!schema && typeof schema === "object" && "_def" in schema;
var zodSchemaValidator = ({
  schema,
  obj
}) => {
  const result = schema.safeParse(obj);
  if (result.success) {
    return {
      valid: true,
      errors: null,
      data: result.data
    };
  }
  return {
    valid: false,
    errors: result.error.issues,
    data: null
  };
};
var validateSchema = ({
  schema,
  obj
}) => {
  if (isZodSchema(schema)) {
    return zodSchemaValidator({ schema, obj });
  }
  throw Error("Invalid schema.");
};
var getJsonSchema = ({
  schema,
  operationId,
  type
}) => {
  if (isZodSchema(schema)) {
    try {
      const io = type === "output-body" ? "output" : "input";
      return z.toJSONSchema(schema, {
        target: "openapi-3.0",
        unrepresentable: "any",
        // Allow unrepresentable types (date, bigint, etc.) to be converted to {}
        io
      });
    } catch (error) {
      const solutions = {
        "input-params": "paramsSchema",
        "input-query": "querySchema",
        "input-body": "bodySchema",
        "output-body": "bodySchema"
      };
      console.warn(
        chalk.yellowBright(
          `
Warning: ${type} schema for operation ${operationId} could not be converted to a JSON schema. The OpenAPI spec may not be accurate.
Error: ${error instanceof Error ? error.message : String(error)}
This is most likely related to Zod v4's toJSONSchema() limitations or an issue with the schema structure.
Please consider using the ${solutions[type]} property in addition to the Zod schema.`
        )
      );
      return {};
    }
  }
  throw Error("Invalid schema.");
};

// src/shared/rpc-operation.ts
var rpcOperation = (openApiOperation) => {
  function createOperation({
    input,
    outputs,
    middleware1,
    middleware2,
    middleware3,
    handler
  }) {
    const callOperation = async (body) => {
      let middlewareOptions = {};
      if (middleware1) {
        middlewareOptions = await middleware1(body, middlewareOptions);
        if (middleware2) {
          middlewareOptions = await middleware2(body, middlewareOptions);
          if (middleware3) {
            middlewareOptions = await middleware3(body, middlewareOptions);
          }
        }
      }
      if (input?.body) {
        const { valid, errors } = validateSchema({
          schema: input.body,
          obj: body
        });
        if (!valid) {
          throw Error(`${DEFAULT_ERRORS.invalidRequestBody}: ${errors}`);
        }
      }
      if (!handler) {
        throw Error("Handler not found.");
      }
      const res = await handler(
        body,
        middlewareOptions
      );
      return res;
    };
    const meta = {
      openApiOperation,
      input,
      outputs,
      middleware1,
      middleware2,
      middleware3,
      handler
    };
    if (input?.body === void 0) {
      const operation = async () => await callOperation();
      operation._meta = meta;
      return operation;
    } else {
      const operation = async (body) => await callOperation(body);
      operation._meta = meta;
      return operation;
    }
  }
  return {
    input: (input) => ({
      outputs: (outputs) => ({
        middleware: (middleware1) => ({
          middleware: (middleware2) => ({
            middleware: (middleware3) => ({
              handler: (handler) => createOperation({
                input,
                outputs,
                middleware1,
                middleware2,
                middleware3,
                handler
              })
            }),
            handler: (handler) => createOperation({
              input,
              outputs,
              middleware1,
              middleware2,
              handler
            })
          }),
          handler: (handler) => createOperation({
            input,
            outputs,
            middleware1,
            handler
          })
        }),
        handler: (handler) => createOperation({
          input,
          outputs,
          handler
        })
      }),
      middleware: (middleware1) => ({
        middleware: (middleware2) => ({
          middleware: (middleware3) => ({
            outputs: (outputs) => ({
              handler: (handler) => createOperation({
                input,
                outputs,
                middleware1,
                middleware2,
                middleware3,
                handler
              })
            }),
            handler: (handler) => createOperation({
              input,
              middleware1,
              middleware2,
              middleware3,
              handler
            })
          }),
          outputs: (outputs) => ({
            handler: (handler) => createOperation({
              input,
              outputs,
              middleware1,
              middleware2,
              handler
            })
          }),
          handler: (handler) => createOperation({
            input,
            middleware1,
            middleware2,
            handler
          })
        }),
        outputs: (outputs) => ({
          handler: (handler) => createOperation({
            input,
            outputs,
            middleware1,
            handler
          })
        }),
        handler: (handler) => createOperation({
          input,
          middleware1,
          handler
        })
      }),
      handler: (handler) => createOperation({
        input,
        handler
      })
    }),
    outputs: (outputs) => ({
      middleware: (middleware1) => ({
        middleware: (middleware2) => ({
          middleware: (middleware3) => ({
            handler: (handler) => createOperation({
              outputs,
              middleware1,
              middleware2,
              middleware3,
              handler
            })
          }),
          handler: (handler) => createOperation({
            outputs,
            middleware1,
            middleware2,
            handler
          })
        }),
        handler: (handler) => createOperation({
          outputs,
          middleware1,
          handler
        })
      }),
      handler: (handler) => createOperation({
        outputs,
        handler
      })
    }),
    middleware: (middleware1) => ({
      middleware: (middleware2) => ({
        middleware: (middleware3) => ({
          handler: (handler) => createOperation({ middleware1, middleware2, middleware3, handler })
        }),
        handler: (handler) => createOperation({ middleware1, middleware2, handler })
      }),
      handler: (handler) => createOperation({ middleware1, handler })
    }),
    handler: (handler) => createOperation({ handler })
  };
};

// src/shared/config.ts
import { merge } from "lodash";
var DEFAULT_CONFIG = {
  deniedPaths: [],
  allowedPaths: ["**"],
  openApiObject: {
    info: {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      version: `v${VERSION}`
    }
  },
  openApiJsonPath: "/openapi.json",
  docsConfig: {
    provider: "redoc",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    faviconUrl: DEFAULT_FAVICON_URL,
    logoUrl: DEFAULT_LOGO_URL,
    ogConfig: {
      title: DEFAULT_TITLE,
      type: DEFAULT_OG_TYPE,
      url: HOMEPAGE,
      imageUrl: DEFAULT_LOGO_URL
    }
  }
};
var getConfig = (config) => merge({}, DEFAULT_CONFIG, config);

// src/shared/docs.ts
var getHtmlForDocs = ({
  config: {
    openApiJsonPath,
    openApiObject,
    docsConfig: {
      provider,
      title = openApiObject?.info?.title ?? DEFAULT_TITLE,
      description = openApiObject?.info?.description ?? DEFAULT_DESCRIPTION,
      faviconUrl = DEFAULT_FAVICON_URL,
      logoUrl = DEFAULT_LOGO_URL,
      ogConfig: {
        title: ogTitle = title,
        type: ogType = DEFAULT_OG_TYPE,
        url: orgUrl = HOMEPAGE,
        imageUrl: ogImageUrl = DEFAULT_LOGO_URL
      } = {
        title: DEFAULT_TITLE,
        type: "website",
        url: HOMEPAGE,
        imageUrl: DEFAULT_LOGO_URL
      }
    }
  },
  host
}) => {
  const url = `//${host}${openApiJsonPath}`;
  const htmlMetaTags = `<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta
      name="description"
      content="${description}"
    />
    <link rel="icon" type="image/x-icon" href="${faviconUrl}">
    <meta property="og:title" content="${ogTitle}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${orgUrl}" />
    <meta property="og:image" content="${ogImageUrl}" />`;
  const redocHtml = `<!DOCTYPE html>
<html>
  <head>
    ${htmlMetaTags}
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Roboto:300,400,700"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="redoc"></div>
    <script src="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js"></script>
    <script>
      window.onload = () => {
        fetch('${url}')
          .then(res => res.json())
          .then(spec => {
            spec.info['title'] = "${title}";
            spec.info['description'] = "${description}";
            spec.info['x-logo'] = { url: "${logoUrl}" };
            Redoc.init(spec, {}, document.getElementById('redoc'));
          });
      };
    </script>
  </body>
</html>`;
  const swaggerUiHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    ${htmlMetaTags}
    <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui.css" />
    <style>
      .topbar-wrapper img {
        content:url('${logoUrl}');
      }
    </style>
  </head>
  <body>
    <div id="swagger-ui"></div>
    <script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-bundle.js" crossorigin></script>
    <script src="https://unpkg.com/swagger-ui-dist@4.5.0/swagger-ui-standalone-preset.js" crossorigin></script>
    <script>
      window.onload = () => {
        fetch('${url}')
          .then(res => res.json())
          .then(spec => {
            spec.info['title'] = "${title}";
            spec.info['description'] = "${description}";

            window.ui = SwaggerUIBundle({
              spec,
              dom_id: '#swagger-ui',
              presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIStandalonePreset
              ],
              layout: 'StandaloneLayout',
              deepLinking: true,
              displayOperationId: true,
              displayRequestDuration: true,
              filter: true
            });
          });
      };
    </script>
  </body>
</html>`;
  if (provider === "swagger-ui") {
    return swaggerUiHtml;
  }
  return redocHtml;
};

// src/shared/logging.ts
import chalk2 from "chalk";
var formatValue = (value) => {
  if (typeof value === "string") {
    return value;
  }
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return String(value);
  }
};
var formatError = (error, depth = 0) => {
  const lines = [];
  if (error instanceof Error) {
    lines.push(error.stack ?? `${error.name}: ${error.message}`);
    const props = Object.fromEntries(
      Object.entries(error).filter(([key]) => key !== "cause")
    );
    if (Object.keys(props).length > 0) {
      lines.push(`properties: ${formatValue(props)}`);
    }
    const cause = error.cause;
    if (cause !== void 0 && depth < 3) {
      lines.push(`cause:
${formatError(cause, depth + 1)}`);
    }
  } else {
    lines.push(formatValue(error));
  }
  return lines.join("\n");
};
var formatContext = (context) => {
  if (!context) {
    return "";
  }
  const entries = Object.entries(context).filter(
    ([, value]) => value !== void 0 && value !== ""
  );
  if (entries.length === 0) {
    return "";
  }
  return `${entries.map(([key, value]) => `${key}: ${value}`).join("\n")}
`;
};
var logPagesEdgeRuntimeErrorForRoute = (route) => {
  console.error(
    chalk2.red(`---
${route} is using Edge runtime in \`/pages\` folder that is not supported with \`apiRoute\`.
Please use \`route\` instead: https://vercel.com/docs/functions/edge-functions/quickstart
---`)
  );
};
var logNextRestFrameworkError = (error, context) => {
  console.error(
    chalk2.red(`Next REST Framework encountered an error:
${formatContext(context)}${formatError(error)}`)
  );
};
var logNextRestFrameworkResponse = async (response, context) => {
  if (response.status < 500) {
    return;
  }
  let body;
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
    chalk2.red(`Next REST Framework returned an error response:
${formatContext(context)}status: ${response.status}
body: ${formatValue(body)}`)
  );
};
var logGenerateErrorForRoute = (path, error) => {
  console.info(
    chalk2.yellow(`---
Error while importing ${path}, skipping path...`)
  );
  console.error(chalk2.red(error));
  console.info(
    chalk2.yellow(
      `If you don't want this path to be part of your generated OpenAPI spec and want to prevent seeing this error in the future, please add ${path} to 'deniedPaths'.`
    )
  );
};

// src/shared/paths.ts
import { merge as merge2 } from "lodash";

// src/shared/utils.ts
var isValidMethod = (x) => Object.values(ValidMethod).includes(x);
var capitalizeFirstLetter = (str) => str[0]?.toUpperCase() + str.slice(1);
var parseRpcOperationResponseJson = async (res) => {
  if (res instanceof FormData || res instanceof URLSearchParams) {
    const body = {};
    for (const [key, value] of res.entries()) {
      body[key] = value;
    }
    return body;
  }
  return res;
};

// src/shared/paths.ts
var isSchemaRef = (schema) => "$ref" in schema;
var getPathsFromRoute = ({
  operations,
  options,
  route
}) => {
  const paths = {};
  paths[route] = {
    ...options?.openApiPath
  };
  const requestBodySchemas = {};
  const responseBodySchemas = {};
  const baseResponseBodySchemaMapping = {
    ErrorMessage: ERROR_MESSAGE_SCHEMA
  };
  Object.entries(operations).forEach(
    ([operationId, { openApiOperation, method: _method, input, outputs }]) => {
      if (!isValidMethod(_method)) {
        return;
      }
      const method = _method?.toLowerCase();
      const generatedOperationObject = {
        operationId
      };
      if (input?.body && input?.contentType) {
        const key = `${capitalizeFirstLetter(operationId)}RequestBody`;
        const schema = input.bodySchema ?? getJsonSchema({
          schema: input.body,
          operationId,
          type: "input-body"
        });
        const ref = isSchemaRef(schema) ? schema.$ref : `#/components/schemas/${key}`;
        if (!isSchemaRef(schema)) {
          requestBodySchemas[method] = {
            key,
            ref,
            schema
          };
        }
        generatedOperationObject.requestBody = {
          content: {
            [input.contentType]: {
              schema: {
                $ref: ref
              }
            }
          }
        };
        const description = input.bodySchema?.description ?? input.body.description;
        if (description) {
          generatedOperationObject.requestBody.description = description;
        }
      }
      const usedStatusCodes = [];
      const baseOperationResponses = {
        500: UNEXPECTED_ERROR_RESPONSE
      };
      if (input?.bodySchema) {
        baseOperationResponses[400] = INVALID_REQUEST_BODY_RESPONSE;
        baseResponseBodySchemaMapping.MessageWithErrors = MESSAGE_WITH_ERRORS_SCHEMA;
      }
      if (input?.querySchema) {
        baseOperationResponses[400] = INVALID_QUERY_PARAMETERS_RESPONSE;
        baseResponseBodySchemaMapping.InvalidQueryParameters = MESSAGE_WITH_ERRORS_SCHEMA;
      }
      if (input?.paramsSchema) {
        baseOperationResponses[400] = INVALID_PATH_PARAMETERS_RESPONSE;
        baseResponseBodySchemaMapping.InvalidPathParameters = MESSAGE_WITH_ERRORS_SCHEMA;
      }
      generatedOperationObject.responses = outputs?.reduce(
        (obj, { status, contentType, body, bodySchema, name }) => {
          const occurrenceOfStatusCode = usedStatusCodes.includes(status) ? usedStatusCodes.filter((s) => s === status).length + 1 : "";
          const key = name ?? `${capitalizeFirstLetter(
            operationId
          )}${status}ResponseBody${occurrenceOfStatusCode}`;
          usedStatusCodes.push(status);
          const schema = bodySchema ?? getJsonSchema({
            schema: body,
            operationId,
            type: "output-body"
          });
          const ref = isSchemaRef(schema) ? schema.$ref : `#/components/schemas/${key}`;
          if (!isSchemaRef(schema)) {
            responseBodySchemas[method] = [
              ...responseBodySchemas[method] ?? [],
              {
                key,
                ref,
                schema
              }
            ];
          }
          const description = bodySchema?.description ?? body.description ?? `Response for status ${status}`;
          return Object.assign(obj, {
            [status]: {
              description,
              content: {
                [contentType]: {
                  schema: {
                    $ref: ref
                  }
                }
              }
            }
          });
        },
        baseOperationResponses
      );
      let pathParameters = [];
      if (input?.params) {
        const schema = input.paramsSchema ?? getJsonSchema({
          schema: input.params,
          operationId,
          type: "input-params"
        }).properties ?? {};
        pathParameters = Object.entries(schema).map(([name, schema2]) => {
          const _schema = input.params.shape[name];
          return {
            name,
            in: "path",
            required: !_schema.isOptional(),
            schema: schema2
          };
        });
        generatedOperationObject.parameters = [
          ...generatedOperationObject.parameters ?? [],
          ...pathParameters
        ];
      }
      const automaticPathParameters = route.match(/{([^}]+)}/g)?.map((param) => param.replace(/[{}]/g, "")).filter((_name) => !pathParameters?.some(({ name }) => name === _name));
      if (automaticPathParameters?.length) {
        generatedOperationObject.parameters = [
          ...generatedOperationObject.parameters ?? [],
          ...automaticPathParameters.map((name) => ({
            name,
            in: "path",
            required: true,
            schema: { type: "string" }
          }))
        ];
      }
      if (input?.query) {
        const schema = input.querySchema ?? getJsonSchema({
          schema: input.query,
          operationId,
          type: "input-query"
        }).properties ?? {};
        generatedOperationObject.parameters = [
          ...generatedOperationObject.parameters ?? [],
          ...Object.entries(schema).map(([name, schema2]) => {
            const _schema = input.query.shape[name];
            return {
              name,
              in: "query",
              required: !_schema.isOptional(),
              schema: schema2
            };
          })
        ];
      }
      paths[route] = {
        ...paths[route],
        [method]: merge2(generatedOperationObject, openApiOperation)
      };
    }
  );
  const requestBodySchemaMapping = Object.values(requestBodySchemas).reduce((acc, { key, schema }) => {
    acc[key] = schema;
    return acc;
  }, {});
  const responseBodySchemaMapping = Object.values(responseBodySchemas).flatMap((val) => val).reduce(
    (acc, { key, schema }) => {
      acc[key] = schema;
      return acc;
    },
    baseResponseBodySchemaMapping
  );
  const schemas = {
    ...requestBodySchemaMapping,
    ...responseBodySchemaMapping
  };
  return { paths, schemas };
};
var getPathsFromRpcRoute = ({
  operations,
  options,
  route: _route
}) => {
  const paths = {};
  const requestBodySchemas = {};
  const responseBodySchemas = {};
  const baseResponseBodySchemaMapping = {
    ErrorMessage: ERROR_MESSAGE_SCHEMA
  };
  Object.entries(operations).forEach(
    ([
      operationId,
      {
        _meta: { openApiOperation, input, outputs }
      }
    ]) => {
      const route = _route + `/${operationId}`;
      paths[route] = {
        ...options?.openApiPath
      };
      const generatedOperationObject = {
        operationId
      };
      if (input?.body && input.contentType) {
        const key = `${capitalizeFirstLetter(operationId)}RequestBody`;
        const schema = input.bodySchema ?? getJsonSchema({
          schema: input.body,
          operationId,
          type: "input-body"
        });
        const ref = isSchemaRef(schema) ? schema.$ref : `#/components/schemas/${key}`;
        if (!isSchemaRef(schema)) {
          requestBodySchemas[operationId] = {
            key,
            ref,
            schema
          };
        }
        generatedOperationObject.requestBody = {
          content: {
            [input.contentType]: {
              schema: {
                $ref: ref
              }
            }
          }
        };
      }
      const baseOperationResponses = {};
      if (input?.bodySchema) {
        baseOperationResponses[400] = INVALID_RPC_REQUEST_RESPONSE;
        baseResponseBodySchemaMapping.MessageWithErrors = MESSAGE_WITH_ERRORS_SCHEMA;
      } else {
        baseOperationResponses[400] = UNEXPECTED_ERROR_RESPONSE;
      }
      generatedOperationObject.responses = outputs?.reduce(
        (obj, { body, bodySchema, contentType, name }, i) => {
          const key = name ?? `${capitalizeFirstLetter(operationId)}ResponseBody${i > 0 ? i + 1 : ""}`;
          const schema = bodySchema ?? getJsonSchema({
            schema: body,
            operationId,
            type: "output-body"
          });
          const ref = isSchemaRef(schema) ? schema.$ref : `#/components/schemas/${key}`;
          if (!isSchemaRef(schema)) {
            responseBodySchemas[operationId] = [
              ...responseBodySchemas[operationId] ?? [],
              {
                key,
                ref,
                schema
              }
            ];
          }
          return Object.assign(obj, {
            200: {
              description: key,
              content: {
                [contentType]: {
                  schema: {
                    $ref: ref
                  }
                }
              }
            }
          });
        },
        baseOperationResponses
      );
      paths[route] = {
        ...paths[route],
        ["post"]: merge2(
          generatedOperationObject,
          openApiOperation
        )
      };
    }
  );
  const requestBodySchemaMapping = Object.values(requestBodySchemas).reduce((acc, { key, schema }) => {
    acc[key] = schema;
    return acc;
  }, {});
  const responseBodySchemaMapping = Object.values(responseBodySchemas).flatMap((val) => val).reduce(
    (acc, { key, schema }) => {
      acc[key] = schema;
      return acc;
    },
    baseResponseBodySchemaMapping
  );
  const schemas = {
    ...requestBodySchemaMapping,
    ...responseBodySchemaMapping
  };
  return { paths, schemas };
};

export {
  getConfig,
  getHtmlForDocs,
  logPagesEdgeRuntimeErrorForRoute,
  logNextRestFrameworkError,
  logNextRestFrameworkResponse,
  logGenerateErrorForRoute,
  validateSchema,
  isValidMethod,
  parseRpcOperationResponseJson,
  getPathsFromRoute,
  getPathsFromRpcRoute,
  rpcOperation
};
