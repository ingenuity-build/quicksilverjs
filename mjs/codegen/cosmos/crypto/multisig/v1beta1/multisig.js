import * as _m0 from "protobufjs/minimal";
import { bytesFromBase64, base64FromBytes, isSet } from "../../../../helpers";
function createBaseMultiSignature() {
    return {
        signatures: []
    };
}
export const MultiSignature = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
    aminoType: "cosmos-sdk/MultiSignature",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.signatures) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultiSignature();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatures.push(reader.bytes());
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
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => bytesFromBase64(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMultiSignature();
        message.signatures = object.signatures?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MultiSignature.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MultiSignature",
            value: MultiSignature.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MultiSignature.decode(message.value);
    },
    toProto(message) {
        return MultiSignature.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.v1beta1.MultiSignature",
            value: MultiSignature.encode(message).finish()
        };
    }
};
function createBaseCompactBitArray() {
    return {
        extra_bits_stored: 0,
        elems: new Uint8Array()
    };
}
export const CompactBitArray = {
    typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
    aminoType: "cosmos-sdk/CompactBitArray",
    encode(message, writer = _m0.Writer.create()) {
        if (message.extra_bits_stored !== 0) {
            writer.uint32(8).uint32(message.extra_bits_stored);
        }
        if (message.elems.length !== 0) {
            writer.uint32(18).bytes(message.elems);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompactBitArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extra_bits_stored = reader.uint32();
                    break;
                case 2:
                    message.elems = reader.bytes();
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
            extra_bits_stored: isSet(object.extra_bits_stored) ? Number(object.extra_bits_stored) : 0,
            elems: isSet(object.elems) ? bytesFromBase64(object.elems) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.extra_bits_stored !== undefined && (obj.extra_bits_stored = Math.round(message.extra_bits_stored));
        message.elems !== undefined && (obj.elems = base64FromBytes(message.elems !== undefined ? message.elems : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCompactBitArray();
        message.extra_bits_stored = object.extra_bits_stored ?? 0;
        message.elems = object.elems ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            extra_bits_stored: object.extra_bits_stored,
            elems: object.elems
        };
    },
    toAmino(message) {
        const obj = {};
        obj.extra_bits_stored = message.extra_bits_stored;
        obj.elems = message.elems;
        return obj;
    },
    fromAminoMsg(object) {
        return CompactBitArray.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CompactBitArray",
            value: CompactBitArray.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CompactBitArray.decode(message.value);
    },
    toProto(message) {
        return CompactBitArray.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.v1beta1.CompactBitArray",
            value: CompactBitArray.encode(message).finish()
        };
    }
};
//# sourceMappingURL=multisig.js.map