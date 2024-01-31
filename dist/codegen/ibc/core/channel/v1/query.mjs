import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Channel, IdentifiedChannel, PacketState } from "./channel";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { Any } from "../../../../google/protobuf/any";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryChannelRequest() {
    return {
        port_id: "",
        channel_id: ""
    };
}
export const QueryChannelRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
    aminoType: "cosmos-sdk/QueryChannelRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelRequest",
            value: QueryChannelRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelRequest.decode(message.value);
    },
    toProto(message) {
        return QueryChannelRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelRequest",
            value: QueryChannelRequest.encode(message).finish()
        };
    }
};
function createBaseQueryChannelResponse() {
    return {
        channel: Channel.fromPartial({}),
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryChannelResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
    aminoType: "cosmos-sdk/QueryChannelResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel !== undefined) {
            Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel = Channel.decode(reader, reader.uint32());
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
            channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelResponse();
        message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            channel: object?.channel ? Channel.fromAmino(object.channel) : undefined,
            proof: object.proof,
            proof_height: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelResponse",
            value: QueryChannelResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelResponse.decode(message.value);
    },
    toProto(message) {
        return QueryChannelResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelResponse",
            value: QueryChannelResponse.encode(message).finish()
        };
    }
};
function createBaseQueryChannelsRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryChannelsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
    aminoType: "cosmos-sdk/QueryChannelsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelsRequest();
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
        const message = createBaseQueryChannelsRequest();
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
        return QueryChannelsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelsRequest",
            value: QueryChannelsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryChannelsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelsRequest",
            value: QueryChannelsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryChannelsResponse() {
    return {
        channels: [],
        pagination: PageResponse.fromPartial({}),
        height: Height.fromPartial({})
    };
}
export const QueryChannelsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
    aminoType: "cosmos-sdk/QueryChannelsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
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
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelsResponse();
        message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => IdentifiedChannel.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
            height: object?.height ? Height.fromAmino(object.height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelsResponse",
            value: QueryChannelsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryChannelsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelsResponse",
            value: QueryChannelsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionChannelsRequest() {
    return {
        connection: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryConnectionChannelsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
    aminoType: "cosmos-sdk/QueryConnectionChannelsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection !== "") {
            writer.uint32(10).string(message.connection);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = reader.string();
                    break;
                case 2:
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
            connection: isSet(object.connection) ? String(object.connection) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined && (obj.connection = message.connection);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionChannelsRequest();
        message.connection = object.connection ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            connection: object.connection,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.connection = message.connection;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionChannelsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionChannelsRequest",
            value: QueryConnectionChannelsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionChannelsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionChannelsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsRequest",
            value: QueryConnectionChannelsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryConnectionChannelsResponse() {
    return {
        channels: [],
        pagination: PageResponse.fromPartial({}),
        height: Height.fromPartial({})
    };
}
export const QueryConnectionChannelsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
    aminoType: "cosmos-sdk/QueryConnectionChannelsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryConnectionChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
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
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => IdentifiedChannel.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionChannelsResponse();
        message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => IdentifiedChannel.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
            height: object?.height ? Height.fromAmino(object.height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map(e => e ? IdentifiedChannel.toAmino(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryConnectionChannelsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryConnectionChannelsResponse",
            value: QueryConnectionChannelsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryConnectionChannelsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryConnectionChannelsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryConnectionChannelsResponse",
            value: QueryConnectionChannelsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryChannelClientStateRequest() {
    return {
        port_id: "",
        channel_id: ""
    };
}
export const QueryChannelClientStateRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
    aminoType: "cosmos-sdk/QueryChannelClientStateRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelClientStateRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelClientStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelClientStateRequest",
            value: QueryChannelClientStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelClientStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryChannelClientStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateRequest",
            value: QueryChannelClientStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryChannelClientStateResponse() {
    return {
        identified_client_state: IdentifiedClientState.fromPartial({}),
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryChannelClientStateResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
    aminoType: "cosmos-sdk/QueryChannelClientStateResponse",
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
        const message = createBaseQueryChannelClientStateResponse();
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
        const message = createBaseQueryChannelClientStateResponse();
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
        return QueryChannelClientStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelClientStateResponse",
            value: QueryChannelClientStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelClientStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryChannelClientStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelClientStateResponse",
            value: QueryChannelClientStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryChannelConsensusStateRequest() {
    return {
        port_id: "",
        channel_id: "",
        revision_number: Long.UZERO,
        revision_height: Long.UZERO
    };
}
export const QueryChannelConsensusStateRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
    aminoType: "cosmos-sdk/QueryChannelConsensusStateRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (!message.revision_number.isZero()) {
            writer.uint32(24).uint64(message.revision_number);
        }
        if (!message.revision_height.isZero()) {
            writer.uint32(32).uint64(message.revision_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.revision_number = reader.uint64();
                    break;
                case 4:
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            revision_number: isSet(object.revision_number) ? Long.fromValue(object.revision_number) : Long.UZERO,
            revision_height: isSet(object.revision_height) ? Long.fromValue(object.revision_height) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.revision_number !== undefined && (obj.revision_number = (message.revision_number || Long.UZERO).toString());
        message.revision_height !== undefined && (obj.revision_height = (message.revision_height || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelConsensusStateRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? Long.fromValue(object.revision_number) : Long.UZERO;
        message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? Long.fromValue(object.revision_height) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            revision_number: Long.fromString(object.revision_number),
            revision_height: Long.fromString(object.revision_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.revision_number = message.revision_number ? message.revision_number.toString() : undefined;
        obj.revision_height = message.revision_height ? message.revision_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryChannelConsensusStateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelConsensusStateRequest",
            value: QueryChannelConsensusStateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelConsensusStateRequest.decode(message.value);
    },
    toProto(message) {
        return QueryChannelConsensusStateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateRequest",
            value: QueryChannelConsensusStateRequest.encode(message).finish()
        };
    }
};
function createBaseQueryChannelConsensusStateResponse() {
    return {
        consensus_state: Any.fromPartial({}),
        client_id: "",
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryChannelConsensusStateResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
    aminoType: "cosmos-sdk/QueryChannelConsensusStateResponse",
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
        const message = createBaseQueryChannelConsensusStateResponse();
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
        const message = createBaseQueryChannelConsensusStateResponse();
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
        return QueryChannelConsensusStateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryChannelConsensusStateResponse",
            value: QueryChannelConsensusStateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryChannelConsensusStateResponse.decode(message.value);
    },
    toProto(message) {
        return QueryChannelConsensusStateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryChannelConsensusStateResponse",
            value: QueryChannelConsensusStateResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketCommitmentRequest() {
    return {
        port_id: "",
        channel_id: "",
        sequence: Long.UZERO
    };
}
export const QueryPacketCommitmentRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
    aminoType: "cosmos-sdk/QueryPacketCommitmentRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.sequence = reader.uint64();
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            sequence: Long.fromString(object.sequence)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketCommitmentRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentRequest",
            value: QueryPacketCommitmentRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketCommitmentRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketCommitmentRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentRequest",
            value: QueryPacketCommitmentRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketCommitmentResponse() {
    return {
        commitment: new Uint8Array(),
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryPacketCommitmentResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
    aminoType: "cosmos-sdk/QueryPacketCommitmentResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.commitment.length !== 0) {
            writer.uint32(10).bytes(message.commitment);
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
        const message = createBaseQueryPacketCommitmentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitment = reader.bytes();
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
            commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array(),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.commitment !== undefined && (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentResponse();
        message.commitment = object.commitment ?? new Uint8Array();
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            commitment: object.commitment,
            proof: object.proof,
            proof_height: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.commitment = message.commitment;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketCommitmentResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentResponse",
            value: QueryPacketCommitmentResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketCommitmentResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketCommitmentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentResponse",
            value: QueryPacketCommitmentResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketCommitmentsRequest() {
    return {
        port_id: "",
        channel_id: "",
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryPacketCommitmentsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
    aminoType: "cosmos-sdk/QueryPacketCommitmentsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentsRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketCommitmentsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentsRequest",
            value: QueryPacketCommitmentsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketCommitmentsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketCommitmentsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsRequest",
            value: QueryPacketCommitmentsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketCommitmentsResponse() {
    return {
        commitments: [],
        pagination: PageResponse.fromPartial({}),
        height: Height.fromPartial({})
    };
}
export const QueryPacketCommitmentsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
    aminoType: "cosmos-sdk/QueryPacketCommitmentsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.commitments) {
            PacketState.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryPacketCommitmentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitments.push(PacketState.decode(reader, reader.uint32()));
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
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => PacketState.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? PacketState.toJSON(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketCommitmentsResponse();
        message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => PacketState.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
            height: object?.height ? Height.fromAmino(object.height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? PacketState.toAmino(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketCommitmentsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketCommitmentsResponse",
            value: QueryPacketCommitmentsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketCommitmentsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketCommitmentsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketCommitmentsResponse",
            value: QueryPacketCommitmentsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketReceiptRequest() {
    return {
        port_id: "",
        channel_id: "",
        sequence: Long.UZERO
    };
}
export const QueryPacketReceiptRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
    aminoType: "cosmos-sdk/QueryPacketReceiptRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketReceiptRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.sequence = reader.uint64();
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketReceiptRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            sequence: Long.fromString(object.sequence)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketReceiptRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketReceiptRequest",
            value: QueryPacketReceiptRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketReceiptRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketReceiptRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptRequest",
            value: QueryPacketReceiptRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketReceiptResponse() {
    return {
        received: false,
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryPacketReceiptResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
    aminoType: "cosmos-sdk/QueryPacketReceiptResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.received === true) {
            writer.uint32(16).bool(message.received);
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
        const message = createBaseQueryPacketReceiptResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.received = reader.bool();
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
            received: isSet(object.received) ? Boolean(object.received) : false,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.received !== undefined && (obj.received = message.received);
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketReceiptResponse();
        message.received = object.received ?? false;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            received: object.received,
            proof: object.proof,
            proof_height: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.received = message.received;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketReceiptResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketReceiptResponse",
            value: QueryPacketReceiptResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketReceiptResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketReceiptResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketReceiptResponse",
            value: QueryPacketReceiptResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketAcknowledgementRequest() {
    return {
        port_id: "",
        channel_id: "",
        sequence: Long.UZERO
    };
}
export const QueryPacketAcknowledgementRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
    aminoType: "cosmos-sdk/QueryPacketAcknowledgementRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.sequence = reader.uint64();
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            sequence: Long.fromString(object.sequence)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketAcknowledgementRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementRequest",
            value: QueryPacketAcknowledgementRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketAcknowledgementRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketAcknowledgementRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementRequest",
            value: QueryPacketAcknowledgementRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketAcknowledgementResponse() {
    return {
        acknowledgement: new Uint8Array(),
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryPacketAcknowledgementResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
    aminoType: "cosmos-sdk/QueryPacketAcknowledgementResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.acknowledgement.length !== 0) {
            writer.uint32(10).bytes(message.acknowledgement);
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
        const message = createBaseQueryPacketAcknowledgementResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.acknowledgement = reader.bytes();
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
            acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array(),
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.acknowledgement !== undefined && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementResponse();
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            acknowledgement: object.acknowledgement,
            proof: object.proof,
            proof_height: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.acknowledgement = message.acknowledgement;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketAcknowledgementResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementResponse",
            value: QueryPacketAcknowledgementResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketAcknowledgementResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketAcknowledgementResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementResponse",
            value: QueryPacketAcknowledgementResponse.encode(message).finish()
        };
    }
};
function createBaseQueryPacketAcknowledgementsRequest() {
    return {
        port_id: "",
        channel_id: "",
        pagination: PageRequest.fromPartial({}),
        packet_commitment_sequences: []
    };
}
export const QueryPacketAcknowledgementsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
    aminoType: "cosmos-sdk/QueryPacketAcknowledgementsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.packet_commitment_sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packet_commitment_sequences.push(reader.uint64());
                        }
                    }
                    else {
                        message.packet_commitment_sequences.push(reader.uint64());
                    }
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            packet_commitment_sequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e) => Long.fromValue(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        if (message.packet_commitment_sequences) {
            obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => (e || Long.UZERO).toString());
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementsRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
            packet_commitment_sequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        if (message.packet_commitment_sequences) {
            obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => e);
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketAcknowledgementsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementsRequest",
            value: QueryPacketAcknowledgementsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketAcknowledgementsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryPacketAcknowledgementsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsRequest",
            value: QueryPacketAcknowledgementsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryPacketAcknowledgementsResponse() {
    return {
        acknowledgements: [],
        pagination: PageResponse.fromPartial({}),
        height: Height.fromPartial({})
    };
}
export const QueryPacketAcknowledgementsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
    aminoType: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.acknowledgements) {
            PacketState.encode(v, writer.uint32(10).fork()).ldelim();
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
        const message = createBaseQueryPacketAcknowledgementsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
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
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => PacketState.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toJSON(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPacketAcknowledgementsResponse();
        message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => PacketState.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
            height: object?.height ? Height.fromAmino(object.height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toAmino(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryPacketAcknowledgementsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryPacketAcknowledgementsResponse",
            value: QueryPacketAcknowledgementsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryPacketAcknowledgementsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryPacketAcknowledgementsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryPacketAcknowledgementsResponse",
            value: QueryPacketAcknowledgementsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUnreceivedPacketsRequest() {
    return {
        port_id: "",
        channel_id: "",
        packet_commitment_sequences: []
    };
}
export const QueryUnreceivedPacketsRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
    aminoType: "cosmos-sdk/QueryUnreceivedPacketsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        writer.uint32(26).fork();
        for (const v of message.packet_commitment_sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedPacketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packet_commitment_sequences.push(reader.uint64());
                        }
                    }
                    else {
                        message.packet_commitment_sequences.push(reader.uint64());
                    }
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            packet_commitment_sequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e) => Long.fromValue(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        if (message.packet_commitment_sequences) {
            obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => (e || Long.UZERO).toString());
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedPacketsRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.packet_commitment_sequences = object.packet_commitment_sequences?.map(e => Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            packet_commitment_sequences: Array.isArray(object?.packet_commitment_sequences) ? object.packet_commitment_sequences.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        if (message.packet_commitment_sequences) {
            obj.packet_commitment_sequences = message.packet_commitment_sequences.map(e => e);
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnreceivedPacketsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedPacketsRequest",
            value: QueryUnreceivedPacketsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnreceivedPacketsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUnreceivedPacketsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsRequest",
            value: QueryUnreceivedPacketsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUnreceivedPacketsResponse() {
    return {
        sequences: [],
        height: Height.fromPartial({})
    };
}
export const QueryUnreceivedPacketsResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
    aminoType: "cosmos-sdk/QueryUnreceivedPacketsResponse",
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedPacketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sequences.push(reader.uint64());
                        }
                    }
                    else {
                        message.sequences.push(reader.uint64());
                    }
                    break;
                case 2:
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
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => Long.fromValue(e)) : [],
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => (e || Long.UZERO).toString());
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedPacketsResponse();
        message.sequences = object.sequences?.map(e => Long.fromValue(e)) || [];
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => e) : [],
            height: object?.height ? Height.fromAmino(object.height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e);
        }
        else {
            obj.sequences = [];
        }
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnreceivedPacketsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedPacketsResponse",
            value: QueryUnreceivedPacketsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnreceivedPacketsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUnreceivedPacketsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedPacketsResponse",
            value: QueryUnreceivedPacketsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryUnreceivedAcksRequest() {
    return {
        port_id: "",
        channel_id: "",
        packet_ack_sequences: []
    };
}
export const QueryUnreceivedAcksRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
    aminoType: "cosmos-sdk/QueryUnreceivedAcksRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        writer.uint32(26).fork();
        for (const v of message.packet_ack_sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedAcksRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packet_ack_sequences.push(reader.uint64());
                        }
                    }
                    else {
                        message.packet_ack_sequences.push(reader.uint64());
                    }
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            packet_ack_sequences: Array.isArray(object?.packet_ack_sequences) ? object.packet_ack_sequences.map((e) => Long.fromValue(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        if (message.packet_ack_sequences) {
            obj.packet_ack_sequences = message.packet_ack_sequences.map(e => (e || Long.UZERO).toString());
        }
        else {
            obj.packet_ack_sequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedAcksRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.packet_ack_sequences = object.packet_ack_sequences?.map(e => Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            packet_ack_sequences: Array.isArray(object?.packet_ack_sequences) ? object.packet_ack_sequences.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        if (message.packet_ack_sequences) {
            obj.packet_ack_sequences = message.packet_ack_sequences.map(e => e);
        }
        else {
            obj.packet_ack_sequences = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnreceivedAcksRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedAcksRequest",
            value: QueryUnreceivedAcksRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnreceivedAcksRequest.decode(message.value);
    },
    toProto(message) {
        return QueryUnreceivedAcksRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksRequest",
            value: QueryUnreceivedAcksRequest.encode(message).finish()
        };
    }
};
function createBaseQueryUnreceivedAcksResponse() {
    return {
        sequences: [],
        height: Height.fromPartial({})
    };
}
export const QueryUnreceivedAcksResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
    aminoType: "cosmos-sdk/QueryUnreceivedAcksResponse",
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedAcksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sequences.push(reader.uint64());
                        }
                    }
                    else {
                        message.sequences.push(reader.uint64());
                    }
                    break;
                case 2:
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
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => Long.fromValue(e)) : [],
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => (e || Long.UZERO).toString());
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnreceivedAcksResponse();
        message.sequences = object.sequences?.map(e => Long.fromValue(e)) || [];
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            sequences: Array.isArray(object?.sequences) ? object.sequences.map((e) => e) : [],
            height: object?.height ? Height.fromAmino(object.height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map(e => e);
        }
        else {
            obj.sequences = [];
        }
        obj.height = message.height ? Height.toAmino(message.height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryUnreceivedAcksResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryUnreceivedAcksResponse",
            value: QueryUnreceivedAcksResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryUnreceivedAcksResponse.decode(message.value);
    },
    toProto(message) {
        return QueryUnreceivedAcksResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryUnreceivedAcksResponse",
            value: QueryUnreceivedAcksResponse.encode(message).finish()
        };
    }
};
function createBaseQueryNextSequenceReceiveRequest() {
    return {
        port_id: "",
        channel_id: ""
    };
}
export const QueryNextSequenceReceiveRequest = {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
    aminoType: "cosmos-sdk/QueryNextSequenceReceiveRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNextSequenceReceiveRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceReceiveRequest();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryNextSequenceReceiveRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNextSequenceReceiveRequest",
            value: QueryNextSequenceReceiveRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNextSequenceReceiveRequest.decode(message.value);
    },
    toProto(message) {
        return QueryNextSequenceReceiveRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveRequest",
            value: QueryNextSequenceReceiveRequest.encode(message).finish()
        };
    }
};
function createBaseQueryNextSequenceReceiveResponse() {
    return {
        next_sequence_receive: Long.UZERO,
        proof: new Uint8Array(),
        proof_height: Height.fromPartial({})
    };
}
export const QueryNextSequenceReceiveResponse = {
    typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
    aminoType: "cosmos-sdk/QueryNextSequenceReceiveResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.next_sequence_receive.isZero()) {
            writer.uint32(8).uint64(message.next_sequence_receive);
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
        const message = createBaseQueryNextSequenceReceiveResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.next_sequence_receive = reader.uint64();
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
            next_sequence_receive: isSet(object.next_sequence_receive) ? Long.fromValue(object.next_sequence_receive) : Long.UZERO,
            proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
            proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.next_sequence_receive !== undefined && (obj.next_sequence_receive = (message.next_sequence_receive || Long.UZERO).toString());
        message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryNextSequenceReceiveResponse();
        message.next_sequence_receive = object.next_sequence_receive !== undefined && object.next_sequence_receive !== null ? Long.fromValue(object.next_sequence_receive) : Long.UZERO;
        message.proof = object.proof ?? new Uint8Array();
        message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            next_sequence_receive: Long.fromString(object.next_sequence_receive),
            proof: object.proof,
            proof_height: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.next_sequence_receive = message.next_sequence_receive ? message.next_sequence_receive.toString() : undefined;
        obj.proof = message.proof;
        obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
        return obj;
    },
    fromAminoMsg(object) {
        return QueryNextSequenceReceiveResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryNextSequenceReceiveResponse",
            value: QueryNextSequenceReceiveResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryNextSequenceReceiveResponse.decode(message.value);
    },
    toProto(message) {
        return QueryNextSequenceReceiveResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.QueryNextSequenceReceiveResponse",
            value: QueryNextSequenceReceiveResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map