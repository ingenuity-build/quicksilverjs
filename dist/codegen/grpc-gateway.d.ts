/**
* This file and any referenced files were automatically generated by @cosmology/telescope@0.102.1
* DO NOT MODIFY BY HAND. Instead, download the latest proto files for your chain
* and run the transpile command or yarn proto command to regenerate this bundle.
*/
export declare function b64Encode(buffer: Uint8Array, start: number, end: number): string;
export declare function b64Decode(s: string): Uint8Array;
export interface InitReq extends RequestInit {
    pathPrefix?: string;
}
export declare function replacer(key: any, value: any): any;
export declare function fetchReq<I, O>(path: string, init?: InitReq): Promise<O>;
export type NotifyStreamEntityArrival<T> = (resp: T) => void;
/**
 * fetchStreamingRequest is able to handle grpc-gateway server side streaming call
 * it takes NotifyStreamEntityArrival that lets users respond to entity arrival during the call
 * all entities will be returned as an array after the call finishes.
 **/
export declare function fetchStreamingRequest<S, R>(path: string, callback?: NotifyStreamEntityArrival<R>, init?: InitReq): Promise<void>;
type RequestPayload = Record<string, unknown>;
/**
 * Renders a deeply nested request payload into a string of URL search
 * parameters by first flattening the request payload and then removing keys
 * which are already present in the URL path.
 * @param  {RequestPayload} requestPayload
 * @param  {string[]} urlPathParams
 * @return {string}
 */
export declare function renderURLSearchParams<T extends RequestPayload>(requestPayload: T, urlPathParams?: string[]): string;
export {};
