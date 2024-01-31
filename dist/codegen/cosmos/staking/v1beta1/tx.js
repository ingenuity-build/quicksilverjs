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
exports.Cosmos_cryptoPubKey_ToAmino = exports.Cosmos_cryptoPubKey_FromAmino = exports.Cosmos_cryptoPubKey_InterfaceDecoder = exports.MsgUndelegateResponse = exports.MsgUndelegate = exports.MsgBeginRedelegateResponse = exports.MsgBeginRedelegate = exports.MsgDelegateResponse = exports.MsgDelegate = exports.MsgEditValidatorResponse = exports.MsgEditValidator = exports.MsgCreateValidatorResponse = exports.MsgCreateValidator = void 0;
const staking_1 = require("./staking");
const any_1 = require("../../../google/protobuf/any");
const coin_1 = require("../../base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
const encoding_1 = require("@cosmjs/encoding");
const amino_1 = require("@cosmjs/amino");
function createBaseMsgCreateValidator() {
    return {
        description: staking_1.Description.fromPartial({}),
        commission: staking_1.CommissionRates.fromPartial({}),
        min_self_delegation: "",
        delegator_address: "",
        validator_address: "",
        pubkey: any_1.Any.fromPartial({}),
        value: coin_1.Coin.fromPartial({})
    };
}
exports.MsgCreateValidator = {
    typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
    aminoType: "cosmos-sdk/MsgCreateValidator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== undefined) {
            staking_1.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            staking_1.CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
        }
        if (message.min_self_delegation !== "") {
            writer.uint32(26).string(message.min_self_delegation);
        }
        if (message.delegator_address !== "") {
            writer.uint32(34).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(42).string(message.validator_address);
        }
        if (message.pubkey !== undefined) {
            any_1.Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
        }
        if (message.value !== undefined) {
            coin_1.Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = staking_1.Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commission = staking_1.CommissionRates.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.min_self_delegation = reader.string();
                    break;
                case 4:
                    message.delegator_address = reader.string();
                    break;
                case 5:
                    message.validator_address = reader.string();
                    break;
                case 6:
                    message.pubkey = (0, exports.Cosmos_cryptoPubKey_InterfaceDecoder)(reader);
                    break;
                case 7:
                    message.value = coin_1.Coin.decode(reader, reader.uint32());
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
            description: (0, helpers_1.isSet)(object.description) ? staking_1.Description.fromJSON(object.description) : undefined,
            commission: (0, helpers_1.isSet)(object.commission) ? staking_1.CommissionRates.fromJSON(object.commission) : undefined,
            min_self_delegation: (0, helpers_1.isSet)(object.min_self_delegation) ? String(object.min_self_delegation) : "",
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            pubkey: (0, helpers_1.isSet)(object.pubkey) ? any_1.Any.fromJSON(object.pubkey) : undefined,
            value: (0, helpers_1.isSet)(object.value) ? coin_1.Coin.fromJSON(object.value) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined && (obj.description = message.description ? staking_1.Description.toJSON(message.description) : undefined);
        message.commission !== undefined && (obj.commission = message.commission ? staking_1.CommissionRates.toJSON(message.commission) : undefined);
        message.min_self_delegation !== undefined && (obj.min_self_delegation = message.min_self_delegation);
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.pubkey !== undefined && (obj.pubkey = message.pubkey ? any_1.Any.toJSON(message.pubkey) : undefined);
        message.value !== undefined && (obj.value = message.value ? coin_1.Coin.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateValidator();
        message.description = object.description !== undefined && object.description !== null ? staking_1.Description.fromPartial(object.description) : undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? staking_1.CommissionRates.fromPartial(object.commission) : undefined;
        message.min_self_delegation = object.min_self_delegation ?? "";
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? any_1.Any.fromPartial(object.pubkey) : undefined;
        message.value = object.value !== undefined && object.value !== null ? coin_1.Coin.fromPartial(object.value) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            description: object?.description ? staking_1.Description.fromAmino(object.description) : undefined,
            commission: object?.commission ? staking_1.CommissionRates.fromAmino(object.commission) : undefined,
            min_self_delegation: object.min_self_delegation,
            delegator_address: object.delegator_address,
            validator_address: object.validator_address,
            pubkey: (0, amino_1.encodeBech32Pubkey)({
                type: "tendermint/PubKeySecp256k1",
                value: (0, encoding_1.toBase64)(object.pubkey.value)
            }, "cosmos"),
            value: object?.value ? coin_1.Coin.fromAmino(object.value) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.description = message.description ? staking_1.Description.toAmino(message.description) : undefined;
        obj.commission = message.commission ? staking_1.CommissionRates.toAmino(message.commission) : undefined;
        obj.min_self_delegation = message.min_self_delegation;
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.pubkey = message.pubkey ? {
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: (0, encoding_1.fromBase64)((0, amino_1.decodeBech32Pubkey)(message.pubkey).value)
        } : undefined;
        obj.value = message.value ? coin_1.Coin.toAmino(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateValidator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateValidator",
            value: exports.MsgCreateValidator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateValidator.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
            value: exports.MsgCreateValidator.encode(message).finish()
        };
    }
};
function createBaseMsgCreateValidatorResponse() {
    return {};
}
exports.MsgCreateValidatorResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
    aminoType: "cosmos-sdk/MsgCreateValidatorResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgCreateValidatorResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateValidatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateValidatorResponse",
            value: exports.MsgCreateValidatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
            value: exports.MsgCreateValidatorResponse.encode(message).finish()
        };
    }
};
function createBaseMsgEditValidator() {
    return {
        description: staking_1.Description.fromPartial({}),
        validator_address: "",
        commission_rate: "",
        min_self_delegation: ""
    };
}
exports.MsgEditValidator = {
    typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
    aminoType: "cosmos-sdk/MsgEditValidator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== undefined) {
            staking_1.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.commission_rate !== "") {
            writer.uint32(26).string(message.commission_rate);
        }
        if (message.min_self_delegation !== "") {
            writer.uint32(34).string(message.min_self_delegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = staking_1.Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.commission_rate = reader.string();
                    break;
                case 4:
                    message.min_self_delegation = reader.string();
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
            description: (0, helpers_1.isSet)(object.description) ? staking_1.Description.fromJSON(object.description) : undefined,
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            commission_rate: (0, helpers_1.isSet)(object.commission_rate) ? String(object.commission_rate) : "",
            min_self_delegation: (0, helpers_1.isSet)(object.min_self_delegation) ? String(object.min_self_delegation) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined && (obj.description = message.description ? staking_1.Description.toJSON(message.description) : undefined);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.commission_rate !== undefined && (obj.commission_rate = message.commission_rate);
        message.min_self_delegation !== undefined && (obj.min_self_delegation = message.min_self_delegation);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgEditValidator();
        message.description = object.description !== undefined && object.description !== null ? staking_1.Description.fromPartial(object.description) : undefined;
        message.validator_address = object.validator_address ?? "";
        message.commission_rate = object.commission_rate ?? "";
        message.min_self_delegation = object.min_self_delegation ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            description: object?.description ? staking_1.Description.fromAmino(object.description) : undefined,
            validator_address: object.validator_address,
            commission_rate: object.commission_rate,
            min_self_delegation: object.min_self_delegation
        };
    },
    toAmino(message) {
        const obj = {};
        obj.description = message.description ? staking_1.Description.toAmino(message.description) : undefined;
        obj.validator_address = message.validator_address;
        obj.commission_rate = message.commission_rate;
        obj.min_self_delegation = message.min_self_delegation;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgEditValidator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgEditValidator",
            value: exports.MsgEditValidator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgEditValidator.decode(message.value);
    },
    toProto(message) {
        return exports.MsgEditValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
            value: exports.MsgEditValidator.encode(message).finish()
        };
    }
};
function createBaseMsgEditValidatorResponse() {
    return {};
}
exports.MsgEditValidatorResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
    aminoType: "cosmos-sdk/MsgEditValidatorResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgEditValidatorResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgEditValidatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgEditValidatorResponse",
            value: exports.MsgEditValidatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgEditValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgEditValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
            value: exports.MsgEditValidatorResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDelegate() {
    return {
        delegator_address: "",
        validator_address: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgDelegate = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
    aminoType: "cosmos-sdk/MsgDelegate",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDelegate();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_address: object.validator_address,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDelegate",
            value: exports.MsgDelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
            value: exports.MsgDelegate.encode(message).finish()
        };
    }
};
function createBaseMsgDelegateResponse() {
    return {};
}
exports.MsgDelegateResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
    aminoType: "cosmos-sdk/MsgDelegateResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgDelegateResponse();
        return message;
    },
    fromAmino(_) {
        return {};
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDelegateResponse",
            value: exports.MsgDelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
            value: exports.MsgDelegateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBeginRedelegate() {
    return {
        delegator_address: "",
        validator_src_address: "",
        validator_dst_address: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgBeginRedelegate = {
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
    aminoType: "cosmos-sdk/MsgBeginRedelegate",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_src_address !== "") {
            writer.uint32(18).string(message.validator_src_address);
        }
        if (message.validator_dst_address !== "") {
            writer.uint32(26).string(message.validator_dst_address);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginRedelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_src_address = reader.string();
                    break;
                case 3:
                    message.validator_dst_address = reader.string();
                    break;
                case 4:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_src_address: (0, helpers_1.isSet)(object.validator_src_address) ? String(object.validator_src_address) : "",
            validator_dst_address: (0, helpers_1.isSet)(object.validator_dst_address) ? String(object.validator_dst_address) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_src_address !== undefined && (obj.validator_src_address = message.validator_src_address);
        message.validator_dst_address !== undefined && (obj.validator_dst_address = message.validator_dst_address);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginRedelegate();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_src_address = object.validator_src_address ?? "";
        message.validator_dst_address = object.validator_dst_address ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_src_address: object.validator_src_address,
            validator_dst_address: object.validator_dst_address,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_src_address = message.validator_src_address;
        obj.validator_dst_address = message.validator_dst_address;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBeginRedelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgBeginRedelegate",
            value: exports.MsgBeginRedelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBeginRedelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBeginRedelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
            value: exports.MsgBeginRedelegate.encode(message).finish()
        };
    }
};
function createBaseMsgBeginRedelegateResponse() {
    return {
        completion_time: new Date()
    };
}
exports.MsgBeginRedelegateResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
    aminoType: "cosmos-sdk/MsgBeginRedelegateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completion_time), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginRedelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completion_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            completion_time: (0, helpers_1.isSet)(object.completion_time) ? (0, helpers_1.fromJsonTimestamp)(object.completion_time) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginRedelegateResponse();
        message.completion_time = object.completion_time ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            completion_time: object.completion_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.completion_time = message.completion_time;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgBeginRedelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgBeginRedelegateResponse",
            value: exports.MsgBeginRedelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgBeginRedelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgBeginRedelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
            value: exports.MsgBeginRedelegateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUndelegate() {
    return {
        delegator_address: "",
        validator_address: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgUndelegate = {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
    aminoType: "cosmos-sdk/MsgUndelegate",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUndelegate();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_address: object.validator_address,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUndelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUndelegate",
            value: exports.MsgUndelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUndelegate.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUndelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
            value: exports.MsgUndelegate.encode(message).finish()
        };
    }
};
function createBaseMsgUndelegateResponse() {
    return {
        completion_time: new Date()
    };
}
exports.MsgUndelegateResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
    aminoType: "cosmos-sdk/MsgUndelegateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completion_time), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completion_time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            completion_time: (0, helpers_1.isSet)(object.completion_time) ? (0, helpers_1.fromJsonTimestamp)(object.completion_time) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUndelegateResponse();
        message.completion_time = object.completion_time ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            completion_time: object.completion_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.completion_time = message.completion_time;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUndelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUndelegateResponse",
            value: exports.MsgUndelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUndelegateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUndelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
            value: exports.MsgUndelegateResponse.encode(message).finish()
        };
    }
};
const Cosmos_cryptoPubKey_InterfaceDecoder = (input) => {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const data = any_1.Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
exports.Cosmos_cryptoPubKey_InterfaceDecoder = Cosmos_cryptoPubKey_InterfaceDecoder;
const Cosmos_cryptoPubKey_FromAmino = (content) => {
    return (0, amino_1.encodeBech32Pubkey)({
        type: "tendermint/PubKeySecp256k1",
        value: (0, encoding_1.toBase64)(content.value)
    }, "cosmos");
};
exports.Cosmos_cryptoPubKey_FromAmino = Cosmos_cryptoPubKey_FromAmino;
const Cosmos_cryptoPubKey_ToAmino = (content) => {
    return {
        typeUrl: "/cosmos.crypto.secp256k1.PubKey",
        value: (0, encoding_1.fromBase64)((0, amino_1.decodeBech32Pubkey)(content).value)
    };
};
exports.Cosmos_cryptoPubKey_ToAmino = Cosmos_cryptoPubKey_ToAmino;
//# sourceMappingURL=tx.js.map