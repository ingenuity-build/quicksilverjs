import { Description, CommissionRates } from "./staking";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
import { toBase64, fromBase64 } from "@cosmjs/encoding";
import { encodeBech32Pubkey, decodeBech32Pubkey } from "@cosmjs/amino";
function createBaseMsgCreateValidator() {
    return {
        description: Description.fromPartial({}),
        commission: CommissionRates.fromPartial({}),
        min_self_delegation: "",
        delegator_address: "",
        validator_address: "",
        pubkey: Any.fromPartial({}),
        value: Coin.fromPartial({})
    };
}
export const MsgCreateValidator = {
    typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
    aminoType: "cosmos-sdk/MsgCreateValidator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
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
            Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
        }
        if (message.value !== undefined) {
            Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
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
                    message.description = Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commission = CommissionRates.decode(reader, reader.uint32());
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
                    message.pubkey = Cosmos_cryptoPubKey_InterfaceDecoder(reader);
                    break;
                case 7:
                    message.value = Coin.decode(reader, reader.uint32());
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
            description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
            commission: isSet(object.commission) ? CommissionRates.fromJSON(object.commission) : undefined,
            min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : "",
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            pubkey: isSet(object.pubkey) ? Any.fromJSON(object.pubkey) : undefined,
            value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
        message.commission !== undefined && (obj.commission = message.commission ? CommissionRates.toJSON(message.commission) : undefined);
        message.min_self_delegation !== undefined && (obj.min_self_delegation = message.min_self_delegation);
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.pubkey !== undefined && (obj.pubkey = message.pubkey ? Any.toJSON(message.pubkey) : undefined);
        message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateValidator();
        message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
        message.commission = object.commission !== undefined && object.commission !== null ? CommissionRates.fromPartial(object.commission) : undefined;
        message.min_self_delegation = object.min_self_delegation ?? "";
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.pubkey = object.pubkey !== undefined && object.pubkey !== null ? Any.fromPartial(object.pubkey) : undefined;
        message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            description: object?.description ? Description.fromAmino(object.description) : undefined,
            commission: object?.commission ? CommissionRates.fromAmino(object.commission) : undefined,
            min_self_delegation: object.min_self_delegation,
            delegator_address: object.delegator_address,
            validator_address: object.validator_address,
            pubkey: encodeBech32Pubkey({
                type: "tendermint/PubKeySecp256k1",
                value: toBase64(object.pubkey.value)
            }, "cosmos"),
            value: object?.value ? Coin.fromAmino(object.value) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.description = message.description ? Description.toAmino(message.description) : undefined;
        obj.commission = message.commission ? CommissionRates.toAmino(message.commission) : undefined;
        obj.min_self_delegation = message.min_self_delegation;
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.pubkey = message.pubkey ? {
            typeUrl: "/cosmos.crypto.secp256k1.PubKey",
            value: fromBase64(decodeBech32Pubkey(message.pubkey).value)
        } : undefined;
        obj.value = message.value ? Coin.toAmino(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgCreateValidator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateValidator",
            value: MsgCreateValidator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateValidator.decode(message.value);
    },
    toProto(message) {
        return MsgCreateValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidator",
            value: MsgCreateValidator.encode(message).finish()
        };
    }
};
function createBaseMsgCreateValidatorResponse() {
    return {};
}
export const MsgCreateValidatorResponse = {
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
        return MsgCreateValidatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateValidatorResponse",
            value: MsgCreateValidatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgCreateValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return MsgCreateValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgCreateValidatorResponse",
            value: MsgCreateValidatorResponse.encode(message).finish()
        };
    }
};
function createBaseMsgEditValidator() {
    return {
        description: Description.fromPartial({}),
        validator_address: "",
        commission_rate: "",
        min_self_delegation: ""
    };
}
export const MsgEditValidator = {
    typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
    aminoType: "cosmos-sdk/MsgEditValidator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== undefined) {
            Description.encode(message.description, writer.uint32(10).fork()).ldelim();
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
                    message.description = Description.decode(reader, reader.uint32());
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
            description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            commission_rate: isSet(object.commission_rate) ? String(object.commission_rate) : "",
            min_self_delegation: isSet(object.min_self_delegation) ? String(object.min_self_delegation) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined && (obj.description = message.description ? Description.toJSON(message.description) : undefined);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.commission_rate !== undefined && (obj.commission_rate = message.commission_rate);
        message.min_self_delegation !== undefined && (obj.min_self_delegation = message.min_self_delegation);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgEditValidator();
        message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
        message.validator_address = object.validator_address ?? "";
        message.commission_rate = object.commission_rate ?? "";
        message.min_self_delegation = object.min_self_delegation ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            description: object?.description ? Description.fromAmino(object.description) : undefined,
            validator_address: object.validator_address,
            commission_rate: object.commission_rate,
            min_self_delegation: object.min_self_delegation
        };
    },
    toAmino(message) {
        const obj = {};
        obj.description = message.description ? Description.toAmino(message.description) : undefined;
        obj.validator_address = message.validator_address;
        obj.commission_rate = message.commission_rate;
        obj.min_self_delegation = message.min_self_delegation;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgEditValidator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgEditValidator",
            value: MsgEditValidator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgEditValidator.decode(message.value);
    },
    toProto(message) {
        return MsgEditValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgEditValidator",
            value: MsgEditValidator.encode(message).finish()
        };
    }
};
function createBaseMsgEditValidatorResponse() {
    return {};
}
export const MsgEditValidatorResponse = {
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
        return MsgEditValidatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgEditValidatorResponse",
            value: MsgEditValidatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgEditValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return MsgEditValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgEditValidatorResponse",
            value: MsgEditValidatorResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDelegate() {
    return {
        delegator_address: "",
        validator_address: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgDelegate = {
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
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDelegate();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_address: object.validator_address,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDelegate",
            value: MsgDelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDelegate.decode(message.value);
    },
    toProto(message) {
        return MsgDelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegate",
            value: MsgDelegate.encode(message).finish()
        };
    }
};
function createBaseMsgDelegateResponse() {
    return {};
}
export const MsgDelegateResponse = {
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
        return MsgDelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDelegateResponse",
            value: MsgDelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDelegateResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgDelegateResponse",
            value: MsgDelegateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgBeginRedelegate() {
    return {
        delegator_address: "",
        validator_src_address: "",
        validator_dst_address: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgBeginRedelegate = {
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
            Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_src_address: isSet(object.validator_src_address) ? String(object.validator_src_address) : "",
            validator_dst_address: isSet(object.validator_dst_address) ? String(object.validator_dst_address) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_src_address !== undefined && (obj.validator_src_address = message.validator_src_address);
        message.validator_dst_address !== undefined && (obj.validator_dst_address = message.validator_dst_address);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginRedelegate();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_src_address = object.validator_src_address ?? "";
        message.validator_dst_address = object.validator_dst_address ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_src_address: object.validator_src_address,
            validator_dst_address: object.validator_dst_address,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_src_address = message.validator_src_address;
        obj.validator_dst_address = message.validator_dst_address;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgBeginRedelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgBeginRedelegate",
            value: MsgBeginRedelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBeginRedelegate.decode(message.value);
    },
    toProto(message) {
        return MsgBeginRedelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegate",
            value: MsgBeginRedelegate.encode(message).finish()
        };
    }
};
function createBaseMsgBeginRedelegateResponse() {
    return {
        completion_time: new Date()
    };
}
export const MsgBeginRedelegateResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
    aminoType: "cosmos-sdk/MsgBeginRedelegateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.completion_time !== undefined) {
            Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(10).fork()).ldelim();
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
                    message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined
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
        return MsgBeginRedelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgBeginRedelegateResponse",
            value: MsgBeginRedelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgBeginRedelegateResponse.decode(message.value);
    },
    toProto(message) {
        return MsgBeginRedelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgBeginRedelegateResponse",
            value: MsgBeginRedelegateResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUndelegate() {
    return {
        delegator_address: "",
        validator_address: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgUndelegate = {
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
            Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
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
                    message.amount = Coin.decode(reader, reader.uint32());
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUndelegate();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_address: object.validator_address,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUndelegate.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUndelegate",
            value: MsgUndelegate.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUndelegate.decode(message.value);
    },
    toProto(message) {
        return MsgUndelegate.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegate",
            value: MsgUndelegate.encode(message).finish()
        };
    }
};
function createBaseMsgUndelegateResponse() {
    return {
        completion_time: new Date()
    };
}
export const MsgUndelegateResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
    aminoType: "cosmos-sdk/MsgUndelegateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.completion_time !== undefined) {
            Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(10).fork()).ldelim();
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
                    message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined
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
        return MsgUndelegateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUndelegateResponse",
            value: MsgUndelegateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUndelegateResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUndelegateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgUndelegateResponse",
            value: MsgUndelegateResponse.encode(message).finish()
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
//# sourceMappingURL=tx.js.map