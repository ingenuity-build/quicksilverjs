import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseBitArray() {
    return {
        bits: Long.ZERO,
        elems: []
    };
}
export const BitArray = {
    typeUrl: "/tendermint.libs.bits.BitArray",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.bits.isZero()) {
            writer.uint32(8).int64(message.bits);
        }
        writer.uint32(18).fork();
        for (const v of message.elems) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBitArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bits = reader.int64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.elems.push(reader.uint64());
                        }
                    }
                    else {
                        message.elems.push(reader.uint64());
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
            bits: isSet(object.bits) ? Long.fromValue(object.bits) : Long.ZERO,
            elems: Array.isArray(object?.elems) ? object.elems.map((e) => Long.fromValue(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.bits !== undefined && (obj.bits = (message.bits || Long.ZERO).toString());
        if (message.elems) {
            obj.elems = message.elems.map(e => (e || Long.UZERO).toString());
        }
        else {
            obj.elems = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBitArray();
        message.bits = object.bits !== undefined && object.bits !== null ? Long.fromValue(object.bits) : Long.ZERO;
        message.elems = object.elems?.map(e => Long.fromValue(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            bits: Long.fromString(object.bits),
            elems: Array.isArray(object?.elems) ? object.elems.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.bits = message.bits ? message.bits.toString() : undefined;
        if (message.elems) {
            obj.elems = message.elems.map(e => e);
        }
        else {
            obj.elems = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return BitArray.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BitArray.decode(message.value);
    },
    toProto(message) {
        return BitArray.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.libs.bits.BitArray",
            value: BitArray.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map