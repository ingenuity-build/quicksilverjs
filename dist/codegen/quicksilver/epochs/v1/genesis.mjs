import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Long, toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseEpochInfo() {
    return {
        identifier: "",
        start_time: new Date(),
        duration: Duration.fromPartial({}),
        current_epoch: Long.ZERO,
        current_epoch_start_time: new Date(),
        epoch_counting_started: false,
        current_epoch_start_height: Long.ZERO
    };
}
export const EpochInfo = {
    typeUrl: "/quicksilver.epochs.v1.EpochInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        if (message.start_time !== undefined) {
            Timestamp.encode(toTimestamp(message.start_time), writer.uint32(18).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (!message.current_epoch.isZero()) {
            writer.uint32(32).int64(message.current_epoch);
        }
        if (message.current_epoch_start_time !== undefined) {
            Timestamp.encode(toTimestamp(message.current_epoch_start_time), writer.uint32(42).fork()).ldelim();
        }
        if (message.epoch_counting_started === true) {
            writer.uint32(48).bool(message.epoch_counting_started);
        }
        if (!message.current_epoch_start_height.isZero()) {
            writer.uint32(56).int64(message.current_epoch_start_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEpochInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                case 2:
                    message.start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.duration = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.current_epoch = reader.int64();
                    break;
                case 5:
                    message.current_epoch_start_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.epoch_counting_started = reader.bool();
                    break;
                case 7:
                    message.current_epoch_start_height = reader.int64();
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
            start_time: isSet(object.start_time) ? fromJsonTimestamp(object.start_time) : undefined,
            duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
            current_epoch: isSet(object.current_epoch) ? Long.fromValue(object.current_epoch) : Long.ZERO,
            current_epoch_start_time: isSet(object.current_epoch_start_time) ? fromJsonTimestamp(object.current_epoch_start_time) : undefined,
            epoch_counting_started: isSet(object.epoch_counting_started) ? Boolean(object.epoch_counting_started) : false,
            current_epoch_start_height: isSet(object.current_epoch_start_height) ? Long.fromValue(object.current_epoch_start_height) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.identifier !== undefined && (obj.identifier = message.identifier);
        message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
        message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
        message.current_epoch !== undefined && (obj.current_epoch = (message.current_epoch || Long.ZERO).toString());
        message.current_epoch_start_time !== undefined && (obj.current_epoch_start_time = message.current_epoch_start_time.toISOString());
        message.epoch_counting_started !== undefined && (obj.epoch_counting_started = message.epoch_counting_started);
        message.current_epoch_start_height !== undefined && (obj.current_epoch_start_height = (message.current_epoch_start_height || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEpochInfo();
        message.identifier = object.identifier ?? "";
        message.start_time = object.start_time ?? undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
        message.current_epoch = object.current_epoch !== undefined && object.current_epoch !== null ? Long.fromValue(object.current_epoch) : Long.ZERO;
        message.current_epoch_start_time = object.current_epoch_start_time ?? undefined;
        message.epoch_counting_started = object.epoch_counting_started ?? false;
        message.current_epoch_start_height = object.current_epoch_start_height !== undefined && object.current_epoch_start_height !== null ? Long.fromValue(object.current_epoch_start_height) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            identifier: object.identifier,
            start_time: object.start_time,
            duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
            current_epoch: Long.fromString(object.current_epoch),
            current_epoch_start_time: object.current_epoch_start_time,
            epoch_counting_started: object.epoch_counting_started,
            current_epoch_start_height: Long.fromString(object.current_epoch_start_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.identifier = message.identifier;
        obj.start_time = message.start_time;
        obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
        obj.current_epoch = message.current_epoch ? message.current_epoch.toString() : undefined;
        obj.current_epoch_start_time = message.current_epoch_start_time;
        obj.epoch_counting_started = message.epoch_counting_started;
        obj.current_epoch_start_height = message.current_epoch_start_height ? message.current_epoch_start_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EpochInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EpochInfo.decode(message.value);
    },
    toProto(message) {
        return EpochInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.epochs.v1.EpochInfo",
            value: EpochInfo.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        epochs: []
    };
}
export const GenesisState = {
    typeUrl: "/quicksilver.epochs.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.epochs) {
            EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
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
            epochs: Array.isArray(object?.epochs) ? object.epochs.map((e) => EpochInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map(e => e ? EpochInfo.toJSON(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            epochs: Array.isArray(object?.epochs) ? object.epochs.map((e) => EpochInfo.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map(e => e ? EpochInfo.toAmino(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.epochs.v1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map