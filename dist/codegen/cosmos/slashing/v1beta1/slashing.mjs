import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Long, toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseValidatorSigningInfo() {
    return {
        address: "",
        start_height: Long.ZERO,
        index_offset: Long.ZERO,
        jailed_until: new Date(),
        tombstoned: false,
        missed_blocks_counter: Long.ZERO
    };
}
export const ValidatorSigningInfo = {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
    aminoType: "cosmos-sdk/ValidatorSigningInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (!message.start_height.isZero()) {
            writer.uint32(16).int64(message.start_height);
        }
        if (!message.index_offset.isZero()) {
            writer.uint32(24).int64(message.index_offset);
        }
        if (message.jailed_until !== undefined) {
            Timestamp.encode(toTimestamp(message.jailed_until), writer.uint32(34).fork()).ldelim();
        }
        if (message.tombstoned === true) {
            writer.uint32(40).bool(message.tombstoned);
        }
        if (!message.missed_blocks_counter.isZero()) {
            writer.uint32(48).int64(message.missed_blocks_counter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.start_height = reader.int64();
                    break;
                case 3:
                    message.index_offset = reader.int64();
                    break;
                case 4:
                    message.jailed_until = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.tombstoned = reader.bool();
                    break;
                case 6:
                    message.missed_blocks_counter = reader.int64();
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
            address: isSet(object.address) ? String(object.address) : "",
            start_height: isSet(object.start_height) ? Long.fromValue(object.start_height) : Long.ZERO,
            index_offset: isSet(object.index_offset) ? Long.fromValue(object.index_offset) : Long.ZERO,
            jailed_until: isSet(object.jailed_until) ? fromJsonTimestamp(object.jailed_until) : undefined,
            tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
            missed_blocks_counter: isSet(object.missed_blocks_counter) ? Long.fromValue(object.missed_blocks_counter) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.start_height !== undefined && (obj.start_height = (message.start_height || Long.ZERO).toString());
        message.index_offset !== undefined && (obj.index_offset = (message.index_offset || Long.ZERO).toString());
        message.jailed_until !== undefined && (obj.jailed_until = message.jailed_until.toISOString());
        message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
        message.missed_blocks_counter !== undefined && (obj.missed_blocks_counter = (message.missed_blocks_counter || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSigningInfo();
        message.address = object.address ?? "";
        message.start_height = object.start_height !== undefined && object.start_height !== null ? Long.fromValue(object.start_height) : Long.ZERO;
        message.index_offset = object.index_offset !== undefined && object.index_offset !== null ? Long.fromValue(object.index_offset) : Long.ZERO;
        message.jailed_until = object.jailed_until ?? undefined;
        message.tombstoned = object.tombstoned ?? false;
        message.missed_blocks_counter = object.missed_blocks_counter !== undefined && object.missed_blocks_counter !== null ? Long.fromValue(object.missed_blocks_counter) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            start_height: Long.fromString(object.start_height),
            index_offset: Long.fromString(object.index_offset),
            jailed_until: object.jailed_until,
            tombstoned: object.tombstoned,
            missed_blocks_counter: Long.fromString(object.missed_blocks_counter)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.start_height = message.start_height ? message.start_height.toString() : undefined;
        obj.index_offset = message.index_offset ? message.index_offset.toString() : undefined;
        obj.jailed_until = message.jailed_until;
        obj.tombstoned = message.tombstoned;
        obj.missed_blocks_counter = message.missed_blocks_counter ? message.missed_blocks_counter.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ValidatorSigningInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorSigningInfo",
            value: ValidatorSigningInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ValidatorSigningInfo.decode(message.value);
    },
    toProto(message) {
        return ValidatorSigningInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorSigningInfo",
            value: ValidatorSigningInfo.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        signed_blocks_window: Long.ZERO,
        min_signed_per_window: new Uint8Array(),
        downtime_jail_duration: Duration.fromPartial({}),
        slash_fraction_double_sign: new Uint8Array(),
        slash_fraction_downtime: new Uint8Array()
    };
}
export const Params = {
    typeUrl: "/cosmos.slashing.v1beta1.Params",
    aminoType: "cosmos-sdk/Params",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.signed_blocks_window.isZero()) {
            writer.uint32(8).int64(message.signed_blocks_window);
        }
        if (message.min_signed_per_window.length !== 0) {
            writer.uint32(18).bytes(message.min_signed_per_window);
        }
        if (message.downtime_jail_duration !== undefined) {
            Duration.encode(message.downtime_jail_duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.slash_fraction_double_sign.length !== 0) {
            writer.uint32(34).bytes(message.slash_fraction_double_sign);
        }
        if (message.slash_fraction_downtime.length !== 0) {
            writer.uint32(42).bytes(message.slash_fraction_downtime);
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
                    message.signed_blocks_window = reader.int64();
                    break;
                case 2:
                    message.min_signed_per_window = reader.bytes();
                    break;
                case 3:
                    message.downtime_jail_duration = Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.slash_fraction_double_sign = reader.bytes();
                    break;
                case 5:
                    message.slash_fraction_downtime = reader.bytes();
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
            signed_blocks_window: isSet(object.signed_blocks_window) ? Long.fromValue(object.signed_blocks_window) : Long.ZERO,
            min_signed_per_window: isSet(object.min_signed_per_window) ? bytesFromBase64(object.min_signed_per_window) : new Uint8Array(),
            downtime_jail_duration: isSet(object.downtime_jail_duration) ? Duration.fromJSON(object.downtime_jail_duration) : undefined,
            slash_fraction_double_sign: isSet(object.slash_fraction_double_sign) ? bytesFromBase64(object.slash_fraction_double_sign) : new Uint8Array(),
            slash_fraction_downtime: isSet(object.slash_fraction_downtime) ? bytesFromBase64(object.slash_fraction_downtime) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.signed_blocks_window !== undefined && (obj.signed_blocks_window = (message.signed_blocks_window || Long.ZERO).toString());
        message.min_signed_per_window !== undefined && (obj.min_signed_per_window = base64FromBytes(message.min_signed_per_window !== undefined ? message.min_signed_per_window : new Uint8Array()));
        message.downtime_jail_duration !== undefined && (obj.downtime_jail_duration = message.downtime_jail_duration ? Duration.toJSON(message.downtime_jail_duration) : undefined);
        message.slash_fraction_double_sign !== undefined && (obj.slash_fraction_double_sign = base64FromBytes(message.slash_fraction_double_sign !== undefined ? message.slash_fraction_double_sign : new Uint8Array()));
        message.slash_fraction_downtime !== undefined && (obj.slash_fraction_downtime = base64FromBytes(message.slash_fraction_downtime !== undefined ? message.slash_fraction_downtime : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.signed_blocks_window = object.signed_blocks_window !== undefined && object.signed_blocks_window !== null ? Long.fromValue(object.signed_blocks_window) : Long.ZERO;
        message.min_signed_per_window = object.min_signed_per_window ?? new Uint8Array();
        message.downtime_jail_duration = object.downtime_jail_duration !== undefined && object.downtime_jail_duration !== null ? Duration.fromPartial(object.downtime_jail_duration) : undefined;
        message.slash_fraction_double_sign = object.slash_fraction_double_sign ?? new Uint8Array();
        message.slash_fraction_downtime = object.slash_fraction_downtime ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            signed_blocks_window: Long.fromString(object.signed_blocks_window),
            min_signed_per_window: object.min_signed_per_window,
            downtime_jail_duration: object?.downtime_jail_duration ? Duration.fromAmino(object.downtime_jail_duration) : undefined,
            slash_fraction_double_sign: object.slash_fraction_double_sign,
            slash_fraction_downtime: object.slash_fraction_downtime
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signed_blocks_window = message.signed_blocks_window ? message.signed_blocks_window.toString() : undefined;
        obj.min_signed_per_window = message.min_signed_per_window;
        obj.downtime_jail_duration = message.downtime_jail_duration ? Duration.toAmino(message.downtime_jail_duration) : undefined;
        obj.slash_fraction_double_sign = message.slash_fraction_double_sign;
        obj.slash_fraction_downtime = message.slash_fraction_downtime;
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
            typeUrl: "/cosmos.slashing.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=slashing.js.map