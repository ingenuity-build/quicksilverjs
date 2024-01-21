import { Params, ParamsAmino, ParamsSDKType, KeyedProtocolData, KeyedProtocolDataAmino, KeyedProtocolDataSDKType } from "./participationrewards";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the participationrewards module's genesis state. */
export interface GenesisState {
    params: Params;
    protocolData: KeyedProtocolData[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/quicksilver.participationrewards.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the participationrewards module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    protocol_data: KeyedProtocolDataAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/quicksilver.participationrewards.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the participationrewards module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    protocol_data: KeyedProtocolDataSDKType[];
}
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
