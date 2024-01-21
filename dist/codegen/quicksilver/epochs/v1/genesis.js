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
        startTime: new Date(),
        duration: duration_1.Duration.fromPartial({}),
        currentEpoch: helpers_1.Long.ZERO,
        currentEpochStartTime: new Date(),
        epochCountingStarted: false,
        currentEpochStartHeight: helpers_1.Long.ZERO
    };
}
exports.EpochInfo = {
    typeUrl: "/quicksilver.epochs.v1.EpochInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        if (message.startTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.startTime), writer.uint32(18).fork()).ldelim();
        }
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
        }
        if (!message.currentEpoch.isZero()) {
            writer.uint32(32).int64(message.currentEpoch);
        }
        if (message.currentEpochStartTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.currentEpochStartTime), writer.uint32(42).fork()).ldelim();
        }
        if (message.epochCountingStarted === true) {
            writer.uint32(48).bool(message.epochCountingStarted);
        }
        if (!message.currentEpochStartHeight.isZero()) {
            writer.uint32(56).int64(message.currentEpochStartHeight);
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
                    message.startTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.currentEpoch = reader.int64();
                    break;
                case 5:
                    message.currentEpochStartTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.epochCountingStarted = reader.bool();
                    break;
                case 7:
                    message.currentEpochStartHeight = reader.int64();
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
            startTime: (0, helpers_1.isSet)(object.startTime) ? (0, helpers_1.fromJsonTimestamp)(object.startTime) : undefined,
            duration: (0, helpers_1.isSet)(object.duration) ? duration_1.Duration.fromJSON(object.duration) : undefined,
            currentEpoch: (0, helpers_1.isSet)(object.currentEpoch) ? helpers_1.Long.fromValue(object.currentEpoch) : helpers_1.Long.ZERO,
            currentEpochStartTime: (0, helpers_1.isSet)(object.currentEpochStartTime) ? (0, helpers_1.fromJsonTimestamp)(object.currentEpochStartTime) : undefined,
            epochCountingStarted: (0, helpers_1.isSet)(object.epochCountingStarted) ? Boolean(object.epochCountingStarted) : false,
            currentEpochStartHeight: (0, helpers_1.isSet)(object.currentEpochStartHeight) ? helpers_1.Long.fromValue(object.currentEpochStartHeight) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.identifier !== undefined && (obj.identifier = message.identifier);
        message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
        message.duration !== undefined && (obj.duration = message.duration ? duration_1.Duration.toJSON(message.duration) : undefined);
        message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || helpers_1.Long.ZERO).toString());
        message.currentEpochStartTime !== undefined && (obj.currentEpochStartTime = message.currentEpochStartTime.toISOString());
        message.epochCountingStarted !== undefined && (obj.epochCountingStarted = message.epochCountingStarted);
        message.currentEpochStartHeight !== undefined && (obj.currentEpochStartHeight = (message.currentEpochStartHeight || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEpochInfo();
        message.identifier = object.identifier ?? "";
        message.startTime = object.startTime ?? undefined;
        message.duration = object.duration !== undefined && object.duration !== null ? duration_1.Duration.fromPartial(object.duration) : undefined;
        message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? helpers_1.Long.fromValue(object.currentEpoch) : helpers_1.Long.ZERO;
        message.currentEpochStartTime = object.currentEpochStartTime ?? undefined;
        message.epochCountingStarted = object.epochCountingStarted ?? false;
        message.currentEpochStartHeight = object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null ? helpers_1.Long.fromValue(object.currentEpochStartHeight) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            identifier: object.identifier,
            startTime: object.start_time,
            duration: object?.duration ? duration_1.Duration.fromAmino(object.duration) : undefined,
            currentEpoch: helpers_1.Long.fromString(object.current_epoch),
            currentEpochStartTime: object.current_epoch_start_time,
            epochCountingStarted: object.epoch_counting_started,
            currentEpochStartHeight: helpers_1.Long.fromString(object.current_epoch_start_height)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.identifier = message.identifier;
        obj.start_time = message.startTime;
        obj.duration = message.duration ? duration_1.Duration.toAmino(message.duration) : undefined;
        obj.current_epoch = message.currentEpoch ? message.currentEpoch.toString() : undefined;
        obj.current_epoch_start_time = message.currentEpochStartTime;
        obj.epoch_counting_started = message.epochCountingStarted;
        obj.current_epoch_start_height = message.currentEpochStartHeight ? message.currentEpochStartHeight.toString() : undefined;
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