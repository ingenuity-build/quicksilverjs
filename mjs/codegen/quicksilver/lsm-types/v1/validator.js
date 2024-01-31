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
        operator_address: "",
        consensus_pubkey: Any.fromPartial({}),
        jailed: false,
        status: 0,
        tokens: "",
        delegator_shares: "",
        description: Description.fromPartial({}),
        unbonding_height: Long.ZERO,
        unbonding_time: new Date(),
        commission: Commission.fromPartial({}),
        min_self_delegation: "",
        unbonding_on_hold_ref_count: Long.ZERO,
        unbonding_ids: [],
        validator_bond_shares: "",
        liquid_shares: ""
    };
}
export const Validator = {
    typeUrl: "/cosmos.lsmstaking.v1beta1.Validator",
    aminoType: "cosmos-sdk/Validator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.operator_address !== "") {
            writer.uint32(10).string(message.operator_address);
        }
        if (message.consensus_pubkey !== undefined) {
            Any.encode(message.consensus_pubkey, writer.uint32(18).fork()).ldelim();
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
        if (message.delegator_shares !== "") {
            writer.uint32(50).string(message.delegator_shares);
        }
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (!message.unbonding_height.isZero()) {
            writer.uint32(64).int64(message.unbonding_height);
        }
        if (message.unbonding_time !== undefined) {
            Timestamp.encode(toTimestamp(message.unbonding_time), writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
        }
        if (message.min_self_delegation !== "") {
            writer.uint32(90).string(message.min_self_delegation);
        }
        if (!message.unbonding_on_hold_ref_count.isZero()) {
            writer.uint32(96).int64(message.unbonding_on_hold_ref_count);
        }
        writer.uint32(106).fork();
        for (const v of message.unbonding_ids) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.validator_bond_shares !== "") {
            writer.uint32(114).string(message.validator_bond_shares);
        }
        if (message.liquid_shares !== "") {
            writer.uint32(122).string(message.liquid_shares);
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
                    message.operator_address = reader.string();
                    break;
                case 2:
                    message.consensus_pubkey = Cosmos_cryptoPubKey_InterfaceDecoder(reader);
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
                    message.delegator_shares = reader.string();
                    break;
                case 7:
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unbonding_height = reader.int64();
                    break;
                case 9:
                    message.unbonding_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.commission = Commission.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.min_self_delegation = reader.string();
                    break;
                case 12:
                    message.unbonding_on_hold_ref_count = reader.int64();
                    break;
                case 13:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.unbonding_ids.push(reader.uint64());
                        }
                    }
                    else {
                        message.unbonding_ids.push(reader.uint64());
                    }
                    break;
                case 14:
                    message.validator_bond_shares = reader.string();
                    break;
                case 15:
                    message.liquid_shares = reader.string();
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
            operator_address: isSet(object.operator_address) ? String(object.operator_address) : "",
            consensus_pubkey: isSet(object.consensus_pubkey) ? Any.fromJSON(object.consensus_pubkey) : undefined,
            jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
            status: isSet(object.status) ? bondStatusFromJSON(object.status) : -1,
            tokens: isSet(object.tokens) ? String(object.tokens) : "",
            delegator_shares: isSet(object.delegator_shares) ? String(object.delegator_shares) : "",
            description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
            unbonding_height: isSet(object.unbonding_height) ? Long.fromValue(object.unbonding_height) : Long.ZERO,
            unbonding_time: isSet(object.unbonding_time) ? fromJsonTimestamp(object.unbonding_time) : undefined,
            commission: isSet(object.commission) ? Commission.fromJSON(object.commission) : undefined,
            min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : "",
            unbonding_on_hold_ref_count: isSet(object.unbonding_on_hold_ref_count) ? Long.fromValue(object.unbonding_on_hold_ref_count) : Long.ZERO,
            unbonding_ids: Array.isArray(object?.unbonding_ids) ? object.unbonding_ids.map((e) => Long.fromValue(e)) : [],
            validator_bond_shares: isSet(object.validator_bond_shares) ? String(object.validator_bond_shares) : "",
            liquid_shares: isSet(object.liquid_shares) ? String(object.liquid_shares) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.operator_address !== undefined && (obj.operator_address = message.operator_address);
        message.consensus_pubkey !== undefined && (obj.consensus_pubkey = message.consensus_pubkey ? Any.toJSON(message.consensus_pubkey) : undefined);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
        message.tokens !== undefined && (obj.tokens = message.tokens);
        message.delegator_shares !== undefined && (obj.delegator_shares = message.delegator_shares);
        message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
        message.unbonding_height !== undefined && (obj.unbonding_height = (message.unbonding_height || Long.ZERO).toString());
        message.unbonding_time !== undefined && (obj.unbonding_time = message.unbonding_time.toISOString());
        message.commission !== undefined && (obj.commission = message.commission ? Commission.toJSON(message.commission) : undefined);
        message.min_self_delegation !== undefined && (obj.min_self_delegation = message.min_self_delegation);
        message.unbonding_on_hold_ref_count !== undefined && (obj.unbonding_on_hold_ref_count = (message.unbonding_on_hold_ref_count || Long.ZERO).toString());
        if (message.unbonding_ids) {
            obj.unbonding_ids = message.unbonding_ids.map(e => (e || Long.UZERO).toString());
        }
        else {
            obj.unbonding_ids = [];
        }
        message.validator_bond_shares !== undefined && (obj.validator_bond_shares = message.validator_bond_shares);
        message.liquid_shares !== undefined && (obj.liquid_shares = message.liquid_shares);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseValidator();
        message.operator_address = object.operator_address ?? "";
        message.consensus_pubkey = object.consensus_pubkey !== undefined && object.consensus_pubkey !== null ? Any.fromPartial(object.consensus_pubkey) : undefined;
        message.jailed = object.jailed ?? false;
        message.status = object.status ?? 0;
        message.tokens = object.tokens ?? "";
        message.delegator_shares = object.delegator_shares ?? "";
        message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
        message.unbonding_height = object.unbonding_height !== undefined && object.unbonding_height !== null ? Long.fromValue(object.unbonding_height) : Long.ZERO;
        message.unbonding_time = object.unbonding_time ?? undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? Commission.fromPartial(object.commission) : undefined;
        message.min_self_delegation = object.min_self_delegation ?? "";
        message.unbonding_on_hold_ref_count = object.unbonding_on_hold_ref_count !== undefined && object.unbonding_on_hold_ref_count !== null ? Long.fromValue(object.unbonding_on_hold_ref_count) : Long.ZERO;
        message.unbonding_ids = object.unbonding_ids?.map(e => Long.fromValue(e)) || [];
        message.validator_bond_shares = object.validator_bond_shares ?? "";
        message.liquid_shares = object.liquid_shares ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            operator_address: object.operator_address,
            consensus_pubkey: encodeBech32Pubkey({
                type: "tendermint/PubKeySecp256k1",
                value: toBase64(object.consensus_pubkey.value)
            }, "cosmos"),
            jailed: object.jailed,
            status: isSet(object.status) ? bondStatusFromJSON(object.status) : -1,
            tokens: object.tokens,
            delegator_shares: object.delegator_shares,
            description: object?.description ? Description.fromAmino(object.description) : undefined,
            unbonding_height: Long.fromString(object.unbonding_height),
            unbonding_time: object.unbonding_time,
            commission: object?.commission ? Commission.fromAmino(object.commission) : undefined,
            min_self_delegation: object.min_self_delegation,
            unbonding_on_hold_ref_count: Long.fromString(object.unbonding_on_hold_ref_count),
            unbonding_ids: Array.isArray(object?.unbonding_ids) ? object.unbonding_ids.map((e) => e) : [],
            validator_bond_shares: object.validator_bond_shares,
            liquid_shares: object.liquid_shares
        };
    },
    toAmino(message) {
        const obj = {};
        obj.operator_address = message.operator_address;
        obj.consensus_pubkey = message.consensus_pubkey ? {
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: fromBase64(decodeBech32Pubkey(message.consensus_pubkey).value)
        } : undefined;
        obj.jailed = message.jailed;
        obj.status = message.status;
        obj.tokens = message.tokens;
        obj.delegator_shares = message.delegator_shares;
        obj.description = message.description ? Description.toAmino(message.description) : undefined;
        obj.unbonding_height = message.unbonding_height ? message.unbonding_height.toString() : undefined;
        obj.unbonding_time = message.unbonding_time;
        obj.commission = message.commission ? Commission.toAmino(message.commission) : undefined;
        obj.min_self_delegation = message.min_self_delegation;
        obj.unbonding_on_hold_ref_count = message.unbonding_on_hold_ref_count ? message.unbonding_on_hold_ref_count.toString() : undefined;
        if (message.unbonding_ids) {
            obj.unbonding_ids = message.unbonding_ids.map(e => e);
        }
        else {
            obj.unbonding_ids = [];
        }
        obj.validator_bond_shares = message.validator_bond_shares;
        obj.liquid_shares = message.liquid_shares;
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