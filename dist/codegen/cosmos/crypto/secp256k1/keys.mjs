import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBasePubKey() {
    return {
        key: new Uint8Array()
    };
}
export const PubKey = {
    typeUrl: "/cosmos.crypto.secp256k1.PubKey",
    aminoType: "cosmos-sdk/PubKey",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePubKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePubKey();
        message.key = object.key ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        return obj;
    },
    fromAminoMsg(object) {
        return PubKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PubKey",
            value: PubKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PubKey.decode(message.value);
    },
    toProto(message) {
        return PubKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: PubKey.encode(message).finish()
        };
    }
};
function createBasePrivKey() {
    return {
        key: new Uint8Array()
    };
}
export const PrivKey = {
    typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
    aminoType: "cosmos-sdk/PrivKey",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePrivKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePrivKey();
        message.key = object.key ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        return obj;
    },
    fromAminoMsg(object) {
        return PrivKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PrivKey",
            value: PrivKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PrivKey.decode(message.value);
    },
    toProto(message) {
        return PrivKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.secp256k1.PrivKey",
            value: PrivKey.encode(message).finish()
        };
    }
};
//# sourceMappingURL=keys.js.map