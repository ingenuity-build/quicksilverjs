import { Any } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseLegacyAminoPubKey() {
    return {
        threshold: 0,
        public_keys: []
    };
}
export const LegacyAminoPubKey = {
    typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
    aminoType: "cosmos-sdk/LegacyAminoPubKey",
    encode(message, writer = _m0.Writer.create()) {
        if (message.threshold !== 0) {
            writer.uint32(8).uint32(message.threshold);
        }
        for (const v of message.public_keys) {
            Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLegacyAminoPubKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.threshold = reader.uint32();
                    break;
                case 2:
                    message.public_keys.push(Any.decode(reader, reader.uint32()));
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
            threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
            public_keys: Array.isArray(object?.public_keys) ? object.public_keys.map((e) => Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.threshold !== undefined && (obj.threshold = Math.round(message.threshold));
        if (message.public_keys) {
            obj.public_keys = message.public_keys.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.public_keys = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLegacyAminoPubKey();
        message.threshold = object.threshold ?? 0;
        message.public_keys = object.public_keys?.map(e => Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            threshold: object.threshold,
            public_keys: Array.isArray(object?.public_keys) ? object.public_keys.map((e) => Any.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.threshold = message.threshold;
        if (message.public_keys) {
            obj.public_keys = message.public_keys.map(e => e ? Any.toAmino(e) : undefined);
        }
        else {
            obj.public_keys = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return LegacyAminoPubKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/LegacyAminoPubKey",
            value: LegacyAminoPubKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return LegacyAminoPubKey.decode(message.value);
    },
    toProto(message) {
        return LegacyAminoPubKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
            value: LegacyAminoPubKey.encode(message).finish()
        };
    }
};
//# sourceMappingURL=keys.js.map