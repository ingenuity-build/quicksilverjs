import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadata {
    /** Can be empty for no admin, or a valid quicksilver address */
    admin: string;
}
export interface DenomAuthorityMetadataProtoMsg {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.DenomAuthorityMetadata";
    value: Uint8Array;
}
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadataAmino {
    /** Can be empty for no admin, or a valid quicksilver address */
    admin: string;
}
export interface DenomAuthorityMetadataAminoMsg {
    type: "/quicksilver.tokenfactory.v1beta1.DenomAuthorityMetadata";
    value: DenomAuthorityMetadataAmino;
}
/**
 * DenomAuthorityMetadata specifies metadata for addresses that have specific
 * capabilities over a token factory denom. Right now there is only one Admin
 * permission, but is planned to be extended to the future.
 */
export interface DenomAuthorityMetadataSDKType {
    admin: string;
}
export declare const DenomAuthorityMetadata: {
    typeUrl: string;
    encode(message: DenomAuthorityMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DenomAuthorityMetadata;
    fromJSON(object: any): DenomAuthorityMetadata;
    toJSON(message: DenomAuthorityMetadata): unknown;
    fromPartial(object: DeepPartial<DenomAuthorityMetadata>): DenomAuthorityMetadata;
    fromAmino(object: DenomAuthorityMetadataAmino): DenomAuthorityMetadata;
    toAmino(message: DenomAuthorityMetadata): DenomAuthorityMetadataAmino;
    fromAminoMsg(object: DenomAuthorityMetadataAminoMsg): DenomAuthorityMetadata;
    fromProtoMsg(message: DenomAuthorityMetadataProtoMsg): DenomAuthorityMetadata;
    toProto(message: DenomAuthorityMetadata): Uint8Array;
    toProtoMsg(message: DenomAuthorityMetadata): DenomAuthorityMetadataProtoMsg;
};
