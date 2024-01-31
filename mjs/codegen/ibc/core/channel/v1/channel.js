import { Height } from "../../client/v1/client";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export var State;
(function (State) {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
    /** STATE_INIT - A channel has just started the opening handshake. */
    State[State["STATE_INIT"] = 1] = "STATE_INIT";
    /** STATE_TRYOPEN - A channel has acknowledged the handshake step on the counterparty chain. */
    State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
    /**
     * STATE_OPEN - A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     */
    State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
    /**
     * STATE_CLOSED - A channel has been closed and can no longer be used to send or receive
     * packets.
     */
    State[State["STATE_CLOSED"] = 4] = "STATE_CLOSED";
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
        case 4:
        case "STATE_CLOSED":
            return State.STATE_CLOSED;
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
        case State.STATE_CLOSED:
            return "STATE_CLOSED";
        case State.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
/** Order defines if a channel is ORDERED or UNORDERED */
export var Order;
(function (Order) {
    /** ORDER_NONE_UNSPECIFIED - zero-value for channel ordering */
    Order[Order["ORDER_NONE_UNSPECIFIED"] = 0] = "ORDER_NONE_UNSPECIFIED";
    /**
     * ORDER_UNORDERED - packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     */
    Order[Order["ORDER_UNORDERED"] = 1] = "ORDER_UNORDERED";
    /** ORDER_ORDERED - packets are delivered exactly in the order which they were sent */
    Order[Order["ORDER_ORDERED"] = 2] = "ORDER_ORDERED";
    Order[Order["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order || (Order = {}));
export const OrderSDKType = Order;
export const OrderAmino = Order;
export function orderFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_NONE_UNSPECIFIED":
            return Order.ORDER_NONE_UNSPECIFIED;
        case 1:
        case "ORDER_UNORDERED":
            return Order.ORDER_UNORDERED;
        case 2:
        case "ORDER_ORDERED":
            return Order.ORDER_ORDERED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Order.UNRECOGNIZED;
    }
}
export function orderToJSON(object) {
    switch (object) {
        case Order.ORDER_NONE_UNSPECIFIED:
            return "ORDER_NONE_UNSPECIFIED";
        case Order.ORDER_UNORDERED:
            return "ORDER_UNORDERED";
        case Order.ORDER_ORDERED:
            return "ORDER_ORDERED";
        case Order.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseChannel() {
    return {
        state: 0,
        ordering: 0,
        counterparty: Counterparty.fromPartial({}),
        connection_hops: [],
        version: ""
    };
}
export const Channel = {
    typeUrl: "/ibc.core.channel.v1.Channel",
    aminoType: "cosmos-sdk/Channel",
    encode(message, writer = _m0.Writer.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.ordering !== 0) {
            writer.uint32(16).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.connection_hops) {
            writer.uint32(34).string(v);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.ordering = reader.int32();
                    break;
                case 3:
                    message.counterparty = Counterparty.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.connection_hops.push(reader.string());
                    break;
                case 5:
                    message.version = reader.string();
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
            state: isSet(object.state) ? stateFromJSON(object.state) : -1,
            ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            connection_hops: Array.isArray(object?.connection_hops) ? object.connection_hops.map((e) => String(e)) : [],
            version: isSet(object.version) ? String(object.version) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
        if (message.connection_hops) {
            obj.connection_hops = message.connection_hops.map(e => e);
        }
        else {
            obj.connection_hops = [];
        }
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChannel();
        message.state = object.state ?? 0;
        message.ordering = object.ordering ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
        message.connection_hops = object.connection_hops?.map(e => e) || [];
        message.version = object.version ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            state: isSet(object.state) ? stateFromJSON(object.state) : -1,
            ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: object?.counterparty ? Counterparty.fromAmino(object.counterparty) : undefined,
            connection_hops: Array.isArray(object?.connection_hops) ? object.connection_hops.map((e) => e) : [],
            version: object.version
        };
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state;
        obj.ordering = message.ordering;
        obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
        if (message.connection_hops) {
            obj.connection_hops = message.connection_hops.map(e => e);
        }
        else {
            obj.connection_hops = [];
        }
        obj.version = message.version;
        return obj;
    },
    fromAminoMsg(object) {
        return Channel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Channel",
            value: Channel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Channel.decode(message.value);
    },
    toProto(message) {
        return Channel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Channel",
            value: Channel.encode(message).finish()
        };
    }
};
function createBaseIdentifiedChannel() {
    return {
        state: 0,
        ordering: 0,
        counterparty: Counterparty.fromPartial({}),
        connection_hops: [],
        version: "",
        port_id: "",
        channel_id: ""
    };
}
export const IdentifiedChannel = {
    typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
    aminoType: "cosmos-sdk/IdentifiedChannel",
    encode(message, writer = _m0.Writer.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.ordering !== 0) {
            writer.uint32(16).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.connection_hops) {
            writer.uint32(34).string(v);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.port_id !== "") {
            writer.uint32(50).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(58).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.ordering = reader.int32();
                    break;
                case 3:
                    message.counterparty = Counterparty.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.connection_hops.push(reader.string());
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.port_id = reader.string();
                    break;
                case 7:
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
            state: isSet(object.state) ? stateFromJSON(object.state) : -1,
            ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: isSet(object.counterparty) ? Counterparty.fromJSON(object.counterparty) : undefined,
            connection_hops: Array.isArray(object?.connection_hops) ? object.connection_hops.map((e) => String(e)) : [],
            version: isSet(object.version) ? String(object.version) : "",
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.ordering !== undefined && (obj.ordering = orderToJSON(message.ordering));
        message.counterparty !== undefined && (obj.counterparty = message.counterparty ? Counterparty.toJSON(message.counterparty) : undefined);
        if (message.connection_hops) {
            obj.connection_hops = message.connection_hops.map(e => e);
        }
        else {
            obj.connection_hops = [];
        }
        message.version !== undefined && (obj.version = message.version);
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIdentifiedChannel();
        message.state = object.state ?? 0;
        message.ordering = object.ordering ?? 0;
        message.counterparty = object.counterparty !== undefined && object.counterparty !== null ? Counterparty.fromPartial(object.counterparty) : undefined;
        message.connection_hops = object.connection_hops?.map(e => e) || [];
        message.version = object.version ?? "";
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            state: isSet(object.state) ? stateFromJSON(object.state) : -1,
            ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : -1,
            counterparty: object?.counterparty ? Counterparty.fromAmino(object.counterparty) : undefined,
            connection_hops: Array.isArray(object?.connection_hops) ? object.connection_hops.map((e) => e) : [],
            version: object.version,
            port_id: object.port_id,
            channel_id: object.channel_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.state = message.state;
        obj.ordering = message.ordering;
        obj.counterparty = message.counterparty ? Counterparty.toAmino(message.counterparty) : undefined;
        if (message.connection_hops) {
            obj.connection_hops = message.connection_hops.map(e => e);
        }
        else {
            obj.connection_hops = [];
        }
        obj.version = message.version;
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        return obj;
    },
    fromAminoMsg(object) {
        return IdentifiedChannel.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedChannel",
            value: IdentifiedChannel.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return IdentifiedChannel.decode(message.value);
    },
    toProto(message) {
        return IdentifiedChannel.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.IdentifiedChannel",
            value: IdentifiedChannel.encode(message).finish()
        };
    }
};
function createBaseCounterparty() {
    return {
        port_id: "",
        channel_id: ""
    };
}
export const Counterparty = {
    typeUrl: "/ibc.core.channel.v1.Counterparty",
    aminoType: "cosmos-sdk/Counterparty",
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
        const message = createBaseCounterparty();
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
        const message = createBaseCounterparty();
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
            typeUrl: "/ibc.core.channel.v1.Counterparty",
            value: Counterparty.encode(message).finish()
        };
    }
};
function createBasePacket() {
    return {
        sequence: Long.UZERO,
        source_port: "",
        source_channel: "",
        destination_port: "",
        destination_channel: "",
        data: new Uint8Array(),
        timeout_height: Height.fromPartial({}),
        timeout_timestamp: Long.UZERO
    };
}
export const Packet = {
    typeUrl: "/ibc.core.channel.v1.Packet",
    aminoType: "cosmos-sdk/Packet",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.source_port !== "") {
            writer.uint32(18).string(message.source_port);
        }
        if (message.source_channel !== "") {
            writer.uint32(26).string(message.source_channel);
        }
        if (message.destination_port !== "") {
            writer.uint32(34).string(message.destination_port);
        }
        if (message.destination_channel !== "") {
            writer.uint32(42).string(message.destination_channel);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        if (message.timeout_height !== undefined) {
            Height.encode(message.timeout_height, writer.uint32(58).fork()).ldelim();
        }
        if (!message.timeout_timestamp.isZero()) {
            writer.uint32(64).uint64(message.timeout_timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.source_port = reader.string();
                    break;
                case 3:
                    message.source_channel = reader.string();
                    break;
                case 4:
                    message.destination_port = reader.string();
                    break;
                case 5:
                    message.destination_channel = reader.string();
                    break;
                case 6:
                    message.data = reader.bytes();
                    break;
                case 7:
                    message.timeout_height = Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.timeout_timestamp = reader.uint64();
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
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
            source_port: isSet(object.source_port) ? String(object.source_port) : "",
            source_channel: isSet(object.source_channel) ? String(object.source_channel) : "",
            destination_port: isSet(object.destination_port) ? String(object.destination_port) : "",
            destination_channel: isSet(object.destination_channel) ? String(object.destination_channel) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            timeout_height: isSet(object.timeout_height) ? Height.fromJSON(object.timeout_height) : undefined,
            timeout_timestamp: isSet(object.timeout_timestamp) ? Long.fromValue(object.timeout_timestamp) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
        message.source_port !== undefined && (obj.source_port = message.source_port);
        message.source_channel !== undefined && (obj.source_channel = message.source_channel);
        message.destination_port !== undefined && (obj.destination_port = message.destination_port);
        message.destination_channel !== undefined && (obj.destination_channel = message.destination_channel);
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.timeout_height !== undefined && (obj.timeout_height = message.timeout_height ? Height.toJSON(message.timeout_height) : undefined);
        message.timeout_timestamp !== undefined && (obj.timeout_timestamp = (message.timeout_timestamp || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacket();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        message.source_port = object.source_port ?? "";
        message.source_channel = object.source_channel ?? "";
        message.destination_port = object.destination_port ?? "";
        message.destination_channel = object.destination_channel ?? "";
        message.data = object.data ?? new Uint8Array();
        message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? Height.fromPartial(object.timeout_height) : undefined;
        message.timeout_timestamp = object.timeout_timestamp !== undefined && object.timeout_timestamp !== null ? Long.fromValue(object.timeout_timestamp) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            sequence: Long.fromString(object.sequence),
            source_port: object.source_port,
            source_channel: object.source_channel,
            destination_port: object.destination_port,
            destination_channel: object.destination_channel,
            data: object.data,
            timeout_height: object?.timeout_height ? Height.fromAmino(object.timeout_height) : undefined,
            timeout_timestamp: Long.fromString(object.timeout_timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.source_port = message.source_port;
        obj.source_channel = message.source_channel;
        obj.destination_port = message.destination_port;
        obj.destination_channel = message.destination_channel;
        obj.data = message.data;
        obj.timeout_height = message.timeout_height ? Height.toAmino(message.timeout_height) : {};
        obj.timeout_timestamp = message.timeout_timestamp ? message.timeout_timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Packet.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Packet",
            value: Packet.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Packet.decode(message.value);
    },
    toProto(message) {
        return Packet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Packet",
            value: Packet.encode(message).finish()
        };
    }
};
function createBasePacketState() {
    return {
        port_id: "",
        channel_id: "",
        sequence: Long.UZERO,
        data: new Uint8Array()
    };
}
export const PacketState = {
    typeUrl: "/ibc.core.channel.v1.PacketState",
    aminoType: "cosmos-sdk/PacketState",
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
        if (message.data.length !== 0) {
            writer.uint32(34).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketState();
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
                case 4:
                    message.data = reader.bytes();
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
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacketState();
        message.port_id = object.port_id ?? "";
        message.channel_id = object.channel_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            port_id: object.port_id,
            channel_id: object.channel_id,
            sequence: Long.fromString(object.sequence),
            data: object.data
        };
    },
    toAmino(message) {
        const obj = {};
        obj.port_id = message.port_id;
        obj.channel_id = message.channel_id;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.data = message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return PacketState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketState",
            value: PacketState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketState.decode(message.value);
    },
    toProto(message) {
        return PacketState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.PacketState",
            value: PacketState.encode(message).finish()
        };
    }
};
function createBaseAcknowledgement() {
    return {
        result: undefined,
        error: undefined
    };
}
export const Acknowledgement = {
    typeUrl: "/ibc.core.channel.v1.Acknowledgement",
    aminoType: "cosmos-sdk/Acknowledgement",
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== undefined) {
            writer.uint32(170).bytes(message.result);
        }
        if (message.error !== undefined) {
            writer.uint32(178).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 21:
                    message.result = reader.bytes();
                    break;
                case 22:
                    message.error = reader.string();
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
            result: isSet(object.result) ? bytesFromBase64(object.result) : undefined,
            error: isSet(object.error) ? String(object.error) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result !== undefined ? base64FromBytes(message.result) : undefined);
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAcknowledgement();
        message.result = object.result ?? undefined;
        message.error = object.error ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            result: object?.result,
            error: object?.error
        };
    },
    toAmino(message) {
        const obj = {};
        obj.result = message.result;
        obj.error = message.error;
        return obj;
    },
    fromAminoMsg(object) {
        return Acknowledgement.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Acknowledgement",
            value: Acknowledgement.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Acknowledgement.decode(message.value);
    },
    toProto(message) {
        return Acknowledgement.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.Acknowledgement",
            value: Acknowledgement.encode(message).finish()
        };
    }
};
//# sourceMappingURL=channel.js.map