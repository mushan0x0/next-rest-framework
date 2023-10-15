export const DEFAULT_MESSAGES = {
  created: 'Created',
  noContent: 'No content'
};

export const DEFAULT_ERRORS = {
  unexpectedError: 'An unknown error occurred, trying again might help.',
  methodNotAllowed: 'Method not allowed.',
  notFound: 'Not found.',
  invalidMediaType: 'Invalid media type.'
};

export const OPEN_API_VERSION = '3.0.1';

export enum ValidMethod {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
  HEAD = 'HEAD',
  PATCH = 'PATCH'
}

export const NEXT_REST_FRAMEWORK_USER_AGENT = 'next-rest-framework';

// Ignore: We don't want to use promises here to avoid making this an async function.
// eslint-disable-next-line @typescript-eslint/no-var-requires
export const VERSION = require('../package.json').version;

export const DEFAULT_FAVICON_URL =
  'https://raw.githubusercontent.com/blomqma/next-rest-framework/main/docs/static/img/favicon.ico';

export const DEFAULT_LOGO_URL =
  'https://raw.githubusercontent.com/blomqma/next-rest-framework/d02224b38d07ede85257b22ed50159a947681f99/packages/next-rest-framework/logo.svg';
