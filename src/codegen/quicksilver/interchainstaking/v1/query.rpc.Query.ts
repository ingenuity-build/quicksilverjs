import * as fm from "../../../grpc-gateway";
import { QueryZonesRequest, QueryZonesResponse, QueryZoneRequest, QueryZoneResponse, QueryZoneValidatorsRequest, QueryZoneValidatorsResponse, QueryDepositAccountForChainRequest, QueryDepositAccountForChainResponse, QueryDelegatorIntentRequest, QueryDelegatorIntentResponse, QueryDelegatorIntentsRequest, QueryDelegatorIntentsResponse, QueryDelegationsRequest, QueryDelegationsResponse, QueryReceiptsRequest, QueryReceiptsResponse, QueryTxStatusRequest, QueryTxStatusResponse, QueryWithdrawalRecordsRequest, QueryWithdrawalRecordsResponse, QueryUserWithdrawalRecordsRequest, QueryUnbondingRecordsRequest, QueryUnbondingRecordsResponse, QueryRedelegationRecordsRequest, QueryRedelegationRecordsResponse, QueryMappedAccountsRequest, QueryMappedAccountsResponse } from "./query";
export class Query {
  /** Zones provides meta data on connected zones. */
  static zones(request: QueryZonesRequest, initRequest?: fm.InitReq): Promise<QueryZonesResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones?${fm.renderURLSearchParams({
      ...request
    }, [])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Zone provides meta data on a specific zone. */
  static zone(request: QueryZoneRequest, initRequest?: fm.InitReq): Promise<QueryZoneResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/zone/${request["chain_id"]}?${fm.renderURLSearchParams({
      ...request
    }, ["chain_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static zoneValidators(request: QueryZoneValidatorsRequest, initRequest?: fm.InitReq): Promise<QueryZoneValidatorsResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/validators?${fm.renderURLSearchParams({
      ...request
    }, ["chain_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DepositAccount provides data on the deposit address for a connected zone. */
  static depositAccount(request: QueryDepositAccountForChainRequest, initRequest?: fm.InitReq): Promise<QueryDepositAccountForChainResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/deposit_address?${fm.renderURLSearchParams({
      ...request
    }, ["chain_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /**
   * DelegatorIntent provides data on the intent of the delegator for the given
   * zone.
   */
  static delegatorIntent(request: QueryDelegatorIntentRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorIntentResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/delegator_intent/${request["delegator_address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["chain_id", "delegator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** DelegatorIntents provides data on the intent of the delegator for all zones */
  static delegatorIntents(request: QueryDelegatorIntentsRequest, initRequest?: fm.InitReq): Promise<QueryDelegatorIntentsResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/delegator_intents/${request["delegator_address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["delegator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Delegations provides data on the delegations for the given zone. */
  static delegations(request: QueryDelegationsRequest, initRequest?: fm.InitReq): Promise<QueryDelegationsResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/delegations?${fm.renderURLSearchParams({
      ...request
    }, ["chain_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** Delegations provides data on the delegations for the given zone. */
  static receipts(request: QueryReceiptsRequest, initRequest?: fm.InitReq): Promise<QueryReceiptsResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/receipts?${fm.renderURLSearchParams({
      ...request
    }, ["chain_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  static txStatus(request: QueryTxStatusRequest, initRequest?: fm.InitReq): Promise<QueryTxStatusResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/deposits/${request["tx_hash"]}?${fm.renderURLSearchParams({
      ...request
    }, ["chain_id", "tx_hash"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** WithdrawalRecords provides data on the active withdrawals. */
  static zoneWithdrawalRecords(request: QueryWithdrawalRecordsRequest, initRequest?: fm.InitReq): Promise<QueryWithdrawalRecordsResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/withdrawal_records/${request["delegator_address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["chain_id", "delegator_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** WithdrawalRecords provides data on the active withdrawals. */
  static withdrawalRecords(request: QueryWithdrawalRecordsRequest, initRequest?: fm.InitReq): Promise<QueryWithdrawalRecordsResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/withdrawal_records?${fm.renderURLSearchParams({
      ...request
    }, ["chain_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** WithdrawalRecords provides data on the active withdrawals. */
  static userWithdrawalRecords(request: QueryUserWithdrawalRecordsRequest, initRequest?: fm.InitReq): Promise<QueryWithdrawalRecordsResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/users/${request["user_address"]}/withdrawal_records?${fm.renderURLSearchParams({
      ...request
    }, ["user_address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** UnbondingRecords provides data on the active unbondings. */
  static unbondingRecords(request: QueryUnbondingRecordsRequest, initRequest?: fm.InitReq): Promise<QueryUnbondingRecordsResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/unbonding_records?${fm.renderURLSearchParams({
      ...request
    }, ["chain_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** RedelegationRecords provides data on the active unbondings. */
  static redelegationRecords(request: QueryRedelegationRecordsRequest, initRequest?: fm.InitReq): Promise<QueryRedelegationRecordsResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/zones/${request["chain_id"]}/redelegation_records?${fm.renderURLSearchParams({
      ...request
    }, ["chain_id"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
  /** MappedAccounts provides data on the mapped accounts for a given user over different host chains. */
  static mappedAccounts(request: QueryMappedAccountsRequest, initRequest?: fm.InitReq): Promise<QueryMappedAccountsResponse> {
    return fm.fetchReq(`/quicksilver/interchainstaking/v1/mapped_addresses/${request["address"]}?${fm.renderURLSearchParams({
      ...request
    }, ["address"])}`, {
      ...initRequest,
      method: "GET"
    });
  }
}
export class QueryClientImpl {
  private readonly url: string;
  constructor(url: string) {
    this.url = url;
  }
  /** Zones provides meta data on connected zones. */
  async zones(req: QueryZonesRequest, headers?: HeadersInit): Promise<QueryZonesResponse> {
    return Query.zones(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Zone provides meta data on a specific zone. */
  async zone(req: QueryZoneRequest, headers?: HeadersInit): Promise<QueryZoneResponse> {
    return Query.zone(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async zoneValidators(req: QueryZoneValidatorsRequest, headers?: HeadersInit): Promise<QueryZoneValidatorsResponse> {
    return Query.zoneValidators(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DepositAccount provides data on the deposit address for a connected zone. */
  async depositAccount(req: QueryDepositAccountForChainRequest, headers?: HeadersInit): Promise<QueryDepositAccountForChainResponse> {
    return Query.depositAccount(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /**
   * DelegatorIntent provides data on the intent of the delegator for the given
   * zone.
   */
  async delegatorIntent(req: QueryDelegatorIntentRequest, headers?: HeadersInit): Promise<QueryDelegatorIntentResponse> {
    return Query.delegatorIntent(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** DelegatorIntents provides data on the intent of the delegator for all zones */
  async delegatorIntents(req: QueryDelegatorIntentsRequest, headers?: HeadersInit): Promise<QueryDelegatorIntentsResponse> {
    return Query.delegatorIntents(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Delegations provides data on the delegations for the given zone. */
  async delegations(req: QueryDelegationsRequest, headers?: HeadersInit): Promise<QueryDelegationsResponse> {
    return Query.delegations(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** Delegations provides data on the delegations for the given zone. */
  async receipts(req: QueryReceiptsRequest, headers?: HeadersInit): Promise<QueryReceiptsResponse> {
    return Query.receipts(req, {
      headers,
      pathPrefix: this.url
    });
  }
  async txStatus(req: QueryTxStatusRequest, headers?: HeadersInit): Promise<QueryTxStatusResponse> {
    return Query.txStatus(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** WithdrawalRecords provides data on the active withdrawals. */
  async zoneWithdrawalRecords(req: QueryWithdrawalRecordsRequest, headers?: HeadersInit): Promise<QueryWithdrawalRecordsResponse> {
    return Query.zoneWithdrawalRecords(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** WithdrawalRecords provides data on the active withdrawals. */
  async withdrawalRecords(req: QueryWithdrawalRecordsRequest, headers?: HeadersInit): Promise<QueryWithdrawalRecordsResponse> {
    return Query.withdrawalRecords(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** WithdrawalRecords provides data on the active withdrawals. */
  async userWithdrawalRecords(req: QueryUserWithdrawalRecordsRequest, headers?: HeadersInit): Promise<QueryWithdrawalRecordsResponse> {
    return Query.userWithdrawalRecords(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** UnbondingRecords provides data on the active unbondings. */
  async unbondingRecords(req: QueryUnbondingRecordsRequest, headers?: HeadersInit): Promise<QueryUnbondingRecordsResponse> {
    return Query.unbondingRecords(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** RedelegationRecords provides data on the active unbondings. */
  async redelegationRecords(req: QueryRedelegationRecordsRequest, headers?: HeadersInit): Promise<QueryRedelegationRecordsResponse> {
    return Query.redelegationRecords(req, {
      headers,
      pathPrefix: this.url
    });
  }
  /** MappedAccounts provides data on the mapped accounts for a given user over different host chains. */
  async mappedAccounts(req: QueryMappedAccountsRequest, headers?: HeadersInit): Promise<QueryMappedAccountsResponse> {
    return Query.mappedAccounts(req, {
      headers,
      pathPrefix: this.url
    });
  }
}