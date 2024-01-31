import { IdentifiedChannel, PacketState } from "./channel";
import { Long, isSet } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseGenesisState() {
    return {
        channels: [],
        acknowledgements: [],
        commitments: [],
        receipts: [],
        send_sequences: [],
        recv_sequences: [],
        ack_sequences: [],
        next_channel_sequence: Long.UZERO
    };
}
export const GenesisState = {
    typeUrl: "/ibc.core.channel.v1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.channels) {
            IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.acknowledgements) {
            PacketState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.commitments) {
            PacketState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.receipts) {
            PacketState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.send_sequences) {
            PacketSequence.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.recv_sequences) {
            PacketSequence.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.ack_sequences) {
            PacketSequence.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (!message.next_channel_sequence.isZero()) {
            writer.uint32(64).uint64(message.next_channel_sequence);
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
                    message.channels.push(IdentifiedChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.commitments.push(PacketState.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.receipts.push(PacketState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.send_sequences.push(PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.recv_sequences.push(PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.ack_sequences.push(PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.next_channel_sequence = reader.uint64();
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
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => PacketState.fromJSON(e)) : [],
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => PacketState.fromJSON(e)) : [],
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => PacketState.fromJSON(e)) : [],
            send_sequences: Array.isArray(object?.send_sequences) ? object.send_sequences.map((e) => PacketSequence.fromJSON(e)) : [],
            recv_sequences: Array.isArray(object?.recv_sequences) ? object.recv_sequences.map((e) => PacketSequence.fromJSON(e)) : [],
            ack_sequences: Array.isArray(object?.ack_sequences) ? object.ack_sequences.map((e) => PacketSequence.fromJSON(e)) : [],
            next_channel_sequence: isSet(object.next_channel_sequence) ? Long.fromValue(object.next_channel_sequence) : Long.UZERO
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
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toJSON(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? PacketState.toJSON(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? PacketState.toJSON(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.send_sequences) {
            obj.send_sequences = message.send_sequences.map(e => e ? PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.send_sequences = [];
        }
        if (message.recv_sequences) {
            obj.recv_sequences = message.recv_sequences.map(e => e ? PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.recv_sequences = [];
        }
        if (message.ack_sequences) {
            obj.ack_sequences = message.ack_sequences.map(e => e ? PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.ack_sequences = [];
        }
        message.next_channel_sequence !== undefined && (obj.next_channel_sequence = (message.next_channel_sequence || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.channels = object.channels?.map(e => IdentifiedChannel.fromPartial(e)) || [];
        message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
        message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
        message.receipts = object.receipts?.map(e => PacketState.fromPartial(e)) || [];
        message.send_sequences = object.send_sequences?.map(e => PacketSequence.fromPartial(e)) || [];
        message.recv_sequences = object.recv_sequences?.map(e => PacketSequence.fromPartial(e)) || [];
        message.ack_sequences = object.ack_sequences?.map(e => PacketSequence.fromPartial(e)) || [];
        message.next_channel_sequence = object.next_channel_sequence !== undefined && object.next_channel_sequence !== null ? Long.fromValue(object.next_channel_sequence) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            channels: Array.isArray(object?.channels) ? object.channels.map((e) => IdentifiedChannel.fromAmino(e)) : [],
            acknowledgements: Array.isArray(object?.acknowledgements) ? object.acknowledgements.map((e) => PacketState.fromAmino(e)) : [],
            commitments: Array.isArray(object?.commitments) ? object.commitments.map((e) => PacketState.fromAmino(e)) : [],
            receipts: Array.isArray(object?.receipts) ? object.receipts.map((e) => PacketState.fromAmino(e)) : [],
            send_sequences: Array.isArray(object?.send_sequences) ? object.send_sequences.map((e) => PacketSequence.fromAmino(e)) : [],
            recv_sequences: Array.isArray(object?.recv_sequences) ? object.recv_sequences.map((e) => PacketSequence.fromAmino(e)) : [],
            ack_sequences: Array.isArray(object?.ack_sequences) ? object.ack_sequences.map((e) => PacketSequence.fromAmino(e)) : [],
            next_channel_sequence: Long.fromString(object.next_channel_sequence)
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
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toAmino(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        if (message.commitments) {
            obj.commitments = message.commitments.map(e => e ? PacketState.toAmino(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map(e => e ? PacketState.toAmino(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.send_sequences) {
            obj.send_sequences = message.send_sequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
        }
        else {
            obj.send_sequences = [];
        }
        if (message.recv_sequences) {
            obj.recv_sequences = message.recv_sequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
        }
        else {
            obj.recv_sequences = [];
        }
        if (message.ack_sequences) {
            obj.ack_sequences = message.ack_sequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
        }
        else {
            obj.ack_sequences = [];
        }
        obj.next_channel_sequence = message.next_channel_sequence ? message.next_channel_sequence.toString() : undefined;
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
            typeUrl: "/ibc.core.channel.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
function createBasePacketSequence() {
    return {
        port_id: "",
        channel_id: "",
        sequence: Long.UZERO
    };
}
export const PacketSequence = {
    typeUrl: "/ibc.core.channel.v1.PacketSequence",
    aminoType: "cosmos-sdk/PacketSequence",
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
        const message = createBasePacketSequence();
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
        const message = createBasePacketSequence();
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
        return PacketSequence.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketSequence",
            value: PacketSequence.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketSequence.decode(message.value);
    },
    toProto(message) {
        return PacketSequence.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.channel.v1.PacketSequence",
            value: PacketSequence.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map