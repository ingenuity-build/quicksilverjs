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
exports.PeerAddressInfo = exports.PeerInfo = exports.NodeInfoOther = exports.NodeInfo = exports.ProtocolVersion = void 0;
const timestamp_1 = require("../../google/protobuf/timestamp");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseProtocolVersion() {
    return {
        p2p: helpers_1.Long.UZERO,
        block: helpers_1.Long.UZERO,
        app: helpers_1.Long.UZERO
    };
}
exports.ProtocolVersion = {
    typeUrl: "/tendermint.p2p.ProtocolVersion",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.p2p.isZero()) {
            writer.uint32(8).uint64(message.p2p);
        }
        if (!message.block.isZero()) {
            writer.uint32(16).uint64(message.block);
        }
        if (!message.app.isZero()) {
            writer.uint32(24).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProtocolVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.p2p = reader.uint64();
                    break;
                case 2:
                    message.block = reader.uint64();
                    break;
                case 3:
                    message.app = reader.uint64();
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
            p2p: (0, helpers_1.isSet)(object.p2p) ? helpers_1.Long.fromValue(object.p2p) : helpers_1.Long.UZERO,
            block: (0, helpers_1.isSet)(object.block) ? helpers_1.Long.fromValue(object.block) : helpers_1.Long.UZERO,
            app: (0, helpers_1.isSet)(object.app) ? helpers_1.Long.fromValue(object.app) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.p2p !== undefined && (obj.p2p = (message.p2p || helpers_1.Long.UZERO).toString());
        message.block !== undefined && (obj.block = (message.block || helpers_1.Long.UZERO).toString());
        message.app !== undefined && (obj.app = (message.app || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProtocolVersion();
        message.p2p = object.p2p !== undefined && object.p2p !== null ? helpers_1.Long.fromValue(object.p2p) : helpers_1.Long.UZERO;
        message.block = object.block !== undefined && object.block !== null ? helpers_1.Long.fromValue(object.block) : helpers_1.Long.UZERO;
        message.app = object.app !== undefined && object.app !== null ? helpers_1.Long.fromValue(object.app) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            p2p: helpers_1.Long.fromString(object.p2p),
            block: helpers_1.Long.fromString(object.block),
            app: helpers_1.Long.fromString(object.app)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.p2p = message.p2p ? message.p2p.toString() : undefined;
        obj.block = message.block ? message.block.toString() : undefined;
        obj.app = message.app ? message.app.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ProtocolVersion.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ProtocolVersion.decode(message.value);
    },
    toProto(message) {
        return exports.ProtocolVersion.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.ProtocolVersion",
            value: exports.ProtocolVersion.encode(message).finish()
        };
    }
};
function createBaseNodeInfo() {
    return {
        protocol_version: exports.ProtocolVersion.fromPartial({}),
        node_id: "",
        listen_addr: "",
        network: "",
        version: "",
        channels: new Uint8Array(),
        moniker: "",
        other: exports.NodeInfoOther.fromPartial({})
    };
}
exports.NodeInfo = {
    typeUrl: "/tendermint.p2p.NodeInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.protocol_version !== undefined) {
            exports.ProtocolVersion.encode(message.protocol_version, writer.uint32(10).fork()).ldelim();
        }
        if (message.node_id !== "") {
            writer.uint32(18).string(message.node_id);
        }
        if (message.listen_addr !== "") {
            writer.uint32(26).string(message.listen_addr);
        }
        if (message.network !== "") {
            writer.uint32(34).string(message.network);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.channels.length !== 0) {
            writer.uint32(50).bytes(message.channels);
        }
        if (message.moniker !== "") {
            writer.uint32(58).string(message.moniker);
        }
        if (message.other !== undefined) {
            exports.NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol_version = exports.ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.node_id = reader.string();
                    break;
                case 3:
                    message.listen_addr = reader.string();
                    break;
                case 4:
                    message.network = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.channels = reader.bytes();
                    break;
                case 7:
                    message.moniker = reader.string();
                    break;
                case 8:
                    message.other = exports.NodeInfoOther.decode(reader, reader.uint32());
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
            protocol_version: (0, helpers_1.isSet)(object.protocol_version) ? exports.ProtocolVersion.fromJSON(object.protocol_version) : undefined,
            node_id: (0, helpers_1.isSet)(object.node_id) ? String(object.node_id) : "",
            listen_addr: (0, helpers_1.isSet)(object.listen_addr) ? String(object.listen_addr) : "",
            network: (0, helpers_1.isSet)(object.network) ? String(object.network) : "",
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            channels: (0, helpers_1.isSet)(object.channels) ? (0, helpers_1.bytesFromBase64)(object.channels) : new Uint8Array(),
            moniker: (0, helpers_1.isSet)(object.moniker) ? String(object.moniker) : "",
            other: (0, helpers_1.isSet)(object.other) ? exports.NodeInfoOther.fromJSON(object.other) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.protocol_version !== undefined && (obj.protocol_version = message.protocol_version ? exports.ProtocolVersion.toJSON(message.protocol_version) : undefined);
        message.node_id !== undefined && (obj.node_id = message.node_id);
        message.listen_addr !== undefined && (obj.listen_addr = message.listen_addr);
        message.network !== undefined && (obj.network = message.network);
        message.version !== undefined && (obj.version = message.version);
        message.channels !== undefined && (obj.channels = (0, helpers_1.base64FromBytes)(message.channels !== undefined ? message.channels : new Uint8Array()));
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.other !== undefined && (obj.other = message.other ? exports.NodeInfoOther.toJSON(message.other) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNodeInfo();
        message.protocol_version = object.protocol_version !== undefined && object.protocol_version !== null ? exports.ProtocolVersion.fromPartial(object.protocol_version) : undefined;
        message.node_id = object.node_id ?? "";
        message.listen_addr = object.listen_addr ?? "";
        message.network = object.network ?? "";
        message.version = object.version ?? "";
        message.channels = object.channels ?? new Uint8Array();
        message.moniker = object.moniker ?? "";
        message.other = object.other !== undefined && object.other !== null ? exports.NodeInfoOther.fromPartial(object.other) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            protocol_version: object?.protocol_version ? exports.ProtocolVersion.fromAmino(object.protocol_version) : undefined,
            node_id: object.node_id,
            listen_addr: object.listen_addr,
            network: object.network,
            version: object.version,
            channels: object.channels,
            moniker: object.moniker,
            other: object?.other ? exports.NodeInfoOther.fromAmino(object.other) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.protocol_version = message.protocol_version ? exports.ProtocolVersion.toAmino(message.protocol_version) : undefined;
        obj.node_id = message.node_id;
        obj.listen_addr = message.listen_addr;
        obj.network = message.network;
        obj.version = message.version;
        obj.channels = message.channels;
        obj.moniker = message.moniker;
        obj.other = message.other ? exports.NodeInfoOther.toAmino(message.other) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NodeInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.NodeInfo.decode(message.value);
    },
    toProto(message) {
        return exports.NodeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.NodeInfo",
            value: exports.NodeInfo.encode(message).finish()
        };
    }
};
function createBaseNodeInfoOther() {
    return {
        tx_index: "",
        rpc_address: ""
    };
}
exports.NodeInfoOther = {
    typeUrl: "/tendermint.p2p.NodeInfoOther",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx_index !== "") {
            writer.uint32(10).string(message.tx_index);
        }
        if (message.rpc_address !== "") {
            writer.uint32(18).string(message.rpc_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNodeInfoOther();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_index = reader.string();
                    break;
                case 2:
                    message.rpc_address = reader.string();
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
            tx_index: (0, helpers_1.isSet)(object.tx_index) ? String(object.tx_index) : "",
            rpc_address: (0, helpers_1.isSet)(object.rpc_address) ? String(object.rpc_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx_index !== undefined && (obj.tx_index = message.tx_index);
        message.rpc_address !== undefined && (obj.rpc_address = message.rpc_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNodeInfoOther();
        message.tx_index = object.tx_index ?? "";
        message.rpc_address = object.rpc_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            tx_index: object.tx_index,
            rpc_address: object.rpc_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx_index = message.tx_index;
        obj.rpc_address = message.rpc_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NodeInfoOther.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.NodeInfoOther.decode(message.value);
    },
    toProto(message) {
        return exports.NodeInfoOther.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.NodeInfoOther",
            value: exports.NodeInfoOther.encode(message).finish()
        };
    }
};
function createBasePeerInfo() {
    return {
        id: "",
        address_info: [],
        last_connected: new Date()
    };
}
exports.PeerInfo = {
    typeUrl: "/tendermint.p2p.PeerInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.address_info) {
            exports.PeerAddressInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.last_connected !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.last_connected), writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.address_info.push(exports.PeerAddressInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.last_connected = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : "",
            address_info: Array.isArray(object?.address_info) ? object.address_info.map((e) => exports.PeerAddressInfo.fromJSON(e)) : [],
            last_connected: (0, helpers_1.isSet)(object.last_connected) ? (0, helpers_1.fromJsonTimestamp)(object.last_connected) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.address_info) {
            obj.address_info = message.address_info.map(e => e ? exports.PeerAddressInfo.toJSON(e) : undefined);
        }
        else {
            obj.address_info = [];
        }
        message.last_connected !== undefined && (obj.last_connected = message.last_connected.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeerInfo();
        message.id = object.id ?? "";
        message.address_info = object.address_info?.map(e => exports.PeerAddressInfo.fromPartial(e)) || [];
        message.last_connected = object.last_connected ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            address_info: Array.isArray(object?.address_info) ? object.address_info.map((e) => exports.PeerAddressInfo.fromAmino(e)) : [],
            last_connected: object.last_connected
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        if (message.address_info) {
            obj.address_info = message.address_info.map(e => e ? exports.PeerAddressInfo.toAmino(e) : undefined);
        }
        else {
            obj.address_info = [];
        }
        obj.last_connected = message.last_connected;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PeerInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PeerInfo.decode(message.value);
    },
    toProto(message) {
        return exports.PeerInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.PeerInfo",
            value: exports.PeerInfo.encode(message).finish()
        };
    }
};
function createBasePeerAddressInfo() {
    return {
        address: "",
        last_dial_success: new Date(),
        last_dial_failure: new Date(),
        dial_failures: 0
    };
}
exports.PeerAddressInfo = {
    typeUrl: "/tendermint.p2p.PeerAddressInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.last_dial_success !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.last_dial_success), writer.uint32(18).fork()).ldelim();
        }
        if (message.last_dial_failure !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.last_dial_failure), writer.uint32(26).fork()).ldelim();
        }
        if (message.dial_failures !== 0) {
            writer.uint32(32).uint32(message.dial_failures);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeerAddressInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.last_dial_success = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.last_dial_failure = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.dial_failures = reader.uint32();
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            last_dial_success: (0, helpers_1.isSet)(object.last_dial_success) ? (0, helpers_1.fromJsonTimestamp)(object.last_dial_success) : undefined,
            last_dial_failure: (0, helpers_1.isSet)(object.last_dial_failure) ? (0, helpers_1.fromJsonTimestamp)(object.last_dial_failure) : undefined,
            dial_failures: (0, helpers_1.isSet)(object.dial_failures) ? Number(object.dial_failures) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.last_dial_success !== undefined && (obj.last_dial_success = message.last_dial_success.toISOString());
        message.last_dial_failure !== undefined && (obj.last_dial_failure = message.last_dial_failure.toISOString());
        message.dial_failures !== undefined && (obj.dial_failures = Math.round(message.dial_failures));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeerAddressInfo();
        message.address = object.address ?? "";
        message.last_dial_success = object.last_dial_success ?? undefined;
        message.last_dial_failure = object.last_dial_failure ?? undefined;
        message.dial_failures = object.dial_failures ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            last_dial_success: object.last_dial_success,
            last_dial_failure: object.last_dial_failure,
            dial_failures: object.dial_failures
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.last_dial_success = message.last_dial_success;
        obj.last_dial_failure = message.last_dial_failure;
        obj.dial_failures = message.dial_failures;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PeerAddressInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PeerAddressInfo.decode(message.value);
    },
    toProto(message) {
        return exports.PeerAddressInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.PeerAddressInfo",
            value: exports.PeerAddressInfo.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map