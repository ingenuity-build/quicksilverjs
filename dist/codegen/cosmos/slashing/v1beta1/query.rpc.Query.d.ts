import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "./query";
export declare class Query {
    /** Params queries the parameters of slashing module */
    static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** SigningInfo queries the signing info of given cons address */
    static signingInfo(request: QuerySigningInfoRequest, initRequest?: fm.InitReq): Promise<QuerySigningInfoResponse>;
    /** SigningInfos queries signing info of all validators */
    static signingInfos(request: QuerySigningInfosRequest, initRequest?: fm.InitReq): Promise<QuerySigningInfosResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Params queries the parameters of slashing module */
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** SigningInfo queries the signing info of given cons address */
    signingInfo(req: QuerySigningInfoRequest, headers?: HeadersInit): Promise<QuerySigningInfoResponse>;
    /** SigningInfos queries signing info of all validators */
    signingInfos(req: QuerySigningInfosRequest, headers?: HeadersInit): Promise<QuerySigningInfosResponse>;
}
