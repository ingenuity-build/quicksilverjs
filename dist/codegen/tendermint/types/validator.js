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
exports.SimpleValidator = exports.Validator = exports.ValidatorSet = void 0;
const keys_1 = require("../crypto/keys");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseValidatorSet() {
    return {
        validators: [],
        proposer: exports.Validator.fromPartial({}),
        total_voting_power: helpers_1.Long.ZERO
    };
}
exports.ValidatorSet = {
    typeUrl: "/tendermint.types.ValidatorSet",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.proposer !== undefined) {
            exports.Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
        }
        if (!message.total_voting_power.isZero()) {
            writer.uint32(24).int64(message.total_voting_power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.proposer = exports.Validator.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.total_voting_power = reader.int64();
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
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromJSON(e)) : [],
            proposer: (0, helpers_1.isSet)(object.proposer) ? exports.Validator.fromJSON(object.proposer) : undefined,
            total_voting_power: (0, helpers_1.isSet)(object.total_voting_power) ? helpers_1.Long.fromValue(object.total_voting_power) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.proposer !== undefined && (obj.proposer = message.proposer ? exports.Validator.toJSON(message.proposer) : undefined);
        message.total_voting_power !== undefined && (obj.total_voting_power = (message.total_voting_power || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorSet();
        message.validators = object.validators?.map(e => exports.Validator.fromPartial(e)) || [];
        message.proposer = object.proposer !== undefined && object.proposer !== null ? exports.Validator.fromPartial(object.proposer) : undefined;
        message.total_voting_power = object.total_voting_power !== undefined && object.total_voting_power !== null ? helpers_1.Long.fromValue(object.total_voting_power) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromAmino(e)) : [],
            proposer: object?.proposer ? exports.Validator.fromAmino(object.proposer) : undefined,
            total_voting_power: helpers_1.Long.fromString(object.total_voting_power)
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? exports.Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.proposer = message.proposer ? exports.Validator.toAmino(message.proposer) : undefined;
        obj.total_voting_power = message.total_voting_power ? message.total_voting_power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorSet.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ValidatorSet.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorSet.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ValidatorSet",
            value: exports.ValidatorSet.encode(message).finish()
        };
    }
};
function createBaseValidator() {
    return {
        address: new Uint8Array(),
        pub_key: keys_1.PublicKey.fromPartial({}),
        voting_power: helpers_1.Long.ZERO,
        proposer_priority: helpers_1.Long.ZERO
    };
}
exports.Validator = {
    typeUrl: "/tendermint.types.Validator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        if (message.pub_key !== undefined) {
            keys_1.PublicKey.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
        }
        if (!message.voting_power.isZero()) {
            writer.uint32(24).int64(message.voting_power);
        }
        if (!message.proposer_priority.isZero()) {
            writer.uint32(32).int64(message.proposer_priority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.bytes();
                    break;
                case 2:
                    message.pub_key = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.voting_power = reader.int64();
                    break;
                case 4:
                    message.proposer_priority = reader.int64();
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
            address: (0, helpers_1.isSet)(object.address) ? (0, helpers_1.bytesFromBase64)(object.address) : new Uint8Array(),
            pub_key: (0, helpers_1.isSet)(object.pub_key) ? keys_1.PublicKey.fromJSON(object.pub_key) : undefined,
            voting_power: (0, helpers_1.isSet)(object.voting_power) ? helpers_1.Long.fromValue(object.voting_power) : helpers_1.Long.ZERO,
            proposer_priority: (0, helpers_1.isSet)(object.proposer_priority) ? helpers_1.Long.fromValue(object.proposer_priority) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = (0, helpers_1.base64FromBytes)(message.address !== undefined ? message.address : new Uint8Array()));
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? keys_1.PublicKey.toJSON(message.pub_key) : undefined);
        message.voting_power !== undefined && (obj.voting_power = (message.voting_power || helpers_1.Long.ZERO).toString());
        message.proposer_priority !== undefined && (obj.proposer_priority = (message.proposer_priority || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.address = object.address ?? new Uint8Array();
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? keys_1.PublicKey.fromPartial(object.pub_key) : undefined;
        message.voting_power = object.voting_power !== undefined && object.voting_power !== null ? helpers_1.Long.fromValue(object.voting_power) : helpers_1.Long.ZERO;
        message.proposer_priority = object.proposer_priority !== undefined && object.proposer_priority !== null ? helpers_1.Long.fromValue(object.proposer_priority) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            pub_key: object?.pub_key ? keys_1.PublicKey.fromAmino(object.pub_key) : undefined,
            voting_power: helpers_1.Long.fromString(object.voting_power),
            proposer_priority: helpers_1.Long.fromString(object.proposer_priority)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.pub_key = message.pub_key ? keys_1.PublicKey.toAmino(message.pub_key) : undefined;
        obj.voting_power = message.voting_power ? message.voting_power.toString() : undefined;
        obj.proposer_priority = message.proposer_priority ? message.proposer_priority.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Validator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
function createBaseSimpleValidator() {
    return {
        pub_key: keys_1.PublicKey.fromPartial({}),
        voting_power: helpers_1.Long.ZERO
    };
}
exports.SimpleValidator = {
    typeUrl: "/tendermint.types.SimpleValidator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pub_key !== undefined) {
            keys_1.PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (!message.voting_power.isZero()) {
            writer.uint32(16).int64(message.voting_power);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimpleValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.voting_power = reader.int64();
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
            pub_key: (0, helpers_1.isSet)(object.pub_key) ? keys_1.PublicKey.fromJSON(object.pub_key) : undefined,
            voting_power: (0, helpers_1.isSet)(object.voting_power) ? helpers_1.Long.fromValue(object.voting_power) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.pub_key !== undefined && (obj.pub_key = message.pub_key ? keys_1.PublicKey.toJSON(message.pub_key) : undefined);
        message.voting_power !== undefined && (obj.voting_power = (message.voting_power || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSimpleValidator();
        message.pub_key = object.pub_key !== undefined && object.pub_key !== null ? keys_1.PublicKey.fromPartial(object.pub_key) : undefined;
        message.voting_power = object.voting_power !== undefined && object.voting_power !== null ? helpers_1.Long.fromValue(object.voting_power) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            pub_key: object?.pub_key ? keys_1.PublicKey.fromAmino(object.pub_key) : undefined,
            voting_power: helpers_1.Long.fromString(object.voting_power)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pub_key = message.pub_key ? keys_1.PublicKey.toAmino(message.pub_key) : undefined;
        obj.voting_power = message.voting_power ? message.voting_power.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SimpleValidator.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SimpleValidator.decode(message.value);
    },
    toProto(message) {
        return exports.SimpleValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.SimpleValidator",
            value: exports.SimpleValidator.encode(message).finish()
        };
    }
};
//# sourceMappingURL=validator.js.map