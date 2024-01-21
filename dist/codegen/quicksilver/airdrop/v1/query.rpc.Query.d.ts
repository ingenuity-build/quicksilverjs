import * as fm from "../../../grpc-gateway";
import { QueryParamsRequest, QueryParamsResponse, QueryZoneDropRequest, QueryZoneDropResponse, QueryAccountBalanceRequest, QueryAccountBalanceResponse, QueryZoneDropsRequest, QueryZoneDropsResponse, QueryClaimRecordRequest, QueryClaimRecordResponse, QueryClaimRecordsRequest, QueryClaimRecordsResponse } from "./query";
export declare class Query {
    /** Params returns the total set of airdrop parameters. */
    static params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse>;
    /** ZoneDrop returns the details of the specified zone airdrop. */
    static zoneDrop(request: QueryZoneDropRequest, initRequest?: fm.InitReq): Promise<QueryZoneDropResponse>;
    /** AccountBalance returns the module account balance of the specified zone. */
    static accountBalance(request: QueryAccountBalanceRequest, initRequest?: fm.InitReq): Promise<QueryAccountBalanceResponse>;
    /** ZoneDrops returns all zone airdrops of the specified status. */
    static zoneDrops(request: QueryZoneDropsRequest, initRequest?: fm.InitReq): Promise<QueryZoneDropsResponse>;
    /**
     * ClaimRecord returns the claim record that corresponds to the given zone and
     * address.
     */
    static claimRecord(request: QueryClaimRecordRequest, initRequest?: fm.InitReq): Promise<QueryClaimRecordResponse>;
    /** ClaimRecords returns all the claim records of the given zone. */
    static claimRecords(request: QueryClaimRecordsRequest, initRequest?: fm.InitReq): Promise<QueryClaimRecordsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Params returns the total set of airdrop parameters. */
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    /** ZoneDrop returns the details of the specified zone airdrop. */
    zoneDrop(req: QueryZoneDropRequest, headers?: HeadersInit): Promise<QueryZoneDropResponse>;
    /** AccountBalance returns the module account balance of the specified zone. */
    accountBalance(req: QueryAccountBalanceRequest, headers?: HeadersInit): Promise<QueryAccountBalanceResponse>;
    /** ZoneDrops returns all zone airdrops of the specified status. */
    zoneDrops(req: QueryZoneDropsRequest, headers?: HeadersInit): Promise<QueryZoneDropsResponse>;
    /**
     * ClaimRecord returns the claim record that corresponds to the given zone and
     * address.
     */
    claimRecord(req: QueryClaimRecordRequest, headers?: HeadersInit): Promise<QueryClaimRecordResponse>;
    /** ClaimRecords returns all the claim records of the given zone. */
    claimRecords(req: QueryClaimRecordsRequest, headers?: HeadersInit): Promise<QueryClaimRecordsResponse>;
}
