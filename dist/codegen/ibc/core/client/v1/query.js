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
exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryUpgradedClientStateResponse = exports.QueryUpgradedClientStateRequest = exports.QueryClientParamsResponse = exports.QueryClientParamsRequest = exports.QueryClientStatusResponse = exports.QueryClientStatusRequest = exports.QueryConsensusStatesResponse = exports.QueryConsensusStatesRequest = exports.QueryConsensusStateResponse = exports.QueryConsensusStateRequest = exports.QueryClientStatesResponse = exports.QueryClientStatesRequest = exports.QueryClientStateResponse = exports.QueryClientStateRequest = void 0;
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const any_1 = require("../../../../google/protobuf/any");
const client_1 = require("./client");
const helpers_1 = require("../../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQueryClientStateRequest() {
    return {
        client_id: ""
    };
}
exports.QueryClientStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
    aminoType: "cosmos-sdk/QueryClientStateRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStateRequest();
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
        const message = createBaseQueryClientStateRequest();
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
        return exports.QueryClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStateRequest",
            value: exports.QueryClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
            value: exports.QueryClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientStateResponse() {
    return {
        client_state: any_1.Any.fromPartial({}),
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryClientStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
    aminoType: "cosmos-sdk/QueryClientStateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
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
            client_state: (0, helpers_1.isSet)(object.client_state) ? any_1.Any.fromJSON(object.client_state) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_state !== undefined && (obj.client_state = message.client_state ? any_1.Any.toJSON(message.client_state) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStateResponse();
        message.client_state = object.client_state !== undefined && object.client_state !== null ? any_1.Any.fromPartial(object.client_state) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            client_state: object?.client_state ? any_1.Any.fromAmino(object.client_state) : undefined,
            proof: object.proof,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_state = message.client_state ? any_1.Any.toAmino(message.client_state) : undefined;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStateResponse",
            value: exports.QueryClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
            value: exports.QueryClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatesRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryClientStatesRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
    aminoType: "cosmos-sdk/QueryClientStatesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesRequest();
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
        const message = createBaseQueryClientStatesRequest();
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
        return exports.QueryClientStatesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatesRequest",
            value: exports.QueryClientStatesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
            value: exports.QueryClientStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatesResponse() {
    return {
        client_states: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryClientStatesResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
    aminoType: "cosmos-sdk/QueryClientStatesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.client_states) {
            client_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_states.push(client_1.IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            client_states: Array.isArray(object?.client_states) ? object.client_states.map((e) => client_1.IdentifiedClientState.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.client_states) {
            obj.client_states = message.client_states.map(e => e ? client_1.IdentifiedClientState.toJSON(e) : undefined);
        }
        else {
            obj.client_states = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatesResponse();
        message.client_states = object.client_states?.map(e => client_1.IdentifiedClientState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            client_states: Array.isArray(object?.client_states) ? object.client_states.map((e) => client_1.IdentifiedClientState.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.client_states) {
            obj.client_states = message.client_states.map(e => e ? client_1.IdentifiedClientState.toAmino(e) : undefined);
        }
        else {
            obj.client_states = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientStatesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatesResponse",
            value: exports.QueryClientStatesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
            value: exports.QueryClientStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStateRequest() {
    return {
        client_id: "",
        revision_number: helpers_1.Long.UZERO,
        revision_height: helpers_1.Long.UZERO,
        latest_height: false
    };
}
exports.QueryConsensusStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
    aminoType: "cosmos-sdk/QueryConsensusStateRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (!message.revision_number.isZero()) {
            writer.uint32(16).uint64(message.revision_number);
        }
        if (!message.revision_height.isZero()) {
            writer.uint32(24).uint64(message.revision_height);
        }
        if (message.latest_height === true) {
            writer.uint32(32).bool(message.latest_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.revision_number = reader.uint64();
                    break;
                case 3:
                    message.revision_height = reader.uint64();
                    break;
                case 4:
                    message.latest_height = reader.bool();
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
            revision_number: (0, helpers_1.isSet)(object.revision_number) ? helpers_1.Long.fromValue(object.revision_number) : helpers_1.Long.UZERO,
            revision_height: (0, helpers_1.isSet)(object.revision_height) ? helpers_1.Long.fromValue(object.revision_height) : helpers_1.Long.UZERO,
            latest_height: (0, helpers_1.isSet)(object.latest_height) ? Boolean(object.latest_height) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.revision_number !== undefined && (obj.revision_number = (message.revision_number || helpers_1.Long.UZERO).toString());
        message.revision_height !== undefined && (obj.revision_height = (message.revision_height || helpers_1.Long.UZERO).toString());
        message.latest_height !== undefined && (obj.latest_height = message.latest_height);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateRequest();
        message.client_id = object.client_id ?? "";
        message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? helpers_1.Long.fromValue(object.revision_number) : helpers_1.Long.UZERO;
        message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? helpers_1.Long.fromValue(object.revision_height) : helpers_1.Long.UZERO;
        message.latest_height = object.latest_height ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            revision_number: helpers_1.Long.fromString(object.revision_number),
            revision_height: helpers_1.Long.fromString(object.revision_height),
            latest_height: object.latest_height
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.revision_number = message.revision_number ? message.revision_number.toString() : undefined;
        obj.revision_height = message.revision_height ? message.revision_height.toString() : undefined;
        obj.latest_height = message.latest_height;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateRequest",
            value: exports.QueryConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
            value: exports.QueryConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStateResponse() {
    return {
        consensus_state: any_1.Any.fromPartial({}),
        proof: new Uint8Array(),
        proof_height: client_1.Height.fromPartial({})
    };
}
exports.QueryConsensusStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
    aminoType: "cosmos-sdk/QueryConsensusStateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
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
            consensus_state: (0, helpers_1.isSet)(object.consensus_state) ? any_1.Any.fromJSON(object.consensus_state) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? (0, helpers_1.bytesFromBase64)(object.proof) : new Uint8Array(),
            proof_height: (0, helpers_1.isSet)(object.proof_height) ? client_1.Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? any_1.Any.toJSON(message.consensus_state) : undefined);
        message.proof !== undefined && (obj.proof = (0, helpers_1.base64FromBytes)(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? client_1.Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStateResponse();
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? any_1.Any.fromPartial(object.consensus_state) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? client_1.Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            consensus_state: object?.consensus_state ? any_1.Any.fromAmino(object.consensus_state) : undefined,
            proof: object.proof,
            proof_height: object?.proof_height ? client_1.Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.consensus_state = message.consensus_state ? any_1.Any.toAmino(message.consensus_state) : undefined;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? client_1.Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStateResponse",
            value: exports.QueryConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
            value: exports.QueryConsensusStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStatesRequest() {
    return {
        client_id: "",
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryConsensusStatesRequest = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
    aminoType: "cosmos-sdk/QueryConsensusStatesRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStatesRequest();
        message.client_id = object.client_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStatesRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStatesRequest",
            value: exports.QueryConsensusStatesRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStatesRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStatesRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
            value: exports.QueryConsensusStatesRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConsensusStatesResponse() {
    return {
        consensus_states: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryConsensusStatesResponse = {
    typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
    aminoType: "cosmos-sdk/QueryConsensusStatesResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.consensus_states) {
            client_1.ConsensusStateWithHeight.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConsensusStatesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_states.push(client_1.ConsensusStateWithHeight.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            consensus_states: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e) => client_1.ConsensusStateWithHeight.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.consensus_states) {
            obj.consensus_states = message.consensus_states.map(e => e ? client_1.ConsensusStateWithHeight.toJSON(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConsensusStatesResponse();
        message.consensus_states = object.consensus_states?.map(e => client_1.ConsensusStateWithHeight.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            consensus_states: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e) => client_1.ConsensusStateWithHeight.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.consensus_states) {
            obj.consensus_states = message.consensus_states.map(e => e ? client_1.ConsensusStateWithHeight.toAmino(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryConsensusStatesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConsensusStatesResponse",
            value: exports.QueryConsensusStatesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryConsensusStatesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryConsensusStatesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
            value: exports.QueryConsensusStatesResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatusRequest() {
    return {
        client_id: ""
    };
}
exports.QueryClientStatusRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
    aminoType: "cosmos-sdk/QueryClientStatusRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatusRequest();
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
        const message = createBaseQueryClientStatusRequest();
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
        return exports.QueryClientStatusRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatusRequest",
            value: exports.QueryClientStatusRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatusRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatusRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
            value: exports.QueryClientStatusRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientStatusResponse() {
    return {
        status: ""
    };
}
exports.QueryClientStatusResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
    aminoType: "cosmos-sdk/QueryClientStatusResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
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
            status: (0, helpers_1.isSet)(object.status) ? String(object.status) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientStatusResponse();
        message.status = object.status ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            status: object.status
        };
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientStatusResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientStatusResponse",
            value: exports.QueryClientStatusResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientStatusResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientStatusResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
            value: exports.QueryClientStatusResponse.encode(message).finish()
        };
    }
};
function createBaseQueryClientParamsRequest() {
    return {};
}
exports.QueryClientParamsRequest = {
    typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
    aminoType: "cosmos-sdk/QueryClientParamsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsRequest();
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
        const message = createBaseQueryClientParamsRequest();
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
        return exports.QueryClientParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientParamsRequest",
            value: exports.QueryClientParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientParamsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
            value: exports.QueryClientParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryClientParamsResponse() {
    return {
        params: client_1.Params.fromPartial({})
    };
}
exports.QueryClientParamsResponse = {
    typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
    aminoType: "cosmos-sdk/QueryClientParamsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = client_1.Params.decode(reader, reader.uint32());
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
            params: (0, helpers_1.isSet)(object.params) ? client_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? client_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryClientParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? client_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? client_1.Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? client_1.Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryClientParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryClientParamsResponse",
            value: exports.QueryClientParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryClientParamsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryClientParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
            value: exports.QueryClientParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedClientStateRequest() {
    return {};
}
exports.QueryUpgradedClientStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
    aminoType: "cosmos-sdk/QueryUpgradedClientStateRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateRequest();
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
        const message = createBaseQueryUpgradedClientStateRequest();
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
        return exports.QueryUpgradedClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedClientStateRequest",
            value: exports.QueryUpgradedClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
            value: exports.QueryUpgradedClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedClientStateResponse() {
    return {
        upgraded_client_state: any_1.Any.fromPartial({})
    };
}
exports.QueryUpgradedClientStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
    aminoType: "cosmos-sdk/QueryUpgradedClientStateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.upgraded_client_state !== undefined) {
            any_1.Any.encode(message.upgraded_client_state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgraded_client_state = any_1.Any.decode(reader, reader.uint32());
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
            upgraded_client_state: (0, helpers_1.isSet)(object.upgraded_client_state) ? any_1.Any.fromJSON(object.upgraded_client_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.upgraded_client_state !== undefined && (obj.upgraded_client_state = message.upgraded_client_state ? any_1.Any.toJSON(message.upgraded_client_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedClientStateResponse();
        message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? any_1.Any.fromPartial(object.upgraded_client_state) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            upgraded_client_state: object?.upgraded_client_state ? any_1.Any.fromAmino(object.upgraded_client_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_client_state = message.upgraded_client_state ? any_1.Any.toAmino(message.upgraded_client_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedClientStateResponse",
            value: exports.QueryUpgradedClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
            value: exports.QueryUpgradedClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return {};
}
exports.QueryUpgradedConsensusStateRequest = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
    aminoType: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
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
        const message = createBaseQueryUpgradedConsensusStateRequest();
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
        return exports.QueryUpgradedConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
            value: exports.QueryUpgradedConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
            value: exports.QueryUpgradedConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return {
        upgraded_consensus_state: any_1.Any.fromPartial({})
    };
}
exports.QueryUpgradedConsensusStateResponse = {
    typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
    aminoType: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.upgraded_consensus_state !== undefined) {
            any_1.Any.encode(message.upgraded_consensus_state, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.upgraded_consensus_state = any_1.Any.decode(reader, reader.uint32());
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
            upgraded_consensus_state: (0, helpers_1.isSet)(object.upgraded_consensus_state) ? any_1.Any.fromJSON(object.upgraded_consensus_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.upgraded_consensus_state !== undefined && (obj.upgraded_consensus_state = message.upgraded_consensus_state ? any_1.Any.toJSON(message.upgraded_consensus_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgraded_consensus_state = object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null ? any_1.Any.fromPartial(object.upgraded_consensus_state) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            upgraded_consensus_state: object?.upgraded_consensus_state ? any_1.Any.fromAmino(object.upgraded_consensus_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.upgraded_consensus_state = message.upgraded_consensus_state ? any_1.Any.toAmino(message.upgraded_consensus_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryUpgradedConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
            value: exports.QueryUpgradedConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryUpgradedConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryUpgradedConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
            value: exports.QueryUpgradedConsensusStateResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map