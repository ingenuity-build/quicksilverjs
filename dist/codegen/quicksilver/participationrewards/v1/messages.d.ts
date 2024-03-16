import { ClaimType, Proof, ProofAmino, ProofSDKType } from "../../claimsmanager/v1/claimsmanager";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * MsgSubmitClaim represents a message type for submitting a participation
 * claim regarding the given zone (chain).
 */
export interface MsgSubmitClaim {
    user_address: string;
    zone: string;
    src_zone: string;
    claim_type: ClaimType;
    proofs: Proof[];
}
export interface MsgSubmitClaimProtoMsg {
    type_url: "/quicksilver.participationrewards.v1.MsgSubmitClaim";
    value: Uint8Array;
}
/**
 * MsgSubmitClaim represents a message type for submitting a participation
 * claim regarding the given zone (chain).
 */
export interface MsgSubmitClaimAmino {
    user_address: string;
    zone: string;
    src_zone: string;
    claim_type: ClaimType;
    proofs: ProofAmino[];
}
export interface MsgSubmitClaimAminoMsg {
    type: "/quicksilver.participationrewards.v1.MsgSubmitClaim";
    value: MsgSubmitClaimAmino;
}
/**
 * MsgSubmitClaim represents a message type for submitting a participation
 * claim regarding the given zone (chain).
 */
export interface MsgSubmitClaimSDKType {
    user_address: string;
    zone: string;
    src_zone: string;
    claim_type: ClaimType;
    proofs: ProofSDKType[];
}
/** MsgSubmitClaimResponse defines the MsgSubmitClaim response type. */
export interface MsgSubmitClaimResponse {
}
export interface MsgSubmitClaimResponseProtoMsg {
    type_url: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse";
    value: Uint8Array;
}
/** MsgSubmitClaimResponse defines the MsgSubmitClaim response type. */
export interface MsgSubmitClaimResponseAmino {
}
export interface MsgSubmitClaimResponseAminoMsg {
    type: "/quicksilver.participationrewards.v1.MsgSubmitClaimResponse";
    value: MsgSubmitClaimResponseAmino;
}
/** MsgSubmitClaimResponse defines the MsgSubmitClaim response type. */
export interface MsgSubmitClaimResponseSDKType {
}
export declare const MsgSubmitClaim: {
    typeUrl: string;
    encode(message: MsgSubmitClaim, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitClaim;
    fromJSON(object: any): MsgSubmitClaim;
    toJSON(message: MsgSubmitClaim): unknown;
    fromPartial(object: DeepPartial<MsgSubmitClaim>): MsgSubmitClaim;
    fromAmino(object: MsgSubmitClaimAmino): MsgSubmitClaim;
    toAmino(message: MsgSubmitClaim): MsgSubmitClaimAmino;
    fromAminoMsg(object: MsgSubmitClaimAminoMsg): MsgSubmitClaim;
    fromProtoMsg(message: MsgSubmitClaimProtoMsg): MsgSubmitClaim;
    toProto(message: MsgSubmitClaim): Uint8Array;
    toProtoMsg(message: MsgSubmitClaim): MsgSubmitClaimProtoMsg;
};
export declare const MsgSubmitClaimResponse: {
    typeUrl: string;
    encode(_: MsgSubmitClaimResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitClaimResponse;
    fromJSON(_: any): MsgSubmitClaimResponse;
    toJSON(_: MsgSubmitClaimResponse): unknown;
    fromPartial(_: DeepPartial<MsgSubmitClaimResponse>): MsgSubmitClaimResponse;
    fromAmino(_: MsgSubmitClaimResponseAmino): MsgSubmitClaimResponse;
    toAmino(_: MsgSubmitClaimResponse): MsgSubmitClaimResponseAmino;
    fromAminoMsg(object: MsgSubmitClaimResponseAminoMsg): MsgSubmitClaimResponse;
    fromProtoMsg(message: MsgSubmitClaimResponseProtoMsg): MsgSubmitClaimResponse;
    toProto(message: MsgSubmitClaimResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitClaimResponse): MsgSubmitClaimResponseProtoMsg;
};
