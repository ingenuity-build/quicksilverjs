import { Any } from "../../../google/protobuf/any";
import { Description, Commission, bondStatusFromJSON, bondStatusToJSON } from "../../../cosmos/staking/v1beta1/staking";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Long, toTimestamp, fromTimestamp, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { toBase64, fromBase64 } from "@cosmjs/encoding";
import { encodeBech32Pubkey, decodeBech32Pubkey } from "@cosmjs/amino";
function createBaseValidator() {
    return {
        operatorAddress: "",
        consensusPubkey: Any.fromPartial({}),
        jailed: false,
        status: 0,
        tokens: "",
        delegatorShares: "",
        description: Description.fromPartial({}),
        unbondingHeight: Long.ZERO,
        unbondingTime: new Date(),
        commission: Commission.fromPartial({}),
        minSelfDelegation: "",
        unbondingOnHoldRefCount: Long.ZERO,
        unbondingIds: [],
        validatorBondShares: "",
        liquidShares: ""
    };
}
export const Validator = {
    typeUrl: "/cosmos.lsmstaking.v1beta1.Validator",
    aminoType: "cosmos-sdk/Validator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.operatorAddress !== "") {
            writer.uint32(10).string(message.operatorAddress);
        }
        if (message.consensusPubkey !== undefined) {
            Any.encode(message.consensusPubkey, writer.uint32(18).fork()).ldelim();
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
            Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (!message.unbondingHeight.isZero()) {
            writer.uint32(64).int64(message.unbondingHeight);
        }
        if (message.unbondingTime !== undefined) {
            Timestamp.encode(toTimestamp(message.unbondingTime), writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
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
                    message.consensusPubkey = Cosmos_cryptoPubKey_InterfaceDecoder(reader);
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
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unbondingHeight = reader.int64();
                    break;
                case 9:
                    message.unbondingTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.commission = Commission.decode(reader, reader.uint32());
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
            operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
            consensusPubkey: isSet(object.consensusPubkey) ? Any.fromJSON(object.consensusPubkey) : undefined,
            jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
            status: isSet(object.status) ? bondStatusFromJSON(object.status) : -1,
            tokens: isSet(object.tokens) ? String(object.tokens) : "",
            delegatorShares: isSet(object.delegatorShares) ? String(object.delegatorShares) : "",
            description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
            unbondingHeight: isSet(object.unbondingHeight) ? Long.fromValue(object.unbondingHeight) : Long.ZERO,
            unbondingTime: isSet(object.unbondingTime) ? fromJsonTimestamp(object.unbondingTime) : undefined,
            commission: isSet(object.commission) ? Commission.fromJSON(object.commission) : undefined,
            minSelfDelegation: isSet(object.minSelfDelegation) ? String(object.minSelfDelegation) : "",
            unbondingOnHoldRefCount: isSet(object.unbondingOnHoldRefCount) ? Long.fromValue(object.unbondingOnHoldRefCount) : Long.ZERO,
            unbondingIds: Array.isArray(object?.unbondingIds) ? object.unbondingIds.map((e) => Long.fromValue(e)) : [],
            validatorBondShares: isSet(object.validatorBondShares) ? String(object.validatorBondShares) : "",
            liquidShares: isSet(object.liquidShares) ? String(object.liquidShares) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
        message.consensusPubkey !== undefined && (obj.consensusPubkey = message.consensusPubkey ? Any.toJSON(message.consensusPubkey) : undefined);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
        message.tokens !== undefined && (obj.tokens = message.tokens);
        message.delegatorShares !== undefined && (obj.delegatorShares = message.delegatorShares);
        message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
        message.unbondingHeight !== undefined && (obj.unbondingHeight = (message.unbondingHeight || Long.ZERO).toString());
        message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime.toISOString());
        message.commission !== undefined && (obj.commission = message.commission ? Commission.toJSON(message.commission) : undefined);
        message.minSelfDelegation !== undefined && (obj.minSelfDelegation = message.minSelfDelegation);
        message.unbondingOnHoldRefCount !== undefined && (obj.unbondingOnHoldRefCount = (message.unbondingOnHoldRefCount || Long.ZERO).toString());
        if (message.unbondingIds) {
            obj.unbondingIds = message.unbondingIds.map(e => (e || Long.UZERO).toString());
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
        message.consensusPubkey = object.consensusPubkey !== undefined && object.consensusPubkey !== null ? Any.fromPartial(object.consensusPubkey) : undefined;
        message.jailed = object.jailed ?? false;
        message.status = object.status ?? 0;
        message.tokens = object.tokens ?? "";
        message.delegatorShares = object.delegatorShares ?? "";
        message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
        message.unbondingHeight = object.unbondingHeight !== undefined && object.unbondingHeight !== null ? Long.fromValue(object.unbondingHeight) : Long.ZERO;
        message.unbondingTime = object.unbondingTime ?? undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
        message.minSelfDelegation = object.minSelfDelegation ?? "";
        message.unbondingOnHoldRefCount = object.unbondingOnHoldRefCount !== undefined && object.unbondingOnHoldRefCount !== null ? Long.fromValue(object.unbondingOnHoldRefCount) : Long.ZERO;
        message.unbondingIds = object.unbondingIds?.map(e => Long.fromValue(e)) || [];
        message.validatorBondShares = object.validatorBondShares ?? "";
        message.liquidShares = object.liquidShares ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            operatorAddress: object.operator_address,
            consensusPubkey: encodeBech32Pubkey({
                type: "tendermint/PubKeySecp256k1",
                value: toBase64(object.consensus_pubkey.value)
            }, "cosmos"),
            jailed: object.jailed,
            status: isSet(object.status) ? bondStatusFromJSON(object.status) : -1,
            tokens: object.tokens,
            delegatorShares: object.delegator_shares,
            description: object?.description ? Description.fromAmino(object.description) : undefined,
            unbondingHeight: Long.fromString(object.unbonding_height),
            unbondingTime: object.unbonding_time,
            commission: object?.commission ? Commission.fromAmino(object.commission) : undefined,
            minSelfDelegation: object.min_self_delegation,
            unbondingOnHoldRefCount: Long.fromString(object.unbonding_on_hold_ref_count),
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
            value: fromBase64(decodeBech32Pubkey(message.consensusPubkey).value)
        } : undefined;
        obj.jailed = message.jailed;
        obj.status = message.status;
        obj.tokens = message.tokens;
        obj.delegator_shares = message.delegatorShares;
        obj.description = message.description ? Description.toAmino(message.description) : undefined;
        obj.unbonding_height = message.unbondingHeight ? message.unbondingHeight.toString() : undefined;
        obj.unbonding_time = message.unbondingTime;
        obj.commission = message.commission ? Commission.toAmino(message.commission) : undefined;
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
        return Validator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Validator",
            value: Validator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Validator.decode(message.value);
    },
    toProto(message) {
        return Validator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.lsmstaking.v1beta1.Validator",
            value: Validator.encode(message).finish()
        };
    }
};
function createBaseQueryValidatorsResponse() {
    return {
        validators: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryValidatorsResponse = {
    typeUrl: "/cosmos.lsmstaking.v1beta1.QueryValidatorsResponse",
    aminoType: "cosmos-sdk/QueryValidatorsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validators) {
            Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.validators.push(Validator.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorsResponse();
        message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            validators: Array.isArray(object?.validators) ? object.validators.map((e) => Validator.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryValidatorsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryValidatorsResponse",
            value: QueryValidatorsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryValidatorsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryValidatorsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.lsmstaking.v1beta1.QueryValidatorsResponse",
            value: QueryValidatorsResponse.encode(message).finish()
        };
    }
};
export const Cosmos_cryptoPubKey_InterfaceDecoder = (input) => {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
export const Cosmos_cryptoPubKey_FromAmino = (content) => {
    return encodeBech32Pubkey({
        type: "tendermint/PubKeySecp256k1",
        value: toBase64(content.value)
    }, "cosmos");
};
export const Cosmos_cryptoPubKey_ToAmino = (content) => {
    return {
        typeUrl: "/cosmos.crypto.secp256k1.PubKey",
        value: fromBase64(decodeBech32Pubkey(content).value)
    };
};
//# sourceMappingURL=validator.js.map