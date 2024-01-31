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
exports.QueryConnectionConsensusStateResponse = exports.QueryConnectionConsensusStateRequest = exports.QueryConnectionClientStateResponse = exports.QueryConnectionClientStateRequest = exports.QueryClientConnectionsResponse = exports.QueryClientConnectionsRequest = exports.QueryConnectionsResponse = exports.QueryConnectionsRequest = exports.QueryConnectionResponse = exports.QueryConnectionRequest = void 0;
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const connection_1 = require("./connection");
const client_1 = require("../../client/v1/client");
const any_1 = require("../../../../google/protobuf/any");
const helpers_1 = require("../../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQueryConnectionRequest() {
    return {
        connection_id: ""
    };
}
exports.QueryConnectionRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
    aminoType: "cosmos-sdk/QueryConnectionRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
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
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionRequest();
        message.connection_id = object.connection_id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            connection_id: object.connection_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionRequest",
            value: exports.QueryConnectionRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
            value: exports.QueryConnectionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionResponse() {
    return {
        connection: connection_1.ConnectionEnd.fromPartial({}),
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
    aminoType: "cosmos-sdk/QueryConnectionResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection !== undefined) {
            connection_1.ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = connection_1.ConnectionEnd.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            connection: (0, helpers_1.isSet)(object.connection) ? connection_1.ConnectionEnd.fromJSON(object.connection) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined && (obj.connection = message.connection ? connection_1.ConnectionEnd.toJSON(message.connection) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionResponse();
        message.connection = object.connection !== undefined && object.connection !== null ? connection_1.ConnectionEnd.fromPartial(object.connection) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            connection: object?.connection ? connection_1.ConnectionEnd.fromAmino(object.connection) : undefined,
            proof: object.proof,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection = message.connection ? connection_1.ConnectionEnd.toAmino(message.connection) : undefined;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionResponse",
            value: exports.QueryConnectionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
            value: exports.QueryConnectionResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionsRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryConnectionsRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
    aminoType: "cosmos-sdk/QueryConnectionsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionsRequest",
            value: exports.QueryConnectionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
            value: exports.QueryConnectionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionsResponse() {
    return {
        connections: [],
        pagination: pagination_1.PageResponse.fromPartial({}),
        height: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionsResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
    aminoType: "cosmos-sdk/QueryConnectionsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.connections) {
            connection_1.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? client_1.Height.fromJSON(object.height) : undefined
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
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionsResponse();
        message.connections = object.connections?.map(e => connection_1.IdentifiedConnection.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? client_1.Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            connections: Array.isArray(object?.connections) ? object.connections.map((e) => connection_1.IdentifiedConnection.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined,
            height: object?.height ? client_1.Height.fromAmino(object.height) : undefined
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
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? client_1.Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionsResponse",
            value: exports.QueryConnectionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
            value: exports.QueryConnectionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientConnectionsRequest() {
    return {
        client_id: ""
    };
}
exports.QueryClientConnectionsRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
    aminoType: "cosmos-sdk/QueryClientConnectionsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientConnectionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientConnectionsRequest();
        message.client_id = object.client_id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientConnectionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientConnectionsRequest",
            value: exports.QueryClientConnectionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientConnectionsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientConnectionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
            value: exports.QueryClientConnectionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientConnectionsResponse() {
    return {
        connection_paths: [],
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryClientConnectionsResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
    aminoType: "cosmos-sdk/QueryClientConnectionsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.connection_paths) {
            writer.uint32(10).string(v);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientConnectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_paths.push(reader.string());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            connection_paths: Array.isArray(object?.connection_paths) ? object.connection_paths.map((e) => String(e)) : [],
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connection_paths) {
            obj.connection_paths = message.connection_paths.map(e => e);
        }
        else {
            obj.connection_paths = [];
        }
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientConnectionsResponse();
        message.connection_paths = object.connection_paths?.map(e => e) || [];
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            connection_paths: Array.isArray(object?.connection_paths) ? object.connection_paths.map((e) => e) : [],
            proof: object.proof,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.connection_paths) {
            obj.connection_paths = message.connection_paths.map(e => e);
        }
        else {
            obj.connection_paths = [];
        }
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientConnectionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientConnectionsResponse",
            value: exports.QueryClientConnectionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientConnectionsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientConnectionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
            value: exports.QueryClientConnectionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionClientStateRequest() {
    return {
        connection_id: ""
    };
}
exports.QueryConnectionClientStateRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
    aminoType: "cosmos-sdk/QueryConnectionClientStateRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
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
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionClientStateRequest();
        message.connection_id = object.connection_id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            connection_id: object.connection_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionClientStateRequest",
            value: exports.QueryConnectionClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
            value: exports.QueryConnectionClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionClientStateResponse() {
    return {
        identified_client_state: client_1.IdentifiedClientState.fromPartial({}),
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionClientStateResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
    aminoType: "cosmos-sdk/QueryConnectionClientStateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.identified_client_state !== undefined) {
            client_1.IdentifiedClientState.encode(message.identified_client_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identified_client_state = client_1.IdentifiedClientState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            identified_client_state: (0, helpers_1.isSet)(object.identified_client_state) ? client_1.IdentifiedClientState.fromJSON(object.identified_client_state) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.identified_client_state !== undefined && (obj.identified_client_state = message.identified_client_state ? client_1.IdentifiedClientState.toJSON(message.identified_client_state) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionClientStateResponse();
        message.identified_client_state = object.identified_client_state !== undefined && object.identified_client_state !== null ? client_1.IdentifiedClientState.fromPartial(object.identified_client_state) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            identified_client_state: object?.identified_client_state ? client_1.IdentifiedClientState.fromAmino(object.identified_client_state) : undefined,
            proof: object.proof,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.identified_client_state = message.identified_client_state ? client_1.IdentifiedClientState.toAmino(message.identified_client_state) : undefined;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionClientStateResponse",
            value: exports.QueryConnectionClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
            value: exports.QueryConnectionClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionConsensusStateRequest() {
    return {
        connection_id: "",
        revision_number: helpers_1.Long.UZERO,
        revision_height: helpers_1.Long.UZERO
    };
}
exports.QueryConnectionConsensusStateRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
    aminoType: "cosmos-sdk/QueryConnectionConsensusStateRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (!message.revision_number.isZero()) {
            writer.uint32(16).uint64(message.revision_number);
        }
        if (!message.revision_height.isZero()) {
            writer.uint32(24).uint64(message.revision_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.revision_number = reader.uint64();
                    break;
                case 3:
                    message.revision_height = reader.uint64();
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
            revision_number: (0, helpers_1.isSet)(object.revision_number) ? helpers_1.Long.fromValue(object.revision_number) : helpers_1.Long.UZERO,
            revision_height: (0, helpers_1.isSet)(object.revision_height) ? helpers_1.Long.fromValue(object.revision_height) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.revision_number !== undefined && (obj.revision_number = (message.revision_number || helpers_1.Long.UZERO).toString());
        message.revision_height !== undefined && (obj.revision_height = (message.revision_height || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionConsensusStateRequest();
        message.connection_id = object.connection_id ?? "";
        message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? helpers_1.Long.fromValue(object.revision_number) : helpers_1.Long.UZERO;
        message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? helpers_1.Long.fromValue(object.revision_height) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            connection_id: object.connection_id,
            revision_number: helpers_1.Long.fromString(object.revision_number),
            revision_height: helpers_1.Long.fromString(object.revision_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection_id = message.connection_id;
        obj.revision_number = message.revision_number ? message.revision_number.toString() : undefined;
        obj.revision_height = message.revision_height ? message.revision_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionConsensusStateRequest",
            value: exports.QueryConnectionConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
            value: exports.QueryConnectionConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionConsensusStateResponse() {
    return {
        consensus_state: any_1.Any.fromPartial({}),
        client_id: "",
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryConnectionConsensusStateResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
    aminoType: "cosmos-sdk/QueryConnectionConsensusStateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.client_id !== "") {
            writer.uint32(18).string(message.client_id);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.client_id = reader.string();
                    break;
                case 3:
                    message.proof = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            consensus_state: (0, helpers_1.isSet)(object.consensus_state) ? any_1.Any.fromJSON(object.consensus_state) : undefined,
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? any_1.Any.toJSON(message.consensus_state) : undefined);
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionConsensusStateResponse();
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? any_1.Any.fromPartial(object.consensus_state) : undefined;
        message.client_id = object.client_id ?? "";
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            consensus_state: object?.consensus_state ? any_1.Any.fromAmino(object.consensus_state) : undefined,
            client_id: object.client_id,
            proof: object.proof,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_state = message.consensus_state ? any_1.Any.toAmino(message.consensus_state) : undefined;
        obj.client_id = message.client_id;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConnectionConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionConsensusStateResponse",
            value: exports.QueryConnectionConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConnectionConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConnectionConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
            value: exports.QueryConnectionConsensusStateResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map