import { N as NextRestFrameworkConfig, B as BaseQuery, a as BaseContentType, F as FormDataContentType, T as TypedFormData, A as AnyContentTypeWithAutocompleteForMostCommonOnes, b as BaseParams, O as OutputObject, c as BaseOptions, d as BaseStatus, C as ContentTypesThatSupportInputValidation, Z as ZodFormSchema, e as OpenApiOperation, M as Modify, f as AnyCase, g as OpenApiPathItem } from './types-wqKDLBM8.mjs';
import { OpenAPIV3_1 } from 'openapi-types';
import { NextApiRequest, NextApiResponse } from 'next/types';
import { ValidMethod } from './constants.mjs';
import { z, ZodType } from 'zod';
import { R as RpcOperationDefinition, a as RpcClient } from './index-DyLm2-he.mjs';
export { r as rpcOperation } from './index-DyLm2-he.mjs';
import { NextRequest, NextResponse } from 'next/server';
import { NextConfig } from 'next';

interface NextRestFrameworkErrorLogContext {
    method?: string;
    operationId?: string;
    route?: string;
    url?: string;
}
/**
 * A hook for reporting server-side errors somewhere other than the console.
 *
 * Why this exists: `route`, `apiRoute`, `rpcRoute` and the docs routes wrap every handler
 * in a try/catch and answer with a generic 500. That is the right thing to send a client,
 * but it also means the error never propagates out of the handler — so a host framework's
 * error hook (Next's `onRequestError`, for one) never sees it, and an application has no
 * place at all to persist the error, count it, or forward it to an APM. All that was left
 * was `console.error`, which on a serverless/edge host means "attach a log tail and hope
 * you were watching".
 *
 * The reporter receives the original error, untouched, plus whatever context the framework
 * knows (method, operationId, url/route). What the client gets back does not change.
 */
type NextRestFrameworkErrorReporter = (error: unknown, context?: NextRestFrameworkErrorLogContext) => void | Promise<void>;
/**
 * Register (or, with no argument, clear) the error reporter described above. Call it once
 * while the server starts up — Next's `instrumentation.ts` `register()` is the natural
 * place. Registering twice replaces the previous reporter: there is deliberately only one,
 * so that "where do server errors go" has a single answer per process.
 */
declare const setErrorReporter: (reporter?: NextRestFrameworkErrorReporter) => void;

declare const docsRoute: (_config?: NextRestFrameworkConfig) => {
    GET: {
        (_req: NextRequest, _context: {
            params: Promise<BaseQuery>;
        }): Promise<NextResponse<unknown>>;
        _nextRestFrameworkConfig: Required<NextRestFrameworkConfig> & NextRestFrameworkConfig;
    };
};

type NextURL = NextRequest['nextUrl'];
type ResponseCookies = NextResponse['cookies'];
type I18NConfig = NonNullable<NextConfig['i18n']>;
interface TypedSearchParams<Query = BaseQuery> extends URLSearchParams {
    get: <K extends keyof Query & string>(key: K) => string | null;
    getAll: <K extends keyof Query & string>(key: K) => string[];
}
interface TypedNextURL<Query = BaseQuery> extends NextURL {
    searchParams: TypedSearchParams<Query>;
}
interface TypedNextRequest<Method extends string = keyof typeof ValidMethod, ContentType = BaseContentType, Body = unknown, Query = BaseQuery> extends NextRequest {
    method: Method;
    /*! Prevent parsing JSON body for GET requests. Form requests return parsed form data as JSON when the form schema is defined. */
    json: Method extends 'GET' ? never : () => Promise<Body>;
    /*! Prevent parsing form data for GET and non-form requests. */
    formData: Method extends 'GET' ? never : ContentType extends FormDataContentType ? () => Promise<TypedFormData<Body>> : never;
    nextUrl: TypedNextURL<Query>;
}
type TypedHeaders<ContentType extends BaseContentType> = Modify<Record<string, string>, {
    [K in AnyCase<'Content-Type'>]?: ContentType;
}>;
interface TypedResponseInit<Status extends BaseStatus, ContentType extends BaseContentType> extends globalThis.ResponseInit {
    nextConfig?: {
        basePath?: string;
        i18n?: I18NConfig;
        trailingSlash?: boolean;
    };
    url?: string;
    status?: Status;
    headers?: TypedHeaders<ContentType>;
}
interface ModifiedRequest {
    headers?: Headers;
}
interface TypedMiddlewareResponseInit<Status extends BaseStatus> extends globalThis.ResponseInit {
    request?: ModifiedRequest;
    status?: Status;
}
declare const INTERNALS: unique symbol;
declare class TypedNextResponseType<Body, Status extends BaseStatus, ContentType extends BaseContentType> extends Response {
    [INTERNALS]: {
        cookies: ResponseCookies;
        url?: NextURL;
        body?: Body;
        status?: Status;
        contentType?: ContentType;
    };
    constructor(body?: BodyInit | null, init?: TypedResponseInit<Status, ContentType>);
    get cookies(): ResponseCookies;
    static json<Body, Status extends BaseStatus, ContentType extends BaseContentType>(body: Body, init?: TypedResponseInit<Status, ContentType>): TypedNextResponseType<Body, Status, ContentType>;
    static redirect<Status extends BaseStatus, ContentType extends BaseContentType>(url: string | NextURL | URL, init?: number | TypedResponseInit<Status, ContentType>): TypedNextResponseType<unknown, Status, ContentType>;
    static rewrite<Status extends BaseStatus, ContentType extends BaseContentType>(destination: string | NextURL | URL, init?: TypedMiddlewareResponseInit<Status>): TypedNextResponseType<unknown, Status, ContentType>;
    static next<Status extends BaseStatus, ContentType extends BaseContentType>(init?: TypedMiddlewareResponseInit<Status>): TypedNextResponseType<unknown, Status, ContentType>;
}
declare const TypedNextResponse: typeof TypedNextResponseType;
type RouteMiddleware<InputOptions extends BaseOptions = BaseOptions, OutputOptions extends BaseOptions = BaseOptions, ResponseBody = unknown, Status extends BaseStatus = BaseStatus, ResponseContentType extends AnyContentTypeWithAutocompleteForMostCommonOnes = AnyContentTypeWithAutocompleteForMostCommonOnes, Outputs extends ReadonlyArray<OutputObject<ResponseBody, Status, ResponseContentType>> = ReadonlyArray<OutputObject<ResponseBody, Status, ResponseContentType>>, TypedResponse = TypedNextResponseType<z.infer<Outputs[number]['body']>, Outputs[number]['status'], Outputs[number]['contentType']> | NextResponse<z.infer<Outputs[number]['body']>> | void> = (req: NextRequest, context: {
    params: BaseParams;
}, options: InputOptions) => Promise<TypedResponse | OutputOptions> | TypedResponse | OutputOptions;
type TypedRouteHandler<Method extends keyof typeof ValidMethod = keyof typeof ValidMethod, ContentType extends BaseContentType = BaseContentType, Body = unknown, Query extends BaseQuery = BaseQuery, Params extends BaseParams = BaseParams, Options extends BaseOptions = BaseOptions, ResponseBody = unknown, Status extends BaseStatus = BaseStatus, ResponseContentType extends BaseContentType = BaseContentType, Outputs extends ReadonlyArray<OutputObject<ResponseBody, Status, ResponseContentType>> = ReadonlyArray<OutputObject<ResponseBody, Status, ResponseContentType>>, TypedResponse = TypedNextResponseType<z.infer<Outputs[number]['body']>, Outputs[number]['status'], Outputs[number]['contentType']> | NextResponse<z.infer<Outputs[number]['body']>> | void> = (req: TypedNextRequest<Method, ContentType, Body, Query>, context: {
    params: Params;
}, options: Options) => Promise<TypedResponse> | TypedResponse;
interface InputObject$1<ContentType = BaseContentType, Body = unknown, Query = BaseQuery, Params = BaseParams> {
    contentType?: ContentType;
    /*! Body schema is supported only for certain content types that support input validation. */
    body?: ContentType extends ContentTypesThatSupportInputValidation ? ContentType extends FormDataContentType ? ZodFormSchema<Body> : ZodType<Body> : never;
    /*! If defined, this will override the body schema for the OpenAPI spec. */
    bodySchema?: OpenAPIV3_1.SchemaObject | OpenAPIV3_1.ReferenceObject;
    query?: ZodType<Query>;
    /*! If defined, this will override the query schema for the OpenAPI spec. */
    querySchema?: OpenAPIV3_1.SchemaObject | OpenAPIV3_1.ReferenceObject;
    params?: ZodType<Params>;
    /*! If defined, this will override the params schema for the OpenAPI spec. */
    paramsSchema?: OpenAPIV3_1.SchemaObject | OpenAPIV3_1.ReferenceObject;
}
interface RouteOperationDefinition<Method extends keyof typeof ValidMethod = keyof typeof ValidMethod> {
    openApiOperation?: OpenApiOperation;
    method: Method;
    input?: InputObject$1;
    outputs?: readonly OutputObject[];
    middleware1?: RouteMiddleware;
    middleware2?: RouteMiddleware;
    middleware3?: RouteMiddleware;
    handler?: TypedRouteHandler;
}
declare const routeOperation: <Method extends "GET" | "PUT" | "POST" | "DELETE" | "OPTIONS" | "HEAD" | "PATCH">({ openApiOperation, method }: {
    openApiOperation?: Partial<Pick<OpenAPIV3_1.OperationObject<{}>, "servers" | "security" | "tags" | "externalDocs" | "description" | "summary" | "parameters" | "callbacks" | "deprecated">> | undefined;
    method: Method;
}) => {
    input: <ContentType extends AnyContentTypeWithAutocompleteForMostCommonOnes, Body_1, Query extends BaseQuery, Params extends BaseParams>(input: InputObject$1<ContentType, Body_1, Query, Params>) => {
        outputs: <ResponseBody, Status extends number, ResponseContentType extends AnyContentTypeWithAutocompleteForMostCommonOnes, Outputs extends readonly OutputObject<ResponseBody, Status, ResponseContentType>[]>(outputs: Outputs) => {
            middleware: <Options1 extends BaseOptions>(middleware1: RouteMiddleware<BaseOptions, Options1, ResponseBody, Status, ResponseContentType, Outputs, void | TypedNextResponseType<z.core.output<Outputs[number]["body"]>, Outputs[number]["status"], Outputs[number]["contentType"]> | NextResponse<z.core.output<Outputs[number]["body"]>>>) => {
                middleware: <Options2 extends BaseOptions>(middleware2: RouteMiddleware<Options1, Options2, ResponseBody, Status, ResponseContentType, Outputs, void | TypedNextResponseType<z.core.output<Outputs[number]["body"]>, Outputs[number]["status"], Outputs[number]["contentType"]> | NextResponse<z.core.output<Outputs[number]["body"]>>>) => {
                    middleware: <Options3 extends BaseOptions>(middleware3: RouteMiddleware<Options2, Options3, ResponseBody, Status, ResponseContentType, Outputs, void | TypedNextResponseType<z.core.output<Outputs[number]["body"]>, Outputs[number]["status"], Outputs[number]["contentType"]> | NextResponse<z.core.output<Outputs[number]["body"]>>>) => {
                        handler: (handler: TypedRouteHandler<Method, ContentType, Body_1, Query, Params, Options3, ResponseBody, Status, ResponseContentType, Outputs, void | TypedNextResponseType<z.core.output<Outputs[number]["body"]>, Outputs[number]["status"], Outputs[number]["contentType"]> | NextResponse<z.core.output<Outputs[number]["body"]>>>) => RouteOperationDefinition<Method>;
                    };
                    handler: (handler: TypedRouteHandler<Method, ContentType, Body_1, Query, Params, Options2, ResponseBody, Status, ResponseContentType, Outputs, void | TypedNextResponseType<z.core.output<Outputs[number]["body"]>, Outputs[number]["status"], Outputs[number]["contentType"]> | NextResponse<z.core.output<Outputs[number]["body"]>>>) => RouteOperationDefinition<Method>;
                };
                handler: (handler: TypedRouteHandler<Method, ContentType, Body_1, Query, Params, Options1, ResponseBody, Status, ResponseContentType, Outputs, void | TypedNextResponseType<z.core.output<Outputs[number]["body"]>, Outputs[number]["status"], Outputs[number]["contentType"]> | NextResponse<z.core.output<Outputs[number]["body"]>>>) => RouteOperationDefinition<Method>;
            };
            handler: (handler: TypedRouteHandler<Method, ContentType, Body_1, Query, Params, BaseOptions, ResponseBody, Status, ResponseContentType, Outputs, void | TypedNextResponseType<z.core.output<Outputs[number]["body"]>, Outputs[number]["status"], Outputs[number]["contentType"]> | NextResponse<z.core.output<Outputs[number]["body"]>>>) => RouteOperationDefinition<Method>;
        };
        middleware: <Options1_1 extends BaseOptions>(middleware1: RouteMiddleware<BaseOptions, Options1_1, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[], void | NextResponse<unknown> | TypedNextResponseType<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>>) => {
            middleware: <Options2_1 extends BaseOptions>(middleware2: RouteMiddleware<Options1_1, Options2_1, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[], void | NextResponse<unknown> | TypedNextResponseType<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>>) => {
                middleware: <Options3_1 extends BaseOptions>(middleware3: RouteMiddleware<Options2_1, Options3_1, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[], void | NextResponse<unknown> | TypedNextResponseType<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>>) => {
                    outputs: <ResponseBody_1, Status_1 extends number, ResponseContentType_1 extends AnyContentTypeWithAutocompleteForMostCommonOnes, Outputs_1 extends readonly OutputObject<ResponseBody_1, Status_1, ResponseContentType_1>[]>(outputs: Outputs_1) => {
                        handler: (handler: TypedRouteHandler<Method, ContentType, Body_1, Query, Params, Options3_1, ResponseBody_1, Status_1, ResponseContentType_1, Outputs_1, void | TypedNextResponseType<z.core.output<Outputs_1[number]["body"]>, Outputs_1[number]["status"], Outputs_1[number]["contentType"]> | NextResponse<z.core.output<Outputs_1[number]["body"]>>>) => RouteOperationDefinition<Method>;
                    };
                    handler: (handler: TypedRouteHandler<Method, ContentType, Body_1, Query, Params, Options2_1, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[], void | NextResponse<unknown> | TypedNextResponseType<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>>) => RouteOperationDefinition<Method>;
                };
                outputs: <ResponseBody_2, Status_2 extends number, ResponseContentType_2 extends AnyContentTypeWithAutocompleteForMostCommonOnes, Outputs_2 extends readonly OutputObject<ResponseBody_2, Status_2, ResponseContentType_2>[]>(outputs: Outputs_2) => {
                    handler: (handler: TypedRouteHandler<Method, ContentType, Body_1, Query, Params, Options2_1, ResponseBody_2, Status_2, ResponseContentType_2, Outputs_2, void | TypedNextResponseType<z.core.output<Outputs_2[number]["body"]>, Outputs_2[number]["status"], Outputs_2[number]["contentType"]> | NextResponse<z.core.output<Outputs_2[number]["body"]>>>) => RouteOperationDefinition<Method>;
                };
                handler: (handler: TypedRouteHandler<Method, ContentType, Body_1, Query, Params, Options2_1, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[], void | NextResponse<unknown> | TypedNextResponseType<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>>) => RouteOperationDefinition<Method>;
            };
            outputs: <ResponseBody_3, Status_3 extends number, ResponseContentType_3 extends AnyContentTypeWithAutocompleteForMostCommonOnes, Outputs_3 extends readonly OutputObject<ResponseBody_3, Status_3, ResponseContentType_3>[]>(outputs: Outputs_3) => {
                handler: (handler: TypedRouteHandler<Method, ContentType, Body_1, Query, Params, Options1_1, ResponseBody_3, Status_3, ResponseContentType_3, Outputs_3, void | TypedNextResponseType<z.core.output<Outputs_3[number]["body"]>, Outputs_3[number]["status"], Outputs_3[number]["contentType"]> | NextResponse<z.core.output<Outputs_3[number]["body"]>>>) => RouteOperationDefinition<Method>;
            };
            handler: (handler: TypedRouteHandler<Method, ContentType, Body_1, Query, Params, Options1_1, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[], void | NextResponse<unknown> | TypedNextResponseType<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>>) => RouteOperationDefinition<Method>;
        };
        handler: (handler: TypedRouteHandler<Method, ContentType, Body_1, Query, Params, BaseOptions, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[], void | NextResponse<unknown> | TypedNextResponseType<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>>) => RouteOperationDefinition<Method>;
    };
    outputs: <ResponseBody_4, Status_4 extends number, ResponseContentType_4 extends AnyContentTypeWithAutocompleteForMostCommonOnes, Outputs_4 extends readonly OutputObject<ResponseBody_4, Status_4, ResponseContentType_4>[]>(outputs: Outputs_4) => {
        middleware: <Options1_2 extends BaseOptions>(middleware1: RouteMiddleware<BaseOptions, Options1_2, ResponseBody_4, Status_4, ResponseContentType_4, Outputs_4, void | TypedNextResponseType<z.core.output<Outputs_4[number]["body"]>, Outputs_4[number]["status"], Outputs_4[number]["contentType"]> | NextResponse<z.core.output<Outputs_4[number]["body"]>>>) => {
            middleware: <Options2_2 extends BaseOptions>(middleware2: RouteMiddleware<Options1_2, Options2_2, ResponseBody_4, Status_4, ResponseContentType_4, Outputs_4, void | TypedNextResponseType<z.core.output<Outputs_4[number]["body"]>, Outputs_4[number]["status"], Outputs_4[number]["contentType"]> | NextResponse<z.core.output<Outputs_4[number]["body"]>>>) => {
                middleware: <Options3_2 extends BaseOptions>(middleware3: RouteMiddleware<Options2_2, Options3_2, ResponseBody_4, Status_4, ResponseContentType_4, Outputs_4, void | TypedNextResponseType<z.core.output<Outputs_4[number]["body"]>, Outputs_4[number]["status"], Outputs_4[number]["contentType"]> | NextResponse<z.core.output<Outputs_4[number]["body"]>>>) => {
                    handler: (handler: TypedRouteHandler<Method, AnyContentTypeWithAutocompleteForMostCommonOnes, unknown, BaseQuery, BaseParams, Options3_2, ResponseBody_4, Status_4, ResponseContentType_4, Outputs_4, void | TypedNextResponseType<z.core.output<Outputs_4[number]["body"]>, Outputs_4[number]["status"], Outputs_4[number]["contentType"]> | NextResponse<z.core.output<Outputs_4[number]["body"]>>>) => RouteOperationDefinition<Method>;
                };
                handler: (handler: TypedRouteHandler<Method, AnyContentTypeWithAutocompleteForMostCommonOnes, unknown, BaseQuery, BaseParams, Options2_2, ResponseBody_4, Status_4, ResponseContentType_4, Outputs_4, void | TypedNextResponseType<z.core.output<Outputs_4[number]["body"]>, Outputs_4[number]["status"], Outputs_4[number]["contentType"]> | NextResponse<z.core.output<Outputs_4[number]["body"]>>>) => RouteOperationDefinition<Method>;
            };
            handler: (handler: TypedRouteHandler<Method, AnyContentTypeWithAutocompleteForMostCommonOnes, unknown, BaseQuery, BaseParams, Options1_2, ResponseBody_4, Status_4, ResponseContentType_4, Outputs_4, void | TypedNextResponseType<z.core.output<Outputs_4[number]["body"]>, Outputs_4[number]["status"], Outputs_4[number]["contentType"]> | NextResponse<z.core.output<Outputs_4[number]["body"]>>>) => RouteOperationDefinition<Method>;
        };
        handler: (handler: TypedRouteHandler<Method, AnyContentTypeWithAutocompleteForMostCommonOnes, unknown, BaseQuery, BaseParams, BaseOptions, ResponseBody_4, Status_4, ResponseContentType_4, Outputs_4, void | TypedNextResponseType<z.core.output<Outputs_4[number]["body"]>, Outputs_4[number]["status"], Outputs_4[number]["contentType"]> | NextResponse<z.core.output<Outputs_4[number]["body"]>>>) => RouteOperationDefinition<Method>;
    };
    middleware: <Options1_3 extends BaseOptions>(middleware1: RouteMiddleware<BaseOptions, Options1_3, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[], void | NextResponse<unknown> | TypedNextResponseType<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>>) => {
        middleware: <Options2_3 extends BaseOptions>(middleware2: RouteMiddleware<Options1_3, Options2_3, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[], void | NextResponse<unknown> | TypedNextResponseType<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>>) => {
            middleware: <Options3_3 extends BaseOptions>(middleware3: RouteMiddleware<Options2_3, Options3_3, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[], void | NextResponse<unknown> | TypedNextResponseType<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>>) => {
                handler: (handler: TypedRouteHandler<Method, AnyContentTypeWithAutocompleteForMostCommonOnes, unknown, BaseQuery, BaseParams, Options3_3, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[], void | NextResponse<unknown> | TypedNextResponseType<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>>) => RouteOperationDefinition<Method>;
            };
            handler: (handler: TypedRouteHandler<Method, AnyContentTypeWithAutocompleteForMostCommonOnes, unknown, BaseQuery, BaseParams, Options2_3, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[], void | NextResponse<unknown> | TypedNextResponseType<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>>) => RouteOperationDefinition<Method>;
        };
        handler: (handler: TypedRouteHandler<Method, AnyContentTypeWithAutocompleteForMostCommonOnes, unknown, BaseQuery, BaseParams, Options1_3, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[], void | NextResponse<unknown> | TypedNextResponseType<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>>) => RouteOperationDefinition<Method>;
    };
    handler: (handler: TypedRouteHandler) => RouteOperationDefinition<Method>;
};

declare const route: <T extends Record<string, RouteOperationDefinition<"GET" | "PUT" | "POST" | "DELETE" | "OPTIONS" | "HEAD" | "PATCH">>>(operations: T, options?: {
    openApiPath?: OpenApiPathItem;
}) => { [key in T[keyof T]["method"]]: {
    (_req: NextRequest, context: {
        params: Promise<BaseParams>;
    }): Promise<NextResponse<unknown> | TypedNextResponseType<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>>;
    _getPathsForRoute(route: string): Promise<NrfOasData>;
}; };

declare const rpcRoute: <T extends Record<string, RpcOperationDefinition<any, any, any, any>>>(operations: T, options?: {
    openApiPath?: OpenApiPathItem;
}) => {
    POST: {
        (req: NextRequest, { params }: {
            params: Promise<BaseParams>;
        }): Promise<NextResponse<unknown>>;
        _getPathsForRoute(route: string): Promise<NrfOasData>;
        client: RpcClient<T>;
    };
};

interface NrfOasData {
    paths?: OpenAPIV3_1.PathsObject;
    schemas?: Record<string, OpenAPIV3_1.SchemaObject>;
}

type TypedNextApiRequest<Method = keyof typeof ValidMethod, ContentType = BaseContentType, Body = unknown, QueryAndParams = BaseQuery & BaseParams> = Modify<NextApiRequest, {
    /*!
     * For GET requests, attempting to parse a JSON body gives a type error.
     * application/json requests are typed with a strongly-typed JSON body.
     * application/x-www-form-urlencoded and multipart/form-data requests are
     * typed with a strongly-typed form data object.
     */
    body: Method extends 'GET' ? never : ContentType extends FormDataContentType ? TypedFormData<Body> : Body;
    query: QueryAndParams;
    method: ValidMethod;
}>;
type TypedNextApiResponse<Body, Status, ContentType> = Modify<NextApiResponse<Body>, {
    status: (status: Status) => TypedNextApiResponse<Body, Status, ContentType>;
    redirect: (status: Status, url: string) => TypedNextApiResponse<Body, Status, ContentType>;
    setDraftMode: (options: {
        enable: boolean;
    }) => TypedNextApiResponse<Body, Status, ContentType>;
    setPreviewData: (data: object | string, options?: {
        maxAge?: number;
        path?: string;
    }) => TypedNextApiResponse<Body, Status, ContentType>;
    clearPreviewData: (options?: {
        path?: string;
    }) => TypedNextApiResponse<Body, Status, ContentType>;
    setHeader: <K extends AnyCase<'Content-Type'> | string, V extends number | string | readonly string[]>(name: K, value: K extends AnyCase<'Content-Type'> ? ContentType : V) => void;
}>;
type TypedApiRouteHandler<Method extends keyof typeof ValidMethod = keyof typeof ValidMethod, ContentType extends BaseContentType = BaseContentType, Body = unknown, Query extends BaseQuery = BaseQuery, Params extends BaseParams = BaseParams, Options extends BaseOptions = BaseOptions, ResponseBody = unknown, Status extends BaseStatus = BaseStatus, ResponseContentType extends BaseContentType = BaseContentType, Outputs extends ReadonlyArray<OutputObject<ResponseBody, Status, ResponseContentType>> = ReadonlyArray<OutputObject<ResponseBody, Status, ResponseContentType>>> = (req: TypedNextApiRequest<Method, ContentType, Body, Query & Params>, res: TypedNextApiResponse<z.infer<Outputs[number]['body']>, Outputs[number]['status'], Outputs[number]['contentType']>, options: Options) => Promise<void> | void;
type ApiRouteMiddleware<InputOptions extends BaseOptions = BaseOptions, OutputOptions extends BaseOptions = BaseOptions, ResponseBody = unknown, Status extends BaseStatus = BaseStatus, ResponseContentType extends BaseContentType = BaseContentType, Outputs extends ReadonlyArray<OutputObject<ResponseBody, Status, ResponseContentType>> = ReadonlyArray<OutputObject<ResponseBody, Status, ResponseContentType>>> = (req: NextApiRequest, res: TypedNextApiResponse<z.infer<Outputs[number]['body']>, Outputs[number]['status'], Outputs[number]['contentType']>, options: InputOptions) => Promise<void> | void | Promise<OutputOptions> | OutputOptions;
interface InputObject<ContentType = BaseContentType, Body = unknown, Query = BaseQuery, Params = BaseParams> {
    contentType?: ContentType;
    /*!
     * Body schema is supported only for certain content types that support input validation.
     * multipart/form-data validation is also supported with app router.
     */
    body?: ContentType extends ContentTypesThatSupportInputValidation ? ContentType extends FormDataContentType ? ZodFormSchema<Body> : ZodType<Body> : never;
    /*! If defined, this will override the body schema for the OpenAPI spec. */
    bodySchema?: OpenAPIV3_1.SchemaObject | OpenAPIV3_1.ReferenceObject;
    query?: ZodType<Query>;
    /*! If defined, this will override the query schema for the OpenAPI spec. */
    querySchema?: OpenAPIV3_1.SchemaObject | OpenAPIV3_1.ReferenceObject;
    params?: ZodType<Params>;
    /*! If defined, this will override the params schema for the OpenAPI spec. */
    paramsSchema?: OpenAPIV3_1.SchemaObject | OpenAPIV3_1.ReferenceObject;
}
interface ApiRouteOperationDefinition<Method extends keyof typeof ValidMethod = keyof typeof ValidMethod> {
    openApiOperation?: OpenApiOperation;
    method: Method;
    input?: InputObject;
    outputs?: readonly OutputObject[];
    middleware1?: ApiRouteMiddleware;
    middleware2?: ApiRouteMiddleware;
    middleware3?: ApiRouteMiddleware;
    handler?: TypedApiRouteHandler;
}
declare const apiRouteOperation: <Method extends "GET" | "PUT" | "POST" | "DELETE" | "OPTIONS" | "HEAD" | "PATCH">({ openApiOperation, method }: {
    openApiOperation?: Partial<Pick<OpenAPIV3_1.OperationObject<{}>, "servers" | "security" | "tags" | "externalDocs" | "description" | "summary" | "parameters" | "callbacks" | "deprecated">> | undefined;
    method: Method;
}) => {
    input: <ContentType extends AnyContentTypeWithAutocompleteForMostCommonOnes, Body_1, Query extends BaseQuery, Params extends BaseParams>(input: InputObject<ContentType, Body_1, Query, Params>) => {
        outputs: <ResponseBody, Status extends number, ResponseContentType extends AnyContentTypeWithAutocompleteForMostCommonOnes, Outputs extends readonly OutputObject<ResponseBody, Status, ResponseContentType>[]>(outputs: Outputs) => {
            middleware: <Options1 extends BaseOptions>(middleware1: ApiRouteMiddleware<BaseOptions, Options1, ResponseBody, Status, ResponseContentType, Outputs>) => {
                middleware: <Options2 extends BaseOptions>(middleware2: ApiRouteMiddleware<Options1, Options2, ResponseBody, Status, ResponseContentType, Outputs>) => {
                    middleware: <Options3 extends BaseOptions>(middleware3: ApiRouteMiddleware<Options2, Options3, ResponseBody, Status, ResponseContentType, Outputs>) => {
                        handler: (handler: TypedApiRouteHandler<Method, ContentType, Body_1, Query, Params, Options3, ResponseBody, Status, ResponseContentType, Outputs>) => ApiRouteOperationDefinition<Method>;
                    };
                    handler: (handler: TypedApiRouteHandler<Method, ContentType, Body_1, Query, Params, Options2, ResponseBody, Status, ResponseContentType, Outputs>) => ApiRouteOperationDefinition<Method>;
                };
                handler: (handler: TypedApiRouteHandler<Method, ContentType, Body_1, Query, Params, Options1, ResponseBody, Status, ResponseContentType, Outputs>) => ApiRouteOperationDefinition<Method>;
            };
            handler: (handler: TypedApiRouteHandler<Method, ContentType, Body_1, Query, Params, BaseOptions, ResponseBody, Status, ResponseContentType, Outputs>) => ApiRouteOperationDefinition<Method>;
        };
        middleware: <Options1_1 extends BaseOptions>(middleware1: ApiRouteMiddleware<BaseOptions, Options1_1, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => {
            middleware: <Options2_1 extends BaseOptions>(middleware2: ApiRouteMiddleware<Options1_1, Options2_1, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => {
                middleware: <Options3_1 extends BaseOptions>(middleware3: ApiRouteMiddleware<Options2_1, Options3_1, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => {
                    outputs: <ResponseBody_1, Status_1 extends number, ResponseContentType_1 extends AnyContentTypeWithAutocompleteForMostCommonOnes, Outputs_1 extends readonly OutputObject<ResponseBody_1, Status_1, ResponseContentType_1>[]>(outputs: Outputs_1) => {
                        handler: (handler: TypedApiRouteHandler<Method, ContentType, Body_1, Query, Params, Options3_1, ResponseBody_1, Status_1, ResponseContentType_1, Outputs_1>) => ApiRouteOperationDefinition<Method>;
                    };
                    handler: (handler: TypedApiRouteHandler<Method, ContentType, Body_1, Query, Params, Options3_1, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => ApiRouteOperationDefinition<Method>;
                };
                outputs: <ResponseBody_2, Status_2 extends number, ResponseContentType_2 extends AnyContentTypeWithAutocompleteForMostCommonOnes, Outputs_2 extends readonly OutputObject<ResponseBody_2, Status_2, ResponseContentType_2>[]>(outputs: Outputs_2) => {
                    handler: (handler: TypedApiRouteHandler<Method, ContentType, Body_1, Query, Params, Options2_1, ResponseBody_2, Status_2, ResponseContentType_2, Outputs_2>) => ApiRouteOperationDefinition<Method>;
                };
                handler: (handler: TypedApiRouteHandler<Method, ContentType, Body_1, Query, Params, Options2_1, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => ApiRouteOperationDefinition<Method>;
            };
            outputs: <ResponseBody_3, Status_3 extends number, ResponseContentType_3 extends AnyContentTypeWithAutocompleteForMostCommonOnes, Outputs_3 extends readonly OutputObject<ResponseBody_3, Status_3, ResponseContentType_3>[]>(outputs: Outputs_3) => {
                handler: (handler: TypedApiRouteHandler<Method, ContentType, Body_1, Query, Params, Options1_1, ResponseBody_3, Status_3, ResponseContentType_3, Outputs_3>) => ApiRouteOperationDefinition<Method>;
            };
            handler: (handler: TypedApiRouteHandler<Method, ContentType, Body_1, Query, Params, Options1_1, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => ApiRouteOperationDefinition<Method>;
        };
        handler: (handler: TypedApiRouteHandler<Method, ContentType, Body_1, Query, BaseParams, BaseOptions, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => ApiRouteOperationDefinition<Method>;
    };
    outputs: <ResponseBody_4, Status_4 extends number, ResponseContentType_4 extends AnyContentTypeWithAutocompleteForMostCommonOnes, Outputs_4 extends readonly OutputObject<ResponseBody_4, Status_4, ResponseContentType_4>[]>(outputs: Outputs_4) => {
        middleware: <Options1_2 extends BaseOptions>(middleware1: ApiRouteMiddleware<BaseOptions, Options1_2, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => {
            middleware: <Options2_2 extends BaseOptions>(middleware2: ApiRouteMiddleware<Options1_2, Options2_2, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => {
                middleware: <Options3_2 extends BaseOptions>(middleware3: ApiRouteMiddleware<Options2_2, Options3_2, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => {
                    handler: (handler: TypedApiRouteHandler<Method, AnyContentTypeWithAutocompleteForMostCommonOnes, unknown, BaseQuery, BaseParams, Options3_2, ResponseBody_4, Status_4, ResponseContentType_4, Outputs_4>) => ApiRouteOperationDefinition<Method>;
                };
                handler: (handler: TypedApiRouteHandler<Method, AnyContentTypeWithAutocompleteForMostCommonOnes, unknown, BaseQuery, BaseParams, Options2_2, ResponseBody_4, Status_4, ResponseContentType_4, Outputs_4>) => ApiRouteOperationDefinition<Method>;
            };
            handler: (handler: TypedApiRouteHandler<Method, AnyContentTypeWithAutocompleteForMostCommonOnes, unknown, BaseQuery, BaseParams, Options1_2, ResponseBody_4, Status_4, ResponseContentType_4, Outputs_4>) => ApiRouteOperationDefinition<Method>;
        };
        handler: (handler: TypedApiRouteHandler<Method, AnyContentTypeWithAutocompleteForMostCommonOnes, unknown, BaseQuery, BaseParams, BaseOptions, ResponseBody_4, Status_4, ResponseContentType_4, Outputs_4>) => ApiRouteOperationDefinition<Method>;
    };
    middleware: <Options1_3 extends BaseOptions>(middleware1: ApiRouteMiddleware<BaseOptions, Options1_3, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => {
        middleware: <Options2_3 extends BaseOptions>(middleware2: ApiRouteMiddleware<Options1_3, Options2_3, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => {
            middleware: <Options3_3 extends BaseOptions>(middleware3: ApiRouteMiddleware<Options2_3, Options3_3, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => {
                handler: (handler: TypedApiRouteHandler<Method, AnyContentTypeWithAutocompleteForMostCommonOnes, unknown, BaseQuery, BaseParams, Options3_3, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => ApiRouteOperationDefinition<Method>;
            };
            handler: (handler: TypedApiRouteHandler<Method, AnyContentTypeWithAutocompleteForMostCommonOnes, unknown, BaseQuery, BaseParams, Options2_3, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => ApiRouteOperationDefinition<Method>;
        };
        handler: (handler: TypedApiRouteHandler<Method, AnyContentTypeWithAutocompleteForMostCommonOnes, unknown, BaseQuery, BaseParams, Options1_3, unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes, readonly OutputObject<unknown, number, AnyContentTypeWithAutocompleteForMostCommonOnes>[]>) => ApiRouteOperationDefinition<Method>;
    };
    handler: (handler: TypedApiRouteHandler) => ApiRouteOperationDefinition<Method>;
};

declare const apiRoute: <T extends Record<string, ApiRouteOperationDefinition<"GET" | "PUT" | "POST" | "DELETE" | "OPTIONS" | "HEAD" | "PATCH">>>(operations: T, options?: {
    openApiPath?: OpenApiPathItem;
}) => {
    (req: NextApiRequest, res: NextApiResponse): Promise<Response | undefined>;
    _getPathsForRoute(route: string): Promise<NrfOasData>;
};

declare const docsApiRoute: (_config?: NextRestFrameworkConfig) => {
    (req: NextApiRequest, res: NextApiResponse): Promise<Response | undefined>;
    _nextRestFrameworkConfig: Required<NextRestFrameworkConfig> & NextRestFrameworkConfig;
};

declare const rpcApiRoute: <T extends Record<string, RpcOperationDefinition<any, any, any, any>>>(operations: T, options?: {
    openApiPath?: OpenApiPathItem;
}) => {
    (req: NextApiRequest, res: NextApiResponse): Promise<Response | undefined>;
    _getPathsForRoute(route: string): Promise<NrfOasData>;
    client: RpcClient<T>;
};

export { type NextRestFrameworkErrorLogContext, type NextRestFrameworkErrorReporter, type TypedNextApiRequest, type TypedNextApiResponse, type TypedNextRequest, TypedNextResponse, apiRoute, apiRouteOperation, docsApiRoute, docsRoute, route, routeOperation, rpcApiRoute, rpcRoute, setErrorReporter };
