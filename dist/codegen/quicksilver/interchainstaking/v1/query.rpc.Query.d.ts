import * as fm from "../../../grpc-gateway";
import { QueryZonesRequest, QueryZonesResponse, QueryZoneRequest, QueryZoneResponse, QueryZoneValidatorsRequest, QueryZoneValidatorsResponse, QueryDepositAccountForChainRequest, QueryDepositAccountForChainResponse, QueryDelegatorIntentRequest, QueryDelegatorIntentResponse, QueryDelegatorIntentsRequest, QueryDelegatorIntentsResponse, QueryDelegationsRequest, QueryDelegationsResponse, QueryReceiptsRequest, QueryReceiptsResponse, QueryTxStatusRequest, QueryTxStatusResponse, QueryWithdrawalRecordsRequest, QueryWithdrawalRecordsResponse, QueryUserWithdrawalRecordsRequest, QueryUnbondingRecordsRequest, QueryUnbondingRecordsResponse, QueryRedelegationRecordsRequest, QueryRedelegationRecordsResponse, QueryMappedAccountsRequest, QueryMappedAccountsResponse } from "./query";
export declare class Query {
    /** Zones provides meta data on connected zones. */
    static zones(request: QueryZonesRequest, initRequest?: fm.InitReq): Promise<QueryZonesResponse>;
    /** Zone provides meta data on a specific zone. */
    static zone(request: QueryZoneRequest, initRequest?: fm.InitReq): Promise<QueryZoneResponse>;
    static zoneValidators(request: QueryZoneValidatorsRequest, initRequest?: fm.InitReq): Promise<QueryZoneValidatorsResponse>;
    /** DepositAccount provides data on the deposit address for a connected zone. */
    static depositAccount(request: QueryDepositAccountForChainRequest, initRequest?: fm.InitReq): Promise<QueryDepositAccountForChainResponse>;
    /**
     * DelegatorIntent provides data on the intent of the delegator for the given
     * zone.
     */
    static delegatorIntent(request: QueryDelegatorIntentRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorIntentResponse>;
    /** DelegatorIntents provides data on the intent of the delegator for all zones */
    static delegatorIntents(request: QueryDelegatorIntentsRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorIntentsResponse>;
    /** Delegations provides data on the delegations for the given zone. */
    static delegations(request: QueryDelegationsRequest, initRequest?: fm.InitReq): Promise<QueryDelegationsResponse>;
    /** Delegations provides data on the delegations for the given zone. */
    static receipts(request: QueryReceiptsRequest, initRequest?: fm.InitReq): Promise<QueryReceiptsResponse>;
    static txStatus(request: QueryTxStatusRequest, initRequest?: fm.InitReq): Promise<QueryTxStatusResponse>;
    /** WithdrawalRecords provides data on the active withdrawals. */
    static zoneWithdrawalRecords(request: QueryWithdrawalRecordsRequest, initRequest?: fm.InitReq): Promise<QueryWithdrawalRecordsResponse>;
    /** WithdrawalRecords provides data on the active withdrawals. */
    static withdrawalRecords(request: QueryWithdrawalRecordsRequest, initRequest?: fm.InitReq): Promise<QueryWithdrawalRecordsResponse>;
    /** WithdrawalRecords provides data on the active withdrawals. */
    static userWithdrawalRecords(request: QueryUserWithdrawalRecordsRequest, initRequest?: fm.InitReq): Promise<QueryWithdrawalRecordsResponse>;
    /** UnbondingRecords provides data on the active unbondings. */
    static unbondingRecords(request: QueryUnbondingRecordsRequest, initRequest?: fm.InitReq): Promise<QueryUnbondingRecordsResponse>;
    /** RedelegationRecords provides data on the active unbondings. */
    static redelegationRecords(request: QueryRedelegationRecordsRequest, initRequest?: fm.InitReq): Promise<QueryRedelegationRecordsResponse>;
    /** MappedAccounts provides data on the mapped accounts for a given user over different host chains. */
    static mappedAccounts(request: QueryMappedAccountsRequest, initRequest?: fm.InitReq): Promise<QueryMappedAccountsResponse>;
}
export declare class QueryClientImpl {
    private readonly url;
    constructor(url: string);
    /** Zones provides meta data on connected zones. */
    zones(req: QueryZonesRequest, headers?: HeadersInit): Promise<QueryZonesResponse>;
    /** Zone provides meta data on a specific zone. */
    zone(req: QueryZoneRequest, headers?: HeadersInit): Promise<QueryZoneResponse>;
    zoneValidators(req: QueryZoneValidatorsRequest, headers?: HeadersInit): Promise<QueryZoneValidatorsResponse>;
    /** DepositAccount provides data on the deposit address for a connected zone. */
    depositAccount(req: QueryDepositAccountForChainRequest, headers?: HeadersInit): Promise<QueryDepositAccountForChainResponse>;
    /**
     * DelegatorIntent provides data on the intent of the delegator for the given
     * zone.
     */
    delegatorIntent(req: QueryDelegatorIntentRequest, headers?: HeadersInit): Promise<QueryDelegatorIntentResponse>;
    /** DelegatorIntents provides data on the intent of the delegator for all zones */
    delegatorIntents(req: QueryDelegatorIntentsRequest, headers?: HeadersInit): Promise<QueryDelegatorIntentsResponse>;
    /** Delegations provides data on the delegations for the given zone. */
    delegations(req: QueryDelegationsRequest, headers?: HeadersInit): Promise<QueryDelegationsResponse>;
    /** Delegations provides data on the delegations for the given zone. */
    receipts(req: QueryReceiptsRequest, headers?: HeadersInit): Promise<QueryReceiptsResponse>;
    txStatus(req: QueryTxStatusRequest, headers?: HeadersInit): Promise<QueryTxStatusResponse>;
    /** WithdrawalRecords provides data on the active withdrawals. */
    zoneWithdrawalRecords(req: QueryWithdrawalRecordsRequest, headers?: HeadersInit): Promise<QueryWithdrawalRecordsResponse>;
    /** WithdrawalRecords provides data on the active withdrawals. */
    withdrawalRecords(req: QueryWithdrawalRecordsRequest, headers?: HeadersInit): Promise<QueryWithdrawalRecordsResponse>;
    /** WithdrawalRecords provides data on the active withdrawals. */
    userWithdrawalRecords(req: QueryUserWithdrawalRecordsRequest, headers?: HeadersInit): Promise<QueryWithdrawalRecordsResponse>;
    /** UnbondingRecords provides data on the active unbondings. */
    unbondingRecords(req: QueryUnbondingRecordsRequest, headers?: HeadersInit): Promise<QueryUnbondingRecordsResponse>;
    /** RedelegationRecords provides data on the active unbondings. */
    redelegationRecords(req: QueryRedelegationRecordsRequest, headers?: HeadersInit): Promise<QueryRedelegationRecordsResponse>;
    /** MappedAccounts provides data on the mapped accounts for a given user over different host chains. */
    mappedAccounts(req: QueryMappedAccountsRequest, headers?: HeadersInit): Promise<QueryMappedAccountsResponse>;
}
