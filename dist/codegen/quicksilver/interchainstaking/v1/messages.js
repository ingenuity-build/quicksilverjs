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
        destination_address: "",
        from_address: ""
    };
}
exports.MsgRequestRedemption = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
    aminoType: "quicksilver/MsgRequestRedemption",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            coin_1.Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        if (message.destination_address !== "") {
            writer.uint32(18).string(message.destination_address);
        }
        if (message.from_address !== "") {
            writer.uint32(26).string(message.from_address);
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
                    message.destination_address = reader.string();
                    break;
                case 3:
                    message.from_address = reader.string();
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
            destination_address: (0, helpers_1.isSet)(object.destination_address) ? String(object.destination_address) : "",
            from_address: (0, helpers_1.isSet)(object.from_address) ? String(object.from_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? coin_1.Coin.toJSON(message.value) : undefined);
        message.destination_address !== undefined && (obj.destination_address = message.destination_address);
        message.from_address !== undefined && (obj.from_address = message.from_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRequestRedemption();
        message.value = object.value !== undefined && object.value !== null ? coin_1.Coin.fromPartial(object.value) : undefined;
        message.destination_address = object.destination_address ?? "";
        message.from_address = object.from_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            value: object?.value ? coin_1.Coin.fromAmino(object.value) : undefined,
            destination_address: object.destination_address,
            from_address: object.from_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value ? coin_1.Coin.toAmino(message.value) : undefined;
        obj.destination_address = message.destination_address;
        obj.from_address = message.from_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRequestRedemption.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "quicksilver/MsgRequestRedemption",
            value: exports.MsgRequestRedemption.toAmino(message)
        };
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
        chain_id: "",
        intents: "",
        from_address: ""
    };
}
exports.MsgSignalIntent = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
    aminoType: "quicksilver/MsgSignalIntent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.intents !== "") {
            writer.uint32(18).string(message.intents);
        }
        if (message.from_address !== "") {
            writer.uint32(26).string(message.from_address);
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.intents = reader.string();
                    break;
                case 3:
                    message.from_address = reader.string();
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
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            intents: (0, helpers_1.isSet)(object.intents) ? String(object.intents) : "",
            from_address: (0, helpers_1.isSet)(object.from_address) ? String(object.from_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.intents !== undefined && (obj.intents = message.intents);
        message.from_address !== undefined && (obj.from_address = message.from_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSignalIntent();
        message.chain_id = object.chain_id ?? "";
        message.intents = object.intents ?? "";
        message.from_address = object.from_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            intents: object.intents,
            from_address: object.from_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.intents = message.intents;
        obj.from_address = message.from_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSignalIntent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "quicksilver/MsgSignalIntent",
            value: exports.MsgSignalIntent.toAmino(message)
        };
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