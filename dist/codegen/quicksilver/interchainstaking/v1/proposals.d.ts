/// <reference types="long" />
import { LsmCaps, LsmCapsAmino, LsmCapsSDKType } from "./interchainstaking";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface RegisterZoneProposal {
    title: string;
    description: string;
    connectionId: string;
    baseDenom: string;
    localDenom: string;
    accountPrefix: string;
    /** deprecated */
    multiSend: boolean;
    liquidityModule: boolean;
    messagesPerTx: Long;
    returnToSender: boolean;
    depositsEnabled: boolean;
    unbondingEnabled: boolean;
    decimals: Long;
    is118: boolean;
}
export interface RegisterZoneProposalProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposal";
    value: Uint8Array;
}
export interface RegisterZoneProposalAmino {
    title: string;
    description: string;
    connection_id: string;
    base_denom: string;
    local_denom: string;
    account_prefix: string;
    /** deprecated */
    multi_send: boolean;
    liquidity_module: boolean;
    messages_per_tx: string;
    return_to_sender: boolean;
    deposits_enabled: boolean;
    unbonding_enabled: boolean;
    decimals: string;
    is_118: boolean;
}
export interface RegisterZoneProposalAminoMsg {
    type: "/quicksilver.interchainstaking.v1.RegisterZoneProposal";
    value: RegisterZoneProposalAmino;
}
export interface RegisterZoneProposalSDKType {
    title: string;
    description: string;
    connection_id: string;
    base_denom: string;
    local_denom: string;
    account_prefix: string;
    multi_send: boolean;
    liquidity_module: boolean;
    messages_per_tx: Long;
    return_to_sender: boolean;
    deposits_enabled: boolean;
    unbonding_enabled: boolean;
    decimals: Long;
    is_118: boolean;
}
export interface RegisterZoneProposalWithDeposit {
    title: string;
    description: string;
    connectionId: string;
    baseDenom: string;
    localDenom: string;
    accountPrefix: string;
    multiSend: boolean;
    liquidityModule: boolean;
    deposit: string;
    messagesPerTx: Long;
    returnToSender: boolean;
    depositsEnabled: boolean;
    unbondingEnabled: boolean;
    decimals: Long;
    is118: boolean;
}
export interface RegisterZoneProposalWithDepositProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.RegisterZoneProposalWithDeposit";
    value: Uint8Array;
}
export interface RegisterZoneProposalWithDepositAmino {
    title: string;
    description: string;
    connection_id: string;
    base_denom: string;
    local_denom: string;
    account_prefix: string;
    multi_send: boolean;
    liquidity_module: boolean;
    deposit: string;
    messages_per_tx: string;
    return_to_sender: boolean;
    deposits_enabled: boolean;
    unbonding_enabled: boolean;
    decimals: string;
    is_118: boolean;
}
export interface RegisterZoneProposalWithDepositAminoMsg {
    type: "/quicksilver.interchainstaking.v1.RegisterZoneProposalWithDeposit";
    value: RegisterZoneProposalWithDepositAmino;
}
export interface RegisterZoneProposalWithDepositSDKType {
    title: string;
    description: string;
    connection_id: string;
    base_denom: string;
    local_denom: string;
    account_prefix: string;
    multi_send: boolean;
    liquidity_module: boolean;
    deposit: string;
    messages_per_tx: Long;
    return_to_sender: boolean;
    deposits_enabled: boolean;
    unbonding_enabled: boolean;
    decimals: Long;
    is_118: boolean;
}
export interface UpdateZoneProposal {
    title: string;
    description: string;
    chainId: string;
    changes: UpdateZoneValue[];
}
export interface UpdateZoneProposalProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposal";
    value: Uint8Array;
}
export interface UpdateZoneProposalAmino {
    title: string;
    description: string;
    chain_id: string;
    changes: UpdateZoneValueAmino[];
}
export interface UpdateZoneProposalAminoMsg {
    type: "/quicksilver.interchainstaking.v1.UpdateZoneProposal";
    value: UpdateZoneProposalAmino;
}
export interface UpdateZoneProposalSDKType {
    title: string;
    description: string;
    chain_id: string;
    changes: UpdateZoneValueSDKType[];
}
export interface UpdateZoneProposalWithDeposit {
    title: string;
    description: string;
    chainId: string;
    changes: UpdateZoneValue[];
    deposit: string;
}
export interface UpdateZoneProposalWithDepositProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneProposalWithDeposit";
    value: Uint8Array;
}
export interface UpdateZoneProposalWithDepositAmino {
    title: string;
    description: string;
    chain_id: string;
    changes: UpdateZoneValueAmino[];
    deposit: string;
}
export interface UpdateZoneProposalWithDepositAminoMsg {
    type: "/quicksilver.interchainstaking.v1.UpdateZoneProposalWithDeposit";
    value: UpdateZoneProposalWithDepositAmino;
}
export interface UpdateZoneProposalWithDepositSDKType {
    title: string;
    description: string;
    chain_id: string;
    changes: UpdateZoneValueSDKType[];
    deposit: string;
}
/**
 * UpdateZoneValue defines an individual parameter change, for use in
 * UpdateZoneProposal.
 */
export interface UpdateZoneValue {
    key: string;
    value: string;
}
export interface UpdateZoneValueProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.UpdateZoneValue";
    value: Uint8Array;
}
/**
 * UpdateZoneValue defines an individual parameter change, for use in
 * UpdateZoneProposal.
 */
export interface UpdateZoneValueAmino {
    key: string;
    value: string;
}
export interface UpdateZoneValueAminoMsg {
    type: "/quicksilver.interchainstaking.v1.UpdateZoneValue";
    value: UpdateZoneValueAmino;
}
/**
 * UpdateZoneValue defines an individual parameter change, for use in
 * UpdateZoneProposal.
 */
export interface UpdateZoneValueSDKType {
    key: string;
    value: string;
}
export interface MsgGovReopenChannel {
    title: string;
    description: string;
    connectionId: string;
    portId: string;
    authority: string;
}
export interface MsgGovReopenChannelProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel";
    value: Uint8Array;
}
export interface MsgGovReopenChannelAmino {
    title: string;
    description: string;
    connection_id: string;
    port_id: string;
    authority: string;
}
export interface MsgGovReopenChannelAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel";
    value: MsgGovReopenChannelAmino;
}
export interface MsgGovReopenChannelSDKType {
    title: string;
    description: string;
    connection_id: string;
    port_id: string;
    authority: string;
}
/** MsgGovReopenChannelResponse defines the MsgGovReopenChannel response type. */
export interface MsgGovReopenChannelResponse {
}
export interface MsgGovReopenChannelResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse";
    value: Uint8Array;
}
/** MsgGovReopenChannelResponse defines the MsgGovReopenChannel response type. */
export interface MsgGovReopenChannelResponseAmino {
}
export interface MsgGovReopenChannelResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgGovReopenChannelResponse";
    value: MsgGovReopenChannelResponseAmino;
}
/** MsgGovReopenChannelResponse defines the MsgGovReopenChannel response type. */
export interface MsgGovReopenChannelResponseSDKType {
}
export interface MsgGovCloseChannel {
    title: string;
    description: string;
    channelId: string;
    portId: string;
    authority: string;
}
export interface MsgGovCloseChannelProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel";
    value: Uint8Array;
}
export interface MsgGovCloseChannelAmino {
    title: string;
    description: string;
    channel_id: string;
    port_id: string;
    authority: string;
}
export interface MsgGovCloseChannelAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel";
    value: MsgGovCloseChannelAmino;
}
export interface MsgGovCloseChannelSDKType {
    title: string;
    description: string;
    channel_id: string;
    port_id: string;
    authority: string;
}
/** MsgGovCloseChannelResponse defines the MsgGovCloseChannel response type. */
export interface MsgGovCloseChannelResponse {
}
export interface MsgGovCloseChannelResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse";
    value: Uint8Array;
}
/** MsgGovCloseChannelResponse defines the MsgGovCloseChannel response type. */
export interface MsgGovCloseChannelResponseAmino {
}
export interface MsgGovCloseChannelResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgGovCloseChannelResponse";
    value: MsgGovCloseChannelResponseAmino;
}
/** MsgGovCloseChannelResponse defines the MsgGovCloseChannel response type. */
export interface MsgGovCloseChannelResponseSDKType {
}
export interface MsgGovSetLsmCaps {
    title: string;
    description: string;
    chainId: string;
    caps: LsmCaps;
    authority: string;
}
export interface MsgGovSetLsmCapsProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps";
    value: Uint8Array;
}
export interface MsgGovSetLsmCapsAmino {
    title: string;
    description: string;
    chain_id: string;
    caps?: LsmCapsAmino;
    authority: string;
}
export interface MsgGovSetLsmCapsAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps";
    value: MsgGovSetLsmCapsAmino;
}
export interface MsgGovSetLsmCapsSDKType {
    title: string;
    description: string;
    chain_id: string;
    caps: LsmCapsSDKType;
    authority: string;
}
export interface MsgGovSetLsmCapsResponse {
}
export interface MsgGovSetLsmCapsResponseProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse";
    value: Uint8Array;
}
export interface MsgGovSetLsmCapsResponseAmino {
}
export interface MsgGovSetLsmCapsResponseAminoMsg {
    type: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCapsResponse";
    value: MsgGovSetLsmCapsResponseAmino;
}
export interface MsgGovSetLsmCapsResponseSDKType {
}
export declare const RegisterZoneProposal: {
    typeUrl: string;
    encode(message: RegisterZoneProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterZoneProposal;
    fromJSON(object: any): RegisterZoneProposal;
    toJSON(message: RegisterZoneProposal): unknown;
    fromPartial(object: DeepPartial<RegisterZoneProposal>): RegisterZoneProposal;
    fromAmino(object: RegisterZoneProposalAmino): RegisterZoneProposal;
    toAmino(message: RegisterZoneProposal): RegisterZoneProposalAmino;
    fromAminoMsg(object: RegisterZoneProposalAminoMsg): RegisterZoneProposal;
    fromProtoMsg(message: RegisterZoneProposalProtoMsg): RegisterZoneProposal;
    toProto(message: RegisterZoneProposal): Uint8Array;
    toProtoMsg(message: RegisterZoneProposal): RegisterZoneProposalProtoMsg;
};
export declare const RegisterZoneProposalWithDeposit: {
    typeUrl: string;
    encode(message: RegisterZoneProposalWithDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterZoneProposalWithDeposit;
    fromJSON(object: any): RegisterZoneProposalWithDeposit;
    toJSON(message: RegisterZoneProposalWithDeposit): unknown;
    fromPartial(object: DeepPartial<RegisterZoneProposalWithDeposit>): RegisterZoneProposalWithDeposit;
    fromAmino(object: RegisterZoneProposalWithDepositAmino): RegisterZoneProposalWithDeposit;
    toAmino(message: RegisterZoneProposalWithDeposit): RegisterZoneProposalWithDepositAmino;
    fromAminoMsg(object: RegisterZoneProposalWithDepositAminoMsg): RegisterZoneProposalWithDeposit;
    fromProtoMsg(message: RegisterZoneProposalWithDepositProtoMsg): RegisterZoneProposalWithDeposit;
    toProto(message: RegisterZoneProposalWithDeposit): Uint8Array;
    toProtoMsg(message: RegisterZoneProposalWithDeposit): RegisterZoneProposalWithDepositProtoMsg;
};
export declare const UpdateZoneProposal: {
    typeUrl: string;
    encode(message: UpdateZoneProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateZoneProposal;
    fromJSON(object: any): UpdateZoneProposal;
    toJSON(message: UpdateZoneProposal): unknown;
    fromPartial(object: DeepPartial<UpdateZoneProposal>): UpdateZoneProposal;
    fromAmino(object: UpdateZoneProposalAmino): UpdateZoneProposal;
    toAmino(message: UpdateZoneProposal): UpdateZoneProposalAmino;
    fromAminoMsg(object: UpdateZoneProposalAminoMsg): UpdateZoneProposal;
    fromProtoMsg(message: UpdateZoneProposalProtoMsg): UpdateZoneProposal;
    toProto(message: UpdateZoneProposal): Uint8Array;
    toProtoMsg(message: UpdateZoneProposal): UpdateZoneProposalProtoMsg;
};
export declare const UpdateZoneProposalWithDeposit: {
    typeUrl: string;
    encode(message: UpdateZoneProposalWithDeposit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateZoneProposalWithDeposit;
    fromJSON(object: any): UpdateZoneProposalWithDeposit;
    toJSON(message: UpdateZoneProposalWithDeposit): unknown;
    fromPartial(object: DeepPartial<UpdateZoneProposalWithDeposit>): UpdateZoneProposalWithDeposit;
    fromAmino(object: UpdateZoneProposalWithDepositAmino): UpdateZoneProposalWithDeposit;
    toAmino(message: UpdateZoneProposalWithDeposit): UpdateZoneProposalWithDepositAmino;
    fromAminoMsg(object: UpdateZoneProposalWithDepositAminoMsg): UpdateZoneProposalWithDeposit;
    fromProtoMsg(message: UpdateZoneProposalWithDepositProtoMsg): UpdateZoneProposalWithDeposit;
    toProto(message: UpdateZoneProposalWithDeposit): Uint8Array;
    toProtoMsg(message: UpdateZoneProposalWithDeposit): UpdateZoneProposalWithDepositProtoMsg;
};
export declare const UpdateZoneValue: {
    typeUrl: string;
    encode(message: UpdateZoneValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateZoneValue;
    fromJSON(object: any): UpdateZoneValue;
    toJSON(message: UpdateZoneValue): unknown;
    fromPartial(object: DeepPartial<UpdateZoneValue>): UpdateZoneValue;
    fromAmino(object: UpdateZoneValueAmino): UpdateZoneValue;
    toAmino(message: UpdateZoneValue): UpdateZoneValueAmino;
    fromAminoMsg(object: UpdateZoneValueAminoMsg): UpdateZoneValue;
    fromProtoMsg(message: UpdateZoneValueProtoMsg): UpdateZoneValue;
    toProto(message: UpdateZoneValue): Uint8Array;
    toProtoMsg(message: UpdateZoneValue): UpdateZoneValueProtoMsg;
};
export declare const MsgGovReopenChannel: {
    typeUrl: string;
    encode(message: MsgGovReopenChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovReopenChannel;
    fromJSON(object: any): MsgGovReopenChannel;
    toJSON(message: MsgGovReopenChannel): unknown;
    fromPartial(object: DeepPartial<MsgGovReopenChannel>): MsgGovReopenChannel;
    fromAmino(object: MsgGovReopenChannelAmino): MsgGovReopenChannel;
    toAmino(message: MsgGovReopenChannel): MsgGovReopenChannelAmino;
    fromAminoMsg(object: MsgGovReopenChannelAminoMsg): MsgGovReopenChannel;
    fromProtoMsg(message: MsgGovReopenChannelProtoMsg): MsgGovReopenChannel;
    toProto(message: MsgGovReopenChannel): Uint8Array;
    toProtoMsg(message: MsgGovReopenChannel): MsgGovReopenChannelProtoMsg;
};
export declare const MsgGovReopenChannelResponse: {
    typeUrl: string;
    encode(_: MsgGovReopenChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovReopenChannelResponse;
    fromJSON(_: any): MsgGovReopenChannelResponse;
    toJSON(_: MsgGovReopenChannelResponse): unknown;
    fromPartial(_: DeepPartial<MsgGovReopenChannelResponse>): MsgGovReopenChannelResponse;
    fromAmino(_: MsgGovReopenChannelResponseAmino): MsgGovReopenChannelResponse;
    toAmino(_: MsgGovReopenChannelResponse): MsgGovReopenChannelResponseAmino;
    fromAminoMsg(object: MsgGovReopenChannelResponseAminoMsg): MsgGovReopenChannelResponse;
    fromProtoMsg(message: MsgGovReopenChannelResponseProtoMsg): MsgGovReopenChannelResponse;
    toProto(message: MsgGovReopenChannelResponse): Uint8Array;
    toProtoMsg(message: MsgGovReopenChannelResponse): MsgGovReopenChannelResponseProtoMsg;
};
export declare const MsgGovCloseChannel: {
    typeUrl: string;
    encode(message: MsgGovCloseChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovCloseChannel;
    fromJSON(object: any): MsgGovCloseChannel;
    toJSON(message: MsgGovCloseChannel): unknown;
    fromPartial(object: DeepPartial<MsgGovCloseChannel>): MsgGovCloseChannel;
    fromAmino(object: MsgGovCloseChannelAmino): MsgGovCloseChannel;
    toAmino(message: MsgGovCloseChannel): MsgGovCloseChannelAmino;
    fromAminoMsg(object: MsgGovCloseChannelAminoMsg): MsgGovCloseChannel;
    fromProtoMsg(message: MsgGovCloseChannelProtoMsg): MsgGovCloseChannel;
    toProto(message: MsgGovCloseChannel): Uint8Array;
    toProtoMsg(message: MsgGovCloseChannel): MsgGovCloseChannelProtoMsg;
};
export declare const MsgGovCloseChannelResponse: {
    typeUrl: string;
    encode(_: MsgGovCloseChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovCloseChannelResponse;
    fromJSON(_: any): MsgGovCloseChannelResponse;
    toJSON(_: MsgGovCloseChannelResponse): unknown;
    fromPartial(_: DeepPartial<MsgGovCloseChannelResponse>): MsgGovCloseChannelResponse;
    fromAmino(_: MsgGovCloseChannelResponseAmino): MsgGovCloseChannelResponse;
    toAmino(_: MsgGovCloseChannelResponse): MsgGovCloseChannelResponseAmino;
    fromAminoMsg(object: MsgGovCloseChannelResponseAminoMsg): MsgGovCloseChannelResponse;
    fromProtoMsg(message: MsgGovCloseChannelResponseProtoMsg): MsgGovCloseChannelResponse;
    toProto(message: MsgGovCloseChannelResponse): Uint8Array;
    toProtoMsg(message: MsgGovCloseChannelResponse): MsgGovCloseChannelResponseProtoMsg;
};
export declare const MsgGovSetLsmCaps: {
    typeUrl: string;
    encode(message: MsgGovSetLsmCaps, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovSetLsmCaps;
    fromJSON(object: any): MsgGovSetLsmCaps;
    toJSON(message: MsgGovSetLsmCaps): unknown;
    fromPartial(object: DeepPartial<MsgGovSetLsmCaps>): MsgGovSetLsmCaps;
    fromAmino(object: MsgGovSetLsmCapsAmino): MsgGovSetLsmCaps;
    toAmino(message: MsgGovSetLsmCaps): MsgGovSetLsmCapsAmino;
    fromAminoMsg(object: MsgGovSetLsmCapsAminoMsg): MsgGovSetLsmCaps;
    fromProtoMsg(message: MsgGovSetLsmCapsProtoMsg): MsgGovSetLsmCaps;
    toProto(message: MsgGovSetLsmCaps): Uint8Array;
    toProtoMsg(message: MsgGovSetLsmCaps): MsgGovSetLsmCapsProtoMsg;
};
export declare const MsgGovSetLsmCapsResponse: {
    typeUrl: string;
    encode(_: MsgGovSetLsmCapsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGovSetLsmCapsResponse;
    fromJSON(_: any): MsgGovSetLsmCapsResponse;
    toJSON(_: MsgGovSetLsmCapsResponse): unknown;
    fromPartial(_: DeepPartial<MsgGovSetLsmCapsResponse>): MsgGovSetLsmCapsResponse;
    fromAmino(_: MsgGovSetLsmCapsResponseAmino): MsgGovSetLsmCapsResponse;
    toAmino(_: MsgGovSetLsmCapsResponse): MsgGovSetLsmCapsResponseAmino;
    fromAminoMsg(object: MsgGovSetLsmCapsResponseAminoMsg): MsgGovSetLsmCapsResponse;
    fromProtoMsg(message: MsgGovSetLsmCapsResponseProtoMsg): MsgGovSetLsmCapsResponse;
    toProto(message: MsgGovSetLsmCapsResponse): Uint8Array;
    toProtoMsg(message: MsgGovSetLsmCapsResponse): MsgGovSetLsmCapsResponseProtoMsg;
};
