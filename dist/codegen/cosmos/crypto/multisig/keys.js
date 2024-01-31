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
exports.LegacyAminoPubKey = void 0;
const any_1 = require("../../../google/protobuf/any");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseLegacyAminoPubKey() {
    return {
        threshold: 0,
        public_keys: []
    };
}
exports.LegacyAminoPubKey = {
    typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
    aminoType: "cosmos-sdk/LegacyAminoPubKey",
    encode(message, writer = _m0.Writer.create()) {
        if (message.threshold !== 0) {
            writer.uint32(8).uint32(message.threshold);
        }
        for (const v of message.public_keys) {
            any_1.Any.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.public_keys.push(any_1.Any.decode(reader, reader.uint32()));
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
            threshold: (0, helpers_1.isSet)(object.threshold) ? Number(object.threshold) : 0,
            public_keys: Array.isArray(object?.public_keys) ? object.public_keys.map((e) => any_1.Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.threshold !== undefined && (obj.threshold = Math.round(message.threshold));
        if (message.public_keys) {
            obj.public_keys = message.public_keys.map(e => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.public_keys = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLegacyAminoPubKey();
        message.threshold = object.threshold ?? 0;
        message.public_keys = object.public_keys?.map(e => any_1.Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            threshold: object.threshold,
            public_keys: Array.isArray(object?.public_keys) ? object.public_keys.map((e) => any_1.Any.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.threshold = message.threshold;
        if (message.public_keys) {
            obj.public_keys = message.public_keys.map(e => e ? any_1.Any.toAmino(e) : undefined);
        }
        else {
            obj.public_keys = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LegacyAminoPubKey.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/LegacyAminoPubKey",
            value: exports.LegacyAminoPubKey.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.LegacyAminoPubKey.decode(message.value);
    },
    toProto(message) {
        return exports.LegacyAminoPubKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.multisig.LegacyAminoPubKey",
            value: exports.LegacyAminoPubKey.encode(message).finish()
        };
    }
};
//# sourceMappingURL=keys.js.map