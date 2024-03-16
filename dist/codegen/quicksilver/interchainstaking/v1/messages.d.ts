import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * MsgRequestRedemption represents a message type to request a burn of qAssets
 * for native assets.
 */
export interface MsgRequestRedemption {
    value: Coin;
    destination_address: string;
    from_address: string;
}
export interface MsgRequestRedemptionProtoMsg {
    type_url: "/quicksilver.interchainstaking.v1.MsgRequestRedemption";
    value: Uint8Array;
}
/**
 * MsgRequestRedemption represents a message type to request a burn of qAssets
 * for native assets.
 */
export interface MsgRequestRedemptionAmino {
    value?: CoinAmino;
    destination_address: string;
    from_address: string;
}
export interface MsgRequestRedemptionAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgRequestRedemption";
    value: MsgRequestRedemptionAmino;
}
/**
 * MsgRequestRedemption represents a message type to request a burn of qAssets
 * for native assets.
 */
export interface MsgRequestRedemptionSDKType {
    value: CoinSDKType;
    destination_address: string;
    from_address: string;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgRequestRedemptionResponse {
}
export interface MsgRequestRedemptionResponseProtoMsg {
    type_url: "/quicksilver.interchainstaking.v1.MsgRequestRedemptionResponse";
    value: Uint8Array;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgRequestRedemptionResponseAmino {
}
export interface MsgRequestRedemptionResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgRequestRedemptionResponse";
    value: MsgRequestRedemptionResponseAmino;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */
export interface MsgRequestRedemptionResponseSDKType {
}
/**
 * MsgSignalIntent represents a message type for signalling voting intent for
 * one or more validators.
 */
export interface MsgSignalIntent {
    chain_id: string;
    intents: string;
    from_address: string;
}
export interface MsgSignalIntentProtoMsg {
    type_url: "/quicksilver.interchainstaking.v1.MsgSignalIntent";
    value: Uint8Array;
}
/**
 * MsgSignalIntent represents a message type for signalling voting intent for
 * one or more validators.
 */
export interface MsgSignalIntentAmino {
    chain_id: string;
    intents: string;
    from_address: string;
}
export interface MsgSignalIntentAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgSignalIntent";
    value: MsgSignalIntentAmino;
}
/**
 * MsgSignalIntent represents a message type for signalling voting intent for
 * one or more validators.
 */
export interface MsgSignalIntentSDKType {
    chain_id: string;
    intents: string;
    from_address: string;
}
/** MsgSignalIntentResponse defines the MsgSignalIntent response type. */
export interface MsgSignalIntentResponse {
}
export interface MsgSignalIntentResponseProtoMsg {
    type_url: "/quicksilver.interchainstaking.v1.MsgSignalIntentResponse";
    value: Uint8Array;
}
/** MsgSignalIntentResponse defines the MsgSignalIntent response type. */
export interface MsgSignalIntentResponseAmino {
}
export interface MsgSignalIntentResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgSignalIntentResponse";
    value: MsgSignalIntentResponseAmino;
}
/** MsgSignalIntentResponse defines the MsgSignalIntent response type. */
export interface MsgSignalIntentResponseSDKType {
}
export declare const MsgRequestRedemption: {
    typeUrl: string;
    encode(message: MsgRequestRedemption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestRedemption;
    fromJSON(object: any): MsgRequestRedemption;
    toJSON(message: MsgRequestRedemption): unknown;
    fromPartial(object: DeepPartial<MsgRequestRedemption>): MsgRequestRedemption;
    fromAmino(object: MsgRequestRedemptionAmino): MsgRequestRedemption;
    toAmino(message: MsgRequestRedemption): MsgRequestRedemptionAmino;
    fromAminoMsg(object: MsgRequestRedemptionAminoMsg): MsgRequestRedemption;
    fromProtoMsg(message: MsgRequestRedemptionProtoMsg): MsgRequestRedemption;
    toProto(message: MsgRequestRedemption): Uint8Array;
    toProtoMsg(message: MsgRequestRedemption): MsgRequestRedemptionProtoMsg;
};
export declare const MsgRequestRedemptionResponse: {
    typeUrl: string;
    encode(_: MsgRequestRedemptionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestRedemptionResponse;
    fromJSON(_: any): MsgRequestRedemptionResponse;
    toJSON(_: MsgRequestRedemptionResponse): unknown;
    fromPartial(_: DeepPartial<MsgRequestRedemptionResponse>): MsgRequestRedemptionResponse;
    fromAmino(_: MsgRequestRedemptionResponseAmino): MsgRequestRedemptionResponse;
    toAmino(_: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseAmino;
    fromAminoMsg(object: MsgRequestRedemptionResponseAminoMsg): MsgRequestRedemptionResponse;
    fromProtoMsg(message: MsgRequestRedemptionResponseProtoMsg): MsgRequestRedemptionResponse;
    toProto(message: MsgRequestRedemptionResponse): Uint8Array;
    toProtoMsg(message: MsgRequestRedemptionResponse): MsgRequestRedemptionResponseProtoMsg;
};
export declare const MsgSignalIntent: {
    typeUrl: string;
    encode(message: MsgSignalIntent, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignalIntent;
    fromJSON(object: any): MsgSignalIntent;
    toJSON(message: MsgSignalIntent): unknown;
    fromPartial(object: DeepPartial<MsgSignalIntent>): MsgSignalIntent;
    fromAmino(object: MsgSignalIntentAmino): MsgSignalIntent;
    toAmino(message: MsgSignalIntent): MsgSignalIntentAmino;
    fromAminoMsg(object: MsgSignalIntentAminoMsg): MsgSignalIntent;
    fromProtoMsg(message: MsgSignalIntentProtoMsg): MsgSignalIntent;
    toProto(message: MsgSignalIntent): Uint8Array;
    toProtoMsg(message: MsgSignalIntent): MsgSignalIntentProtoMsg;
};
export declare const MsgSignalIntentResponse: {
    typeUrl: string;
    encode(_: MsgSignalIntentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignalIntentResponse;
    fromJSON(_: any): MsgSignalIntentResponse;
    toJSON(_: MsgSignalIntentResponse): unknown;
    fromPartial(_: DeepPartial<MsgSignalIntentResponse>): MsgSignalIntentResponse;
    fromAmino(_: MsgSignalIntentResponseAmino): MsgSignalIntentResponse;
    toAmino(_: MsgSignalIntentResponse): MsgSignalIntentResponseAmino;
    fromAminoMsg(object: MsgSignalIntentResponseAminoMsg): MsgSignalIntentResponse;
    fromProtoMsg(message: MsgSignalIntentResponseProtoMsg): MsgSignalIntentResponse;
    toProto(message: MsgSignalIntentResponse): Uint8Array;
    toProtoMsg(message: MsgSignalIntentResponse): MsgSignalIntentResponseProtoMsg;
};
