"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureDescriptor_Data_Multi = exports.SignatureDescriptor_Data_Single = exports.SignatureDescriptor_Data = exports.SignatureDescriptor = exports.SignatureDescriptors = exports.signModeToJSON = exports.signModeFromJSON = exports.SignModeAmino = exports.SignModeSDKType = exports.SignMode = void 0;
const multisig_1 = require("../../../crypto/multisig/v1beta1/multisig");
const any_1 = require("../../../../google/protobuf/any");
const helpers_1 = require("../../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
/**
 * SignMode represents a signing mode with its own security guarantees.
 *
 * This enum should be considered a registry of all known sign modes
 * in the Cosmos ecosystem. Apps are not expected to support all known
 * sign modes. Apps that would like to support custom  sign modes are
 * encouraged to open a small PR against this file to add a new case
 * to this SignMode enum describing their sign mode so that different
 * apps have a consistent version of this enum.
 */
var SignMode;
(function (SignMode) {
    /**
     * SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
     * rejected.
     */
    SignMode[SignMode["SIGN_MODE_UNSPECIFIED"] = 0] = "SIGN_MODE_UNSPECIFIED";
    /**
     * SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
     * verified with raw bytes from Tx.
     */
    SignMode[SignMode["SIGN_MODE_DIRECT"] = 1] = "SIGN_MODE_DIRECT";
    /**
     * SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
     * human-readable textual representation on top of the binary representation
     * from SIGN_MODE_DIRECT. It is currently not supported.
     */
    SignMode[SignMode["SIGN_MODE_TEXTUAL"] = 2] = "SIGN_MODE_TEXTUAL";
    /**
     * SIGN_MODE_DIRECT_AUX - SIGN_MODE_DIRECT_AUX specifies a signing mode which uses
     * SignDocDirectAux. As opposed to SIGN_MODE_DIRECT, this sign mode does not
     * require signers signing over other signers' `signer_info`. It also allows
     * for adding Tips in transactions.
     *
     * Since: cosmos-sdk 0.46
     */
    SignMode[SignMode["SIGN_MODE_DIRECT_AUX"] = 3] = "SIGN_MODE_DIRECT_AUX";
    /**
     * SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
     * Amino JSON and will be removed in the future.
     */
    SignMode[SignMode["SIGN_MODE_LEGACY_AMINO_JSON"] = 127] = "SIGN_MODE_LEGACY_AMINO_JSON";
    SignMode[SignMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignMode || (exports.SignMode = SignMode = {}));
exports.SignModeSDKType = SignMode;
exports.SignModeAmino = SignMode;
function signModeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGN_MODE_UNSPECIFIED":
            return SignMode.SIGN_MODE_UNSPECIFIED;
        case 1:
        case "SIGN_MODE_DIRECT":
            return SignMode.SIGN_MODE_DIRECT;
        case 2:
        case "SIGN_MODE_TEXTUAL":
            return SignMode.SIGN_MODE_TEXTUAL;
        case 3:
        case "SIGN_MODE_DIRECT_AUX":
            return SignMode.SIGN_MODE_DIRECT_AUX;
        case 127:
        case "SIGN_MODE_LEGACY_AMINO_JSON":
            return SignMode.SIGN_MODE_LEGACY_AMINO_JSON;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignMode.UNRECOGNIZED;
    }
}
exports.signModeFromJSON = signModeFromJSON;
function signModeToJSON(object) {
    switch (object) {
        case SignMode.SIGN_MODE_UNSPECIFIED:
            return "SIGN_MODE_UNSPECIFIED";
        case SignMode.SIGN_MODE_DIRECT:
            return "SIGN_MODE_DIRECT";
        case SignMode.SIGN_MODE_TEXTUAL:
            return "SIGN_MODE_TEXTUAL";
        case SignMode.SIGN_MODE_DIRECT_AUX:
            return "SIGN_MODE_DIRECT_AUX";
        case SignMode.SIGN_MODE_LEGACY_AMINO_JSON:
            return "SIGN_MODE_LEGACY_AMINO_JSON";
        case SignMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.signModeToJSON = signModeToJSON;
function createBaseSignatureDescriptors() {
    return {
        signatures: []
    };
}
exports.SignatureDescriptors = {
    typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptors",
    aminoType: "cosmos-sdk/SignatureDescriptors",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.signatures) {
            exports.SignatureDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureDescriptors();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatures.push(exports.SignatureDescriptor.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.SignatureDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? exports.SignatureDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignatureDescriptors();
        message.signatures = object.signatures?.map(e => exports.SignatureDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.SignatureDescriptor.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? exports.SignatureDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignatureDescriptors.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignatureDescriptors",
            value: exports.SignatureDescriptors.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignatureDescriptors.decode(message.value);
    },
    toProto(message) {
        return exports.SignatureDescriptors.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptors",
            value: exports.SignatureDescriptors.encode(message).finish()
        };
    }
};
function createBaseSignatureDescriptor() {
    return {
        public_key: any_1.Any.fromPartial({}),
        data: Data.fromPartial({}),
        sequence: helpers_1.Long.UZERO
    };
}
exports.SignatureDescriptor = {
    typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptor",
    aminoType: "cosmos-sdk/SignatureDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.public_key !== undefined) {
            any_1.Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            exports.SignatureDescriptor_Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (!message.sequence.isZero()) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.public_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = exports.SignatureDescriptor_Data.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sequence = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            public_key: (0, helpers_1.isSet)(object.public_key) ? any_1.Any.fromJSON(object.public_key) : undefined,
            data: (0, helpers_1.isSet)(object.data) ? exports.SignatureDescriptor_Data.fromJSON(object.data) : undefined,
            sequence: (0, helpers_1.isSet)(object.sequence) ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.public_key !== undefined && (obj.public_key = message.public_key ? any_1.Any.toJSON(message.public_key) : undefined);
        message.data !== undefined && (obj.data = message.data ? exports.SignatureDescriptor_Data.toJSON(message.data) : undefined);
        message.sequence !== undefined && (obj.sequence = (message.sequence || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignatureDescriptor();
        message.public_key = object.public_key !== undefined && object.public_key !== null ? any_1.Any.fromPartial(object.public_key) : undefined;
        message.data = object.data !== undefined && object.data !== null ? exports.SignatureDescriptor_Data.fromPartial(object.data) : undefined;
        message.sequence = object.sequence !== undefined && object.sequence !== null ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            public_key: object?.public_key ? any_1.Any.fromAmino(object.public_key) : undefined,
            data: object?.data ? exports.SignatureDescriptor_Data.fromAmino(object.data) : undefined,
            sequence: helpers_1.Long.fromString(object.sequence)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.public_key = message.public_key ? any_1.Any.toAmino(message.public_key) : undefined;
        obj.data = message.data ? exports.SignatureDescriptor_Data.toAmino(message.data) : undefined;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignatureDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignatureDescriptor",
            value: exports.SignatureDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignatureDescriptor.decode(message.value);
    },
    toProto(message) {
        return exports.SignatureDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptor",
            value: exports.SignatureDescriptor.encode(message).finish()
        };
    }
};
function createBaseSignatureDescriptor_Data() {
    return {
        single: undefined,
        multi: undefined
    };
}
exports.SignatureDescriptor_Data = {
    typeUrl: "/cosmos.tx.signing.v1beta1.Data",
    aminoType: "cosmos-sdk/Data",
    encode(message, writer = _m0.Writer.create()) {
        if (message.single !== undefined) {
            exports.SignatureDescriptor_Data_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.SignatureDescriptor_Data_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureDescriptor_Data();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = exports.SignatureDescriptor_Data_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = exports.SignatureDescriptor_Data_Multi.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            single: (0, helpers_1.isSet)(object.single) ? exports.SignatureDescriptor_Data_Single.fromJSON(object.single) : undefined,
            multi: (0, helpers_1.isSet)(object.multi) ? exports.SignatureDescriptor_Data_Multi.fromJSON(object.multi) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.single !== undefined && (obj.single = message.single ? exports.SignatureDescriptor_Data_Single.toJSON(message.single) : undefined);
        message.multi !== undefined && (obj.multi = message.multi ? exports.SignatureDescriptor_Data_Multi.toJSON(message.multi) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignatureDescriptor_Data();
        message.single = object.single !== undefined && object.single !== null ? exports.SignatureDescriptor_Data_Single.fromPartial(object.single) : undefined;
        message.multi = object.multi !== undefined && object.multi !== null ? exports.SignatureDescriptor_Data_Multi.fromPartial(object.multi) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            single: object?.single ? exports.SignatureDescriptor_Data_Single.fromAmino(object.single) : undefined,
            multi: object?.multi ? exports.SignatureDescriptor_Data_Multi.fromAmino(object.multi) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.single = message.single ? exports.SignatureDescriptor_Data_Single.toAmino(message.single) : undefined;
        obj.multi = message.multi ? exports.SignatureDescriptor_Data_Multi.toAmino(message.multi) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignatureDescriptor_Data.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Data",
            value: exports.SignatureDescriptor_Data.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignatureDescriptor_Data.decode(message.value);
    },
    toProto(message) {
        return exports.SignatureDescriptor_Data.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.signing.v1beta1.Data",
            value: exports.SignatureDescriptor_Data.encode(message).finish()
        };
    }
};
function createBaseSignatureDescriptor_Data_Single() {
    return {
        mode: 0,
        signature: new Uint8Array()
    };
}
exports.SignatureDescriptor_Data_Single = {
    typeUrl: "/cosmos.tx.signing.v1beta1.Single",
    aminoType: "cosmos-sdk/Single",
    encode(message, writer = _m0.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureDescriptor_Data_Single();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
                    break;
                case 2:
                    message.signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            mode: (0, helpers_1.isSet)(object.mode) ? signModeFromJSON(object.mode) : -1,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined && (obj.mode = signModeToJSON(message.mode));
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignatureDescriptor_Data_Single();
        message.mode = object.mode ?? 0;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            mode: (0, helpers_1.isSet)(object.mode) ? signModeFromJSON(object.mode) : -1,
            signature: object.signature
        };
    },
    toAmino(message) {
        const obj = {};
        obj.mode = message.mode;
        obj.signature = message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignatureDescriptor_Data_Single.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Single",
            value: exports.SignatureDescriptor_Data_Single.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignatureDescriptor_Data_Single.decode(message.value);
    },
    toProto(message) {
        return exports.SignatureDescriptor_Data_Single.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.signing.v1beta1.Single",
            value: exports.SignatureDescriptor_Data_Single.encode(message).finish()
        };
    }
};
function createBaseSignatureDescriptor_Data_Multi() {
    return {
        bitarray: multisig_1.CompactBitArray.fromPartial({}),
        signatures: []
    };
}
exports.SignatureDescriptor_Data_Multi = {
    typeUrl: "/cosmos.tx.signing.v1beta1.Multi",
    aminoType: "cosmos-sdk/Multi",
    encode(message, writer = _m0.Writer.create()) {
        if (message.bitarray !== undefined) {
            multisig_1.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.SignatureDescriptor_Data.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureDescriptor_Data_Multi();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = multisig_1.CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signatures.push(exports.SignatureDescriptor_Data.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            bitarray: (0, helpers_1.isSet)(object.bitarray) ? multisig_1.CompactBitArray.fromJSON(object.bitarray) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.SignatureDescriptor_Data.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.bitarray !== undefined && (obj.bitarray = message.bitarray ? multisig_1.CompactBitArray.toJSON(message.bitarray) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? exports.SignatureDescriptor_Data.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignatureDescriptor_Data_Multi();
        message.bitarray = object.bitarray !== undefined && object.bitarray !== null ? multisig_1.CompactBitArray.fromPartial(object.bitarray) : undefined;
        message.signatures = object.signatures?.map(e => exports.SignatureDescriptor_Data.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            bitarray: object?.bitarray ? multisig_1.CompactBitArray.fromAmino(object.bitarray) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.SignatureDescriptor_Data.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.bitarray = message.bitarray ? multisig_1.CompactBitArray.toAmino(message.bitarray) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? exports.SignatureDescriptor_Data.toAmino(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignatureDescriptor_Data_Multi.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Multi",
            value: exports.SignatureDescriptor_Data_Multi.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignatureDescriptor_Data_Multi.decode(message.value);
    },
    toProto(message) {
        return exports.SignatureDescriptor_Data_Multi.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.signing.v1beta1.Multi",
            value: exports.SignatureDescriptor_Data_Multi.encode(message).finish()
        };
    }
};
//# sourceMappingURL=signing.js.map