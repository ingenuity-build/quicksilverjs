import { CompactBitArray, CompactBitArraySDKType } from "../../../crypto/multisig/v1beta1/multisig";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long } from "../../../../helpers";
/** SignMode represents a signing mode with its own security guarantees. */
export declare enum SignMode {
    /**
     * SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
     * rejected
     */
    SIGN_MODE_UNSPECIFIED = 0,
    /**
     * SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
     * verified with raw bytes from Tx
     */
    SIGN_MODE_DIRECT = 1,
    /**
     * SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
     * human-readable textual representation on top of the binary representation
     * from SIGN_MODE_DIRECT
     */
    SIGN_MODE_TEXTUAL = 2,
    /**
     * SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
     * Amino JSON and will be removed in the future
     */
    SIGN_MODE_LEGACY_AMINO_JSON = 127,
    UNRECOGNIZED = -1
}
/** SignMode represents a signing mode with its own security guarantees. */
export declare enum SignModeSDKType {
    /**
     * SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
     * rejected
     */
    SIGN_MODE_UNSPECIFIED = 0,
    /**
     * SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
     * verified with raw bytes from Tx
     */
    SIGN_MODE_DIRECT = 1,
    /**
     * SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
     * human-readable textual representation on top of the binary representation
     * from SIGN_MODE_DIRECT
     */
    SIGN_MODE_TEXTUAL = 2,
    /**
     * SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
     * Amino JSON and will be removed in the future
     */
    SIGN_MODE_LEGACY_AMINO_JSON = 127,
    UNRECOGNIZED = -1
}
export declare function signModeFromJSON(object: any): SignMode;
export declare function signModeToJSON(object: SignMode): string;
/** SignatureDescriptors wraps multiple SignatureDescriptor's. */
export interface SignatureDescriptors {
    /** signatures are the signature descriptors */
    signatures: SignatureDescriptor[];
}
/** SignatureDescriptors wraps multiple SignatureDescriptor's. */
export interface SignatureDescriptorsSDKType {
    /** signatures are the signature descriptors */
    signatures: SignatureDescriptorSDKType[];
}
/**
 * SignatureDescriptor is a convenience type which represents the full data for
 * a signature including the public key of the signer, signing modes and the
 * signature itself. It is primarily used for coordinating signatures between
 * clients.
 */
export interface SignatureDescriptor {
    /** public_key is the public key of the signer */
    publicKey?: Any;
    data?: SignatureDescriptor_Data;
    /**
     * sequence is the sequence of the account, which describes the
     * number of committed transactions signed by a given address. It is used to prevent
     * replay attacks.
     */
    sequence: Long;
}
/**
 * SignatureDescriptor is a convenience type which represents the full data for
 * a signature including the public key of the signer, signing modes and the
 * signature itself. It is primarily used for coordinating signatures between
 * clients.
 */
export interface SignatureDescriptorSDKType {
    /** public_key is the public key of the signer */
    public_key?: AnySDKType;
    data?: SignatureDescriptor_DataSDKType;
    /**
     * sequence is the sequence of the account, which describes the
     * number of committed transactions signed by a given address. It is used to prevent
     * replay attacks.
     */
    sequence: Long;
}
/** Data represents signature data */
export interface SignatureDescriptor_Data {
    /** single represents a single signer */
    single?: SignatureDescriptor_Data_Single;
    /** multi represents a multisig signer */
    multi?: SignatureDescriptor_Data_Multi;
}
/** Data represents signature data */
export interface SignatureDescriptor_DataSDKType {
    /** single represents a single signer */
    single?: SignatureDescriptor_Data_SingleSDKType;
    /** multi represents a multisig signer */
    multi?: SignatureDescriptor_Data_MultiSDKType;
}
/** Single is the signature data for a single signer */
export interface SignatureDescriptor_Data_Single {
    /** mode is the signing mode of the single signer */
    mode: SignMode;
    /** signature is the raw signature bytes */
    signature: Uint8Array;
}
/** Single is the signature data for a single signer */
export interface SignatureDescriptor_Data_SingleSDKType {
    /** mode is the signing mode of the single signer */
    mode: SignModeSDKType;
    /** signature is the raw signature bytes */
    signature: Uint8Array;
}
/** Multi is the signature data for a multisig public key */
export interface SignatureDescriptor_Data_Multi {
    /** bitarray specifies which keys within the multisig are signing */
    bitarray?: CompactBitArray;
    /** signatures is the signatures of the multi-signature */
    signatures: SignatureDescriptor_Data[];
}
/** Multi is the signature data for a multisig public key */
export interface SignatureDescriptor_Data_MultiSDKType {
    /** bitarray specifies which keys within the multisig are signing */
    bitarray?: CompactBitArraySDKType;
    /** signatures is the signatures of the multi-signature */
    signatures: SignatureDescriptor_DataSDKType[];
}
export declare const SignatureDescriptors: {
    encode(message: SignatureDescriptors, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptors;
    fromJSON(object: any): SignatureDescriptors;
    toJSON(message: SignatureDescriptors): unknown;
    fromPartial(object: Partial<SignatureDescriptors>): SignatureDescriptors;
};
export declare const SignatureDescriptor: {
    encode(message: SignatureDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptor;
    fromJSON(object: any): SignatureDescriptor;
    toJSON(message: SignatureDescriptor): unknown;
    fromPartial(object: Partial<SignatureDescriptor>): SignatureDescriptor;
};
export declare const SignatureDescriptor_Data: {
    encode(message: SignatureDescriptor_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptor_Data;
    fromJSON(object: any): SignatureDescriptor_Data;
    toJSON(message: SignatureDescriptor_Data): unknown;
    fromPartial(object: Partial<SignatureDescriptor_Data>): SignatureDescriptor_Data;
};
export declare const SignatureDescriptor_Data_Single: {
    encode(message: SignatureDescriptor_Data_Single, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptor_Data_Single;
    fromJSON(object: any): SignatureDescriptor_Data_Single;
    toJSON(message: SignatureDescriptor_Data_Single): unknown;
    fromPartial(object: Partial<SignatureDescriptor_Data_Single>): SignatureDescriptor_Data_Single;
};
export declare const SignatureDescriptor_Data_Multi: {
    encode(message: SignatureDescriptor_Data_Multi, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptor_Data_Multi;
    fromJSON(object: any): SignatureDescriptor_Data_Multi;
    toJSON(message: SignatureDescriptor_Data_Multi): unknown;
    fromPartial(object: Partial<SignatureDescriptor_Data_Multi>): SignatureDescriptor_Data_Multi;
};
