import * as fm from "../../../grpc-gateway";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
export declare class Query {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    static grants(request: QueryGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGrantsResponse>;
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     *
     * Since: cosmos-sdk 0.46
     */
    static granterGrants(request: QueryGranterGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGranterGrantsResponse>;
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     *
     * Since: cosmos-sdk 0.46
     */
    static granteeGrants(request: QueryGranteeGrantsRequest, initRequest?: fm.InitReq): Promise<QueryGranteeGrantsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    grants(req: QueryGrantsRequest, headers?: HeadersInit): Promise<QueryGrantsResponse>;
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     *
     * Since: cosmos-sdk 0.46
     */
    granterGrants(req: QueryGranterGrantsRequest, headers?: HeadersInit): Promise<QueryGranterGrantsResponse>;
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     *
     * Since: cosmos-sdk 0.46
     */
    granteeGrants(req: QueryGranteeGrantsRequest, headers?: HeadersInit): Promise<QueryGranteeGrantsResponse>;
}
