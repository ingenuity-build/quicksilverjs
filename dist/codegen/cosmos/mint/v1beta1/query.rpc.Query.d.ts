import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
export declare class Query {
    /** Params returns the total set of minting parameters. */
    static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** Inflation returns the current minting inflation value. */
    static inflation(request: QueryInflationRequest, initRequest?: fm.InitReq): Promise<QueryInflationResponse>;
    /** AnnualProvisions current minting annual provisions value. */
    static annualProvisions(request: QueryAnnualProvisionsRequest, initRequest?: fm.InitReq): Promise<QueryAnnualProvisionsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Params returns the total set of minting parameters. */
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** Inflation returns the current minting inflation value. */
    inflation(req: QueryInflationRequest, headers?: HeadersInit): Promise<QueryInflationResponse>;
    /** AnnualProvisions current minting annual provisions value. */
    annualProvisions(req: QueryAnnualProvisionsRequest, headers?: HeadersInit): Promise<QueryAnnualProvisionsResponse>;
}
