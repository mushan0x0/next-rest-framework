import {
  isValidMethod,
  logGenerateErrorForRoute
} from "./chunk-55YNPHWB.mjs";

// src/cli/utils.ts
import chalk from "chalk";
import { existsSync, readdirSync } from "fs";
import { join } from "path";
import { merge } from "lodash";

// src/cli/constants.ts
var OPEN_API_VERSION = "3.0.1";

// src/cli/utils.ts
var getNestedFiles = (basePath, dir) => {
  const dirents = readdirSync(join(basePath, dir), { withFileTypes: true });
  const files = dirents.map((dirent) => {
    const res = join(dir, dirent.name);
    return dirent.isDirectory() ? getNestedFiles(basePath, res) : res;
  });
  return files.flat();
};
var getRouteName = (file) => `/${file}`.replace("/route.ts", "").replace("/route.js", "").replace(/\\/g, "/").replaceAll("[", "{").replaceAll("]", "}").replace(/\/?\([^)]*\)/g, "");
var getApiRouteName = (file) => `/api/${file}`.replace("/index", "").replace(/\\/g, "/").replaceAll("[", "{").replaceAll("]", "}").replace(".ts", "").replace(".js", "");
var findConfig = async ({ configPath }) => {
  const configs = [];
  const findAppRouterConfig = async (path) => {
    const appRouterPath = join(process.cwd(), path);
    if (existsSync(appRouterPath)) {
      const filteredRoutes = getNestedFiles(appRouterPath, "").filter(
        (file) => {
          if (configPath) {
            return configPath === getRouteName(file);
          }
          return file.endsWith("route.ts") || file.endsWith("route.js");
        }
      );
      await Promise.all(
        filteredRoutes.map(async (route) => {
          try {
            const filePathToRoute = join(process.cwd(), path, route);
            const url = new URL(`file://${filePathToRoute}`).toString();
            const res = await import(url).then((mod) => mod.default || mod);
            const handlers = Object.entries(res).filter(([key]) => isValidMethod(key)).map(([_key, handler]) => handler);
            for (const handler of handlers) {
              const _config = handler._nextRestFrameworkConfig;
              if (_config) {
                configs.push({
                  routeName: getRouteName(route),
                  config: _config
                });
              }
            }
          } catch {
          }
        })
      );
    }
  };
  await findAppRouterConfig("app");
  await findAppRouterConfig("src/app");
  const findPagesRouterConfig = async (path) => {
    const pagesRouterPath = join(process.cwd(), path);
    if (existsSync(pagesRouterPath)) {
      const filteredApiRoutes = getNestedFiles(pagesRouterPath, "").filter(
        (file) => {
          if (configPath) {
            return configPath === getApiRouteName(file);
          }
          return true;
        }
      );
      await Promise.all(
        filteredApiRoutes.map(async (route) => {
          try {
            const filePathToRoute = join(process.cwd(), path, route);
            const url = new URL(`file://${filePathToRoute}`).toString();
            const res = await import(url).then((mod) => mod.default || mod);
            const _config = res.default._nextRestFrameworkConfig;
            if (_config) {
              configs.push({
                routeName: getApiRouteName(route),
                config: _config
              });
            }
          } catch {
          }
        })
      );
    }
  };
  await findPagesRouterConfig("pages/api");
  await findPagesRouterConfig("src/pages/api");
  const { routeName, config } = configs[0] ?? { route: "", config: null };
  if (!config && configPath) {
    console.error(
      chalk.red(
        `A \`configPath\` parameter with a value of ${configPath} was provided but no Next REST Framework configs were found.`
      )
    );
    return;
  }
  if (!config) {
    console.error(
      chalk.red(
        "Next REST Framework config not found. Initialize a docs handler to generate the OpenAPI spec."
      )
    );
    return;
  }
  if (configs.length > 1) {
    console.info(
      chalk.yellowBright(
        "Multiple Next REST Framework configs found. Please specify a `configPath` parameter to select a specific config."
      )
    );
  }
  console.info(
    chalk.yellowBright(`Using Next REST Framework config: ${routeName}`)
  );
  return config;
};
var generatePathsFromBuild = async ({
  config
}) => {
  const ignoredPaths = [];
  const isWildcardMatch = ({
    pattern,
    path
  }) => {
    const regexPattern = pattern.split("/").map(
      (segment) => segment === "*" ? "[^/]*" : segment === "**" ? ".*" : segment
    ).join("/");
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(path);
  };
  const isAllowedRoute = (path) => {
    const isAllowed = config.allowedPaths.some(
      (allowedPath) => isWildcardMatch({ pattern: allowedPath, path })
    );
    const isDenied = config.deniedPaths.some(
      (deniedPath) => isWildcardMatch({ pattern: deniedPath, path })
    );
    const routeIsAllowed = isAllowed && !isDenied;
    if (!routeIsAllowed) {
      ignoredPaths.push(path);
    }
    return routeIsAllowed;
  };
  const getCleanedRoutes = (files) => files.filter(
    (file) => (file.endsWith("route.ts") || file.endsWith("route.js")) && !file.includes("[...") && !file.endsWith("rpc/[operationId]/route.ts") && !file.endsWith("rpc/[operationId]/route.js") && isAllowedRoute(getRouteName(file))
  );
  const getCleanedRpcRoutes = (files) => files.filter(
    (file) => (file.endsWith("rpc/[operationId]/route.ts") || file.endsWith("rpc/[operationId]/route.js")) && isAllowedRoute(getRouteName(file))
  );
  const getCleanedApiRoutes = (files) => files.filter(
    (file) => (file.endsWith(".ts") || file.endsWith(".js")) && !file.includes("[...") && !file.endsWith("rpc/[operationId].ts") && !file.endsWith("rpc/[operationId].js") && isAllowedRoute(getApiRouteName(file))
  );
  const getCleanedRpcApiRoutes = (files) => files.filter(
    (file) => (file.endsWith("rpc/[operationId].ts") || file.endsWith("rpc/[operationId].js")) && isAllowedRoute(getApiRouteName(file))
  );
  const isNrfOasData = (x) => {
    if (typeof x !== "object" || x === null) {
      return false;
    }
    return "paths" in x;
  };
  let paths = {};
  let schemas = {};
  const collectAppRouterPaths = async (path) => {
    const appRouterPath = join(process.cwd(), path);
    if (existsSync(appRouterPath)) {
      const files = getNestedFiles(appRouterPath, "");
      const routes = getCleanedRoutes(files);
      const rpcRoutes = getCleanedRpcRoutes(files);
      await Promise.all(
        [...routes, ...rpcRoutes].map(async (route) => {
          try {
            const filePathToRoute = join(process.cwd(), path, route);
            const url = new URL(`file://${filePathToRoute}`).toString();
            const res = await import(url).then((mod) => mod.default || mod);
            const handlers = Object.entries(res).filter(([key]) => isValidMethod(key)).map(([_key, handler]) => handler);
            for (const handler of handlers) {
              const isDocsHandler = !!handler._nextRestFrameworkConfig;
              if (isDocsHandler) {
                continue;
              }
              const data = await handler._getPathsForRoute(getRouteName(route));
              if (isNrfOasData(data)) {
                paths = { ...paths, ...data.paths };
                schemas = { ...schemas, ...data.schemas };
              }
            }
          } catch (e) {
            logGenerateErrorForRoute(getRouteName(route), e);
          }
        })
      );
    }
  };
  await collectAppRouterPaths("app");
  await collectAppRouterPaths("src/app");
  const collectPagesRouterPaths = async (path) => {
    const pagesRouterPath = join(process.cwd(), path);
    if (existsSync(pagesRouterPath)) {
      const files = getNestedFiles(pagesRouterPath, "");
      const apiRoutes = getCleanedApiRoutes(files);
      const rpcApiRoutes = getCleanedRpcApiRoutes(files);
      await Promise.all(
        [...apiRoutes, ...rpcApiRoutes].map(async (apiRoute) => {
          try {
            const filePathToRoute = join(process.cwd(), path, apiRoute);
            const url = new URL(`file://${filePathToRoute}`).toString();
            const res = await import(url).then((mod) => mod.default || mod);
            const isDocsHandler = !!res.default._nextRestFrameworkConfig;
            if (isDocsHandler) {
              return;
            }
            const data = await res.default._getPathsForRoute(
              getApiRouteName(apiRoute)
            );
            if (isNrfOasData(data)) {
              paths = { ...paths, ...data.paths };
              schemas = { ...schemas, ...data.schemas };
            }
          } catch (e) {
            logGenerateErrorForRoute(getApiRouteName(apiRoute), e);
          }
        })
      );
    }
  };
  await collectPagesRouterPaths("pages/api");
  await collectPagesRouterPaths("src/pages/api");
  if (ignoredPaths.length) {
    console.info(
      chalk.yellowBright(
        `The following paths are ignored by Next REST Framework: ${chalk.bold(
          ignoredPaths.map((p) => `
- ${p}`)
        )}`
      )
    );
  }
  return {
    paths,
    schemas
  };
};
var generateOpenApiSpec = async ({
  config
}) => {
  const { paths = {}, schemas = {} } = await generatePathsFromBuild({
    config
  });
  const sortObjectByKeys = (obj) => {
    const unordered = { ...obj };
    return Object.keys(unordered).sort().reduce((_obj, key) => {
      _obj[key] = unordered[key];
      return _obj;
    }, {});
  };
  const components = Object.keys(schemas).length ? { components: { schemas: sortObjectByKeys(schemas) } } : {};
  const spec = merge(
    {
      openapi: OPEN_API_VERSION,
      info: config.openApiObject.info,
      paths: sortObjectByKeys(paths)
    },
    components,
    config.openApiObject
  );
  return spec;
};

export {
  findConfig,
  generateOpenApiSpec
};
