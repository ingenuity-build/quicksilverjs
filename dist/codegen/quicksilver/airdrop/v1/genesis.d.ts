import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { ZoneDrop, ZoneDropAmino, ZoneDropSDKType, ClaimRecord, ClaimRecordAmino, ClaimRecordSDKType } from "./airdrop";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisState {
    params: Params;
    zone_drops: ZoneDrop[];
    claim_records: ClaimRecord[];
}
export interface GenesisStateProtoMsg {
    type_url: "/quicksilver.airdrop.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    zone_drops: ZoneDropAmino[];
    claim_records: ClaimRecordAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/quicksilver.airdrop.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the airdrop module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    zone_drops: ZoneDropSDKType[];
    claim_records: ClaimRecordSDKType[];
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
