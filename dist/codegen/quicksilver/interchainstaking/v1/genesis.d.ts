import { Delegation, DelegationAmino, DelegationSDKType, DelegatorIntent, DelegatorIntentAmino, DelegatorIntentSDKType, Zone, ZoneAmino, ZoneSDKType, Receipt, ReceiptAmino, ReceiptSDKType, PortConnectionTuple, PortConnectionTupleAmino, PortConnectionTupleSDKType, WithdrawalRecord, WithdrawalRecordAmino, WithdrawalRecordSDKType } from "./interchainstaking";
import { Long, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params_v1 {
    depositInterval: Long;
    validatorsetInterval: Long;
    commissionRate: string;
}
export interface Params_v1ProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.Params_v1";
    value: Uint8Array;
}
export interface Params_v1Amino {
    deposit_interval: string;
    validatorset_interval: string;
    commission_rate: string;
}
export interface Params_v1AminoMsg {
    type: "/quicksilver.interchainstaking.v1.Params_v1";
    value: Params_v1Amino;
}
export interface Params_v1SDKType {
    deposit_interval: Long;
    validatorset_interval: Long;
    commission_rate: string;
}
export interface Params {
    depositInterval: Long;
    validatorsetInterval: Long;
    commissionRate: string;
    unbondingEnabled: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.Params";
    value: Uint8Array;
}
export interface ParamsAmino {
    deposit_interval: string;
    validatorset_interval: string;
    commission_rate: string;
    unbonding_enabled: boolean;
}
export interface ParamsAminoMsg {
    type: "/quicksilver.interchainstaking.v1.Params";
    value: ParamsAmino;
}
export interface ParamsSDKType {
    deposit_interval: Long;
    validatorset_interval: Long;
    commission_rate: string;
    unbonding_enabled: boolean;
}
export interface DelegationsForZone {
    chainId: string;
    delegations: Delegation[];
}
export interface DelegationsForZoneProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegationsForZone";
    value: Uint8Array;
}
export interface DelegationsForZoneAmino {
    chain_id: string;
    delegations: DelegationAmino[];
}
export interface DelegationsForZoneAminoMsg {
    type: "/quicksilver.interchainstaking.v1.DelegationsForZone";
    value: DelegationsForZoneAmino;
}
export interface DelegationsForZoneSDKType {
    chain_id: string;
    delegations: DelegationSDKType[];
}
export interface DelegatorIntentsForZone {
    chainId: string;
    delegationIntent: DelegatorIntent[];
    snapshot: boolean;
}
export interface DelegatorIntentsForZoneProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.DelegatorIntentsForZone";
    value: Uint8Array;
}
export interface DelegatorIntentsForZoneAmino {
    chain_id: string;
    delegation_intent: DelegatorIntentAmino[];
    snapshot: boolean;
}
export interface DelegatorIntentsForZoneAminoMsg {
    type: "/quicksilver.interchainstaking.v1.DelegatorIntentsForZone";
    value: DelegatorIntentsForZoneAmino;
}
export interface DelegatorIntentsForZoneSDKType {
    chain_id: string;
    delegation_intent: DelegatorIntentSDKType[];
    snapshot: boolean;
}
/** GenesisState defines the interchainstaking module's genesis state. */
export interface GenesisState {
    params: Params;
    zones: Zone[];
    receipts: Receipt[];
    delegations: DelegationsForZone[];
    performanceDelegations: DelegationsForZone[];
    delegatorIntents: DelegatorIntentsForZone[];
    portConnections: PortConnectionTuple[];
    withdrawalRecords: WithdrawalRecord[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/quicksilver.interchainstaking.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the interchainstaking module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    zones: ZoneAmino[];
    receipts: ReceiptAmino[];
    delegations: DelegationsForZoneAmino[];
    performance_delegations: DelegationsForZoneAmino[];
    delegator_intents: DelegatorIntentsForZoneAmino[];
    port_connections: PortConnectionTupleAmino[];
    withdrawal_records: WithdrawalRecordAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/quicksilver.interchainstaking.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the interchainstaking module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    zones: ZoneSDKType[];
    receipts: ReceiptSDKType[];
    delegations: DelegationsForZoneSDKType[];
    performance_delegations: DelegationsForZoneSDKType[];
    delegator_intents: DelegatorIntentsForZoneSDKType[];
    port_connections: PortConnectionTupleSDKType[];
    withdrawal_records: WithdrawalRecordSDKType[];
}
export declare const Params_v1: {
    typeUrl: string;
    encode(message: Params_v1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params_v1;
    fromJSON(object: any): Params_v1;
    toJSON(message: Params_v1): unknown;
    fromPartial(object: DeepPartial<Params_v1>): Params_v1;
    fromAmino(object: Params_v1Amino): Params_v1;
    toAmino(message: Params_v1): Params_v1Amino;
    fromAminoMsg(object: Params_v1AminoMsg): Params_v1;
    fromProtoMsg(message: Params_v1ProtoMsg): Params_v1;
    toProto(message: Params_v1): Uint8Array;
    toProtoMsg(message: Params_v1): Params_v1ProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial(object: DeepPartial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const DelegationsForZone: {
    typeUrl: string;
    encode(message: DelegationsForZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationsForZone;
    fromJSON(object: any): DelegationsForZone;
    toJSON(message: DelegationsForZone): unknown;
    fromPartial(object: DeepPartial<DelegationsForZone>): DelegationsForZone;
    fromAmino(object: DelegationsForZoneAmino): DelegationsForZone;
    toAmino(message: DelegationsForZone): DelegationsForZoneAmino;
    fromAminoMsg(object: DelegationsForZoneAminoMsg): DelegationsForZone;
    fromProtoMsg(message: DelegationsForZoneProtoMsg): DelegationsForZone;
    toProto(message: DelegationsForZone): Uint8Array;
    toProtoMsg(message: DelegationsForZone): DelegationsForZoneProtoMsg;
};
export declare const DelegatorIntentsForZone: {
    typeUrl: string;
    encode(message: DelegatorIntentsForZone, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorIntentsForZone;
    fromJSON(object: any): DelegatorIntentsForZone;
    toJSON(message: DelegatorIntentsForZone): unknown;
    fromPartial(object: DeepPartial<DelegatorIntentsForZone>): DelegatorIntentsForZone;
    fromAmino(object: DelegatorIntentsForZoneAmino): DelegatorIntentsForZone;
    toAmino(message: DelegatorIntentsForZone): DelegatorIntentsForZoneAmino;
    fromAminoMsg(object: DelegatorIntentsForZoneAminoMsg): DelegatorIntentsForZone;
    fromProtoMsg(message: DelegatorIntentsForZoneProtoMsg): DelegatorIntentsForZone;
    toProto(message: DelegatorIntentsForZone): Uint8Array;
    toProtoMsg(message: DelegatorIntentsForZone): DelegatorIntentsForZoneProtoMsg;
};
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
