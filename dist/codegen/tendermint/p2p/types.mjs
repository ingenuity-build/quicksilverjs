import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, isSet, bytesFromBase64, base64FromBytes, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseProtocolVersion() {
    return {
        p2p: Long.UZERO,
        block: Long.UZERO,
        app: Long.UZERO
    };
}
export const ProtocolVersion = {
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
            p2p: isSet(object.p2p) ? Long.fromValue(object.p2p) : Long.UZERO,
            block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO,
            app: isSet(object.app) ? Long.fromValue(object.app) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.p2p !== undefined && (obj.p2p = (message.p2p || Long.UZERO).toString());
        message.block !== undefined && (obj.block = (message.block || Long.UZERO).toString());
        message.app !== undefined && (obj.app = (message.app || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProtocolVersion();
        message.p2p = object.p2p !== undefined && object.p2p !== null ? Long.fromValue(object.p2p) : Long.UZERO;
        message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
        message.app = object.app !== undefined && object.app !== null ? Long.fromValue(object.app) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            p2p: Long.fromString(object.p2p),
            block: Long.fromString(object.block),
            app: Long.fromString(object.app)
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
        return ProtocolVersion.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ProtocolVersion.decode(message.value);
    },
    toProto(message) {
        return ProtocolVersion.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.ProtocolVersion",
            value: ProtocolVersion.encode(message).finish()
        };
    }
};
function createBaseNodeInfo() {
    return {
        protocol_version: ProtocolVersion.fromPartial({}),
        node_id: "",
        listen_addr: "",
        network: "",
        version: "",
        channels: new Uint8Array(),
        moniker: "",
        other: NodeInfoOther.fromPartial({})
    };
}
export const NodeInfo = {
    typeUrl: "/tendermint.p2p.NodeInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.protocol_version !== undefined) {
            ProtocolVersion.encode(message.protocol_version, writer.uint32(10).fork()).ldelim();
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
            NodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
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
                    message.protocol_version = ProtocolVersion.decode(reader, reader.uint32());
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
                    message.other = NodeInfoOther.decode(reader, reader.uint32());
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
            protocol_version: isSet(object.protocol_version) ? ProtocolVersion.fromJSON(object.protocol_version) : undefined,
            node_id: isSet(object.node_id) ? String(object.node_id) : "",
            listen_addr: isSet(object.listen_addr) ? String(object.listen_addr) : "",
            network: isSet(object.network) ? String(object.network) : "",
            version: isSet(object.version) ? String(object.version) : "",
            channels: isSet(object.channels) ? bytesFromBase64(object.channels) : new Uint8Array(),
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            other: isSet(object.other) ? NodeInfoOther.fromJSON(object.other) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.protocol_version !== undefined && (obj.protocol_version = message.protocol_version ? ProtocolVersion.toJSON(message.protocol_version) : undefined);
        message.node_id !== undefined && (obj.node_id = message.node_id);
        message.listen_addr !== undefined && (obj.listen_addr = message.listen_addr);
        message.network !== undefined && (obj.network = message.network);
        message.version !== undefined && (obj.version = message.version);
        message.channels !== undefined && (obj.channels = base64FromBytes(message.channels !== undefined ? message.channels : new Uint8Array()));
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.other !== undefined && (obj.other = message.other ? NodeInfoOther.toJSON(message.other) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNodeInfo();
        message.protocol_version = object.protocol_version !== undefined && object.protocol_version !== null ? ProtocolVersion.fromPartial(object.protocol_version) : undefined;
        message.node_id = object.node_id ?? "";
        message.listen_addr = object.listen_addr ?? "";
        message.network = object.network ?? "";
        message.version = object.version ?? "";
        message.channels = object.channels ?? new Uint8Array();
        message.moniker = object.moniker ?? "";
        message.other = object.other !== undefined && object.other !== null ? NodeInfoOther.fromPartial(object.other) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            protocol_version: object?.protocol_version ? ProtocolVersion.fromAmino(object.protocol_version) : undefined,
            node_id: object.node_id,
            listen_addr: object.listen_addr,
            network: object.network,
            version: object.version,
            channels: object.channels,
            moniker: object.moniker,
            other: object?.other ? NodeInfoOther.fromAmino(object.other) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.protocol_version = message.protocol_version ? ProtocolVersion.toAmino(message.protocol_version) : undefined;
        obj.node_id = message.node_id;
        obj.listen_addr = message.listen_addr;
        obj.network = message.network;
        obj.version = message.version;
        obj.channels = message.channels;
        obj.moniker = message.moniker;
        obj.other = message.other ? NodeInfoOther.toAmino(message.other) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return NodeInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return NodeInfo.decode(message.value);
    },
    toProto(message) {
        return NodeInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.NodeInfo",
            value: NodeInfo.encode(message).finish()
        };
    }
};
function createBaseNodeInfoOther() {
    return {
        tx_index: "",
        rpc_address: ""
    };
}
export const NodeInfoOther = {
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
            tx_index: isSet(object.tx_index) ? String(object.tx_index) : "",
            rpc_address: isSet(object.rpc_address) ? String(object.rpc_address) : ""
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
        return NodeInfoOther.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return NodeInfoOther.decode(message.value);
    },
    toProto(message) {
        return NodeInfoOther.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.NodeInfoOther",
            value: NodeInfoOther.encode(message).finish()
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
export const PeerInfo = {
    typeUrl: "/tendermint.p2p.PeerInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.address_info) {
            PeerAddressInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.last_connected !== undefined) {
            Timestamp.encode(toTimestamp(message.last_connected), writer.uint32(26).fork()).ldelim();
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
                    message.address_info.push(PeerAddressInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.last_connected = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            id: isSet(object.id) ? String(object.id) : "",
            address_info: Array.isArray(object?.address_info) ? object.address_info.map((e) => PeerAddressInfo.fromJSON(e)) : [],
            last_connected: isSet(object.last_connected) ? fromJsonTimestamp(object.last_connected) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        if (message.address_info) {
            obj.address_info = message.address_info.map(e => e ? PeerAddressInfo.toJSON(e) : undefined);
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
        message.address_info = object.address_info?.map(e => PeerAddressInfo.fromPartial(e)) || [];
        message.last_connected = object.last_connected ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            address_info: Array.isArray(object?.address_info) ? object.address_info.map((e) => PeerAddressInfo.fromAmino(e)) : [],
            last_connected: object.last_connected
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        if (message.address_info) {
            obj.address_info = message.address_info.map(e => e ? PeerAddressInfo.toAmino(e) : undefined);
        }
        else {
            obj.address_info = [];
        }
        obj.last_connected = message.last_connected;
        return obj;
    },
    fromAminoMsg(object) {
        return PeerInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PeerInfo.decode(message.value);
    },
    toProto(message) {
        return PeerInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.PeerInfo",
            value: PeerInfo.encode(message).finish()
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
export const PeerAddressInfo = {
    typeUrl: "/tendermint.p2p.PeerAddressInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.last_dial_success !== undefined) {
            Timestamp.encode(toTimestamp(message.last_dial_success), writer.uint32(18).fork()).ldelim();
        }
        if (message.last_dial_failure !== undefined) {
            Timestamp.encode(toTimestamp(message.last_dial_failure), writer.uint32(26).fork()).ldelim();
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
                    message.last_dial_success = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.last_dial_failure = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            address: isSet(object.address) ? String(object.address) : "",
            last_dial_success: isSet(object.last_dial_success) ? fromJsonTimestamp(object.last_dial_success) : undefined,
            last_dial_failure: isSet(object.last_dial_failure) ? fromJsonTimestamp(object.last_dial_failure) : undefined,
            dial_failures: isSet(object.dial_failures) ? Number(object.dial_failures) : 0
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
        return PeerAddressInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PeerAddressInfo.decode(message.value);
    },
    toProto(message) {
        return PeerAddressInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.p2p.PeerAddressInfo",
            value: PeerAddressInfo.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map