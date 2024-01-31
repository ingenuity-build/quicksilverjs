import { IdentifiedClientState, ClientConsensusStates, Params } from "./client";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        clients: [],
        clients_consensus: [],
        clients_metadata: [],
        params: Params.fromPartial({}),
        create_localhost: false,
        next_client_sequence: Long.UZERO
    };
}
export const GenesisState = {
    typeUrl: "/ibc.core.client.v1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.clients) {
            IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clients_consensus) {
            ClientConsensusStates.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.clients_metadata) {
            IdentifiedGenesisMetadata.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
                    message.clients.push(IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clients_consensus.push(ClientConsensusStates.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.clients_metadata.push(IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.params = Params.decode(reader, reader.uint32());
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
            clients: Array.isArray(object?.clients) ? object.clients.map((e) => IdentifiedClientState.fromJSON(e)) : [],
            clients_consensus: Array.isArray(object?.clients_consensus) ? object.clients_consensus.map((e) => ClientConsensusStates.fromJSON(e)) : [],
            clients_metadata: Array.isArray(object?.clients_metadata) ? object.clients_metadata.map((e) => IdentifiedGenesisMetadata.fromJSON(e)) : [],
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            create_localhost: isSet(object.create_localhost) ? Boolean(object.create_localhost) : false,
            next_client_sequence: isSet(object.next_client_sequence) ? Long.fromValue(object.next_client_sequence) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.clients) {
            obj.clients = message.clients.map(e => e ? IdentifiedClientState.toJSON(e) : undefined);
        }
        else {
            obj.clients = [];
        }
        if (message.clients_consensus) {
            obj.clients_consensus = message.clients_consensus.map(e => e ? ClientConsensusStates.toJSON(e) : undefined);
        }
        else {
            obj.clients_consensus = [];
        }
        if (message.clients_metadata) {
            obj.clients_metadata = message.clients_metadata.map(e => e ? IdentifiedGenesisMetadata.toJSON(e) : undefined);
        }
        else {
            obj.clients_metadata = [];
        }
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        message.create_localhost !== undefined && (obj.create_localhost = message.create_localhost);
        message.next_client_sequence !== undefined && (obj.next_client_sequence = (message.next_client_sequence || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.clients = object.clients?.map(e => IdentifiedClientState.fromPartial(e)) || [];
        message.clients_consensus = object.clients_consensus?.map(e => ClientConsensusStates.fromPartial(e)) || [];
        message.clients_metadata = object.clients_metadata?.map(e => IdentifiedGenesisMetadata.fromPartial(e)) || [];
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.create_localhost = object.create_localhost ?? false;
        message.next_client_sequence = object.next_client_sequence !== undefined && object.next_client_sequence !== null ? Long.fromValue(object.next_client_sequence) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            clients: Array.isArray(object?.clients) ? object.clients.map((e) => IdentifiedClientState.fromAmino(e)) : [],
            clients_consensus: Array.isArray(object?.clients_consensus) ? object.clients_consensus.map((e) => ClientConsensusStates.fromAmino(e)) : [],
            clients_metadata: Array.isArray(object?.clients_metadata) ? object.clients_metadata.map((e) => IdentifiedGenesisMetadata.fromAmino(e)) : [],
            params: object?.params ? Params.fromAmino(object.params) : undefined,
            create_localhost: object.create_localhost,
            next_client_sequence: Long.fromString(object.next_client_sequence)
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.clients) {
            obj.clients = message.clients.map(e => e ? IdentifiedClientState.toAmino(e) : undefined);
        }
        else {
            obj.clients = [];
        }
        if (message.clients_consensus) {
            obj.clients_consensus = message.clients_consensus.map(e => e ? ClientConsensusStates.toAmino(e) : undefined);
        }
        else {
            obj.clients_consensus = [];
        }
        if (message.clients_metadata) {
            obj.clients_metadata = message.clients_metadata.map(e => e ? IdentifiedGenesisMetadata.toAmino(e) : undefined);
        }
        else {
            obj.clients_metadata = [];
        }
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.create_localhost = message.create_localhost;
        obj.next_client_sequence = message.next_client_sequence ? message.next_client_sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBaseGenesisMetadata() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array()
    };
}
export const GenesisMetadata = {
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
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
        return GenesisMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisMetadata",
            value: GenesisMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenesisMetadata.decode(message.value);
    },
    toProto(message) {
        return GenesisMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.GenesisMetadata",
            value: GenesisMetadata.encode(message).finish()
        };
    }
};
function createBaseIdentifiedGenesisMetadata() {
    return {
        client_id: "",
        client_metadata: []
    };
}
export const IdentifiedGenesisMetadata = {
    typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
    aminoType: "cosmos-sdk/IdentifiedGenesisMetadata",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.client_metadata) {
            GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.client_metadata.push(GenesisMetadata.decode(reader, reader.uint32()));
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            client_metadata: Array.isArray(object?.client_metadata) ? object.client_metadata.map((e) => GenesisMetadata.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.client_metadata) {
            obj.client_metadata = message.client_metadata.map(e => e ? GenesisMetadata.toJSON(e) : undefined);
        }
        else {
            obj.client_metadata = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIdentifiedGenesisMetadata();
        message.client_id = object.client_id ?? "";
        message.client_metadata = object.client_metadata?.map(e => GenesisMetadata.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            client_metadata: Array.isArray(object?.client_metadata) ? object.client_metadata.map((e) => GenesisMetadata.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        if (message.client_metadata) {
            obj.client_metadata = message.client_metadata.map(e => e ? GenesisMetadata.toAmino(e) : undefined);
        }
        else {
            obj.client_metadata = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return IdentifiedGenesisMetadata.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedGenesisMetadata",
            value: IdentifiedGenesisMetadata.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return IdentifiedGenesisMetadata.decode(message.value);
    },
    toProto(message) {
        return IdentifiedGenesisMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
            value: IdentifiedGenesisMetadata.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map