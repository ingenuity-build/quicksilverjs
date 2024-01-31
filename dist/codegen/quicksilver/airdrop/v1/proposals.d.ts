import { ZoneDrop, ZoneDropAmino, ZoneDropSDKType } from "./airdrop";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
export interface RegisterZoneDropProposal {
    title: string;
    description: string;
    zone_drop: ZoneDrop;
    claim_records: Uint8Array;
}
export interface RegisterZoneDropProposalProtoMsg {
    type_url: "/quicksilver.airdrop.v1.RegisterZoneDropProposal";
    value: Uint8Array;
}
export interface RegisterZoneDropProposalAmino {
    title: string;
    description: string;
    zone_drop?: ZoneDropAmino;
    claim_records: Uint8Array;
}
export interface RegisterZoneDropProposalAminoMsg {
    type: "/quicksilver.airdrop.v1.RegisterZoneDropProposal";
    value: RegisterZoneDropProposalAmino;
}
export interface RegisterZoneDropProposalSDKType {
    title: string;
    description: string;
    zone_drop: ZoneDropSDKType;
    claim_records: Uint8Array;
}
export declare const RegisterZoneDropProposal: {
    typeUrl: string;
    encode(message: RegisterZoneDropProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RegisterZoneDropProposal;
    fromJSON(object: any): RegisterZoneDropProposal;
    toJSON(message: RegisterZoneDropProposal): unknown;
    fromPartial(object: DeepPartial<RegisterZoneDropProposal>): RegisterZoneDropProposal;
    fromAmino(object: RegisterZoneDropProposalAmino): RegisterZoneDropProposal;
    toAmino(message: RegisterZoneDropProposal): RegisterZoneDropProposalAmino;
    fromAminoMsg(object: RegisterZoneDropProposalAminoMsg): RegisterZoneDropProposal;
    fromProtoMsg(message: RegisterZoneDropProposalProtoMsg): RegisterZoneDropProposal;
    toProto(message: RegisterZoneDropProposal): Uint8Array;
    toProtoMsg(message: RegisterZoneDropProposal): RegisterZoneDropProposalProtoMsg;
};
