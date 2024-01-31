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
exports.MsgAcknowledgementResponse = exports.MsgAcknowledgement = exports.MsgTimeoutOnCloseResponse = exports.MsgTimeoutOnClose = exports.MsgTimeoutResponse = exports.MsgTimeout = exports.MsgRecvPacketResponse = exports.MsgRecvPacket = exports.MsgChannelCloseConfirmResponse = exports.MsgChannelCloseConfirm = exports.MsgChannelCloseInitResponse = exports.MsgChannelCloseInit = exports.MsgChannelOpenConfirmResponse = exports.MsgChannelOpenConfirm = exports.MsgChannelOpenAckResponse = exports.MsgChannelOpenAck = exports.MsgChannelOpenTryResponse = exports.MsgChannelOpenTry = exports.MsgChannelOpenInitResponse = exports.MsgChannelOpenInit = void 0;
const channel_1 = require("./channel");
const client_1 = require("../../client/v1/client");
const helpers_1 = require("../../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgChannelOpenInit() {
    return {
        port_id: "",
        channel: channel_1.Channel.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenInit = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
    aminoType: "cosmos-sdk/MsgChannelOpenInit",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signer = reader.string();
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel: (0, helpers_1.isSet)(object.channel) ? channel_1.Channel.fromJSON(object.channel) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toJSON(message.channel) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenInit();
        message.port_id = object.port_id ?? "";
        message.channel = object.channel !== undefined && object.channel !== null ? channel_1.Channel.fromPartial(object.channel) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel: object?.channel ? channel_1.Channel.fromAmino(object.channel) : undefined,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel = message.channel ? channel_1.Channel.toAmino(message.channel) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenInit",
            value: exports.MsgChannelOpenInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenInit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
            value: exports.MsgChannelOpenInit.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenInitResponse() {
    return {};
}
exports.MsgChannelOpenInitResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
    aminoType: "cosmos-sdk/MsgChannelOpenInitResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInitResponse();
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
        const message = createBaseMsgChannelOpenInitResponse();
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
        return exports.MsgChannelOpenInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenInitResponse",
            value: exports.MsgChannelOpenInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenInitResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInitResponse",
            value: exports.MsgChannelOpenInitResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenTry() {
    return {
        port_id: "",
        previous_channel_id: "",
        channel: channel_1.Channel.fromPartial({}),
        counterparty_version: "",
        proof_init: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenTry = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
    aminoType: "cosmos-sdk/MsgChannelOpenTry",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.previous_channel_id !== "") {
            writer.uint32(18).string(message.previous_channel_id);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterparty_version !== "") {
            writer.uint32(34).string(message.counterparty_version);
        }
        if (message.proof_init.length !== 0) {
            writer.uint32(42).bytes(message.proof_init);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenTry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.previous_channel_id = reader.string();
                    break;
                case 3:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.counterparty_version = reader.string();
                    break;
                case 5:
                    message.proof_init = reader.bytes();
                    break;
                case 6:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.signer = reader.string();
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            previous_channel_id: (0, helpers_1.isSet)(object.previous_channel_id) ? String(object.previous_channel_id) : "",
            channel: (0, helpers_1.isSet)(object.channel) ? channel_1.Channel.fromJSON(object.channel) : undefined,
            counterparty_version: (0, helpers_1.isSet)(object.counterparty_version) ? String(object.counterparty_version) : "",
            proof_init: (0, helpers_1.isSet)(object.proof_init) ? (0, helpers_1.bytesFromBase64)(object.proof_init) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.previous_channel_id !== undefined && (obj.previous_channel_id = message.previous_channel_id);
        message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toJSON(message.channel) : undefined);
        message.counterparty_version !== undefined && (obj.counterparty_version = message.counterparty_version);
        message.proof_init !== undefined && (obj.proof_init = (0, helpers_1.base64FromBytes)(message.proof_init !== undefined ? message.proof_init : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenTry();
        message.port_id = object.port_id ?? "";
        message.previous_channel_id = object.previous_channel_id ?? "";
        message.channel = object.channel !== undefined && object.channel !== null ? channel_1.Channel.fromPartial(object.channel) : undefined;
        message.counterparty_version = object.counterparty_version ?? "";
        message.proof_init = object.proof_init ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            previous_channel_id: object.previous_channel_id,
            channel: object?.channel ? channel_1.Channel.fromAmino(object.channel) : undefined,
            counterparty_version: object.counterparty_version,
            proof_init: object.proof_init,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.previous_channel_id = message.previous_channel_id;
        obj.channel = message.channel ? channel_1.Channel.toAmino(message.channel) : undefined;
        obj.counterparty_version = message.counterparty_version;
        obj.proof_init = message.proof_init;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenTry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenTry",
            value: exports.MsgChannelOpenTry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenTry.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenTry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
            value: exports.MsgChannelOpenTry.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenTryResponse() {
    return {};
}
exports.MsgChannelOpenTryResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
    aminoType: "cosmos-sdk/MsgChannelOpenTryResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenTryResponse();
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
        const message = createBaseMsgChannelOpenTryResponse();
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
        return exports.MsgChannelOpenTryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenTryResponse",
            value: exports.MsgChannelOpenTryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenTryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenTryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTryResponse",
            value: exports.MsgChannelOpenTryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenAck() {
    return {
        port_id: "",
        channel_id: "",
        counterparty_channel_id: "",
        counterparty_version: "",
        proof_try: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenAck = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
    aminoType: "cosmos-sdk/MsgChannelOpenAck",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.counterparty_channel_id !== "") {
            writer.uint32(26).string(message.counterparty_channel_id);
        }
        if (message.counterparty_version !== "") {
            writer.uint32(34).string(message.counterparty_version);
        }
        if (message.proof_try.length !== 0) {
            writer.uint32(42).bytes(message.proof_try);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.counterparty_channel_id = reader.string();
                    break;
                case 4:
                    message.counterparty_version = reader.string();
                    break;
                case 5:
                    message.proof_try = reader.bytes();
                    break;
                case 6:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.signer = reader.string();
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            counterparty_channel_id: (0, helpers_1.isSet)(object.counterparty_channel_id) ? String(object.counterparty_channel_id) : "",
            counterparty_version: (0, helpers_1.isSet)(object.counterparty_version) ? String(object.counterparty_version) : "",
            proof_try: (0, helpers_1.isSet)(object.proof_try) ? (0, helpers_1.bytesFromBase64)(object.proof_try) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.counterparty_channel_id !== undefined && (obj.counterparty_channel_id = message.counterparty_channel_id);
        message.counterparty_version !== undefined && (obj.counterparty_version = message.counterparty_version);
        message.proof_try !== undefined && (obj.proof_try = (0, helpers_1.base64FromBytes)(message.proof_try !== undefined ? message.proof_try : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenAck();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.counterparty_channel_id = object.counterparty_channel_id ?? "";
        message.counterparty_version = object.counterparty_version ?? "";
        message.proof_try = object.proof_try ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            counterparty_channel_id: object.counterparty_channel_id,
            counterparty_version: object.counterparty_version,
            proof_try: object.proof_try,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.counterparty_channel_id = message.counterparty_channel_id;
        obj.counterparty_version = message.counterparty_version;
        obj.proof_try = message.proof_try;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenAck.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenAck",
            value: exports.MsgChannelOpenAck.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenAck.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenAck.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
            value: exports.MsgChannelOpenAck.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenAckResponse() {
    return {};
}
exports.MsgChannelOpenAckResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
    aminoType: "cosmos-sdk/MsgChannelOpenAckResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenAckResponse();
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
        const message = createBaseMsgChannelOpenAckResponse();
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
        return exports.MsgChannelOpenAckResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenAckResponse",
            value: exports.MsgChannelOpenAckResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenAckResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenAckResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAckResponse",
            value: exports.MsgChannelOpenAckResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenConfirm() {
    return {
        port_id: "",
        channel_id: "",
        proof_ack: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelOpenConfirm = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
    aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.proof_ack.length !== 0) {
            writer.uint32(26).bytes(message.proof_ack);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.proof_ack = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.signer = reader.string();
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            proof_ack: (0, helpers_1.isSet)(object.proof_ack) ? (0, helpers_1.bytesFromBase64)(object.proof_ack) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.proof_ack !== undefined && (obj.proof_ack = (0, helpers_1.base64FromBytes)(message.proof_ack !== undefined ? message.proof_ack : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelOpenConfirm();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.proof_ack = object.proof_ack ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            proof_ack: object.proof_ack,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.proof_ack = message.proof_ack;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelOpenConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenConfirm",
            value: exports.MsgChannelOpenConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenConfirm.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
            value: exports.MsgChannelOpenConfirm.encode(message).finish()
        };
    }
};
function createBaseMsgChannelOpenConfirmResponse() {
    return {};
}
exports.MsgChannelOpenConfirmResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
    aminoType: "cosmos-sdk/MsgChannelOpenConfirmResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenConfirmResponse();
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
        const message = createBaseMsgChannelOpenConfirmResponse();
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
        return exports.MsgChannelOpenConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelOpenConfirmResponse",
            value: exports.MsgChannelOpenConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelOpenConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelOpenConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirmResponse",
            value: exports.MsgChannelOpenConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseInit() {
    return {
        port_id: "",
        channel_id: "",
        signer: ""
    };
}
exports.MsgChannelCloseInit = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
    aminoType: "cosmos-sdk/MsgChannelCloseInit",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.signer = reader.string();
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelCloseInit();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelCloseInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseInit",
            value: exports.MsgChannelCloseInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseInit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
            value: exports.MsgChannelCloseInit.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseInitResponse() {
    return {};
}
exports.MsgChannelCloseInitResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
    aminoType: "cosmos-sdk/MsgChannelCloseInitResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseInitResponse();
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
        const message = createBaseMsgChannelCloseInitResponse();
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
        return exports.MsgChannelCloseInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseInitResponse",
            value: exports.MsgChannelCloseInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseInitResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInitResponse",
            value: exports.MsgChannelCloseInitResponse.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseConfirm() {
    return {
        port_id: "",
        channel_id: "",
        proof_init: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgChannelCloseConfirm = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
    aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.proof_init.length !== 0) {
            writer.uint32(26).bytes(message.proof_init);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.proof_init = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.signer = reader.string();
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
            port_id: (0, helpers_1.isSet)(object.port_id) ? String(object.port_id) : "",
            channel_id: (0, helpers_1.isSet)(object.channel_id) ? String(object.channel_id) : "",
            proof_init: (0, helpers_1.isSet)(object.proof_init) ? (0, helpers_1.bytesFromBase64)(object.proof_init) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.proof_init !== undefined && (obj.proof_init = (0, helpers_1.base64FromBytes)(message.proof_init !== undefined ? message.proof_init : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgChannelCloseConfirm();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.proof_init = object.proof_init ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            proof_init: object.proof_init,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.proof_init = message.proof_init;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgChannelCloseConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseConfirm",
            value: exports.MsgChannelCloseConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseConfirm.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
            value: exports.MsgChannelCloseConfirm.encode(message).finish()
        };
    }
};
function createBaseMsgChannelCloseConfirmResponse() {
    return {};
}
exports.MsgChannelCloseConfirmResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
    aminoType: "cosmos-sdk/MsgChannelCloseConfirmResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseConfirmResponse();
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
        const message = createBaseMsgChannelCloseConfirmResponse();
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
        return exports.MsgChannelCloseConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgChannelCloseConfirmResponse",
            value: exports.MsgChannelCloseConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgChannelCloseConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgChannelCloseConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirmResponse",
            value: exports.MsgChannelCloseConfirmResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRecvPacket() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        proof_commitment: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgRecvPacket = {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
    aminoType: "cosmos-sdk/MsgRecvPacket",
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof_commitment.length !== 0) {
            writer.uint32(18).bytes(message.proof_commitment);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof_commitment = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signer = reader.string();
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
            packet: (0, helpers_1.isSet)(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proof_commitment: (0, helpers_1.isSet)(object.proof_commitment) ? (0, helpers_1.bytesFromBase64)(object.proof_commitment) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.proof_commitment !== undefined && (obj.proof_commitment = (0, helpers_1.base64FromBytes)(message.proof_commitment !== undefined ? message.proof_commitment : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRecvPacket();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.proof_commitment = object.proof_commitment ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            packet: object?.packet ? channel_1.Packet.fromAmino(object.packet) : undefined,
            proof_commitment: object.proof_commitment,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.proof_commitment = message.proof_commitment;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRecvPacket.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecvPacket",
            value: exports.MsgRecvPacket.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRecvPacket.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRecvPacket.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
            value: exports.MsgRecvPacket.encode(message).finish()
        };
    }
};
function createBaseMsgRecvPacketResponse() {
    return {};
}
exports.MsgRecvPacketResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
    aminoType: "cosmos-sdk/MsgRecvPacketResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacketResponse();
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
        const message = createBaseMsgRecvPacketResponse();
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
        return exports.MsgRecvPacketResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRecvPacketResponse",
            value: exports.MsgRecvPacketResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRecvPacketResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRecvPacketResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgRecvPacketResponse",
            value: exports.MsgRecvPacketResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTimeout() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        proof_unreceived: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        next_sequence_recv: helpers_1.Long.UZERO,
        signer: ""
    };
}
exports.MsgTimeout = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeout",
    aminoType: "cosmos-sdk/MsgTimeout",
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof_unreceived.length !== 0) {
            writer.uint32(18).bytes(message.proof_unreceived);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        if (!message.next_sequence_recv.isZero()) {
            writer.uint32(32).uint64(message.next_sequence_recv);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeout();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof_unreceived = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.next_sequence_recv = reader.uint64();
                    break;
                case 5:
                    message.signer = reader.string();
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
            packet: (0, helpers_1.isSet)(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proof_unreceived: (0, helpers_1.isSet)(object.proof_unreceived) ? (0, helpers_1.bytesFromBase64)(object.proof_unreceived) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            next_sequence_recv: (0, helpers_1.isSet)(object.next_sequence_recv) ? helpers_1.Long.fromValue(object.next_sequence_recv) : helpers_1.Long.UZERO,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.proof_unreceived !== undefined && (obj.proof_unreceived = (0, helpers_1.base64FromBytes)(message.proof_unreceived !== undefined ? message.proof_unreceived : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.next_sequence_recv !== undefined && (obj.next_sequence_recv = (message.next_sequence_recv || helpers_1.Long.UZERO).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTimeout();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.proof_unreceived = object.proof_unreceived ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.next_sequence_recv = object.next_sequence_recv !== undefined && object.next_sequence_recv !== null ? helpers_1.Long.fromValue(object.next_sequence_recv) : helpers_1.Long.UZERO;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            packet: object?.packet ? channel_1.Packet.fromAmino(object.packet) : undefined,
            proof_unreceived: object.proof_unreceived,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined,
            next_sequence_recv: helpers_1.Long.fromString(object.next_sequence_recv),
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.proof_unreceived = message.proof_unreceived;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.next_sequence_recv = message.next_sequence_recv ? message.next_sequence_recv.toString() : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTimeout.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeout",
            value: exports.MsgTimeout.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeout.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeout.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeout",
            value: exports.MsgTimeout.encode(message).finish()
        };
    }
};
function createBaseMsgTimeoutResponse() {
    return {};
}
exports.MsgTimeoutResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
    aminoType: "cosmos-sdk/MsgTimeoutResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutResponse();
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
        const message = createBaseMsgTimeoutResponse();
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
        return exports.MsgTimeoutResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutResponse",
            value: exports.MsgTimeoutResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeoutResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeoutResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutResponse",
            value: exports.MsgTimeoutResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTimeoutOnClose() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        proof_unreceived: new Uint8Array(),
        proof_close: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        next_sequence_recv: helpers_1.Long.UZERO,
        signer: ""
    };
}
exports.MsgTimeoutOnClose = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
    aminoType: "cosmos-sdk/MsgTimeoutOnClose",
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof_unreceived.length !== 0) {
            writer.uint32(18).bytes(message.proof_unreceived);
        }
        if (message.proof_close.length !== 0) {
            writer.uint32(26).bytes(message.proof_close);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (!message.next_sequence_recv.isZero()) {
            writer.uint32(40).uint64(message.next_sequence_recv);
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnClose();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof_unreceived = reader.bytes();
                    break;
                case 3:
                    message.proof_close = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.next_sequence_recv = reader.uint64();
                    break;
                case 6:
                    message.signer = reader.string();
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
            packet: (0, helpers_1.isSet)(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proof_unreceived: (0, helpers_1.isSet)(object.proof_unreceived) ? (0, helpers_1.bytesFromBase64)(object.proof_unreceived) : new Uint8Array(),
            proof_close: (0, helpers_1.isSet)(object.proof_close) ? (0, helpers_1.bytesFromBase64)(object.proof_close) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            next_sequence_recv: (0, helpers_1.isSet)(object.next_sequence_recv) ? helpers_1.Long.fromValue(object.next_sequence_recv) : helpers_1.Long.UZERO,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.proof_unreceived !== undefined && (obj.proof_unreceived = (0, helpers_1.base64FromBytes)(message.proof_unreceived !== undefined ? message.proof_unreceived : new Uint8Array()));
        message.proof_close !== undefined && (obj.proof_close = (0, helpers_1.base64FromBytes)(message.proof_close !== undefined ? message.proof_close : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.next_sequence_recv !== undefined && (obj.next_sequence_recv = (message.next_sequence_recv || helpers_1.Long.UZERO).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTimeoutOnClose();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.proof_unreceived = object.proof_unreceived ?? new Uint8Array();
        message.proof_close = object.proof_close ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.next_sequence_recv = object.next_sequence_recv !== undefined && object.next_sequence_recv !== null ? helpers_1.Long.fromValue(object.next_sequence_recv) : helpers_1.Long.UZERO;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            packet: object?.packet ? channel_1.Packet.fromAmino(object.packet) : undefined,
            proof_unreceived: object.proof_unreceived,
            proof_close: object.proof_close,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined,
            next_sequence_recv: helpers_1.Long.fromString(object.next_sequence_recv),
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.proof_unreceived = message.proof_unreceived;
        obj.proof_close = message.proof_close;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.next_sequence_recv = message.next_sequence_recv ? message.next_sequence_recv.toString() : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTimeoutOnClose.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutOnClose",
            value: exports.MsgTimeoutOnClose.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeoutOnClose.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeoutOnClose.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
            value: exports.MsgTimeoutOnClose.encode(message).finish()
        };
    }
};
function createBaseMsgTimeoutOnCloseResponse() {
    return {};
}
exports.MsgTimeoutOnCloseResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
    aminoType: "cosmos-sdk/MsgTimeoutOnCloseResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnCloseResponse();
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
        const message = createBaseMsgTimeoutOnCloseResponse();
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
        return exports.MsgTimeoutOnCloseResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTimeoutOnCloseResponse",
            value: exports.MsgTimeoutOnCloseResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTimeoutOnCloseResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTimeoutOnCloseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnCloseResponse",
            value: exports.MsgTimeoutOnCloseResponse.encode(message).finish()
        };
    }
};
function createBaseMsgAcknowledgement() {
    return {
        packet: channel_1.Packet.fromPartial({}),
        acknowledgement: new Uint8Array(),
        proof_acked: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgAcknowledgement = {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
    aminoType: "cosmos-sdk/MsgAcknowledgement",
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        if (message.proof_acked.length !== 0) {
            writer.uint32(26).bytes(message.proof_acked);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.acknowledgement = reader.bytes();
                    break;
                case 3:
                    message.proof_acked = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.signer = reader.string();
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
            packet: (0, helpers_1.isSet)(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            acknowledgement: (0, helpers_1.isSet)(object.acknowledgement) ? (0, helpers_1.bytesFromBase64)(object.acknowledgement) : new Uint8Array(),
            proof_acked: (0, helpers_1.isSet)(object.proof_acked) ? (0, helpers_1.bytesFromBase64)(object.proof_acked) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined && (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.acknowledgement !== undefined && (obj.acknowledgement = (0, helpers_1.base64FromBytes)(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
        message.proof_acked !== undefined && (obj.proof_acked = (0, helpers_1.base64FromBytes)(message.proof_acked !== undefined ? message.proof_acked : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgAcknowledgement();
        message.packet = object.packet !== undefined && object.packet !== null ? channel_1.Packet.fromPartial(object.packet) : undefined;
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        message.proof_acked = object.proof_acked ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            packet: object?.packet ? channel_1.Packet.fromAmino(object.packet) : undefined,
            acknowledgement: object.acknowledgement,
            proof_acked: object.proof_acked,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.packet = message.packet ? channel_1.Packet.toAmino(message.packet) : undefined;
        obj.acknowledgement = message.acknowledgement;
        obj.proof_acked = message.proof_acked;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgAcknowledgement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAcknowledgement",
            value: exports.MsgAcknowledgement.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAcknowledgement.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAcknowledgement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
            value: exports.MsgAcknowledgement.encode(message).finish()
        };
    }
};
function createBaseMsgAcknowledgementResponse() {
    return {};
}
exports.MsgAcknowledgementResponse = {
    typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
    aminoType: "cosmos-sdk/MsgAcknowledgementResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgementResponse();
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
        const message = createBaseMsgAcknowledgementResponse();
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
        return exports.MsgAcknowledgementResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgAcknowledgementResponse",
            value: exports.MsgAcknowledgementResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgAcknowledgementResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgAcknowledgementResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.MsgAcknowledgementResponse",
            value: exports.MsgAcknowledgementResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map