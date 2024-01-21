import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/** Params holds parameters for the airdrop module. */
export interface Params {
}
export interface ParamsProtoMsg {
    typeUrl: "/quicksilver.airdrop.v1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the airdrop module. */
export interface ParamsAmino {
}
export interface ParamsAminoMsg {
    type: "/quicksilver.airdrop.v1.Params";
    value: ParamsAmino;
}
/** Params holds parameters for the airdrop module. */
export interface ParamsSDKType {
}
export declare const Params: {
    typeUrl: string;
    encode(_: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(_: any): Params;
    toJSON(_: Params): unknown;
    fromPartial(_: DeepPartial<Params>): Params;
    fromAmino(_: ParamsAmino): Params;
    toAmino(_: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
