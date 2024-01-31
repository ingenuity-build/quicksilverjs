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
exports.MissedBlock = exports.ValidatorMissedBlocks = exports.SigningInfo = exports.GenesisState = void 0;
const slashing_1 = require("./slashing");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseGenesisState() {
    return {
        params: slashing_1.Params.fromPartial({}),
        signing_infos: [],
        missed_blocks: []
    };
}
exports.GenesisState = {
    typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
    aminoType: "cosmos-sdk/GenesisState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            slashing_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signing_infos) {
            exports.SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.missed_blocks) {
            exports.ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
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
                    message.params = slashing_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signing_infos.push(exports.SigningInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.missed_blocks.push(exports.ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
            params: (0, helpers_1.isSet)(object.params) ? slashing_1.Params.fromJSON(object.params) : undefined,
            signing_infos: Array.isArray(object?.signing_infos) ? object.signing_infos.map((e) => exports.SigningInfo.fromJSON(e)) : [],
            missed_blocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e) => exports.ValidatorMissedBlocks.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? slashing_1.Params.toJSON(message.params) : undefined);
        if (message.signing_infos) {
            obj.signing_infos = message.signing_infos.map(e => e ? exports.SigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.signing_infos = [];
        }
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map(e => e ? exports.ValidatorMissedBlocks.toJSON(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? slashing_1.Params.fromPartial(object.params) : undefined;
        message.signing_infos = object.signing_infos?.map(e => exports.SigningInfo.fromPartial(e)) || [];
        message.missed_blocks = object.missed_blocks?.map(e => exports.ValidatorMissedBlocks.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? slashing_1.Params.fromAmino(object.params) : undefined,
            signing_infos: Array.isArray(object?.signing_infos) ? object.signing_infos.map((e) => exports.SigningInfo.fromAmino(e)) : [],
            missed_blocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e) => exports.ValidatorMissedBlocks.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? slashing_1.Params.toAmino(message.params) : undefined;
        if (message.signing_infos) {
            obj.signing_infos = message.signing_infos.map(e => e ? exports.SigningInfo.toAmino(e) : undefined);
        }
        else {
            obj.signing_infos = [];
        }
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map(e => e ? exports.ValidatorMissedBlocks.toAmino(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GenesisState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenesisState",
            value: exports.GenesisState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GenesisState.decode(message.value);
    },
    toProto(message) {
        return exports.GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.GenesisState",
            value: exports.GenesisState.encode(message).finish()
        };
    }
};
function createBaseSigningInfo() {
    return {
        address: "",
        validator_signing_info: slashing_1.ValidatorSigningInfo.fromPartial({})
    };
}
exports.SigningInfo = {
    typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
    aminoType: "cosmos-sdk/SigningInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validator_signing_info !== undefined) {
            slashing_1.ValidatorSigningInfo.encode(message.validator_signing_info, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.validator_signing_info = slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32());
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            validator_signing_info: (0, helpers_1.isSet)(object.validator_signing_info) ? slashing_1.ValidatorSigningInfo.fromJSON(object.validator_signing_info) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.validator_signing_info !== undefined && (obj.validator_signing_info = message.validator_signing_info ? slashing_1.ValidatorSigningInfo.toJSON(message.validator_signing_info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSigningInfo();
        message.address = object.address ?? "";
        message.validator_signing_info = object.validator_signing_info !== undefined && object.validator_signing_info !== null ? slashing_1.ValidatorSigningInfo.fromPartial(object.validator_signing_info) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            validator_signing_info: object?.validator_signing_info ? slashing_1.ValidatorSigningInfo.fromAmino(object.validator_signing_info) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        obj.validator_signing_info = message.validator_signing_info ? slashing_1.ValidatorSigningInfo.toAmino(message.validator_signing_info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SigningInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SigningInfo",
            value: exports.SigningInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SigningInfo.decode(message.value);
    },
    toProto(message) {
        return exports.SigningInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.SigningInfo",
            value: exports.SigningInfo.encode(message).finish()
        };
    }
};
function createBaseValidatorMissedBlocks() {
    return {
        address: "",
        missed_blocks: []
    };
}
exports.ValidatorMissedBlocks = {
    typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
    aminoType: "cosmos-sdk/ValidatorMissedBlocks",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.missed_blocks) {
            exports.MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorMissedBlocks();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.missed_blocks.push(exports.MissedBlock.decode(reader, reader.uint32()));
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : "",
            missed_blocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e) => exports.MissedBlock.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map(e => e ? exports.MissedBlock.toJSON(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidatorMissedBlocks();
        message.address = object.address ?? "";
        message.missed_blocks = object.missed_blocks?.map(e => exports.MissedBlock.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address,
            missed_blocks: Array.isArray(object?.missed_blocks) ? object.missed_blocks.map((e) => exports.MissedBlock.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map(e => e ? exports.MissedBlock.toAmino(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ValidatorMissedBlocks.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ValidatorMissedBlocks",
            value: exports.ValidatorMissedBlocks.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ValidatorMissedBlocks.decode(message.value);
    },
    toProto(message) {
        return exports.ValidatorMissedBlocks.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.ValidatorMissedBlocks",
            value: exports.ValidatorMissedBlocks.encode(message).finish()
        };
    }
};
function createBaseMissedBlock() {
    return {
        index: helpers_1.Long.ZERO,
        missed: false
    };
}
exports.MissedBlock = {
    typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
    aminoType: "cosmos-sdk/MissedBlock",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.index.isZero()) {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissedBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.int64();
                    break;
                case 2:
                    message.missed = reader.bool();
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
            index: (0, helpers_1.isSet)(object.index) ? helpers_1.Long.fromValue(object.index) : helpers_1.Long.ZERO,
            missed: (0, helpers_1.isSet)(object.missed) ? Boolean(object.missed) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = (message.index || helpers_1.Long.ZERO).toString());
        message.missed !== undefined && (obj.missed = message.missed);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMissedBlock();
        message.index = object.index !== undefined && object.index !== null ? helpers_1.Long.fromValue(object.index) : helpers_1.Long.ZERO;
        message.missed = object.missed ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            index: helpers_1.Long.fromString(object.index),
            missed: object.missed
        };
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index ? message.index.toString() : undefined;
        obj.missed = message.missed;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MissedBlock.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MissedBlock",
            value: exports.MissedBlock.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MissedBlock.decode(message.value);
    },
    toProto(message) {
        return exports.MissedBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.MissedBlock",
            value: exports.MissedBlock.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map