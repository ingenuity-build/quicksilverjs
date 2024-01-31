import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Zone, ZoneAmino, ZoneSDKType, Validator, ValidatorAmino, ValidatorSDKType, DelegatorIntent, DelegatorIntentAmino, DelegatorIntentSDKType, Delegation, DelegationAmino, DelegationSDKType, Receipt, ReceiptAmino, ReceiptSDKType, WithdrawalRecord, WithdrawalRecordAmino, WithdrawalRecordSDKType, UnbondingRecord, UnbondingRecordAmino, UnbondingRecordSDKType, RedelegationRecord, RedelegationRecordAmino, RedelegationRecordSDKType } from "./interchainstaking";
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes, isObject } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Statistics {
  chain_id: string;
  deposited: Long;
  deposits: Long;
  depositors: Long;
  delegated: Long;
  supply: Long;
  distance_to_target: string;
}
export interface StatisticsProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.Statistics";
  value: Uint8Array;
}
export interface StatisticsAmino {
  chain_id: string;
  deposited: string;
  deposits: string;
  depositors: string;
  delegated: string;
  supply: string;
  distance_to_target: string;
}
export interface StatisticsAminoMsg {
  type: "/quicksilver.interchainstaking.v1.Statistics";
  value: StatisticsAmino;
}
export interface StatisticsSDKType {
  chain_id: string;
  deposited: Long;
  deposits: Long;
  depositors: Long;
  delegated: Long;
  supply: Long;
  distance_to_target: string;
}
export interface QueryZonesRequest {
  pagination: PageRequest;
}
export interface QueryZonesRequestProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryZonesRequest";
  value: Uint8Array;
}
export interface QueryZonesRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryZonesRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryZonesRequest";
  value: QueryZonesRequestAmino;
}
export interface QueryZonesRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryZonesResponse {
  zones: Zone[];
  stats: Statistics[];
  pagination: PageResponse;
}
export interface QueryZonesResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryZonesResponse";
  value: Uint8Array;
}
export interface QueryZonesResponseAmino {
  zones: ZoneAmino[];
  stats: StatisticsAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryZonesResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryZonesResponse";
  value: QueryZonesResponseAmino;
}
export interface QueryZonesResponseSDKType {
  zones: ZoneSDKType[];
  stats: StatisticsSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryZoneRequest {
  chain_id: string;
}
export interface QueryZoneRequestProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryZoneRequest";
  value: Uint8Array;
}
export interface QueryZoneRequestAmino {
  chain_id: string;
}
export interface QueryZoneRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryZoneRequest";
  value: QueryZoneRequestAmino;
}
export interface QueryZoneRequestSDKType {
  chain_id: string;
}
export interface QueryZoneResponse {
  zone: Zone;
  stats: Statistics;
}
export interface QueryZoneResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryZoneResponse";
  value: Uint8Array;
}
export interface QueryZoneResponseAmino {
  zone?: ZoneAmino;
  stats?: StatisticsAmino;
}
export interface QueryZoneResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryZoneResponse";
  value: QueryZoneResponseAmino;
}
export interface QueryZoneResponseSDKType {
  zone: ZoneSDKType;
  stats: StatisticsSDKType;
}
export interface QueryZoneValidatorsRequest {
  chain_id: string;
  status: string;
  pagination: PageRequest;
}
export interface QueryZoneValidatorsRequestProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsRequest";
  value: Uint8Array;
}
export interface QueryZoneValidatorsRequestAmino {
  chain_id: string;
  status: string;
  pagination?: PageRequestAmino;
}
export interface QueryZoneValidatorsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsRequest";
  value: QueryZoneValidatorsRequestAmino;
}
export interface QueryZoneValidatorsRequestSDKType {
  chain_id: string;
  status: string;
  pagination: PageRequestSDKType;
}
export interface QueryZoneValidatorsResponse {
  validators: Validator[];
  pagination: PageResponse;
}
export interface QueryZoneValidatorsResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsResponse";
  value: Uint8Array;
}
export interface QueryZoneValidatorsResponseAmino {
  validators: ValidatorAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryZoneValidatorsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsResponse";
  value: QueryZoneValidatorsResponseAmino;
}
export interface QueryZoneValidatorsResponseSDKType {
  validators: ValidatorSDKType[];
  pagination: PageResponseSDKType;
}
/**
 * QueryDepositAccountForChainRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainRequest {
  chain_id: string;
}
export interface QueryDepositAccountForChainRequestProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainRequest";
  value: Uint8Array;
}
/**
 * QueryDepositAccountForChainRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainRequestAmino {
  chain_id: string;
}
export interface QueryDepositAccountForChainRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainRequest";
  value: QueryDepositAccountForChainRequestAmino;
}
/**
 * QueryDepositAccountForChainRequest is the request type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainRequestSDKType {
  chain_id: string;
}
/**
 * QueryDepositAccountForChainResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainResponse {
  deposit_account_address: string;
}
export interface QueryDepositAccountForChainResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainResponse";
  value: Uint8Array;
}
/**
 * QueryDepositAccountForChainResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainResponseAmino {
  deposit_account_address: string;
}
export interface QueryDepositAccountForChainResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainResponse";
  value: QueryDepositAccountForChainResponseAmino;
}
/**
 * QueryDepositAccountForChainResponse the response type for the
 * Query/InterchainAccountAddress RPC
 */
export interface QueryDepositAccountForChainResponseSDKType {
  deposit_account_address: string;
}
export interface QueryDelegatorIntentRequest {
  chain_id: string;
  delegator_address: string;
}
export interface QueryDelegatorIntentRequestProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentRequest";
  value: Uint8Array;
}
export interface QueryDelegatorIntentRequestAmino {
  chain_id: string;
  delegator_address: string;
}
export interface QueryDelegatorIntentRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentRequest";
  value: QueryDelegatorIntentRequestAmino;
}
export interface QueryDelegatorIntentRequestSDKType {
  chain_id: string;
  delegator_address: string;
}
export interface QueryDelegatorIntentResponse {
  intent: DelegatorIntent;
}
export interface QueryDelegatorIntentResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentResponse";
  value: Uint8Array;
}
export interface QueryDelegatorIntentResponseAmino {
  intent?: DelegatorIntentAmino;
}
export interface QueryDelegatorIntentResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentResponse";
  value: QueryDelegatorIntentResponseAmino;
}
export interface QueryDelegatorIntentResponseSDKType {
  intent: DelegatorIntentSDKType;
}
export interface QueryDelegatorIntentsRequest {
  delegator_address: string;
}
export interface QueryDelegatorIntentsRequestProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsRequest";
  value: Uint8Array;
}
export interface QueryDelegatorIntentsRequestAmino {
  delegator_address: string;
}
export interface QueryDelegatorIntentsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsRequest";
  value: QueryDelegatorIntentsRequestAmino;
}
export interface QueryDelegatorIntentsRequestSDKType {
  delegator_address: string;
}
export interface DelegatorIntentsResponse {
  chain_id: string;
  intent: DelegatorIntent;
}
export interface DelegatorIntentsResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.DelegatorIntentsResponse";
  value: Uint8Array;
}
export interface DelegatorIntentsResponseAmino {
  chain_id: string;
  intent?: DelegatorIntentAmino;
}
export interface DelegatorIntentsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.DelegatorIntentsResponse";
  value: DelegatorIntentsResponseAmino;
}
export interface DelegatorIntentsResponseSDKType {
  chain_id: string;
  intent: DelegatorIntentSDKType;
}
export interface QueryDelegatorIntentsResponse {
  intents: DelegatorIntentsResponse[];
}
export interface QueryDelegatorIntentsResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsResponse";
  value: Uint8Array;
}
export interface QueryDelegatorIntentsResponseAmino {
  intents: DelegatorIntentsResponseAmino[];
}
export interface QueryDelegatorIntentsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsResponse";
  value: QueryDelegatorIntentsResponseAmino;
}
export interface QueryDelegatorIntentsResponseSDKType {
  intents: DelegatorIntentsResponseSDKType[];
}
export interface QueryDelegationsRequest {
  chain_id: string;
  pagination: PageRequest;
}
export interface QueryDelegationsRequestProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryDelegationsRequest";
  value: Uint8Array;
}
export interface QueryDelegationsRequestAmino {
  chain_id: string;
  pagination?: PageRequestAmino;
}
export interface QueryDelegationsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDelegationsRequest";
  value: QueryDelegationsRequestAmino;
}
export interface QueryDelegationsRequestSDKType {
  chain_id: string;
  pagination: PageRequestSDKType;
}
export interface QueryDelegationsResponse {
  delegations: Delegation[];
  tvl: Long;
  pagination: PageResponse;
}
export interface QueryDelegationsResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryDelegationsResponse";
  value: Uint8Array;
}
export interface QueryDelegationsResponseAmino {
  delegations: DelegationAmino[];
  tvl: string;
  pagination?: PageResponseAmino;
}
export interface QueryDelegationsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryDelegationsResponse";
  value: QueryDelegationsResponseAmino;
}
export interface QueryDelegationsResponseSDKType {
  delegations: DelegationSDKType[];
  tvl: Long;
  pagination: PageResponseSDKType;
}
export interface QueryReceiptsRequest {
  chain_id: string;
  pagination: PageRequest;
}
export interface QueryReceiptsRequestProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryReceiptsRequest";
  value: Uint8Array;
}
export interface QueryReceiptsRequestAmino {
  chain_id: string;
  pagination?: PageRequestAmino;
}
export interface QueryReceiptsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryReceiptsRequest";
  value: QueryReceiptsRequestAmino;
}
export interface QueryReceiptsRequestSDKType {
  chain_id: string;
  pagination: PageRequestSDKType;
}
export interface QueryReceiptsResponse {
  receipts: Receipt[];
  pagination: PageResponse;
}
export interface QueryReceiptsResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryReceiptsResponse";
  value: Uint8Array;
}
export interface QueryReceiptsResponseAmino {
  receipts: ReceiptAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryReceiptsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryReceiptsResponse";
  value: QueryReceiptsResponseAmino;
}
export interface QueryReceiptsResponseSDKType {
  receipts: ReceiptSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryTxStatusRequest {
  chain_id: string;
  tx_hash: string;
}
export interface QueryTxStatusRequestProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryTxStatusRequest";
  value: Uint8Array;
}
export interface QueryTxStatusRequestAmino {
  chain_id: string;
  tx_hash: string;
}
export interface QueryTxStatusRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryTxStatusRequest";
  value: QueryTxStatusRequestAmino;
}
export interface QueryTxStatusRequestSDKType {
  chain_id: string;
  tx_hash: string;
}
export interface QueryTxStatusResponse {
  receipt: Receipt;
}
export interface QueryTxStatusResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryTxStatusResponse";
  value: Uint8Array;
}
export interface QueryTxStatusResponseAmino {
  receipt?: ReceiptAmino;
}
export interface QueryTxStatusResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryTxStatusResponse";
  value: QueryTxStatusResponseAmino;
}
export interface QueryTxStatusResponseSDKType {
  receipt: ReceiptSDKType;
}
export interface QueryWithdrawalRecordsRequest {
  chain_id: string;
  delegator_address: string;
  pagination: PageRequest;
}
export interface QueryWithdrawalRecordsRequestProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsRequest";
  value: Uint8Array;
}
export interface QueryWithdrawalRecordsRequestAmino {
  chain_id: string;
  delegator_address: string;
  pagination?: PageRequestAmino;
}
export interface QueryWithdrawalRecordsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsRequest";
  value: QueryWithdrawalRecordsRequestAmino;
}
export interface QueryWithdrawalRecordsRequestSDKType {
  chain_id: string;
  delegator_address: string;
  pagination: PageRequestSDKType;
}
export interface QueryWithdrawalRecordsResponse {
  withdrawals: WithdrawalRecord[];
  pagination: PageResponse;
}
export interface QueryWithdrawalRecordsResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsResponse";
  value: Uint8Array;
}
export interface QueryWithdrawalRecordsResponseAmino {
  withdrawals: WithdrawalRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryWithdrawalRecordsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsResponse";
  value: QueryWithdrawalRecordsResponseAmino;
}
export interface QueryWithdrawalRecordsResponseSDKType {
  withdrawals: WithdrawalRecordSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryUserWithdrawalRecordsRequest {
  user_address: string;
  pagination: PageRequest;
}
export interface QueryUserWithdrawalRecordsRequestProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryUserWithdrawalRecordsRequest";
  value: Uint8Array;
}
export interface QueryUserWithdrawalRecordsRequestAmino {
  user_address: string;
  pagination?: PageRequestAmino;
}
export interface QueryUserWithdrawalRecordsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryUserWithdrawalRecordsRequest";
  value: QueryUserWithdrawalRecordsRequestAmino;
}
export interface QueryUserWithdrawalRecordsRequestSDKType {
  user_address: string;
  pagination: PageRequestSDKType;
}
export interface QueryUnbondingRecordsRequest {
  chain_id: string;
  pagination: PageRequest;
}
export interface QueryUnbondingRecordsRequestProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsRequest";
  value: Uint8Array;
}
export interface QueryUnbondingRecordsRequestAmino {
  chain_id: string;
  pagination?: PageRequestAmino;
}
export interface QueryUnbondingRecordsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsRequest";
  value: QueryUnbondingRecordsRequestAmino;
}
export interface QueryUnbondingRecordsRequestSDKType {
  chain_id: string;
  pagination: PageRequestSDKType;
}
export interface QueryUnbondingRecordsResponse {
  unbondings: UnbondingRecord[];
  pagination: PageResponse;
}
export interface QueryUnbondingRecordsResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsResponse";
  value: Uint8Array;
}
export interface QueryUnbondingRecordsResponseAmino {
  unbondings: UnbondingRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryUnbondingRecordsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsResponse";
  value: QueryUnbondingRecordsResponseAmino;
}
export interface QueryUnbondingRecordsResponseSDKType {
  unbondings: UnbondingRecordSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryRedelegationRecordsRequest {
  chain_id: string;
  pagination: PageRequest;
}
export interface QueryRedelegationRecordsRequestProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsRequest";
  value: Uint8Array;
}
export interface QueryRedelegationRecordsRequestAmino {
  chain_id: string;
  pagination?: PageRequestAmino;
}
export interface QueryRedelegationRecordsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsRequest";
  value: QueryRedelegationRecordsRequestAmino;
}
export interface QueryRedelegationRecordsRequestSDKType {
  chain_id: string;
  pagination: PageRequestSDKType;
}
export interface QueryRedelegationRecordsResponse {
  redelegations: RedelegationRecord[];
  pagination: PageResponse;
}
export interface QueryRedelegationRecordsResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsResponse";
  value: Uint8Array;
}
export interface QueryRedelegationRecordsResponseAmino {
  redelegations: RedelegationRecordAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryRedelegationRecordsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsResponse";
  value: QueryRedelegationRecordsResponseAmino;
}
export interface QueryRedelegationRecordsResponseSDKType {
  redelegations: RedelegationRecordSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryMappedAccountsRequest {
  address: string;
  pagination: PageRequest;
}
export interface QueryMappedAccountsRequestProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryMappedAccountsRequest";
  value: Uint8Array;
}
export interface QueryMappedAccountsRequestAmino {
  address: string;
  pagination?: PageRequestAmino;
}
export interface QueryMappedAccountsRequestAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryMappedAccountsRequest";
  value: QueryMappedAccountsRequestAmino;
}
export interface QueryMappedAccountsRequestSDKType {
  address: string;
  pagination: PageRequestSDKType;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntry {
  key: string;
  value: Uint8Array;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntryProtoMsg {
  type_url: string;
  value: Uint8Array;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntryAmino {
  key: string;
  value: Uint8Array;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntryAminoMsg {
  type: string;
  value: QueryMappedAccountsResponse_RemoteAddressMapEntryAmino;
}
export interface QueryMappedAccountsResponse_RemoteAddressMapEntrySDKType {
  key: string;
  value: Uint8Array;
}
export interface QueryMappedAccountsResponse {
  RemoteAddressMap: {
    [key: string]: Uint8Array;
  };
  pagination: PageResponse;
}
export interface QueryMappedAccountsResponseProtoMsg {
  type_url: "/quicksilver.interchainstaking.v1.QueryMappedAccountsResponse";
  value: Uint8Array;
}
export interface QueryMappedAccountsResponseAmino {
  RemoteAddressMap: {
    [key: string]: Uint8Array;
  };
  pagination?: PageResponseAmino;
}
export interface QueryMappedAccountsResponseAminoMsg {
  type: "/quicksilver.interchainstaking.v1.QueryMappedAccountsResponse";
  value: QueryMappedAccountsResponseAmino;
}
export interface QueryMappedAccountsResponseSDKType {
  RemoteAddressMap: {
    [key: string]: Uint8Array;
  };
  pagination: PageResponseSDKType;
}
function createBaseStatistics(): Statistics {
  return {
    chain_id: "",
    deposited: Long.ZERO,
    deposits: Long.ZERO,
    depositors: Long.ZERO,
    delegated: Long.ZERO,
    supply: Long.ZERO,
    distance_to_target: ""
  };
}
export const Statistics = {
  typeUrl: "/quicksilver.interchainstaking.v1.Statistics",
  encode(message: Statistics, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (!message.deposited.isZero()) {
      writer.uint32(16).int64(message.deposited);
    }
    if (!message.deposits.isZero()) {
      writer.uint32(24).int64(message.deposits);
    }
    if (!message.depositors.isZero()) {
      writer.uint32(32).int64(message.depositors);
    }
    if (!message.delegated.isZero()) {
      writer.uint32(40).int64(message.delegated);
    }
    if (!message.supply.isZero()) {
      writer.uint32(48).int64(message.supply);
    }
    if (message.distance_to_target !== "") {
      writer.uint32(58).string(message.distance_to_target);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Statistics {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatistics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.deposited = (reader.int64() as Long);
          break;
        case 3:
          message.deposits = (reader.int64() as Long);
          break;
        case 4:
          message.depositors = (reader.int64() as Long);
          break;
        case 5:
          message.delegated = (reader.int64() as Long);
          break;
        case 6:
          message.supply = (reader.int64() as Long);
          break;
        case 7:
          message.distance_to_target = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Statistics {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      deposited: isSet(object.deposited) ? Long.fromValue(object.deposited) : Long.ZERO,
      deposits: isSet(object.deposits) ? Long.fromValue(object.deposits) : Long.ZERO,
      depositors: isSet(object.depositors) ? Long.fromValue(object.depositors) : Long.ZERO,
      delegated: isSet(object.delegated) ? Long.fromValue(object.delegated) : Long.ZERO,
      supply: isSet(object.supply) ? Long.fromValue(object.supply) : Long.ZERO,
      distance_to_target: isSet(object.distance_to_target) ? String(object.distance_to_target) : ""
    };
  },
  toJSON(message: Statistics): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.deposited !== undefined && (obj.deposited = (message.deposited || Long.ZERO).toString());
    message.deposits !== undefined && (obj.deposits = (message.deposits || Long.ZERO).toString());
    message.depositors !== undefined && (obj.depositors = (message.depositors || Long.ZERO).toString());
    message.delegated !== undefined && (obj.delegated = (message.delegated || Long.ZERO).toString());
    message.supply !== undefined && (obj.supply = (message.supply || Long.ZERO).toString());
    message.distance_to_target !== undefined && (obj.distance_to_target = message.distance_to_target);
    return obj;
  },
  fromPartial(object: DeepPartial<Statistics>): Statistics {
    const message = createBaseStatistics();
    message.chain_id = object.chain_id ?? "";
    message.deposited = object.deposited !== undefined && object.deposited !== null ? Long.fromValue(object.deposited) : Long.ZERO;
    message.deposits = object.deposits !== undefined && object.deposits !== null ? Long.fromValue(object.deposits) : Long.ZERO;
    message.depositors = object.depositors !== undefined && object.depositors !== null ? Long.fromValue(object.depositors) : Long.ZERO;
    message.delegated = object.delegated !== undefined && object.delegated !== null ? Long.fromValue(object.delegated) : Long.ZERO;
    message.supply = object.supply !== undefined && object.supply !== null ? Long.fromValue(object.supply) : Long.ZERO;
    message.distance_to_target = object.distance_to_target ?? "";
    return message;
  },
  fromAmino(object: StatisticsAmino): Statistics {
    return {
      chain_id: object.chain_id,
      deposited: Long.fromString(object.deposited),
      deposits: Long.fromString(object.deposits),
      depositors: Long.fromString(object.depositors),
      delegated: Long.fromString(object.delegated),
      supply: Long.fromString(object.supply),
      distance_to_target: object.distance_to_target
    };
  },
  toAmino(message: Statistics): StatisticsAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.deposited = message.deposited ? message.deposited.toString() : undefined;
    obj.deposits = message.deposits ? message.deposits.toString() : undefined;
    obj.depositors = message.depositors ? message.depositors.toString() : undefined;
    obj.delegated = message.delegated ? message.delegated.toString() : undefined;
    obj.supply = message.supply ? message.supply.toString() : undefined;
    obj.distance_to_target = message.distance_to_target;
    return obj;
  },
  fromAminoMsg(object: StatisticsAminoMsg): Statistics {
    return Statistics.fromAmino(object.value);
  },
  fromProtoMsg(message: StatisticsProtoMsg): Statistics {
    return Statistics.decode(message.value);
  },
  toProto(message: Statistics): Uint8Array {
    return Statistics.encode(message).finish();
  },
  toProtoMsg(message: Statistics): StatisticsProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.Statistics",
      value: Statistics.encode(message).finish()
    };
  }
};
function createBaseQueryZonesRequest(): QueryZonesRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryZonesRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesRequest",
  encode(message: QueryZonesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZonesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZonesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryZonesRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryZonesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryZonesRequest>): QueryZonesRequest {
    const message = createBaseQueryZonesRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryZonesRequestAmino): QueryZonesRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryZonesRequest): QueryZonesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZonesRequestAminoMsg): QueryZonesRequest {
    return QueryZonesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZonesRequestProtoMsg): QueryZonesRequest {
    return QueryZonesRequest.decode(message.value);
  },
  toProto(message: QueryZonesRequest): Uint8Array {
    return QueryZonesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryZonesRequest): QueryZonesRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesRequest",
      value: QueryZonesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryZonesResponse(): QueryZonesResponse {
  return {
    zones: [],
    stats: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryZonesResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesResponse",
  encode(message: QueryZonesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.zones) {
      Zone.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.stats) {
      Statistics.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZonesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZonesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zones.push(Zone.decode(reader, reader.uint32()));
          break;
        case 2:
          message.stats.push(Statistics.decode(reader, reader.uint32()));
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryZonesResponse {
    return {
      zones: Array.isArray(object?.zones) ? object.zones.map((e: any) => Zone.fromJSON(e)) : [],
      stats: Array.isArray(object?.stats) ? object.stats.map((e: any) => Statistics.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryZonesResponse): unknown {
    const obj: any = {};
    if (message.zones) {
      obj.zones = message.zones.map(e => e ? Zone.toJSON(e) : undefined);
    } else {
      obj.zones = [];
    }
    if (message.stats) {
      obj.stats = message.stats.map(e => e ? Statistics.toJSON(e) : undefined);
    } else {
      obj.stats = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryZonesResponse>): QueryZonesResponse {
    const message = createBaseQueryZonesResponse();
    message.zones = object.zones?.map(e => Zone.fromPartial(e)) || [];
    message.stats = object.stats?.map(e => Statistics.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryZonesResponseAmino): QueryZonesResponse {
    return {
      zones: Array.isArray(object?.zones) ? object.zones.map((e: any) => Zone.fromAmino(e)) : [],
      stats: Array.isArray(object?.stats) ? object.stats.map((e: any) => Statistics.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryZonesResponse): QueryZonesResponseAmino {
    const obj: any = {};
    if (message.zones) {
      obj.zones = message.zones.map(e => e ? Zone.toAmino(e) : undefined);
    } else {
      obj.zones = [];
    }
    if (message.stats) {
      obj.stats = message.stats.map(e => e ? Statistics.toAmino(e) : undefined);
    } else {
      obj.stats = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZonesResponseAminoMsg): QueryZonesResponse {
    return QueryZonesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZonesResponseProtoMsg): QueryZonesResponse {
    return QueryZonesResponse.decode(message.value);
  },
  toProto(message: QueryZonesResponse): Uint8Array {
    return QueryZonesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryZonesResponse): QueryZonesResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryZonesResponse",
      value: QueryZonesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryZoneRequest(): QueryZoneRequest {
  return {
    chain_id: ""
  };
}
export const QueryZoneRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneRequest",
  encode(message: QueryZoneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZoneRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZoneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryZoneRequest {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : ""
    };
  },
  toJSON(message: QueryZoneRequest): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryZoneRequest>): QueryZoneRequest {
    const message = createBaseQueryZoneRequest();
    message.chain_id = object.chain_id ?? "";
    return message;
  },
  fromAmino(object: QueryZoneRequestAmino): QueryZoneRequest {
    return {
      chain_id: object.chain_id
    };
  },
  toAmino(message: QueryZoneRequest): QueryZoneRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    return obj;
  },
  fromAminoMsg(object: QueryZoneRequestAminoMsg): QueryZoneRequest {
    return QueryZoneRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZoneRequestProtoMsg): QueryZoneRequest {
    return QueryZoneRequest.decode(message.value);
  },
  toProto(message: QueryZoneRequest): Uint8Array {
    return QueryZoneRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryZoneRequest): QueryZoneRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneRequest",
      value: QueryZoneRequest.encode(message).finish()
    };
  }
};
function createBaseQueryZoneResponse(): QueryZoneResponse {
  return {
    zone: Zone.fromPartial({}),
    stats: Statistics.fromPartial({})
  };
}
export const QueryZoneResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneResponse",
  encode(message: QueryZoneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.zone !== undefined) {
      Zone.encode(message.zone, writer.uint32(10).fork()).ldelim();
    }
    if (message.stats !== undefined) {
      Statistics.encode(message.stats, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZoneResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZoneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zone = Zone.decode(reader, reader.uint32());
          break;
        case 2:
          message.stats = Statistics.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryZoneResponse {
    return {
      zone: isSet(object.zone) ? Zone.fromJSON(object.zone) : undefined,
      stats: isSet(object.stats) ? Statistics.fromJSON(object.stats) : undefined
    };
  },
  toJSON(message: QueryZoneResponse): unknown {
    const obj: any = {};
    message.zone !== undefined && (obj.zone = message.zone ? Zone.toJSON(message.zone) : undefined);
    message.stats !== undefined && (obj.stats = message.stats ? Statistics.toJSON(message.stats) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryZoneResponse>): QueryZoneResponse {
    const message = createBaseQueryZoneResponse();
    message.zone = object.zone !== undefined && object.zone !== null ? Zone.fromPartial(object.zone) : undefined;
    message.stats = object.stats !== undefined && object.stats !== null ? Statistics.fromPartial(object.stats) : undefined;
    return message;
  },
  fromAmino(object: QueryZoneResponseAmino): QueryZoneResponse {
    return {
      zone: object?.zone ? Zone.fromAmino(object.zone) : undefined,
      stats: object?.stats ? Statistics.fromAmino(object.stats) : undefined
    };
  },
  toAmino(message: QueryZoneResponse): QueryZoneResponseAmino {
    const obj: any = {};
    obj.zone = message.zone ? Zone.toAmino(message.zone) : undefined;
    obj.stats = message.stats ? Statistics.toAmino(message.stats) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZoneResponseAminoMsg): QueryZoneResponse {
    return QueryZoneResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZoneResponseProtoMsg): QueryZoneResponse {
    return QueryZoneResponse.decode(message.value);
  },
  toProto(message: QueryZoneResponse): Uint8Array {
    return QueryZoneResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryZoneResponse): QueryZoneResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneResponse",
      value: QueryZoneResponse.encode(message).finish()
    };
  }
};
function createBaseQueryZoneValidatorsRequest(): QueryZoneValidatorsRequest {
  return {
    chain_id: "",
    status: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryZoneValidatorsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsRequest",
  encode(message: QueryZoneValidatorsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZoneValidatorsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZoneValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryZoneValidatorsRequest {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      status: isSet(object.status) ? String(object.status) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryZoneValidatorsRequest): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.status !== undefined && (obj.status = message.status);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryZoneValidatorsRequest>): QueryZoneValidatorsRequest {
    const message = createBaseQueryZoneValidatorsRequest();
    message.chain_id = object.chain_id ?? "";
    message.status = object.status ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryZoneValidatorsRequestAmino): QueryZoneValidatorsRequest {
    return {
      chain_id: object.chain_id,
      status: object.status,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryZoneValidatorsRequest): QueryZoneValidatorsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.status = message.status;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZoneValidatorsRequestAminoMsg): QueryZoneValidatorsRequest {
    return QueryZoneValidatorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZoneValidatorsRequestProtoMsg): QueryZoneValidatorsRequest {
    return QueryZoneValidatorsRequest.decode(message.value);
  },
  toProto(message: QueryZoneValidatorsRequest): Uint8Array {
    return QueryZoneValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryZoneValidatorsRequest): QueryZoneValidatorsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsRequest",
      value: QueryZoneValidatorsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryZoneValidatorsResponse(): QueryZoneValidatorsResponse {
  return {
    validators: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryZoneValidatorsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsResponse",
  encode(message: QueryZoneValidatorsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryZoneValidatorsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryZoneValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryZoneValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryZoneValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryZoneValidatorsResponse>): QueryZoneValidatorsResponse {
    const message = createBaseQueryZoneValidatorsResponse();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryZoneValidatorsResponseAmino): QueryZoneValidatorsResponse {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryZoneValidatorsResponse): QueryZoneValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryZoneValidatorsResponseAminoMsg): QueryZoneValidatorsResponse {
    return QueryZoneValidatorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryZoneValidatorsResponseProtoMsg): QueryZoneValidatorsResponse {
    return QueryZoneValidatorsResponse.decode(message.value);
  },
  toProto(message: QueryZoneValidatorsResponse): Uint8Array {
    return QueryZoneValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryZoneValidatorsResponse): QueryZoneValidatorsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryZoneValidatorsResponse",
      value: QueryZoneValidatorsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositAccountForChainRequest(): QueryDepositAccountForChainRequest {
  return {
    chain_id: ""
  };
}
export const QueryDepositAccountForChainRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainRequest",
  encode(message: QueryDepositAccountForChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositAccountForChainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositAccountForChainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositAccountForChainRequest {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : ""
    };
  },
  toJSON(message: QueryDepositAccountForChainRequest): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDepositAccountForChainRequest>): QueryDepositAccountForChainRequest {
    const message = createBaseQueryDepositAccountForChainRequest();
    message.chain_id = object.chain_id ?? "";
    return message;
  },
  fromAmino(object: QueryDepositAccountForChainRequestAmino): QueryDepositAccountForChainRequest {
    return {
      chain_id: object.chain_id
    };
  },
  toAmino(message: QueryDepositAccountForChainRequest): QueryDepositAccountForChainRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    return obj;
  },
  fromAminoMsg(object: QueryDepositAccountForChainRequestAminoMsg): QueryDepositAccountForChainRequest {
    return QueryDepositAccountForChainRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositAccountForChainRequestProtoMsg): QueryDepositAccountForChainRequest {
    return QueryDepositAccountForChainRequest.decode(message.value);
  },
  toProto(message: QueryDepositAccountForChainRequest): Uint8Array {
    return QueryDepositAccountForChainRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositAccountForChainRequest): QueryDepositAccountForChainRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainRequest",
      value: QueryDepositAccountForChainRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositAccountForChainResponse(): QueryDepositAccountForChainResponse {
  return {
    deposit_account_address: ""
  };
}
export const QueryDepositAccountForChainResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainResponse",
  encode(message: QueryDepositAccountForChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit_account_address !== "") {
      writer.uint32(10).string(message.deposit_account_address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositAccountForChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositAccountForChainResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit_account_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositAccountForChainResponse {
    return {
      deposit_account_address: isSet(object.deposit_account_address) ? String(object.deposit_account_address) : ""
    };
  },
  toJSON(message: QueryDepositAccountForChainResponse): unknown {
    const obj: any = {};
    message.deposit_account_address !== undefined && (obj.deposit_account_address = message.deposit_account_address);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDepositAccountForChainResponse>): QueryDepositAccountForChainResponse {
    const message = createBaseQueryDepositAccountForChainResponse();
    message.deposit_account_address = object.deposit_account_address ?? "";
    return message;
  },
  fromAmino(object: QueryDepositAccountForChainResponseAmino): QueryDepositAccountForChainResponse {
    return {
      deposit_account_address: object.deposit_account_address
    };
  },
  toAmino(message: QueryDepositAccountForChainResponse): QueryDepositAccountForChainResponseAmino {
    const obj: any = {};
    obj.deposit_account_address = message.deposit_account_address;
    return obj;
  },
  fromAminoMsg(object: QueryDepositAccountForChainResponseAminoMsg): QueryDepositAccountForChainResponse {
    return QueryDepositAccountForChainResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositAccountForChainResponseProtoMsg): QueryDepositAccountForChainResponse {
    return QueryDepositAccountForChainResponse.decode(message.value);
  },
  toProto(message: QueryDepositAccountForChainResponse): Uint8Array {
    return QueryDepositAccountForChainResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositAccountForChainResponse): QueryDepositAccountForChainResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDepositAccountForChainResponse",
      value: QueryDepositAccountForChainResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorIntentRequest(): QueryDelegatorIntentRequest {
  return {
    chain_id: "",
    delegator_address: ""
  };
}
export const QueryDelegatorIntentRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentRequest",
  encode(message: QueryDelegatorIntentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.delegator_address !== "") {
      writer.uint32(18).string(message.delegator_address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorIntentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorIntentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.delegator_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorIntentRequest {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
    };
  },
  toJSON(message: QueryDelegatorIntentRequest): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorIntentRequest>): QueryDelegatorIntentRequest {
    const message = createBaseQueryDelegatorIntentRequest();
    message.chain_id = object.chain_id ?? "";
    message.delegator_address = object.delegator_address ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorIntentRequestAmino): QueryDelegatorIntentRequest {
    return {
      chain_id: object.chain_id,
      delegator_address: object.delegator_address
    };
  },
  toAmino(message: QueryDelegatorIntentRequest): QueryDelegatorIntentRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.delegator_address = message.delegator_address;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorIntentRequestAminoMsg): QueryDelegatorIntentRequest {
    return QueryDelegatorIntentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorIntentRequestProtoMsg): QueryDelegatorIntentRequest {
    return QueryDelegatorIntentRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorIntentRequest): Uint8Array {
    return QueryDelegatorIntentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorIntentRequest): QueryDelegatorIntentRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentRequest",
      value: QueryDelegatorIntentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorIntentResponse(): QueryDelegatorIntentResponse {
  return {
    intent: DelegatorIntent.fromPartial({})
  };
}
export const QueryDelegatorIntentResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentResponse",
  encode(message: QueryDelegatorIntentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.intent !== undefined) {
      DelegatorIntent.encode(message.intent, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorIntentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorIntentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.intent = DelegatorIntent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorIntentResponse {
    return {
      intent: isSet(object.intent) ? DelegatorIntent.fromJSON(object.intent) : undefined
    };
  },
  toJSON(message: QueryDelegatorIntentResponse): unknown {
    const obj: any = {};
    message.intent !== undefined && (obj.intent = message.intent ? DelegatorIntent.toJSON(message.intent) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorIntentResponse>): QueryDelegatorIntentResponse {
    const message = createBaseQueryDelegatorIntentResponse();
    message.intent = object.intent !== undefined && object.intent !== null ? DelegatorIntent.fromPartial(object.intent) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegatorIntentResponseAmino): QueryDelegatorIntentResponse {
    return {
      intent: object?.intent ? DelegatorIntent.fromAmino(object.intent) : undefined
    };
  },
  toAmino(message: QueryDelegatorIntentResponse): QueryDelegatorIntentResponseAmino {
    const obj: any = {};
    obj.intent = message.intent ? DelegatorIntent.toAmino(message.intent) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorIntentResponseAminoMsg): QueryDelegatorIntentResponse {
    return QueryDelegatorIntentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorIntentResponseProtoMsg): QueryDelegatorIntentResponse {
    return QueryDelegatorIntentResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorIntentResponse): Uint8Array {
    return QueryDelegatorIntentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorIntentResponse): QueryDelegatorIntentResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentResponse",
      value: QueryDelegatorIntentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorIntentsRequest(): QueryDelegatorIntentsRequest {
  return {
    delegator_address: ""
  };
}
export const QueryDelegatorIntentsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsRequest",
  encode(message: QueryDelegatorIntentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorIntentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorIntentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorIntentsRequest {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
    };
  },
  toJSON(message: QueryDelegatorIntentsRequest): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorIntentsRequest>): QueryDelegatorIntentsRequest {
    const message = createBaseQueryDelegatorIntentsRequest();
    message.delegator_address = object.delegator_address ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorIntentsRequestAmino): QueryDelegatorIntentsRequest {
    return {
      delegator_address: object.delegator_address
    };
  },
  toAmino(message: QueryDelegatorIntentsRequest): QueryDelegatorIntentsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorIntentsRequestAminoMsg): QueryDelegatorIntentsRequest {
    return QueryDelegatorIntentsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorIntentsRequestProtoMsg): QueryDelegatorIntentsRequest {
    return QueryDelegatorIntentsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorIntentsRequest): Uint8Array {
    return QueryDelegatorIntentsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorIntentsRequest): QueryDelegatorIntentsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsRequest",
      value: QueryDelegatorIntentsRequest.encode(message).finish()
    };
  }
};
function createBaseDelegatorIntentsResponse(): DelegatorIntentsResponse {
  return {
    chain_id: "",
    intent: DelegatorIntent.fromPartial({})
  };
}
export const DelegatorIntentsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsResponse",
  encode(message: DelegatorIntentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.intent !== undefined) {
      DelegatorIntent.encode(message.intent, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorIntentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorIntentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.intent = DelegatorIntent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DelegatorIntentsResponse {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      intent: isSet(object.intent) ? DelegatorIntent.fromJSON(object.intent) : undefined
    };
  },
  toJSON(message: DelegatorIntentsResponse): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.intent !== undefined && (obj.intent = message.intent ? DelegatorIntent.toJSON(message.intent) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<DelegatorIntentsResponse>): DelegatorIntentsResponse {
    const message = createBaseDelegatorIntentsResponse();
    message.chain_id = object.chain_id ?? "";
    message.intent = object.intent !== undefined && object.intent !== null ? DelegatorIntent.fromPartial(object.intent) : undefined;
    return message;
  },
  fromAmino(object: DelegatorIntentsResponseAmino): DelegatorIntentsResponse {
    return {
      chain_id: object.chain_id,
      intent: object?.intent ? DelegatorIntent.fromAmino(object.intent) : undefined
    };
  },
  toAmino(message: DelegatorIntentsResponse): DelegatorIntentsResponseAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.intent = message.intent ? DelegatorIntent.toAmino(message.intent) : undefined;
    return obj;
  },
  fromAminoMsg(object: DelegatorIntentsResponseAminoMsg): DelegatorIntentsResponse {
    return DelegatorIntentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DelegatorIntentsResponseProtoMsg): DelegatorIntentsResponse {
    return DelegatorIntentsResponse.decode(message.value);
  },
  toProto(message: DelegatorIntentsResponse): Uint8Array {
    return DelegatorIntentsResponse.encode(message).finish();
  },
  toProtoMsg(message: DelegatorIntentsResponse): DelegatorIntentsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsResponse",
      value: DelegatorIntentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegatorIntentsResponse(): QueryDelegatorIntentsResponse {
  return {
    intents: []
  };
}
export const QueryDelegatorIntentsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsResponse",
  encode(message: QueryDelegatorIntentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.intents) {
      DelegatorIntentsResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorIntentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorIntentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.intents.push(DelegatorIntentsResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorIntentsResponse {
    return {
      intents: Array.isArray(object?.intents) ? object.intents.map((e: any) => DelegatorIntentsResponse.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryDelegatorIntentsResponse): unknown {
    const obj: any = {};
    if (message.intents) {
      obj.intents = message.intents.map(e => e ? DelegatorIntentsResponse.toJSON(e) : undefined);
    } else {
      obj.intents = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegatorIntentsResponse>): QueryDelegatorIntentsResponse {
    const message = createBaseQueryDelegatorIntentsResponse();
    message.intents = object.intents?.map(e => DelegatorIntentsResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDelegatorIntentsResponseAmino): QueryDelegatorIntentsResponse {
    return {
      intents: Array.isArray(object?.intents) ? object.intents.map((e: any) => DelegatorIntentsResponse.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryDelegatorIntentsResponse): QueryDelegatorIntentsResponseAmino {
    const obj: any = {};
    if (message.intents) {
      obj.intents = message.intents.map(e => e ? DelegatorIntentsResponse.toAmino(e) : undefined);
    } else {
      obj.intents = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorIntentsResponseAminoMsg): QueryDelegatorIntentsResponse {
    return QueryDelegatorIntentsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegatorIntentsResponseProtoMsg): QueryDelegatorIntentsResponse {
    return QueryDelegatorIntentsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorIntentsResponse): Uint8Array {
    return QueryDelegatorIntentsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorIntentsResponse): QueryDelegatorIntentsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegatorIntentsResponse",
      value: QueryDelegatorIntentsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationsRequest(): QueryDelegationsRequest {
  return {
    chain_id: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDelegationsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsRequest",
  encode(message: QueryDelegationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationsRequest {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDelegationsRequest): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegationsRequest>): QueryDelegationsRequest {
    const message = createBaseQueryDelegationsRequest();
    message.chain_id = object.chain_id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegationsRequestAmino): QueryDelegationsRequest {
    return {
      chain_id: object.chain_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDelegationsRequest): QueryDelegationsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationsRequestAminoMsg): QueryDelegationsRequest {
    return QueryDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegationsRequestProtoMsg): QueryDelegationsRequest {
    return QueryDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryDelegationsRequest): Uint8Array {
    return QueryDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationsRequest): QueryDelegationsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsRequest",
      value: QueryDelegationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDelegationsResponse(): QueryDelegationsResponse {
  return {
    delegations: [],
    tvl: Long.ZERO,
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDelegationsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsResponse",
  encode(message: QueryDelegationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (!message.tvl.isZero()) {
      writer.uint32(16).int64(message.tvl);
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.tvl = (reader.int64() as Long);
          break;
        case 3:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationsResponse {
    return {
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromJSON(e)) : [],
      tvl: isSet(object.tvl) ? Long.fromValue(object.tvl) : Long.ZERO,
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryDelegationsResponse): unknown {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toJSON(e) : undefined);
    } else {
      obj.delegations = [];
    }
    message.tvl !== undefined && (obj.tvl = (message.tvl || Long.ZERO).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDelegationsResponse>): QueryDelegationsResponse {
    const message = createBaseQueryDelegationsResponse();
    message.delegations = object.delegations?.map(e => Delegation.fromPartial(e)) || [];
    message.tvl = object.tvl !== undefined && object.tvl !== null ? Long.fromValue(object.tvl) : Long.ZERO;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDelegationsResponseAmino): QueryDelegationsResponse {
    return {
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromAmino(e)) : [],
      tvl: Long.fromString(object.tvl),
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDelegationsResponse): QueryDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? Delegation.toAmino(e) : undefined);
    } else {
      obj.delegations = [];
    }
    obj.tvl = message.tvl ? message.tvl.toString() : undefined;
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationsResponseAminoMsg): QueryDelegationsResponse {
    return QueryDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDelegationsResponseProtoMsg): QueryDelegationsResponse {
    return QueryDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryDelegationsResponse): Uint8Array {
    return QueryDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationsResponse): QueryDelegationsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryDelegationsResponse",
      value: QueryDelegationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryReceiptsRequest(): QueryReceiptsRequest {
  return {
    chain_id: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryReceiptsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsRequest",
  encode(message: QueryReceiptsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReceiptsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReceiptsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReceiptsRequest {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryReceiptsRequest): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryReceiptsRequest>): QueryReceiptsRequest {
    const message = createBaseQueryReceiptsRequest();
    message.chain_id = object.chain_id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryReceiptsRequestAmino): QueryReceiptsRequest {
    return {
      chain_id: object.chain_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryReceiptsRequest): QueryReceiptsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReceiptsRequestAminoMsg): QueryReceiptsRequest {
    return QueryReceiptsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReceiptsRequestProtoMsg): QueryReceiptsRequest {
    return QueryReceiptsRequest.decode(message.value);
  },
  toProto(message: QueryReceiptsRequest): Uint8Array {
    return QueryReceiptsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryReceiptsRequest): QueryReceiptsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsRequest",
      value: QueryReceiptsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryReceiptsResponse(): QueryReceiptsResponse {
  return {
    receipts: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryReceiptsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsResponse",
  encode(message: QueryReceiptsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.receipts) {
      Receipt.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryReceiptsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryReceiptsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receipts.push(Receipt.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryReceiptsResponse {
    return {
      receipts: Array.isArray(object?.receipts) ? object.receipts.map((e: any) => Receipt.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryReceiptsResponse): unknown {
    const obj: any = {};
    if (message.receipts) {
      obj.receipts = message.receipts.map(e => e ? Receipt.toJSON(e) : undefined);
    } else {
      obj.receipts = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryReceiptsResponse>): QueryReceiptsResponse {
    const message = createBaseQueryReceiptsResponse();
    message.receipts = object.receipts?.map(e => Receipt.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryReceiptsResponseAmino): QueryReceiptsResponse {
    return {
      receipts: Array.isArray(object?.receipts) ? object.receipts.map((e: any) => Receipt.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryReceiptsResponse): QueryReceiptsResponseAmino {
    const obj: any = {};
    if (message.receipts) {
      obj.receipts = message.receipts.map(e => e ? Receipt.toAmino(e) : undefined);
    } else {
      obj.receipts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryReceiptsResponseAminoMsg): QueryReceiptsResponse {
    return QueryReceiptsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryReceiptsResponseProtoMsg): QueryReceiptsResponse {
    return QueryReceiptsResponse.decode(message.value);
  },
  toProto(message: QueryReceiptsResponse): Uint8Array {
    return QueryReceiptsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryReceiptsResponse): QueryReceiptsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryReceiptsResponse",
      value: QueryReceiptsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTxStatusRequest(): QueryTxStatusRequest {
  return {
    chain_id: "",
    tx_hash: ""
  };
}
export const QueryTxStatusRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusRequest",
  encode(message: QueryTxStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.tx_hash !== "") {
      writer.uint32(18).string(message.tx_hash);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTxStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTxStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.tx_hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTxStatusRequest {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      tx_hash: isSet(object.tx_hash) ? String(object.tx_hash) : ""
    };
  },
  toJSON(message: QueryTxStatusRequest): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.tx_hash !== undefined && (obj.tx_hash = message.tx_hash);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTxStatusRequest>): QueryTxStatusRequest {
    const message = createBaseQueryTxStatusRequest();
    message.chain_id = object.chain_id ?? "";
    message.tx_hash = object.tx_hash ?? "";
    return message;
  },
  fromAmino(object: QueryTxStatusRequestAmino): QueryTxStatusRequest {
    return {
      chain_id: object.chain_id,
      tx_hash: object.tx_hash
    };
  },
  toAmino(message: QueryTxStatusRequest): QueryTxStatusRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.tx_hash = message.tx_hash;
    return obj;
  },
  fromAminoMsg(object: QueryTxStatusRequestAminoMsg): QueryTxStatusRequest {
    return QueryTxStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTxStatusRequestProtoMsg): QueryTxStatusRequest {
    return QueryTxStatusRequest.decode(message.value);
  },
  toProto(message: QueryTxStatusRequest): Uint8Array {
    return QueryTxStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTxStatusRequest): QueryTxStatusRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusRequest",
      value: QueryTxStatusRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTxStatusResponse(): QueryTxStatusResponse {
  return {
    receipt: Receipt.fromPartial({})
  };
}
export const QueryTxStatusResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusResponse",
  encode(message: QueryTxStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.receipt !== undefined) {
      Receipt.encode(message.receipt, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTxStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTxStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.receipt = Receipt.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTxStatusResponse {
    return {
      receipt: isSet(object.receipt) ? Receipt.fromJSON(object.receipt) : undefined
    };
  },
  toJSON(message: QueryTxStatusResponse): unknown {
    const obj: any = {};
    message.receipt !== undefined && (obj.receipt = message.receipt ? Receipt.toJSON(message.receipt) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTxStatusResponse>): QueryTxStatusResponse {
    const message = createBaseQueryTxStatusResponse();
    message.receipt = object.receipt !== undefined && object.receipt !== null ? Receipt.fromPartial(object.receipt) : undefined;
    return message;
  },
  fromAmino(object: QueryTxStatusResponseAmino): QueryTxStatusResponse {
    return {
      receipt: object?.receipt ? Receipt.fromAmino(object.receipt) : undefined
    };
  },
  toAmino(message: QueryTxStatusResponse): QueryTxStatusResponseAmino {
    const obj: any = {};
    obj.receipt = message.receipt ? Receipt.toAmino(message.receipt) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTxStatusResponseAminoMsg): QueryTxStatusResponse {
    return QueryTxStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTxStatusResponseProtoMsg): QueryTxStatusResponse {
    return QueryTxStatusResponse.decode(message.value);
  },
  toProto(message: QueryTxStatusResponse): Uint8Array {
    return QueryTxStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTxStatusResponse): QueryTxStatusResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryTxStatusResponse",
      value: QueryTxStatusResponse.encode(message).finish()
    };
  }
};
function createBaseQueryWithdrawalRecordsRequest(): QueryWithdrawalRecordsRequest {
  return {
    chain_id: "",
    delegator_address: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryWithdrawalRecordsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsRequest",
  encode(message: QueryWithdrawalRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.delegator_address !== "") {
      writer.uint32(18).string(message.delegator_address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawalRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.delegator_address = reader.string();
          break;
        case 3:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWithdrawalRecordsRequest {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryWithdrawalRecordsRequest): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryWithdrawalRecordsRequest>): QueryWithdrawalRecordsRequest {
    const message = createBaseQueryWithdrawalRecordsRequest();
    message.chain_id = object.chain_id ?? "";
    message.delegator_address = object.delegator_address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryWithdrawalRecordsRequestAmino): QueryWithdrawalRecordsRequest {
    return {
      chain_id: object.chain_id,
      delegator_address: object.delegator_address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryWithdrawalRecordsRequest): QueryWithdrawalRecordsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.delegator_address = message.delegator_address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWithdrawalRecordsRequestAminoMsg): QueryWithdrawalRecordsRequest {
    return QueryWithdrawalRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWithdrawalRecordsRequestProtoMsg): QueryWithdrawalRecordsRequest {
    return QueryWithdrawalRecordsRequest.decode(message.value);
  },
  toProto(message: QueryWithdrawalRecordsRequest): Uint8Array {
    return QueryWithdrawalRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryWithdrawalRecordsRequest): QueryWithdrawalRecordsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsRequest",
      value: QueryWithdrawalRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryWithdrawalRecordsResponse(): QueryWithdrawalRecordsResponse {
  return {
    withdrawals: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryWithdrawalRecordsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsResponse",
  encode(message: QueryWithdrawalRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.withdrawals) {
      WithdrawalRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryWithdrawalRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryWithdrawalRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawals.push(WithdrawalRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryWithdrawalRecordsResponse {
    return {
      withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e: any) => WithdrawalRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryWithdrawalRecordsResponse): unknown {
    const obj: any = {};
    if (message.withdrawals) {
      obj.withdrawals = message.withdrawals.map(e => e ? WithdrawalRecord.toJSON(e) : undefined);
    } else {
      obj.withdrawals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryWithdrawalRecordsResponse>): QueryWithdrawalRecordsResponse {
    const message = createBaseQueryWithdrawalRecordsResponse();
    message.withdrawals = object.withdrawals?.map(e => WithdrawalRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryWithdrawalRecordsResponseAmino): QueryWithdrawalRecordsResponse {
    return {
      withdrawals: Array.isArray(object?.withdrawals) ? object.withdrawals.map((e: any) => WithdrawalRecord.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryWithdrawalRecordsResponse): QueryWithdrawalRecordsResponseAmino {
    const obj: any = {};
    if (message.withdrawals) {
      obj.withdrawals = message.withdrawals.map(e => e ? WithdrawalRecord.toAmino(e) : undefined);
    } else {
      obj.withdrawals = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryWithdrawalRecordsResponseAminoMsg): QueryWithdrawalRecordsResponse {
    return QueryWithdrawalRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryWithdrawalRecordsResponseProtoMsg): QueryWithdrawalRecordsResponse {
    return QueryWithdrawalRecordsResponse.decode(message.value);
  },
  toProto(message: QueryWithdrawalRecordsResponse): Uint8Array {
    return QueryWithdrawalRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryWithdrawalRecordsResponse): QueryWithdrawalRecordsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryWithdrawalRecordsResponse",
      value: QueryWithdrawalRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryUserWithdrawalRecordsRequest(): QueryUserWithdrawalRecordsRequest {
  return {
    user_address: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryUserWithdrawalRecordsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryUserWithdrawalRecordsRequest",
  encode(message: QueryUserWithdrawalRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user_address !== "") {
      writer.uint32(10).string(message.user_address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUserWithdrawalRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUserWithdrawalRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user_address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUserWithdrawalRecordsRequest {
    return {
      user_address: isSet(object.user_address) ? String(object.user_address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryUserWithdrawalRecordsRequest): unknown {
    const obj: any = {};
    message.user_address !== undefined && (obj.user_address = message.user_address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryUserWithdrawalRecordsRequest>): QueryUserWithdrawalRecordsRequest {
    const message = createBaseQueryUserWithdrawalRecordsRequest();
    message.user_address = object.user_address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUserWithdrawalRecordsRequestAmino): QueryUserWithdrawalRecordsRequest {
    return {
      user_address: object.user_address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryUserWithdrawalRecordsRequest): QueryUserWithdrawalRecordsRequestAmino {
    const obj: any = {};
    obj.user_address = message.user_address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUserWithdrawalRecordsRequestAminoMsg): QueryUserWithdrawalRecordsRequest {
    return QueryUserWithdrawalRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUserWithdrawalRecordsRequestProtoMsg): QueryUserWithdrawalRecordsRequest {
    return QueryUserWithdrawalRecordsRequest.decode(message.value);
  },
  toProto(message: QueryUserWithdrawalRecordsRequest): Uint8Array {
    return QueryUserWithdrawalRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUserWithdrawalRecordsRequest): QueryUserWithdrawalRecordsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryUserWithdrawalRecordsRequest",
      value: QueryUserWithdrawalRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnbondingRecordsRequest(): QueryUnbondingRecordsRequest {
  return {
    chain_id: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryUnbondingRecordsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsRequest",
  encode(message: QueryUnbondingRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingRecordsRequest {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryUnbondingRecordsRequest): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryUnbondingRecordsRequest>): QueryUnbondingRecordsRequest {
    const message = createBaseQueryUnbondingRecordsRequest();
    message.chain_id = object.chain_id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUnbondingRecordsRequestAmino): QueryUnbondingRecordsRequest {
    return {
      chain_id: object.chain_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryUnbondingRecordsRequest): QueryUnbondingRecordsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnbondingRecordsRequestAminoMsg): QueryUnbondingRecordsRequest {
    return QueryUnbondingRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnbondingRecordsRequestProtoMsg): QueryUnbondingRecordsRequest {
    return QueryUnbondingRecordsRequest.decode(message.value);
  },
  toProto(message: QueryUnbondingRecordsRequest): Uint8Array {
    return QueryUnbondingRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUnbondingRecordsRequest): QueryUnbondingRecordsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsRequest",
      value: QueryUnbondingRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryUnbondingRecordsResponse(): QueryUnbondingRecordsResponse {
  return {
    unbondings: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryUnbondingRecordsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsResponse",
  encode(message: QueryUnbondingRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unbondings) {
      UnbondingRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUnbondingRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUnbondingRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondings.push(UnbondingRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUnbondingRecordsResponse {
    return {
      unbondings: Array.isArray(object?.unbondings) ? object.unbondings.map((e: any) => UnbondingRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryUnbondingRecordsResponse): unknown {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map(e => e ? UnbondingRecord.toJSON(e) : undefined);
    } else {
      obj.unbondings = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryUnbondingRecordsResponse>): QueryUnbondingRecordsResponse {
    const message = createBaseQueryUnbondingRecordsResponse();
    message.unbondings = object.unbondings?.map(e => UnbondingRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryUnbondingRecordsResponseAmino): QueryUnbondingRecordsResponse {
    return {
      unbondings: Array.isArray(object?.unbondings) ? object.unbondings.map((e: any) => UnbondingRecord.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryUnbondingRecordsResponse): QueryUnbondingRecordsResponseAmino {
    const obj: any = {};
    if (message.unbondings) {
      obj.unbondings = message.unbondings.map(e => e ? UnbondingRecord.toAmino(e) : undefined);
    } else {
      obj.unbondings = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUnbondingRecordsResponseAminoMsg): QueryUnbondingRecordsResponse {
    return QueryUnbondingRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryUnbondingRecordsResponseProtoMsg): QueryUnbondingRecordsResponse {
    return QueryUnbondingRecordsResponse.decode(message.value);
  },
  toProto(message: QueryUnbondingRecordsResponse): Uint8Array {
    return QueryUnbondingRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUnbondingRecordsResponse): QueryUnbondingRecordsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryUnbondingRecordsResponse",
      value: QueryUnbondingRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRedelegationRecordsRequest(): QueryRedelegationRecordsRequest {
  return {
    chain_id: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryRedelegationRecordsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsRequest",
  encode(message: QueryRedelegationRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chain_id !== "") {
      writer.uint32(10).string(message.chain_id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chain_id = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRedelegationRecordsRequest {
    return {
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryRedelegationRecordsRequest): unknown {
    const obj: any = {};
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryRedelegationRecordsRequest>): QueryRedelegationRecordsRequest {
    const message = createBaseQueryRedelegationRecordsRequest();
    message.chain_id = object.chain_id ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRedelegationRecordsRequestAmino): QueryRedelegationRecordsRequest {
    return {
      chain_id: object.chain_id,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryRedelegationRecordsRequest): QueryRedelegationRecordsRequestAmino {
    const obj: any = {};
    obj.chain_id = message.chain_id;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRedelegationRecordsRequestAminoMsg): QueryRedelegationRecordsRequest {
    return QueryRedelegationRecordsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRedelegationRecordsRequestProtoMsg): QueryRedelegationRecordsRequest {
    return QueryRedelegationRecordsRequest.decode(message.value);
  },
  toProto(message: QueryRedelegationRecordsRequest): Uint8Array {
    return QueryRedelegationRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRedelegationRecordsRequest): QueryRedelegationRecordsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsRequest",
      value: QueryRedelegationRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRedelegationRecordsResponse(): QueryRedelegationRecordsResponse {
  return {
    redelegations: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryRedelegationRecordsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsResponse",
  encode(message: QueryRedelegationRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.redelegations) {
      RedelegationRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRedelegationRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRedelegationRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.redelegations.push(RedelegationRecord.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRedelegationRecordsResponse {
    return {
      redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e: any) => RedelegationRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryRedelegationRecordsResponse): unknown {
    const obj: any = {};
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? RedelegationRecord.toJSON(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryRedelegationRecordsResponse>): QueryRedelegationRecordsResponse {
    const message = createBaseQueryRedelegationRecordsResponse();
    message.redelegations = object.redelegations?.map(e => RedelegationRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRedelegationRecordsResponseAmino): QueryRedelegationRecordsResponse {
    return {
      redelegations: Array.isArray(object?.redelegations) ? object.redelegations.map((e: any) => RedelegationRecord.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryRedelegationRecordsResponse): QueryRedelegationRecordsResponseAmino {
    const obj: any = {};
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map(e => e ? RedelegationRecord.toAmino(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRedelegationRecordsResponseAminoMsg): QueryRedelegationRecordsResponse {
    return QueryRedelegationRecordsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRedelegationRecordsResponseProtoMsg): QueryRedelegationRecordsResponse {
    return QueryRedelegationRecordsResponse.decode(message.value);
  },
  toProto(message: QueryRedelegationRecordsResponse): Uint8Array {
    return QueryRedelegationRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRedelegationRecordsResponse): QueryRedelegationRecordsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryRedelegationRecordsResponse",
      value: QueryRedelegationRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryMappedAccountsRequest(): QueryMappedAccountsRequest {
  return {
    address: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryMappedAccountsRequest = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsRequest",
  encode(message: QueryMappedAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMappedAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMappedAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMappedAccountsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryMappedAccountsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryMappedAccountsRequest>): QueryMappedAccountsRequest {
    const message = createBaseQueryMappedAccountsRequest();
    message.address = object.address ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMappedAccountsRequestAmino): QueryMappedAccountsRequest {
    return {
      address: object.address,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryMappedAccountsRequest): QueryMappedAccountsRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMappedAccountsRequestAminoMsg): QueryMappedAccountsRequest {
    return QueryMappedAccountsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMappedAccountsRequestProtoMsg): QueryMappedAccountsRequest {
    return QueryMappedAccountsRequest.decode(message.value);
  },
  toProto(message: QueryMappedAccountsRequest): Uint8Array {
    return QueryMappedAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMappedAccountsRequest): QueryMappedAccountsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsRequest",
      value: QueryMappedAccountsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryMappedAccountsResponse_RemoteAddressMapEntry(): QueryMappedAccountsResponse_RemoteAddressMapEntry {
  return {
    key: "",
    value: new Uint8Array()
  };
}
export const QueryMappedAccountsResponse_RemoteAddressMapEntry = {
  encode(message: QueryMappedAccountsResponse_RemoteAddressMapEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMappedAccountsResponse_RemoteAddressMapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMappedAccountsResponse_RemoteAddressMapEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMappedAccountsResponse_RemoteAddressMapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON(message: QueryMappedAccountsResponse_RemoteAddressMapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<QueryMappedAccountsResponse_RemoteAddressMapEntry>): QueryMappedAccountsResponse_RemoteAddressMapEntry {
    const message = createBaseQueryMappedAccountsResponse_RemoteAddressMapEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryMappedAccountsResponse_RemoteAddressMapEntryAmino): QueryMappedAccountsResponse_RemoteAddressMapEntry {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: QueryMappedAccountsResponse_RemoteAddressMapEntry): QueryMappedAccountsResponse_RemoteAddressMapEntryAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: QueryMappedAccountsResponse_RemoteAddressMapEntryAminoMsg): QueryMappedAccountsResponse_RemoteAddressMapEntry {
    return QueryMappedAccountsResponse_RemoteAddressMapEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMappedAccountsResponse_RemoteAddressMapEntryProtoMsg): QueryMappedAccountsResponse_RemoteAddressMapEntry {
    return QueryMappedAccountsResponse_RemoteAddressMapEntry.decode(message.value);
  },
  toProto(message: QueryMappedAccountsResponse_RemoteAddressMapEntry): Uint8Array {
    return QueryMappedAccountsResponse_RemoteAddressMapEntry.encode(message).finish();
  }
};
function createBaseQueryMappedAccountsResponse(): QueryMappedAccountsResponse {
  return {
    RemoteAddressMap: {},
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryMappedAccountsResponse = {
  typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsResponse",
  encode(message: QueryMappedAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.RemoteAddressMap).forEach(([key, value]) => {
      QueryMappedAccountsResponse_RemoteAddressMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMappedAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMappedAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = QueryMappedAccountsResponse_RemoteAddressMapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.RemoteAddressMap[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMappedAccountsResponse {
    return {
      RemoteAddressMap: isObject(object.RemoteAddressMap) ? Object.entries(object.RemoteAddressMap).reduce<{
        [key: string]: bytes;
      }>((acc, [key, value]) => {
        acc[key] = bytes.fromJSON(value);
        return acc;
      }, {}) : {},
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryMappedAccountsResponse): unknown {
    const obj: any = {};
    obj.RemoteAddressMap = {};
    if (message.RemoteAddressMap) {
      Object.entries(message.RemoteAddressMap).forEach(([k, v]) => {
        obj.RemoteAddressMap[k] = bytes.toJSON(v);
      });
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryMappedAccountsResponse>): QueryMappedAccountsResponse {
    const message = createBaseQueryMappedAccountsResponse();
    message.RemoteAddressMap = Object.entries(object.RemoteAddressMap ?? {}).reduce<{
      [key: string]: bytes;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = bytes.fromPartial(value);
      }
      return acc;
    }, {});
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMappedAccountsResponseAmino): QueryMappedAccountsResponse {
    return {
      RemoteAddressMap: isObject(object.RemoteAddressMap) ? Object.entries(object.RemoteAddressMap).reduce<{
        [key: string]: bytes;
      }>((acc, [key, value]) => {
        acc[key] = bytes.fromAmino(value);
        return acc;
      }, {}) : {},
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryMappedAccountsResponse): QueryMappedAccountsResponseAmino {
    const obj: any = {};
    obj.RemoteAddressMap = {};
    if (message.RemoteAddressMap) {
      Object.entries(message.RemoteAddressMap).forEach(([k, v]) => {
        obj.RemoteAddressMap[k] = bytes.toAmino(v);
      });
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMappedAccountsResponseAminoMsg): QueryMappedAccountsResponse {
    return QueryMappedAccountsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMappedAccountsResponseProtoMsg): QueryMappedAccountsResponse {
    return QueryMappedAccountsResponse.decode(message.value);
  },
  toProto(message: QueryMappedAccountsResponse): Uint8Array {
    return QueryMappedAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMappedAccountsResponse): QueryMappedAccountsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainstaking.v1.QueryMappedAccountsResponse",
      value: QueryMappedAccountsResponse.encode(message).finish()
    };
  }
};