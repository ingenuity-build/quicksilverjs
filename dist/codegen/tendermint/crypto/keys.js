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
exports.PublicKey = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../helpers");
function createBasePublicKey() {
    return {
        ed25519: undefined,
        secp256k1: undefined
    };
}
exports.PublicKey = {
    typeUrl: "/tendermint.crypto.PublicKey",
    encode(message, writer = _m0.Writer.create()) {
        if (message.ed25519 !== undefined) {
            writer.uint32(10).bytes(message.ed25519);
        }
        if (message.secp256k1 !== undefined) {
            writer.uint32(18).bytes(message.secp256k1);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublicKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ed25519 = reader.bytes();
                    break;
                case 2:
                    message.secp256k1 = reader.bytes();
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
            ed25519: (0, helpers_1.isSet)(object.ed25519) ? (0, helpers_1.bytesFromBase64)(object.ed25519) : undefined,
            secp256k1: (0, helpers_1.isSet)(object.secp256k1) ? (0, helpers_1.bytesFromBase64)(object.secp256k1) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.ed25519 !== undefined && (obj.ed25519 = message.ed25519 !== undefined ? (0, helpers_1.base64FromBytes)(message.ed25519) : undefined);
        message.secp256k1 !== undefined && (obj.secp256k1 = message.secp256k1 !== undefined ? (0, helpers_1.base64FromBytes)(message.secp256k1) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePublicKey();
        message.ed25519 = object.ed25519 ?? undefined;
        message.secp256k1 = object.secp256k1 ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            ed25519: object?.ed25519,
            secp256k1: object?.secp256k1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.ed25519 = message.ed25519;
        obj.secp256k1 = message.secp256k1;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PublicKey.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PublicKey.decode(message.value);
    },
    toProto(message) {
        return exports.PublicKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.crypto.PublicKey",
            value: exports.PublicKey.encode(message).finish()
        };
    }
};
//# sourceMappingURL=keys.js.map