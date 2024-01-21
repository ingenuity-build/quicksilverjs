import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryProtocolDataRequest, QueryProtocolDataResponse } from "./query";
export declare class Query {
    /** Params returns the total set of participation rewards parameters. */
    static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** ProtocolData returns the requested protocol data. */
    static protocolData(request: QueryProtocolDataRequest, initRequest?: fm.InitReq): Promise<QueryProtocolDataResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Params returns the total set of participation rewards parameters. */
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** ProtocolData returns the requested protocol data. */
    protocolData(req: QueryProtocolDataRequest, headers?: HeadersInit): Promise<QueryProtocolDataResponse>;
}
