import { Params, ParamsAmino, ParamsSDKType, Claim, ClaimAmino, ClaimSDKType } from "./claimsmanager";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the claimsmanager module's genesis state. */
export interface GenesisState {
    params: Params;
    claims: Claim[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/quicksilver.claimsmanager.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the claimsmanager module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    claims: ClaimAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/quicksilver.claimsmanager.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the claimsmanager module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    claims: ClaimSDKType[];
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
