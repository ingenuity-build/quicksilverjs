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
exports.HashedParams = exports.VersionParams = exports.ValidatorParams = exports.EvidenceParams = exports.BlockParams = exports.ConsensusParams = void 0;
const duration_1 = require("../../google/protobuf/duration");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseConsensusParams() {
    return {
        block: exports.BlockParams.fromPartial({}),
        evidence: exports.EvidenceParams.fromPartial({}),
        validator: exports.ValidatorParams.fromPartial({}),
        version: exports.VersionParams.fromPartial({})
    };
}
exports.ConsensusParams = {
    typeUrl: "/tendermint.types.ConsensusParams",
    encode(message, writer = _m0.Writer.create()) {
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            exports.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            exports.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            exports.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = exports.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = exports.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = exports.VersionParams.decode(reader, reader.uint32());
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
            block: (0, helpers_1.isSet)(object.block) ? exports.BlockParams.fromJSON(object.block) : undefined,
            evidence: (0, helpers_1.isSet)(object.evidence) ? exports.EvidenceParams.fromJSON(object.evidence) : undefined,
            validator: (0, helpers_1.isSet)(object.validator) ? exports.ValidatorParams.fromJSON(object.validator) : undefined,
            version: (0, helpers_1.isSet)(object.version) ? exports.VersionParams.fromJSON(object.version) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined && (obj.block = message.block ? exports.BlockParams.toJSON(message.block) : undefined);
        message.evidence !== undefined && (obj.evidence = message.evidence ? exports.EvidenceParams.toJSON(message.evidence) : undefined);
        message.validator !== undefined && (obj.validator = message.validator ? exports.ValidatorParams.toJSON(message.validator) : undefined);
        message.version !== undefined && (obj.version = message.version ? exports.VersionParams.toJSON(message.version) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusParams();
        message.block = object.block !== undefined && object.block !== null ? exports.BlockParams.fromPartial(object.block) : undefined;
        message.evidence = object.evidence !== undefined && object.evidence !== null ? exports.EvidenceParams.fromPartial(object.evidence) : undefined;
        message.validator = object.validator !== undefined && object.validator !== null ? exports.ValidatorParams.fromPartial(object.validator) : undefined;
        message.version = object.version !== undefined && object.version !== null ? exports.VersionParams.fromPartial(object.version) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            block: object?.block ? exports.BlockParams.fromAmino(object.block) : undefined,
            evidence: object?.evidence ? exports.EvidenceParams.fromAmino(object.evidence) : undefined,
            validator: object?.validator ? exports.ValidatorParams.fromAmino(object.validator) : undefined,
            version: object?.version ? exports.VersionParams.fromAmino(object.version) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block = message.block ? exports.BlockParams.toAmino(message.block) : undefined;
        obj.evidence = message.evidence ? exports.EvidenceParams.toAmino(message.evidence) : undefined;
        obj.validator = message.validator ? exports.ValidatorParams.toAmino(message.validator) : undefined;
        obj.version = message.version ? exports.VersionParams.toAmino(message.version) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ConsensusParams.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ConsensusParams",
            value: exports.ConsensusParams.encode(message).finish()
        };
    }
};
function createBaseBlockParams() {
    return {
        max_bytes: helpers_1.Long.ZERO,
        max_gas: helpers_1.Long.ZERO,
        time_iota_ms: helpers_1.Long.ZERO
    };
}
exports.BlockParams = {
    typeUrl: "/tendermint.types.BlockParams",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.max_bytes.isZero()) {
            writer.uint32(8).int64(message.max_bytes);
        }
        if (!message.max_gas.isZero()) {
            writer.uint32(16).int64(message.max_gas);
        }
        if (!message.time_iota_ms.isZero()) {
            writer.uint32(24).int64(message.time_iota_ms);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_bytes = reader.int64();
                    break;
                case 2:
                    message.max_gas = reader.int64();
                    break;
                case 3:
                    message.time_iota_ms = reader.int64();
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
            max_bytes: (0, helpers_1.isSet)(object.max_bytes) ? helpers_1.Long.fromValue(object.max_bytes) : helpers_1.Long.ZERO,
            max_gas: (0, helpers_1.isSet)(object.max_gas) ? helpers_1.Long.fromValue(object.max_gas) : helpers_1.Long.ZERO,
            time_iota_ms: (0, helpers_1.isSet)(object.time_iota_ms) ? helpers_1.Long.fromValue(object.time_iota_ms) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_bytes !== undefined && (obj.max_bytes = (message.max_bytes || helpers_1.Long.ZERO).toString());
        message.max_gas !== undefined && (obj.max_gas = (message.max_gas || helpers_1.Long.ZERO).toString());
        message.time_iota_ms !== undefined && (obj.time_iota_ms = (message.time_iota_ms || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockParams();
        message.max_bytes = object.max_bytes !== undefined && object.max_bytes !== null ? helpers_1.Long.fromValue(object.max_bytes) : helpers_1.Long.ZERO;
        message.max_gas = object.max_gas !== undefined && object.max_gas !== null ? helpers_1.Long.fromValue(object.max_gas) : helpers_1.Long.ZERO;
        message.time_iota_ms = object.time_iota_ms !== undefined && object.time_iota_ms !== null ? helpers_1.Long.fromValue(object.time_iota_ms) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            max_bytes: helpers_1.Long.fromString(object.max_bytes),
            max_gas: helpers_1.Long.fromString(object.max_gas),
            time_iota_ms: helpers_1.Long.fromString(object.time_iota_ms)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.max_bytes = message.max_bytes ? message.max_bytes.toString() : undefined;
        obj.max_gas = message.max_gas ? message.max_gas.toString() : undefined;
        obj.time_iota_ms = message.time_iota_ms ? message.time_iota_ms.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BlockParams.decode(message.value);
    },
    toProto(message) {
        return exports.BlockParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockParams",
            value: exports.BlockParams.encode(message).finish()
        };
    }
};
function createBaseEvidenceParams() {
    return {
        max_age_num_blocks: helpers_1.Long.ZERO,
        max_age_duration: duration_1.Duration.fromPartial({}),
        max_bytes: helpers_1.Long.ZERO
    };
}
exports.EvidenceParams = {
    typeUrl: "/tendermint.types.EvidenceParams",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.max_age_num_blocks.isZero()) {
            writer.uint32(8).int64(message.max_age_num_blocks);
        }
        if (message.max_age_duration !== undefined) {
            duration_1.Duration.encode(message.max_age_duration, writer.uint32(18).fork()).ldelim();
        }
        if (!message.max_bytes.isZero()) {
            writer.uint32(24).int64(message.max_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidenceParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_age_num_blocks = reader.int64();
                    break;
                case 2:
                    message.max_age_duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.max_bytes = reader.int64();
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
            max_age_num_blocks: (0, helpers_1.isSet)(object.max_age_num_blocks) ? helpers_1.Long.fromValue(object.max_age_num_blocks) : helpers_1.Long.ZERO,
            max_age_duration: (0, helpers_1.isSet)(object.max_age_duration) ? duration_1.Duration.fromJSON(object.max_age_duration) : undefined,
            max_bytes: (0, helpers_1.isSet)(object.max_bytes) ? helpers_1.Long.fromValue(object.max_bytes) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_age_num_blocks !== undefined && (obj.max_age_num_blocks = (message.max_age_num_blocks || helpers_1.Long.ZERO).toString());
        message.max_age_duration !== undefined && (obj.max_age_duration = message.max_age_duration ? duration_1.Duration.toJSON(message.max_age_duration) : undefined);
        message.max_bytes !== undefined && (obj.max_bytes = (message.max_bytes || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvidenceParams();
        message.max_age_num_blocks = object.max_age_num_blocks !== undefined && object.max_age_num_blocks !== null ? helpers_1.Long.fromValue(object.max_age_num_blocks) : helpers_1.Long.ZERO;
        message.max_age_duration = object.max_age_duration !== undefined && object.max_age_duration !== null ? duration_1.Duration.fromPartial(object.max_age_duration) : undefined;
        message.max_bytes = object.max_bytes !== undefined && object.max_bytes !== null ? helpers_1.Long.fromValue(object.max_bytes) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            max_age_num_blocks: helpers_1.Long.fromString(object.max_age_num_blocks),
            max_age_duration: object?.max_age_duration ? duration_1.Duration.fromAmino(object.max_age_duration) : undefined,
            max_bytes: helpers_1.Long.fromString(object.max_bytes)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.max_age_num_blocks = message.max_age_num_blocks ? message.max_age_num_blocks.toString() : undefined;
        obj.max_age_duration = message.max_age_duration ? duration_1.Duration.toAmino(message.max_age_duration) : undefined;
        obj.max_bytes = message.max_bytes ? message.max_bytes.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.EvidenceParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.EvidenceParams.decode(message.value);
    },
    toProto(message) {
        return exports.EvidenceParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.EvidenceParams",
            value: exports.EvidenceParams.encode(message).finish()
        };
    }
};
function createBaseValidatorParams() {
    return {
        pub_key_types: []
    };
}
exports.ValidatorParams = {
    typeUrl: "/tendermint.types.ValidatorParams",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pub_key_types) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key_types.push(reader.string());
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
            pub_key_types: Array.isArray(object?.pub_key_types) ? object.pub_key_types.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pub_key_types) {
            obj.pub_key_types = message.pub_key_types.map(e => e);
        }
        else {
            obj.pub_key_types = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorParams();
        message.pub_key_types = object.pub_key_types?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            pub_key_types: Array.isArray(object?.pub_key_types) ? object.pub_key_types.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.pub_key_types) {
            obj.pub_key_types = message.pub_key_types.map(e => e);
        }
        else {
            obj.pub_key_types = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.ValidatorParams.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.ValidatorParams",
            value: exports.ValidatorParams.encode(message).finish()
        };
    }
};
function createBaseVersionParams() {
    return {
        app_version: helpers_1.Long.UZERO
    };
}
exports.VersionParams = {
    typeUrl: "/tendermint.types.VersionParams",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.app_version.isZero()) {
            writer.uint32(8).uint64(message.app_version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.app_version = reader.uint64();
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
            app_version: (0, helpers_1.isSet)(object.app_version) ? helpers_1.Long.fromValue(object.app_version) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.app_version !== undefined && (obj.app_version = (message.app_version || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVersionParams();
        message.app_version = object.app_version !== undefined && object.app_version !== null ? helpers_1.Long.fromValue(object.app_version) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            app_version: helpers_1.Long.fromString(object.app_version)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.app_version = message.app_version ? message.app_version.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.VersionParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.VersionParams.decode(message.value);
    },
    toProto(message) {
        return exports.VersionParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.VersionParams",
            value: exports.VersionParams.encode(message).finish()
        };
    }
};
function createBaseHashedParams() {
    return {
        block_max_bytes: helpers_1.Long.ZERO,
        block_max_gas: helpers_1.Long.ZERO
    };
}
exports.HashedParams = {
    typeUrl: "/tendermint.types.HashedParams",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.block_max_bytes.isZero()) {
            writer.uint32(8).int64(message.block_max_bytes);
        }
        if (!message.block_max_gas.isZero()) {
            writer.uint32(16).int64(message.block_max_gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHashedParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_max_bytes = reader.int64();
                    break;
                case 2:
                    message.block_max_gas = reader.int64();
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
            block_max_bytes: (0, helpers_1.isSet)(object.block_max_bytes) ? helpers_1.Long.fromValue(object.block_max_bytes) : helpers_1.Long.ZERO,
            block_max_gas: (0, helpers_1.isSet)(object.block_max_gas) ? helpers_1.Long.fromValue(object.block_max_gas) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_max_bytes !== undefined && (obj.block_max_bytes = (message.block_max_bytes || helpers_1.Long.ZERO).toString());
        message.block_max_gas !== undefined && (obj.block_max_gas = (message.block_max_gas || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHashedParams();
        message.block_max_bytes = object.block_max_bytes !== undefined && object.block_max_bytes !== null ? helpers_1.Long.fromValue(object.block_max_bytes) : helpers_1.Long.ZERO;
        message.block_max_gas = object.block_max_gas !== undefined && object.block_max_gas !== null ? helpers_1.Long.fromValue(object.block_max_gas) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            block_max_bytes: helpers_1.Long.fromString(object.block_max_bytes),
            block_max_gas: helpers_1.Long.fromString(object.block_max_gas)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_max_bytes = message.block_max_bytes ? message.block_max_bytes.toString() : undefined;
        obj.block_max_gas = message.block_max_gas ? message.block_max_gas.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.HashedParams.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.HashedParams.decode(message.value);
    },
    toProto(message) {
        return exports.HashedParams.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.HashedParams",
            value: exports.HashedParams.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map