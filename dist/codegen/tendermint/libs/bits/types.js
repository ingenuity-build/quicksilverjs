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
exports.BitArray = void 0;
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseBitArray() {
    return {
        bits: helpers_1.Long.ZERO,
        elems: []
    };
}
exports.BitArray = {
    typeUrl: "/tendermint.libs.bits.BitArray",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.bits.isZero()) {
            writer.uint32(8).int64(message.bits);
        }
        writer.uint32(18).fork();
        for (const v of message.elems) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBitArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bits = reader.int64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.elems.push(reader.uint64());
                        }
                    }
                    else {
                        message.elems.push(reader.uint64());
                    }
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
            bits: (0, helpers_1.isSet)(object.bits) ? helpers_1.Long.fromValue(object.bits) : helpers_1.Long.ZERO,
            elems: Array.isArray(object?.elems) ? object.elems.map((e) => helpers_1.Long.fromValue(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.bits !== undefined && (obj.bits = (message.bits || helpers_1.Long.ZERO).toString());
        if (message.elems) {
            obj.elems = message.elems.map(e => (e || helpers_1.Long.UZERO).toString());
        }
        else {
            obj.elems = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBitArray();
        message.bits = object.bits !== undefined && object.bits !== null ? helpers_1.Long.fromValue(object.bits) : helpers_1.Long.ZERO;
        message.elems = object.elems?.map(e => helpers_1.Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            bits: helpers_1.Long.fromString(object.bits),
            elems: Array.isArray(object?.elems) ? object.elems.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.bits = message.bits ? message.bits.toString() : undefined;
        if (message.elems) {
            obj.elems = message.elems.map(e => e);
        }
        else {
            obj.elems = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BitArray.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BitArray.decode(message.value);
    },
    toProto(message) {
        return exports.BitArray.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.libs.bits.BitArray",
            value: exports.BitArray.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map