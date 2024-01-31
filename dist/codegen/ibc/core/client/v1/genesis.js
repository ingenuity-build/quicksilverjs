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
exports.IdentifiedGenesisMetadata = exports.GenesisMetadata = exports.GenesisState = void 0;
const client_1 = require("./client");
const helpers_1 = require("../../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGenesisState() {
    return {
        clients: [],
        clients_consensus: [],
        clients_metadata: [],
        params: client_1.Params.fromPartial({}),
        create_localhost: false,
        next_client_sequence: helpers_1.Long.UZERO
    };
}
exports.GenesisState = {
    typeUrl: "/ibc.core.client.v1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.clients) {
            client_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clients_consensus) {
            client_1.ClientConsensusStates.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.clients_metadata) {
            exports.IdentifiedGenesisMetadata.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        if (message.create_localhost === true) {
            writer.uint32(40).bool(message.create_localhost);
        }
        if (!message.next_client_sequence.isZero()) {
            writer.uint32(48).uint64(message.next_client_sequence);
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
                    message.clients.push(client_1.IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clients_consensus.push(client_1.ClientConsensusStates.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.clients_metadata.push(exports.IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.params = client_1.Params.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.create_localhost = reader.bool();
                    break;
                case 6:
                    message.next_client_sequence = reader.uint64();
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
            clients: Array.isArray(object?.clients) ? object.clients.map((e) => client_1.IdentifiedClientState.fromJSON(e)) : [],
            clients_consensus: Array.isArray(object?.clients_consensus) ? object.clients_consensus.map((e) => client_1.ClientConsensusStates.fromJSON(e)) : [],
            clients_metadata: Array.isArray(object?.clients_metadata) ? object.clients_metadata.map((e) => exports.IdentifiedGenesisMetadata.fromJSON(e)) : [],
            params: (0, helpers_1.isSet)(object.params) ? client_1.Params.fromJSON(object.params) : undefined,
            create_localhost: (0, helpers_1.isSet)(object.create_localhost) ? Boolean(object.create_localhost) : false,
            next_client_sequence: (0, helpers_1.isSet)(object.next_client_sequence) ? helpers_1.Long.fromValue(object.next_client_sequence) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.clients) {
            obj.clients = message.clients.map(e => e ? client_1.IdentifiedClientState.toJSON(e) : undefined);
        }
        else {
            obj.clients = [];
        }
        if (message.clients_consensus) {
            obj.clients_consensus = message.clients_consensus.map(e => e ? client_1.ClientConsensusStates.toJSON(e) : undefined);
        }
        else {
            obj.clients_consensus = [];
        }
        if (message.clients_metadata) {
            obj.clients_metadata = message.clients_metadata.map(e => e ? exports.IdentifiedGenesisMetadata.toJSON(e) : undefined);
        }
        else {
            obj.clients_metadata = [];
        }
        message.params !== undefined && (obj.params = message.params ? client_1.Params.toJSON(message.params) : undefined);
        message.create_localhost !== undefined && (obj.create_localhost = message.create_localhost);
        message.next_client_sequence !== undefined && (obj.next_client_sequence = (message.next_client_sequence || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.clients = object.clients?.map(e => client_1.IdentifiedClientState.fromPartial(e)) || [];
        message.clients_consensus = object.clients_consensus?.map(e => client_1.ClientConsensusStates.fromPartial(e)) || [];
        message.clients_metadata = object.clients_metadata?.map(e => exports.IdentifiedGenesisMetadata.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? client_1.Params.fromPartial(object.params) : undefined;
        message.create_localhost = object.create_localhost ?? false;
        message.next_client_sequence = object.next_client_sequence !== undefined && object.next_client_sequence !== null ? helpers_1.Long.fromValue(object.next_client_sequence) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            clients: Array.isArray(object?.clients) ? object.clients.map((e) => client_1.IdentifiedClientState.fromAmino(e)) : [],
            clients_consensus: Array.isArray(object?.clients_consensus) ? object.clients_consensus.map((e) => client_1.ClientConsensusStates.fromAmino(e)) : [],
            clients_metadata: Array.isArray(object?.clients_metadata) ? object.clients_metadata.map((e) => exports.IdentifiedGenesisMetadata.fromAmino(e)) : [],
            params: object?.params ? client_1.Params.fromAmino(object.params) : undefined,
            create_localhost: object.create_localhost,
            next_client_sequence: helpers_1.Long.fromString(object.next_client_sequence)
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.clients) {
            obj.clients = message.clients.map(e => e ? client_1.IdentifiedClientState.toAmino(e) : undefined);
        }
        else {
            obj.clients = [];
        }
        if (message.clients_consensus) {
            obj.clients_consensus = message.clients_consensus.map(e => e ? client_1.ClientConsensusStates.toAmino(e) : undefined);
        }
        else {
            obj.clients_consensus = [];
        }
        if (message.clients_metadata) {
            obj.clients_metadata = message.clients_metadata.map(e => e ? exports.IdentifiedGenesisMetadata.toAmino(e) : undefined);
        }
        else {
            obj.clients_metadata = [];
        }
        obj.params = message.params ? client_1.Params.toAmino(message.params) : undefined;
        obj.create_localhost = message.create_localhost;
        obj.next_client_sequence = message.next_client_sequence ? message.next_client_sequence.toString() : undefined;
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
            typeUrl: "/ibc.core.client.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseGenesisMetadata() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
exports.GenesisMetadata = {
    typeUrl: "/ibc.core.client.v1.GenesisMetadata",
    aminoType: "cosmos-sdk/GenesisMetadata",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
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
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisMetadata();
        message.key = object.key ?? new Uint8Array();
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisMetadata",
            value: exports.GenesisMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.GenesisMetadata",
            value: exports.GenesisMetadata.encode(message).finish()
        };
    }
};
function createBaseIdentifiedGenesisMetadata() {
    return {
        client_id: "",
        client_metadata: []
    };
}
exports.IdentifiedGenesisMetadata = {
    typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
    aminoType: "cosmos-sdk/IdentifiedGenesisMetadata",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.client_metadata) {
            exports.GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedGenesisMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.client_metadata.push(exports.GenesisMetadata.decode(reader, reader.uint32()));
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
            client_metadata: Array.isArray(object?.client_metadata) ? object.client_metadata.map((e) => exports.GenesisMetadata.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.client_metadata) {
            obj.client_metadata = message.client_metadata.map(e => e ? exports.GenesisMetadata.toJSON(e) : undefined);
        }
        else {
            obj.client_metadata = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIdentifiedGenesisMetadata();
        message.client_id = object.client_id ?? "";
        message.client_metadata = object.client_metadata?.map(e => exports.GenesisMetadata.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            client_metadata: Array.isArray(object?.client_metadata) ? object.client_metadata.map((e) => exports.GenesisMetadata.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        if (message.client_metadata) {
            obj.client_metadata = message.client_metadata.map(e => e ? exports.GenesisMetadata.toAmino(e) : undefined);
        }
        else {
            obj.client_metadata = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IdentifiedGenesisMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedGenesisMetadata",
            value: exports.IdentifiedGenesisMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IdentifiedGenesisMetadata.decode(message.value);
    },
    toProto(message) {
        return exports.IdentifiedGenesisMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
            value: exports.IdentifiedGenesisMetadata.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map