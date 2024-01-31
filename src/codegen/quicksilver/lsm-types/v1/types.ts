import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * TokenizeShareLockStatus indicates whether the address is able to tokenize
 * shares
 */
export enum TokenizeShareLockStatus {
  /** TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED - UNSPECIFIED defines an empty tokenize share lock status */
  TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED = 0,
  /** TOKENIZE_SHARE_LOCK_STATUS_LOCKED - LOCKED indicates the account is locked and cannot tokenize shares */
  TOKENIZE_SHARE_LOCK_STATUS_LOCKED = 1,
  /** TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED - UNLOCKED indicates the account is unlocked and can tokenize shares */
  TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED = 2,
  /**
   * TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING - LOCK_EXPIRING indicates the account is unable to tokenize shares, but
   * will be able to tokenize shortly (after 1 unbonding period)
   */
  TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING = 3,
  UNRECOGNIZED = -1,
}
export const TokenizeShareLockStatusSDKType = TokenizeShareLockStatus;
export const TokenizeShareLockStatusAmino = TokenizeShareLockStatus;
export function tokenizeShareLockStatusFromJSON(object: any): TokenizeShareLockStatus {
  switch (object) {
    case 0:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED;
    case 1:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCKED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCKED;
    case 2:
    case "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED;
    case 3:
    case "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING":
      return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TokenizeShareLockStatus.UNRECOGNIZED;
  }
}
export function tokenizeShareLockStatusToJSON(object: TokenizeShareLockStatus): string {
  switch (object) {
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCKED:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCKED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED:
      return "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED";
    case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING:
      return "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING";
    case TokenizeShareLockStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** TokenizeShareRecordReward represents the properties of tokenize share */
export interface TokenizeShareRecordReward {
  record_id: Long;
  reward: DecCoin[];
}
export interface TokenizeShareRecordRewardProtoMsg {
  type_url: "/cosmos.staking.v1beta1.TokenizeShareRecordReward";
  value: Uint8Array;
}
/** TokenizeShareRecordReward represents the properties of tokenize share */
export interface TokenizeShareRecordRewardAmino {
  record_id: string;
  reward: DecCoinAmino[];
}
export interface TokenizeShareRecordRewardAminoMsg {
  type: "cosmos-sdk/TokenizeShareRecordReward";
  value: TokenizeShareRecordRewardAmino;
}
/** TokenizeShareRecordReward represents the properties of tokenize share */
export interface TokenizeShareRecordRewardSDKType {
  record_id: Long;
  reward: DecCoinSDKType[];
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC
 * method.
 */
export interface QueryTokenizeShareRecordRewardRequest {
  owner_address: string;
}
export interface QueryTokenizeShareRecordRewardRequestProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC
 * method.
 */
export interface QueryTokenizeShareRecordRewardRequestAmino {
  owner_address: string;
}
export interface QueryTokenizeShareRecordRewardRequestAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareRecordRewardRequest";
  value: QueryTokenizeShareRecordRewardRequestAmino;
}
/**
 * QueryTokenizeShareRecordRewardRequest is the request type for the
 * Query/TokenizeShareRecordReward RPC
 * method.
 */
export interface QueryTokenizeShareRecordRewardRequestSDKType {
  owner_address: string;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: TokenizeShareRecordReward[];
  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}
export interface QueryTokenizeShareRecordRewardResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponseAmino {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: TokenizeShareRecordRewardAmino[];
  /** total defines the sum of all the rewards. */
  total: DecCoinAmino[];
}
export interface QueryTokenizeShareRecordRewardResponseAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareRecordRewardResponse";
  value: QueryTokenizeShareRecordRewardResponseAmino;
}
/**
 * QueryTokenizeShareRecordRewardResponse is the response type for the
 * Query/TokenizeShareRecordReward RPC method.
 */
export interface QueryTokenizeShareRecordRewardResponseSDKType {
  rewards: TokenizeShareRecordRewardSDKType[];
  total: DecCoinSDKType[];
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordReward {
  owner_address: string;
  record_id: Long;
}
export interface MsgWithdrawTokenizeShareRecordRewardProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordReward";
  value: Uint8Array;
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordRewardAmino {
  owner_address: string;
  record_id: string;
}
export interface MsgWithdrawTokenizeShareRecordRewardAminoMsg {
  type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordReward";
  value: MsgWithdrawTokenizeShareRecordRewardAmino;
}
/**
 * MsgWithdrawTokenizeShareRecordReward withdraws tokenize share rewards for a
 * specific record
 */
export interface MsgWithdrawTokenizeShareRecordRewardSDKType {
  owner_address: string;
  record_id: Long;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponse {}
export interface MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponseAmino {}
export interface MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg {
  type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordRewardResponse";
  value: MsgWithdrawTokenizeShareRecordRewardResponseAmino;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponseSDKType {}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordReward {
  owner_address: string;
}
export interface MsgWithdrawAllTokenizeShareRecordRewardProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordReward";
  value: Uint8Array;
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardAmino {
  owner_address: string;
}
export interface MsgWithdrawAllTokenizeShareRecordRewardAminoMsg {
  type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordReward";
  value: MsgWithdrawAllTokenizeShareRecordRewardAmino;
}
/**
 * MsgWithdrawAllTokenizeShareRecordReward withdraws tokenize share rewards or
 * all records owned by the designated owner
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardSDKType {
  owner_address: string;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponse {}
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse";
  value: Uint8Array;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseAmino {}
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg {
  type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordRewardResponse";
  value: MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseSDKType {}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequest {
  id: Long;
}
export interface QueryTokenizeShareRecordByIdRequestProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequestAmino {
  id: string;
}
export interface QueryTokenizeShareRecordByIdRequestAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareRecordByIdRequest";
  value: QueryTokenizeShareRecordByIdRequestAmino;
}
/**
 * QueryTokenizeShareRecordByIdRequest is request type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdRequestSDKType {
  id: Long;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponse {
  record: TokenizeShareRecord;
}
export interface QueryTokenizeShareRecordByIdResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponseAmino {
  record?: TokenizeShareRecordAmino;
}
export interface QueryTokenizeShareRecordByIdResponseAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareRecordByIdResponse";
  value: QueryTokenizeShareRecordByIdResponseAmino;
}
/**
 * QueryTokenizeShareRecordByIdRequest is response type for the
 * Query/QueryTokenizeShareRecordById RPC method.
 */
export interface QueryTokenizeShareRecordByIdResponseSDKType {
  record: TokenizeShareRecordSDKType;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequest {
  denom: string;
}
export interface QueryTokenizeShareRecordByDenomRequestProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequestAmino {
  denom: string;
}
export interface QueryTokenizeShareRecordByDenomRequestAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareRecordByDenomRequest";
  value: QueryTokenizeShareRecordByDenomRequestAmino;
}
/**
 * QueryTokenizeShareRecordByDenomRequest is request type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomRequestSDKType {
  denom: string;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponse {
  record: TokenizeShareRecord;
}
export interface QueryTokenizeShareRecordByDenomResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponseAmino {
  record?: TokenizeShareRecordAmino;
}
export interface QueryTokenizeShareRecordByDenomResponseAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareRecordByDenomResponse";
  value: QueryTokenizeShareRecordByDenomResponseAmino;
}
/**
 * QueryTokenizeShareRecordByDenomResponse is response type for the
 * Query/QueryTokenizeShareRecordByDenom RPC method.
 */
export interface QueryTokenizeShareRecordByDenomResponseSDKType {
  record: TokenizeShareRecordSDKType;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequest {
  owner: string;
}
export interface QueryTokenizeShareRecordsOwnedRequestProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequestAmino {
  owner: string;
}
export interface QueryTokenizeShareRecordsOwnedRequestAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedRequest";
  value: QueryTokenizeShareRecordsOwnedRequestAmino;
}
/**
 * QueryTokenizeShareRecordsOwnedRequest is request type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedRequestSDKType {
  owner: string;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponse {
  records: TokenizeShareRecord[];
}
export interface QueryTokenizeShareRecordsOwnedResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponseAmino {
  records: TokenizeShareRecordAmino[];
}
export interface QueryTokenizeShareRecordsOwnedResponseAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedResponse";
  value: QueryTokenizeShareRecordsOwnedResponseAmino;
}
/**
 * QueryTokenizeShareRecordsOwnedResponse is response type for the
 * Query/QueryTokenizeShareRecordsOwned RPC method.
 */
export interface QueryTokenizeShareRecordsOwnedResponseSDKType {
  records: TokenizeShareRecordSDKType[];
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryAllTokenizeShareRecordsRequestProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest";
  value: Uint8Array;
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAllTokenizeShareRecordsRequestAminoMsg {
  type: "cosmos-sdk/QueryAllTokenizeShareRecordsRequest";
  value: QueryAllTokenizeShareRecordsRequestAmino;
}
/**
 * QueryAllTokenizeShareRecordsRequest is request type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsRequestSDKType {
  pagination: PageRequestSDKType;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponse {
  records: TokenizeShareRecord[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryAllTokenizeShareRecordsResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse";
  value: Uint8Array;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponseAmino {
  records: TokenizeShareRecordAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAllTokenizeShareRecordsResponseAminoMsg {
  type: "cosmos-sdk/QueryAllTokenizeShareRecordsResponse";
  value: QueryAllTokenizeShareRecordsResponseAmino;
}
/**
 * QueryAllTokenizeShareRecordsResponse is response type for the
 * Query/QueryAllTokenizeShareRecords RPC method.
 */
export interface QueryAllTokenizeShareRecordsResponseSDKType {
  records: TokenizeShareRecordSDKType[];
  pagination: PageResponseSDKType;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequest {}
export interface QueryLastTokenizeShareRecordIdRequestProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest";
  value: Uint8Array;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestAmino {}
export interface QueryLastTokenizeShareRecordIdRequestAminoMsg {
  type: "cosmos-sdk/QueryLastTokenizeShareRecordIdRequest";
  value: QueryLastTokenizeShareRecordIdRequestAmino;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestSDKType {}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponse {
  id: Long;
}
export interface QueryLastTokenizeShareRecordIdResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse";
  value: Uint8Array;
}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponseAmino {
  id: string;
}
export interface QueryLastTokenizeShareRecordIdResponseAminoMsg {
  type: "cosmos-sdk/QueryLastTokenizeShareRecordIdResponse";
  value: QueryLastTokenizeShareRecordIdResponseAmino;
}
/**
 * QueryLastTokenizeShareRecordIdResponse is response type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdResponseSDKType {
  id: Long;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequest {}
export interface QueryTotalTokenizeSharedAssetsRequestProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest";
  value: Uint8Array;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestAmino {}
export interface QueryTotalTokenizeSharedAssetsRequestAminoMsg {
  type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsRequest";
  value: QueryTotalTokenizeSharedAssetsRequestAmino;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestSDKType {}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponse {
  value: Coin;
}
export interface QueryTotalTokenizeSharedAssetsResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse";
  value: Uint8Array;
}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponseAmino {
  value?: CoinAmino;
}
export interface QueryTotalTokenizeSharedAssetsResponseAminoMsg {
  type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsResponse";
  value: QueryTotalTokenizeSharedAssetsResponseAmino;
}
/**
 * QueryTotalTokenizeSharedAssetsResponse is response type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsResponseSDKType {
  value: CoinSDKType;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStaked {}
export interface QueryTotalLiquidStakedProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryTotalLiquidStaked";
  value: Uint8Array;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedAmino {}
export interface QueryTotalLiquidStakedAminoMsg {
  type: "cosmos-sdk/QueryTotalLiquidStaked";
  value: QueryTotalLiquidStakedAmino;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedSDKType {}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponse {
  tokens: string;
}
export interface QueryTotalLiquidStakedResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse";
  value: Uint8Array;
}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponseAmino {
  tokens: string;
}
export interface QueryTotalLiquidStakedResponseAminoMsg {
  type: "cosmos-sdk/QueryTotalLiquidStakedResponse";
  value: QueryTotalLiquidStakedResponseAmino;
}
/**
 * QueryTotalLiquidStakedResponse is response type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedResponseSDKType {
  tokens: string;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfo {
  address: string;
}
export interface QueryTokenizeShareLockInfoProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfo";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfoAmino {
  address: string;
}
export interface QueryTokenizeShareLockInfoAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareLockInfo";
  value: QueryTokenizeShareLockInfoAmino;
}
/**
 * QueryTokenizeShareLockInfo queries the tokenize share lock information
 * associated with given account
 */
export interface QueryTokenizeShareLockInfoSDKType {
  address: string;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponse {
  status: string;
  expiration_time: string;
}
export interface QueryTokenizeShareLockInfoResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse";
  value: Uint8Array;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponseAmino {
  status: string;
  expiration_time: string;
}
export interface QueryTokenizeShareLockInfoResponseAminoMsg {
  type: "cosmos-sdk/QueryTokenizeShareLockInfoResponse";
  value: QueryTokenizeShareLockInfoResponseAmino;
}
/**
 * QueryTokenizeShareLockInfoResponse is the response from the
 * QueryTokenizeShareLockInfo query
 */
export interface QueryTokenizeShareLockInfoResponseSDKType {
  status: string;
  expiration_time: string;
}
/** TokenizeShareRecord represents a tokenized delegation */
export interface TokenizeShareRecord {
  id: Long;
  owner: string;
  /** module account take the role of delegator */
  module_account: string;
  /** validator delegated to for tokenize share record creation */
  validator: string;
}
export interface TokenizeShareRecordProtoMsg {
  type_url: "/cosmos.staking.v1beta1.TokenizeShareRecord";
  value: Uint8Array;
}
/** TokenizeShareRecord represents a tokenized delegation */
export interface TokenizeShareRecordAmino {
  id: string;
  owner: string;
  /** module account take the role of delegator */
  module_account: string;
  /** validator delegated to for tokenize share record creation */
  validator: string;
}
export interface TokenizeShareRecordAminoMsg {
  type: "cosmos-sdk/TokenizeShareRecord";
  value: TokenizeShareRecordAmino;
}
/** TokenizeShareRecord represents a tokenized delegation */
export interface TokenizeShareRecordSDKType {
  id: Long;
  owner: string;
  module_account: string;
  validator: string;
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 */
export interface PendingTokenizeShareAuthorizations {
  addresses: string[];
}
export interface PendingTokenizeShareAuthorizationsProtoMsg {
  type_url: "/cosmos.staking.v1beta1.PendingTokenizeShareAuthorizations";
  value: Uint8Array;
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 */
export interface PendingTokenizeShareAuthorizationsAmino {
  addresses: string[];
}
export interface PendingTokenizeShareAuthorizationsAminoMsg {
  type: "cosmos-sdk/PendingTokenizeShareAuthorizations";
  value: PendingTokenizeShareAuthorizationsAmino;
}
/**
 * PendingTokenizeShareAuthorizations stores a list of addresses that have their
 * tokenize share enablement in progress
 */
export interface PendingTokenizeShareAuthorizationsSDKType {
  addresses: string[];
}
/**
 * MsgUnbondValidator defines a method for performing the status transition for
 * a validator from bonded to unbonded
 */
export interface MsgUnbondValidator {
  validator_address: string;
}
export interface MsgUnbondValidatorProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgUnbondValidator";
  value: Uint8Array;
}
/**
 * MsgUnbondValidator defines a method for performing the status transition for
 * a validator from bonded to unbonded
 */
export interface MsgUnbondValidatorAmino {
  validator_address: string;
}
export interface MsgUnbondValidatorAminoMsg {
  type: "cosmos-sdk/MsgUnbondValidator";
  value: MsgUnbondValidatorAmino;
}
/**
 * MsgUnbondValidator defines a method for performing the status transition for
 * a validator from bonded to unbonded
 */
export interface MsgUnbondValidatorSDKType {
  validator_address: string;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponse {}
export interface MsgUnbondValidatorResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse";
  value: Uint8Array;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponseAmino {}
export interface MsgUnbondValidatorResponseAminoMsg {
  type: "cosmos-sdk/MsgUnbondValidatorResponse";
  value: MsgUnbondValidatorResponseAmino;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponseSDKType {}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeShares {
  delegator_address: string;
  validator_address: string;
  amount: Coin;
  tokenized_share_owner: string;
}
export interface MsgTokenizeSharesProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgTokenizeShares";
  value: Uint8Array;
}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeSharesAmino {
  delegator_address: string;
  validator_address: string;
  amount?: CoinAmino;
  tokenized_share_owner: string;
}
export interface MsgTokenizeSharesAminoMsg {
  type: "cosmos-sdk/MsgTokenizeShares";
  value: MsgTokenizeSharesAmino;
}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeSharesSDKType {
  delegator_address: string;
  validator_address: string;
  amount: CoinSDKType;
  tokenized_share_owner: string;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponse {
  amount: Coin;
}
export interface MsgTokenizeSharesResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse";
  value: Uint8Array;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponseAmino {
  amount?: CoinAmino;
}
export interface MsgTokenizeSharesResponseAminoMsg {
  type: "cosmos-sdk/MsgTokenizeSharesResponse";
  value: MsgTokenizeSharesResponseAmino;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponseSDKType {
  amount: CoinSDKType;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForShares {
  delegator_address: string;
  amount: Coin;
}
export interface MsgRedeemTokensForSharesProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares";
  value: Uint8Array;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForSharesAmino {
  delegator_address: string;
  amount?: CoinAmino;
}
export interface MsgRedeemTokensForSharesAminoMsg {
  type: "cosmos-sdk/MsgRedeemTokensForShares";
  value: MsgRedeemTokensForSharesAmino;
}
/**
 * MsgRedeemTokensForShares redeems a tokenized share back into a native
 * delegation
 */
export interface MsgRedeemTokensForSharesSDKType {
  delegator_address: string;
  amount: CoinSDKType;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponse {
  amount: Coin;
}
export interface MsgRedeemTokensForSharesResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse";
  value: Uint8Array;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponseAmino {
  amount?: CoinAmino;
}
export interface MsgRedeemTokensForSharesResponseAminoMsg {
  type: "cosmos-sdk/MsgRedeemTokensForSharesResponse";
  value: MsgRedeemTokensForSharesResponseAmino;
}
/**
 * MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares
 * response type.
 */
export interface MsgRedeemTokensForSharesResponseSDKType {
  amount: CoinSDKType;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecord {
  tokenize_share_record_id: Long;
  sender: string;
  new_owner: string;
}
export interface MsgTransferTokenizeShareRecordProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord";
  value: Uint8Array;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecordAmino {
  tokenize_share_record_id: string;
  sender: string;
  new_owner: string;
}
export interface MsgTransferTokenizeShareRecordAminoMsg {
  type: "cosmos-sdk/MsgTransferTokenizeShareRecord";
  value: MsgTransferTokenizeShareRecordAmino;
}
/** MsgTransferTokenizeShareRecord transfer a tokenize share record */
export interface MsgTransferTokenizeShareRecordSDKType {
  tokenize_share_record_id: Long;
  sender: string;
  new_owner: string;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponse {}
export interface MsgTransferTokenizeShareRecordResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse";
  value: Uint8Array;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponseAmino {}
export interface MsgTransferTokenizeShareRecordResponseAminoMsg {
  type: "cosmos-sdk/MsgTransferTokenizeShareRecordResponse";
  value: MsgTransferTokenizeShareRecordResponseAmino;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponseSDKType {}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeShares {
  delegator_address: string;
}
export interface MsgDisableTokenizeSharesProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares";
  value: Uint8Array;
}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeSharesAmino {
  delegator_address: string;
}
export interface MsgDisableTokenizeSharesAminoMsg {
  type: "cosmos-sdk/MsgDisableTokenizeShares";
  value: MsgDisableTokenizeSharesAmino;
}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeSharesSDKType {
  delegator_address: string;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponse {}
export interface MsgDisableTokenizeSharesResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse";
  value: Uint8Array;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponseAmino {}
export interface MsgDisableTokenizeSharesResponseAminoMsg {
  type: "cosmos-sdk/MsgDisableTokenizeSharesResponse";
  value: MsgDisableTokenizeSharesResponseAmino;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponseSDKType {}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeShares {
  delegator_address: string;
}
export interface MsgEnableTokenizeSharesProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares";
  value: Uint8Array;
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeSharesAmino {
  delegator_address: string;
}
export interface MsgEnableTokenizeSharesAminoMsg {
  type: "cosmos-sdk/MsgEnableTokenizeShares";
  value: MsgEnableTokenizeSharesAmino;
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeSharesSDKType {
  delegator_address: string;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponse {
  completion_time: Date;
}
export interface MsgEnableTokenizeSharesResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse";
  value: Uint8Array;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponseAmino {
  completion_time?: Date;
}
export interface MsgEnableTokenizeSharesResponseAminoMsg {
  type: "cosmos-sdk/MsgEnableTokenizeSharesResponse";
  value: MsgEnableTokenizeSharesResponseAmino;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponseSDKType {
  completion_time: Date;
}
/**
 * MsgValidatorBond defines a SDK message for performing validator self-bond of
 * delegated coins from a delegator to a validator.
 */
export interface MsgValidatorBond {
  delegator_address: string;
  validator_address: string;
}
export interface MsgValidatorBondProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgValidatorBond";
  value: Uint8Array;
}
/**
 * MsgValidatorBond defines a SDK message for performing validator self-bond of
 * delegated coins from a delegator to a validator.
 */
export interface MsgValidatorBondAmino {
  delegator_address: string;
  validator_address: string;
}
export interface MsgValidatorBondAminoMsg {
  type: "cosmos-sdk/MsgValidatorBond";
  value: MsgValidatorBondAmino;
}
/**
 * MsgValidatorBond defines a SDK message for performing validator self-bond of
 * delegated coins from a delegator to a validator.
 */
export interface MsgValidatorBondSDKType {
  delegator_address: string;
  validator_address: string;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponse {}
export interface MsgValidatorBondResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgValidatorBondResponse";
  value: Uint8Array;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponseAmino {}
export interface MsgValidatorBondResponseAminoMsg {
  type: "cosmos-sdk/MsgValidatorBondResponse";
  value: MsgValidatorBondResponseAmino;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponseSDKType {}
function createBaseTokenizeShareRecordReward(): TokenizeShareRecordReward {
  return {
    record_id: Long.UZERO,
    reward: []
  };
}
export const TokenizeShareRecordReward = {
  typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecordReward",
  aminoType: "cosmos-sdk/TokenizeShareRecordReward",
  encode(message: TokenizeShareRecordReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.record_id.isZero()) {
      writer.uint32(8).uint64(message.record_id);
    }
    for (const v of message.reward) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeShareRecordReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record_id = (reader.uint64() as Long);
          break;
        case 2:
          message.reward.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenizeShareRecordReward {
    return {
      record_id: isSet(object.record_id) ? Long.fromValue(object.record_id) : Long.UZERO,
      reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: TokenizeShareRecordReward): unknown {
    const obj: any = {};
    message.record_id !== undefined && (obj.record_id = (message.record_id || Long.UZERO).toString());
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.reward = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<TokenizeShareRecordReward>): TokenizeShareRecordReward {
    const message = createBaseTokenizeShareRecordReward();
    message.record_id = object.record_id !== undefined && object.record_id !== null ? Long.fromValue(object.record_id) : Long.UZERO;
    message.reward = object.reward?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: TokenizeShareRecordRewardAmino): TokenizeShareRecordReward {
    return {
      record_id: Long.fromString(object.record_id),
      reward: Array.isArray(object?.reward) ? object.reward.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: TokenizeShareRecordReward): TokenizeShareRecordRewardAmino {
    const obj: any = {};
    obj.record_id = message.record_id ? message.record_id.toString() : undefined;
    if (message.reward) {
      obj.reward = message.reward.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.reward = [];
    }
    return obj;
  },
  fromAminoMsg(object: TokenizeShareRecordRewardAminoMsg): TokenizeShareRecordReward {
    return TokenizeShareRecordReward.fromAmino(object.value);
  },
  toAminoMsg(message: TokenizeShareRecordReward): TokenizeShareRecordRewardAminoMsg {
    return {
      type: "cosmos-sdk/TokenizeShareRecordReward",
      value: TokenizeShareRecordReward.toAmino(message)
    };
  },
  fromProtoMsg(message: TokenizeShareRecordRewardProtoMsg): TokenizeShareRecordReward {
    return TokenizeShareRecordReward.decode(message.value);
  },
  toProto(message: TokenizeShareRecordReward): Uint8Array {
    return TokenizeShareRecordReward.encode(message).finish();
  },
  toProtoMsg(message: TokenizeShareRecordReward): TokenizeShareRecordRewardProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecordReward",
      value: TokenizeShareRecordReward.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordRewardRequest(): QueryTokenizeShareRecordRewardRequest {
  return {
    owner_address: ""
  };
}
export const QueryTokenizeShareRecordRewardRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardRequest",
  aminoType: "cosmos-sdk/QueryTokenizeShareRecordRewardRequest",
  encode(message: QueryTokenizeShareRecordRewardRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner_address !== "") {
      writer.uint32(10).string(message.owner_address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordRewardRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordRewardRequest {
    return {
      owner_address: isSet(object.owner_address) ? String(object.owner_address) : ""
    };
  },
  toJSON(message: QueryTokenizeShareRecordRewardRequest): unknown {
    const obj: any = {};
    message.owner_address !== undefined && (obj.owner_address = message.owner_address);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordRewardRequest>): QueryTokenizeShareRecordRewardRequest {
    const message = createBaseQueryTokenizeShareRecordRewardRequest();
    message.owner_address = object.owner_address ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordRewardRequestAmino): QueryTokenizeShareRecordRewardRequest {
    return {
      owner_address: object.owner_address
    };
  },
  toAmino(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestAmino {
    const obj: any = {};
    obj.owner_address = message.owner_address;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordRewardRequestAminoMsg): QueryTokenizeShareRecordRewardRequest {
    return QueryTokenizeShareRecordRewardRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordRewardRequest",
      value: QueryTokenizeShareRecordRewardRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordRewardRequestProtoMsg): QueryTokenizeShareRecordRewardRequest {
    return QueryTokenizeShareRecordRewardRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordRewardRequest): Uint8Array {
    return QueryTokenizeShareRecordRewardRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardRequest",
      value: QueryTokenizeShareRecordRewardRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordRewardResponse(): QueryTokenizeShareRecordRewardResponse {
  return {
    rewards: [],
    total: []
  };
}
export const QueryTokenizeShareRecordRewardResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardResponse",
  aminoType: "cosmos-sdk/QueryTokenizeShareRecordRewardResponse",
  encode(message: QueryTokenizeShareRecordRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rewards) {
      TokenizeShareRecordReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(TokenizeShareRecordReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordRewardResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => TokenizeShareRecordReward.fromJSON(e)) : [],
      total: Array.isArray(object?.total) ? object.total.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTokenizeShareRecordRewardResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? TokenizeShareRecordReward.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordRewardResponse>): QueryTokenizeShareRecordRewardResponse {
    const message = createBaseQueryTokenizeShareRecordRewardResponse();
    message.rewards = object.rewards?.map(e => TokenizeShareRecordReward.fromPartial(e)) || [];
    message.total = object.total?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordRewardResponseAmino): QueryTokenizeShareRecordRewardResponse {
    return {
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => TokenizeShareRecordReward.fromAmino(e)) : [],
      total: Array.isArray(object?.total) ? object.total.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? TokenizeShareRecordReward.toAmino(e) : undefined);
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordRewardResponseAminoMsg): QueryTokenizeShareRecordRewardResponse {
    return QueryTokenizeShareRecordRewardResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordRewardResponse",
      value: QueryTokenizeShareRecordRewardResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordRewardResponseProtoMsg): QueryTokenizeShareRecordRewardResponse {
    return QueryTokenizeShareRecordRewardResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordRewardResponse): Uint8Array {
    return QueryTokenizeShareRecordRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardResponse",
      value: QueryTokenizeShareRecordRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawTokenizeShareRecordReward(): MsgWithdrawTokenizeShareRecordReward {
  return {
    owner_address: "",
    record_id: Long.UZERO
  };
}
export const MsgWithdrawTokenizeShareRecordReward = {
  typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordReward",
  aminoType: "cosmos-sdk/MsgWithdrawTokenizeShareRecordReward",
  encode(message: MsgWithdrawTokenizeShareRecordReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner_address !== "") {
      writer.uint32(10).string(message.owner_address);
    }
    if (!message.record_id.isZero()) {
      writer.uint32(16).uint64(message.record_id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTokenizeShareRecordReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner_address = reader.string();
          break;
        case 2:
          message.record_id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawTokenizeShareRecordReward {
    return {
      owner_address: isSet(object.owner_address) ? String(object.owner_address) : "",
      record_id: isSet(object.record_id) ? Long.fromValue(object.record_id) : Long.UZERO
    };
  },
  toJSON(message: MsgWithdrawTokenizeShareRecordReward): unknown {
    const obj: any = {};
    message.owner_address !== undefined && (obj.owner_address = message.owner_address);
    message.record_id !== undefined && (obj.record_id = (message.record_id || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgWithdrawTokenizeShareRecordReward>): MsgWithdrawTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawTokenizeShareRecordReward();
    message.owner_address = object.owner_address ?? "";
    message.record_id = object.record_id !== undefined && object.record_id !== null ? Long.fromValue(object.record_id) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgWithdrawTokenizeShareRecordRewardAmino): MsgWithdrawTokenizeShareRecordReward {
    return {
      owner_address: object.owner_address,
      record_id: Long.fromString(object.record_id)
    };
  },
  toAmino(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardAmino {
    const obj: any = {};
    obj.owner_address = message.owner_address;
    obj.record_id = message.record_id ? message.record_id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTokenizeShareRecordRewardAminoMsg): MsgWithdrawTokenizeShareRecordReward {
    return MsgWithdrawTokenizeShareRecordReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordReward",
      value: MsgWithdrawTokenizeShareRecordReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardProtoMsg): MsgWithdrawTokenizeShareRecordReward {
    return MsgWithdrawTokenizeShareRecordReward.decode(message.value);
  },
  toProto(message: MsgWithdrawTokenizeShareRecordReward): Uint8Array {
    return MsgWithdrawTokenizeShareRecordReward.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordReward",
      value: MsgWithdrawTokenizeShareRecordReward.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawTokenizeShareRecordRewardResponse(): MsgWithdrawTokenizeShareRecordRewardResponse {
  return {};
}
export const MsgWithdrawTokenizeShareRecordRewardResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse",
  aminoType: "cosmos-sdk/MsgWithdrawTokenizeShareRecordRewardResponse",
  encode(_: MsgWithdrawTokenizeShareRecordRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTokenizeShareRecordRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWithdrawTokenizeShareRecordRewardResponse {
    return {};
  },
  toJSON(_: MsgWithdrawTokenizeShareRecordRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgWithdrawTokenizeShareRecordRewardResponse>): MsgWithdrawTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawTokenizeShareRecordRewardResponseAmino): MsgWithdrawTokenizeShareRecordRewardResponse {
    return {};
  },
  toAmino(_: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg): MsgWithdrawTokenizeShareRecordRewardResponse {
    return MsgWithdrawTokenizeShareRecordRewardResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordRewardResponse",
      value: MsgWithdrawTokenizeShareRecordRewardResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg): MsgWithdrawTokenizeShareRecordRewardResponse {
    return MsgWithdrawTokenizeShareRecordRewardResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawTokenizeShareRecordRewardResponse): Uint8Array {
    return MsgWithdrawTokenizeShareRecordRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse",
      value: MsgWithdrawTokenizeShareRecordRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawAllTokenizeShareRecordReward(): MsgWithdrawAllTokenizeShareRecordReward {
  return {
    owner_address: ""
  };
}
export const MsgWithdrawAllTokenizeShareRecordReward = {
  typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
  aminoType: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordReward",
  encode(message: MsgWithdrawAllTokenizeShareRecordReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner_address !== "") {
      writer.uint32(10).string(message.owner_address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAllTokenizeShareRecordReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawAllTokenizeShareRecordReward {
    return {
      owner_address: isSet(object.owner_address) ? String(object.owner_address) : ""
    };
  },
  toJSON(message: MsgWithdrawAllTokenizeShareRecordReward): unknown {
    const obj: any = {};
    message.owner_address !== undefined && (obj.owner_address = message.owner_address);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgWithdrawAllTokenizeShareRecordReward>): MsgWithdrawAllTokenizeShareRecordReward {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
    message.owner_address = object.owner_address ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawAllTokenizeShareRecordRewardAmino): MsgWithdrawAllTokenizeShareRecordReward {
    return {
      owner_address: object.owner_address
    };
  },
  toAmino(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardAmino {
    const obj: any = {};
    obj.owner_address = message.owner_address;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAllTokenizeShareRecordRewardAminoMsg): MsgWithdrawAllTokenizeShareRecordReward {
    return MsgWithdrawAllTokenizeShareRecordReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordReward",
      value: MsgWithdrawAllTokenizeShareRecordReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardProtoMsg): MsgWithdrawAllTokenizeShareRecordReward {
    return MsgWithdrawAllTokenizeShareRecordReward.decode(message.value);
  },
  toProto(message: MsgWithdrawAllTokenizeShareRecordReward): Uint8Array {
    return MsgWithdrawAllTokenizeShareRecordReward.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
      value: MsgWithdrawAllTokenizeShareRecordReward.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse(): MsgWithdrawAllTokenizeShareRecordRewardResponse {
  return {};
}
export const MsgWithdrawAllTokenizeShareRecordRewardResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse",
  aminoType: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordRewardResponse",
  encode(_: MsgWithdrawAllTokenizeShareRecordRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    return {};
  },
  toJSON(_: MsgWithdrawAllTokenizeShareRecordRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgWithdrawAllTokenizeShareRecordRewardResponse>): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawAllTokenizeShareRecordRewardResponseAmino): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    return {};
  },
  toAmino(_: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    return MsgWithdrawAllTokenizeShareRecordRewardResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordRewardResponse",
      value: MsgWithdrawAllTokenizeShareRecordRewardResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg): MsgWithdrawAllTokenizeShareRecordRewardResponse {
    return MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): Uint8Array {
    return MsgWithdrawAllTokenizeShareRecordRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse",
      value: MsgWithdrawAllTokenizeShareRecordRewardResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByIdRequest(): QueryTokenizeShareRecordByIdRequest {
  return {
    id: Long.UZERO
  };
}
export const QueryTokenizeShareRecordByIdRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest",
  aminoType: "cosmos-sdk/QueryTokenizeShareRecordByIdRequest",
  encode(message: QueryTokenizeShareRecordByIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordByIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByIdRequest {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  toJSON(message: QueryTokenizeShareRecordByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordByIdRequest>): QueryTokenizeShareRecordByIdRequest {
    const message = createBaseQueryTokenizeShareRecordByIdRequest();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByIdRequestAmino): QueryTokenizeShareRecordByIdRequest {
    return {
      id: Long.fromString(object.id)
    };
  },
  toAmino(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByIdRequestAminoMsg): QueryTokenizeShareRecordByIdRequest {
    return QueryTokenizeShareRecordByIdRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordByIdRequest",
      value: QueryTokenizeShareRecordByIdRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByIdRequestProtoMsg): QueryTokenizeShareRecordByIdRequest {
    return QueryTokenizeShareRecordByIdRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByIdRequest): Uint8Array {
    return QueryTokenizeShareRecordByIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest",
      value: QueryTokenizeShareRecordByIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByIdResponse(): QueryTokenizeShareRecordByIdResponse {
  return {
    record: TokenizeShareRecord.fromPartial({})
  };
}
export const QueryTokenizeShareRecordByIdResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse",
  aminoType: "cosmos-sdk/QueryTokenizeShareRecordByIdResponse",
  encode(message: QueryTokenizeShareRecordByIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordByIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByIdResponse {
    return {
      record: isSet(object.record) ? TokenizeShareRecord.fromJSON(object.record) : undefined
    };
  },
  toJSON(message: QueryTokenizeShareRecordByIdResponse): unknown {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? TokenizeShareRecord.toJSON(message.record) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordByIdResponse>): QueryTokenizeShareRecordByIdResponse {
    const message = createBaseQueryTokenizeShareRecordByIdResponse();
    message.record = object.record !== undefined && object.record !== null ? TokenizeShareRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByIdResponseAmino): QueryTokenizeShareRecordByIdResponse {
    return {
      record: object?.record ? TokenizeShareRecord.fromAmino(object.record) : undefined
    };
  },
  toAmino(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseAmino {
    const obj: any = {};
    obj.record = message.record ? TokenizeShareRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByIdResponseAminoMsg): QueryTokenizeShareRecordByIdResponse {
    return QueryTokenizeShareRecordByIdResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordByIdResponse",
      value: QueryTokenizeShareRecordByIdResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByIdResponseProtoMsg): QueryTokenizeShareRecordByIdResponse {
    return QueryTokenizeShareRecordByIdResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByIdResponse): Uint8Array {
    return QueryTokenizeShareRecordByIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse",
      value: QueryTokenizeShareRecordByIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByDenomRequest(): QueryTokenizeShareRecordByDenomRequest {
  return {
    denom: ""
  };
}
export const QueryTokenizeShareRecordByDenomRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest",
  aminoType: "cosmos-sdk/QueryTokenizeShareRecordByDenomRequest",
  encode(message: QueryTokenizeShareRecordByDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordByDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByDenomRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  toJSON(message: QueryTokenizeShareRecordByDenomRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordByDenomRequest>): QueryTokenizeShareRecordByDenomRequest {
    const message = createBaseQueryTokenizeShareRecordByDenomRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByDenomRequestAmino): QueryTokenizeShareRecordByDenomRequest {
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByDenomRequestAminoMsg): QueryTokenizeShareRecordByDenomRequest {
    return QueryTokenizeShareRecordByDenomRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordByDenomRequest",
      value: QueryTokenizeShareRecordByDenomRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByDenomRequestProtoMsg): QueryTokenizeShareRecordByDenomRequest {
    return QueryTokenizeShareRecordByDenomRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByDenomRequest): Uint8Array {
    return QueryTokenizeShareRecordByDenomRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest",
      value: QueryTokenizeShareRecordByDenomRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordByDenomResponse(): QueryTokenizeShareRecordByDenomResponse {
  return {
    record: TokenizeShareRecord.fromPartial({})
  };
}
export const QueryTokenizeShareRecordByDenomResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse",
  aminoType: "cosmos-sdk/QueryTokenizeShareRecordByDenomResponse",
  encode(message: QueryTokenizeShareRecordByDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.record !== undefined) {
      TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordByDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = TokenizeShareRecord.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordByDenomResponse {
    return {
      record: isSet(object.record) ? TokenizeShareRecord.fromJSON(object.record) : undefined
    };
  },
  toJSON(message: QueryTokenizeShareRecordByDenomResponse): unknown {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? TokenizeShareRecord.toJSON(message.record) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordByDenomResponse>): QueryTokenizeShareRecordByDenomResponse {
    const message = createBaseQueryTokenizeShareRecordByDenomResponse();
    message.record = object.record !== undefined && object.record !== null ? TokenizeShareRecord.fromPartial(object.record) : undefined;
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordByDenomResponseAmino): QueryTokenizeShareRecordByDenomResponse {
    return {
      record: object?.record ? TokenizeShareRecord.fromAmino(object.record) : undefined
    };
  },
  toAmino(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseAmino {
    const obj: any = {};
    obj.record = message.record ? TokenizeShareRecord.toAmino(message.record) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordByDenomResponseAminoMsg): QueryTokenizeShareRecordByDenomResponse {
    return QueryTokenizeShareRecordByDenomResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordByDenomResponse",
      value: QueryTokenizeShareRecordByDenomResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordByDenomResponseProtoMsg): QueryTokenizeShareRecordByDenomResponse {
    return QueryTokenizeShareRecordByDenomResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordByDenomResponse): Uint8Array {
    return QueryTokenizeShareRecordByDenomResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse",
      value: QueryTokenizeShareRecordByDenomResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordsOwnedRequest(): QueryTokenizeShareRecordsOwnedRequest {
  return {
    owner: ""
  };
}
export const QueryTokenizeShareRecordsOwnedRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
  aminoType: "cosmos-sdk/QueryTokenizeShareRecordsOwnedRequest",
  encode(message: QueryTokenizeShareRecordsOwnedRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordsOwnedRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordsOwnedRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : ""
    };
  },
  toJSON(message: QueryTokenizeShareRecordsOwnedRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordsOwnedRequest>): QueryTokenizeShareRecordsOwnedRequest {
    const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordsOwnedRequestAmino): QueryTokenizeShareRecordsOwnedRequest {
    return {
      owner: object.owner
    };
  },
  toAmino(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestAmino {
    const obj: any = {};
    obj.owner = message.owner;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordsOwnedRequestAminoMsg): QueryTokenizeShareRecordsOwnedRequest {
    return QueryTokenizeShareRecordsOwnedRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedRequest",
      value: QueryTokenizeShareRecordsOwnedRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordsOwnedRequestProtoMsg): QueryTokenizeShareRecordsOwnedRequest {
    return QueryTokenizeShareRecordsOwnedRequest.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordsOwnedRequest): Uint8Array {
    return QueryTokenizeShareRecordsOwnedRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
      value: QueryTokenizeShareRecordsOwnedRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareRecordsOwnedResponse(): QueryTokenizeShareRecordsOwnedResponse {
  return {
    records: []
  };
}
export const QueryTokenizeShareRecordsOwnedResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
  aminoType: "cosmos-sdk/QueryTokenizeShareRecordsOwnedResponse",
  encode(message: QueryTokenizeShareRecordsOwnedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordsOwnedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(TokenizeShareRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareRecordsOwnedResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => TokenizeShareRecord.fromJSON(e)) : []
    };
  },
  toJSON(message: QueryTokenizeShareRecordsOwnedResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? TokenizeShareRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareRecordsOwnedResponse>): QueryTokenizeShareRecordsOwnedResponse {
    const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTokenizeShareRecordsOwnedResponseAmino): QueryTokenizeShareRecordsOwnedResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => TokenizeShareRecord.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? TokenizeShareRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareRecordsOwnedResponseAminoMsg): QueryTokenizeShareRecordsOwnedResponse {
    return QueryTokenizeShareRecordsOwnedResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedResponse",
      value: QueryTokenizeShareRecordsOwnedResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareRecordsOwnedResponseProtoMsg): QueryTokenizeShareRecordsOwnedResponse {
    return QueryTokenizeShareRecordsOwnedResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareRecordsOwnedResponse): Uint8Array {
    return QueryTokenizeShareRecordsOwnedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
      value: QueryTokenizeShareRecordsOwnedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllTokenizeShareRecordsRequest(): QueryAllTokenizeShareRecordsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllTokenizeShareRecordsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest",
  aminoType: "cosmos-sdk/QueryAllTokenizeShareRecordsRequest",
  encode(message: QueryAllTokenizeShareRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenizeShareRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
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
  fromJSON(object: any): QueryAllTokenizeShareRecordsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllTokenizeShareRecordsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllTokenizeShareRecordsRequest>): QueryAllTokenizeShareRecordsRequest {
    const message = createBaseQueryAllTokenizeShareRecordsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenizeShareRecordsRequestAmino): QueryAllTokenizeShareRecordsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenizeShareRecordsRequestAminoMsg): QueryAllTokenizeShareRecordsRequest {
    return QueryAllTokenizeShareRecordsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllTokenizeShareRecordsRequest",
      value: QueryAllTokenizeShareRecordsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllTokenizeShareRecordsRequestProtoMsg): QueryAllTokenizeShareRecordsRequest {
    return QueryAllTokenizeShareRecordsRequest.decode(message.value);
  },
  toProto(message: QueryAllTokenizeShareRecordsRequest): Uint8Array {
    return QueryAllTokenizeShareRecordsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest",
      value: QueryAllTokenizeShareRecordsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllTokenizeShareRecordsResponse(): QueryAllTokenizeShareRecordsResponse {
  return {
    records: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllTokenizeShareRecordsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse",
  aminoType: "cosmos-sdk/QueryAllTokenizeShareRecordsResponse",
  encode(message: QueryAllTokenizeShareRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      TokenizeShareRecord.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenizeShareRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(TokenizeShareRecord.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllTokenizeShareRecordsResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => TokenizeShareRecord.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllTokenizeShareRecordsResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? TokenizeShareRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryAllTokenizeShareRecordsResponse>): QueryAllTokenizeShareRecordsResponse {
    const message = createBaseQueryAllTokenizeShareRecordsResponse();
    message.records = object.records?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllTokenizeShareRecordsResponseAmino): QueryAllTokenizeShareRecordsResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => TokenizeShareRecord.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? TokenizeShareRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllTokenizeShareRecordsResponseAminoMsg): QueryAllTokenizeShareRecordsResponse {
    return QueryAllTokenizeShareRecordsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllTokenizeShareRecordsResponse",
      value: QueryAllTokenizeShareRecordsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryAllTokenizeShareRecordsResponseProtoMsg): QueryAllTokenizeShareRecordsResponse {
    return QueryAllTokenizeShareRecordsResponse.decode(message.value);
  },
  toProto(message: QueryAllTokenizeShareRecordsResponse): Uint8Array {
    return QueryAllTokenizeShareRecordsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse",
      value: QueryAllTokenizeShareRecordsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLastTokenizeShareRecordIdRequest(): QueryLastTokenizeShareRecordIdRequest {
  return {};
}
export const QueryLastTokenizeShareRecordIdRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest",
  aminoType: "cosmos-sdk/QueryLastTokenizeShareRecordIdRequest",
  encode(_: QueryLastTokenizeShareRecordIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastTokenizeShareRecordIdRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryLastTokenizeShareRecordIdRequest {
    return {};
  },
  toJSON(_: QueryLastTokenizeShareRecordIdRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryLastTokenizeShareRecordIdRequest>): QueryLastTokenizeShareRecordIdRequest {
    const message = createBaseQueryLastTokenizeShareRecordIdRequest();
    return message;
  },
  fromAmino(_: QueryLastTokenizeShareRecordIdRequestAmino): QueryLastTokenizeShareRecordIdRequest {
    return {};
  },
  toAmino(_: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLastTokenizeShareRecordIdRequestAminoMsg): QueryLastTokenizeShareRecordIdRequest {
    return QueryLastTokenizeShareRecordIdRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryLastTokenizeShareRecordIdRequest",
      value: QueryLastTokenizeShareRecordIdRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLastTokenizeShareRecordIdRequestProtoMsg): QueryLastTokenizeShareRecordIdRequest {
    return QueryLastTokenizeShareRecordIdRequest.decode(message.value);
  },
  toProto(message: QueryLastTokenizeShareRecordIdRequest): Uint8Array {
    return QueryLastTokenizeShareRecordIdRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest",
      value: QueryLastTokenizeShareRecordIdRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLastTokenizeShareRecordIdResponse(): QueryLastTokenizeShareRecordIdResponse {
  return {
    id: Long.UZERO
  };
}
export const QueryLastTokenizeShareRecordIdResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse",
  aminoType: "cosmos-sdk/QueryLastTokenizeShareRecordIdResponse",
  encode(message: QueryLastTokenizeShareRecordIdResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastTokenizeShareRecordIdResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLastTokenizeShareRecordIdResponse {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  toJSON(message: QueryLastTokenizeShareRecordIdResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLastTokenizeShareRecordIdResponse>): QueryLastTokenizeShareRecordIdResponse {
    const message = createBaseQueryLastTokenizeShareRecordIdResponse();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryLastTokenizeShareRecordIdResponseAmino): QueryLastTokenizeShareRecordIdResponse {
    return {
      id: Long.fromString(object.id)
    };
  },
  toAmino(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLastTokenizeShareRecordIdResponseAminoMsg): QueryLastTokenizeShareRecordIdResponse {
    return QueryLastTokenizeShareRecordIdResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryLastTokenizeShareRecordIdResponse",
      value: QueryLastTokenizeShareRecordIdResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLastTokenizeShareRecordIdResponseProtoMsg): QueryLastTokenizeShareRecordIdResponse {
    return QueryLastTokenizeShareRecordIdResponse.decode(message.value);
  },
  toProto(message: QueryLastTokenizeShareRecordIdResponse): Uint8Array {
    return QueryLastTokenizeShareRecordIdResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse",
      value: QueryLastTokenizeShareRecordIdResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalTokenizeSharedAssetsRequest(): QueryTotalTokenizeSharedAssetsRequest {
  return {};
}
export const QueryTotalTokenizeSharedAssetsRequest = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
  aminoType: "cosmos-sdk/QueryTotalTokenizeSharedAssetsRequest",
  encode(_: QueryTotalTokenizeSharedAssetsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTokenizeSharedAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryTotalTokenizeSharedAssetsRequest {
    return {};
  },
  toJSON(_: QueryTotalTokenizeSharedAssetsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryTotalTokenizeSharedAssetsRequest>): QueryTotalTokenizeSharedAssetsRequest {
    const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
    return message;
  },
  fromAmino(_: QueryTotalTokenizeSharedAssetsRequestAmino): QueryTotalTokenizeSharedAssetsRequest {
    return {};
  },
  toAmino(_: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalTokenizeSharedAssetsRequestAminoMsg): QueryTotalTokenizeSharedAssetsRequest {
    return QueryTotalTokenizeSharedAssetsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsRequest",
      value: QueryTotalTokenizeSharedAssetsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalTokenizeSharedAssetsRequestProtoMsg): QueryTotalTokenizeSharedAssetsRequest {
    return QueryTotalTokenizeSharedAssetsRequest.decode(message.value);
  },
  toProto(message: QueryTotalTokenizeSharedAssetsRequest): Uint8Array {
    return QueryTotalTokenizeSharedAssetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
      value: QueryTotalTokenizeSharedAssetsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalTokenizeSharedAssetsResponse(): QueryTotalTokenizeSharedAssetsResponse {
  return {
    value: Coin.fromPartial({})
  };
}
export const QueryTotalTokenizeSharedAssetsResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
  aminoType: "cosmos-sdk/QueryTotalTokenizeSharedAssetsResponse",
  encode(message: QueryTotalTokenizeSharedAssetsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTokenizeSharedAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalTokenizeSharedAssetsResponse {
    return {
      value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined
    };
  },
  toJSON(message: QueryTotalTokenizeSharedAssetsResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalTokenizeSharedAssetsResponse>): QueryTotalTokenizeSharedAssetsResponse {
    const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    return message;
  },
  fromAmino(object: QueryTotalTokenizeSharedAssetsResponseAmino): QueryTotalTokenizeSharedAssetsResponse {
    return {
      value: object?.value ? Coin.fromAmino(object.value) : undefined
    };
  },
  toAmino(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseAmino {
    const obj: any = {};
    obj.value = message.value ? Coin.toAmino(message.value) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTotalTokenizeSharedAssetsResponseAminoMsg): QueryTotalTokenizeSharedAssetsResponse {
    return QueryTotalTokenizeSharedAssetsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsResponse",
      value: QueryTotalTokenizeSharedAssetsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalTokenizeSharedAssetsResponseProtoMsg): QueryTotalTokenizeSharedAssetsResponse {
    return QueryTotalTokenizeSharedAssetsResponse.decode(message.value);
  },
  toProto(message: QueryTotalTokenizeSharedAssetsResponse): Uint8Array {
    return QueryTotalTokenizeSharedAssetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
      value: QueryTotalTokenizeSharedAssetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidStaked(): QueryTotalLiquidStaked {
  return {};
}
export const QueryTotalLiquidStaked = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStaked",
  aminoType: "cosmos-sdk/QueryTotalLiquidStaked",
  encode(_: QueryTotalLiquidStaked, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidStaked {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidStaked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryTotalLiquidStaked {
    return {};
  },
  toJSON(_: QueryTotalLiquidStaked): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryTotalLiquidStaked>): QueryTotalLiquidStaked {
    const message = createBaseQueryTotalLiquidStaked();
    return message;
  },
  fromAmino(_: QueryTotalLiquidStakedAmino): QueryTotalLiquidStaked {
    return {};
  },
  toAmino(_: QueryTotalLiquidStaked): QueryTotalLiquidStakedAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidStakedAminoMsg): QueryTotalLiquidStaked {
    return QueryTotalLiquidStaked.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalLiquidStaked): QueryTotalLiquidStakedAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalLiquidStaked",
      value: QueryTotalLiquidStaked.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalLiquidStakedProtoMsg): QueryTotalLiquidStaked {
    return QueryTotalLiquidStaked.decode(message.value);
  },
  toProto(message: QueryTotalLiquidStaked): Uint8Array {
    return QueryTotalLiquidStaked.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidStaked): QueryTotalLiquidStakedProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStaked",
      value: QueryTotalLiquidStaked.encode(message).finish()
    };
  }
};
function createBaseQueryTotalLiquidStakedResponse(): QueryTotalLiquidStakedResponse {
  return {
    tokens: ""
  };
}
export const QueryTotalLiquidStakedResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse",
  aminoType: "cosmos-sdk/QueryTotalLiquidStakedResponse",
  encode(message: QueryTotalLiquidStakedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokens !== "") {
      writer.uint32(10).string(message.tokens);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidStakedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTotalLiquidStakedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTotalLiquidStakedResponse {
    return {
      tokens: isSet(object.tokens) ? String(object.tokens) : ""
    };
  },
  toJSON(message: QueryTotalLiquidStakedResponse): unknown {
    const obj: any = {};
    message.tokens !== undefined && (obj.tokens = message.tokens);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTotalLiquidStakedResponse>): QueryTotalLiquidStakedResponse {
    const message = createBaseQueryTotalLiquidStakedResponse();
    message.tokens = object.tokens ?? "";
    return message;
  },
  fromAmino(object: QueryTotalLiquidStakedResponseAmino): QueryTotalLiquidStakedResponse {
    return {
      tokens: object.tokens
    };
  },
  toAmino(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseAmino {
    const obj: any = {};
    obj.tokens = message.tokens;
    return obj;
  },
  fromAminoMsg(object: QueryTotalLiquidStakedResponseAminoMsg): QueryTotalLiquidStakedResponse {
    return QueryTotalLiquidStakedResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTotalLiquidStakedResponse",
      value: QueryTotalLiquidStakedResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTotalLiquidStakedResponseProtoMsg): QueryTotalLiquidStakedResponse {
    return QueryTotalLiquidStakedResponse.decode(message.value);
  },
  toProto(message: QueryTotalLiquidStakedResponse): Uint8Array {
    return QueryTotalLiquidStakedResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse",
      value: QueryTotalLiquidStakedResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareLockInfo(): QueryTokenizeShareLockInfo {
  return {
    address: ""
  };
}
export const QueryTokenizeShareLockInfo = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfo",
  aminoType: "cosmos-sdk/QueryTokenizeShareLockInfo",
  encode(message: QueryTokenizeShareLockInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareLockInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareLockInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareLockInfo {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: QueryTokenizeShareLockInfo): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareLockInfo>): QueryTokenizeShareLockInfo {
    const message = createBaseQueryTokenizeShareLockInfo();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareLockInfoAmino): QueryTokenizeShareLockInfo {
    return {
      address: object.address
    };
  },
  toAmino(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareLockInfoAminoMsg): QueryTokenizeShareLockInfo {
    return QueryTokenizeShareLockInfo.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareLockInfo",
      value: QueryTokenizeShareLockInfo.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareLockInfoProtoMsg): QueryTokenizeShareLockInfo {
    return QueryTokenizeShareLockInfo.decode(message.value);
  },
  toProto(message: QueryTokenizeShareLockInfo): Uint8Array {
    return QueryTokenizeShareLockInfo.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfo",
      value: QueryTokenizeShareLockInfo.encode(message).finish()
    };
  }
};
function createBaseQueryTokenizeShareLockInfoResponse(): QueryTokenizeShareLockInfoResponse {
  return {
    status: "",
    expiration_time: ""
  };
}
export const QueryTokenizeShareLockInfoResponse = {
  typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse",
  aminoType: "cosmos-sdk/QueryTokenizeShareLockInfoResponse",
  encode(message: QueryTokenizeShareLockInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    if (message.expiration_time !== "") {
      writer.uint32(18).string(message.expiration_time);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareLockInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        case 2:
          message.expiration_time = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTokenizeShareLockInfoResponse {
    return {
      status: isSet(object.status) ? String(object.status) : "",
      expiration_time: isSet(object.expiration_time) ? String(object.expiration_time) : ""
    };
  },
  toJSON(message: QueryTokenizeShareLockInfoResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    message.expiration_time !== undefined && (obj.expiration_time = message.expiration_time);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryTokenizeShareLockInfoResponse>): QueryTokenizeShareLockInfoResponse {
    const message = createBaseQueryTokenizeShareLockInfoResponse();
    message.status = object.status ?? "";
    message.expiration_time = object.expiration_time ?? "";
    return message;
  },
  fromAmino(object: QueryTokenizeShareLockInfoResponseAmino): QueryTokenizeShareLockInfoResponse {
    return {
      status: object.status,
      expiration_time: object.expiration_time
    };
  },
  toAmino(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseAmino {
    const obj: any = {};
    obj.status = message.status;
    obj.expiration_time = message.expiration_time;
    return obj;
  },
  fromAminoMsg(object: QueryTokenizeShareLockInfoResponseAminoMsg): QueryTokenizeShareLockInfoResponse {
    return QueryTokenizeShareLockInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryTokenizeShareLockInfoResponse",
      value: QueryTokenizeShareLockInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryTokenizeShareLockInfoResponseProtoMsg): QueryTokenizeShareLockInfoResponse {
    return QueryTokenizeShareLockInfoResponse.decode(message.value);
  },
  toProto(message: QueryTokenizeShareLockInfoResponse): Uint8Array {
    return QueryTokenizeShareLockInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse",
      value: QueryTokenizeShareLockInfoResponse.encode(message).finish()
    };
  }
};
function createBaseTokenizeShareRecord(): TokenizeShareRecord {
  return {
    id: Long.UZERO,
    owner: "",
    module_account: "",
    validator: ""
  };
}
export const TokenizeShareRecord = {
  typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecord",
  aminoType: "cosmos-sdk/TokenizeShareRecord",
  encode(message: TokenizeShareRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.module_account !== "") {
      writer.uint32(26).string(message.module_account);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeShareRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenizeShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.module_account = reader.string();
          break;
        case 4:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TokenizeShareRecord {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      owner: isSet(object.owner) ? String(object.owner) : "",
      module_account: isSet(object.module_account) ? String(object.module_account) : "",
      validator: isSet(object.validator) ? String(object.validator) : ""
    };
  },
  toJSON(message: TokenizeShareRecord): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.owner !== undefined && (obj.owner = message.owner);
    message.module_account !== undefined && (obj.module_account = message.module_account);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },
  fromPartial(object: DeepPartial<TokenizeShareRecord>): TokenizeShareRecord {
    const message = createBaseTokenizeShareRecord();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.owner = object.owner ?? "";
    message.module_account = object.module_account ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
  fromAmino(object: TokenizeShareRecordAmino): TokenizeShareRecord {
    return {
      id: Long.fromString(object.id),
      owner: object.owner,
      module_account: object.module_account,
      validator: object.validator
    };
  },
  toAmino(message: TokenizeShareRecord): TokenizeShareRecordAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.owner = message.owner;
    obj.module_account = message.module_account;
    obj.validator = message.validator;
    return obj;
  },
  fromAminoMsg(object: TokenizeShareRecordAminoMsg): TokenizeShareRecord {
    return TokenizeShareRecord.fromAmino(object.value);
  },
  toAminoMsg(message: TokenizeShareRecord): TokenizeShareRecordAminoMsg {
    return {
      type: "cosmos-sdk/TokenizeShareRecord",
      value: TokenizeShareRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: TokenizeShareRecordProtoMsg): TokenizeShareRecord {
    return TokenizeShareRecord.decode(message.value);
  },
  toProto(message: TokenizeShareRecord): Uint8Array {
    return TokenizeShareRecord.encode(message).finish();
  },
  toProtoMsg(message: TokenizeShareRecord): TokenizeShareRecordProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecord",
      value: TokenizeShareRecord.encode(message).finish()
    };
  }
};
function createBasePendingTokenizeShareAuthorizations(): PendingTokenizeShareAuthorizations {
  return {
    addresses: []
  };
}
export const PendingTokenizeShareAuthorizations = {
  typeUrl: "/cosmos.staking.v1beta1.PendingTokenizeShareAuthorizations",
  aminoType: "cosmos-sdk/PendingTokenizeShareAuthorizations",
  encode(message: PendingTokenizeShareAuthorizations, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PendingTokenizeShareAuthorizations {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePendingTokenizeShareAuthorizations();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PendingTokenizeShareAuthorizations {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: PendingTokenizeShareAuthorizations): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<PendingTokenizeShareAuthorizations>): PendingTokenizeShareAuthorizations {
    const message = createBasePendingTokenizeShareAuthorizations();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: PendingTokenizeShareAuthorizationsAmino): PendingTokenizeShareAuthorizations {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => e) : []
    };
  },
  toAmino(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromAminoMsg(object: PendingTokenizeShareAuthorizationsAminoMsg): PendingTokenizeShareAuthorizations {
    return PendingTokenizeShareAuthorizations.fromAmino(object.value);
  },
  toAminoMsg(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsAminoMsg {
    return {
      type: "cosmos-sdk/PendingTokenizeShareAuthorizations",
      value: PendingTokenizeShareAuthorizations.toAmino(message)
    };
  },
  fromProtoMsg(message: PendingTokenizeShareAuthorizationsProtoMsg): PendingTokenizeShareAuthorizations {
    return PendingTokenizeShareAuthorizations.decode(message.value);
  },
  toProto(message: PendingTokenizeShareAuthorizations): Uint8Array {
    return PendingTokenizeShareAuthorizations.encode(message).finish();
  },
  toProtoMsg(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.PendingTokenizeShareAuthorizations",
      value: PendingTokenizeShareAuthorizations.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondValidator(): MsgUnbondValidator {
  return {
    validator_address: ""
  };
}
export const MsgUnbondValidator = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
  aminoType: "cosmos-sdk/MsgUnbondValidator",
  encode(message: MsgUnbondValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_address !== "") {
      writer.uint32(10).string(message.validator_address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbondValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnbondValidator {
    return {
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
    };
  },
  toJSON(message: MsgUnbondValidator): unknown {
    const obj: any = {};
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUnbondValidator>): MsgUnbondValidator {
    const message = createBaseMsgUnbondValidator();
    message.validator_address = object.validator_address ?? "";
    return message;
  },
  fromAmino(object: MsgUnbondValidatorAmino): MsgUnbondValidator {
    return {
      validator_address: object.validator_address
    };
  },
  toAmino(message: MsgUnbondValidator): MsgUnbondValidatorAmino {
    const obj: any = {};
    obj.validator_address = message.validator_address;
    return obj;
  },
  fromAminoMsg(object: MsgUnbondValidatorAminoMsg): MsgUnbondValidator {
    return MsgUnbondValidator.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnbondValidator): MsgUnbondValidatorAminoMsg {
    return {
      type: "cosmos-sdk/MsgUnbondValidator",
      value: MsgUnbondValidator.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnbondValidatorProtoMsg): MsgUnbondValidator {
    return MsgUnbondValidator.decode(message.value);
  },
  toProto(message: MsgUnbondValidator): Uint8Array {
    return MsgUnbondValidator.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondValidator): MsgUnbondValidatorProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
      value: MsgUnbondValidator.encode(message).finish()
    };
  }
};
function createBaseMsgUnbondValidatorResponse(): MsgUnbondValidatorResponse {
  return {};
}
export const MsgUnbondValidatorResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse",
  aminoType: "cosmos-sdk/MsgUnbondValidatorResponse",
  encode(_: MsgUnbondValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbondValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnbondValidatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUnbondValidatorResponse {
    return {};
  },
  toJSON(_: MsgUnbondValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUnbondValidatorResponse>): MsgUnbondValidatorResponse {
    const message = createBaseMsgUnbondValidatorResponse();
    return message;
  },
  fromAmino(_: MsgUnbondValidatorResponseAmino): MsgUnbondValidatorResponse {
    return {};
  },
  toAmino(_: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnbondValidatorResponseAminoMsg): MsgUnbondValidatorResponse {
    return MsgUnbondValidatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUnbondValidatorResponse",
      value: MsgUnbondValidatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnbondValidatorResponseProtoMsg): MsgUnbondValidatorResponse {
    return MsgUnbondValidatorResponse.decode(message.value);
  },
  toProto(message: MsgUnbondValidatorResponse): Uint8Array {
    return MsgUnbondValidatorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse",
      value: MsgUnbondValidatorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTokenizeShares(): MsgTokenizeShares {
  return {
    delegator_address: "",
    validator_address: "",
    amount: Coin.fromPartial({}),
    tokenized_share_owner: ""
  };
}
export const MsgTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
  aminoType: "cosmos-sdk/MsgTokenizeShares",
  encode(message: MsgTokenizeShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenized_share_owner !== "") {
      writer.uint32(34).string(message.tokenized_share_owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenized_share_owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTokenizeShares {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      tokenized_share_owner: isSet(object.tokenized_share_owner) ? String(object.tokenized_share_owner) : ""
    };
  },
  toJSON(message: MsgTokenizeShares): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.tokenized_share_owner !== undefined && (obj.tokenized_share_owner = message.tokenized_share_owner);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTokenizeShares>): MsgTokenizeShares {
    const message = createBaseMsgTokenizeShares();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.tokenized_share_owner = object.tokenized_share_owner ?? "";
    return message;
  },
  fromAmino(object: MsgTokenizeSharesAmino): MsgTokenizeShares {
    return {
      delegator_address: object.delegator_address,
      validator_address: object.validator_address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      tokenized_share_owner: object.tokenized_share_owner
    };
  },
  toAmino(message: MsgTokenizeShares): MsgTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address;
    obj.validator_address = message.validator_address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.tokenized_share_owner = message.tokenized_share_owner;
    return obj;
  },
  fromAminoMsg(object: MsgTokenizeSharesAminoMsg): MsgTokenizeShares {
    return MsgTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTokenizeShares): MsgTokenizeSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgTokenizeShares",
      value: MsgTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTokenizeSharesProtoMsg): MsgTokenizeShares {
    return MsgTokenizeShares.decode(message.value);
  },
  toProto(message: MsgTokenizeShares): Uint8Array {
    return MsgTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgTokenizeShares): MsgTokenizeSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
      value: MsgTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgTokenizeSharesResponse(): MsgTokenizeSharesResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse",
  aminoType: "cosmos-sdk/MsgTokenizeSharesResponse",
  encode(message: MsgTokenizeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTokenizeSharesResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgTokenizeSharesResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTokenizeSharesResponse>): MsgTokenizeSharesResponse {
    const message = createBaseMsgTokenizeSharesResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgTokenizeSharesResponseAmino): MsgTokenizeSharesResponse {
    return {
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTokenizeSharesResponseAminoMsg): MsgTokenizeSharesResponse {
    return MsgTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTokenizeSharesResponse",
      value: MsgTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTokenizeSharesResponseProtoMsg): MsgTokenizeSharesResponse {
    return MsgTokenizeSharesResponse.decode(message.value);
  },
  toProto(message: MsgTokenizeSharesResponse): Uint8Array {
    return MsgTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse",
      value: MsgTokenizeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemTokensForShares(): MsgRedeemTokensForShares {
  return {
    delegator_address: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgRedeemTokensForShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
  aminoType: "cosmos-sdk/MsgRedeemTokensForShares",
  encode(message: MsgRedeemTokensForShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokensForShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedeemTokensForShares {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgRedeemTokensForShares): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRedeemTokensForShares>): MsgRedeemTokensForShares {
    const message = createBaseMsgRedeemTokensForShares();
    message.delegator_address = object.delegator_address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemTokensForSharesAmino): MsgRedeemTokensForShares {
    return {
      delegator_address: object.delegator_address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemTokensForSharesAminoMsg): MsgRedeemTokensForShares {
    return MsgRedeemTokensForShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgRedeemTokensForShares",
      value: MsgRedeemTokensForShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedeemTokensForSharesProtoMsg): MsgRedeemTokensForShares {
    return MsgRedeemTokensForShares.decode(message.value);
  },
  toProto(message: MsgRedeemTokensForShares): Uint8Array {
    return MsgRedeemTokensForShares.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
      value: MsgRedeemTokensForShares.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemTokensForSharesResponse(): MsgRedeemTokensForSharesResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgRedeemTokensForSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse",
  aminoType: "cosmos-sdk/MsgRedeemTokensForSharesResponse",
  encode(message: MsgRedeemTokensForSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokensForSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedeemTokensForSharesResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgRedeemTokensForSharesResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRedeemTokensForSharesResponse>): MsgRedeemTokensForSharesResponse {
    const message = createBaseMsgRedeemTokensForSharesResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemTokensForSharesResponseAmino): MsgRedeemTokensForSharesResponse {
    return {
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemTokensForSharesResponseAminoMsg): MsgRedeemTokensForSharesResponse {
    return MsgRedeemTokensForSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRedeemTokensForSharesResponse",
      value: MsgRedeemTokensForSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedeemTokensForSharesResponseProtoMsg): MsgRedeemTokensForSharesResponse {
    return MsgRedeemTokensForSharesResponse.decode(message.value);
  },
  toProto(message: MsgRedeemTokensForSharesResponse): Uint8Array {
    return MsgRedeemTokensForSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse",
      value: MsgRedeemTokensForSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgTransferTokenizeShareRecord(): MsgTransferTokenizeShareRecord {
  return {
    tokenize_share_record_id: Long.UZERO,
    sender: "",
    new_owner: ""
  };
}
export const MsgTransferTokenizeShareRecord = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
  aminoType: "cosmos-sdk/MsgTransferTokenizeShareRecord",
  encode(message: MsgTransferTokenizeShareRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.tokenize_share_record_id.isZero()) {
      writer.uint32(8).uint64(message.tokenize_share_record_id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.new_owner !== "") {
      writer.uint32(26).string(message.new_owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenizeShareRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenizeShareRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenize_share_record_id = (reader.uint64() as Long);
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.new_owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTransferTokenizeShareRecord {
    return {
      tokenize_share_record_id: isSet(object.tokenize_share_record_id) ? Long.fromValue(object.tokenize_share_record_id) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      new_owner: isSet(object.new_owner) ? String(object.new_owner) : ""
    };
  },
  toJSON(message: MsgTransferTokenizeShareRecord): unknown {
    const obj: any = {};
    message.tokenize_share_record_id !== undefined && (obj.tokenize_share_record_id = (message.tokenize_share_record_id || Long.UZERO).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    message.new_owner !== undefined && (obj.new_owner = message.new_owner);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTransferTokenizeShareRecord>): MsgTransferTokenizeShareRecord {
    const message = createBaseMsgTransferTokenizeShareRecord();
    message.tokenize_share_record_id = object.tokenize_share_record_id !== undefined && object.tokenize_share_record_id !== null ? Long.fromValue(object.tokenize_share_record_id) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.new_owner = object.new_owner ?? "";
    return message;
  },
  fromAmino(object: MsgTransferTokenizeShareRecordAmino): MsgTransferTokenizeShareRecord {
    return {
      tokenize_share_record_id: Long.fromString(object.tokenize_share_record_id),
      sender: object.sender,
      new_owner: object.new_owner
    };
  },
  toAmino(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordAmino {
    const obj: any = {};
    obj.tokenize_share_record_id = message.tokenize_share_record_id ? message.tokenize_share_record_id.toString() : undefined;
    obj.sender = message.sender;
    obj.new_owner = message.new_owner;
    return obj;
  },
  fromAminoMsg(object: MsgTransferTokenizeShareRecordAminoMsg): MsgTransferTokenizeShareRecord {
    return MsgTransferTokenizeShareRecord.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordAminoMsg {
    return {
      type: "cosmos-sdk/MsgTransferTokenizeShareRecord",
      value: MsgTransferTokenizeShareRecord.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferTokenizeShareRecordProtoMsg): MsgTransferTokenizeShareRecord {
    return MsgTransferTokenizeShareRecord.decode(message.value);
  },
  toProto(message: MsgTransferTokenizeShareRecord): Uint8Array {
    return MsgTransferTokenizeShareRecord.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
      value: MsgTransferTokenizeShareRecord.encode(message).finish()
    };
  }
};
function createBaseMsgTransferTokenizeShareRecordResponse(): MsgTransferTokenizeShareRecordResponse {
  return {};
}
export const MsgTransferTokenizeShareRecordResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse",
  aminoType: "cosmos-sdk/MsgTransferTokenizeShareRecordResponse",
  encode(_: MsgTransferTokenizeShareRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenizeShareRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgTransferTokenizeShareRecordResponse {
    return {};
  },
  toJSON(_: MsgTransferTokenizeShareRecordResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgTransferTokenizeShareRecordResponse>): MsgTransferTokenizeShareRecordResponse {
    const message = createBaseMsgTransferTokenizeShareRecordResponse();
    return message;
  },
  fromAmino(_: MsgTransferTokenizeShareRecordResponseAmino): MsgTransferTokenizeShareRecordResponse {
    return {};
  },
  toAmino(_: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferTokenizeShareRecordResponseAminoMsg): MsgTransferTokenizeShareRecordResponse {
    return MsgTransferTokenizeShareRecordResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTransferTokenizeShareRecordResponse",
      value: MsgTransferTokenizeShareRecordResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferTokenizeShareRecordResponseProtoMsg): MsgTransferTokenizeShareRecordResponse {
    return MsgTransferTokenizeShareRecordResponse.decode(message.value);
  },
  toProto(message: MsgTransferTokenizeShareRecordResponse): Uint8Array {
    return MsgTransferTokenizeShareRecordResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse",
      value: MsgTransferTokenizeShareRecordResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDisableTokenizeShares(): MsgDisableTokenizeShares {
  return {
    delegator_address: ""
  };
}
export const MsgDisableTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
  aminoType: "cosmos-sdk/MsgDisableTokenizeShares",
  encode(message: MsgDisableTokenizeShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeShares();
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
  fromJSON(object: any): MsgDisableTokenizeShares {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
    };
  },
  toJSON(message: MsgDisableTokenizeShares): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDisableTokenizeShares>): MsgDisableTokenizeShares {
    const message = createBaseMsgDisableTokenizeShares();
    message.delegator_address = object.delegator_address ?? "";
    return message;
  },
  fromAmino(object: MsgDisableTokenizeSharesAmino): MsgDisableTokenizeShares {
    return {
      delegator_address: object.delegator_address
    };
  },
  toAmino(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address;
    return obj;
  },
  fromAminoMsg(object: MsgDisableTokenizeSharesAminoMsg): MsgDisableTokenizeShares {
    return MsgDisableTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgDisableTokenizeShares",
      value: MsgDisableTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDisableTokenizeSharesProtoMsg): MsgDisableTokenizeShares {
    return MsgDisableTokenizeShares.decode(message.value);
  },
  toProto(message: MsgDisableTokenizeShares): Uint8Array {
    return MsgDisableTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
      value: MsgDisableTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgDisableTokenizeSharesResponse(): MsgDisableTokenizeSharesResponse {
  return {};
}
export const MsgDisableTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse",
  aminoType: "cosmos-sdk/MsgDisableTokenizeSharesResponse",
  encode(_: MsgDisableTokenizeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDisableTokenizeSharesResponse {
    return {};
  },
  toJSON(_: MsgDisableTokenizeSharesResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDisableTokenizeSharesResponse>): MsgDisableTokenizeSharesResponse {
    const message = createBaseMsgDisableTokenizeSharesResponse();
    return message;
  },
  fromAmino(_: MsgDisableTokenizeSharesResponseAmino): MsgDisableTokenizeSharesResponse {
    return {};
  },
  toAmino(_: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDisableTokenizeSharesResponseAminoMsg): MsgDisableTokenizeSharesResponse {
    return MsgDisableTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgDisableTokenizeSharesResponse",
      value: MsgDisableTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDisableTokenizeSharesResponseProtoMsg): MsgDisableTokenizeSharesResponse {
    return MsgDisableTokenizeSharesResponse.decode(message.value);
  },
  toProto(message: MsgDisableTokenizeSharesResponse): Uint8Array {
    return MsgDisableTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse",
      value: MsgDisableTokenizeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEnableTokenizeShares(): MsgEnableTokenizeShares {
  return {
    delegator_address: ""
  };
}
export const MsgEnableTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
  aminoType: "cosmos-sdk/MsgEnableTokenizeShares",
  encode(message: MsgEnableTokenizeShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeShares();
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
  fromJSON(object: any): MsgEnableTokenizeShares {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
    };
  },
  toJSON(message: MsgEnableTokenizeShares): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgEnableTokenizeShares>): MsgEnableTokenizeShares {
    const message = createBaseMsgEnableTokenizeShares();
    message.delegator_address = object.delegator_address ?? "";
    return message;
  },
  fromAmino(object: MsgEnableTokenizeSharesAmino): MsgEnableTokenizeShares {
    return {
      delegator_address: object.delegator_address
    };
  },
  toAmino(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address;
    return obj;
  },
  fromAminoMsg(object: MsgEnableTokenizeSharesAminoMsg): MsgEnableTokenizeShares {
    return MsgEnableTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgEnableTokenizeShares",
      value: MsgEnableTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEnableTokenizeSharesProtoMsg): MsgEnableTokenizeShares {
    return MsgEnableTokenizeShares.decode(message.value);
  },
  toProto(message: MsgEnableTokenizeShares): Uint8Array {
    return MsgEnableTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
      value: MsgEnableTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgEnableTokenizeSharesResponse(): MsgEnableTokenizeSharesResponse {
  return {
    completion_time: new Date()
  };
}
export const MsgEnableTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
  aminoType: "cosmos-sdk/MsgEnableTokenizeSharesResponse",
  encode(message: MsgEnableTokenizeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completion_time !== undefined) {
      Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEnableTokenizeSharesResponse {
    return {
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined
    };
  },
  toJSON(message: MsgEnableTokenizeSharesResponse): unknown {
    const obj: any = {};
    message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgEnableTokenizeSharesResponse>): MsgEnableTokenizeSharesResponse {
    const message = createBaseMsgEnableTokenizeSharesResponse();
    message.completion_time = object.completion_time ?? undefined;
    return message;
  },
  fromAmino(object: MsgEnableTokenizeSharesResponseAmino): MsgEnableTokenizeSharesResponse {
    return {
      completion_time: object.completion_time
    };
  },
  toAmino(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseAmino {
    const obj: any = {};
    obj.completion_time = message.completion_time;
    return obj;
  },
  fromAminoMsg(object: MsgEnableTokenizeSharesResponseAminoMsg): MsgEnableTokenizeSharesResponse {
    return MsgEnableTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgEnableTokenizeSharesResponse",
      value: MsgEnableTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEnableTokenizeSharesResponseProtoMsg): MsgEnableTokenizeSharesResponse {
    return MsgEnableTokenizeSharesResponse.decode(message.value);
  },
  toProto(message: MsgEnableTokenizeSharesResponse): Uint8Array {
    return MsgEnableTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
      value: MsgEnableTokenizeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgValidatorBond(): MsgValidatorBond {
  return {
    delegator_address: "",
    validator_address: ""
  };
}
export const MsgValidatorBond = {
  typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
  aminoType: "cosmos-sdk/MsgValidatorBond",
  encode(message: MsgValidatorBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValidatorBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValidatorBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgValidatorBond {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
    };
  },
  toJSON(message: MsgValidatorBond): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgValidatorBond>): MsgValidatorBond {
    const message = createBaseMsgValidatorBond();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    return message;
  },
  fromAmino(object: MsgValidatorBondAmino): MsgValidatorBond {
    return {
      delegator_address: object.delegator_address,
      validator_address: object.validator_address
    };
  },
  toAmino(message: MsgValidatorBond): MsgValidatorBondAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address;
    obj.validator_address = message.validator_address;
    return obj;
  },
  fromAminoMsg(object: MsgValidatorBondAminoMsg): MsgValidatorBond {
    return MsgValidatorBond.fromAmino(object.value);
  },
  toAminoMsg(message: MsgValidatorBond): MsgValidatorBondAminoMsg {
    return {
      type: "cosmos-sdk/MsgValidatorBond",
      value: MsgValidatorBond.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgValidatorBondProtoMsg): MsgValidatorBond {
    return MsgValidatorBond.decode(message.value);
  },
  toProto(message: MsgValidatorBond): Uint8Array {
    return MsgValidatorBond.encode(message).finish();
  },
  toProtoMsg(message: MsgValidatorBond): MsgValidatorBondProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
      value: MsgValidatorBond.encode(message).finish()
    };
  }
};
function createBaseMsgValidatorBondResponse(): MsgValidatorBondResponse {
  return {};
}
export const MsgValidatorBondResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse",
  aminoType: "cosmos-sdk/MsgValidatorBondResponse",
  encode(_: MsgValidatorBondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValidatorBondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValidatorBondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgValidatorBondResponse {
    return {};
  },
  toJSON(_: MsgValidatorBondResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgValidatorBondResponse>): MsgValidatorBondResponse {
    const message = createBaseMsgValidatorBondResponse();
    return message;
  },
  fromAmino(_: MsgValidatorBondResponseAmino): MsgValidatorBondResponse {
    return {};
  },
  toAmino(_: MsgValidatorBondResponse): MsgValidatorBondResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgValidatorBondResponseAminoMsg): MsgValidatorBondResponse {
    return MsgValidatorBondResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgValidatorBondResponse): MsgValidatorBondResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgValidatorBondResponse",
      value: MsgValidatorBondResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgValidatorBondResponseProtoMsg): MsgValidatorBondResponse {
    return MsgValidatorBondResponse.decode(message.value);
  },
  toProto(message: MsgValidatorBondResponse): Uint8Array {
    return MsgValidatorBondResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgValidatorBondResponse): MsgValidatorBondResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse",
      value: MsgValidatorBondResponse.encode(message).finish()
    };
  }
};