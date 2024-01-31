import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, IdentifiedConnection } from "./connection";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Any } from "../../../../google/protobuf/any";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryConnectionRequest() {
    return {
        connection_id: ""
    };
}
export const QueryConnectionRequest = {
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
            connection_id: isSet(object.connection_id) ? String(object.connection_id) : ""
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
        return QueryConnectionRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionRequest",
            value: QueryConnectionRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
            value: QueryConnectionRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionResponse() {
    return {
        connection: ConnectionEnd.fromPartial({}),
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryConnectionResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
    aminoType: "cosmos-sdk/QueryConnectionResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection !== undefined) {
            ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
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
                    message.connection = ConnectionEnd.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = Height.decode(reader, reader.uint32());
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
            connection: isSet(object.connection) ? ConnectionEnd.fromJSON(object.connection) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined && (obj.connection = message.connection ? ConnectionEnd.toJSON(message.connection) : undefined);
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionResponse();
        message.connection = object.connection !== undefined && object.connection !== null ? ConnectionEnd.fromPartial(object.connection) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            connection: object?.connection ? ConnectionEnd.fromAmino(object.connection) : undefined,
            proof: object.proof,
            proof_height: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection = message.connection ? ConnectionEnd.toAmino(message.connection) : undefined;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionResponse",
            value: QueryConnectionResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
            value: QueryConnectionResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionsRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryConnectionsRequest = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
    aminoType: "cosmos-sdk/QueryConnectionsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionsRequest",
            value: QueryConnectionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
            value: QueryConnectionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionsResponse() {
    return {
        connections: [],
        pagination: PageResponse.fromPartial({}),
        height: Height.fromPartial({})
    };
}
export const QueryConnectionsResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
    aminoType: "cosmos-sdk/QueryConnectionsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.connections) {
            IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(26).fork()).ldelim();
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
                    message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = Height.decode(reader, reader.uint32());
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
            connections: Array.isArray(object?.connections) ? object.connections.map((e) => IdentifiedConnection.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map(e => e ? IdentifiedConnection.toJSON(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionsResponse();
        message.connections = object.connections?.map(e => IdentifiedConnection.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            connections: Array.isArray(object?.connections) ? object.connections.map((e) => IdentifiedConnection.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
            height: object?.height ? Height.fromAmino(object.height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map(e => e ? IdentifiedConnection.toAmino(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionsResponse",
            value: QueryConnectionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
            value: QueryConnectionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientConnectionsRequest() {
    return {
        client_id: ""
    };
}
export const QueryClientConnectionsRequest = {
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
            client_id: isSet(object.client_id) ? String(object.client_id) : ""
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
        return QueryClientConnectionsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientConnectionsRequest",
            value: QueryClientConnectionsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientConnectionsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryClientConnectionsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
            value: QueryClientConnectionsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientConnectionsResponse() {
    return {
        connection_paths: [],
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryClientConnectionsResponse = {
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
            Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
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
                    message.proof_height = Height.decode(reader, reader.uint32());
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
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
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
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientConnectionsResponse();
        message.connection_paths = object.connection_paths?.map(e => e) || [];
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            connection_paths: Array.isArray(object?.connection_paths) ? object.connection_paths.map((e) => e) : [],
            proof: object.proof,
            proof_height: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
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
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryClientConnectionsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientConnectionsResponse",
            value: QueryClientConnectionsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryClientConnectionsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryClientConnectionsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
            value: QueryClientConnectionsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionClientStateRequest() {
    return {
        connection_id: ""
    };
}
export const QueryConnectionClientStateRequest = {
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
            connection_id: isSet(object.connection_id) ? String(object.connection_id) : ""
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
        return QueryConnectionClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionClientStateRequest",
            value: QueryConnectionClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
            value: QueryConnectionClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionClientStateResponse() {
    return {
        identified_client_state: IdentifiedClientState.fromPartial({}),
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryConnectionClientStateResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
    aminoType: "cosmos-sdk/QueryConnectionClientStateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.identified_client_state !== undefined) {
            IdentifiedClientState.encode(message.identified_client_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
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
                    message.identified_client_state = IdentifiedClientState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = Height.decode(reader, reader.uint32());
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
            identified_client_state: isSet(object.identified_client_state) ? IdentifiedClientState.fromJSON(object.identified_client_state) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.identified_client_state !== undefined && (obj.identified_client_state = message.identified_client_state ? IdentifiedClientState.toJSON(message.identified_client_state) : undefined);
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionClientStateResponse();
        message.identified_client_state = object.identified_client_state !== undefined && object.identified_client_state !== null ? IdentifiedClientState.fromPartial(object.identified_client_state) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            identified_client_state: object?.identified_client_state ? IdentifiedClientState.fromAmino(object.identified_client_state) : undefined,
            proof: object.proof,
            proof_height: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.identified_client_state = message.identified_client_state ? IdentifiedClientState.toAmino(message.identified_client_state) : undefined;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionClientStateResponse",
            value: QueryConnectionClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
            value: QueryConnectionClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionConsensusStateRequest() {
    return {
        connection_id: "",
        revision_number: Long.UZERO,
        revision_height: Long.UZERO
    };
}
export const QueryConnectionConsensusStateRequest = {
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
            connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
            revision_number: isSet(object.revision_number) ? Long.fromValue(object.revision_number) : Long.UZERO,
            revision_height: isSet(object.revision_height) ? Long.fromValue(object.revision_height) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.revision_number !== undefined && (obj.revision_number = (message.revision_number || Long.UZERO).toString());
        message.revision_height !== undefined && (obj.revision_height = (message.revision_height || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionConsensusStateRequest();
        message.connection_id = object.connection_id ?? "";
        message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? Long.fromValue(object.revision_number) : Long.UZERO;
        message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? Long.fromValue(object.revision_height) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            connection_id: object.connection_id,
            revision_number: Long.fromString(object.revision_number),
            revision_height: Long.fromString(object.revision_height)
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
        return QueryConnectionConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionConsensusStateRequest",
            value: QueryConnectionConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
            value: QueryConnectionConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionConsensusStateResponse() {
    return {
        consensus_state: Any.fromPartial({}),
        client_id: "",
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryConnectionConsensusStateResponse = {
    typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
    aminoType: "cosmos-sdk/QueryConnectionConsensusStateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensus_state !== undefined) {
            Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.client_id !== "") {
            writer.uint32(18).string(message.client_id);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
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
                    message.consensus_state = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.client_id = reader.string();
                    break;
                case 3:
                    message.proof = reader.bytes();
                    break;
                case 4:
                    message.proof_height = Height.decode(reader, reader.uint32());
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
            consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined,
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionConsensusStateResponse();
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
        message.client_id = object.client_id ?? "";
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            consensus_state: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined,
            client_id: object.client_id,
            proof: object.proof,
            proof_height: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
        obj.client_id = message.client_id;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionConsensusStateResponse",
            value: QueryConnectionConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
            value: QueryConnectionConsensusStateResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map