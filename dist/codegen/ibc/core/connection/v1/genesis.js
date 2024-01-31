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
exports.GenesisState = void 0;
const connection_1 = require("./connection");
const helpers_1 = require("../../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGenesisState() {
    return {
        connections: [],
        client_connection_paths: [],
        next_connection_sequence: helpers_1.Long.UZERO,
        params: connection_1.Params.fromPartial({})
    };
}
exports.GenesisState = {
    typeUrl: "/ibc.core.connection.v1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.connections) {
            connection_1.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.client_connection_paths) {
            connection_1.ConnectionPaths.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (!message.next_connection_sequence.isZero()) {
            writer.uint32(24).uint64(message.next_connection_sequence);
        }
        if (message.params !== undefined) {
            connection_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.client_connection_paths.push(connection_1.ConnectionPaths.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.next_connection_sequence = reader.uint64();
                    break;
                case 4:
                    message.params = connection_1.Params.decode(reader, reader.uint32());
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
            connections: Array.isArray(object?.connections) ? object.connections.map((e) => connection_1.IdentifiedConnection.fromJSON(e)) : [],
            client_connection_paths: Array.isArray(object?.client_connection_paths) ? object.client_connection_paths.map((e) => connection_1.ConnectionPaths.fromJSON(e)) : [],
            next_connection_sequence: (0, helpers_1.isSet)(object.next_connection_sequence) ? helpers_1.Long.fromValue(object.next_connection_sequence) : helpers_1.Long.UZERO,
            params: (0, helpers_1.isSet)(object.params) ? connection_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map(e => e ? connection_1.IdentifiedConnection.toJSON(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        if (message.client_connection_paths) {
            obj.client_connection_paths = message.client_connection_paths.map(e => e ? connection_1.ConnectionPaths.toJSON(e) : undefined);
        }
        else {
            obj.client_connection_paths = [];
        }
        message.next_connection_sequence !== undefined && (obj.next_connection_sequence = (message.next_connection_sequence || helpers_1.Long.UZERO).toString());
        message.params !== undefined && (obj.params = message.params ? connection_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.connections = object.connections?.map(e => connection_1.IdentifiedConnection.fromPartial(e)) || [];
        message.client_connection_paths = object.client_connection_paths?.map(e => connection_1.ConnectionPaths.fromPartial(e)) || [];
        message.next_connection_sequence = object.next_connection_sequence !== undefined && object.next_connection_sequence !== null ? helpers_1.Long.fromValue(object.next_connection_sequence) : helpers_1.Long.UZERO;
        message.params = object.params !== undefined && object.params !== null ? connection_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            connections: Array.isArray(object?.connections) ? object.connections.map((e) => connection_1.IdentifiedConnection.fromAmino(e)) : [],
            client_connection_paths: Array.isArray(object?.client_connection_paths) ? object.client_connection_paths.map((e) => connection_1.ConnectionPaths.fromAmino(e)) : [],
            next_connection_sequence: helpers_1.Long.fromString(object.next_connection_sequence),
            params: object?.params ? connection_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map(e => e ? connection_1.IdentifiedConnection.toAmino(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        if (message.client_connection_paths) {
            obj.client_connection_paths = message.client_connection_paths.map(e => e ? connection_1.ConnectionPaths.toAmino(e) : undefined);
        }
        else {
            obj.client_connection_paths = [];
        }
        obj.next_connection_sequence = message.next_connection_sequence ? message.next_connection_sequence.toString() : undefined;
        obj.params = message.params ? connection_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map