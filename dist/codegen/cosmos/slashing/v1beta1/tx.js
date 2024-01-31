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
exports.MsgUnjailResponse = exports.MsgUnjail = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseMsgUnjail() {
    return {
        validator_addr: ""
    };
}
exports.MsgUnjail = {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
    aminoType: "cosmos-sdk/MsgUnjail",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnjail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_addr = reader.string();
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
            validator_addr: (0, helpers_1.isSet)(object.validator_addr) ? String(object.validator_addr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnjail();
        message.validator_addr = object.validator_addr ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validator_addr: object.validator_addr
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validator_addr;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnjail.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUnjail",
            value: exports.MsgUnjail.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnjail.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnjail.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
            value: exports.MsgUnjail.encode(message).finish()
        };
    }
};
function createBaseMsgUnjailResponse() {
    return {};
}
exports.MsgUnjailResponse = {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
    aminoType: "cosmos-sdk/MsgUnjailResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnjailResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUnjailResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnjailResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUnjailResponse",
            value: exports.MsgUnjailResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnjailResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnjailResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
            value: exports.MsgUnjailResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map