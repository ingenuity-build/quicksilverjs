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
exports.MsgTransferResponse = exports.MsgTransfer = void 0;
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const client_1 = require("../../../core/client/v1/client");
const helpers_1 = require("../../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgTransfer() {
    return {
        source_port: "",
        source_channel: "",
        token: coin_1.Coin.fromPartial({}),
        sender: "",
        receiver: "",
        timeout_height: client_1.Height.fromPartial({}),
        timeout_timestamp: helpers_1.Long.UZERO
    };
}
exports.MsgTransfer = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
    aminoType: "cosmos-sdk/MsgTransfer",
    encode(message, writer = _m0.Writer.create()) {
        if (message.source_port !== "") {
            writer.uint32(10).string(message.source_port);
        }
        if (message.source_channel !== "") {
            writer.uint32(18).string(message.source_channel);
        }
        if (message.token !== undefined) {
            coin_1.Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(42).string(message.receiver);
        }
        if (message.timeout_height !== undefined) {
            client_1.Height.encode(message.timeout_height, writer.uint32(50).fork()).ldelim();
        }
        if (!message.timeout_timestamp.isZero()) {
            writer.uint32(56).uint64(message.timeout_timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source_port = reader.string();
                    break;
                case 2:
                    message.source_channel = reader.string();
                    break;
                case 3:
                    message.token = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.receiver = reader.string();
                    break;
                case 6:
                    message.timeout_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.timeout_timestamp = reader.uint64();
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
            source_port: (0, helpers_1.isSet)(object.source_port) ? String(object.source_port) : "",
            source_channel: (0, helpers_1.isSet)(object.source_channel) ? String(object.source_channel) : "",
            token: (0, helpers_1.isSet)(object.token) ? coin_1.Coin.fromJSON(object.token) : undefined,
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            receiver: (0, helpers_1.isSet)(object.receiver) ? String(object.receiver) : "",
            timeout_height: (0, helpers_1.isSet)(object.timeout_height) ? client_1.Height.fromJSON(object.timeout_height) : undefined,
            timeout_timestamp: (0, helpers_1.isSet)(object.timeout_timestamp) ? helpers_1.Long.fromValue(object.timeout_timestamp) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.source_port !== undefined && (obj.source_port = message.source_port);
        message.source_channel !== undefined && (obj.source_channel = message.source_channel);
        message.token !== undefined && (obj.token = message.token ? coin_1.Coin.toJSON(message.token) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.timeout_height !== undefined && (obj.timeout_height = message.timeout_height ? client_1.Height.toJSON(message.timeout_height) : undefined);
        message.timeout_timestamp !== undefined && (obj.timeout_timestamp = (message.timeout_timestamp || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTransfer();
        message.source_port = object.source_port ?? "";
        message.source_channel = object.source_channel ?? "";
        message.token = object.token !== undefined && object.token !== null ? coin_1.Coin.fromPartial(object.token) : undefined;
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? client_1.Height.fromPartial(object.timeout_height) : undefined;
        message.timeout_timestamp = object.timeout_timestamp !== undefined && object.timeout_timestamp !== null ? helpers_1.Long.fromValue(object.timeout_timestamp) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            source_port: object.source_port,
            source_channel: object.source_channel,
            token: object?.token ? coin_1.Coin.fromAmino(object.token) : undefined,
            sender: object.sender,
            receiver: object.receiver,
            timeout_height: object?.timeout_height ? client_1.Height.fromAmino(object.timeout_height) : undefined,
            timeout_timestamp: helpers_1.Long.fromString(object.timeout_timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.source_port = message.source_port;
        obj.source_channel = message.source_channel;
        obj.token = message.token ? coin_1.Coin.toAmino(message.token) : undefined;
        obj.sender = message.sender;
        obj.receiver = message.receiver;
        obj.timeout_height = message.timeout_height ? client_1.Height.toAmino(message.timeout_height) : {};
        obj.timeout_timestamp = message.timeout_timestamp ? message.timeout_timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTransfer.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransfer",
            value: exports.MsgTransfer.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTransfer.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
            value: exports.MsgTransfer.encode(message).finish()
        };
    }
};
function createBaseMsgTransferResponse() {
    return {};
}
exports.MsgTransferResponse = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
    aminoType: "cosmos-sdk/MsgTransferResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferResponse();
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
        const message = createBaseMsgTransferResponse();
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
        return exports.MsgTransferResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransferResponse",
            value: exports.MsgTransferResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTransferResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
            value: exports.MsgTransferResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map