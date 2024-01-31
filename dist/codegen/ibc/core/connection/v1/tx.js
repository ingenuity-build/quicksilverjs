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
exports.MsgConnectionOpenConfirmResponse = exports.MsgConnectionOpenConfirm = exports.MsgConnectionOpenAckResponse = exports.MsgConnectionOpenAck = exports.MsgConnectionOpenTryResponse = exports.MsgConnectionOpenTry = exports.MsgConnectionOpenInitResponse = exports.MsgConnectionOpenInit = void 0;
const connection_1 = require("./connection");
const any_1 = require("../../../../google/protobuf/any");
const client_1 = require("../../client/v1/client");
const helpers_1 = require("../../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgConnectionOpenInit() {
    return {
        client_id: "",
        counterparty: connection_1.Counterparty.fromPartial({}),
        version: connection_1.Version.fromPartial({}),
        delay_period: helpers_1.Long.UZERO,
        signer: ""
    };
}
exports.MsgConnectionOpenInit = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
    aminoType: "cosmos-sdk/MsgConnectionOpenInit",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.counterparty !== undefined) {
            connection_1.Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
        }
        if (message.version !== undefined) {
            connection_1.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (!message.delay_period.isZero()) {
            writer.uint32(32).uint64(message.delay_period);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.counterparty = connection_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.version = connection_1.Version.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.delay_period = reader.uint64();
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            counterparty: (0, helpers_1.isSet)(object.counterparty) ? connection_1.Counterparty.fromJSON(object.counterparty) : undefined,
            version: (0, helpers_1.isSet)(object.version) ? connection_1.Version.fromJSON(object.version) : undefined,
            delay_period: (0, helpers_1.isSet)(object.delay_period) ? helpers_1.Long.fromValue(object.delay_period) : helpers_1.Long.UZERO,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? connection_1.Counterparty.toJSON(message.counterparty) : undefined);
        message.version !== undefined && (obj.version = message.version ? connection_1.Version.toJSON(message.version) : undefined);
        message.delay_period !== undefined && (obj.delay_period = (message.delay_period || helpers_1.Long.UZERO).toString());
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenInit();
        message.client_id = object.client_id ?? "";
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? connection_1.Counterparty.fromPartial(object.counterparty) : undefined;
        message.version = object.version !== undefined && object.version !== null ? connection_1.Version.fromPartial(object.version) : undefined;
        message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? helpers_1.Long.fromValue(object.delay_period) : helpers_1.Long.UZERO;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            counterparty: object?.counterparty ? connection_1.Counterparty.fromAmino(object.counterparty) : undefined,
            version: object?.version ? connection_1.Version.fromAmino(object.version) : undefined,
            delay_period: helpers_1.Long.fromString(object.delay_period),
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.counterparty = message.counterparty ? connection_1.Counterparty.toAmino(message.counterparty) : undefined;
        obj.version = message.version ? connection_1.Version.toAmino(message.version) : undefined;
        obj.delay_period = message.delay_period ? message.delay_period.toString() : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenInit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenInit",
            value: exports.MsgConnectionOpenInit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenInit.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenInit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
            value: exports.MsgConnectionOpenInit.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenInitResponse() {
    return {};
}
exports.MsgConnectionOpenInitResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse",
    aminoType: "cosmos-sdk/MsgConnectionOpenInitResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenInitResponse();
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
        const message = createBaseMsgConnectionOpenInitResponse();
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
        return exports.MsgConnectionOpenInitResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenInitResponse",
            value: exports.MsgConnectionOpenInitResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenInitResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenInitResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInitResponse",
            value: exports.MsgConnectionOpenInitResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenTry() {
    return {
        client_id: "",
        previous_connection_id: "",
        client_state: any_1.Any.fromPartial({}),
        counterparty: connection_1.Counterparty.fromPartial({}),
        delay_period: helpers_1.Long.UZERO,
        counterparty_versions: [],
        proof_height: client_1.Height.fromPartial({}),
        proof_init: new Uint8Array(),
        proof_client: new Uint8Array(),
        proof_consensus: new Uint8Array(),
        consensus_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgConnectionOpenTry = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
    aminoType: "cosmos-sdk/MsgConnectionOpenTry",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.previous_connection_id !== "") {
            writer.uint32(18).string(message.previous_connection_id);
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterparty !== undefined) {
            connection_1.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (!message.delay_period.isZero()) {
            writer.uint32(40).uint64(message.delay_period);
        }
        for (const v of message.counterparty_versions) {
            connection_1.Version.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(58).fork()).ldelim();
        }
        if (message.proof_init.length !== 0) {
            writer.uint32(66).bytes(message.proof_init);
        }
        if (message.proof_client.length !== 0) {
            writer.uint32(74).bytes(message.proof_client);
        }
        if (message.proof_consensus.length !== 0) {
            writer.uint32(82).bytes(message.proof_consensus);
        }
        if (message.consensus_height !== undefined) {
            client_1.Height.encode(message.consensus_height, writer.uint32(90).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(98).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenTry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.previous_connection_id = reader.string();
                    break;
                case 3:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.counterparty = connection_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.delay_period = reader.uint64();
                    break;
                case 6:
                    message.counterparty_versions.push(connection_1.Version.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proof_init = reader.bytes();
                    break;
                case 9:
                    message.proof_client = reader.bytes();
                    break;
                case 10:
                    message.proof_consensus = reader.bytes();
                    break;
                case 11:
                    message.consensus_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 12:
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            previous_connection_id: (0, helpers_1.isSet)(object.previous_connection_id) ? String(object.previous_connection_id) : "",
            client_state: (0, helpers_1.isSet)(object.client_state) ? any_1.Any.fromJSON(object.client_state) : undefined,
            counterparty: (0, helpers_1.isSet)(object.counterparty) ? connection_1.Counterparty.fromJSON(object.counterparty) : undefined,
            delay_period: (0, helpers_1.isSet)(object.delay_period) ? helpers_1.Long.fromValue(object.delay_period) : helpers_1.Long.UZERO,
            counterparty_versions: Array.isArray(object?.counterparty_versions) ? object.counterparty_versions.map((e) => connection_1.Version.fromJSON(e)) : [],
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            proof_init: (0, helpers_1.isSet)(object.proof_init) ? (0, helpers_1.bytesFromBase64)(object.proof_init) : new Uint8Array(),
            proof_client: (0, helpers_1.isSet)(object.proof_client) ? (0, helpers_1.bytesFromBase64)(object.proof_client) : new Uint8Array(),
            proof_consensus: (0, helpers_1.isSet)(object.proof_consensus) ? (0, helpers_1.bytesFromBase64)(object.proof_consensus) : new Uint8Array(),
            consensus_height: (0, helpers_1.isSet)(object.consensus_height) ? client_1.Height.fromJSON(object.consensus_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.previous_connection_id !== undefined && (obj.previous_connection_id = message.previous_connection_id);
        message.client_state !== undefined && (obj.client_state = message.client_state ? any_1.Any.toJSON(message.client_state) : undefined);
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? connection_1.Counterparty.toJSON(message.counterparty) : undefined);
        message.delay_period !== undefined && (obj.delay_period = (message.delay_period || helpers_1.Long.UZERO).toString());
        if (message.counterparty_versions) {
            obj.counterparty_versions = message.counterparty_versions.map(e => e ? connection_1.Version.toJSON(e) : undefined);
        }
        else {
            obj.counterparty_versions = [];
        }
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.proof_init !== undefined && (obj.proof_init = (0, helpers_1.base64FromBytes)(message.proof_init !== undefined ? message.proof_init : new Uint8Array()));
        message.proof_client !== undefined && (obj.proof_client = (0, helpers_1.base64FromBytes)(message.proof_client !== undefined ? message.proof_client : new Uint8Array()));
        message.proof_consensus !== undefined && (obj.proof_consensus = (0, helpers_1.base64FromBytes)(message.proof_consensus !== undefined ? message.proof_consensus : new Uint8Array()));
        message.consensus_height !== undefined && (obj.consensus_height = message.consensus_height ? client_1.Height.toJSON(message.consensus_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenTry();
        message.client_id = object.client_id ?? "";
        message.previous_connection_id = object.previous_connection_id ?? "";
        message.client_state = object.client_state !== undefined && object.client_state !== null ? any_1.Any.fromPartial(object.client_state) : undefined;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? connection_1.Counterparty.fromPartial(object.counterparty) : undefined;
        message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? helpers_1.Long.fromValue(object.delay_period) : helpers_1.Long.UZERO;
        message.counterparty_versions = object.counterparty_versions?.map(e => connection_1.Version.fromPartial(e)) || [];
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.proof_init = object.proof_init ?? new Uint8Array();
        message.proof_client = object.proof_client ?? new Uint8Array();
        message.proof_consensus = object.proof_consensus ?? new Uint8Array();
        message.consensus_height = object.consensus_height !== undefined && object.consensus_height !== null ? client_1.Height.fromPartial(object.consensus_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            previous_connection_id: object.previous_connection_id,
            client_state: object?.client_state ? any_1.Any.fromAmino(object.client_state) : undefined,
            counterparty: object?.counterparty ? connection_1.Counterparty.fromAmino(object.counterparty) : undefined,
            delay_period: helpers_1.Long.fromString(object.delay_period),
            counterparty_versions: Array.isArray(object?.counterparty_versions) ? object.counterparty_versions.map((e) => connection_1.Version.fromAmino(e)) : [],
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined,
            proof_init: object.proof_init,
            proof_client: object.proof_client,
            proof_consensus: object.proof_consensus,
            consensus_height: object?.consensus_height ? client_1.Height.fromAmino(object.consensus_height) : undefined,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.previous_connection_id = message.previous_connection_id;
        obj.client_state = message.client_state ? any_1.Any.toAmino(message.client_state) : undefined;
        obj.counterparty = message.counterparty ? connection_1.Counterparty.toAmino(message.counterparty) : undefined;
        obj.delay_period = message.delay_period ? message.delay_period.toString() : undefined;
        if (message.counterparty_versions) {
            obj.counterparty_versions = message.counterparty_versions.map(e => e ? connection_1.Version.toAmino(e) : undefined);
        }
        else {
            obj.counterparty_versions = [];
        }
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.proof_init = message.proof_init;
        obj.proof_client = message.proof_client;
        obj.proof_consensus = message.proof_consensus;
        obj.consensus_height = message.consensus_height ? client_1.Height.toAmino(message.consensus_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenTry.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenTry",
            value: exports.MsgConnectionOpenTry.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenTry.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenTry.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
            value: exports.MsgConnectionOpenTry.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenTryResponse() {
    return {};
}
exports.MsgConnectionOpenTryResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse",
    aminoType: "cosmos-sdk/MsgConnectionOpenTryResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenTryResponse();
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
        const message = createBaseMsgConnectionOpenTryResponse();
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
        return exports.MsgConnectionOpenTryResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenTryResponse",
            value: exports.MsgConnectionOpenTryResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenTryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenTryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTryResponse",
            value: exports.MsgConnectionOpenTryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenAck() {
    return {
        connection_id: "",
        counterparty_connection_id: "",
        version: connection_1.Version.fromPartial({}),
        client_state: any_1.Any.fromPartial({}),
        proof_height: client_1.Height.fromPartial({}),
        proof_try: new Uint8Array(),
        proof_client: new Uint8Array(),
        proof_consensus: new Uint8Array(),
        consensus_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgConnectionOpenAck = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
    aminoType: "cosmos-sdk/MsgConnectionOpenAck",
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.counterparty_connection_id !== "") {
            writer.uint32(18).string(message.counterparty_connection_id);
        }
        if (message.version !== undefined) {
            connection_1.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(34).fork()).ldelim();
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(42).fork()).ldelim();
        }
        if (message.proof_try.length !== 0) {
            writer.uint32(50).bytes(message.proof_try);
        }
        if (message.proof_client.length !== 0) {
            writer.uint32(58).bytes(message.proof_client);
        }
        if (message.proof_consensus.length !== 0) {
            writer.uint32(66).bytes(message.proof_consensus);
        }
        if (message.consensus_height !== undefined) {
            client_1.Height.encode(message.consensus_height, writer.uint32(74).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(82).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.counterparty_connection_id = reader.string();
                    break;
                case 3:
                    message.version = connection_1.Version.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.proof_try = reader.bytes();
                    break;
                case 7:
                    message.proof_client = reader.bytes();
                    break;
                case 8:
                    message.proof_consensus = reader.bytes();
                    break;
                case 9:
                    message.consensus_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 10:
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
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            counterparty_connection_id: (0, helpers_1.isSet)(object.counterparty_connection_id) ? String(object.counterparty_connection_id) : "",
            version: (0, helpers_1.isSet)(object.version) ? connection_1.Version.fromJSON(object.version) : undefined,
            client_state: (0, helpers_1.isSet)(object.client_state) ? any_1.Any.fromJSON(object.client_state) : undefined,
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            proof_try: (0, helpers_1.isSet)(object.proof_try) ? (0, helpers_1.bytesFromBase64)(object.proof_try) : new Uint8Array(),
            proof_client: (0, helpers_1.isSet)(object.proof_client) ? (0, helpers_1.bytesFromBase64)(object.proof_client) : new Uint8Array(),
            proof_consensus: (0, helpers_1.isSet)(object.proof_consensus) ? (0, helpers_1.bytesFromBase64)(object.proof_consensus) : new Uint8Array(),
            consensus_height: (0, helpers_1.isSet)(object.consensus_height) ? client_1.Height.fromJSON(object.consensus_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.counterparty_connection_id !== undefined && (obj.counterparty_connection_id = message.counterparty_connection_id);
        message.version !== undefined && (obj.version = message.version ? connection_1.Version.toJSON(message.version) : undefined);
        message.client_state !== undefined && (obj.client_state = message.client_state ? any_1.Any.toJSON(message.client_state) : undefined);
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.proof_try !== undefined && (obj.proof_try = (0, helpers_1.base64FromBytes)(message.proof_try !== undefined ? message.proof_try : new Uint8Array()));
        message.proof_client !== undefined && (obj.proof_client = (0, helpers_1.base64FromBytes)(message.proof_client !== undefined ? message.proof_client : new Uint8Array()));
        message.proof_consensus !== undefined && (obj.proof_consensus = (0, helpers_1.base64FromBytes)(message.proof_consensus !== undefined ? message.proof_consensus : new Uint8Array()));
        message.consensus_height !== undefined && (obj.consensus_height = message.consensus_height ? client_1.Height.toJSON(message.consensus_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenAck();
        message.connection_id = object.connection_id ?? "";
        message.counterparty_connection_id = object.counterparty_connection_id ?? "";
        message.version = object.version !== undefined && object.version !== null ? connection_1.Version.fromPartial(object.version) : undefined;
        message.client_state = object.client_state !== undefined && object.client_state !== null ? any_1.Any.fromPartial(object.client_state) : undefined;
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.proof_try = object.proof_try ?? new Uint8Array();
        message.proof_client = object.proof_client ?? new Uint8Array();
        message.proof_consensus = object.proof_consensus ?? new Uint8Array();
        message.consensus_height = object.consensus_height !== undefined && object.consensus_height !== null ? client_1.Height.fromPartial(object.consensus_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            connection_id: object.connection_id,
            counterparty_connection_id: object.counterparty_connection_id,
            version: object?.version ? connection_1.Version.fromAmino(object.version) : undefined,
            client_state: object?.client_state ? any_1.Any.fromAmino(object.client_state) : undefined,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined,
            proof_try: object.proof_try,
            proof_client: object.proof_client,
            proof_consensus: object.proof_consensus,
            consensus_height: object?.consensus_height ? client_1.Height.fromAmino(object.consensus_height) : undefined,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        obj.counterparty_connection_id = message.counterparty_connection_id;
        obj.version = message.version ? connection_1.Version.toAmino(message.version) : undefined;
        obj.client_state = message.client_state ? any_1.Any.toAmino(message.client_state) : undefined;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.proof_try = message.proof_try;
        obj.proof_client = message.proof_client;
        obj.proof_consensus = message.proof_consensus;
        obj.consensus_height = message.consensus_height ? client_1.Height.toAmino(message.consensus_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenAck.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenAck",
            value: exports.MsgConnectionOpenAck.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenAck.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenAck.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
            value: exports.MsgConnectionOpenAck.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenAckResponse() {
    return {};
}
exports.MsgConnectionOpenAckResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse",
    aminoType: "cosmos-sdk/MsgConnectionOpenAckResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenAckResponse();
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
        const message = createBaseMsgConnectionOpenAckResponse();
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
        return exports.MsgConnectionOpenAckResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenAckResponse",
            value: exports.MsgConnectionOpenAckResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenAckResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenAckResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAckResponse",
            value: exports.MsgConnectionOpenAckResponse.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenConfirm() {
    return {
        connection_id: "",
        proof_ack: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({}),
        signer: ""
    };
}
exports.MsgConnectionOpenConfirm = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
    aminoType: "cosmos-sdk/MsgConnectionOpenConfirm",
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.proof_ack.length !== 0) {
            writer.uint32(18).bytes(message.proof_ack);
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
        const message = createBaseMsgConnectionOpenConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.proof_ack = reader.bytes();
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
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            proof_ack: (0, helpers_1.isSet)(object.proof_ack) ? (0, helpers_1.bytesFromBase64)(object.proof_ack) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.proof_ack !== undefined && (obj.proof_ack = (0, helpers_1.base64FromBytes)(message.proof_ack !== undefined ? message.proof_ack : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgConnectionOpenConfirm();
        message.connection_id = object.connection_id ?? "";
        message.proof_ack = object.proof_ack ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            connection_id: object.connection_id,
            proof_ack: object.proof_ack,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        obj.proof_ack = message.proof_ack;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgConnectionOpenConfirm.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenConfirm",
            value: exports.MsgConnectionOpenConfirm.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenConfirm.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenConfirm.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
            value: exports.MsgConnectionOpenConfirm.encode(message).finish()
        };
    }
};
function createBaseMsgConnectionOpenConfirmResponse() {
    return {};
}
exports.MsgConnectionOpenConfirmResponse = {
    typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse",
    aminoType: "cosmos-sdk/MsgConnectionOpenConfirmResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenConfirmResponse();
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
        const message = createBaseMsgConnectionOpenConfirmResponse();
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
        return exports.MsgConnectionOpenConfirmResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgConnectionOpenConfirmResponse",
            value: exports.MsgConnectionOpenConfirmResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgConnectionOpenConfirmResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgConnectionOpenConfirmResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirmResponse",
            value: exports.MsgConnectionOpenConfirmResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map