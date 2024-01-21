import * as fm from "../../../grpc-gateway";
import { QuerySupplyRequest, QuerySupplyResponse } from "./query";
export declare class Query {
    /** Supply provide running epochInfos */
    static supply(request: QuerySupplyRequest, initRequest?: fm.InitReq): Promise<QuerySupplyResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Supply provide running epochInfos */
    supply(req: QuerySupplyRequest, headers?: HeadersInit): Promise<QuerySupplyResponse>;
}
