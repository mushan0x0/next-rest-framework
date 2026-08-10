import "../chunk-BXO7ZPPU.mjs";

// src/client/rpc-client.ts
var fetcher = async ({
  url,
  body,
  init
}) => {
  const opts = {
    ...init,
    method: "POST",
    headers: {
      ...init?.headers,
      "Content-Type": "application/json"
    }
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  const res = await fetch(url, opts);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error);
  }
  return await res.json();
};
var rpcClient = ({
  url: _url,
  init
}) => {
  return new Proxy({}, {
    get: (_, prop) => {
      if (typeof prop === "string") {
        return async (body) => {
          const baseUrl = _url.endsWith("/") ? _url : `${_url}/`;
          const url = `${baseUrl}${prop}`;
          return await fetcher({ url, body, init });
        };
      }
    }
  });
};
export {
  rpcClient
};
