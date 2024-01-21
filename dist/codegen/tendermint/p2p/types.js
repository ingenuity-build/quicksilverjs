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
        protocolVersion: exports.ProtocolVersion.fromPartial({}),
        nodeId: "",
        listenAddr: "",
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
        if (message.protocolVersion !== undefined) {
            exports.ProtocolVersion.encode(message.protocolVersion, writer.uint32(10).fork()).ldelim();
        }
        if (message.nodeId !== "") {
            writer.uint32(18).string(message.nodeId);
        }
        if (message.listenAddr !== "") {
            writer.uint32(26).string(message.listenAddr);
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
                    message.protocolVersion = exports.ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nodeId = reader.string();
                    break;
                case 3:
                    message.listenAddr = reader.string();
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
            protocolVersion: (0, helpers_1.isSet)(object.protocolVersion) ? exports.ProtocolVersion.fromJSON(object.protocolVersion) : undefined,
            nodeId: (0, helpers_1.isSet)(object.nodeId) ? String(object.nodeId) : "",
            listenAddr: (0, helpers_1.isSet)(object.listenAddr) ? String(object.listenAddr) : "",
            network: (0, helpers_1.isSet)(object.network) ? String(object.network) : "",
            version: (0, helpers_1.isSet)(object.version) ? String(object.version) : "",
            channels: (0, helpers_1.isSet)(object.channels) ? (0, helpers_1.bytesFromBase64)(object.channels) : new Uint8Array(),
            moniker: (0, helpers_1.isSet)(object.moniker) ? String(object.moniker) : "",
            other: (0, helpers_1.isSet)(object.other) ? exports.NodeInfoOther.fromJSON(object.other) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.protocolVersion !== undefined && (obj.protocolVersion = message.protocolVersion ? exports.ProtocolVersion.toJSON(message.protocolVersion) : undefined);
        message.nodeId !== undefined && (obj.nodeId = message.nodeId);
        message.listenAddr !== undefined && (obj.listenAddr = message.listenAddr);
        message.network !== undefined && (obj.network = message.network);
        message.version !== undefined && (obj.version = message.version);
        message.channels !== undefined && (obj.channels = (0, helpers_1.base64FromBytes)(message.channels !== undefined ? message.channels : new Uint8Array()));
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.other !== undefined && (obj.other = message.other ? exports.NodeInfoOther.toJSON(message.other) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNodeInfo();
        message.protocolVersion = object.protocolVersion !== undefined && object.protocolVersion !== null ? exports.ProtocolVersion.fromPartial(object.protocolVersion) : undefined;
        message.nodeId = object.nodeId ?? "";
        message.listenAddr = object.listenAddr ?? "";
        message.network = object.network ?? "";
        message.version = object.version ?? "";
        message.channels = object.channels ?? new Uint8Array();
        message.moniker = object.moniker ?? "";
        message.other = object.other !== undefined && object.other !== null ? exports.NodeInfoOther.fromPartial(object.other) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            protocolVersion: object?.protocol_version ? exports.ProtocolVersion.fromAmino(object.protocol_version) : undefined,
            nodeId: object.node_id,
            listenAddr: object.listen_addr,
            network: object.network,
            version: object.version,
            channels: object.channels,
            moniker: object.moniker,
            other: object?.other ? exports.NodeInfoOther.fromAmino(object.other) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.protocol_version = message.protocolVersion ? exports.ProtocolVersion.toAmino(message.protocolVersion) : undefined;
        obj.node_id = message.nodeId;
        obj.listen_addr = message.listenAddr;
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
        txIndex: "",
        rpcAddress: ""
    };
}
exports.NodeInfoOther = {
    typeUrl: "/tendermint.p2p.NodeInfoOther",
    encode(message, writer = _m0.Writer.create()) {
        if (message.txIndex !== "") {
            writer.uint32(10).string(message.txIndex);
        }
        if (message.rpcAddress !== "") {
            writer.uint32(18).string(message.rpcAddress);
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
                    message.txIndex = reader.string();
                    break;
                case 2:
                    message.rpcAddress = reader.string();
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
            txIndex: (0, helpers_1.isSet)(object.txIndex) ? String(object.txIndex) : "",
            rpcAddress: (0, helpers_1.isSet)(object.rpcAddress) ? String(object.rpcAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.txIndex !== undefined && (obj.txIndex = message.txIndex);
        message.rpcAddress !== undefined && (obj.rpcAddress = message.rpcAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNodeInfoOther();
        message.txIndex = object.txIndex ?? "";
        message.rpcAddress = object.rpcAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            txIndex: object.tx_index,
            rpcAddress: object.rpc_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx_index = message.txIndex;
        obj.rpc_address = message.rpcAddress;
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
        addressInfo: [],
        lastConnected: new Date()
    };
}
exports.PeerInfo = {
    typeUrl: "/tendermint.p2p.PeerInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.addressInfo) {
            exports.PeerAddressInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.lastConnected !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastConnected), writer.uint32(26).fork()).ldelim();
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
                    message.addressInfo.push(exports.PeerAddressInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastConnected = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            addressInfo: Array.isArray(object?.addressInfo) ? object.addressInfo.map((e) => exports.PeerAddressInfo.fromJSON(e)) : [],
            lastConnected: (0, helpers_1.isSet)(object.lastConnected) ? (0, helpers_1.fromJsonTimestamp)(object.lastConnected) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.addressInfo) {
            obj.addressInfo = message.addressInfo.map(e => e ? exports.PeerAddressInfo.toJSON(e) : undefined);
        }
        else {
            obj.addressInfo = [];
        }
        message.lastConnected !== undefined && (obj.lastConnected = message.lastConnected.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeerInfo();
        message.id = object.id ?? "";
        message.addressInfo = object.addressInfo?.map(e => exports.PeerAddressInfo.fromPartial(e)) || [];
        message.lastConnected = object.lastConnected ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            addressInfo: Array.isArray(object?.address_info) ? object.address_info.map((e) => exports.PeerAddressInfo.fromAmino(e)) : [],
            lastConnected: object.last_connected
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        if (message.addressInfo) {
            obj.address_info = message.addressInfo.map(e => e ? exports.PeerAddressInfo.toAmino(e) : undefined);
        }
        else {
            obj.address_info = [];
        }
        obj.last_connected = message.lastConnected;
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
        lastDialSuccess: new Date(),
        lastDialFailure: new Date(),
        dialFailures: 0
    };
}
exports.PeerAddressInfo = {
    typeUrl: "/tendermint.p2p.PeerAddressInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.lastDialSuccess !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastDialSuccess), writer.uint32(18).fork()).ldelim();
        }
        if (message.lastDialFailure !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.lastDialFailure), writer.uint32(26).fork()).ldelim();
        }
        if (message.dialFailures !== 0) {
            writer.uint32(32).uint32(message.dialFailures);
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
                    message.lastDialSuccess = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.lastDialFailure = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.dialFailures = reader.uint32();
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
            lastDialSuccess: (0, helpers_1.isSet)(object.lastDialSuccess) ? (0, helpers_1.fromJsonTimestamp)(object.lastDialSuccess) : undefined,
            lastDialFailure: (0, helpers_1.isSet)(object.lastDialFailure) ? (0, helpers_1.fromJsonTimestamp)(object.lastDialFailure) : undefined,
            dialFailures: (0, helpers_1.isSet)(object.dialFailures) ? Number(object.dialFailures) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.lastDialSuccess !== undefined && (obj.lastDialSuccess = message.lastDialSuccess.toISOString());
        message.lastDialFailure !== undefined && (obj.lastDialFailure = message.lastDialFailure.toISOString());
        message.dialFailures !== undefined && (obj.dialFailures = Math.round(message.dialFailures));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePeerAddressInfo();
        message.address = object.address ?? "";
        message.lastDialSuccess = object.lastDialSuccess ?? undefined;
        message.lastDialFailure = object.lastDialFailure ?? undefined;
        message.dialFailures = object.dialFailures ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            lastDialSuccess: object.last_dial_success,
            lastDialFailure: object.last_dial_failure,
            dialFailures: object.dial_failures
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.last_dial_success = message.lastDialSuccess;
        obj.last_dial_failure = message.lastDialFailure;
        obj.dial_failures = message.dialFailures;
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