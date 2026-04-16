import { z, ZodType } from 'zod';
import { F as FormDataContentType, e as OpenApiOperation, c as BaseOptions, Z as ZodFormSchema, T as TypedFormData } from './types-wqKDLBM8.js';
import { OpenAPIV3_1 } from 'openapi-types';

type RpcRequestInit = Omit<RequestInit, 'method' | 'body'>;
type RpcClient<T extends Record<string, RpcOperationDefinition<any, any, any, any>>> = {
    [key in keyof T]: T[key] & {
        _meta: never;
    };
};
declare const rpcClient: <T extends Record<string, RpcOperationDefinition<any, any, any, any>>>({ url: _url, init }: {
    url: string;
    init?: RpcRequestInit | undefined;
}) => RpcClient<T>;

type BaseContentType = 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data';
interface InputObject<ContentType = BaseContentType, Body = unknown> {
    contentType?: ContentType;
    body?: ContentType extends FormDataContentType ? ZodFormSchema<Body> : ZodType<Body>;
    /*! If defined, this will override the body schema for the OpenAPI spec. */
    bodySchema?: OpenAPIV3_1.SchemaObject | OpenAPIV3_1.ReferenceObject;
}
interface OutputObject {
    body: ZodType;
    /*! If defined, this will override the body schema for the OpenAPI spec. */
    bodySchema?: OpenAPIV3_1.SchemaObject | OpenAPIV3_1.ReferenceObject;
    contentType: BaseContentType;
    name?: string /*! A custom name for the response, used for the generated component name in the OpenAPI spec. */;
}
type RpcMiddleware<InputOptions extends BaseOptions = BaseOptions, OutputOptions extends BaseOptions = BaseOptions> = (params: unknown, options: InputOptions) => Promise<OutputOptions> | OutputOptions | Promise<void> | void;
type RpcOperationHandler<ContentType extends BaseContentType = BaseContentType, Body = unknown, Options extends BaseOptions = BaseOptions, Outputs extends readonly OutputObject[] = readonly OutputObject[]> = (params: ContentType extends FormDataContentType ? TypedFormData<z.infer<ZodFormSchema<Body>>> : z.infer<ZodType<Body>>, options: Options) => Promise<z.infer<Outputs[number]['body']>> | z.infer<Outputs[number]['body']>;
interface OperationDefinitionMeta {
    openApiOperation?: OpenApiOperation;
    input?: InputObject;
    outputs?: readonly OutputObject[];
    middleware1?: RpcOperationHandler;
    middleware2?: RpcOperationHandler;
    middleware3?: RpcOperationHandler;
    handler?: RpcOperationHandler;
}
type RpcOperationDefinition<ContentType extends BaseContentType = BaseContentType, Body = unknown, Outputs extends readonly OutputObject[] = readonly OutputObject[], HasInput extends boolean = false, TypedResponse = Promise<z.infer<Outputs[number]['body']>>> = (HasInput extends true ? (body: ContentType extends FormDataContentType ? FormData : z.infer<ZodType<Body>>) => TypedResponse : () => TypedResponse) & {
    _meta: OperationDefinitionMeta;
};
declare const rpcOperation: (openApiOperation?: OpenApiOperation) => {
    input: <ContentType extends BaseContentType, Body_1>(input: InputObject<ContentType, Body_1>) => {
        outputs: <Output extends readonly OutputObject[]>(outputs: Output) => {
            middleware: <Options1 extends BaseOptions>(middleware1: RpcMiddleware<BaseOptions, Options1>) => {
                middleware: <Options2 extends BaseOptions>(middleware2: RpcMiddleware<Options1, Options2>) => {
                    middleware: <Options3 extends BaseOptions>(middleware3: RpcMiddleware<Options2, Options3>) => {
                        handler: (handler: RpcOperationHandler<ContentType, Body_1, Options3, Output>) => RpcOperationDefinition<ContentType, Body_1, Output, true, Promise<z.core.output<Output[number]["body"]>>>;
                    };
                    handler: (handler: RpcOperationHandler<ContentType, Body_1, Options2, Output>) => RpcOperationDefinition<ContentType, Body_1, Output, true, Promise<z.core.output<Output[number]["body"]>>>;
                };
                handler: (handler: RpcOperationHandler<ContentType, Body_1, Options1, Output>) => RpcOperationDefinition<ContentType, Body_1, Output, true, Promise<z.core.output<Output[number]["body"]>>>;
            };
            handler: (handler: RpcOperationHandler<ContentType, Body_1, BaseOptions, Output>) => RpcOperationDefinition<ContentType, Body_1, Output, true, Promise<z.core.output<Output[number]["body"]>>>;
        };
        middleware: <Options1_1 extends BaseOptions>(middleware1: RpcMiddleware<BaseOptions, Options1_1>) => {
            middleware: <Options2_1 extends BaseOptions>(middleware2: RpcMiddleware<Options1_1, Options2_1>) => {
                middleware: <Options3_1 extends BaseOptions>(middleware3: RpcMiddleware<Options2_1, Options3_1>) => {
                    outputs: <Output_1 extends readonly OutputObject[]>(outputs: Output_1) => {
                        handler: (handler: RpcOperationHandler<ContentType, Body_1, Options3_1, Output_1>) => RpcOperationDefinition<ContentType, Body_1, Output_1, true, Promise<z.core.output<Output_1[number]["body"]>>>;
                    };
                    handler: (handler: RpcOperationHandler<ContentType, Body_1, Options2_1, readonly OutputObject[]>) => RpcOperationDefinition<ContentType, Body_1, readonly OutputObject[], true, Promise<unknown>>;
                };
                outputs: <Output_2 extends readonly OutputObject[]>(outputs: Output_2) => {
                    handler: (handler: RpcOperationHandler<ContentType, Body_1, Options2_1, Output_2>) => RpcOperationDefinition<ContentType, Body_1, Output_2, true, Promise<z.core.output<Output_2[number]["body"]>>>;
                };
                handler: (handler: RpcOperationHandler<ContentType, Body_1, Options2_1, readonly OutputObject[]>) => RpcOperationDefinition<ContentType, Body_1, readonly OutputObject[], true, Promise<unknown>>;
            };
            outputs: <Output_3 extends readonly OutputObject[]>(outputs: Output_3) => {
                handler: (handler: RpcOperationHandler<ContentType, Body_1, Options1_1, Output_3>) => RpcOperationDefinition<ContentType, Body_1, Output_3, true, Promise<z.core.output<Output_3[number]["body"]>>>;
            };
            handler: (handler: RpcOperationHandler<ContentType, Body_1, Options1_1, readonly OutputObject[]>) => RpcOperationDefinition<ContentType, Body_1, readonly OutputObject[], true, Promise<unknown>>;
        };
        handler: (handler: RpcOperationHandler<ContentType, Body_1, BaseOptions, readonly OutputObject[]>) => RpcOperationDefinition<ContentType, Body_1, readonly OutputObject[], true, Promise<unknown>>;
    };
    outputs: <Output_4 extends readonly OutputObject[]>(outputs: Output_4) => {
        middleware: <Options1_2 extends BaseOptions>(middleware1: RpcMiddleware<BaseOptions, Options1_2>) => {
            middleware: <Options2_2 extends BaseOptions>(middleware2: RpcMiddleware<Options1_2, Options2_2>) => {
                middleware: <Options3_2 extends BaseOptions>(middleware3: RpcMiddleware<Options2_2, Options3_2>) => {
                    handler: (handler: RpcOperationHandler<BaseContentType, unknown, Options3_2, Output_4>) => RpcOperationDefinition<BaseContentType, unknown, Output_4, false, Promise<z.core.output<Output_4[number]["body"]>>>;
                };
                handler: (handler: RpcOperationHandler<BaseContentType, unknown, Options2_2, Output_4>) => RpcOperationDefinition<BaseContentType, unknown, Output_4, false, Promise<z.core.output<Output_4[number]["body"]>>>;
            };
            handler: (handler: RpcOperationHandler<BaseContentType, unknown, Options1_2, Output_4>) => RpcOperationDefinition<BaseContentType, unknown, Output_4, false, Promise<z.core.output<Output_4[number]["body"]>>>;
        };
        handler: (handler: RpcOperationHandler<BaseContentType, unknown, BaseOptions, Output_4>) => RpcOperationDefinition<BaseContentType, unknown, Output_4, false, Promise<z.core.output<Output_4[number]["body"]>>>;
    };
    middleware: <Options1_3 extends BaseOptions>(middleware1: RpcMiddleware<BaseOptions, Options1_3>) => {
        middleware: <Options2_3 extends BaseOptions>(middleware2: RpcMiddleware<Options1_3, Options2_3>) => {
            middleware: <Options3_3 extends BaseOptions>(middleware3: RpcMiddleware<Options2_3, Options3_3>) => {
                handler: (handler: RpcOperationHandler<BaseContentType, unknown, Options3_3, readonly OutputObject[]>) => RpcOperationDefinition<BaseContentType, unknown, readonly OutputObject[], false, Promise<unknown>>;
            };
            handler: (handler: RpcOperationHandler<BaseContentType, unknown, Options2_3, readonly OutputObject[]>) => RpcOperationDefinition<BaseContentType, unknown, readonly OutputObject[], false, Promise<unknown>>;
        };
        handler: (handler: RpcOperationHandler<BaseContentType, unknown, Options1_3, readonly OutputObject[]>) => RpcOperationDefinition<BaseContentType, unknown, readonly OutputObject[], false, Promise<unknown>>;
    };
    handler: (handler: RpcOperationHandler) => RpcOperationDefinition<BaseContentType, unknown, readonly OutputObject[], false, Promise<unknown>>;
};

export { type RpcOperationDefinition as R, type RpcClient as a, rpcClient as b, rpcOperation as r };
