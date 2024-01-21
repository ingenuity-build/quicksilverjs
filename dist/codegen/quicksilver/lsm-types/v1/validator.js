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
exports.Cosmos_cryptoPubKey_ToAmino = exports.Cosmos_cryptoPubKey_FromAmino = exports.Cosmos_cryptoPubKey_InterfaceDecoder = exports.QueryValidatorsResponse = exports.Validator = void 0;
const any_1 = require("../../../google/protobuf/any");
const staking_1 = require("../../../cosmos/staking/v1beta1/staking");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
const encoding_1 = require("@cosmjs/encoding");
const amino_1 = require("@cosmjs/amino");
function createBaseValidator() {
    return {
        operatorAddress: "",
        consensusPubkey: any_1.Any.fromPartial({}),
        jailed: false,
        status: 0,
        tokens: "",
        delegatorShares: "",
        description: staking_1.Description.fromPartial({}),
        unbondingHeight: helpers_1.Long.ZERO,
        unbondingTime: new Date(),
        commission: staking_1.Commission.fromPartial({}),
        minSelfDelegation: "",
        unbondingOnHoldRefCount: helpers_1.Long.ZERO,
        unbondingIds: [],
        validatorBondShares: "",
        liquidShares: ""
    };
}
exports.Validator = {
    typeUrl: "/cosmos.lsmstaking.v1beta1.Validator",
    aminoType: "cosmos-sdk/Validator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.consensusPubkey !== undefined) {
            any_1.Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
        }
        if (message.jailed === true) {
            writer.uint32(24).bool(message.jailed);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokens !== "") {
            writer.uint32(42).string(message.tokens);
        }
        if (message.delegatorShares !== "") {
            writer.uint32(50).string(message.delegatorShares);
        }
        if (message.description !== undefined) {
            staking_1.Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (!message.unbondingHeight.isZero()) {
            writer.uint32(64).int64(message.unbondingHeight);
        }
        if (message.unbondingTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.unbondingTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            staking_1.Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
        }
        if (message.minSelfDelegation !== "") {
            writer.uint32(90).string(message.minSelfDelegation);
        }
        if (!message.unbondingOnHoldRefCount.isZero()) {
            writer.uint32(96).int64(message.unbondingOnHoldRefCount);
        }
        writer.uint32(106).fork();
        for (const v of message.unbondingIds) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.validatorBondShares !== "") {
            writer.uint32(114).string(message.validatorBondShares);
        }
        if (message.liquidShares !== "") {
            writer.uint32(122).string(message.liquidShares);
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
                    message.operatorAddress = reader.string();
                    break;
                case 2:
                    message.consensusPubkey = (0, exports.Cosmos_cryptoPubKey_InterfaceDecoder)(reader);
                    break;
                case 3:
                    message.jailed = reader.bool();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.tokens = reader.string();
                    break;
                case 6:
                    message.delegatorShares = reader.string();
                    break;
                case 7:
                    message.description = staking_1.Description.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unbondingHeight = reader.int64();
                    break;
                case 9:
                    message.unbondingTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.commission = staking_1.Commission.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.minSelfDelegation = reader.string();
                    break;
                case 12:
                    message.unbondingOnHoldRefCount = reader.int64();
                    break;
                case 13:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.unbondingIds.push(reader.uint64());
                        }
                    }
                    else {
                        message.unbondingIds.push(reader.uint64());
                    }
                    break;
                case 14:
                    message.validatorBondShares = reader.string();
                    break;
                case 15:
                    message.liquidShares = reader.string();
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
            operatorAddress: (0, helpers_1.isSet)(object.operatorAddress) ? String(object.operatorAddress) : "",
            consensusPubkey: (0, helpers_1.isSet)(object.consensusPubkey) ? any_1.Any.fromJSON(object.consensusPubkey) : undefined,
            jailed: (0, helpers_1.isSet)(object.jailed) ? Boolean(object.jailed) : false,
            status: (0, helpers_1.isSet)(object.status) ? (0, staking_1.bondStatusFromJSON)(object.status) : -1,
            tokens: (0, helpers_1.isSet)(object.tokens) ? String(object.tokens) : "",
            delegatorShares: (0, helpers_1.isSet)(object.delegatorShares) ? String(object.delegatorShares) : "",
            description: (0, helpers_1.isSet)(object.description) ? staking_1.Description.fromJSON(object.description) : undefined,
            unbondingHeight: (0, helpers_1.isSet)(object.unbondingHeight) ? helpers_1.Long.fromValue(object.unbondingHeight) : helpers_1.Long.ZERO,
            unbondingTime: (0, helpers_1.isSet)(object.unbondingTime) ? (0, helpers_1.fromJsonTimestamp)(object.unbondingTime) : undefined,
            commission: (0, helpers_1.isSet)(object.commission) ? staking_1.Commission.fromJSON(object.commission) : undefined,
            minSelfDelegation: (0, helpers_1.isSet)(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
            unbondingOnHoldRefCount: (0, helpers_1.isSet)(object.unbondingOnHoldRefCount) ? helpers_1.Long.fromValue(object.unbondingOnHoldRefCount) : helpers_1.Long.ZERO,
            unbondingIds: Array.isArray(object?.unbondingIds) ? object.unbondingIds.map((e) => helpers_1.Long.fromValue(e)) : [],
            validatorBondShares: (0, helpers_1.isSet)(object.validatorBondShares) ? String(object.validatorBondShares) : "",
            liquidShares: (0, helpers_1.isSet)(object.liquidShares) ? String(object.liquidShares) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
        message.consensusPubkey !== undefined && (obj.consensusPubkey = message.consensusPubkey ? any_1.Any.toJSON(message.consensusPubkey) : undefined);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.status !== undefined && (obj.status = (0, staking_1.bondStatusToJSON)(message.status));
        message.tokens !== undefined && (obj.tokens = message.tokens);
        message.delegatorShares !== undefined && (obj.delegatorShares = message.delegatorShares);
        message.description !== undefined && (obj.description = message.description ? staking_1.Description.toJSON(message.description) : undefined);
        message.unbondingHeight !== undefined && (obj.unbondingHeight = (message.unbondingHeight || helpers_1.Long.ZERO).toString());
        message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime.toISOString());
        message.commission !== undefined && (obj.commission = message.commission ? staking_1.Commission.toJSON(message.commission) : undefined);
        message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
        message.unbondingOnHoldRefCount !== undefined && (obj.unbondingOnHoldRefCount = (message.unbondingOnHoldRefCount || helpers_1.Long.ZERO).toString());
        if (message.unbondingIds) {
            obj.unbondingIds = message.unbondingIds.map(e => (e || helpers_1.Long.UZERO).toString());
        }
        else {
            obj.unbondingIds = [];
        }
        message.validatorBondShares !== undefined && (obj.validatorBondShares = message.validatorBondShares);
        message.liquidShares !== undefined && (obj.liquidShares = message.liquidShares);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.operatorAddress = object.operatorAddress ?? "";
        message.consensusPubkey = object.consensusPubkey !== undefined && object.consensusPubkey !== null ? any_1.Any.fromPartial(object.consensusPubkey) : undefined;
        message.jailed = object.jailed ?? false;
        message.status = object.status ?? 0;
        message.tokens = object.tokens ?? "";
        message.delegatorShares = object.delegatorShares ?? "";
        message.description = object.description !== undefined && object.description !== null ? staking_1.Description.fromPartial(object.description) : undefined;
        message.unbondingHeight = object.unbondingHeight !== undefined && object.unbondingHeight !== null ? helpers_1.Long.fromValue(object.unbondingHeight) : helpers_1.Long.ZERO;
        message.unbondingTime = object.unbondingTime ?? undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? staking_1.Commission.fromPartial(object.commission) : undefined;
        message.minSelfDelegation = object.minSelfDelegation ?? "";
        message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== undefined && object.unbondingOnHoldRefCount !== null ? helpers_1.Long.fromValue(object.unbondingOnHoldRefCount) : helpers_1.Long.ZERO;
        message.unbondingIds = object.unbondingIds?.map(e => helpers_1.Long.fromValue(e)) || [];
        message.validatorBondShares = object.validatorBondShares ?? "";
        message.liquidShares = object.liquidShares ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            operatorAddress: object.operator_address,
            consensusPubkey: (0, amino_1.encodeBech32Pubkey)({
                type: "tendermint/PubKeySecp256k1",
                value: (0, encoding_1.toBase64)(object.consensus_pubkey.value)
            }, "cosmos"),
            jailed: object.jailed,
            status: (0, helpers_1.isSet)(object.status) ? (0, staking_1.bondStatusFromJSON)(object.status) : -1,
            tokens: object.tokens,
            delegatorShares: object.delegator_shares,
            description: object?.description ? staking_1.Description.fromAmino(object.description) : undefined,
            unbondingHeight: helpers_1.Long.fromString(object.unbonding_height),
            unbondingTime: object.unbonding_time,
            commission: object?.commission ? staking_1.Commission.fromAmino(object.commission) : undefined,
            minSelfDelegation: object.min_self_delegation,
            unbondingOnHoldRefCount: helpers_1.Long.fromString(object.unbonding_on_hold_ref_count),
            unbondingIds: Array.isArray(object?.unbonding_ids) ? object.unbonding_ids.map((e) => e) : [],
            validatorBondShares: object.validator_bond_shares,
            liquidShares: object.liquid_shares
        };
    },
    toAmino(message) {
        const obj = {};
        obj.operator_address = message.operatorAddress;
        obj.consensus_pubkey = message.consensusPubkey ? {
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: (0, encoding_1.fromBase64)((0, amino_1.decodeBech32Pubkey)(message.consensusPubkey).value)
        } : undefined;
        obj.jailed = message.jailed;
        obj.status = message.status;
        obj.tokens = message.tokens;
        obj.delegator_shares = message.delegatorShares;
        obj.description = message.description ? staking_1.Description.toAmino(message.description) : undefined;
        obj.unbonding_height = message.unbondingHeight ? message.unbondingHeight.toString() : undefined;
        obj.unbonding_time = message.unbondingTime;
        obj.commission = message.commission ? staking_1.Commission.toAmino(message.commission) : undefined;
        obj.min_self_delegation = message.minSelfDelegation;
        obj.unbonding_on_hold_ref_count = message.unbondingOnHoldRefCount ? message.unbondingOnHoldRefCount.toString() : undefined;
        if (message.unbondingIds) {
            obj.unbonding_ids = message.unbondingIds.map(e => e);
        }
        else {
            obj.unbonding_ids = [];
        }
        obj.validator_bond_shares = message.validatorBondShares;
        obj.liquid_shares = message.liquidShares;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Validator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validator",
            value: exports.Validator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Validator.decode(message.value);
    },
    toProto(message) {
        return exports.Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.lsmstaking.v1beta1.Validator",
            value: exports.Validator.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorsResponse() {
    return {
        validators: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryValidatorsResponse = {
    typeUrl: "/cosmos.lsmstaking.v1beta1.QueryValidatorsResponse",
    aminoType: "cosmos-sdk/QueryValidatorsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
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
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorsResponse();
        message.validators = object.validators?.map(e => exports.Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => exports.Validator.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
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
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryValidatorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorsResponse",
            value: exports.QueryValidatorsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryValidatorsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryValidatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.lsmstaking.v1beta1.QueryValidatorsResponse",
            value: exports.QueryValidatorsResponse.encode(message).finish()
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
//# sourceMappingURL=validator.js.map