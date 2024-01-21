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
exports.MsgSignalIntentResponse = exports.MsgSignalIntent = exports.MsgRequestRedemptionResponse = exports.MsgRequestRedemption = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseMsgRequestRedemption() {
    return {
        value: coin_1.Coin.fromPartial({}),
        destinationAddress: "",
        fromAddress: ""
    };
}
exports.MsgRequestRedemption = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            coin_1.Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        if (message.destinationAddress !== "") {
            writer.uint32(18).string(message.destinationAddress);
        }
        if (message.fromAddress !== "") {
            writer.uint32(26).string(message.fromAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestRedemption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.destinationAddress = reader.string();
                    break;
                case 3:
                    message.fromAddress = reader.string();
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
            value: (0, helpers_1.isSet)(object.value) ? coin_1.Coin.fromJSON(object.value) : undefined,
            destinationAddress: (0, helpers_1.isSet)(object.destinationAddress) ? String(object.destinationAddress) : "",
            fromAddress: (0, helpers_1.isSet)(object.fromAddress) ? String(object.fromAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? coin_1.Coin.toJSON(message.value) : undefined);
        message.destinationAddress !== undefined && (obj.destinationAddress = message.destinationAddress);
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRequestRedemption();
        message.value = object.value !== undefined && object.value !== null ? coin_1.Coin.fromPartial(object.value) : undefined;
        message.destinationAddress = object.destinationAddress ?? "";
        message.fromAddress = object.fromAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            value: object?.value ? coin_1.Coin.fromAmino(object.value) : undefined,
            destinationAddress: object.destination_address,
            fromAddress: object.from_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value ? coin_1.Coin.toAmino(message.value) : undefined;
        obj.destination_address = message.destinationAddress;
        obj.from_address = message.fromAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRequestRedemption.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRequestRedemption.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRequestRedemption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
            value: exports.MsgRequestRedemption.encode(message).finish()
        };
    }
};
function createBaseMsgRequestRedemptionResponse() {
    return {};
}
exports.MsgRequestRedemptionResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemptionResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestRedemptionResponse();
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
        const message = createBaseMsgRequestRedemptionResponse();
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
        return exports.MsgRequestRedemptionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgRequestRedemptionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRequestRedemptionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemptionResponse",
            value: exports.MsgRequestRedemptionResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSignalIntent() {
    return {
        chainId: "",
        intents: "",
        fromAddress: ""
    };
}
exports.MsgSignalIntent = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.intents !== "") {
            writer.uint32(18).string(message.intents);
        }
        if (message.fromAddress !== "") {
            writer.uint32(26).string(message.fromAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignalIntent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.intents = reader.string();
                    break;
                case 3:
                    message.fromAddress = reader.string();
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            intents: (0, helpers_1.isSet)(object.intents) ? String(object.intents) : "",
            fromAddress: (0, helpers_1.isSet)(object.fromAddress) ? String(object.fromAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.intents !== undefined && (obj.intents = message.intents);
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSignalIntent();
        message.chainId = object.chainId ?? "";
        message.intents = object.intents ?? "";
        message.fromAddress = object.fromAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            intents: object.intents,
            fromAddress: object.from_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.intents = message.intents;
        obj.from_address = message.fromAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSignalIntent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSignalIntent.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSignalIntent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
            value: exports.MsgSignalIntent.encode(message).finish()
        };
    }
};
function createBaseMsgSignalIntentResponse() {
    return {};
}
exports.MsgSignalIntentResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntentResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignalIntentResponse();
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
        const message = createBaseMsgSignalIntentResponse();
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
        return exports.MsgSignalIntentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSignalIntentResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSignalIntentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntentResponse",
            value: exports.MsgSignalIntentResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=messages.js.map