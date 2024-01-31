import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
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
/** MsgRedeemTokensForShares redeems a tokenized share back into a native delegation */
export interface MsgRedeemTokensForShares {
    delegator_address: string;
    amount: Coin;
}
export interface MsgRedeemTokensForSharesProtoMsg {
    type_url: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares";
    value: Uint8Array;
}
/** MsgRedeemTokensForShares redeems a tokenized share back into a native delegation */
export interface MsgRedeemTokensForSharesAmino {
    delegator_address: string;
    amount?: CoinAmino;
}
export interface MsgRedeemTokensForSharesAminoMsg {
    type: "cosmos-sdk/MsgRedeemTokensForShares";
    value: MsgRedeemTokensForSharesAmino;
}
/** MsgRedeemTokensForShares redeems a tokenized share back into a native delegation */
export interface MsgRedeemTokensForSharesSDKType {
    delegator_address: string;
    amount: CoinSDKType;
}
/** MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares response type. */
export interface MsgRedeemTokensForSharesResponse {
    amount: Coin;
}
export interface MsgRedeemTokensForSharesResponseProtoMsg {
    type_url: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse";
    value: Uint8Array;
}
/** MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares response type. */
export interface MsgRedeemTokensForSharesResponseAmino {
    amount?: CoinAmino;
}
export interface MsgRedeemTokensForSharesResponseAminoMsg {
    type: "cosmos-sdk/MsgRedeemTokensForSharesResponse";
    value: MsgRedeemTokensForSharesResponseAmino;
}
/** MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares response type. */
export interface MsgRedeemTokensForSharesResponseSDKType {
    amount: CoinSDKType;
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
