import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
export declare class Query {
    /** Params returns the total set of minting parameters. */
    static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** EpochProvisions current minting epoch provisions value. */
    static epochProvisions(request: QueryEpochProvisionsRequest, initRequest?: fm.InitReq): Promise<QueryEpochProvisionsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Params returns the total set of minting parameters. */
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** EpochProvisions current minting epoch provisions value. */
    epochProvisions(req: QueryEpochProvisionsRequest, headers?: HeadersInit): Promise<QueryEpochProvisionsResponse>;
}
