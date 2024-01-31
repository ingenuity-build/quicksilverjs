import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataAmino, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
    /** params defines the paramaters of the module. */
    params: Params;
    factory_denoms: GenesisDenom[];
}
export interface GenesisStateProtoMsg {
    type_url: "/quicksilver.tokenfactory.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateAmino {
    /** params defines the paramaters of the module. */
    params?: ParamsAmino;
    factory_denoms: GenesisDenomAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/quicksilver.tokenfactory.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    factory_denoms: GenesisDenomSDKType[];
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenom {
    denom: string;
    authority_metadata: DenomAuthorityMetadata;
}
export interface GenesisDenomProtoMsg {
    type_url: "/quicksilver.tokenfactory.v1beta1.GenesisDenom";
    value: Uint8Array;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomAmino {
    denom: string;
    authority_metadata?: DenomAuthorityMetadataAmino;
}
export interface GenesisDenomAminoMsg {
    type: "/quicksilver.tokenfactory.v1beta1.GenesisDenom";
    value: GenesisDenomAmino;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomSDKType {
    denom: string;
    authority_metadata: DenomAuthorityMetadataSDKType;
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
export declare const GenesisDenom: {
    typeUrl: string;
    encode(message: GenesisDenom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisDenom;
    fromJSON(object: any): GenesisDenom;
    toJSON(message: GenesisDenom): unknown;
    fromPartial(object: DeepPartial<GenesisDenom>): GenesisDenom;
    fromAmino(object: GenesisDenomAmino): GenesisDenom;
    toAmino(message: GenesisDenom): GenesisDenomAmino;
    fromAminoMsg(object: GenesisDenomAminoMsg): GenesisDenom;
    fromProtoMsg(message: GenesisDenomProtoMsg): GenesisDenom;
    toProto(message: GenesisDenom): Uint8Array;
    toProtoMsg(message: GenesisDenom): GenesisDenomProtoMsg;
};
