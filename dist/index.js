"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export2 = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// package.json
var require_package = __commonJS({
  "package.json"(exports2, module2) {
    module2.exports = {
      name: "next-rest-framework",
      version: "6.1.4",
      description: "Next REST Framework - Type-safe, self-documenting APIs for Next.js",
      keywords: [
        "nextjs",
        "rest",
        "api",
        "next-rest-framework"
      ],
      homepage: "https://next-rest-framework.vercel.app",
      bugs: {
        url: "https://github.com/blomqma/next-rest-framework/issues",
        email: "blomqma@omg.lol"
      },
      license: "ISC",
      author: "Markus Blomqvist <blomqma@omg.lol>",
      files: [
        "dist"
      ],
      main: "dist/index.js",
      module: "dist/index.mjs",
      types: "dist/index.d.ts",
      repository: {
        type: "git",
        url: "https://github.com/blomqma/next-rest-framework.git",
        directory: "packages/next-rest-framework"
      },
      scripts: {
        lint: "tsc",
        test: "jest",
        "test:watch": "jest --watch",
        build: "tsup --dts"
      },
      bin: {
        "next-rest-framework": "./dist/cli/index.js"
      },
      dependencies: {
        chalk: "4.1.2",
        commander: "10.0.1",
        formidable: "^3.5.1",
        lodash: "4.18.1",
        prettier: "3.0.2",
        qs: "6.15.1"
      },
      peerDependencies: {
        zod: "^4.0.0"
      },
      devDependencies: {
        "@types/formidable": "^3.4.5",
        "@types/jest": "29.5.4",
        "@types/lodash": "4.14.197",
        "@types/qs": "6.9.11",
        esbuild: "0.19.11",
        jest: "29.6.4",
        next: "*",
        "node-mocks-http": "1.13.0",
        "openapi-types": "12.1.3",
        "ts-jest": "29.1.1",
        "ts-node": "10.9.1",
        tsup: "8.0.1",
        typescript: "*",
        zod: "^4.1.13",
        "zod-form-data": "3.0.1"
      }
    };
  }
});

// src/shared/form-data.ts
var form_data_exports = {};
__export2(form_data_exports, {
  parseMultiPartFormData: () => parseMultiPartFormData
});
var import_formidable, import_fs, parseMultiPartFormData;
var init_form_data = __esm({
  "src/shared/form-data.ts"() {
    "use strict";
    import_formidable = require("formidable");
    import_fs = require("fs");
    parseMultiPartFormData = async (req) => await new Promise((resolve, reject) => {
      const form = new import_formidable.Formidable();
      setTimeout(() => {
        reject(new Error("Form parsing timeout."));
      }, 1e4);
      form.parse(req, (err, fields, files) => {
        if (err) {
          reject(err);
          return;
        }
        const formData = new FormData();
        Object.entries(fields).forEach(([key, value]) => {
          if (value?.[0]) {
            formData.append(key, value[0]);
          }
        });
        Object.entries(files).forEach(([key, fileArray]) => {
          if (fileArray && fileArray.length > 0) {
            fileArray.forEach((file) => {
              const fileContent = (0, import_fs.readFileSync)(file.filepath);
              const blob = new Blob([fileContent], {
                type: file.mimetype ?? ""
              });
              formData.append(key, blob, file.originalFilename ?? "");
            });
          }
        });
        resolve(formData);
      });
    });
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js
var require_detect_domain_locale = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "detectDomainLocale", {
      enumerable: true,
      get: function() {
        return detectDomainLocale;
      }
    });
    function detectDomainLocale(domainItems, hostname, detectedLocale) {
      if (!domainItems)
        return;
      if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
      }
      for (const item of domainItems) {
        var _item_domain, _item_locales;
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale) => locale.toLowerCase() === detectedLocale))) {
          return item;
        }
      }
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js
var require_remove_trailing_slash = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "removeTrailingSlash", {
      enumerable: true,
      get: function() {
        return removeTrailingSlash;
      }
    });
    function removeTrailingSlash(route2) {
      return route2.replace(/\/$/, "") || "/";
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js
var require_parse_path = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "parsePath", {
      enumerable: true,
      get: function() {
        return parsePath;
      }
    });
    function parsePath(path) {
      const hashIndex = path.indexOf("#");
      const queryIndex = path.indexOf("?");
      const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
      if (hasQuery || hashIndex > -1) {
        return {
          pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
          query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
          hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
      }
      return {
        pathname: path,
        query: "",
        hash: ""
      };
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js
var require_add_path_prefix = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "addPathPrefix", {
      enumerable: true,
      get: function() {
        return addPathPrefix;
      }
    });
    var _parsepath = require_parse_path();
    function addPathPrefix(path, prefix) {
      if (!path.startsWith("/") || !prefix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
      return "" + prefix + pathname + query + hash;
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js
var require_add_path_suffix = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "addPathSuffix", {
      enumerable: true,
      get: function() {
        return addPathSuffix;
      }
    });
    var _parsepath = require_parse_path();
    function addPathSuffix(path, suffix) {
      if (!path.startsWith("/") || !suffix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
      return "" + pathname + suffix + query + hash;
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js
var require_path_has_prefix = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "pathHasPrefix", {
      enumerable: true,
      get: function() {
        return pathHasPrefix;
      }
    });
    var _parsepath = require_parse_path();
    function pathHasPrefix(path, prefix) {
      if (typeof path !== "string") {
        return false;
      }
      const { pathname } = (0, _parsepath.parsePath)(path);
      return pathname === prefix || pathname.startsWith(prefix + "/");
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/add-locale.js
var require_add_locale = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/add-locale.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "addLocale", {
      enumerable: true,
      get: function() {
        return addLocale;
      }
    });
    var _addpathprefix = require_add_path_prefix();
    var _pathhasprefix = require_path_has_prefix();
    function addLocale(path, locale, defaultLocale, ignorePrefix) {
      if (!locale || locale === defaultLocale)
        return path;
      const lower = path.toLowerCase();
      if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api"))
          return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase()))
          return path;
      }
      return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js
var require_format_next_pathname_info = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "formatNextPathnameInfo", {
      enumerable: true,
      get: function() {
        return formatNextPathnameInfo;
      }
    });
    var _removetrailingslash = require_remove_trailing_slash();
    var _addpathprefix = require_add_path_prefix();
    var _addpathsuffix = require_add_path_suffix();
    var _addlocale = require_add_locale();
    function formatNextPathnameInfo(info) {
      let pathname = (0, _addlocale.addLocale)(info.pathname, info.locale, info.buildId ? void 0 : info.defaultLocale, info.ignorePrefix);
      if (info.buildId || !info.trailingSlash) {
        pathname = (0, _removetrailingslash.removeTrailingSlash)(pathname);
      }
      if (info.buildId) {
        pathname = (0, _addpathsuffix.addPathSuffix)((0, _addpathprefix.addPathPrefix)(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
      }
      pathname = (0, _addpathprefix.addPathPrefix)(pathname, info.basePath);
      return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, _addpathsuffix.addPathSuffix)(pathname, "/") : pathname : (0, _removetrailingslash.removeTrailingSlash)(pathname);
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/get-hostname.js
var require_get_hostname = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/get-hostname.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "getHostname", {
      enumerable: true,
      get: function() {
        return getHostname;
      }
    });
    function getHostname(parsed, headers) {
      let hostname;
      if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":", 1)[0];
      } else if (parsed.hostname) {
        hostname = parsed.hostname;
      } else
        return;
      return hostname.toLowerCase();
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js
var require_normalize_locale_path = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "normalizeLocalePath", {
      enumerable: true,
      get: function() {
        return normalizeLocalePath;
      }
    });
    var cache = /* @__PURE__ */ new WeakMap();
    function normalizeLocalePath(pathname, locales) {
      if (!locales)
        return {
          pathname
        };
      let lowercasedLocales = cache.get(locales);
      if (!lowercasedLocales) {
        lowercasedLocales = locales.map((locale) => locale.toLowerCase());
        cache.set(locales, lowercasedLocales);
      }
      let detectedLocale;
      const segments = pathname.split("/", 2);
      if (!segments[1])
        return {
          pathname
        };
      const segment = segments[1].toLowerCase();
      const index = lowercasedLocales.indexOf(segment);
      if (index < 0)
        return {
          pathname
        };
      detectedLocale = locales[index];
      pathname = pathname.slice(detectedLocale.length + 1) || "/";
      return {
        pathname,
        detectedLocale
      };
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js
var require_remove_path_prefix = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "removePathPrefix", {
      enumerable: true,
      get: function() {
        return removePathPrefix;
      }
    });
    var _pathhasprefix = require_path_has_prefix();
    function removePathPrefix(path, prefix) {
      if (!(0, _pathhasprefix.pathHasPrefix)(path, prefix)) {
        return path;
      }
      const withoutPrefix = path.slice(prefix.length);
      if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
      }
      return "/" + withoutPrefix;
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js
var require_get_next_pathname_info = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "getNextPathnameInfo", {
      enumerable: true,
      get: function() {
        return getNextPathnameInfo;
      }
    });
    var _normalizelocalepath = require_normalize_locale_path();
    var _removepathprefix = require_remove_path_prefix();
    var _pathhasprefix = require_path_has_prefix();
    function getNextPathnameInfo(pathname, options) {
      var _options_nextConfig;
      const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
      const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
      };
      if (basePath && (0, _pathhasprefix.pathHasPrefix)(info.pathname, basePath)) {
        info.pathname = (0, _removepathprefix.removePathPrefix)(info.pathname, basePath);
        info.basePath = basePath;
      }
      let pathnameNoDataPrefix = info.pathname;
      if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        if (options.parseData === true) {
          info.pathname = pathnameNoDataPrefix;
        }
      }
      if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, _normalizelocalepath.normalizeLocalePath)(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
          result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, _normalizelocalepath.normalizeLocalePath)(pathnameNoDataPrefix, i18n.locales);
          if (result.detectedLocale) {
            info.locale = result.detectedLocale;
          }
        }
      }
      return info;
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/next-url.js
var require_next_url = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/next-url.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "NextURL", {
      enumerable: true,
      get: function() {
        return NextURL;
      }
    });
    var _detectdomainlocale = require_detect_domain_locale();
    var _formatnextpathnameinfo = require_format_next_pathname_info();
    var _gethostname = require_get_hostname();
    var _getnextpathnameinfo = require_get_next_pathname_info();
    var REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
    function parseURL(url, base) {
      return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
    }
    var Internal = Symbol("NextURLInternal");
    var NextURL = class _NextURL {
      constructor(input, baseOrOpts, opts) {
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
          base = baseOrOpts;
          options = opts || {};
        } else {
          options = opts || baseOrOpts || {};
        }
        this[Internal] = {
          url: parseURL(input, base ?? options.base),
          options,
          basePath: ""
        };
        this.analyze();
      }
      analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = (0, _getnextpathnameinfo.getNextPathnameInfo)(this[Internal].url.pathname, {
          nextConfig: this[Internal].options.nextConfig,
          parseData: !process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE,
          i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, _gethostname.getHostname)(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, _detectdomainlocale.detectDomainLocale)((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
      }
      formatPathname() {
        return (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
          basePath: this[Internal].basePath,
          buildId: this[Internal].buildId,
          defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : void 0,
          locale: this[Internal].locale,
          pathname: this[Internal].url.pathname,
          trailingSlash: this[Internal].trailingSlash
        });
      }
      formatSearch() {
        return this[Internal].url.search;
      }
      get buildId() {
        return this[Internal].buildId;
      }
      set buildId(buildId) {
        this[Internal].buildId = buildId;
      }
      get locale() {
        return this[Internal].locale ?? "";
      }
      set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
          throw Object.defineProperty(new TypeError(`The NextURL configuration includes no locale "${locale}"`), "__NEXT_ERROR_CODE", {
            value: "E597",
            enumerable: false,
            configurable: true
          });
        }
        this[Internal].locale = locale;
      }
      get defaultLocale() {
        return this[Internal].defaultLocale;
      }
      get domainLocale() {
        return this[Internal].domainLocale;
      }
      get searchParams() {
        return this[Internal].url.searchParams;
      }
      get host() {
        return this[Internal].url.host;
      }
      set host(value) {
        this[Internal].url.host = value;
      }
      get hostname() {
        return this[Internal].url.hostname;
      }
      set hostname(value) {
        this[Internal].url.hostname = value;
      }
      get port() {
        return this[Internal].url.port;
      }
      set port(value) {
        this[Internal].url.port = value;
      }
      get protocol() {
        return this[Internal].url.protocol;
      }
      set protocol(value) {
        this[Internal].url.protocol = value;
      }
      get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
      }
      set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
      }
      get origin() {
        return this[Internal].url.origin;
      }
      get pathname() {
        return this[Internal].url.pathname;
      }
      set pathname(value) {
        this[Internal].url.pathname = value;
      }
      get hash() {
        return this[Internal].url.hash;
      }
      set hash(value) {
        this[Internal].url.hash = value;
      }
      get search() {
        return this[Internal].url.search;
      }
      set search(value) {
        this[Internal].url.search = value;
      }
      get password() {
        return this[Internal].url.password;
      }
      set password(value) {
        this[Internal].url.password = value;
      }
      get username() {
        return this[Internal].url.username;
      }
      set username(value) {
        this[Internal].url.username = value;
      }
      get basePath() {
        return this[Internal].basePath;
      }
      set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
      }
      toString() {
        return this.href;
      }
      toJSON() {
        return this.href;
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          href: this.href,
          origin: this.origin,
          protocol: this.protocol,
          username: this.username,
          password: this.password,
          host: this.host,
          hostname: this.hostname,
          port: this.port,
          pathname: this.pathname,
          search: this.search,
          searchParams: this.searchParams,
          hash: this.hash
        };
      }
      clone() {
        return new _NextURL(String(this), this[Internal].options);
      }
    };
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/lib/constants.js
var require_constants = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/lib/constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      ACTION_SUFFIX: function() {
        return ACTION_SUFFIX;
      },
      APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
      },
      CACHE_ONE_YEAR: function() {
        return CACHE_ONE_YEAR;
      },
      DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
      },
      ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
      },
      GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
      },
      GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
      },
      GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
      },
      INFINITE_CACHE: function() {
        return INFINITE_CACHE;
      },
      INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
      },
      MATCHED_PATH_HEADER: function() {
        return MATCHED_PATH_HEADER;
      },
      MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
      },
      MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
      },
      NEXT_BODY_SUFFIX: function() {
        return NEXT_BODY_SUFFIX;
      },
      NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
      },
      NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
      },
      NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
      },
      NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
      },
      NEXT_CACHE_TAGS_HEADER: function() {
        return NEXT_CACHE_TAGS_HEADER;
      },
      NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return NEXT_CACHE_TAG_MAX_ITEMS;
      },
      NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
      },
      NEXT_DATA_SUFFIX: function() {
        return NEXT_DATA_SUFFIX;
      },
      NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return NEXT_INTERCEPTION_MARKER_PREFIX;
      },
      NEXT_META_SUFFIX: function() {
        return NEXT_META_SUFFIX;
      },
      NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
      },
      NEXT_RESUME_HEADER: function() {
        return NEXT_RESUME_HEADER;
      },
      NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
      },
      PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
      },
      PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
      },
      PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
      },
      PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
      },
      ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
      },
      RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
      },
      RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return RSC_ACTION_ENCRYPTION_ALIAS;
      },
      RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
      },
      RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
      },
      RSC_CACHE_WRAPPER_ALIAS: function() {
        return RSC_CACHE_WRAPPER_ALIAS;
      },
      RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
        return RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS;
      },
      RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
      },
      RSC_PREFETCH_SUFFIX: function() {
        return RSC_PREFETCH_SUFFIX;
      },
      RSC_SEGMENTS_DIR_SUFFIX: function() {
        return RSC_SEGMENTS_DIR_SUFFIX;
      },
      RSC_SEGMENT_SUFFIX: function() {
        return RSC_SEGMENT_SUFFIX;
      },
      RSC_SUFFIX: function() {
        return RSC_SUFFIX;
      },
      SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
      },
      SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
      },
      SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
      },
      SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
      },
      SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
      },
      SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
      },
      STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
      },
      UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
      },
      WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
      },
      WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
      }
    });
    var NEXT_QUERY_PARAM_PREFIX = "nxtP";
    var NEXT_INTERCEPTION_MARKER_PREFIX = "nxtI";
    var MATCHED_PATH_HEADER = "x-matched-path";
    var PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
    var PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
    var RSC_PREFETCH_SUFFIX = ".prefetch.rsc";
    var RSC_SEGMENTS_DIR_SUFFIX = ".segments";
    var RSC_SEGMENT_SUFFIX = ".segment.rsc";
    var RSC_SUFFIX = ".rsc";
    var ACTION_SUFFIX = ".action";
    var NEXT_DATA_SUFFIX = ".json";
    var NEXT_META_SUFFIX = ".meta";
    var NEXT_BODY_SUFFIX = ".body";
    var NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
    var NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
    var NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
    var NEXT_RESUME_HEADER = "next-resume";
    var NEXT_CACHE_TAG_MAX_ITEMS = 128;
    var NEXT_CACHE_TAG_MAX_LENGTH = 256;
    var NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
    var NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
    var CACHE_ONE_YEAR = 31536e3;
    var INFINITE_CACHE = 4294967294;
    var MIDDLEWARE_FILENAME = "middleware";
    var MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
    var INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
    var PAGES_DIR_ALIAS = "private-next-pages";
    var DOT_NEXT_ALIAS = "private-dot-next";
    var ROOT_DIR_ALIAS = "private-next-root-dir";
    var APP_DIR_ALIAS = "private-next-app-dir";
    var RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
    var RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
    var RSC_ACTION_PROXY_ALIAS = "private-next-rsc-server-reference";
    var RSC_CACHE_WRAPPER_ALIAS = "private-next-rsc-cache-wrapper";
    var RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS = "private-next-rsc-track-dynamic-import";
    var RSC_ACTION_ENCRYPTION_ALIAS = "private-next-rsc-action-encryption";
    var RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
    var PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
    var SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
    var SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
    var SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
    var STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
    var SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
    var GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
    var GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
    var UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.";
    var GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
    var NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
    var SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
    var ESLINT_DEFAULT_DIRS = [
      "app",
      "pages",
      "components",
      "lib",
      "src"
    ];
    var SERVER_RUNTIME = {
      edge: "edge",
      experimentalEdge: "experimental-edge",
      nodejs: "nodejs"
    };
    var WEBPACK_LAYERS_NAMES = {
      /**
      * The layer for the shared code between the client and server bundles.
      */
      shared: "shared",
      /**
      * The layer for server-only runtime and picking up `react-server` export conditions.
      * Including app router RSC pages and app router custom routes and metadata routes.
      */
      reactServerComponents: "rsc",
      /**
      * Server Side Rendering layer for app (ssr).
      */
      serverSideRendering: "ssr",
      /**
      * The browser client bundle layer for actions.
      */
      actionBrowser: "action-browser",
      /**
      * The Node.js bundle layer for the API routes.
      */
      apiNode: "api-node",
      /**
      * The Edge Lite bundle layer for the API routes.
      */
      apiEdge: "api-edge",
      /**
      * The layer for the middleware code.
      */
      middleware: "middleware",
      /**
      * The layer for the instrumentation hooks.
      */
      instrument: "instrument",
      /**
      * The layer for assets on the edge.
      */
      edgeAsset: "edge-asset",
      /**
      * The browser client bundle layer for App directory.
      */
      appPagesBrowser: "app-pages-browser",
      /**
      * The browser client bundle layer for Pages directory.
      */
      pagesDirBrowser: "pages-dir-browser",
      /**
      * The Edge Lite bundle layer for Pages directory.
      */
      pagesDirEdge: "pages-dir-edge",
      /**
      * The Node.js bundle layer for Pages directory.
      */
      pagesDirNode: "pages-dir-node"
    };
    var WEBPACK_LAYERS = {
      ...WEBPACK_LAYERS_NAMES,
      GROUP: {
        builtinReact: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.instrument,
          WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
          // pages api
          WEBPACK_LAYERS_NAMES.apiNode,
          WEBPACK_LAYERS_NAMES.apiEdge
        ],
        clientOnly: [
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser,
          WEBPACK_LAYERS_NAMES.shared,
          WEBPACK_LAYERS_NAMES.instrument,
          WEBPACK_LAYERS_NAMES.middleware
        ],
        appPages: [
          // app router pages and layouts
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser,
          WEBPACK_LAYERS_NAMES.actionBrowser
        ]
      }
    };
    var WEBPACK_RESOURCE_QUERIES = {
      edgeSSREntry: "__next_edge_ssr_entry__",
      metadata: "__next_metadata__",
      metadataRoute: "__next_metadata_route__",
      metadataImageMeta: "__next_metadata_image_meta__"
    };
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/utils.js
var require_utils = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      fromNodeOutgoingHttpHeaders: function() {
        return fromNodeOutgoingHttpHeaders;
      },
      normalizeNextQueryParam: function() {
        return normalizeNextQueryParam;
      },
      splitCookiesString: function() {
        return splitCookiesString;
      },
      toNodeOutgoingHttpHeaders: function() {
        return toNodeOutgoingHttpHeaders;
      },
      validateURL: function() {
        return validateURL;
      }
    });
    var _constants = require_constants();
    function fromNodeOutgoingHttpHeaders(nodeHeaders) {
      const headers = new Headers();
      for (let [key, value] of Object.entries(nodeHeaders)) {
        const values = Array.isArray(value) ? value : [
          value
        ];
        for (let v of values) {
          if (typeof v === "undefined")
            continue;
          if (typeof v === "number") {
            v = v.toString();
          }
          headers.append(key, v);
        }
      }
      return headers;
    }
    function splitCookiesString(cookiesString) {
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    function toNodeOutgoingHttpHeaders(headers) {
      const nodeHeaders = {};
      const cookies = [];
      if (headers) {
        for (const [key, value] of headers.entries()) {
          if (key.toLowerCase() === "set-cookie") {
            cookies.push(...splitCookiesString(value));
            nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
          } else {
            nodeHeaders[key] = value;
          }
        }
      }
      return nodeHeaders;
    }
    function validateURL(url) {
      try {
        return String(new URL(String(url)));
      } catch (error) {
        throw Object.defineProperty(new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
          cause: error
        }), "__NEXT_ERROR_CODE", {
          value: "E61",
          enumerable: false,
          configurable: true
        });
      }
    }
    function normalizeNextQueryParam(key) {
      const prefixes = [
        _constants.NEXT_QUERY_PARAM_PREFIX,
        _constants.NEXT_INTERCEPTION_MARKER_PREFIX
      ];
      for (const prefix of prefixes) {
        if (key !== prefix && key.startsWith(prefix)) {
          return key.substring(prefix.length);
        }
      }
      return null;
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/error.js
var require_error = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      PageSignatureError: function() {
        return PageSignatureError;
      },
      RemovedPageError: function() {
        return RemovedPageError;
      },
      RemovedUAError: function() {
        return RemovedUAError;
      }
    });
    var PageSignatureError = class extends Error {
      constructor({ page }) {
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
      }
    };
    var RemovedPageError = class extends Error {
      constructor() {
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
      }
    };
    var RemovedUAError = class extends Error {
      constructor() {
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
      }
    };
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js
var require_cookies = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js"(exports2, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export3 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports2 = {};
    __export3(src_exports2, {
      RequestCookies: () => RequestCookies,
      ResponseCookies: () => ResponseCookies,
      parseCookie: () => parseCookie,
      parseSetCookie: () => parseSetCookie,
      stringifyCookie: () => stringifyCookie
    });
    module2.exports = __toCommonJS2(src_exports2);
    function stringifyCookie(c) {
      var _a;
      const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
      ].filter(Boolean);
      const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
      return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
    }
    function parseCookie(cookie) {
      const map = /* @__PURE__ */ new Map();
      for (const pair of cookie.split(/; */)) {
        if (!pair)
          continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
          map.set(pair, "true");
          continue;
        }
        const [key, value] = [pair.slice(0, splitAt), pair.slice(splitAt + 1)];
        try {
          map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch {
        }
      }
      return map;
    }
    function parseSetCookie(setCookie) {
      if (!setCookie) {
        return void 0;
      }
      const [[name, value], ...attributes] = parseCookie(setCookie);
      const {
        domain,
        expires,
        httponly,
        maxage,
        path,
        samesite,
        secure,
        partitioned,
        priority
      } = Object.fromEntries(
        attributes.map(([key, value2]) => [
          key.toLowerCase().replace(/-/g, ""),
          value2
        ])
      );
      const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && { expires: new Date(expires) },
        ...httponly && { httpOnly: true },
        ...typeof maxage === "string" && { maxAge: Number(maxage) },
        path,
        ...samesite && { sameSite: parseSameSite(samesite) },
        ...secure && { secure: true },
        ...priority && { priority: parsePriority(priority) },
        ...partitioned && { partitioned: true }
      };
      return compact(cookie);
    }
    function compact(t) {
      const newT = {};
      for (const key in t) {
        if (t[key]) {
          newT[key] = t[key];
        }
      }
      return newT;
    }
    var SAME_SITE = ["strict", "lax", "none"];
    function parseSameSite(string) {
      string = string.toLowerCase();
      return SAME_SITE.includes(string) ? string : void 0;
    }
    var PRIORITY = ["low", "medium", "high"];
    function parsePriority(string) {
      string = string.toLowerCase();
      return PRIORITY.includes(string) ? string : void 0;
    }
    function splitCookiesString(cookiesString) {
      if (!cookiesString)
        return [];
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    var RequestCookies = class {
      constructor(requestHeaders) {
        this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
          const parsed = parseCookie(header);
          for (const [name, value] of parsed) {
            this._parsed.set(name, { name, value });
          }
        }
      }
      [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
      }
      /**
       * The amount of cookies received from the client
       */
      get size() {
        return this._parsed.size;
      }
      get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
      }
      getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
          return all.map(([_, value]) => value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n]) => n === name).map(([_, value]) => value);
      }
      has(name) {
        return this._parsed.has(name);
      }
      set(...args) {
        const [name, value] = args.length === 1 ? [args[0].name, args[0].value] : args;
        const map = this._parsed;
        map.set(name, { name, value });
        this._headers.set(
          "cookie",
          Array.from(map).map(([_, value2]) => stringifyCookie(value2)).join("; ")
        );
        return this;
      }
      /**
       * Delete the cookies matching the passed name or names in the request.
       */
      delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name) => map.delete(name));
        this._headers.set(
          "cookie",
          Array.from(map).map(([_, value]) => stringifyCookie(value)).join("; ")
        );
        return result;
      }
      /**
       * Delete all the cookies in the cookies in the request.
       */
      clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
      }
      /**
       * Format the cookies in the request as a string for logging
       */
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
      }
      toString() {
        return [...this._parsed.values()].map((v) => `${v.name}=${encodeURIComponent(v.value)}`).join("; ");
      }
    };
    var ResponseCookies = class {
      constructor(responseHeaders) {
        this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings) {
          const parsed = parseSetCookie(cookieString);
          if (parsed)
            this._parsed.set(parsed.name, parsed);
        }
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
       */
      get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
       */
      getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
          return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c) => c.name === key);
      }
      has(name) {
        return this._parsed.has(name);
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
       */
      set(...args) {
        const [name, value, cookie] = args.length === 1 ? [args[0].name, args[0].value, args[0]] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({ name, value, ...cookie }));
        replace(map, this._headers);
        return this;
      }
      /**
       * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
       */
      delete(...args) {
        const [name, options] = typeof args[0] === "string" ? [args[0]] : [args[0].name, args[0]];
        return this.set({ ...options, name, value: "", expires: /* @__PURE__ */ new Date(0) });
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
      }
      toString() {
        return [...this._parsed.values()].map(stringifyCookie).join("; ");
      }
    };
    function replace(bag, headers) {
      headers.delete("set-cookie");
      for (const [, value] of bag) {
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
      }
    }
    function normalizeCookie(cookie = { name: "", value: "" }) {
      if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
      }
      if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
      }
      if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
      }
      return cookie;
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/spec-extension/cookies.js
var require_cookies2 = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/spec-extension/cookies.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      RequestCookies: function() {
        return _cookies.RequestCookies;
      },
      ResponseCookies: function() {
        return _cookies.ResponseCookies;
      },
      stringifyCookie: function() {
        return _cookies.stringifyCookie;
      }
    });
    var _cookies = require_cookies();
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/spec-extension/request.js
var require_request = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/spec-extension/request.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      INTERNALS: function() {
        return INTERNALS;
      },
      NextRequest: function() {
        return NextRequest2;
      }
    });
    var _nexturl = require_next_url();
    var _utils = require_utils();
    var _error = require_error();
    var _cookies = require_cookies2();
    var INTERNALS = Symbol("internal request");
    var NextRequest2 = class extends Request {
      constructor(input, init = {}) {
        const url = typeof input !== "string" && "url" in input ? input.url : String(input);
        (0, _utils.validateURL)(url);
        if (process.env.NEXT_RUNTIME !== "edge") {
          if (init.body && init.duplex !== "half") {
            init.duplex = "half";
          }
        }
        if (input instanceof Request)
          super(input, init);
        else
          super(url, init);
        const nextUrl = new _nexturl.NextURL(url, {
          headers: (0, _utils.toNodeOutgoingHttpHeaders)(this.headers),
          nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
          cookies: new _cookies.RequestCookies(this.headers),
          nextUrl,
          url: process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? url : nextUrl.toString()
        };
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          cookies: this.cookies,
          nextUrl: this.nextUrl,
          url: this.url,
          // rest of props come from Request
          bodyUsed: this.bodyUsed,
          cache: this.cache,
          credentials: this.credentials,
          destination: this.destination,
          headers: Object.fromEntries(this.headers),
          integrity: this.integrity,
          keepalive: this.keepalive,
          method: this.method,
          mode: this.mode,
          redirect: this.redirect,
          referrer: this.referrer,
          referrerPolicy: this.referrerPolicy,
          signal: this.signal
        };
      }
      get cookies() {
        return this[INTERNALS].cookies;
      }
      get nextUrl() {
        return this[INTERNALS].nextUrl;
      }
      /**
      * @deprecated
      * `page` has been deprecated in favour of `URLPattern`.
      * Read more: https://nextjs.org/docs/messages/middleware-request-page
      */
      get page() {
        throw new _error.RemovedPageError();
      }
      /**
      * @deprecated
      * `ua` has been removed in favour of \`userAgent\` function.
      * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
      */
      get ua() {
        throw new _error.RemovedUAError();
      }
      get url() {
        return this[INTERNALS].url;
      }
    };
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js
var require_reflect = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/spec-extension/adapters/reflect.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "ReflectAdapter", {
      enumerable: true,
      get: function() {
        return ReflectAdapter;
      }
    });
    var ReflectAdapter = class {
      static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
          return value.bind(target);
        }
        return value;
      }
      static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
      }
      static has(target, prop) {
        return Reflect.has(target, prop);
      }
      static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
      }
    };
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/spec-extension/response.js
var require_response = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/spec-extension/response.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "NextResponse", {
      enumerable: true,
      get: function() {
        return NextResponse5;
      }
    });
    var _cookies = require_cookies2();
    var _nexturl = require_next_url();
    var _utils = require_utils();
    var _reflect = require_reflect();
    var _cookies1 = require_cookies2();
    var INTERNALS = Symbol("internal response");
    var REDIRECTS = /* @__PURE__ */ new Set([
      301,
      302,
      303,
      307,
      308
    ]);
    function handleMiddlewareField(init, headers) {
      var _init_request;
      if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
          throw Object.defineProperty(new Error("request.headers must be an instance of Headers"), "__NEXT_ERROR_CODE", {
            value: "E119",
            enumerable: false,
            configurable: true
          });
        }
        const keys = [];
        for (const [key, value] of init.request.headers) {
          headers.set("x-middleware-request-" + key, value);
          keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
      }
    }
    var NextResponse5 = class _NextResponse extends Response {
      constructor(body, init = {}) {
        super(body, init);
        const headers = this.headers;
        const cookies = new _cookies1.ResponseCookies(headers);
        const cookiesProxy = new Proxy(cookies, {
          get(target, prop, receiver) {
            switch (prop) {
              case "delete":
              case "set": {
                return (...args) => {
                  const result = Reflect.apply(target[prop], target, args);
                  const newHeaders = new Headers(headers);
                  if (result instanceof _cookies1.ResponseCookies) {
                    headers.set("x-middleware-set-cookie", result.getAll().map((cookie) => (0, _cookies.stringifyCookie)(cookie)).join(","));
                  }
                  handleMiddlewareField(init, newHeaders);
                  return result;
                };
              }
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
        this[INTERNALS] = {
          cookies: cookiesProxy,
          url: init.url ? new _nexturl.NextURL(init.url, {
            headers: (0, _utils.toNodeOutgoingHttpHeaders)(headers),
            nextConfig: init.nextConfig
          }) : void 0
        };
      }
      [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          cookies: this.cookies,
          url: this.url,
          // rest of props come from Response
          body: this.body,
          bodyUsed: this.bodyUsed,
          headers: Object.fromEntries(this.headers),
          ok: this.ok,
          redirected: this.redirected,
          status: this.status,
          statusText: this.statusText,
          type: this.type
        };
      }
      get cookies() {
        return this[INTERNALS].cookies;
      }
      static json(body, init) {
        const response = Response.json(body, init);
        return new _NextResponse(response.body, response);
      }
      static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
          throw Object.defineProperty(new RangeError('Failed to execute "redirect" on "response": Invalid status code'), "__NEXT_ERROR_CODE", {
            value: "E529",
            enumerable: false,
            configurable: true
          });
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0, _utils.validateURL)(url));
        return new _NextResponse(null, {
          ...initObj,
          headers,
          status
        });
      }
      static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0, _utils.validateURL)(destination));
        handleMiddlewareField(init, headers);
        return new _NextResponse(null, {
          ...init,
          headers
        });
      }
      static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new _NextResponse(null, {
          ...init,
          headers
        });
      }
    };
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/spec-extension/image-response.js
var require_image_response = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/spec-extension/image-response.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "ImageResponse", {
      enumerable: true,
      get: function() {
        return ImageResponse;
      }
    });
    function ImageResponse() {
      throw Object.defineProperty(new Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead'), "__NEXT_ERROR_CODE", {
        value: "E183",
        enumerable: false,
        configurable: true
      });
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/compiled/ua-parser-js/ua-parser.js
var require_ua_parser = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/compiled/ua-parser-js/ua-parser.js"(exports2, module2) {
    "use strict";
    (() => {
      var i = { 226: function(i2, e2) {
        (function(o2, a) {
          "use strict";
          var r = "1.0.35", t = "", n = "?", s = "function", b = "undefined", w = "object", l = "string", d = "major", c = "model", u = "name", p = "type", m = "vendor", f = "version", h = "architecture", v = "console", g = "mobile", k = "tablet", x = "smarttv", _ = "wearable", y = "embedded", q = 350;
          var T = "Amazon", S = "Apple", z2 = "ASUS", N = "BlackBerry", A = "Browser", C = "Chrome", E = "Edge", O = "Firefox", U = "Google", j = "Huawei", P = "LG", R = "Microsoft", M = "Motorola", B = "Opera", V = "Samsung", D = "Sharp", I = "Sony", W = "Viera", F = "Xiaomi", G = "Zebra", H = "Facebook", L = "Chromium OS", Z = "Mac OS";
          var extend = function(i3, e3) {
            var o3 = {};
            for (var a2 in i3) {
              if (e3[a2] && e3[a2].length % 2 === 0) {
                o3[a2] = e3[a2].concat(i3[a2]);
              } else {
                o3[a2] = i3[a2];
              }
            }
            return o3;
          }, enumerize = function(i3) {
            var e3 = {};
            for (var o3 = 0; o3 < i3.length; o3++) {
              e3[i3[o3].toUpperCase()] = i3[o3];
            }
            return e3;
          }, has = function(i3, e3) {
            return typeof i3 === l ? lowerize(e3).indexOf(lowerize(i3)) !== -1 : false;
          }, lowerize = function(i3) {
            return i3.toLowerCase();
          }, majorize = function(i3) {
            return typeof i3 === l ? i3.replace(/[^\d\.]/g, t).split(".")[0] : a;
          }, trim = function(i3, e3) {
            if (typeof i3 === l) {
              i3 = i3.replace(/^\s\s*/, t);
              return typeof e3 === b ? i3 : i3.substring(0, q);
            }
          };
          var rgxMapper = function(i3, e3) {
            var o3 = 0, r2, t2, n2, b2, l2, d2;
            while (o3 < e3.length && !l2) {
              var c2 = e3[o3], u2 = e3[o3 + 1];
              r2 = t2 = 0;
              while (r2 < c2.length && !l2) {
                if (!c2[r2]) {
                  break;
                }
                l2 = c2[r2++].exec(i3);
                if (!!l2) {
                  for (n2 = 0; n2 < u2.length; n2++) {
                    d2 = l2[++t2];
                    b2 = u2[n2];
                    if (typeof b2 === w && b2.length > 0) {
                      if (b2.length === 2) {
                        if (typeof b2[1] == s) {
                          this[b2[0]] = b2[1].call(this, d2);
                        } else {
                          this[b2[0]] = b2[1];
                        }
                      } else if (b2.length === 3) {
                        if (typeof b2[1] === s && !(b2[1].exec && b2[1].test)) {
                          this[b2[0]] = d2 ? b2[1].call(this, d2, b2[2]) : a;
                        } else {
                          this[b2[0]] = d2 ? d2.replace(b2[1], b2[2]) : a;
                        }
                      } else if (b2.length === 4) {
                        this[b2[0]] = d2 ? b2[3].call(this, d2.replace(b2[1], b2[2])) : a;
                      }
                    } else {
                      this[b2] = d2 ? d2 : a;
                    }
                  }
                }
              }
              o3 += 2;
            }
          }, strMapper = function(i3, e3) {
            for (var o3 in e3) {
              if (typeof e3[o3] === w && e3[o3].length > 0) {
                for (var r2 = 0; r2 < e3[o3].length; r2++) {
                  if (has(e3[o3][r2], i3)) {
                    return o3 === n ? a : o3;
                  }
                }
              } else if (has(e3[o3], i3)) {
                return o3 === n ? a : o3;
              }
            }
            return i3;
          };
          var $ = { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, X = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" };
          var K = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [f, [u, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [f, [u, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [u, f], [/opios[\/ ]+([\w\.]+)/i], [f, [u, B + " Mini"]], [/\bopr\/([\w\.]+)/i], [f, [u, B]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [u, f], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [f, [u, "UC" + A]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [f, [u, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [f, [u, "WeChat"]], [/konqueror\/([\w\.]+)/i], [f, [u, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [f, [u, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [f, [u, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[u, /(.+)/, "$1 Secure " + A], f], [/\bfocus\/([\w\.]+)/i], [f, [u, O + " Focus"]], [/\bopt\/([\w\.]+)/i], [f, [u, B + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [f, [u, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [f, [u, "Dolphin"]], [/coast\/([\w\.]+)/i], [f, [u, B + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [f, [u, "MIUI " + A]], [/fxios\/([-\w\.]+)/i], [f, [u, O]], [/\bqihu|(qi?ho?o?|360)browser/i], [[u, "360 " + A]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[u, /(.+)/, "$1 " + A], f], [/(comodo_dragon)\/([\w\.]+)/i], [[u, /_/g, " "], f], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [u, f], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [u], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[u, H], f], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [u, f], [/\bgsa\/([\w\.]+) .*safari\//i], [f, [u, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [f, [u, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [f, [u, C + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[u, C + " WebView"], f], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [f, [u, "Android " + A]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [u, f], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [f, [u, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [f, u], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [u, [f, strMapper, $]], [/(webkit|khtml)\/([\w\.]+)/i], [u, f], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[u, "Netscape"], f], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [f, [u, O + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [u, f], [/(cobalt)\/([\w\.]+)/i], [u, [f, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[h, "amd64"]], [/(ia32(?=;))/i], [[h, lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[h, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[h, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[h, "armhf"]], [/windows (ce|mobile); ppc;/i], [[h, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[h, /ower/, t, lowerize]], [/(sun4\w)[;\)]/i], [[h, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[h, lowerize]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [c, [m, V], [p, k]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [c, [m, V], [p, g]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [c, [m, S], [p, g]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [c, [m, S], [p, k]], [/(macintosh);/i], [c, [m, S]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [c, [m, D], [p, g]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [c, [m, j], [p, k]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [c, [m, j], [p, g]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[c, /_/g, " "], [m, F], [p, g]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[c, /_/g, " "], [m, F], [p, k]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [c, [m, "OPPO"], [p, g]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [c, [m, "Vivo"], [p, g]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [c, [m, "Realme"], [p, g]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [c, [m, M], [p, g]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [c, [m, M], [p, k]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [c, [m, P], [p, k]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [c, [m, P], [p, g]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [c, [m, "Lenovo"], [p, k]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[c, /_/g, " "], [m, "Nokia"], [p, g]], [/(pixel c)\b/i], [c, [m, U], [p, k]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [c, [m, U], [p, g]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [m, I], [p, g]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[c, "Xperia Tablet"], [m, I], [p, k]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [c, [m, "OnePlus"], [p, g]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [c, [m, T], [p, k]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[c, /(.+)/g, "Fire Phone $1"], [m, T], [p, g]], [/(playbook);[-\w\),; ]+(rim)/i], [c, m, [p, k]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [c, [m, N], [p, g]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [c, [m, z2], [p, k]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [c, [m, z2], [p, g]], [/(nexus 9)/i], [c, [m, "HTC"], [p, k]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [m, [c, /_/g, " "], [p, g]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [c, [m, "Acer"], [p, k]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [c, [m, "Meizu"], [p, g]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [m, c, [p, g]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [m, c, [p, k]], [/(surface duo)/i], [c, [m, R], [p, k]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [c, [m, "Fairphone"], [p, g]], [/(u304aa)/i], [c, [m, "AT&T"], [p, g]], [/\bsie-(\w*)/i], [c, [m, "Siemens"], [p, g]], [/\b(rct\w+) b/i], [c, [m, "RCA"], [p, k]], [/\b(venue[\d ]{2,7}) b/i], [c, [m, "Dell"], [p, k]], [/\b(q(?:mv|ta)\w+) b/i], [c, [m, "Verizon"], [p, k]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [c, [m, "Barnes & Noble"], [p, k]], [/\b(tm\d{3}\w+) b/i], [c, [m, "NuVision"], [p, k]], [/\b(k88) b/i], [c, [m, "ZTE"], [p, k]], [/\b(nx\d{3}j) b/i], [c, [m, "ZTE"], [p, g]], [/\b(gen\d{3}) b.+49h/i], [c, [m, "Swiss"], [p, g]], [/\b(zur\d{3}) b/i], [c, [m, "Swiss"], [p, k]], [/\b((zeki)?tb.*\b) b/i], [c, [m, "Zeki"], [p, k]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[m, "Dragon Touch"], c, [p, k]], [/\b(ns-?\w{0,9}) b/i], [c, [m, "Insignia"], [p, k]], [/\b((nxa|next)-?\w{0,9}) b/i], [c, [m, "NextBook"], [p, k]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[m, "Voice"], c, [p, g]], [/\b(lvtel\-)?(v1[12]) b/i], [[m, "LvTel"], c, [p, g]], [/\b(ph-1) /i], [c, [m, "Essential"], [p, g]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [c, [m, "Envizen"], [p, k]], [/\b(trio[-\w\. ]+) b/i], [c, [m, "MachSpeed"], [p, k]], [/\btu_(1491) b/i], [c, [m, "Rotor"], [p, k]], [/(shield[\w ]+) b/i], [c, [m, "Nvidia"], [p, k]], [/(sprint) (\w+)/i], [m, c, [p, g]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [m, R], [p, g]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [c, [m, G], [p, k]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [c, [m, G], [p, g]], [/smart-tv.+(samsung)/i], [m, [p, x]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [m, V], [p, x]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[m, P], [p, x]], [/(apple) ?tv/i], [m, [c, S + " TV"], [p, x]], [/crkey/i], [[c, C + "cast"], [m, U], [p, x]], [/droid.+aft(\w)( bui|\))/i], [c, [m, T], [p, x]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [c, [m, D], [p, x]], [/(bravia[\w ]+)( bui|\))/i], [c, [m, I], [p, x]], [/(mitv-\w{5}) bui/i], [c, [m, F], [p, x]], [/Hbbtv.*(technisat) (.*);/i], [m, c, [p, x]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[m, trim], [c, trim], [p, x]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[p, x]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [m, c, [p, v]], [/droid.+; (shield) bui/i], [c, [m, "Nvidia"], [p, v]], [/(playstation [345portablevi]+)/i], [c, [m, I], [p, v]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [c, [m, R], [p, v]], [/((pebble))app/i], [m, c, [p, _]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [c, [m, S], [p, _]], [/droid.+; (glass) \d/i], [c, [m, U], [p, _]], [/droid.+; (wt63?0{2,3})\)/i], [c, [m, G], [p, _]], [/(quest( 2| pro)?)/i], [c, [m, H], [p, _]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [m, [p, y]], [/(aeobc)\b/i], [c, [m, T], [p, y]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [c, [p, g]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [c, [p, k]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[p, k]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[p, g]], [/(android[-\w\. ]{0,9});.+buil/i], [c, [m, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [f, [u, E + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [f, [u, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [u, f], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [f, u]], os: [[/microsoft (windows) (vista|xp)/i], [u, f], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [u, [f, strMapper, X]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[u, "Windows"], [f, strMapper, X]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[f, /_/g, "."], [u, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[u, Z], [f, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [f, u], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [u, f], [/\(bb(10);/i], [f, [u, N]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [f, [u, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [f, [u, O + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [f, [u, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [f, [u, "watchOS"]], [/crkey\/([\d\.]+)/i], [f, [u, C + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[u, L], f], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [u, f], [/(sunos) ?([\w\.\d]*)/i], [[u, "Solaris"], f], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [u, f]] };
          var UAParser = function(i3, e3) {
            if (typeof i3 === w) {
              e3 = i3;
              i3 = a;
            }
            if (!(this instanceof UAParser)) {
              return new UAParser(i3, e3).getResult();
            }
            var r2 = typeof o2 !== b && o2.navigator ? o2.navigator : a;
            var n2 = i3 || (r2 && r2.userAgent ? r2.userAgent : t);
            var v2 = r2 && r2.userAgentData ? r2.userAgentData : a;
            var x2 = e3 ? extend(K, e3) : K;
            var _2 = r2 && r2.userAgent == n2;
            this.getBrowser = function() {
              var i4 = {};
              i4[u] = a;
              i4[f] = a;
              rgxMapper.call(i4, n2, x2.browser);
              i4[d] = majorize(i4[f]);
              if (_2 && r2 && r2.brave && typeof r2.brave.isBrave == s) {
                i4[u] = "Brave";
              }
              return i4;
            };
            this.getCPU = function() {
              var i4 = {};
              i4[h] = a;
              rgxMapper.call(i4, n2, x2.cpu);
              return i4;
            };
            this.getDevice = function() {
              var i4 = {};
              i4[m] = a;
              i4[c] = a;
              i4[p] = a;
              rgxMapper.call(i4, n2, x2.device);
              if (_2 && !i4[p] && v2 && v2.mobile) {
                i4[p] = g;
              }
              if (_2 && i4[c] == "Macintosh" && r2 && typeof r2.standalone !== b && r2.maxTouchPoints && r2.maxTouchPoints > 2) {
                i4[c] = "iPad";
                i4[p] = k;
              }
              return i4;
            };
            this.getEngine = function() {
              var i4 = {};
              i4[u] = a;
              i4[f] = a;
              rgxMapper.call(i4, n2, x2.engine);
              return i4;
            };
            this.getOS = function() {
              var i4 = {};
              i4[u] = a;
              i4[f] = a;
              rgxMapper.call(i4, n2, x2.os);
              if (_2 && !i4[u] && v2 && v2.platform != "Unknown") {
                i4[u] = v2.platform.replace(/chrome os/i, L).replace(/macos/i, Z);
              }
              return i4;
            };
            this.getResult = function() {
              return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
            };
            this.getUA = function() {
              return n2;
            };
            this.setUA = function(i4) {
              n2 = typeof i4 === l && i4.length > q ? trim(i4, q) : i4;
              return this;
            };
            this.setUA(n2);
            return this;
          };
          UAParser.VERSION = r;
          UAParser.BROWSER = enumerize([u, f, d]);
          UAParser.CPU = enumerize([h]);
          UAParser.DEVICE = enumerize([c, m, p, v, g, x, k, _, y]);
          UAParser.ENGINE = UAParser.OS = enumerize([u, f]);
          if (typeof e2 !== b) {
            if ("object" !== b && i2.exports) {
              e2 = i2.exports = UAParser;
            }
            e2.UAParser = UAParser;
          } else {
            if (typeof define === s && define.amd) {
              define(function() {
                return UAParser;
              });
            } else if (typeof o2 !== b) {
              o2.UAParser = UAParser;
            }
          }
          var Q = typeof o2 !== b && (o2.jQuery || o2.Zepto);
          if (Q && !Q.ua) {
            var Y = new UAParser();
            Q.ua = Y.getResult();
            Q.ua.get = function() {
              return Y.getUA();
            };
            Q.ua.set = function(i3) {
              Y.setUA(i3);
              var e3 = Y.getResult();
              for (var o3 in e3) {
                Q.ua[o3] = e3[o3];
              }
            };
          }
        })(typeof window === "object" ? window : this);
      } };
      var e = {};
      function __nccwpck_require__(o2) {
        var a = e[o2];
        if (a !== void 0) {
          return a.exports;
        }
        var r = e[o2] = { exports: {} };
        var t = true;
        try {
          i[o2].call(r.exports, r, r.exports, __nccwpck_require__);
          t = false;
        } finally {
          if (t)
            delete e[o2];
        }
        return r.exports;
      }
      if (typeof __nccwpck_require__ !== "undefined")
        __nccwpck_require__.ab = +"/";
      var o = __nccwpck_require__(226);
      module2.exports = o;
    })();
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/spec-extension/user-agent.js
var require_user_agent = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/spec-extension/user-agent.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      isBot: function() {
        return isBot;
      },
      userAgent: function() {
        return userAgent;
      },
      userAgentFromString: function() {
        return userAgentFromString;
      }
    });
    var _uaparserjs = /* @__PURE__ */ _interop_require_default(require_ua_parser());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function isBot(input) {
      return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(input);
    }
    function userAgentFromString(input) {
      return {
        ...(0, _uaparserjs.default)(input),
        isBot: input === void 0 ? false : isBot(input)
      };
    }
    function userAgent({ headers }) {
      return userAgentFromString(headers.get("user-agent") || void 0);
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/spec-extension/url-pattern.js
var require_url_pattern = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/web/spec-extension/url-pattern.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "URLPattern", {
      enumerable: true,
      get: function() {
        return GlobalURLPattern;
      }
    });
    var GlobalURLPattern = (
      // @ts-expect-error: URLPattern is not available in Node.js
      typeof URLPattern === "undefined" ? void 0 : URLPattern
    );
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/async-local-storage.js
var require_async_local_storage = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/async-local-storage.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      bindSnapshot: function() {
        return bindSnapshot;
      },
      createAsyncLocalStorage: function() {
        return createAsyncLocalStorage;
      },
      createSnapshot: function() {
        return createSnapshot;
      }
    });
    var sharedAsyncLocalStorageNotAvailableError = Object.defineProperty(new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
      value: "E504",
      enumerable: false,
      configurable: true
    });
    var FakeAsyncLocalStorage = class {
      disable() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      getStore() {
        return void 0;
      }
      run() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      exit() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      enterWith() {
        throw sharedAsyncLocalStorageNotAvailableError;
      }
      static bind(fn) {
        return fn;
      }
    };
    var maybeGlobalAsyncLocalStorage = typeof globalThis !== "undefined" && globalThis.AsyncLocalStorage;
    function createAsyncLocalStorage() {
      if (maybeGlobalAsyncLocalStorage) {
        return new maybeGlobalAsyncLocalStorage();
      }
      return new FakeAsyncLocalStorage();
    }
    function bindSnapshot(fn) {
      if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.bind(fn);
      }
      return FakeAsyncLocalStorage.bind(fn);
    }
    function createSnapshot() {
      if (maybeGlobalAsyncLocalStorage) {
        return maybeGlobalAsyncLocalStorage.snapshot();
      }
      return function(fn, ...args) {
        return fn(...args);
      };
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/work-async-storage-instance.js
var require_work_async_storage_instance = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/work-async-storage-instance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "workAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return workAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var workAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/work-async-storage.external.js
var require_work_async_storage_external = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/work-async-storage.external.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "workAsyncStorage", {
      enumerable: true,
      get: function() {
        return _workasyncstorageinstance.workAsyncStorageInstance;
      }
    });
    var _workasyncstorageinstance = require_work_async_storage_instance();
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/after/after.js
var require_after = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/after/after.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "after", {
      enumerable: true,
      get: function() {
        return after;
      }
    });
    var _workasyncstorageexternal = require_work_async_storage_external();
    function after(task) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      if (!workStore) {
        throw Object.defineProperty(new Error("`after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context"), "__NEXT_ERROR_CODE", {
          value: "E468",
          enumerable: false,
          configurable: true
        });
      }
      const { afterContext } = workStore;
      return afterContext.after(task);
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/after/index.js
var require_after2 = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/after/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    _export_star(require_after(), exports2);
    function _export_star(from, to) {
      Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
          Object.defineProperty(to, k, {
            enumerable: true,
            get: function() {
              return from[k];
            }
          });
        }
      });
      return from;
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js
var require_work_unit_async_storage_instance = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/work-unit-async-storage-instance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "workUnitAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return workUnitAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var workUnitAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/client/components/app-router-headers.js
var require_app_router_headers = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/client/components/app-router-headers.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      ACTION_HEADER: function() {
        return ACTION_HEADER;
      },
      FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
      },
      NEXT_ACTION_NOT_FOUND_HEADER: function() {
        return NEXT_ACTION_NOT_FOUND_HEADER;
      },
      NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
      },
      NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return NEXT_HMR_REFRESH_HASH_COOKIE;
      },
      NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
      },
      NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
      },
      NEXT_REWRITTEN_PATH_HEADER: function() {
        return NEXT_REWRITTEN_PATH_HEADER;
      },
      NEXT_REWRITTEN_QUERY_HEADER: function() {
        return NEXT_REWRITTEN_QUERY_HEADER;
      },
      NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
      },
      NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
      },
      NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
      },
      NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
      },
      NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
      },
      NEXT_URL: function() {
        return NEXT_URL;
      },
      RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
      },
      RSC_HEADER: function() {
        return RSC_HEADER;
      }
    });
    var RSC_HEADER = "RSC";
    var ACTION_HEADER = "Next-Action";
    var NEXT_ROUTER_STATE_TREE_HEADER = "Next-Router-State-Tree";
    var NEXT_ROUTER_PREFETCH_HEADER = "Next-Router-Prefetch";
    var NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = "Next-Router-Segment-Prefetch";
    var NEXT_HMR_REFRESH_HEADER = "Next-HMR-Refresh";
    var NEXT_HMR_REFRESH_HASH_COOKIE = "__next_hmr_refresh_hash__";
    var NEXT_URL = "Next-Url";
    var RSC_CONTENT_TYPE_HEADER = "text/x-component";
    var FLIGHT_HEADERS = [
      RSC_HEADER,
      NEXT_ROUTER_STATE_TREE_HEADER,
      NEXT_ROUTER_PREFETCH_HEADER,
      NEXT_HMR_REFRESH_HEADER,
      NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
    ];
    var NEXT_RSC_UNION_QUERY = "_rsc";
    var NEXT_ROUTER_STALE_TIME_HEADER = "x-nextjs-stale-time";
    var NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed";
    var NEXT_REWRITTEN_PATH_HEADER = "x-nextjs-rewritten-path";
    var NEXT_REWRITTEN_QUERY_HEADER = "x-nextjs-rewritten-query";
    var NEXT_IS_PRERENDER_HEADER = "x-nextjs-prerender";
    var NEXT_ACTION_NOT_FOUND_HEADER = "x-nextjs-action-not-found";
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js
var require_work_unit_async_storage_external = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/work-unit-async-storage.external.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      getDraftModeProviderForCacheScope: function() {
        return getDraftModeProviderForCacheScope;
      },
      getExpectedRequestStore: function() {
        return getExpectedRequestStore;
      },
      getHmrRefreshHash: function() {
        return getHmrRefreshHash;
      },
      getPrerenderResumeDataCache: function() {
        return getPrerenderResumeDataCache;
      },
      getRenderResumeDataCache: function() {
        return getRenderResumeDataCache;
      },
      throwForMissingRequestStore: function() {
        return throwForMissingRequestStore;
      },
      workUnitAsyncStorage: function() {
        return _workunitasyncstorageinstance.workUnitAsyncStorageInstance;
      }
    });
    var _workunitasyncstorageinstance = require_work_unit_async_storage_instance();
    var _approuterheaders = require_app_router_headers();
    function getExpectedRequestStore(callingExpression) {
      const workUnitStore = _workunitasyncstorageinstance.workUnitAsyncStorageInstance.getStore();
      if (!workUnitStore) {
        throwForMissingRequestStore(callingExpression);
      }
      switch (workUnitStore.type) {
        case "request":
          return workUnitStore;
        case "prerender":
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
          throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside a prerender. This is a bug in Next.js.`), "__NEXT_ERROR_CODE", {
            value: "E401",
            enumerable: false,
            configurable: true
          });
        case "cache":
          throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
            value: "E37",
            enumerable: false,
            configurable: true
          });
        case "unstable-cache":
          throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
            value: "E69",
            enumerable: false,
            configurable: true
          });
        default:
          const _exhaustiveCheck = workUnitStore;
          return _exhaustiveCheck;
      }
    }
    function throwForMissingRequestStore(callingExpression) {
      throw Object.defineProperty(new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
        value: "E251",
        enumerable: false,
        configurable: true
      });
    }
    function getPrerenderResumeDataCache(workUnitStore) {
      if (workUnitStore.type === "prerender" || // TODO eliminate fetch caching in client scope and stop exposing this data cache during SSR
      workUnitStore.type === "prerender-client" || workUnitStore.type === "prerender-ppr") {
        return workUnitStore.prerenderResumeDataCache;
      }
      return null;
    }
    function getRenderResumeDataCache(workUnitStore) {
      switch (workUnitStore.type) {
        case "request":
          return workUnitStore.renderResumeDataCache;
        case "prerender":
        case "prerender-client":
          if (workUnitStore.renderResumeDataCache) {
            return workUnitStore.renderResumeDataCache;
          }
        case "prerender-ppr":
          return workUnitStore.prerenderResumeDataCache;
        default:
          return null;
      }
    }
    function getHmrRefreshHash(workStore, workUnitStore) {
      var _workUnitStore_cookies_get;
      if (!workStore.dev) {
        return void 0;
      }
      return workUnitStore.type === "cache" || workUnitStore.type === "prerender" ? workUnitStore.hmrRefreshHash : workUnitStore.type === "request" ? (_workUnitStore_cookies_get = workUnitStore.cookies.get(_approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE)) == null ? void 0 : _workUnitStore_cookies_get.value : void 0;
    }
    function getDraftModeProviderForCacheScope(workStore, workUnitStore) {
      if (workStore.isDraftMode) {
        switch (workUnitStore.type) {
          case "cache":
          case "unstable-cache":
          case "request":
            return workUnitStore.draftMode;
          default:
            return void 0;
        }
      }
      return void 0;
    }
  }
});

// ../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(exports2) {
    "use strict";
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z2 = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = z2 && a[z2] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b)
        for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)
          J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g)
        c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++)
          f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps)
        for (d in g = a.defaultProps, g)
          void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k)
        a = null;
      var h = false;
      if (null === a)
        h = true;
      else
        switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
      if (h)
        return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
      else if (f = A(a), "function" === typeof f)
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k)
        throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a)
        return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status)
        return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    exports2.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports2.Component = E;
    exports2.Fragment = p;
    exports2.Profiler = r;
    exports2.PureComponent = G;
    exports2.StrictMode = q;
    exports2.Suspense = w;
    exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports2.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g = a.type.defaultProps;
        for (f in b)
          J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f)
        d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++)
          g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports2.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports2.createElement = M;
    exports2.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports2.createRef = function() {
      return { current: null };
    };
    exports2.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports2.isValidElement = O;
    exports2.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports2.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports2.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports2.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    exports2.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports2.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports2.useDebugValue = function() {
    };
    exports2.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports2.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports2.useId = function() {
      return U.current.useId();
    };
    exports2.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports2.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports2.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports2.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports2.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports2.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports2.useState = function(a) {
      return U.current.useState(a);
    };
    exports2.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports2.useTransition = function() {
      return U.current.useTransition();
    };
    exports2.version = "18.2.0";
  }
});

// ../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module2 && module2[requireString];
              enqueueTaskImpl = nodeRequire.call(module2, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports2.Children = Children;
        exports2.Component = Component;
        exports2.Fragment = REACT_FRAGMENT_TYPE;
        exports2.Profiler = REACT_PROFILER_TYPE;
        exports2.PureComponent = PureComponent;
        exports2.StrictMode = REACT_STRICT_MODE_TYPE;
        exports2.Suspense = REACT_SUSPENSE_TYPE;
        exports2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports2.cloneElement = cloneElement$1;
        exports2.createContext = createContext;
        exports2.createElement = createElement$1;
        exports2.createFactory = createFactory;
        exports2.createRef = createRef;
        exports2.forwardRef = forwardRef;
        exports2.isValidElement = isValidElement;
        exports2.lazy = lazy;
        exports2.memo = memo;
        exports2.startTransition = startTransition;
        exports2.unstable_act = act;
        exports2.useCallback = useCallback;
        exports2.useContext = useContext;
        exports2.useDebugValue = useDebugValue;
        exports2.useDeferredValue = useDeferredValue;
        exports2.useEffect = useEffect;
        exports2.useId = useId;
        exports2.useImperativeHandle = useImperativeHandle;
        exports2.useInsertionEffect = useInsertionEffect;
        exports2.useLayoutEffect = useLayoutEffect;
        exports2.useMemo = useMemo;
        exports2.useReducer = useReducer;
        exports2.useRef = useRef;
        exports2.useState = useState;
        exports2.useSyncExternalStore = useSyncExternalStore;
        exports2.useTransition = useTransition;
        exports2.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// ../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var require_react = __commonJS({
  "../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(exports2, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_react_production_min();
    } else {
      module2.exports = require_react_development();
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/client/components/hooks-server-context.js
var require_hooks_server_context = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/client/components/hooks-server-context.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      DynamicServerError: function() {
        return DynamicServerError;
      },
      isDynamicServerError: function() {
        return isDynamicServerError;
      }
    });
    var DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
    var DynamicServerError = class extends Error {
      constructor(description) {
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
      }
    };
    function isDynamicServerError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err) || typeof err.digest !== "string") {
        return false;
      }
      return err.digest === DYNAMIC_ERROR_CODE;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/client/components/static-generation-bailout.js
var require_static_generation_bailout = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/client/components/static-generation-bailout.js"(exports2, module2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      StaticGenBailoutError: function() {
        return StaticGenBailoutError;
      },
      isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
      }
    });
    var NEXT_STATIC_GEN_BAILOUT = "NEXT_STATIC_GEN_BAILOUT";
    var StaticGenBailoutError = class extends Error {
      constructor(...args) {
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
      }
    };
    function isStaticGenBailoutError(error) {
      if (typeof error !== "object" || error === null || !("code" in error)) {
        return false;
      }
      return error.code === NEXT_STATIC_GEN_BAILOUT;
    }
    if ((typeof exports2.default === "function" || typeof exports2.default === "object" && exports2.default !== null) && typeof exports2.default.__esModule === "undefined") {
      Object.defineProperty(exports2.default, "__esModule", { value: true });
      Object.assign(exports2.default, exports2);
      module2.exports = exports2.default;
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/dynamic-rendering-utils.js
var require_dynamic_rendering_utils = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/dynamic-rendering-utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
      },
      makeHangingPromise: function() {
        return makeHangingPromise;
      }
    });
    function isHangingPromiseRejectionError(err) {
      if (typeof err !== "object" || err === null || !("digest" in err)) {
        return false;
      }
      return err.digest === HANGING_PROMISE_REJECTION;
    }
    var HANGING_PROMISE_REJECTION = "HANGING_PROMISE_REJECTION";
    var HangingPromiseRejectionError = class extends Error {
      constructor(expression) {
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`), this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
      }
    };
    var abortListenersBySignal = /* @__PURE__ */ new WeakMap();
    function makeHangingPromise(signal, expression) {
      if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(expression));
      } else {
        const hangingPromise = new Promise((_, reject) => {
          const boundRejection = reject.bind(null, new HangingPromiseRejectionError(expression));
          let currentListeners = abortListenersBySignal.get(signal);
          if (currentListeners) {
            currentListeners.push(boundRejection);
          } else {
            const listeners = [
              boundRejection
            ];
            abortListenersBySignal.set(signal, listeners);
            signal.addEventListener("abort", () => {
              for (let i = 0; i < listeners.length; i++) {
                listeners[i]();
              }
            }, {
              once: true
            });
          }
        });
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
      }
    }
    function ignoreReject() {
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/lib/metadata/metadata-constants.js
var require_metadata_constants = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/lib/metadata/metadata-constants.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
      },
      OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
      },
      VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
      }
    });
    var METADATA_BOUNDARY_NAME = "__next_metadata_boundary__";
    var VIEWPORT_BOUNDARY_NAME = "__next_viewport_boundary__";
    var OUTLET_BOUNDARY_NAME = "__next_outlet_boundary__";
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/lib/scheduler.js
var require_scheduler = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/lib/scheduler.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      atLeastOneTask: function() {
        return atLeastOneTask;
      },
      scheduleImmediate: function() {
        return scheduleImmediate;
      },
      scheduleOnNextTick: function() {
        return scheduleOnNextTick;
      },
      waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
      }
    });
    var scheduleOnNextTick = (cb) => {
      Promise.resolve().then(() => {
        if (process.env.NEXT_RUNTIME === "edge") {
          setTimeout(cb, 0);
        } else {
          process.nextTick(cb);
        }
      });
    };
    var scheduleImmediate = (cb) => {
      if (process.env.NEXT_RUNTIME === "edge") {
        setTimeout(cb, 0);
      } else {
        setImmediate(cb);
      }
    };
    function atLeastOneTask() {
      return new Promise((resolve) => scheduleImmediate(resolve));
    }
    function waitAtLeastOneReactRenderTask() {
      if (process.env.NEXT_RUNTIME === "edge") {
        return new Promise((r) => setTimeout(r, 0));
      } else {
        return new Promise((r) => setImmediate(r));
      }
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/dynamic-rendering.js
var require_dynamic_rendering = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/dynamic-rendering.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      Postpone: function() {
        return Postpone;
      },
      PreludeState: function() {
        return PreludeState;
      },
      abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
      },
      abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
      },
      accessedDynamicData: function() {
        return accessedDynamicData;
      },
      annotateDynamicAccess: function() {
        return annotateDynamicAccess;
      },
      consumeDynamicAccess: function() {
        return consumeDynamicAccess;
      },
      createDynamicTrackingState: function() {
        return createDynamicTrackingState;
      },
      createDynamicValidationState: function() {
        return createDynamicValidationState;
      },
      createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
      },
      createPostponedAbortSignal: function() {
        return createPostponedAbortSignal;
      },
      formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
      },
      getFirstDynamicReason: function() {
        return getFirstDynamicReason;
      },
      isDynamicPostpone: function() {
        return isDynamicPostpone;
      },
      isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
      },
      markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
      },
      postponeWithTracking: function() {
        return postponeWithTracking;
      },
      throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
      },
      throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
      },
      trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
      },
      trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
      },
      trackFallbackParamAccessed: function() {
        return trackFallbackParamAccessed;
      },
      trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
      },
      trackSynchronousRequestDataAccessInDev: function() {
        return trackSynchronousRequestDataAccessInDev;
      },
      useDynamicRouteParams: function() {
        return useDynamicRouteParams;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
    var _hooksservercontext = require_hooks_server_context();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _metadataconstants = require_metadata_constants();
    var _scheduler = require_scheduler();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var hasPostpone = typeof _react.default.unstable_postpone === "function";
    function createDynamicTrackingState(isDebugDynamicAccesses) {
      return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
      };
    }
    function createDynamicValidationState() {
      return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
      };
    }
    function getFirstDynamicReason(trackingState) {
      var _trackingState_dynamicAccesses_;
      return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
    }
    function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
      if (workUnitStore) {
        if (workUnitStore.type === "cache" || workUnitStore.type === "unstable-cache") {
          return;
        }
      }
      if (store.forceDynamic || store.forceStatic)
        return;
      if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
          value: "E553",
          enumerable: false,
          configurable: true
        });
      }
      if (workUnitStore) {
        if (workUnitStore.type === "prerender-ppr") {
          postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
        } else if (workUnitStore.type === "prerender-legacy") {
          workUnitStore.revalidate = 0;
          const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
            value: "E550",
            enumerable: false,
            configurable: true
          });
          store.dynamicUsageDescription = expression;
          store.dynamicUsageStack = err.stack;
          throw err;
        } else if (process.env.NODE_ENV === "development" && workUnitStore && workUnitStore.type === "request") {
          workUnitStore.usedDynamic = true;
        }
      }
    }
    function trackFallbackParamAccessed(store, expression) {
      const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (!prerenderStore || prerenderStore.type !== "prerender-ppr")
        return;
      postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
    }
    function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
      const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
      });
      prerenderStore.revalidate = 0;
      store.dynamicUsageDescription = expression;
      store.dynamicUsageStack = err.stack;
      throw err;
    }
    function trackDynamicDataInDynamicRender(_store, workUnitStore) {
      if (workUnitStore) {
        if (workUnitStore.type === "cache" || workUnitStore.type === "unstable-cache") {
          return;
        }
        if (workUnitStore.type === "prerender" || workUnitStore.type === "prerender-client" || workUnitStore.type === "prerender-legacy") {
          workUnitStore.revalidate = 0;
        }
        if (process.env.NODE_ENV === "development" && workUnitStore.type === "request") {
          workUnitStore.usedDynamic = true;
        }
      }
    }
    function abortOnSynchronousDynamicDataAccess(route2, expression, prerenderStore) {
      const reason = `Route ${route2} needs to bail out of prerendering at this point because it used ${expression}.`;
      const error = createPrerenderInterruptedError(reason);
      prerenderStore.controller.abort(error);
      const dynamicTracking = prerenderStore.dynamicTracking;
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          // When we aren't debugging, we don't need to create another error for the
          // stack trace.
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
    }
    function abortOnSynchronousPlatformIOAccess(route2, expression, errorWithStack, prerenderStore) {
      const dynamicTracking = prerenderStore.dynamicTracking;
      abortOnSynchronousDynamicDataAccess(route2, expression, prerenderStore);
      if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
          dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
      }
    }
    function trackSynchronousPlatformIOAccessInDev(requestStore) {
      requestStore.prerenderPhase = false;
    }
    function abortAndThrowOnSynchronousRequestDataAccess(route2, expression, errorWithStack, prerenderStore) {
      const prerenderSignal = prerenderStore.controller.signal;
      if (prerenderSignal.aborted === false) {
        abortOnSynchronousDynamicDataAccess(route2, expression, prerenderStore);
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
          if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
          }
        }
      }
      throw createPrerenderInterruptedError(`Route ${route2} needs to bail out of prerendering at this point because it used ${expression}.`);
    }
    var trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
    function Postpone({ reason, route: route2 }) {
      const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      const dynamicTracking = prerenderStore && prerenderStore.type === "prerender-ppr" ? prerenderStore.dynamicTracking : null;
      postponeWithTracking(route2, reason, dynamicTracking);
    }
    function postponeWithTracking(route2, expression, dynamicTracking) {
      assertPostpone();
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          // When we aren't debugging, we don't need to create another error for the
          // stack trace.
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
      _react.default.unstable_postpone(createPostponeReason(route2, expression));
    }
    function createPostponeReason(route2, expression) {
      return `Route ${route2} needs to bail out of prerendering at this point because it used ${expression}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
    }
    function isDynamicPostpone(err) {
      if (typeof err === "object" && err !== null && typeof err.message === "string") {
        return isDynamicPostponeReason(err.message);
      }
      return false;
    }
    function isDynamicPostponeReason(reason) {
      return reason.includes("needs to bail out of prerendering at this point because it used") && reason.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
    }
    if (isDynamicPostponeReason(createPostponeReason("%%%", "^^^")) === false) {
      throw Object.defineProperty(new Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
      });
    }
    var NEXT_PRERENDER_INTERRUPTED = "NEXT_PRERENDER_INTERRUPTED";
    function createPrerenderInterruptedError(message) {
      const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.digest = NEXT_PRERENDER_INTERRUPTED;
      return error;
    }
    function isPrerenderInterruptedError(error) {
      return typeof error === "object" && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && "name" in error && "message" in error && error instanceof Error;
    }
    function accessedDynamicData(dynamicAccesses) {
      return dynamicAccesses.length > 0;
    }
    function consumeDynamicAccess(serverDynamic, clientDynamic) {
      serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
      return serverDynamic.dynamicAccesses;
    }
    function formatDynamicAPIAccesses(dynamicAccesses) {
      return dynamicAccesses.filter((access) => typeof access.stack === "string" && access.stack.length > 0).map(({ expression, stack }) => {
        stack = stack.split("\n").slice(4).filter((line) => {
          if (line.includes("node_modules/next/")) {
            return false;
          }
          if (line.includes(" (<anonymous>)")) {
            return false;
          }
          if (line.includes(" (node:")) {
            return false;
          }
          return true;
        }).join("\n");
        return `Dynamic API Usage Debug - ${expression}:
${stack}`;
      });
    }
    function assertPostpone() {
      if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
          value: "E224",
          enumerable: false,
          configurable: true
        });
      }
    }
    function createPostponedAbortSignal(reason) {
      assertPostpone();
      const controller = new AbortController();
      try {
        _react.default.unstable_postpone(reason);
      } catch (x) {
        controller.abort(x);
      }
      return controller.signal;
    }
    function createHangingInputAbortSignal(workUnitStore) {
      const controller = new AbortController();
      if (workUnitStore.cacheSignal) {
        workUnitStore.cacheSignal.inputReady().then(() => {
          controller.abort();
        });
      } else {
        (0, _scheduler.scheduleOnNextTick)(() => controller.abort());
      }
      return controller.signal;
    }
    function annotateDynamicAccess(expression, prerenderStore) {
      const dynamicTracking = prerenderStore.dynamicTracking;
      if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
          stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : void 0,
          expression
        });
      }
    }
    function useDynamicRouteParams(expression) {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      if (workStore && workStore.isStaticGeneration && workStore.fallbackRouteParams && workStore.fallbackRouteParams.size > 0) {
        const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
        if (workUnitStore) {
          if (workUnitStore.type === "prerender-client") {
            _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, expression));
          } else if (workUnitStore.type === "prerender-ppr") {
            postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
          } else if (workUnitStore.type === "prerender-legacy") {
            throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
          }
        }
      }
    }
    var hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
    var hasSuspenseAfterBodyOrHtmlRegex = /\n\s+at (?:body|html) \(<anonymous>\)[\s\S]*?\n\s+at Suspense \(<anonymous>\)/;
    var hasMetadataRegex = new RegExp(`\\n\\s+at ${_metadataconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
    var hasViewportRegex = new RegExp(`\\n\\s+at ${_metadataconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
    var hasOutletRegex = new RegExp(`\\n\\s+at ${_metadataconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
    function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
      if (hasOutletRegex.test(componentStack)) {
        return;
      } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
      } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
      } else if (hasSuspenseAfterBodyOrHtmlRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
      } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasAllowedDynamic = true;
        return;
      } else if (clientDynamic.syncDynamicErrorWithStack) {
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
      } else {
        const message = `Route "${workStore.route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
      }
    }
    function createErrorWithComponentOrOwnerStack(message, componentStack) {
      const ownerStack = process.env.NODE_ENV !== "production" && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
      const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
      });
      error.stack = error.name + ": " + message + (ownerStack ?? componentStack);
      return error;
    }
    var PreludeState = /* @__PURE__ */ function(PreludeState2) {
      PreludeState2[PreludeState2["Full"] = 0] = "Full";
      PreludeState2[PreludeState2["Empty"] = 1] = "Empty";
      PreludeState2[PreludeState2["Errored"] = 2] = "Errored";
      return PreludeState2;
    }({});
    function logDisallowedDynamicError(workStore, error) {
      console.error(error);
      if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
          console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
          console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
      }
    }
    function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
      if (workStore.invalidDynamicUsageError) {
        logDisallowedDynamicError(workStore, workStore.invalidDynamicUsageError);
        throw new _staticgenerationbailout.StaticGenBailoutError();
      }
      if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
          return;
        }
        if (serverDynamic.syncDynamicErrorWithStack) {
          logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
          for (let i = 0; i < dynamicErrors.length; i++) {
            logDisallowedDynamicError(workStore, dynamicErrors[i]);
          }
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (dynamicValidation.hasDynamicViewport) {
          console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
          console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
      } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
          console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
          throw new _staticgenerationbailout.StaticGenBailoutError();
        }
      }
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js
var require_after_task_async_storage_instance = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/after-task-async-storage-instance.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "afterTaskAsyncStorageInstance", {
      enumerable: true,
      get: function() {
        return afterTaskAsyncStorageInstance;
      }
    });
    var _asynclocalstorage = require_async_local_storage();
    var afterTaskAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/after-task-async-storage.external.js
var require_after_task_async_storage_external = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/app-render/after-task-async-storage.external.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "afterTaskAsyncStorage", {
      enumerable: true,
      get: function() {
        return _aftertaskasyncstorageinstance.afterTaskAsyncStorageInstance;
      }
    });
    var _aftertaskasyncstorageinstance = require_after_task_async_storage_instance();
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/request/utils.js
var require_utils2 = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/request/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      isRequestAPICallableInsideAfter: function() {
        return isRequestAPICallableInsideAfter;
      },
      throwForSearchParamsAccessInUseCache: function() {
        return throwForSearchParamsAccessInUseCache;
      },
      throwWithStaticGenerationBailoutError: function() {
        return throwWithStaticGenerationBailoutError;
      },
      throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return throwWithStaticGenerationBailoutErrorWithDynamicError;
      }
    });
    var _staticgenerationbailout = require_static_generation_bailout();
    var _aftertaskasyncstorageexternal = require_after_task_async_storage_external();
    function throwWithStaticGenerationBailoutError(route2, expression) {
      throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route2} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E576",
        enumerable: false,
        configurable: true
      });
    }
    function throwWithStaticGenerationBailoutErrorWithDynamicError(route2, expression) {
      throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${route2} with \`dynamic = "error"\` couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: false,
        configurable: true
      });
    }
    function throwForSearchParamsAccessInUseCache(workStore, constructorOpt) {
      const error = Object.defineProperty(new Error(`Route ${workStore.route} used "searchParams" inside "use cache". Accessing Dynamic data sources inside a cache scope is not supported. If you need this data inside a cached function use "searchParams" outside of the cached function and pass the required dynamic data in as an argument. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
        value: "E634",
        enumerable: false,
        configurable: true
      });
      Error.captureStackTrace(error, constructorOpt);
      workStore.invalidDynamicUsageError ??= error;
      throw error;
    }
    function isRequestAPICallableInsideAfter() {
      const afterTaskStore = _aftertaskasyncstorageexternal.afterTaskAsyncStorage.getStore();
      return (afterTaskStore == null ? void 0 : afterTaskStore.rootTaskSpawnPhase) === "action";
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/request/connection.js
var require_connection = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/request/connection.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "connection", {
      enumerable: true,
      get: function() {
        return connection;
      }
    });
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _dynamicrendering = require_dynamic_rendering();
    var _staticgenerationbailout = require_static_generation_bailout();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _utils = require_utils2();
    function connection() {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (workStore) {
        if (workUnitStore && workUnitStore.phase === "after" && !(0, _utils.isRequestAPICallableInsideAfter)()) {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used "connection" inside "after(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but "after(...)" executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
            value: "E186",
            enumerable: false,
            configurable: true
          });
        }
        if (workStore.forceStatic) {
          return Promise.resolve(void 0);
        }
        if (workUnitStore) {
          if (workUnitStore.type === "cache") {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used "connection" inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
              value: "E111",
              enumerable: false,
              configurable: true
            });
          } else if (workUnitStore.type === "unstable-cache") {
            throw Object.defineProperty(new Error(`Route ${workStore.route} used "connection" inside a function cached with "unstable_cache(...)". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
              value: "E1",
              enumerable: false,
              configurable: true
            });
          }
        }
        if (workStore.dynamicShouldError) {
          throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${workStore.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E562",
            enumerable: false,
            configurable: true
          });
        }
        if (workUnitStore) {
          if (workUnitStore.type === "prerender" || workUnitStore.type === "prerender-client") {
            return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, "`connection()`");
          } else if (workUnitStore.type === "prerender-ppr") {
            (0, _dynamicrendering.postponeWithTracking)(workStore.route, "connection", workUnitStore.dynamicTracking);
          } else if (workUnitStore.type === "prerender-legacy") {
            (0, _dynamicrendering.throwToInterruptStaticGeneration)("connection", workStore, workUnitStore);
          }
        }
        (0, _dynamicrendering.trackDynamicDataInDynamicRender)(workStore, workUnitStore);
      }
      return Promise.resolve(void 0);
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/invariant-error.js
var require_invariant_error = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/invariant-error.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "InvariantError", {
      enumerable: true,
      get: function() {
        return InvariantError;
      }
    });
    var InvariantError = class extends Error {
      constructor(message, options) {
        super("Invariant: " + (message.endsWith(".") ? message : message + ".") + " This is a bug in Next.js.", options);
        this.name = "InvariantError";
      }
    };
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/utils/reflect-utils.js
var require_reflect_utils = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/shared/lib/utils/reflect-utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports2, {
      describeHasCheckingStringProperty: function() {
        return describeHasCheckingStringProperty;
      },
      describeStringPropertyAccess: function() {
        return describeStringPropertyAccess;
      },
      wellKnownProperties: function() {
        return wellKnownProperties;
      }
    });
    var isDefinitelyAValidIdentifier = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
    function describeStringPropertyAccess(target, prop) {
      if (isDefinitelyAValidIdentifier.test(prop)) {
        return "`" + target + "." + prop + "`";
      }
      return "`" + target + "[" + JSON.stringify(prop) + "]`";
    }
    function describeHasCheckingStringProperty(target, prop) {
      const stringifiedProp = JSON.stringify(prop);
      return "`Reflect.has(" + target + ", " + stringifiedProp + ")`, `" + stringifiedProp + " in " + target + "`, or similar";
    }
    var wellKnownProperties = /* @__PURE__ */ new Set([
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toString",
      "valueOf",
      "toLocaleString",
      // Promise prototype
      // fallthrough
      "then",
      "catch",
      "finally",
      // React Promise extension
      // fallthrough
      "status",
      // React introspection
      "displayName",
      "_debugInfo",
      // Common tested properties
      // fallthrough
      "toJSON",
      "$$typeof",
      "__esModule"
    ]);
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/request/root-params.js
var require_root_params = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/dist/server/request/root-params.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "unstable_rootParams", {
      enumerable: true,
      get: function() {
        return unstable_rootParams;
      }
    });
    var _invarianterror = require_invariant_error();
    var _dynamicrendering = require_dynamic_rendering();
    var _workasyncstorageexternal = require_work_async_storage_external();
    var _workunitasyncstorageexternal = require_work_unit_async_storage_external();
    var _dynamicrenderingutils = require_dynamic_rendering_utils();
    var _reflectutils = require_reflect_utils();
    var CachedParams = /* @__PURE__ */ new WeakMap();
    async function unstable_rootParams() {
      const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
      if (!workStore) {
        throw Object.defineProperty(new _invarianterror.InvariantError("Missing workStore in unstable_rootParams"), "__NEXT_ERROR_CODE", {
          value: "E615",
          enumerable: false,
          configurable: true
        });
      }
      const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
      if (!workUnitStore) {
        throw Object.defineProperty(new Error(`Route ${workStore.route} used \`unstable_rootParams()\` in Pages Router. This API is only available within App Router.`), "__NEXT_ERROR_CODE", {
          value: "E641",
          enumerable: false,
          configurable: true
        });
      }
      switch (workUnitStore.type) {
        case "unstable-cache":
        case "cache": {
          throw Object.defineProperty(new Error(`Route ${workStore.route} used \`unstable_rootParams()\` inside \`"use cache"\` or \`unstable_cache\`. Support for this API inside cache scopes is planned for a future version of Next.js.`), "__NEXT_ERROR_CODE", {
            value: "E642",
            enumerable: false,
            configurable: true
          });
        }
        case "prerender":
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
          return createPrerenderRootParams(workUnitStore.rootParams, workStore, workUnitStore);
        default:
          return Promise.resolve(workUnitStore.rootParams);
      }
    }
    function createPrerenderRootParams(underlyingParams, workStore, prerenderStore) {
      const fallbackParams = workStore.fallbackRouteParams;
      if (fallbackParams) {
        let hasSomeFallbackParams = false;
        for (const key in underlyingParams) {
          if (fallbackParams.has(key)) {
            hasSomeFallbackParams = true;
            break;
          }
        }
        if (hasSomeFallbackParams) {
          switch (prerenderStore.type) {
            case "prerender":
              const cachedParams = CachedParams.get(underlyingParams);
              if (cachedParams) {
                return cachedParams;
              }
              const promise = (0, _dynamicrenderingutils.makeHangingPromise)(prerenderStore.renderSignal, "`unstable_rootParams`");
              CachedParams.set(underlyingParams, promise);
              return promise;
            case "prerender-client":
              const exportName = "`unstable_rootParams`";
              throw Object.defineProperty(new _invarianterror.InvariantError(`${exportName} must not be used within a client component. Next.js should be preventing ${exportName} from being included in client components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                value: "E693",
                enumerable: false,
                configurable: true
              });
            default:
              return makeErroringRootParams(underlyingParams, fallbackParams, workStore, prerenderStore);
          }
        }
      }
      return Promise.resolve(underlyingParams);
    }
    function makeErroringRootParams(underlyingParams, fallbackParams, workStore, prerenderStore) {
      const cachedParams = CachedParams.get(underlyingParams);
      if (cachedParams) {
        return cachedParams;
      }
      const augmentedUnderlying = {
        ...underlyingParams
      };
      const promise = Promise.resolve(augmentedUnderlying);
      CachedParams.set(underlyingParams, promise);
      Object.keys(underlyingParams).forEach((prop) => {
        if (_reflectutils.wellKnownProperties.has(prop)) {
        } else {
          if (fallbackParams.has(prop)) {
            Object.defineProperty(augmentedUnderlying, prop, {
              get() {
                const expression = (0, _reflectutils.describeStringPropertyAccess)("unstable_rootParams", prop);
                if (prerenderStore.type === "prerender-ppr") {
                  (0, _dynamicrendering.postponeWithTracking)(workStore.route, expression, prerenderStore.dynamicTracking);
                } else {
                  (0, _dynamicrendering.throwToInterruptStaticGeneration)(expression, workStore, prerenderStore);
                }
              },
              enumerable: true
            });
          } else {
            ;
            promise[prop] = underlyingParams[prop];
          }
        }
      });
      return promise;
    }
  }
});

// ../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/server.js
var require_server = __commonJS({
  "../../node_modules/.pnpm/next@15.4.8_@babel+core@7.22.11_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/next/server.js"(exports2, module2) {
    "use strict";
    var serverExports = {
      NextRequest: require_request().NextRequest,
      NextResponse: require_response().NextResponse,
      ImageResponse: require_image_response().ImageResponse,
      userAgentFromString: require_user_agent().userAgentFromString,
      userAgent: require_user_agent().userAgent,
      URLPattern: require_url_pattern().URLPattern,
      after: require_after2().after,
      connection: require_connection().connection,
      unstable_rootParams: require_root_params().unstable_rootParams
    };
    module2.exports = serverExports;
    exports2.NextRequest = serverExports.NextRequest;
    exports2.NextResponse = serverExports.NextResponse;
    exports2.ImageResponse = serverExports.ImageResponse;
    exports2.userAgentFromString = serverExports.userAgentFromString;
    exports2.userAgent = serverExports.userAgent;
    exports2.URLPattern = serverExports.URLPattern;
    exports2.after = serverExports.after;
    exports2.connection = serverExports.connection;
    exports2.unstable_rootParams = serverExports.unstable_rootParams;
  }
});

// src/index.ts
var src_exports = {};
__export2(src_exports, {
  TypedNextResponse: () => TypedNextResponse,
  apiRoute: () => apiRoute,
  apiRouteOperation: () => apiRouteOperation,
  docsApiRoute: () => docsApiRoute,
  docsRoute: () => docsRoute,
  route: () => route,
  routeOperation: () => routeOperation,
  rpcApiRoute: () => rpcApiRoute,
  rpcOperation: () => rpcOperation,
  rpcRoute: () => rpcRoute
});
module.exports = __toCommonJS(src_exports);

// src/constants.ts
var DEFAULT_ERRORS = {
  unexpectedError: "An unknown error occurred, trying again might help.",
  methodNotAllowed: "Method not allowed.",
  notFound: "Not found.",
  notImplemented: "Not implemented.",
  invalidMediaType: "Invalid media type.",
  operationNotAllowed: "Operation not allowed.",
  invalidRequestBody: "Invalid request body.",
  invalidQueryParameters: "Invalid query parameters.",
  invalidPathParameters: "Invalid path parameters."
};
var ValidMethod = /* @__PURE__ */ ((ValidMethod2) => {
  ValidMethod2["GET"] = "GET";
  ValidMethod2["PUT"] = "PUT";
  ValidMethod2["POST"] = "POST";
  ValidMethod2["DELETE"] = "DELETE";
  ValidMethod2["OPTIONS"] = "OPTIONS";
  ValidMethod2["HEAD"] = "HEAD";
  ValidMethod2["PATCH"] = "PATCH";
  return ValidMethod2;
})(ValidMethod || {});
var VERSION = require_package().version;
var HOMEPAGE = require_package().homepage;
var DEFAULT_TITLE = "Next REST Framework";
var DEFAULT_OG_TYPE = "website";
var DEFAULT_DESCRIPTION = "This is an autogenerated documentation by Next REST Framework.";
var DEFAULT_FAVICON_URL = "https://raw.githubusercontent.com/blomqma/next-rest-framework/main/docs/static/img/favicon.ico";
var DEFAULT_LOGO_URL = "https://raw.githubusercontent.com/blomqma/next-rest-framework/d02224b38d07ede85257b22ed50159a947681f99/packages/next-rest-framework/logo.svg";
var FORM_DATA_CONTENT_TYPES_THAT_SUPPORT_VALIDATION = ["multipart/form-data", "application/x-www-form-urlencoded"];
var MESSAGE_WITH_ERRORS_SCHEMA = {
  type: "object",
  properties: {
    message: { type: "string" },
    errors: {
      type: "array",
      items: {
        type: "object",
        required: ["code", "path", "message"],
        properties: {
          code: {
            type: "string",
            description: "Discriminator field for the Zod issue type."
          },
          path: {
            type: "array",
            items: {
              oneOf: [
                {
                  type: "string"
                },
                {
                  type: "number"
                }
              ]
            },
            description: "Path to the error in the validated object, represented as an array of strings and/or numbers."
          },
          message: {
            type: "string",
            description: "Human-readable message describing the validation error."
          }
        },
        additionalProperties: true
      }
    }
  },
  required: ["message"],
  additionalProperties: false
};
var INVALID_REQUEST_BODY_RESPONSE = {
  description: DEFAULT_ERRORS.invalidRequestBody,
  content: {
    "application/json": {
      schema: {
        $ref: `#/components/schemas/MessageWithErrors`
      }
    }
  }
};
var ERROR_MESSAGE_SCHEMA = {
  type: "object",
  properties: {
    message: { type: "string" }
  },
  additionalProperties: false
};
var UNEXPECTED_ERROR_RESPONSE = {
  description: DEFAULT_ERRORS.unexpectedError,
  content: {
    "application/json": {
      schema: {
        $ref: `#/components/schemas/ErrorMessage`
      }
    }
  }
};
var INVALID_RPC_REQUEST_RESPONSE = {
  description: "Error response.",
  content: {
    "application/json": {
      schema: {
        oneOf: [
          {
            description: DEFAULT_ERRORS.invalidRequestBody,
            $ref: `#/components/schemas/MessageWithErrors`
          },
          {
            description: DEFAULT_ERRORS.unexpectedError,
            $ref: `#/components/schemas/ErrorMessage`
          }
        ]
      }
    }
  }
};
var INVALID_MEDIA_TYPE_RESPONSE = {
  description: DEFAULT_ERRORS.invalidMediaType,
  content: {
    "application/json": {
      schema: {
        $ref: `#/components/schemas/ErrorMessage`
      }
    }
  },
  headers: {
    Allow: {
      schema: {
        type: "string"
      }
    }
  }
};
var INVALID_QUERY_PARAMETERS_RESPONSE = {
  description: DEFAULT_ERRORS.invalidQueryParameters,
  content: {
    "application/json": {
      schema: {
        $ref: `#/components/schemas/MessageWithErrors`
      }
    }
  }
};
var INVALID_PATH_PARAMETERS_RESPONSE = {
  description: DEFAULT_ERRORS.invalidPathParameters,
  content: {
    "application/json": {
      schema: {
        $ref: `#/components/schemas/MessageWithErrors`
      }
    }
  }
};

// src/shared/config.ts
var import_lodash = require("lodash");
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
var getConfig = (config) => (0, import_lodash.merge)({}, DEFAULT_CONFIG, config);

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
var import_chalk = __toESM(require("chalk"));
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
var logPagesEdgeRuntimeErrorForRoute = (route2) => {
  console.error(
    import_chalk.default.red(`---
${route2} is using Edge runtime in \`/pages\` folder that is not supported with \`apiRoute\`.
Please use \`route\` instead: https://vercel.com/docs/functions/edge-functions/quickstart
---`)
  );
};
var logNextRestFrameworkError = (error, context) => {
  console.error(
    import_chalk.default.red(`Next REST Framework encountered an error:
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
    import_chalk.default.red(`Next REST Framework returned an error response:
${formatContext(context)}status: ${response.status}
body: ${formatValue(body)}`)
  );
};

// src/shared/paths.ts
var import_lodash2 = require("lodash");

// src/shared/schemas.ts
var import_zod = require("zod");
var import_chalk2 = __toESM(require("chalk"));
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
      return import_zod.z.toJSONSchema(schema, {
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
        import_chalk2.default.yellowBright(
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
  route: route2
}) => {
  const paths = {};
  paths[route2] = {
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
      const automaticPathParameters = route2.match(/{([^}]+)}/g)?.map((param) => param.replace(/[{}]/g, "")).filter((_name) => !pathParameters?.some(({ name }) => name === _name));
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
      paths[route2] = {
        ...paths[route2],
        [method]: (0, import_lodash2.merge)(generatedOperationObject, openApiOperation)
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
      const route2 = _route + `/${operationId}`;
      paths[route2] = {
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
      paths[route2] = {
        ...paths[route2],
        ["post"]: (0, import_lodash2.merge)(
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

// src/pages-router/api-route.ts
var apiRoute = (operations, options) => {
  const handler = async (req, res) => {
    if (typeof EdgeRuntime === "string") {
      const edgeRequest = req;
      const route2 = decodeURIComponent(edgeRequest.nextUrl.pathname ?? "");
      logPagesEdgeRuntimeErrorForRoute(route2);
      return Response.json(
        { message: DEFAULT_ERRORS.unexpectedError },
        {
          status: 500
        }
      );
    }
    let operationId;
    try {
      const operationEntry = Object.entries(operations).find(
        ([_operationId, operation2]) => operation2.method === req.method
      );
      operationId = operationEntry?.[0];
      const operation = operationEntry?.[1];
      if (!operation) {
        res.setHeader(
          "Allow",
          Object.values(operations).map(({ method }) => method).join(", ")
        );
        res.status(405).json({ message: DEFAULT_ERRORS.methodNotAllowed });
        return;
      }
      const { input, handler: handler2, middleware1, middleware2, middleware3 } = operation;
      let middlewareOptions = {};
      if (middleware1) {
        const res1 = await middleware1(req, res, middlewareOptions);
        const isOptionsResponse = (res2) => typeof res2 === "object";
        if (res.writableEnded) {
          return;
        } else if (isOptionsResponse(res1)) {
          middlewareOptions = res1;
          if (middleware2) {
            const res2 = await middleware2(req, res, middlewareOptions);
            if (res.writableEnded) {
              return;
            } else if (isOptionsResponse(res2)) {
              middlewareOptions = res2;
              if (middleware3) {
                const res3 = await middleware3(req, res, middlewareOptions);
                if (res.writableEnded) {
                  return;
                } else if (isOptionsResponse(res3)) {
                  middlewareOptions = res3;
                }
              }
            }
          }
        }
      }
      if (input) {
        const {
          body: bodySchema,
          query: querySchema,
          params: paramsSchema,
          contentType: contentTypeSchema
        } = input;
        const contentType = req.headers["content-type"]?.split(";")[0];
        if (contentTypeSchema && contentType !== contentTypeSchema) {
          res.setHeader("Allow", contentTypeSchema);
          res.status(415).json({
            message: `${DEFAULT_ERRORS.invalidMediaType} Expected ${contentTypeSchema}.`
          });
          return;
        }
        if (bodySchema) {
          if (contentType === "application/json") {
            const { valid, errors, data } = validateSchema({
              schema: bodySchema,
              obj: req.body
            });
            if (!valid) {
              res.status(400).json({
                message: DEFAULT_ERRORS.invalidRequestBody,
                errors
              });
              return;
            }
            req.body = data;
          }
          if (FORM_DATA_CONTENT_TYPES_THAT_SUPPORT_VALIDATION.includes(
            contentType
          )) {
            if (contentType === "multipart/form-data" && !(req.body instanceof FormData) && typeof EdgeRuntime !== "string") {
              const { parseMultiPartFormData: parseMultiPartFormData2 } = await Promise.resolve().then(() => (init_form_data(), form_data_exports));
              try {
                req.body = await parseMultiPartFormData2(req);
              } catch (e) {
                res.status(400).json({
                  message: `${DEFAULT_ERRORS.invalidRequestBody} Failed to parse form data.`
                });
                return;
              }
            }
            try {
              const { valid, errors, data } = validateSchema({
                schema: bodySchema,
                obj: req.body
              });
              if (!valid) {
                res.status(400).json({
                  message: DEFAULT_ERRORS.invalidRequestBody,
                  errors
                });
                return;
              }
              const formData = new FormData();
              Object.entries(data).forEach(
                ([key, value]) => {
                  formData.append(key, value);
                }
              );
              req.body = formData;
            } catch {
              res.status(400).json({
                message: `${DEFAULT_ERRORS.invalidRequestBody} Failed to parse form data.`
              });
              return;
            }
          }
        }
        if (querySchema ?? paramsSchema) {
          const requestMeta = req[Symbol.for("NextInternalRequestMeta")];
          let parsedQuery = {};
          if (querySchema) {
            const { valid, errors, data } = validateSchema({
              schema: querySchema,
              obj: requestMeta?.initQuery
            });
            if (!valid) {
              res.status(400).json({
                message: DEFAULT_ERRORS.invalidQueryParameters,
                errors
              });
              return;
            }
            parsedQuery = { ...parsedQuery, ...data };
          }
          if (paramsSchema) {
            const { valid, errors, data } = validateSchema({
              schema: paramsSchema,
              obj: requestMeta?.match.params
            });
            if (!valid) {
              res.status(400).json({
                message: DEFAULT_ERRORS.invalidPathParameters,
                errors
              });
              return;
            }
            parsedQuery = { ...parsedQuery, ...data };
          }
          req.query = parsedQuery;
        }
      }
      await handler2?.(req, res, middlewareOptions);
      if (!res.writableEnded) {
        res.status(501).json({ message: DEFAULT_ERRORS.notImplemented });
      }
    } catch (error) {
      logNextRestFrameworkError(error, {
        method: req.method,
        operationId,
        url: req.url
      });
      res.status(500).json({ message: DEFAULT_ERRORS.unexpectedError });
    }
  };
  handler._getPathsForRoute = async (route2) => {
    return getPathsFromRoute({
      operations,
      options,
      route: route2
    });
  };
  return handler;
};

// src/pages-router/api-route-operation.ts
var apiRouteOperation = ({
  openApiOperation,
  method
}) => {
  const createOperation = ({
    input,
    outputs,
    middleware1,
    middleware2,
    middleware3,
    handler
  }) => ({
    openApiOperation,
    method,
    input,
    outputs,
    middleware1,
    middleware2,
    middleware3,
    handler
  });
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
          handler: (handler) => createOperation({ input, outputs, middleware1, handler })
        }),
        handler: (handler) => createOperation({ input, outputs, handler })
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
          handler: (handler) => createOperation({ input, middleware1, middleware2, handler })
        }),
        outputs: (outputs) => ({
          handler: (handler) => createOperation({ input, outputs, middleware1, handler })
        }),
        handler: (handler) => createOperation({ input, middleware1, handler })
      }),
      handler: (handler) => createOperation({ input, handler })
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
          handler: (handler) => createOperation({ outputs, middleware1, middleware2, handler })
        }),
        handler: (handler) => createOperation({ outputs, middleware1, handler })
      }),
      handler: (handler) => createOperation({ outputs, handler })
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

// src/pages-router/docs-api-route.ts
var docsApiRoute = (_config) => {
  const config = getConfig(_config);
  const handler = async (req, res) => {
    if (typeof EdgeRuntime === "string") {
      const edgeRequest = req;
      const route2 = decodeURIComponent(edgeRequest.nextUrl.pathname ?? "");
      logPagesEdgeRuntimeErrorForRoute(route2);
      return Response.json(
        { message: DEFAULT_ERRORS.unexpectedError },
        {
          status: 500,
          headers: {
            "content-type": "application/json"
          }
        }
      );
    }
    try {
      const host = req.headers.host ?? "";
      const html = getHtmlForDocs({ config, host });
      res.setHeader("Content-Type", "text/html");
      res.status(200).send(html);
    } catch (error) {
      logNextRestFrameworkError(error, {
        method: req.method,
        url: req.url
      });
      res.status(500).json({ message: DEFAULT_ERRORS.unexpectedError });
    }
  };
  handler._nextRestFrameworkConfig = config;
  return handler;
};

// src/pages-router/rpc-api-route.ts
var rpcApiRoute = (operations, options) => {
  const handler = async (req, res) => {
    if (typeof EdgeRuntime === "string") {
      const edgeRequest = req;
      const route2 = decodeURIComponent(edgeRequest.nextUrl.pathname ?? "");
      logPagesEdgeRuntimeErrorForRoute(route2);
      return Response.json(
        { message: DEFAULT_ERRORS.unexpectedError },
        {
          status: 400
        }
      );
    }
    let operationId;
    try {
      if (req.method !== "POST" /* POST */) {
        res.setHeader("Allow", "POST");
        res.status(405).json({ message: DEFAULT_ERRORS.methodNotAllowed });
        return;
      }
      operationId = req.query.operationId?.toString() ?? "";
      const operation = operations[operationId];
      if (!operation) {
        res.status(400).json({ message: DEFAULT_ERRORS.operationNotAllowed });
        return;
      }
      const { input, handler: handler2, middleware1, middleware2, middleware3 } = operation._meta;
      let middlewareOptions = {};
      if (middleware1) {
        const res1 = await middleware1(req.body, {});
        if (res1 && typeof res1 === "object")
          middlewareOptions = res1;
        if (middleware2) {
          const res2 = await middleware2(req.body, middlewareOptions);
          if (res2 && typeof res2 === "object")
            middlewareOptions = res2;
          if (middleware3) {
            const res3 = await middleware3(req.body, middlewareOptions);
            if (res3 && typeof res3 === "object")
              middlewareOptions = res3;
          }
        }
      }
      if (input) {
        const { body: bodySchema, contentType: contentTypeSchema } = input;
        const contentType = req.headers["content-type"]?.split(";")[0];
        if (contentType !== contentTypeSchema) {
          res.status(400).json({ message: DEFAULT_ERRORS.invalidMediaType });
          return;
        }
        if (bodySchema) {
          if (contentType === "application/json") {
            const { valid, errors, data } = validateSchema({
              schema: bodySchema,
              obj: req.body
            });
            if (!valid) {
              res.status(400).json({
                message: DEFAULT_ERRORS.invalidRequestBody,
                errors
              });
              return;
            }
            req.body = data;
          }
          if (FORM_DATA_CONTENT_TYPES_THAT_SUPPORT_VALIDATION.includes(
            contentType
          )) {
            if (contentType === "multipart/form-data" && !(req.body instanceof FormData) && typeof EdgeRuntime !== "string") {
              const { parseMultiPartFormData: parseMultiPartFormData2 } = await Promise.resolve().then(() => (init_form_data(), form_data_exports));
              try {
                req.body = await parseMultiPartFormData2(req);
              } catch {
                res.status(400).json({
                  message: `${DEFAULT_ERRORS.invalidRequestBody} Failed to parse form data.`
                });
                return;
              }
            }
            try {
              const result = validateSchema({
                schema: bodySchema,
                obj: req.body
              });
              if (!result.valid) {
                res.status(400).json({
                  message: DEFAULT_ERRORS.invalidRequestBody,
                  errors: result.errors
                });
                return;
              }
              const formData = new FormData();
              Object.entries(result.data).forEach(
                ([key, value]) => {
                  formData.append(key, value);
                }
              );
              req.body = formData;
            } catch {
              res.status(400).json({
                message: `${DEFAULT_ERRORS.invalidRequestBody} Failed to parse form data.`
              });
              return;
            }
          }
        }
      }
      const _res = await handler2?.(req.body, middlewareOptions);
      if (!_res) {
        res.status(400).json({ message: DEFAULT_ERRORS.notImplemented });
        return;
      }
      if (_res instanceof Blob) {
        const reader = _res.stream().getReader();
        res.setHeader("Content-Type", "application/octet-stream");
        res.setHeader(
          "Content-Disposition",
          `attachment; filename="${_res.name}"`
        );
        const pump = async () => {
          await reader.read().then(async ({ done, value }) => {
            if (done) {
              res.end();
              return;
            }
            res.write(value);
            await pump();
          });
        };
        await pump();
      }
      const json = await parseRpcOperationResponseJson(_res);
      res.status(200).json(json);
    } catch (error) {
      logNextRestFrameworkError(error, {
        method: req.method,
        operationId,
        url: req.url
      });
      res.status(400).json({ message: DEFAULT_ERRORS.unexpectedError });
    }
  };
  handler._getPathsForRoute = async (route2) => {
    return getPathsFromRpcRoute({
      operations,
      options,
      route: route2.replace("/{operationId}", "")
    });
  };
  handler.client = operations;
  return handler;
};

// src/app-router/docs-route.ts
var import_server = __toESM(require_server());
var docsRoute = (_config) => {
  const config = getConfig(_config);
  const handler = async (_req, _context) => {
    try {
      const host = _req.clone().headers.get("host") ?? "";
      const html = getHtmlForDocs({ config, host });
      return new import_server.NextResponse(html, {
        status: 200,
        headers: {
          "Content-Type": "text/html"
        }
      });
    } catch (error) {
      logNextRestFrameworkError(error, {
        method: _req.method,
        url: _req.url
      });
      return import_server.NextResponse.json(
        { message: DEFAULT_ERRORS.unexpectedError },
        { status: 500 }
      );
    }
  };
  handler._nextRestFrameworkConfig = config;
  return {
    GET: handler
  };
};

// src/app-router/route.ts
var import_server2 = __toESM(require_server());
var import_qs = __toESM(require("qs"));
var FORM_DATA_CONTENT_TYPES = [
  "multipart/form-data",
  "application/x-www-form-urlencoded"
];
var route = (operations, options) => {
  const handler = async (_req, context) => {
    let operationId;
    try {
      const operationEntry = Object.entries(operations).find(
        ([_operationId, operation2]) => operation2.method === _req.method
      );
      operationId = operationEntry?.[0];
      const operation = operationEntry?.[1];
      const logContext = {
        method: _req.method,
        operationId,
        url: _req.url
      };
      if (!operation) {
        return import_server2.NextResponse.json(
          { message: DEFAULT_ERRORS.methodNotAllowed },
          {
            status: 405,
            headers: {
              Allow: Object.values(operations).map(({ method }) => method).join(", ")
            }
          }
        );
      }
      const { input, handler: handler2, middleware1, middleware2, middleware3 } = operation;
      const _reqClone = _req.clone();
      let reqClone = new import_server2.NextRequest(_reqClone.url, {
        method: _reqClone.method,
        headers: _reqClone.headers
      });
      reqClone.json = async () => await _req.clone().json();
      reqClone.formData = async () => await _req.clone().formData();
      reqClone.text = async () => await _req.clone().text();
      let middlewareOptions = {};
      if (middleware1) {
        const res2 = await middleware1(
          reqClone,
          { ...context, params: await context.params },
          middlewareOptions
        );
        const isOptionsResponse = (res3) => typeof res3 === "object";
        if (res2 instanceof Response) {
          await logNextRestFrameworkResponse(res2, logContext);
          return res2;
        } else if (isOptionsResponse(res2)) {
          middlewareOptions = res2;
        }
        if (middleware2) {
          const res22 = await middleware2(
            reqClone,
            { ...context, params: await context.params },
            middlewareOptions
          );
          if (res22 instanceof Response) {
            await logNextRestFrameworkResponse(res22, logContext);
            return res22;
          } else if (isOptionsResponse(res22)) {
            middlewareOptions = res22;
          }
          if (middleware3) {
            const res3 = await middleware3(
              reqClone,
              { ...context, params: await context.params },
              middlewareOptions
            );
            if (res3 instanceof Response) {
              await logNextRestFrameworkResponse(res3, logContext);
              return res3;
            } else if (isOptionsResponse(res3)) {
              middlewareOptions = res3;
            }
          }
        }
      }
      if (input) {
        const {
          body: bodySchema,
          query: querySchema,
          contentType: contentTypeSchema,
          params: paramsSchema
        } = input;
        const contentType = reqClone.headers.get("content-type")?.split(";")[0];
        if (contentTypeSchema && contentType !== contentTypeSchema) {
          return import_server2.NextResponse.json(
            { message: DEFAULT_ERRORS.invalidMediaType },
            { status: 415, headers: { Allow: contentTypeSchema } }
          );
        }
        if (bodySchema) {
          if (contentType === "application/json") {
            try {
              const json = await reqClone.json();
              const { valid, errors, data } = validateSchema({
                schema: bodySchema,
                obj: json
              });
              if (!valid) {
                return import_server2.NextResponse.json(
                  {
                    message: DEFAULT_ERRORS.invalidRequestBody,
                    errors
                  },
                  {
                    status: 400
                  }
                );
              }
              reqClone = new import_server2.NextRequest(reqClone.url, {
                method: reqClone.method,
                headers: reqClone.headers,
                body: JSON.stringify(data)
              });
              reqClone.json = async () => data;
            } catch {
              return import_server2.NextResponse.json(
                {
                  message: `${DEFAULT_ERRORS.invalidRequestBody} Failed to parse JSON body.`
                },
                {
                  status: 400
                }
              );
            }
          }
          if (FORM_DATA_CONTENT_TYPES.includes(contentType)) {
            try {
              const formData = await reqClone.formData();
              const result = validateSchema({
                schema: bodySchema,
                obj: formData
              });
              if (!result.valid) {
                return import_server2.NextResponse.json(
                  {
                    message: DEFAULT_ERRORS.invalidRequestBody,
                    errors: result.errors
                  },
                  {
                    status: 400
                  }
                );
              }
              reqClone = new import_server2.NextRequest(reqClone.url, {
                method: reqClone.method,
                headers: reqClone.headers,
                body: JSON.stringify(result.data)
              });
              reqClone.formData = async () => {
                const formData2 = new FormData();
                for (const [key, value] of Object.entries(
                  result.data
                )) {
                  formData2.append(key, value);
                }
                return formData2;
              };
            } catch {
              return import_server2.NextResponse.json(
                {
                  message: `${DEFAULT_ERRORS.invalidRequestBody} Failed to parse form data.`
                },
                {
                  status: 400
                }
              );
            }
          }
        }
        if (querySchema) {
          const { valid, errors, data } = validateSchema({
            schema: querySchema,
            obj: import_qs.default.parse(reqClone.nextUrl.search, {
              ignoreQueryPrefix: true
            })
          });
          if (!valid) {
            return import_server2.NextResponse.json(
              {
                message: DEFAULT_ERRORS.invalidQueryParameters,
                errors
              },
              {
                status: 400
              }
            );
          }
          const url = new URL(reqClone.url);
          url.searchParams.forEach((_value, key) => {
            url.searchParams.delete(key);
            if (data[key]) {
              url.searchParams.append(key, data[key]);
            }
          });
          reqClone = new import_server2.NextRequest(url, {
            method: reqClone.method,
            headers: reqClone.headers,
            body: reqClone.body
          });
        }
        if (paramsSchema) {
          const { valid, errors, data } = validateSchema({
            schema: paramsSchema,
            obj: await context.params
          });
          if (!valid) {
            return import_server2.NextResponse.json(
              {
                message: DEFAULT_ERRORS.invalidPathParameters,
                errors
              },
              {
                status: 400
              }
            );
          }
          context.params = Promise.resolve(data);
        }
      }
      const res = await handler2?.(
        reqClone,
        { ...context, params: await context.params },
        middlewareOptions
      );
      if (!res) {
        return import_server2.NextResponse.json(
          { message: DEFAULT_ERRORS.notImplemented },
          { status: 501 }
        );
      }
      await logNextRestFrameworkResponse(res, logContext);
      return res;
    } catch (error) {
      logNextRestFrameworkError(error, {
        method: _req.method,
        operationId,
        url: _req.url
      });
      return import_server2.NextResponse.json(
        { message: DEFAULT_ERRORS.unexpectedError },
        { status: 500 }
      );
    }
  };
  handler._getPathsForRoute = async (route2) => {
    return getPathsFromRoute({
      operations,
      options,
      route: route2
    });
  };
  const api = Object.values(operations).reduce(
    (acc, operation) => {
      acc[operation.method] = handler;
      return acc;
    },
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/prefer-reduce-type-parameter
    {}
  );
  return api;
};

// src/app-router/route-operation.ts
var import_server3 = __toESM(require_server());
var TypedNextResponse = import_server3.NextResponse;
var routeOperation = ({
  openApiOperation,
  method
}) => {
  const createOperation = ({
    input,
    outputs,
    middleware1,
    middleware2,
    middleware3,
    handler
  }) => ({
    openApiOperation,
    method,
    input,
    outputs,
    middleware1,
    middleware2,
    middleware3,
    handler
  });
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
          handler: (handler) => createOperation({ input, outputs, middleware1, handler })
        }),
        handler: (handler) => createOperation({ input, outputs, handler })
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
            handler: (handler) => createOperation({ input, middleware1, middleware2, handler })
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
          handler: (handler) => createOperation({ input, middleware1, middleware2, handler })
        }),
        outputs: (outputs) => ({
          handler: (handler) => createOperation({ input, outputs, middleware1, handler })
        }),
        handler: (handler) => createOperation({ input, middleware1, handler })
      }),
      handler: (handler) => createOperation({ input, handler })
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
          handler: (handler) => createOperation({ outputs, middleware1, middleware2, handler })
        }),
        handler: (handler) => createOperation({ outputs, middleware1, handler })
      }),
      handler: (handler) => createOperation({ outputs, handler })
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

// src/app-router/rpc-route.ts
var import_server4 = __toESM(require_server());
var rpcRoute = (operations, options) => {
  const handler = async (req, { params }) => {
    let operationId;
    try {
      if (req.method !== "POST" /* POST */) {
        return import_server4.NextResponse.json(
          { message: DEFAULT_ERRORS.methodNotAllowed },
          {
            status: 405,
            headers: {
              Allow: "POST"
            }
          }
        );
      }
      operationId = (await params).operationId ?? "";
      const operation = operations[operationId];
      if (!operation) {
        return import_server4.NextResponse.json(
          { message: DEFAULT_ERRORS.operationNotAllowed },
          {
            status: 400
          }
        );
      }
      const { input, handler: handler2, middleware1, middleware2, middleware3 } = operation._meta;
      const contentType = req.headers.get("content-type")?.split(";")[0];
      const parseRequestBody = async () => {
        if (contentType === "application/json") {
          try {
            return await req.clone().json();
          } catch {
            return {};
          }
        }
        if (FORM_DATA_CONTENT_TYPES_THAT_SUPPORT_VALIDATION.includes(
          contentType
        )) {
          try {
            return await req.clone().formData();
          } catch {
            return {};
          }
        }
        return {};
      };
      let body = await parseRequestBody();
      let middlewareOptions = {};
      if (middleware1) {
        const res1 = await middleware1(body, middlewareOptions);
        if (res1 && typeof res1 === "object")
          middlewareOptions = res1;
        if (middleware2) {
          const res2 = await middleware2(body, middlewareOptions);
          if (res2 && typeof res2 === "object")
            middlewareOptions = res2;
          if (middleware3) {
            const res3 = await middleware3(body, middlewareOptions);
            if (res3 && typeof res3 === "object")
              middlewareOptions = res3;
          }
        }
      }
      if (input) {
        const { contentType: contentTypeSchema, body: bodySchema } = input;
        if (contentTypeSchema && contentType !== contentTypeSchema) {
          return import_server4.NextResponse.json(
            { message: DEFAULT_ERRORS.invalidMediaType },
            { status: 400 }
          );
        }
        if (bodySchema) {
          if (contentType === "application/json") {
            try {
              const { valid, errors, data } = validateSchema({
                schema: bodySchema,
                obj: body
              });
              if (!valid) {
                return import_server4.NextResponse.json(
                  {
                    message: DEFAULT_ERRORS.invalidRequestBody,
                    errors
                  },
                  {
                    status: 400
                  }
                );
              }
              body = data;
            } catch {
              return import_server4.NextResponse.json(
                {
                  message: `${DEFAULT_ERRORS.invalidRequestBody} Failed to parse JSON body.`
                },
                {
                  status: 400
                }
              );
            }
            if (FORM_DATA_CONTENT_TYPES_THAT_SUPPORT_VALIDATION.includes(
              contentType
            )) {
              try {
                const result = validateSchema({
                  schema: bodySchema,
                  obj: body
                });
                if (!result.valid) {
                  return import_server4.NextResponse.json(
                    {
                      message: DEFAULT_ERRORS.invalidRequestBody,
                      errors: result.errors
                    },
                    {
                      status: 400
                    }
                  );
                }
                const formData = new FormData();
                for (const [key, value] of Object.entries(
                  result.data
                )) {
                  formData.append(key, value);
                }
                body = formData;
              } catch {
                return import_server4.NextResponse.json(
                  {
                    message: `${DEFAULT_ERRORS.invalidRequestBody} Failed to parse form data.`
                  },
                  {
                    status: 400
                  }
                );
              }
            }
          }
        }
      }
      const res = await handler2?.(body, middlewareOptions);
      if (!res) {
        return import_server4.NextResponse.json(
          { message: DEFAULT_ERRORS.notImplemented },
          { status: 400 }
        );
      }
      const parseRes = async (res2) => {
        if (res2 instanceof ReadableStream || res2 instanceof Blob) {
          return res2;
        }
        const parsed = await parseRpcOperationResponseJson(res2);
        return JSON.stringify(parsed);
      };
      const json = await parseRes(res);
      return new import_server4.NextResponse(json, {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      logNextRestFrameworkError(error, {
        method: req.method,
        operationId,
        url: req.url
      });
      return import_server4.NextResponse.json(
        { message: DEFAULT_ERRORS.unexpectedError },
        { status: 400 }
      );
    }
  };
  handler._getPathsForRoute = async (route2) => {
    return getPathsFromRpcRoute({
      operations,
      options,
      route: route2.replace("/{operationId}", "")
    });
  };
  handler.client = operations;
  return {
    POST: handler
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  TypedNextResponse,
  apiRoute,
  apiRouteOperation,
  docsApiRoute,
  docsRoute,
  route,
  routeOperation,
  rpcApiRoute,
  rpcOperation,
  rpcRoute
});
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
