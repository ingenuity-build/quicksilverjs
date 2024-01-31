import { MerklePrefix } from "../../commitment/v1/commitment";
import { Long, isSet } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export var State;
(function (State) {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
    /** STATE_INIT - A connection end has just started the opening handshake. */
    State[State["STATE_INIT"] = 1] = "STATE_INIT";
    /**
     * STATE_TRYOPEN - A connection end has acknowledged the handshake step on the counterparty
     * chain.
     */
    State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
    /** STATE_OPEN - A connection end has completed the handshake. */
    State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State || (State = {}));
export const StateSDKType = State;
export const StateAmino = State;
export function stateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNINITIALIZED_UNSPECIFIED":
            return State.STATE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "STATE_INIT":
            return State.STATE_INIT;
        case 2:
        case "STATE_TRYOPEN":
            return State.STATE_TRYOPEN;
        case 3:
        case "STATE_OPEN":
            return State.STATE_OPEN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}
export function stateToJSON(object) {
    switch (object) {
        case State.STATE_UNINITIALIZED_UNSPECIFIED:
            return "STATE_UNINITIALIZED_UNSPECIFIED";
        case State.STATE_INIT:
            return "STATE_INIT";
        case State.STATE_TRYOPEN:
            return "STATE_TRYOPEN";
        case State.STATE_OPEN:
            return "STATE_OPEN";
        case State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseConnectionEnd() {
    return {
        client_id: "",
        versions: [],
        state: 0,
        counterparty: Counterparty.fromPartial({}),
        delay_period: Long.UZERO
    };
}
export const ConnectionEnd = {
    typeUrl: "/ibc.core.connection.v1.ConnectionEnd",
    aminoType: "cosmos-sdk/ConnectionEnd",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.versions) {
            Version.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (!message.delay_period.isZero()) {
            writer.uint32(40).uint64(message.delay_period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectionEnd();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.versions.push(Version.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.counterparty = Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.delay_period = reader.uint64();
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
            versions: Array.isArray(object?.versions) ? object.versions.map((e) => Version.fromJSON(e)) : [],
            state: isSet(object.state) ? stateFromJSON(object.state) : -1,
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            delay_period: isSet(object.delay_period) ? Long.fromValue(object.delay_period) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.versions) {
            obj.versions = message.versions.map(e => e ? Version.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
        message.delay_period !== undefined && (obj.delay_period = (message.delay_period || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectionEnd();
        message.client_id = object.client_id ?? "";
        message.versions = object.versions?.map(e => Version.fromPartial(e)) || [];
        message.state = object.state ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
        message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? Long.fromValue(object.delay_period) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            versions: Array.isArray(object?.versions) ? object.versions.map((e) => Version.fromAmino(e)) : [],
            state: isSet(object.state) ? stateFromJSON(object.state) : -1,
            counterparty: object?.counterparty ? Counterparty.fromAmino(object.counterparty) : undefined,
            delay_period: Long.fromString(object.delay_period)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        if (message.versions) {
            obj.versions = message.versions.map(e => e ? Version.toAmino(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        obj.state = message.state;
        obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
        obj.delay_period = message.delay_period ? message.delay_period.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConnectionEnd.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConnectionEnd",
            value: ConnectionEnd.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConnectionEnd.decode(message.value);
    },
    toProto(message) {
        return ConnectionEnd.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.ConnectionEnd",
            value: ConnectionEnd.encode(message).finish()
        };
    }
};
function createBaseIdentifiedConnection() {
    return {
        id: "",
        client_id: "",
        versions: [],
        state: 0,
        counterparty: Counterparty.fromPartial({}),
        delay_period: Long.UZERO
    };
}
export const IdentifiedConnection = {
    typeUrl: "/ibc.core.connection.v1.IdentifiedConnection",
    aminoType: "cosmos-sdk/IdentifiedConnection",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.client_id !== "") {
            writer.uint32(18).string(message.client_id);
        }
        for (const v of message.versions) {
            Version.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(42).fork()).ldelim();
        }
        if (!message.delay_period.isZero()) {
            writer.uint32(48).uint64(message.delay_period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedConnection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.client_id = reader.string();
                    break;
                case 3:
                    message.versions.push(Version.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                case 5:
                    message.counterparty = Counterparty.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.delay_period = reader.uint64();
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            versions: Array.isArray(object?.versions) ? object.versions.map((e) => Version.fromJSON(e)) : [],
            state: isSet(object.state) ? stateFromJSON(object.state) : -1,
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            delay_period: isSet(object.delay_period) ? Long.fromValue(object.delay_period) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.versions) {
            obj.versions = message.versions.map(e => e ? Version.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
        message.delay_period !== undefined && (obj.delay_period = (message.delay_period || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIdentifiedConnection();
        message.id = object.id ?? "";
        message.client_id = object.client_id ?? "";
        message.versions = object.versions?.map(e => Version.fromPartial(e)) || [];
        message.state = object.state ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
        message.delay_period = object.delay_period !== undefined && object.delay_period !== null ? Long.fromValue(object.delay_period) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            client_id: object.client_id,
            versions: Array.isArray(object?.versions) ? object.versions.map((e) => Version.fromAmino(e)) : [],
            state: isSet(object.state) ? stateFromJSON(object.state) : -1,
            counterparty: object?.counterparty ? Counterparty.fromAmino(object.counterparty) : undefined,
            delay_period: Long.fromString(object.delay_period)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.client_id = message.client_id;
        if (message.versions) {
            obj.versions = message.versions.map(e => e ? Version.toAmino(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        obj.state = message.state;
        obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
        obj.delay_period = message.delay_period ? message.delay_period.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return IdentifiedConnection.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedConnection",
            value: IdentifiedConnection.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return IdentifiedConnection.decode(message.value);
    },
    toProto(message) {
        return IdentifiedConnection.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.IdentifiedConnection",
            value: IdentifiedConnection.encode(message).finish()
        };
    }
};
function createBaseCounterparty() {
    return {
        client_id: "",
        connection_id: "",
        prefix: MerklePrefix.fromPartial({})
    };
}
export const Counterparty = {
    typeUrl: "/ibc.core.connection.v1.Counterparty",
    aminoType: "cosmos-sdk/Counterparty",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        if (message.prefix !== undefined) {
            MerklePrefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCounterparty();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.connection_id = reader.string();
                    break;
                case 3:
                    message.prefix = MerklePrefix.decode(reader, reader.uint32());
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
            connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
            prefix: isSet(object.prefix) ? MerklePrefix.fromJSON(object.prefix) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.prefix !== undefined && (obj.prefix = message.prefix ? MerklePrefix.toJSON(message.prefix) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCounterparty();
        message.client_id = object.client_id ?? "";
        message.connection_id = object.connection_id ?? "";
        message.prefix = object.prefix !== undefined && object.prefix !== null ? MerklePrefix.fromPartial(object.prefix) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            connection_id: object.connection_id,
            prefix: object?.prefix ? MerklePrefix.fromAmino(object.prefix) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.connection_id = message.connection_id;
        obj.prefix = message.prefix ? MerklePrefix.toAmino(message.prefix) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Counterparty.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Counterparty",
            value: Counterparty.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Counterparty.decode(message.value);
    },
    toProto(message) {
        return Counterparty.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.Counterparty",
            value: Counterparty.encode(message).finish()
        };
    }
};
function createBaseClientPaths() {
    return {
        paths: []
    };
}
export const ClientPaths = {
    typeUrl: "/ibc.core.connection.v1.ClientPaths",
    aminoType: "cosmos-sdk/ClientPaths",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.paths) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientPaths();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paths.push(reader.string());
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
            paths: Array.isArray(object?.paths) ? object.paths.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.paths) {
            obj.paths = message.paths.map(e => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientPaths();
        message.paths = object.paths?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            paths: Array.isArray(object?.paths) ? object.paths.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.paths) {
            obj.paths = message.paths.map(e => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ClientPaths.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientPaths",
            value: ClientPaths.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientPaths.decode(message.value);
    },
    toProto(message) {
        return ClientPaths.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.ClientPaths",
            value: ClientPaths.encode(message).finish()
        };
    }
};
function createBaseConnectionPaths() {
    return {
        client_id: "",
        paths: []
    };
}
export const ConnectionPaths = {
    typeUrl: "/ibc.core.connection.v1.ConnectionPaths",
    aminoType: "cosmos-sdk/ConnectionPaths",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.paths) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectionPaths();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.paths.push(reader.string());
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
            paths: Array.isArray(object?.paths) ? object.paths.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.paths) {
            obj.paths = message.paths.map(e => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectionPaths();
        message.client_id = object.client_id ?? "";
        message.paths = object.paths?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            paths: Array.isArray(object?.paths) ? object.paths.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        if (message.paths) {
            obj.paths = message.paths.map(e => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ConnectionPaths.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConnectionPaths",
            value: ConnectionPaths.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConnectionPaths.decode(message.value);
    },
    toProto(message) {
        return ConnectionPaths.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.ConnectionPaths",
            value: ConnectionPaths.encode(message).finish()
        };
    }
};
function createBaseVersion() {
    return {
        identifier: "",
        features: []
    };
}
export const Version = {
    typeUrl: "/ibc.core.connection.v1.Version",
    aminoType: "cosmos-sdk/Version",
    encode(message, writer = _m0.Writer.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        for (const v of message.features) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                case 2:
                    message.features.push(reader.string());
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
            identifier: isSet(object.identifier) ? String(object.identifier) : "",
            features: Array.isArray(object?.features) ? object.features.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.identifier !== undefined && (obj.identifier = message.identifier);
        if (message.features) {
            obj.features = message.features.map(e => e);
        }
        else {
            obj.features = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVersion();
        message.identifier = object.identifier ?? "";
        message.features = object.features?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            identifier: object.identifier,
            features: Array.isArray(object?.features) ? object.features.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.identifier = message.identifier;
        if (message.features) {
            obj.features = message.features.map(e => e);
        }
        else {
            obj.features = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Version.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Version",
            value: Version.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Version.decode(message.value);
    },
    toProto(message) {
        return Version.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.Version",
            value: Version.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        max_expected_time_per_block: Long.UZERO
    };
}
export const Params = {
    typeUrl: "/ibc.core.connection.v1.Params",
    aminoType: "cosmos-sdk/Params",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.max_expected_time_per_block.isZero()) {
            writer.uint32(8).uint64(message.max_expected_time_per_block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_expected_time_per_block = reader.uint64();
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
            max_expected_time_per_block: isSet(object.max_expected_time_per_block) ? Long.fromValue(object.max_expected_time_per_block) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_expected_time_per_block !== undefined && (obj.max_expected_time_per_block = (message.max_expected_time_per_block || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.max_expected_time_per_block = object.max_expected_time_per_block !== undefined && object.max_expected_time_per_block !== null ? Long.fromValue(object.max_expected_time_per_block) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            max_expected_time_per_block: Long.fromString(object.max_expected_time_per_block)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.max_expected_time_per_block = message.max_expected_time_per_block ? message.max_expected_time_per_block.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.connection.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=connection.js.map