/// <reference types="long" />
import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * TokenizeShareLockStatus indicates whether the address is able to tokenize
 * shares
 */
export declare enum TokenizeShareLockStatus {
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
    UNRECOGNIZED = -1
}
export declare const TokenizeShareLockStatusSDKType: typeof TokenizeShareLockStatus;
export declare const TokenizeShareLockStatusAmino: typeof TokenizeShareLockStatus;
export declare function tokenizeShareLockStatusFromJSON(object: any): TokenizeShareLockStatus;
export declare function tokenizeShareLockStatusToJSON(object: TokenizeShareLockStatus): string;
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
export interface MsgWithdrawTokenizeShareRecordRewardResponse {
}
export interface MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg {
    type_url: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse";
    value: Uint8Array;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponseAmino {
}
export interface MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordRewardResponse";
    value: MsgWithdrawTokenizeShareRecordRewardResponseAmino;
}
/**
 * MsgWithdrawTokenizeShareRecordReward defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawTokenizeShareRecordRewardResponseSDKType {
}
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
export interface MsgWithdrawAllTokenizeShareRecordRewardResponse {
}
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg {
    type_url: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse";
    value: Uint8Array;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseAmino {
}
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg {
    type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordRewardResponse";
    value: MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
}
/**
 * MsgWithdrawAllTokenizeShareRecordRewardResponse defines the
 * Msg/WithdrawTokenizeShareRecordReward response type.
 */
export interface MsgWithdrawAllTokenizeShareRecordRewardResponseSDKType {
}
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
export interface QueryLastTokenizeShareRecordIdRequest {
}
export interface QueryLastTokenizeShareRecordIdRequestProtoMsg {
    type_url: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest";
    value: Uint8Array;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestAmino {
}
export interface QueryLastTokenizeShareRecordIdRequestAminoMsg {
    type: "cosmos-sdk/QueryLastTokenizeShareRecordIdRequest";
    value: QueryLastTokenizeShareRecordIdRequestAmino;
}
/**
 * QueryLastTokenizeShareRecordIdRequest is request type for the
 * Query/QueryLastTokenizeShareRecordId RPC method.
 */
export interface QueryLastTokenizeShareRecordIdRequestSDKType {
}
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
export interface QueryTotalTokenizeSharedAssetsRequest {
}
export interface QueryTotalTokenizeSharedAssetsRequestProtoMsg {
    type_url: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest";
    value: Uint8Array;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestAmino {
}
export interface QueryTotalTokenizeSharedAssetsRequestAminoMsg {
    type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsRequest";
    value: QueryTotalTokenizeSharedAssetsRequestAmino;
}
/**
 * QueryTotalTokenizeSharedAssetsRequest is request type for the
 * Query/QueryTotalTokenizeSharedAssets RPC method.
 */
export interface QueryTotalTokenizeSharedAssetsRequestSDKType {
}
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
export interface QueryTotalLiquidStaked {
}
export interface QueryTotalLiquidStakedProtoMsg {
    type_url: "/cosmos.staking.v1beta1.QueryTotalLiquidStaked";
    value: Uint8Array;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedAmino {
}
export interface QueryTotalLiquidStakedAminoMsg {
    type: "cosmos-sdk/QueryTotalLiquidStaked";
    value: QueryTotalLiquidStakedAmino;
}
/**
 * QueryTotalLiquidStakedRequest is request type for the
 * Query/QueryQueryTotalLiquidStaked RPC method.
 */
export interface QueryTotalLiquidStakedSDKType {
}
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
export interface MsgUnbondValidatorResponse {
}
export interface MsgUnbondValidatorResponseProtoMsg {
    type_url: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse";
    value: Uint8Array;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponseAmino {
}
export interface MsgUnbondValidatorResponseAminoMsg {
    type: "cosmos-sdk/MsgUnbondValidatorResponse";
    value: MsgUnbondValidatorResponseAmino;
}
/** MsgUnbondValidatorResponse defines the Msg/UnbondValidator response type. */
export interface MsgUnbondValidatorResponseSDKType {
}
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
export interface MsgTransferTokenizeShareRecordResponse {
}
export interface MsgTransferTokenizeShareRecordResponseProtoMsg {
    type_url: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse";
    value: Uint8Array;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponseAmino {
}
export interface MsgTransferTokenizeShareRecordResponseAminoMsg {
    type: "cosmos-sdk/MsgTransferTokenizeShareRecordResponse";
    value: MsgTransferTokenizeShareRecordResponseAmino;
}
/**
 * MsgTransferTokenizeShareRecordResponse defines the
 * Msg/MsgTransferTokenizeShareRecord response type.
 */
export interface MsgTransferTokenizeShareRecordResponseSDKType {
}
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
export interface MsgDisableTokenizeSharesResponse {
}
export interface MsgDisableTokenizeSharesResponseProtoMsg {
    type_url: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse";
    value: Uint8Array;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponseAmino {
}
export interface MsgDisableTokenizeSharesResponseAminoMsg {
    type: "cosmos-sdk/MsgDisableTokenizeSharesResponse";
    value: MsgDisableTokenizeSharesResponseAmino;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponseSDKType {
}
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
export interface MsgValidatorBondResponse {
}
export interface MsgValidatorBondResponseProtoMsg {
    type_url: "/cosmos.staking.v1beta1.MsgValidatorBondResponse";
    value: Uint8Array;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponseAmino {
}
export interface MsgValidatorBondResponseAminoMsg {
    type: "cosmos-sdk/MsgValidatorBondResponse";
    value: MsgValidatorBondResponseAmino;
}
/** MsgValidatorBondResponse defines the Msg/ValidatorBond response type. */
export interface MsgValidatorBondResponseSDKType {
}
export declare const TokenizeShareRecordReward: {
    typeUrl: string;
    aminoType: string;
    encode(message: TokenizeShareRecordReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeShareRecordReward;
    fromJSON(object: any): TokenizeShareRecordReward;
    toJSON(message: TokenizeShareRecordReward): unknown;
    fromPartial(object: DeepPartial<TokenizeShareRecordReward>): TokenizeShareRecordReward;
    fromAmino(object: TokenizeShareRecordRewardAmino): TokenizeShareRecordReward;
    toAmino(message: TokenizeShareRecordReward): TokenizeShareRecordRewardAmino;
    fromAminoMsg(object: TokenizeShareRecordRewardAminoMsg): TokenizeShareRecordReward;
    toAminoMsg(message: TokenizeShareRecordReward): TokenizeShareRecordRewardAminoMsg;
    fromProtoMsg(message: TokenizeShareRecordRewardProtoMsg): TokenizeShareRecordReward;
    toProto(message: TokenizeShareRecordReward): Uint8Array;
    toProtoMsg(message: TokenizeShareRecordReward): TokenizeShareRecordRewardProtoMsg;
};
export declare const QueryTokenizeShareRecordRewardRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTokenizeShareRecordRewardRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordRewardRequest;
    fromJSON(object: any): QueryTokenizeShareRecordRewardRequest;
    toJSON(message: QueryTokenizeShareRecordRewardRequest): unknown;
    fromPartial(object: DeepPartial<QueryTokenizeShareRecordRewardRequest>): QueryTokenizeShareRecordRewardRequest;
    fromAmino(object: QueryTokenizeShareRecordRewardRequestAmino): QueryTokenizeShareRecordRewardRequest;
    toAmino(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordRewardRequestAminoMsg): QueryTokenizeShareRecordRewardRequest;
    toAminoMsg(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordRewardRequestProtoMsg): QueryTokenizeShareRecordRewardRequest;
    toProto(message: QueryTokenizeShareRecordRewardRequest): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordRewardRequest): QueryTokenizeShareRecordRewardRequestProtoMsg;
};
export declare const QueryTokenizeShareRecordRewardResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTokenizeShareRecordRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordRewardResponse;
    fromJSON(object: any): QueryTokenizeShareRecordRewardResponse;
    toJSON(message: QueryTokenizeShareRecordRewardResponse): unknown;
    fromPartial(object: DeepPartial<QueryTokenizeShareRecordRewardResponse>): QueryTokenizeShareRecordRewardResponse;
    fromAmino(object: QueryTokenizeShareRecordRewardResponseAmino): QueryTokenizeShareRecordRewardResponse;
    toAmino(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordRewardResponseAminoMsg): QueryTokenizeShareRecordRewardResponse;
    toAminoMsg(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordRewardResponseProtoMsg): QueryTokenizeShareRecordRewardResponse;
    toProto(message: QueryTokenizeShareRecordRewardResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordRewardResponse): QueryTokenizeShareRecordRewardResponseProtoMsg;
};
export declare const MsgWithdrawTokenizeShareRecordReward: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgWithdrawTokenizeShareRecordReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTokenizeShareRecordReward;
    fromJSON(object: any): MsgWithdrawTokenizeShareRecordReward;
    toJSON(message: MsgWithdrawTokenizeShareRecordReward): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawTokenizeShareRecordReward>): MsgWithdrawTokenizeShareRecordReward;
    fromAmino(object: MsgWithdrawTokenizeShareRecordRewardAmino): MsgWithdrawTokenizeShareRecordReward;
    toAmino(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardAmino;
    fromAminoMsg(object: MsgWithdrawTokenizeShareRecordRewardAminoMsg): MsgWithdrawTokenizeShareRecordReward;
    toAminoMsg(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardAminoMsg;
    fromProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardProtoMsg): MsgWithdrawTokenizeShareRecordReward;
    toProto(message: MsgWithdrawTokenizeShareRecordReward): Uint8Array;
    toProtoMsg(message: MsgWithdrawTokenizeShareRecordReward): MsgWithdrawTokenizeShareRecordRewardProtoMsg;
};
export declare const MsgWithdrawTokenizeShareRecordRewardResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgWithdrawTokenizeShareRecordRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawTokenizeShareRecordRewardResponse;
    fromJSON(_: any): MsgWithdrawTokenizeShareRecordRewardResponse;
    toJSON(_: MsgWithdrawTokenizeShareRecordRewardResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawTokenizeShareRecordRewardResponse>): MsgWithdrawTokenizeShareRecordRewardResponse;
    fromAmino(_: MsgWithdrawTokenizeShareRecordRewardResponseAmino): MsgWithdrawTokenizeShareRecordRewardResponse;
    toAmino(_: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseAmino;
    fromAminoMsg(object: MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg): MsgWithdrawTokenizeShareRecordRewardResponse;
    toAminoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg): MsgWithdrawTokenizeShareRecordRewardResponse;
    toProto(message: MsgWithdrawTokenizeShareRecordRewardResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawTokenizeShareRecordRewardResponse): MsgWithdrawTokenizeShareRecordRewardResponseProtoMsg;
};
export declare const MsgWithdrawAllTokenizeShareRecordReward: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgWithdrawAllTokenizeShareRecordReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAllTokenizeShareRecordReward;
    fromJSON(object: any): MsgWithdrawAllTokenizeShareRecordReward;
    toJSON(message: MsgWithdrawAllTokenizeShareRecordReward): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawAllTokenizeShareRecordReward>): MsgWithdrawAllTokenizeShareRecordReward;
    fromAmino(object: MsgWithdrawAllTokenizeShareRecordRewardAmino): MsgWithdrawAllTokenizeShareRecordReward;
    toAmino(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardAmino;
    fromAminoMsg(object: MsgWithdrawAllTokenizeShareRecordRewardAminoMsg): MsgWithdrawAllTokenizeShareRecordReward;
    toAminoMsg(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardAminoMsg;
    fromProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardProtoMsg): MsgWithdrawAllTokenizeShareRecordReward;
    toProto(message: MsgWithdrawAllTokenizeShareRecordReward): Uint8Array;
    toProtoMsg(message: MsgWithdrawAllTokenizeShareRecordReward): MsgWithdrawAllTokenizeShareRecordRewardProtoMsg;
};
export declare const MsgWithdrawAllTokenizeShareRecordRewardResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgWithdrawAllTokenizeShareRecordRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    fromJSON(_: any): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    toJSON(_: MsgWithdrawAllTokenizeShareRecordRewardResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawAllTokenizeShareRecordRewardResponse>): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    fromAmino(_: MsgWithdrawAllTokenizeShareRecordRewardResponseAmino): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    toAmino(_: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseAmino;
    fromAminoMsg(object: MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    toAminoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseAminoMsg;
    fromProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg): MsgWithdrawAllTokenizeShareRecordRewardResponse;
    toProto(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): Uint8Array;
    toProtoMsg(message: MsgWithdrawAllTokenizeShareRecordRewardResponse): MsgWithdrawAllTokenizeShareRecordRewardResponseProtoMsg;
};
export declare const QueryTokenizeShareRecordByIdRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTokenizeShareRecordByIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordByIdRequest;
    fromJSON(object: any): QueryTokenizeShareRecordByIdRequest;
    toJSON(message: QueryTokenizeShareRecordByIdRequest): unknown;
    fromPartial(object: DeepPartial<QueryTokenizeShareRecordByIdRequest>): QueryTokenizeShareRecordByIdRequest;
    fromAmino(object: QueryTokenizeShareRecordByIdRequestAmino): QueryTokenizeShareRecordByIdRequest;
    toAmino(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordByIdRequestAminoMsg): QueryTokenizeShareRecordByIdRequest;
    toAminoMsg(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordByIdRequestProtoMsg): QueryTokenizeShareRecordByIdRequest;
    toProto(message: QueryTokenizeShareRecordByIdRequest): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordByIdRequest): QueryTokenizeShareRecordByIdRequestProtoMsg;
};
export declare const QueryTokenizeShareRecordByIdResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTokenizeShareRecordByIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordByIdResponse;
    fromJSON(object: any): QueryTokenizeShareRecordByIdResponse;
    toJSON(message: QueryTokenizeShareRecordByIdResponse): unknown;
    fromPartial(object: DeepPartial<QueryTokenizeShareRecordByIdResponse>): QueryTokenizeShareRecordByIdResponse;
    fromAmino(object: QueryTokenizeShareRecordByIdResponseAmino): QueryTokenizeShareRecordByIdResponse;
    toAmino(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordByIdResponseAminoMsg): QueryTokenizeShareRecordByIdResponse;
    toAminoMsg(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordByIdResponseProtoMsg): QueryTokenizeShareRecordByIdResponse;
    toProto(message: QueryTokenizeShareRecordByIdResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordByIdResponse): QueryTokenizeShareRecordByIdResponseProtoMsg;
};
export declare const QueryTokenizeShareRecordByDenomRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTokenizeShareRecordByDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordByDenomRequest;
    fromJSON(object: any): QueryTokenizeShareRecordByDenomRequest;
    toJSON(message: QueryTokenizeShareRecordByDenomRequest): unknown;
    fromPartial(object: DeepPartial<QueryTokenizeShareRecordByDenomRequest>): QueryTokenizeShareRecordByDenomRequest;
    fromAmino(object: QueryTokenizeShareRecordByDenomRequestAmino): QueryTokenizeShareRecordByDenomRequest;
    toAmino(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordByDenomRequestAminoMsg): QueryTokenizeShareRecordByDenomRequest;
    toAminoMsg(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordByDenomRequestProtoMsg): QueryTokenizeShareRecordByDenomRequest;
    toProto(message: QueryTokenizeShareRecordByDenomRequest): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordByDenomRequest): QueryTokenizeShareRecordByDenomRequestProtoMsg;
};
export declare const QueryTokenizeShareRecordByDenomResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTokenizeShareRecordByDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordByDenomResponse;
    fromJSON(object: any): QueryTokenizeShareRecordByDenomResponse;
    toJSON(message: QueryTokenizeShareRecordByDenomResponse): unknown;
    fromPartial(object: DeepPartial<QueryTokenizeShareRecordByDenomResponse>): QueryTokenizeShareRecordByDenomResponse;
    fromAmino(object: QueryTokenizeShareRecordByDenomResponseAmino): QueryTokenizeShareRecordByDenomResponse;
    toAmino(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordByDenomResponseAminoMsg): QueryTokenizeShareRecordByDenomResponse;
    toAminoMsg(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordByDenomResponseProtoMsg): QueryTokenizeShareRecordByDenomResponse;
    toProto(message: QueryTokenizeShareRecordByDenomResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordByDenomResponse): QueryTokenizeShareRecordByDenomResponseProtoMsg;
};
export declare const QueryTokenizeShareRecordsOwnedRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTokenizeShareRecordsOwnedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordsOwnedRequest;
    fromJSON(object: any): QueryTokenizeShareRecordsOwnedRequest;
    toJSON(message: QueryTokenizeShareRecordsOwnedRequest): unknown;
    fromPartial(object: DeepPartial<QueryTokenizeShareRecordsOwnedRequest>): QueryTokenizeShareRecordsOwnedRequest;
    fromAmino(object: QueryTokenizeShareRecordsOwnedRequestAmino): QueryTokenizeShareRecordsOwnedRequest;
    toAmino(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordsOwnedRequestAminoMsg): QueryTokenizeShareRecordsOwnedRequest;
    toAminoMsg(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordsOwnedRequestProtoMsg): QueryTokenizeShareRecordsOwnedRequest;
    toProto(message: QueryTokenizeShareRecordsOwnedRequest): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordsOwnedRequest): QueryTokenizeShareRecordsOwnedRequestProtoMsg;
};
export declare const QueryTokenizeShareRecordsOwnedResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTokenizeShareRecordsOwnedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareRecordsOwnedResponse;
    fromJSON(object: any): QueryTokenizeShareRecordsOwnedResponse;
    toJSON(message: QueryTokenizeShareRecordsOwnedResponse): unknown;
    fromPartial(object: DeepPartial<QueryTokenizeShareRecordsOwnedResponse>): QueryTokenizeShareRecordsOwnedResponse;
    fromAmino(object: QueryTokenizeShareRecordsOwnedResponseAmino): QueryTokenizeShareRecordsOwnedResponse;
    toAmino(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareRecordsOwnedResponseAminoMsg): QueryTokenizeShareRecordsOwnedResponse;
    toAminoMsg(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareRecordsOwnedResponseProtoMsg): QueryTokenizeShareRecordsOwnedResponse;
    toProto(message: QueryTokenizeShareRecordsOwnedResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareRecordsOwnedResponse): QueryTokenizeShareRecordsOwnedResponseProtoMsg;
};
export declare const QueryAllTokenizeShareRecordsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAllTokenizeShareRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenizeShareRecordsRequest;
    fromJSON(object: any): QueryAllTokenizeShareRecordsRequest;
    toJSON(message: QueryAllTokenizeShareRecordsRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTokenizeShareRecordsRequest>): QueryAllTokenizeShareRecordsRequest;
    fromAmino(object: QueryAllTokenizeShareRecordsRequestAmino): QueryAllTokenizeShareRecordsRequest;
    toAmino(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestAmino;
    fromAminoMsg(object: QueryAllTokenizeShareRecordsRequestAminoMsg): QueryAllTokenizeShareRecordsRequest;
    toAminoMsg(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestAminoMsg;
    fromProtoMsg(message: QueryAllTokenizeShareRecordsRequestProtoMsg): QueryAllTokenizeShareRecordsRequest;
    toProto(message: QueryAllTokenizeShareRecordsRequest): Uint8Array;
    toProtoMsg(message: QueryAllTokenizeShareRecordsRequest): QueryAllTokenizeShareRecordsRequestProtoMsg;
};
export declare const QueryAllTokenizeShareRecordsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryAllTokenizeShareRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllTokenizeShareRecordsResponse;
    fromJSON(object: any): QueryAllTokenizeShareRecordsResponse;
    toJSON(message: QueryAllTokenizeShareRecordsResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTokenizeShareRecordsResponse>): QueryAllTokenizeShareRecordsResponse;
    fromAmino(object: QueryAllTokenizeShareRecordsResponseAmino): QueryAllTokenizeShareRecordsResponse;
    toAmino(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseAmino;
    fromAminoMsg(object: QueryAllTokenizeShareRecordsResponseAminoMsg): QueryAllTokenizeShareRecordsResponse;
    toAminoMsg(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseAminoMsg;
    fromProtoMsg(message: QueryAllTokenizeShareRecordsResponseProtoMsg): QueryAllTokenizeShareRecordsResponse;
    toProto(message: QueryAllTokenizeShareRecordsResponse): Uint8Array;
    toProtoMsg(message: QueryAllTokenizeShareRecordsResponse): QueryAllTokenizeShareRecordsResponseProtoMsg;
};
export declare const QueryLastTokenizeShareRecordIdRequest: {
    typeUrl: string;
    aminoType: string;
    encode(_: QueryLastTokenizeShareRecordIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastTokenizeShareRecordIdRequest;
    fromJSON(_: any): QueryLastTokenizeShareRecordIdRequest;
    toJSON(_: QueryLastTokenizeShareRecordIdRequest): unknown;
    fromPartial(_: DeepPartial<QueryLastTokenizeShareRecordIdRequest>): QueryLastTokenizeShareRecordIdRequest;
    fromAmino(_: QueryLastTokenizeShareRecordIdRequestAmino): QueryLastTokenizeShareRecordIdRequest;
    toAmino(_: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestAmino;
    fromAminoMsg(object: QueryLastTokenizeShareRecordIdRequestAminoMsg): QueryLastTokenizeShareRecordIdRequest;
    toAminoMsg(message: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestAminoMsg;
    fromProtoMsg(message: QueryLastTokenizeShareRecordIdRequestProtoMsg): QueryLastTokenizeShareRecordIdRequest;
    toProto(message: QueryLastTokenizeShareRecordIdRequest): Uint8Array;
    toProtoMsg(message: QueryLastTokenizeShareRecordIdRequest): QueryLastTokenizeShareRecordIdRequestProtoMsg;
};
export declare const QueryLastTokenizeShareRecordIdResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryLastTokenizeShareRecordIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastTokenizeShareRecordIdResponse;
    fromJSON(object: any): QueryLastTokenizeShareRecordIdResponse;
    toJSON(message: QueryLastTokenizeShareRecordIdResponse): unknown;
    fromPartial(object: DeepPartial<QueryLastTokenizeShareRecordIdResponse>): QueryLastTokenizeShareRecordIdResponse;
    fromAmino(object: QueryLastTokenizeShareRecordIdResponseAmino): QueryLastTokenizeShareRecordIdResponse;
    toAmino(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseAmino;
    fromAminoMsg(object: QueryLastTokenizeShareRecordIdResponseAminoMsg): QueryLastTokenizeShareRecordIdResponse;
    toAminoMsg(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseAminoMsg;
    fromProtoMsg(message: QueryLastTokenizeShareRecordIdResponseProtoMsg): QueryLastTokenizeShareRecordIdResponse;
    toProto(message: QueryLastTokenizeShareRecordIdResponse): Uint8Array;
    toProtoMsg(message: QueryLastTokenizeShareRecordIdResponse): QueryLastTokenizeShareRecordIdResponseProtoMsg;
};
export declare const QueryTotalTokenizeSharedAssetsRequest: {
    typeUrl: string;
    aminoType: string;
    encode(_: QueryTotalTokenizeSharedAssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTokenizeSharedAssetsRequest;
    fromJSON(_: any): QueryTotalTokenizeSharedAssetsRequest;
    toJSON(_: QueryTotalTokenizeSharedAssetsRequest): unknown;
    fromPartial(_: DeepPartial<QueryTotalTokenizeSharedAssetsRequest>): QueryTotalTokenizeSharedAssetsRequest;
    fromAmino(_: QueryTotalTokenizeSharedAssetsRequestAmino): QueryTotalTokenizeSharedAssetsRequest;
    toAmino(_: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestAmino;
    fromAminoMsg(object: QueryTotalTokenizeSharedAssetsRequestAminoMsg): QueryTotalTokenizeSharedAssetsRequest;
    toAminoMsg(message: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestAminoMsg;
    fromProtoMsg(message: QueryTotalTokenizeSharedAssetsRequestProtoMsg): QueryTotalTokenizeSharedAssetsRequest;
    toProto(message: QueryTotalTokenizeSharedAssetsRequest): Uint8Array;
    toProtoMsg(message: QueryTotalTokenizeSharedAssetsRequest): QueryTotalTokenizeSharedAssetsRequestProtoMsg;
};
export declare const QueryTotalTokenizeSharedAssetsResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalTokenizeSharedAssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalTokenizeSharedAssetsResponse;
    fromJSON(object: any): QueryTotalTokenizeSharedAssetsResponse;
    toJSON(message: QueryTotalTokenizeSharedAssetsResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalTokenizeSharedAssetsResponse>): QueryTotalTokenizeSharedAssetsResponse;
    fromAmino(object: QueryTotalTokenizeSharedAssetsResponseAmino): QueryTotalTokenizeSharedAssetsResponse;
    toAmino(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseAmino;
    fromAminoMsg(object: QueryTotalTokenizeSharedAssetsResponseAminoMsg): QueryTotalTokenizeSharedAssetsResponse;
    toAminoMsg(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseAminoMsg;
    fromProtoMsg(message: QueryTotalTokenizeSharedAssetsResponseProtoMsg): QueryTotalTokenizeSharedAssetsResponse;
    toProto(message: QueryTotalTokenizeSharedAssetsResponse): Uint8Array;
    toProtoMsg(message: QueryTotalTokenizeSharedAssetsResponse): QueryTotalTokenizeSharedAssetsResponseProtoMsg;
};
export declare const QueryTotalLiquidStaked: {
    typeUrl: string;
    aminoType: string;
    encode(_: QueryTotalLiquidStaked, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidStaked;
    fromJSON(_: any): QueryTotalLiquidStaked;
    toJSON(_: QueryTotalLiquidStaked): unknown;
    fromPartial(_: DeepPartial<QueryTotalLiquidStaked>): QueryTotalLiquidStaked;
    fromAmino(_: QueryTotalLiquidStakedAmino): QueryTotalLiquidStaked;
    toAmino(_: QueryTotalLiquidStaked): QueryTotalLiquidStakedAmino;
    fromAminoMsg(object: QueryTotalLiquidStakedAminoMsg): QueryTotalLiquidStaked;
    toAminoMsg(message: QueryTotalLiquidStaked): QueryTotalLiquidStakedAminoMsg;
    fromProtoMsg(message: QueryTotalLiquidStakedProtoMsg): QueryTotalLiquidStaked;
    toProto(message: QueryTotalLiquidStaked): Uint8Array;
    toProtoMsg(message: QueryTotalLiquidStaked): QueryTotalLiquidStakedProtoMsg;
};
export declare const QueryTotalLiquidStakedResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTotalLiquidStakedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidStakedResponse;
    fromJSON(object: any): QueryTotalLiquidStakedResponse;
    toJSON(message: QueryTotalLiquidStakedResponse): unknown;
    fromPartial(object: DeepPartial<QueryTotalLiquidStakedResponse>): QueryTotalLiquidStakedResponse;
    fromAmino(object: QueryTotalLiquidStakedResponseAmino): QueryTotalLiquidStakedResponse;
    toAmino(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseAmino;
    fromAminoMsg(object: QueryTotalLiquidStakedResponseAminoMsg): QueryTotalLiquidStakedResponse;
    toAminoMsg(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseAminoMsg;
    fromProtoMsg(message: QueryTotalLiquidStakedResponseProtoMsg): QueryTotalLiquidStakedResponse;
    toProto(message: QueryTotalLiquidStakedResponse): Uint8Array;
    toProtoMsg(message: QueryTotalLiquidStakedResponse): QueryTotalLiquidStakedResponseProtoMsg;
};
export declare const QueryTokenizeShareLockInfo: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTokenizeShareLockInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareLockInfo;
    fromJSON(object: any): QueryTokenizeShareLockInfo;
    toJSON(message: QueryTokenizeShareLockInfo): unknown;
    fromPartial(object: DeepPartial<QueryTokenizeShareLockInfo>): QueryTokenizeShareLockInfo;
    fromAmino(object: QueryTokenizeShareLockInfoAmino): QueryTokenizeShareLockInfo;
    toAmino(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoAmino;
    fromAminoMsg(object: QueryTokenizeShareLockInfoAminoMsg): QueryTokenizeShareLockInfo;
    toAminoMsg(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareLockInfoProtoMsg): QueryTokenizeShareLockInfo;
    toProto(message: QueryTokenizeShareLockInfo): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareLockInfo): QueryTokenizeShareLockInfoProtoMsg;
};
export declare const QueryTokenizeShareLockInfoResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: QueryTokenizeShareLockInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenizeShareLockInfoResponse;
    fromJSON(object: any): QueryTokenizeShareLockInfoResponse;
    toJSON(message: QueryTokenizeShareLockInfoResponse): unknown;
    fromPartial(object: DeepPartial<QueryTokenizeShareLockInfoResponse>): QueryTokenizeShareLockInfoResponse;
    fromAmino(object: QueryTokenizeShareLockInfoResponseAmino): QueryTokenizeShareLockInfoResponse;
    toAmino(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseAmino;
    fromAminoMsg(object: QueryTokenizeShareLockInfoResponseAminoMsg): QueryTokenizeShareLockInfoResponse;
    toAminoMsg(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseAminoMsg;
    fromProtoMsg(message: QueryTokenizeShareLockInfoResponseProtoMsg): QueryTokenizeShareLockInfoResponse;
    toProto(message: QueryTokenizeShareLockInfoResponse): Uint8Array;
    toProtoMsg(message: QueryTokenizeShareLockInfoResponse): QueryTokenizeShareLockInfoResponseProtoMsg;
};
export declare const TokenizeShareRecord: {
    typeUrl: string;
    aminoType: string;
    encode(message: TokenizeShareRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenizeShareRecord;
    fromJSON(object: any): TokenizeShareRecord;
    toJSON(message: TokenizeShareRecord): unknown;
    fromPartial(object: DeepPartial<TokenizeShareRecord>): TokenizeShareRecord;
    fromAmino(object: TokenizeShareRecordAmino): TokenizeShareRecord;
    toAmino(message: TokenizeShareRecord): TokenizeShareRecordAmino;
    fromAminoMsg(object: TokenizeShareRecordAminoMsg): TokenizeShareRecord;
    toAminoMsg(message: TokenizeShareRecord): TokenizeShareRecordAminoMsg;
    fromProtoMsg(message: TokenizeShareRecordProtoMsg): TokenizeShareRecord;
    toProto(message: TokenizeShareRecord): Uint8Array;
    toProtoMsg(message: TokenizeShareRecord): TokenizeShareRecordProtoMsg;
};
export declare const PendingTokenizeShareAuthorizations: {
    typeUrl: string;
    aminoType: string;
    encode(message: PendingTokenizeShareAuthorizations, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PendingTokenizeShareAuthorizations;
    fromJSON(object: any): PendingTokenizeShareAuthorizations;
    toJSON(message: PendingTokenizeShareAuthorizations): unknown;
    fromPartial(object: DeepPartial<PendingTokenizeShareAuthorizations>): PendingTokenizeShareAuthorizations;
    fromAmino(object: PendingTokenizeShareAuthorizationsAmino): PendingTokenizeShareAuthorizations;
    toAmino(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsAmino;
    fromAminoMsg(object: PendingTokenizeShareAuthorizationsAminoMsg): PendingTokenizeShareAuthorizations;
    toAminoMsg(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsAminoMsg;
    fromProtoMsg(message: PendingTokenizeShareAuthorizationsProtoMsg): PendingTokenizeShareAuthorizations;
    toProto(message: PendingTokenizeShareAuthorizations): Uint8Array;
    toProtoMsg(message: PendingTokenizeShareAuthorizations): PendingTokenizeShareAuthorizationsProtoMsg;
};
export declare const MsgUnbondValidator: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgUnbondValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbondValidator;
    fromJSON(object: any): MsgUnbondValidator;
    toJSON(message: MsgUnbondValidator): unknown;
    fromPartial(object: DeepPartial<MsgUnbondValidator>): MsgUnbondValidator;
    fromAmino(object: MsgUnbondValidatorAmino): MsgUnbondValidator;
    toAmino(message: MsgUnbondValidator): MsgUnbondValidatorAmino;
    fromAminoMsg(object: MsgUnbondValidatorAminoMsg): MsgUnbondValidator;
    toAminoMsg(message: MsgUnbondValidator): MsgUnbondValidatorAminoMsg;
    fromProtoMsg(message: MsgUnbondValidatorProtoMsg): MsgUnbondValidator;
    toProto(message: MsgUnbondValidator): Uint8Array;
    toProtoMsg(message: MsgUnbondValidator): MsgUnbondValidatorProtoMsg;
};
export declare const MsgUnbondValidatorResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgUnbondValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnbondValidatorResponse;
    fromJSON(_: any): MsgUnbondValidatorResponse;
    toJSON(_: MsgUnbondValidatorResponse): unknown;
    fromPartial(_: DeepPartial<MsgUnbondValidatorResponse>): MsgUnbondValidatorResponse;
    fromAmino(_: MsgUnbondValidatorResponseAmino): MsgUnbondValidatorResponse;
    toAmino(_: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseAmino;
    fromAminoMsg(object: MsgUnbondValidatorResponseAminoMsg): MsgUnbondValidatorResponse;
    toAminoMsg(message: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseAminoMsg;
    fromProtoMsg(message: MsgUnbondValidatorResponseProtoMsg): MsgUnbondValidatorResponse;
    toProto(message: MsgUnbondValidatorResponse): Uint8Array;
    toProtoMsg(message: MsgUnbondValidatorResponse): MsgUnbondValidatorResponseProtoMsg;
};
export declare const MsgTokenizeShares: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgTokenizeShares, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTokenizeShares;
    fromJSON(object: any): MsgTokenizeShares;
    toJSON(message: MsgTokenizeShares): unknown;
    fromPartial(object: DeepPartial<MsgTokenizeShares>): MsgTokenizeShares;
    fromAmino(object: MsgTokenizeSharesAmino): MsgTokenizeShares;
    toAmino(message: MsgTokenizeShares): MsgTokenizeSharesAmino;
    fromAminoMsg(object: MsgTokenizeSharesAminoMsg): MsgTokenizeShares;
    toAminoMsg(message: MsgTokenizeShares): MsgTokenizeSharesAminoMsg;
    fromProtoMsg(message: MsgTokenizeSharesProtoMsg): MsgTokenizeShares;
    toProto(message: MsgTokenizeShares): Uint8Array;
    toProtoMsg(message: MsgTokenizeShares): MsgTokenizeSharesProtoMsg;
};
export declare const MsgTokenizeSharesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgTokenizeSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTokenizeSharesResponse;
    fromJSON(object: any): MsgTokenizeSharesResponse;
    toJSON(message: MsgTokenizeSharesResponse): unknown;
    fromPartial(object: DeepPartial<MsgTokenizeSharesResponse>): MsgTokenizeSharesResponse;
    fromAmino(object: MsgTokenizeSharesResponseAmino): MsgTokenizeSharesResponse;
    toAmino(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseAmino;
    fromAminoMsg(object: MsgTokenizeSharesResponseAminoMsg): MsgTokenizeSharesResponse;
    toAminoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseAminoMsg;
    fromProtoMsg(message: MsgTokenizeSharesResponseProtoMsg): MsgTokenizeSharesResponse;
    toProto(message: MsgTokenizeSharesResponse): Uint8Array;
    toProtoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseProtoMsg;
};
export declare const MsgRedeemTokensForShares: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgRedeemTokensForShares, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokensForShares;
    fromJSON(object: any): MsgRedeemTokensForShares;
    toJSON(message: MsgRedeemTokensForShares): unknown;
    fromPartial(object: DeepPartial<MsgRedeemTokensForShares>): MsgRedeemTokensForShares;
    fromAmino(object: MsgRedeemTokensForSharesAmino): MsgRedeemTokensForShares;
    toAmino(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAmino;
    fromAminoMsg(object: MsgRedeemTokensForSharesAminoMsg): MsgRedeemTokensForShares;
    toAminoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAminoMsg;
    fromProtoMsg(message: MsgRedeemTokensForSharesProtoMsg): MsgRedeemTokensForShares;
    toProto(message: MsgRedeemTokensForShares): Uint8Array;
    toProtoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesProtoMsg;
};
export declare const MsgRedeemTokensForSharesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgRedeemTokensForSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokensForSharesResponse;
    fromJSON(object: any): MsgRedeemTokensForSharesResponse;
    toJSON(message: MsgRedeemTokensForSharesResponse): unknown;
    fromPartial(object: DeepPartial<MsgRedeemTokensForSharesResponse>): MsgRedeemTokensForSharesResponse;
    fromAmino(object: MsgRedeemTokensForSharesResponseAmino): MsgRedeemTokensForSharesResponse;
    toAmino(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseAmino;
    fromAminoMsg(object: MsgRedeemTokensForSharesResponseAminoMsg): MsgRedeemTokensForSharesResponse;
    toAminoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseAminoMsg;
    fromProtoMsg(message: MsgRedeemTokensForSharesResponseProtoMsg): MsgRedeemTokensForSharesResponse;
    toProto(message: MsgRedeemTokensForSharesResponse): Uint8Array;
    toProtoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseProtoMsg;
};
export declare const MsgTransferTokenizeShareRecord: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgTransferTokenizeShareRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenizeShareRecord;
    fromJSON(object: any): MsgTransferTokenizeShareRecord;
    toJSON(message: MsgTransferTokenizeShareRecord): unknown;
    fromPartial(object: DeepPartial<MsgTransferTokenizeShareRecord>): MsgTransferTokenizeShareRecord;
    fromAmino(object: MsgTransferTokenizeShareRecordAmino): MsgTransferTokenizeShareRecord;
    toAmino(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordAmino;
    fromAminoMsg(object: MsgTransferTokenizeShareRecordAminoMsg): MsgTransferTokenizeShareRecord;
    toAminoMsg(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordAminoMsg;
    fromProtoMsg(message: MsgTransferTokenizeShareRecordProtoMsg): MsgTransferTokenizeShareRecord;
    toProto(message: MsgTransferTokenizeShareRecord): Uint8Array;
    toProtoMsg(message: MsgTransferTokenizeShareRecord): MsgTransferTokenizeShareRecordProtoMsg;
};
export declare const MsgTransferTokenizeShareRecordResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgTransferTokenizeShareRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferTokenizeShareRecordResponse;
    fromJSON(_: any): MsgTransferTokenizeShareRecordResponse;
    toJSON(_: MsgTransferTokenizeShareRecordResponse): unknown;
    fromPartial(_: DeepPartial<MsgTransferTokenizeShareRecordResponse>): MsgTransferTokenizeShareRecordResponse;
    fromAmino(_: MsgTransferTokenizeShareRecordResponseAmino): MsgTransferTokenizeShareRecordResponse;
    toAmino(_: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseAmino;
    fromAminoMsg(object: MsgTransferTokenizeShareRecordResponseAminoMsg): MsgTransferTokenizeShareRecordResponse;
    toAminoMsg(message: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseAminoMsg;
    fromProtoMsg(message: MsgTransferTokenizeShareRecordResponseProtoMsg): MsgTransferTokenizeShareRecordResponse;
    toProto(message: MsgTransferTokenizeShareRecordResponse): Uint8Array;
    toProtoMsg(message: MsgTransferTokenizeShareRecordResponse): MsgTransferTokenizeShareRecordResponseProtoMsg;
};
export declare const MsgDisableTokenizeShares: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgDisableTokenizeShares, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableTokenizeShares;
    fromJSON(object: any): MsgDisableTokenizeShares;
    toJSON(message: MsgDisableTokenizeShares): unknown;
    fromPartial(object: DeepPartial<MsgDisableTokenizeShares>): MsgDisableTokenizeShares;
    fromAmino(object: MsgDisableTokenizeSharesAmino): MsgDisableTokenizeShares;
    toAmino(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAmino;
    fromAminoMsg(object: MsgDisableTokenizeSharesAminoMsg): MsgDisableTokenizeShares;
    toAminoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAminoMsg;
    fromProtoMsg(message: MsgDisableTokenizeSharesProtoMsg): MsgDisableTokenizeShares;
    toProto(message: MsgDisableTokenizeShares): Uint8Array;
    toProtoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesProtoMsg;
};
export declare const MsgDisableTokenizeSharesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgDisableTokenizeSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableTokenizeSharesResponse;
    fromJSON(_: any): MsgDisableTokenizeSharesResponse;
    toJSON(_: MsgDisableTokenizeSharesResponse): unknown;
    fromPartial(_: DeepPartial<MsgDisableTokenizeSharesResponse>): MsgDisableTokenizeSharesResponse;
    fromAmino(_: MsgDisableTokenizeSharesResponseAmino): MsgDisableTokenizeSharesResponse;
    toAmino(_: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseAmino;
    fromAminoMsg(object: MsgDisableTokenizeSharesResponseAminoMsg): MsgDisableTokenizeSharesResponse;
    toAminoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseAminoMsg;
    fromProtoMsg(message: MsgDisableTokenizeSharesResponseProtoMsg): MsgDisableTokenizeSharesResponse;
    toProto(message: MsgDisableTokenizeSharesResponse): Uint8Array;
    toProtoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseProtoMsg;
};
export declare const MsgEnableTokenizeShares: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgEnableTokenizeShares, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableTokenizeShares;
    fromJSON(object: any): MsgEnableTokenizeShares;
    toJSON(message: MsgEnableTokenizeShares): unknown;
    fromPartial(object: DeepPartial<MsgEnableTokenizeShares>): MsgEnableTokenizeShares;
    fromAmino(object: MsgEnableTokenizeSharesAmino): MsgEnableTokenizeShares;
    toAmino(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAmino;
    fromAminoMsg(object: MsgEnableTokenizeSharesAminoMsg): MsgEnableTokenizeShares;
    toAminoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAminoMsg;
    fromProtoMsg(message: MsgEnableTokenizeSharesProtoMsg): MsgEnableTokenizeShares;
    toProto(message: MsgEnableTokenizeShares): Uint8Array;
    toProtoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesProtoMsg;
};
export declare const MsgEnableTokenizeSharesResponse: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgEnableTokenizeSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableTokenizeSharesResponse;
    fromJSON(object: any): MsgEnableTokenizeSharesResponse;
    toJSON(message: MsgEnableTokenizeSharesResponse): unknown;
    fromPartial(object: DeepPartial<MsgEnableTokenizeSharesResponse>): MsgEnableTokenizeSharesResponse;
    fromAmino(object: MsgEnableTokenizeSharesResponseAmino): MsgEnableTokenizeSharesResponse;
    toAmino(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseAmino;
    fromAminoMsg(object: MsgEnableTokenizeSharesResponseAminoMsg): MsgEnableTokenizeSharesResponse;
    toAminoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseAminoMsg;
    fromProtoMsg(message: MsgEnableTokenizeSharesResponseProtoMsg): MsgEnableTokenizeSharesResponse;
    toProto(message: MsgEnableTokenizeSharesResponse): Uint8Array;
    toProtoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseProtoMsg;
};
export declare const MsgValidatorBond: {
    typeUrl: string;
    aminoType: string;
    encode(message: MsgValidatorBond, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValidatorBond;
    fromJSON(object: any): MsgValidatorBond;
    toJSON(message: MsgValidatorBond): unknown;
    fromPartial(object: DeepPartial<MsgValidatorBond>): MsgValidatorBond;
    fromAmino(object: MsgValidatorBondAmino): MsgValidatorBond;
    toAmino(message: MsgValidatorBond): MsgValidatorBondAmino;
    fromAminoMsg(object: MsgValidatorBondAminoMsg): MsgValidatorBond;
    toAminoMsg(message: MsgValidatorBond): MsgValidatorBondAminoMsg;
    fromProtoMsg(message: MsgValidatorBondProtoMsg): MsgValidatorBond;
    toProto(message: MsgValidatorBond): Uint8Array;
    toProtoMsg(message: MsgValidatorBond): MsgValidatorBondProtoMsg;
};
export declare const MsgValidatorBondResponse: {
    typeUrl: string;
    aminoType: string;
    encode(_: MsgValidatorBondResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgValidatorBondResponse;
    fromJSON(_: any): MsgValidatorBondResponse;
    toJSON(_: MsgValidatorBondResponse): unknown;
    fromPartial(_: DeepPartial<MsgValidatorBondResponse>): MsgValidatorBondResponse;
    fromAmino(_: MsgValidatorBondResponseAmino): MsgValidatorBondResponse;
    toAmino(_: MsgValidatorBondResponse): MsgValidatorBondResponseAmino;
    fromAminoMsg(object: MsgValidatorBondResponseAminoMsg): MsgValidatorBondResponse;
    toAminoMsg(message: MsgValidatorBondResponse): MsgValidatorBondResponseAminoMsg;
    fromProtoMsg(message: MsgValidatorBondResponseProtoMsg): MsgValidatorBondResponse;
    toProto(message: MsgValidatorBondResponse): Uint8Array;
    toProtoMsg(message: MsgValidatorBondResponse): MsgValidatorBondResponseProtoMsg;
};
