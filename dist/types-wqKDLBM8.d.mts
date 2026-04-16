import { OpenAPIV3_1 } from 'openapi-types';
import { ZodType, ZodTransform, ZodPipe } from 'zod';

type DocsProvider = 'redoc' | 'swagger-ui';
type OpenApiObject = Partial<Modify<Omit<OpenAPIV3_1.Document, 'openapi'>, {
    info: Partial<OpenAPIV3_1.InfoObject>;
}>>;
type OpenApiPathItem = Partial<Pick<OpenAPIV3_1.PathItemObject, 'summary' | 'description' | 'servers' | 'parameters'>>;
type OpenApiOperation = Partial<Pick<OpenAPIV3_1.OperationObject, 'tags' | 'summary' | 'description' | 'externalDocs' | 'parameters' | 'callbacks' | 'deprecated' | 'security' | 'servers'>>;
interface NextRestFrameworkConfig {
    /*!
     * Array of paths that are denied by Next REST Framework and not included in the OpenAPI spec.
     * Supports wildcards using asterisk `*` and double asterisk `**` for recursive matching.
     * Example: `['/api/disallowed-path', '/api/disallowed-path-2/*', '/api/disallowed-path-3/**']`
     * Defaults to no paths being disallowed.
     */
    deniedPaths?: string[];
    /*!
     * Array of paths that are allowed by Next REST Framework and included in the OpenAPI spec.
     * Supports wildcards using asterisk `*` and double asterisk `**` for recursive matching.
     * Example: `['/api/allowed-path', '/api/allowed-path-2/*', '/api/allowed-path-3/**']`
     * Defaults to all paths being allowed.
     */
    allowedPaths?: string[];
    /*! An OpenAPI Object that can be used to override and extend the auto-generated specification: https://swagger.io/specification/#openapi-object */
    openApiObject?: OpenApiObject;
    /*! Path that will be used for fetching the OpenAPI spec - defaults to `/openapi.json`. This path also determines the path where this file will be generated inside the `public` folder. */
    openApiJsonPath?: string;
    /*! Customization options for the generated docs. */
    docsConfig?: {
        /*! Determines whether to render the docs using Redoc (`redoc`) or SwaggerUI `swagger-ui`. Defaults to `redoc`. */
        provider?: DocsProvider;
        /*! Custom title, used for the visible title and HTML title.  */
        title?: string;
        /*! Custom description, used for the visible description and HTML meta description. */
        description?: string;
        /*! Custom HTML meta favicon URL. */
        faviconUrl?: string;
        /*! A URL for a custom logo. */
        logoUrl?: string;
        /*! Basic customization options for OG meta tags: https://ogp.me/#metadata */
        ogConfig?: {
            title: string /*! og:title */;
            type: string /*! og:type */;
            url: string /*! og:url */;
            imageUrl: string /*! og:image */;
        };
    };
}
type BaseStatus = number;
type BaseQuery = Record<string, string | string[]>;
type BaseParams = Record<string, string>;
type BaseOptions = Record<string, unknown>;
interface OutputObject<Body = unknown, Status extends BaseStatus = BaseStatus, ContentType extends AnyContentTypeWithAutocompleteForMostCommonOnes = AnyContentTypeWithAutocompleteForMostCommonOnes> {
    body: ZodType<Body>;
    bodySchema?: OpenAPIV3_1.SchemaObject | OpenAPIV3_1.ReferenceObject /*! If defined, this will override the body schema for the OpenAPI spec. */;
    status: Status;
    contentType: ContentType;
    name?: string /*! A custom name for the response, used for the generated component name in the OpenAPI spec. */;
}
type Modify<T, R> = Omit<T, keyof R> & R;
type AnyCase<T extends string> = T | Uppercase<T> | Lowercase<T>;
type StringWithAutocomplete<T> = T | (string & Record<never, never>);
type AnyContentTypeWithAutocompleteForMostCommonOnes = StringWithAutocomplete<'application/java-archive' | 'application/EDI-X12' | 'application/EDIFACT' | 'application/javascript' | 'application/octet-stream' | 'application/ogg' | 'application/pdf' | 'application/xhtml+xml' | 'application/x-shockwave-flash' | 'application/json' | 'application/ld+json' | 'application/xml' | 'application/zip' | 'application/x-www-form-urlencoded'
/********************/
 | 'audio/mpeg' | 'audio/x-ms-wma' | 'audio/vnd.rn-realaudio' | 'audio/x-wav'
/********************/
 | 'image/gif' | 'image/jpeg' | 'image/png' | 'image/tiff' | 'image/vnd.microsoft.icon' | 'image/x-icon' | 'image/vnd.djvu' | 'image/svg+xml'
/********************/
 | 'multipart/mixed' | 'multipart/alternative' | 'multipart/related' | 'multipart/form-data'
/********************/
 | 'text/css' | 'text/csv' | 'text/html' | 'text/javascript' | 'text/plain' | 'text/xml'
/********************/
 | 'video/mpeg' | 'video/mp4' | 'video/quicktime' | 'video/x-ms-wmv' | 'video/x-msvideo' | 'video/x-flv' | 'video/webm'
/********************/
 | 'application/vnd.android.package-archive' | 'application/vnd.oasis.opendocument.text' | 'application/vnd.oasis.opendocument.spreadsheet' | 'application/vnd.oasis.opendocument.presentation' | 'application/vnd.oasis.opendocument.graphics' | 'application/vnd.ms-excel' | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' | 'application/vnd.ms-powerpoint' | 'application/vnd.openxmlformats-officedocument.presentationml.presentation' | 'application/msword' | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' | 'application/vnd.mozilla.xul+xml'>;
type BaseContentType = AnyContentTypeWithAutocompleteForMostCommonOnes;
type ContentTypesThatSupportInputValidation = 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data';
type FormDataContentType = 'application/x-www-form-urlencoded' | 'multipart/form-data';
interface TypedFormData<T> extends FormData {
    append: <K extends keyof T>(name: K, value: Blob | string) => void;
    delete: <K extends keyof T & string>(name: K) => void;
    get: <K extends keyof T & string>(name: K) => T[K] & FormDataEntryValue;
    getAll: <K extends keyof T & string>(name: K) => Array<T[K]> & FormDataEntryValue[];
    has: <K extends keyof T & string>(name: K) => boolean;
    set: <K extends keyof T>(name: K, value: Blob | string) => void;
    forEach: <K extends keyof T & string>(callbackfn: (value: T[K] & FormDataEntryValue, key: K, parent: TypedFormData<T>) => void, thisArg?: any) => void;
}
interface FormDataLikeInput {
    [Symbol.iterator]: () => IterableIterator<[string, FormDataEntryValue]>;
    entries: () => IterableIterator<[string, FormDataEntryValue]>;
}
type ZodFormSchema<Data> = ZodTransform<Data, FormData | FormDataLikeInput> | ZodPipe<any, ZodType<Data>>;

export type { AnyContentTypeWithAutocompleteForMostCommonOnes as A, BaseQuery as B, ContentTypesThatSupportInputValidation as C, FormDataContentType as F, Modify as M, NextRestFrameworkConfig as N, OutputObject as O, TypedFormData as T, ZodFormSchema as Z, BaseContentType as a, BaseParams as b, BaseOptions as c, BaseStatus as d, OpenApiOperation as e, AnyCase as f, OpenApiPathItem as g };
