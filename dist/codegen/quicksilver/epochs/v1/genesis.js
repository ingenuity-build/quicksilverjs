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
exports.GenesisState = exports.EpochInfo = void 0;
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseEpochInfo() {
    return {
        identifier: "",
        start_time: new Date(),
        duration: duration_1.Duration.fromPartial({}),
        current_epoch: helpers_1.Long.ZERO,
        current_epoch_start_time: new Date(),
        epoch_counting_started: false,
        current_epoch_start_height: helpers_1.Long.ZERO
    };
}
exports.EpochInfo = {
    typeUrl: "/quicksilver.epochs.v1.EpochInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        if (message.start_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.start_time), writer.uint32(18).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (!message.current_epoch.isZero()) {
            writer.uint32(32).int64(message.current_epoch);
        }
        if (message.current_epoch_start_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.current_epoch_start_time), writer.uint32(42).fork()).ldelim();
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
                    message.start_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.current_epoch = reader.int64();
                    break;
                case 5:
                    message.current_epoch_start_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            identifier: (0, helpers_1.isSet)(object.identifier) ? String(object.identifier) : "",
            start_time: (0, helpers_1.isSet)(object.start_time) ? (0, helpers_1.fromJsonTimestamp)(object.start_time) : undefined,
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined,
            current_epoch: (0, helpers_1.isSet)(object.current_epoch) ? helpers_1.Long.fromValue(object.current_epoch) : helpers_1.Long.ZERO,
            current_epoch_start_time: (0, helpers_1.isSet)(object.current_epoch_start_time) ? (0, helpers_1.fromJsonTimestamp)(object.current_epoch_start_time) : undefined,
            epoch_counting_started: (0, helpers_1.isSet)(object.epoch_counting_started) ? Boolean(object.epoch_counting_started) : false,
            current_epoch_start_height: (0, helpers_1.isSet)(object.current_epoch_start_height) ? helpers_1.Long.fromValue(object.current_epoch_start_height) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.identifier !== undefined && (obj.identifier = message.identifier);
        message.start_time !== undefined && (obj.start_time = message.start_time.toISOString());
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.current_epoch !== undefined && (obj.current_epoch = (message.current_epoch || helpers_1.Long.ZERO).toString());
        message.current_epoch_start_time !== undefined && (obj.current_epoch_start_time = message.current_epoch_start_time.toISOString());
        message.epoch_counting_started !== undefined && (obj.epoch_counting_started = message.epoch_counting_started);
        message.current_epoch_start_height !== undefined && (obj.current_epoch_start_height = (message.current_epoch_start_height || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEpochInfo();
        message.identifier = object.identifier ?? "";
        message.start_time = object.start_time ?? undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.current_epoch = object.current_epoch !== undefined && object.current_epoch !== null ? helpers_1.Long.fromValue(object.current_epoch) : helpers_1.Long.ZERO;
        message.current_epoch_start_time = object.current_epoch_start_time ?? undefined;
        message.epoch_counting_started = object.epoch_counting_started ?? false;
        message.current_epoch_start_height = object.current_epoch_start_height !== undefined && object.current_epoch_start_height !== null ? helpers_1.Long.fromValue(object.current_epoch_start_height) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            identifier: object.identifier,
            start_time: object.start_time,
            duration: object?.duration ? duration_1.Duration.fromAmino(object.duration) : undefined,
            current_epoch: helpers_1.Long.fromString(object.current_epoch),
            current_epoch_start_time: object.current_epoch_start_time,
            epoch_counting_started: object.epoch_counting_started,
            current_epoch_start_height: helpers_1.Long.fromString(object.current_epoch_start_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.identifier = message.identifier;
        obj.start_time = message.start_time;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        obj.current_epoch = message.current_epoch ? message.current_epoch.toString() : undefined;
        obj.current_epoch_start_time = message.current_epoch_start_time;
        obj.epoch_counting_started = message.epoch_counting_started;
        obj.current_epoch_start_height = message.current_epoch_start_height ? message.current_epoch_start_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EpochInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EpochInfo.decode(message.value);
    },
    toProto(message) {
        return exports.EpochInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.epochs.v1.EpochInfo",
            value: exports.EpochInfo.encode(message).finish()
        };
    }
};
function createBaseGenesisState() {
    return {
        epochs: []
    };
}
exports.GenesisState = {
    typeUrl: "/quicksilver.epochs.v1.GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.epochs) {
            exports.EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.epochs.push(exports.EpochInfo.decode(reader, reader.uint32()));
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
            epochs: Array.isArray(object?.epochs) ? object.epochs.map((e) => exports.EpochInfo.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map(e => e ? exports.EpochInfo.toJSON(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.epochs = object.epochs?.map(e => exports.EpochInfo.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            epochs: Array.isArray(object?.epochs) ? object.epochs.map((e) => exports.EpochInfo.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map(e => e ? exports.EpochInfo.toAmino(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.epochs.v1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map