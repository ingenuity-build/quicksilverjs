import * as fm from "../../../grpc-gateway";
import { QueryClaimsRequest, QueryClaimsResponse } from "./query";
export declare class Query {
    /** Claims returns all zone claims from the current epoch. */
    static claims(request: QueryClaimsRequest, initRequest?: fm.InitReq): Promise<QueryClaimsResponse>;
    /** LastEpochClaims returns all zone claims from the last epoch. */
    static lastEpochClaims(request: QueryClaimsRequest, initRequest?: fm.InitReq): Promise<QueryClaimsResponse>;
    /** UserClaims returns all zone claims for a given address from the current epoch. */
    static userClaims(request: QueryClaimsRequest, initRequest?: fm.InitReq): Promise<QueryClaimsResponse>;
    /** UserLastEpochClaims returns all zone claims for a given address from the last epoch. */
    static userLastEpochClaims(request: QueryClaimsRequest, initRequest?: fm.InitReq): Promise<QueryClaimsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Claims returns all zone claims from the current epoch. */
    claims(req: QueryClaimsRequest, headers?: HeadersInit): Promise<QueryClaimsResponse>;
    /** LastEpochClaims returns all zone claims from the last epoch. */
    lastEpochClaims(req: QueryClaimsRequest, headers?: HeadersInit): Promise<QueryClaimsResponse>;
    /** UserClaims returns all zone claims for a given address from the current epoch. */
    userClaims(req: QueryClaimsRequest, headers?: HeadersInit): Promise<QueryClaimsResponse>;
    /** UserLastEpochClaims returns all zone claims for a given address from the last epoch. */
    userLastEpochClaims(req: QueryClaimsRequest, headers?: HeadersInit): Promise<QueryClaimsResponse>;
}
