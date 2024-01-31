import { DecCoin, Coin } from "../../../cosmos/base/v1beta1/coin";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, isSet, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * TokenizeShareLockStatus indicates whether the address is able to tokenize
 * shares
 */
export var TokenizeShareLockStatus;
(function (TokenizeShareLockStatus) {
    /** TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED - UNSPECIFIED defines an empty tokenize share lock status */
    TokenizeShareLockStatus[TokenizeShareLockStatus["TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED"] = 0] = "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED";
    /** TOKENIZE_SHARE_LOCK_STATUS_LOCKED - LOCKED indicates the account is locked and cannot tokenize shares */
    TokenizeShareLockStatus[TokenizeShareLockStatus["TOKENIZE_SHARE_LOCK_STATUS_LOCKED"] = 1] = "TOKENIZE_SHARE_LOCK_STATUS_LOCKED";
    /** TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED - UNLOCKED indicates the account is unlocked and can tokenize shares */
    TokenizeShareLockStatus[TokenizeShareLockStatus["TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED"] = 2] = "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED";
    /**
     * TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING - LOCK_EXPIRING indicates the account is unable to tokenize shares, but
     * will be able to tokenize shortly (after 1 unbonding period)
     */
    TokenizeShareLockStatus[TokenizeShareLockStatus["TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING"] = 3] = "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING";
    TokenizeShareLockStatus[TokenizeShareLockStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(TokenizeShareLockStatus || (TokenizeShareLockStatus = {}));
export const TokenizeShareLockStatusSDKType = TokenizeShareLockStatus;
export const TokenizeShareLockStatusAmino = TokenizeShareLockStatus;
export function tokenizeShareLockStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED":
            return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED;
        case 1:
        case "TOKENIZE_SHARE_LOCK_STATUS_LOCKED":
            return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCKED;
        case 2:
        case "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED":
            return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED;
        case 3:
        case "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING":
            return TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return TokenizeShareLockStatus.UNRECOGNIZED;
    }
}
export function tokenizeShareLockStatusToJSON(object) {
    switch (object) {
        case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED:
            return "TOKENIZE_SHARE_LOCK_STATUS_UNSPECIFIED";
        case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCKED:
            return "TOKENIZE_SHARE_LOCK_STATUS_LOCKED";
        case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED:
            return "TOKENIZE_SHARE_LOCK_STATUS_UNLOCKED";
        case TokenizeShareLockStatus.TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING:
            return "TOKENIZE_SHARE_LOCK_STATUS_LOCK_EXPIRING";
        case TokenizeShareLockStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseTokenizeShareRecordReward() {
    return {
        record_id: Long.UZERO,
        reward: []
    };
}
export const TokenizeShareRecordReward = {
    typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecordReward",
    aminoType: "cosmos-sdk/TokenizeShareRecordReward",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.record_id.isZero()) {
            writer.uint32(8).uint64(message.record_id);
        }
        for (const v of message.reward) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenizeShareRecordReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.record_id = reader.uint64();
                    break;
                case 2:
                    message.reward.push(DecCoin.decode(reader, reader.uint32()));
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
            record_id: isSet(object.record_id) ? Long.fromValue(object.record_id) : Long.UZERO,
            reward: Array.isArray(object?.reward) ? object.reward.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.record_id !== undefined && (obj.record_id = (message.record_id || Long.UZERO).toString());
        if (message.reward) {
            obj.reward = message.reward.map(e => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTokenizeShareRecordReward();
        message.record_id = object.record_id !== undefined && object.record_id !== null ? Long.fromValue(object.record_id) : Long.UZERO;
        message.reward = object.reward?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            record_id: Long.fromString(object.record_id),
            reward: Array.isArray(object?.reward) ? object.reward.map((e) => DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.record_id = message.record_id ? message.record_id.toString() : undefined;
        if (message.reward) {
            obj.reward = message.reward.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TokenizeShareRecordReward.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TokenizeShareRecordReward",
            value: TokenizeShareRecordReward.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TokenizeShareRecordReward.decode(message.value);
    },
    toProto(message) {
        return TokenizeShareRecordReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecordReward",
            value: TokenizeShareRecordReward.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordRewardRequest() {
    return {
        owner_address: ""
    };
}
export const QueryTokenizeShareRecordRewardRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardRequest",
    aminoType: "cosmos-sdk/QueryTokenizeShareRecordRewardRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner_address !== "") {
            writer.uint32(10).string(message.owner_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenizeShareRecordRewardRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner_address = reader.string();
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
            owner_address: isSet(object.owner_address) ? String(object.owner_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner_address !== undefined && (obj.owner_address = message.owner_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareRecordRewardRequest();
        message.owner_address = object.owner_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            owner_address: object.owner_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner_address = message.owner_address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenizeShareRecordRewardRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordRewardRequest",
            value: QueryTokenizeShareRecordRewardRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTokenizeShareRecordRewardRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTokenizeShareRecordRewardRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardRequest",
            value: QueryTokenizeShareRecordRewardRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordRewardResponse() {
    return {
        rewards: [],
        total: []
    };
}
export const QueryTokenizeShareRecordRewardResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardResponse",
    aminoType: "cosmos-sdk/QueryTokenizeShareRecordRewardResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            TokenizeShareRecordReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.total) {
            DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenizeShareRecordRewardResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(TokenizeShareRecordReward.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total.push(DecCoin.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => TokenizeShareRecordReward.fromJSON(e)) : [],
            total: Array.isArray(object?.total) ? object.total.map((e) => DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? TokenizeShareRecordReward.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        if (message.total) {
            obj.total = message.total.map(e => e ? DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareRecordRewardResponse();
        message.rewards = object.rewards?.map(e => TokenizeShareRecordReward.fromPartial(e)) || [];
        message.total = object.total?.map(e => DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => TokenizeShareRecordReward.fromAmino(e)) : [],
            total: Array.isArray(object?.total) ? object.total.map((e) => DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? TokenizeShareRecordReward.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        if (message.total) {
            obj.total = message.total.map(e => e ? DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenizeShareRecordRewardResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordRewardResponse",
            value: QueryTokenizeShareRecordRewardResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTokenizeShareRecordRewardResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTokenizeShareRecordRewardResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardResponse",
            value: QueryTokenizeShareRecordRewardResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawTokenizeShareRecordReward() {
    return {
        owner_address: "",
        record_id: Long.UZERO
    };
}
export const MsgWithdrawTokenizeShareRecordReward = {
    typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordReward",
    aminoType: "cosmos-sdk/MsgWithdrawTokenizeShareRecordReward",
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner_address !== "") {
            writer.uint32(10).string(message.owner_address);
        }
        if (!message.record_id.isZero()) {
            writer.uint32(16).uint64(message.record_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawTokenizeShareRecordReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner_address = reader.string();
                    break;
                case 2:
                    message.record_id = reader.uint64();
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
            owner_address: isSet(object.owner_address) ? String(object.owner_address) : "",
            record_id: isSet(object.record_id) ? Long.fromValue(object.record_id) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner_address !== undefined && (obj.owner_address = message.owner_address);
        message.record_id !== undefined && (obj.record_id = (message.record_id || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawTokenizeShareRecordReward();
        message.owner_address = object.owner_address ?? "";
        message.record_id = object.record_id !== undefined && object.record_id !== null ? Long.fromValue(object.record_id) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            owner_address: object.owner_address,
            record_id: Long.fromString(object.record_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner_address = message.owner_address;
        obj.record_id = message.record_id ? message.record_id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawTokenizeShareRecordReward.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordReward",
            value: MsgWithdrawTokenizeShareRecordReward.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgWithdrawTokenizeShareRecordReward.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawTokenizeShareRecordReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordReward",
            value: MsgWithdrawTokenizeShareRecordReward.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawTokenizeShareRecordRewardResponse() {
    return {};
}
export const MsgWithdrawTokenizeShareRecordRewardResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse",
    aminoType: "cosmos-sdk/MsgWithdrawTokenizeShareRecordRewardResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
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
        const message = createBaseMsgWithdrawTokenizeShareRecordRewardResponse();
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
        return MsgWithdrawTokenizeShareRecordRewardResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordRewardResponse",
            value: MsgWithdrawTokenizeShareRecordRewardResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgWithdrawTokenizeShareRecordRewardResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawTokenizeShareRecordRewardResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse",
            value: MsgWithdrawTokenizeShareRecordRewardResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawAllTokenizeShareRecordReward() {
    return {
        owner_address: ""
    };
}
export const MsgWithdrawAllTokenizeShareRecordReward = {
    typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
    aminoType: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordReward",
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner_address !== "") {
            writer.uint32(10).string(message.owner_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner_address = reader.string();
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
            owner_address: isSet(object.owner_address) ? String(object.owner_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner_address !== undefined && (obj.owner_address = message.owner_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
        message.owner_address = object.owner_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            owner_address: object.owner_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner_address = message.owner_address;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgWithdrawAllTokenizeShareRecordReward.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordReward",
            value: MsgWithdrawAllTokenizeShareRecordReward.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgWithdrawAllTokenizeShareRecordReward.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawAllTokenizeShareRecordReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
            value: MsgWithdrawAllTokenizeShareRecordReward.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse() {
    return {};
}
export const MsgWithdrawAllTokenizeShareRecordRewardResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse",
    aminoType: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordRewardResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
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
        const message = createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse();
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
        return MsgWithdrawAllTokenizeShareRecordRewardResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordRewardResponse",
            value: MsgWithdrawAllTokenizeShareRecordRewardResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(message.value);
    },
    toProto(message) {
        return MsgWithdrawAllTokenizeShareRecordRewardResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse",
            value: MsgWithdrawAllTokenizeShareRecordRewardResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordByIdRequest() {
    return {
        id: Long.UZERO
    };
}
export const QueryTokenizeShareRecordByIdRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest",
    aminoType: "cosmos-sdk/QueryTokenizeShareRecordByIdRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenizeShareRecordByIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
            id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareRecordByIdRequest();
        message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            id: Long.fromString(object.id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenizeShareRecordByIdRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordByIdRequest",
            value: QueryTokenizeShareRecordByIdRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTokenizeShareRecordByIdRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTokenizeShareRecordByIdRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest",
            value: QueryTokenizeShareRecordByIdRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordByIdResponse() {
    return {
        record: TokenizeShareRecord.fromPartial({})
    };
}
export const QueryTokenizeShareRecordByIdResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse",
    aminoType: "cosmos-sdk/QueryTokenizeShareRecordByIdResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.record !== undefined) {
            TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenizeShareRecordByIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.record = TokenizeShareRecord.decode(reader, reader.uint32());
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
            record: isSet(object.record) ? TokenizeShareRecord.fromJSON(object.record) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.record !== undefined && (obj.record = message.record ? TokenizeShareRecord.toJSON(message.record) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareRecordByIdResponse();
        message.record = object.record !== undefined && object.record !== null ? TokenizeShareRecord.fromPartial(object.record) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            record: object?.record ? TokenizeShareRecord.fromAmino(object.record) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.record = message.record ? TokenizeShareRecord.toAmino(message.record) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenizeShareRecordByIdResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordByIdResponse",
            value: QueryTokenizeShareRecordByIdResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTokenizeShareRecordByIdResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTokenizeShareRecordByIdResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse",
            value: QueryTokenizeShareRecordByIdResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordByDenomRequest() {
    return {
        denom: ""
    };
}
export const QueryTokenizeShareRecordByDenomRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest",
    aminoType: "cosmos-sdk/QueryTokenizeShareRecordByDenomRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.denom !== "") {
            writer.uint32(10).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenizeShareRecordByDenomRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = reader.string();
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
            denom: isSet(object.denom) ? String(object.denom) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareRecordByDenomRequest();
        message.denom = object.denom ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            denom: object.denom
        };
    },
    toAmino(message) {
        const obj = {};
        obj.denom = message.denom;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenizeShareRecordByDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordByDenomRequest",
            value: QueryTokenizeShareRecordByDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTokenizeShareRecordByDenomRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTokenizeShareRecordByDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest",
            value: QueryTokenizeShareRecordByDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordByDenomResponse() {
    return {
        record: TokenizeShareRecord.fromPartial({})
    };
}
export const QueryTokenizeShareRecordByDenomResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse",
    aminoType: "cosmos-sdk/QueryTokenizeShareRecordByDenomResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.record !== undefined) {
            TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenizeShareRecordByDenomResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.record = TokenizeShareRecord.decode(reader, reader.uint32());
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
            record: isSet(object.record) ? TokenizeShareRecord.fromJSON(object.record) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.record !== undefined && (obj.record = message.record ? TokenizeShareRecord.toJSON(message.record) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareRecordByDenomResponse();
        message.record = object.record !== undefined && object.record !== null ? TokenizeShareRecord.fromPartial(object.record) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            record: object?.record ? TokenizeShareRecord.fromAmino(object.record) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.record = message.record ? TokenizeShareRecord.toAmino(message.record) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenizeShareRecordByDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordByDenomResponse",
            value: QueryTokenizeShareRecordByDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTokenizeShareRecordByDenomResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTokenizeShareRecordByDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse",
            value: QueryTokenizeShareRecordByDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordsOwnedRequest() {
    return {
        owner: ""
    };
}
export const QueryTokenizeShareRecordsOwnedRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
    aminoType: "cosmos-sdk/QueryTokenizeShareRecordsOwnedRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareRecordsOwnedRequest();
        message.owner = object.owner ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            owner: object.owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner = message.owner;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenizeShareRecordsOwnedRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedRequest",
            value: QueryTokenizeShareRecordsOwnedRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTokenizeShareRecordsOwnedRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTokenizeShareRecordsOwnedRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
            value: QueryTokenizeShareRecordsOwnedRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordsOwnedResponse() {
    return {
        records: []
    };
}
export const QueryTokenizeShareRecordsOwnedResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
    aminoType: "cosmos-sdk/QueryTokenizeShareRecordsOwnedResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.records) {
            TokenizeShareRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.records.push(TokenizeShareRecord.decode(reader, reader.uint32()));
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
            records: Array.isArray(object?.records) ? object.records.map((e) => TokenizeShareRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.records) {
            obj.records = message.records.map(e => e ? TokenizeShareRecord.toJSON(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
        message.records = object.records?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            records: Array.isArray(object?.records) ? object.records.map((e) => TokenizeShareRecord.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.records) {
            obj.records = message.records.map(e => e ? TokenizeShareRecord.toAmino(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenizeShareRecordsOwnedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedResponse",
            value: QueryTokenizeShareRecordsOwnedResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTokenizeShareRecordsOwnedResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTokenizeShareRecordsOwnedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
            value: QueryTokenizeShareRecordsOwnedResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllTokenizeShareRecordsRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryAllTokenizeShareRecordsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest",
    aminoType: "cosmos-sdk/QueryAllTokenizeShareRecordsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllTokenizeShareRecordsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllTokenizeShareRecordsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllTokenizeShareRecordsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllTokenizeShareRecordsRequest",
            value: QueryAllTokenizeShareRecordsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllTokenizeShareRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryAllTokenizeShareRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest",
            value: QueryAllTokenizeShareRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllTokenizeShareRecordsResponse() {
    return {
        records: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryAllTokenizeShareRecordsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse",
    aminoType: "cosmos-sdk/QueryAllTokenizeShareRecordsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.records) {
            TokenizeShareRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllTokenizeShareRecordsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.records.push(TokenizeShareRecord.decode(reader, reader.uint32()));
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
            records: Array.isArray(object?.records) ? object.records.map((e) => TokenizeShareRecord.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.records) {
            obj.records = message.records.map(e => e ? TokenizeShareRecord.toJSON(e) : undefined);
        }
        else {
            obj.records = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllTokenizeShareRecordsResponse();
        message.records = object.records?.map(e => TokenizeShareRecord.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            records: Array.isArray(object?.records) ? object.records.map((e) => TokenizeShareRecord.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.records) {
            obj.records = message.records.map(e => e ? TokenizeShareRecord.toAmino(e) : undefined);
        }
        else {
            obj.records = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryAllTokenizeShareRecordsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllTokenizeShareRecordsResponse",
            value: QueryAllTokenizeShareRecordsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryAllTokenizeShareRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryAllTokenizeShareRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse",
            value: QueryAllTokenizeShareRecordsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastTokenizeShareRecordIdRequest() {
    return {};
}
export const QueryLastTokenizeShareRecordIdRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest",
    aminoType: "cosmos-sdk/QueryLastTokenizeShareRecordIdRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastTokenizeShareRecordIdRequest();
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
        const message = createBaseQueryLastTokenizeShareRecordIdRequest();
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
        return QueryLastTokenizeShareRecordIdRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryLastTokenizeShareRecordIdRequest",
            value: QueryLastTokenizeShareRecordIdRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryLastTokenizeShareRecordIdRequest.decode(message.value);
    },
    toProto(message) {
        return QueryLastTokenizeShareRecordIdRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest",
            value: QueryLastTokenizeShareRecordIdRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastTokenizeShareRecordIdResponse() {
    return {
        id: Long.UZERO
    };
}
export const QueryLastTokenizeShareRecordIdResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse",
    aminoType: "cosmos-sdk/QueryLastTokenizeShareRecordIdResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryLastTokenizeShareRecordIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
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
            id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLastTokenizeShareRecordIdResponse();
        message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            id: Long.fromString(object.id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryLastTokenizeShareRecordIdResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryLastTokenizeShareRecordIdResponse",
            value: QueryLastTokenizeShareRecordIdResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryLastTokenizeShareRecordIdResponse.decode(message.value);
    },
    toProto(message) {
        return QueryLastTokenizeShareRecordIdResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse",
            value: QueryLastTokenizeShareRecordIdResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalTokenizeSharedAssetsRequest() {
    return {};
}
export const QueryTotalTokenizeSharedAssetsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
    aminoType: "cosmos-sdk/QueryTotalTokenizeSharedAssetsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
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
        const message = createBaseQueryTotalTokenizeSharedAssetsRequest();
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
        return QueryTotalTokenizeSharedAssetsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsRequest",
            value: QueryTotalTokenizeSharedAssetsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalTokenizeSharedAssetsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryTotalTokenizeSharedAssetsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
            value: QueryTotalTokenizeSharedAssetsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalTokenizeSharedAssetsResponse() {
    return {
        value: Coin.fromPartial({})
    };
}
export const QueryTotalTokenizeSharedAssetsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
    aminoType: "cosmos-sdk/QueryTotalTokenizeSharedAssetsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
        message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            value: object?.value ? Coin.fromAmino(object.value) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value ? Coin.toAmino(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalTokenizeSharedAssetsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsResponse",
            value: QueryTotalTokenizeSharedAssetsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalTokenizeSharedAssetsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalTokenizeSharedAssetsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
            value: QueryTotalTokenizeSharedAssetsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalLiquidStaked() {
    return {};
}
export const QueryTotalLiquidStaked = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStaked",
    aminoType: "cosmos-sdk/QueryTotalLiquidStaked",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalLiquidStaked();
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
        const message = createBaseQueryTotalLiquidStaked();
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
        return QueryTotalLiquidStaked.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalLiquidStaked",
            value: QueryTotalLiquidStaked.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalLiquidStaked.decode(message.value);
    },
    toProto(message) {
        return QueryTotalLiquidStaked.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStaked",
            value: QueryTotalLiquidStaked.encode(message).finish()
        };
    }
};
function createBaseQueryTotalLiquidStakedResponse() {
    return {
        tokens: ""
    };
}
export const QueryTotalLiquidStakedResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse",
    aminoType: "cosmos-sdk/QueryTotalLiquidStakedResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tokens !== "") {
            writer.uint32(10).string(message.tokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalLiquidStakedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokens = reader.string();
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
            tokens: isSet(object.tokens) ? String(object.tokens) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.tokens !== undefined && (obj.tokens = message.tokens);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalLiquidStakedResponse();
        message.tokens = object.tokens ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            tokens: object.tokens
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tokens = message.tokens;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTotalLiquidStakedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalLiquidStakedResponse",
            value: QueryTotalLiquidStakedResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTotalLiquidStakedResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTotalLiquidStakedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse",
            value: QueryTotalLiquidStakedResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareLockInfo() {
    return {
        address: ""
    };
}
export const QueryTokenizeShareLockInfo = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfo",
    aminoType: "cosmos-sdk/QueryTokenizeShareLockInfo",
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenizeShareLockInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareLockInfo();
        message.address = object.address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            address: object.address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenizeShareLockInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareLockInfo",
            value: QueryTokenizeShareLockInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTokenizeShareLockInfo.decode(message.value);
    },
    toProto(message) {
        return QueryTokenizeShareLockInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfo",
            value: QueryTokenizeShareLockInfo.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareLockInfoResponse() {
    return {
        status: "",
        expiration_time: ""
    };
}
export const QueryTokenizeShareLockInfoResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse",
    aminoType: "cosmos-sdk/QueryTokenizeShareLockInfoResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        if (message.expiration_time !== "") {
            writer.uint32(18).string(message.expiration_time);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTokenizeShareLockInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
                    break;
                case 2:
                    message.expiration_time = reader.string();
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
            status: isSet(object.status) ? String(object.status) : "",
            expiration_time: isSet(object.expiration_time) ? String(object.expiration_time) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.expiration_time !== undefined && (obj.expiration_time = message.expiration_time);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareLockInfoResponse();
        message.status = object.status ?? "";
        message.expiration_time = object.expiration_time ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            status: object.status,
            expiration_time: object.expiration_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        obj.expiration_time = message.expiration_time;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryTokenizeShareLockInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareLockInfoResponse",
            value: QueryTokenizeShareLockInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryTokenizeShareLockInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryTokenizeShareLockInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse",
            value: QueryTokenizeShareLockInfoResponse.encode(message).finish()
        };
    }
};
function createBaseTokenizeShareRecord() {
    return {
        id: Long.UZERO,
        owner: "",
        module_account: "",
        validator: ""
    };
}
export const TokenizeShareRecord = {
    typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecord",
    aminoType: "cosmos-sdk/TokenizeShareRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.module_account !== "") {
            writer.uint32(26).string(message.module_account);
        }
        if (message.validator !== "") {
            writer.uint32(34).string(message.validator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTokenizeShareRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                case 3:
                    message.module_account = reader.string();
                    break;
                case 4:
                    message.validator = reader.string();
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
            id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
            owner: isSet(object.owner) ? String(object.owner) : "",
            module_account: isSet(object.module_account) ? String(object.module_account) : "",
            validator: isSet(object.validator) ? String(object.validator) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.module_account !== undefined && (obj.module_account = message.module_account);
        message.validator !== undefined && (obj.validator = message.validator);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTokenizeShareRecord();
        message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
        message.owner = object.owner ?? "";
        message.module_account = object.module_account ?? "";
        message.validator = object.validator ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: Long.fromString(object.id),
            owner: object.owner,
            module_account: object.module_account,
            validator: object.validator
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        obj.owner = message.owner;
        obj.module_account = message.module_account;
        obj.validator = message.validator;
        return obj;
    },
    fromAminoMsg(object) {
        return TokenizeShareRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TokenizeShareRecord",
            value: TokenizeShareRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TokenizeShareRecord.decode(message.value);
    },
    toProto(message) {
        return TokenizeShareRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecord",
            value: TokenizeShareRecord.encode(message).finish()
        };
    }
};
function createBasePendingTokenizeShareAuthorizations() {
    return {
        addresses: []
    };
}
export const PendingTokenizeShareAuthorizations = {
    typeUrl: "/cosmos.staking.v1beta1.PendingTokenizeShareAuthorizations",
    aminoType: "cosmos-sdk/PendingTokenizeShareAuthorizations",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePendingTokenizeShareAuthorizations();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(reader.string());
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
            addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBasePendingTokenizeShareAuthorizations();
        message.addresses = object.addresses?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            addresses: Array.isArray(object?.addresses) ? object.addresses.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map(e => e);
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return PendingTokenizeShareAuthorizations.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PendingTokenizeShareAuthorizations",
            value: PendingTokenizeShareAuthorizations.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PendingTokenizeShareAuthorizations.decode(message.value);
    },
    toProto(message) {
        return PendingTokenizeShareAuthorizations.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.PendingTokenizeShareAuthorizations",
            value: PendingTokenizeShareAuthorizations.encode(message).finish()
        };
    }
};
function createBaseMsgUnbondValidator() {
    return {
        validator_address: ""
    };
}
export const MsgUnbondValidator = {
    typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
    aminoType: "cosmos-sdk/MsgUnbondValidator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnbondValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnbondValidator();
        message.validator_address = object.validator_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validator_address: object.validator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUnbondValidator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUnbondValidator",
            value: MsgUnbondValidator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUnbondValidator.decode(message.value);
    },
    toProto(message) {
        return MsgUnbondValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
            value: MsgUnbondValidator.encode(message).finish()
        };
    }
};
function createBaseMsgUnbondValidatorResponse() {
    return {};
}
export const MsgUnbondValidatorResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse",
    aminoType: "cosmos-sdk/MsgUnbondValidatorResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnbondValidatorResponse();
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
        const message = createBaseMsgUnbondValidatorResponse();
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
        return MsgUnbondValidatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUnbondValidatorResponse",
            value: MsgUnbondValidatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUnbondValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUnbondValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse",
            value: MsgUnbondValidatorResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTokenizeShares() {
    return {
        delegator_address: "",
        validator_address: "",
        amount: Coin.fromPartial({}),
        tokenized_share_owner: ""
    };
}
export const MsgTokenizeShares = {
    typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
    aminoType: "cosmos-sdk/MsgTokenizeShares",
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
        if (message.tokenized_share_owner !== "") {
            writer.uint32(34).string(message.tokenized_share_owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTokenizeShares();
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
                case 4:
                    message.tokenized_share_owner = reader.string();
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
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
            tokenized_share_owner: isSet(object.tokenized_share_owner) ? String(object.tokenized_share_owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        message.tokenized_share_owner !== undefined && (obj.tokenized_share_owner = message.tokenized_share_owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTokenizeShares();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        message.tokenized_share_owner = object.tokenized_share_owner ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_address: object.validator_address,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
            tokenized_share_owner: object.tokenized_share_owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        obj.tokenized_share_owner = message.tokenized_share_owner;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTokenizeShares.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTokenizeShares",
            value: MsgTokenizeShares.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTokenizeShares.decode(message.value);
    },
    toProto(message) {
        return MsgTokenizeShares.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
            value: MsgTokenizeShares.encode(message).finish()
        };
    }
};
function createBaseMsgTokenizeSharesResponse() {
    return {
        amount: Coin.fromPartial({})
    };
}
export const MsgTokenizeSharesResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse",
    aminoType: "cosmos-sdk/MsgTokenizeSharesResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTokenizeSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTokenizeSharesResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTokenizeSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTokenizeSharesResponse",
            value: MsgTokenizeSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTokenizeSharesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTokenizeSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse",
            value: MsgTokenizeSharesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRedeemTokensForShares() {
    return {
        delegator_address: "",
        amount: Coin.fromPartial({})
    };
}
export const MsgRedeemTokensForShares = {
    typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
    aminoType: "cosmos-sdk/MsgRedeemTokensForShares",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRedeemTokensForShares();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
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
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRedeemTokensForShares();
        message.delegator_address = object.delegator_address ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRedeemTokensForShares.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRedeemTokensForShares",
            value: MsgRedeemTokensForShares.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRedeemTokensForShares.decode(message.value);
    },
    toProto(message) {
        return MsgRedeemTokensForShares.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
            value: MsgRedeemTokensForShares.encode(message).finish()
        };
    }
};
function createBaseMsgRedeemTokensForSharesResponse() {
    return {
        amount: Coin.fromPartial({})
    };
}
export const MsgRedeemTokensForSharesResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse",
    aminoType: "cosmos-sdk/MsgRedeemTokensForSharesResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== undefined) {
            Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRedeemTokensForSharesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRedeemTokensForSharesResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRedeemTokensForSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRedeemTokensForSharesResponse",
            value: MsgRedeemTokensForSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRedeemTokensForSharesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRedeemTokensForSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse",
            value: MsgRedeemTokensForSharesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTransferTokenizeShareRecord() {
    return {
        tokenize_share_record_id: Long.UZERO,
        sender: "",
        new_owner: ""
    };
}
export const MsgTransferTokenizeShareRecord = {
    typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
    aminoType: "cosmos-sdk/MsgTransferTokenizeShareRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.tokenize_share_record_id.isZero()) {
            writer.uint32(8).uint64(message.tokenize_share_record_id);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.new_owner !== "") {
            writer.uint32(26).string(message.new_owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferTokenizeShareRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tokenize_share_record_id = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.new_owner = reader.string();
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
            tokenize_share_record_id: isSet(object.tokenize_share_record_id) ? Long.fromValue(object.tokenize_share_record_id) : Long.UZERO,
            sender: isSet(object.sender) ? String(object.sender) : "",
            new_owner: isSet(object.new_owner) ? String(object.new_owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.tokenize_share_record_id !== undefined && (obj.tokenize_share_record_id = (message.tokenize_share_record_id || Long.UZERO).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        message.new_owner !== undefined && (obj.new_owner = message.new_owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTransferTokenizeShareRecord();
        message.tokenize_share_record_id = object.tokenize_share_record_id !== undefined && object.tokenize_share_record_id !== null ? Long.fromValue(object.tokenize_share_record_id) : Long.UZERO;
        message.sender = object.sender ?? "";
        message.new_owner = object.new_owner ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            tokenize_share_record_id: Long.fromString(object.tokenize_share_record_id),
            sender: object.sender,
            new_owner: object.new_owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tokenize_share_record_id = message.tokenize_share_record_id ? message.tokenize_share_record_id.toString() : undefined;
        obj.sender = message.sender;
        obj.new_owner = message.new_owner;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransferTokenizeShareRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransferTokenizeShareRecord",
            value: MsgTransferTokenizeShareRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTransferTokenizeShareRecord.decode(message.value);
    },
    toProto(message) {
        return MsgTransferTokenizeShareRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
            value: MsgTransferTokenizeShareRecord.encode(message).finish()
        };
    }
};
function createBaseMsgTransferTokenizeShareRecordResponse() {
    return {};
}
export const MsgTransferTokenizeShareRecordResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse",
    aminoType: "cosmos-sdk/MsgTransferTokenizeShareRecordResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferTokenizeShareRecordResponse();
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
        const message = createBaseMsgTransferTokenizeShareRecordResponse();
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
        return MsgTransferTokenizeShareRecordResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransferTokenizeShareRecordResponse",
            value: MsgTransferTokenizeShareRecordResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTransferTokenizeShareRecordResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTransferTokenizeShareRecordResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse",
            value: MsgTransferTokenizeShareRecordResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDisableTokenizeShares() {
    return {
        delegator_address: ""
    };
}
export const MsgDisableTokenizeShares = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
    aminoType: "cosmos-sdk/MsgDisableTokenizeShares",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDisableTokenizeShares();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDisableTokenizeShares();
        message.delegator_address = object.delegator_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDisableTokenizeShares.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDisableTokenizeShares",
            value: MsgDisableTokenizeShares.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDisableTokenizeShares.decode(message.value);
    },
    toProto(message) {
        return MsgDisableTokenizeShares.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
            value: MsgDisableTokenizeShares.encode(message).finish()
        };
    }
};
function createBaseMsgDisableTokenizeSharesResponse() {
    return {};
}
export const MsgDisableTokenizeSharesResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse",
    aminoType: "cosmos-sdk/MsgDisableTokenizeSharesResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDisableTokenizeSharesResponse();
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
        const message = createBaseMsgDisableTokenizeSharesResponse();
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
        return MsgDisableTokenizeSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDisableTokenizeSharesResponse",
            value: MsgDisableTokenizeSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDisableTokenizeSharesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDisableTokenizeSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse",
            value: MsgDisableTokenizeSharesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgEnableTokenizeShares() {
    return {
        delegator_address: ""
    };
}
export const MsgEnableTokenizeShares = {
    typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
    aminoType: "cosmos-sdk/MsgEnableTokenizeShares",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEnableTokenizeShares();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
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
            delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgEnableTokenizeShares();
        message.delegator_address = object.delegator_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgEnableTokenizeShares.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgEnableTokenizeShares",
            value: MsgEnableTokenizeShares.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgEnableTokenizeShares.decode(message.value);
    },
    toProto(message) {
        return MsgEnableTokenizeShares.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
            value: MsgEnableTokenizeShares.encode(message).finish()
        };
    }
};
function createBaseMsgEnableTokenizeSharesResponse() {
    return {
        completion_time: new Date()
    };
}
export const MsgEnableTokenizeSharesResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
    aminoType: "cosmos-sdk/MsgEnableTokenizeSharesResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.completion_time !== undefined) {
            Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEnableTokenizeSharesResponse();
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
        const message = createBaseMsgEnableTokenizeSharesResponse();
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
        return MsgEnableTokenizeSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgEnableTokenizeSharesResponse",
            value: MsgEnableTokenizeSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgEnableTokenizeSharesResponse.decode(message.value);
    },
    toProto(message) {
        return MsgEnableTokenizeSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
            value: MsgEnableTokenizeSharesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgValidatorBond() {
    return {
        delegator_address: "",
        validator_address: ""
    };
}
export const MsgValidatorBond = {
    typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
    aminoType: "cosmos-sdk/MsgValidatorBond",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValidatorBond();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
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
            validator_address: isSet(object.validator_address) ? String(object.validator_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgValidatorBond();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_address: object.validator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgValidatorBond.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgValidatorBond",
            value: MsgValidatorBond.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgValidatorBond.decode(message.value);
    },
    toProto(message) {
        return MsgValidatorBond.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
            value: MsgValidatorBond.encode(message).finish()
        };
    }
};
function createBaseMsgValidatorBondResponse() {
    return {};
}
export const MsgValidatorBondResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse",
    aminoType: "cosmos-sdk/MsgValidatorBondResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgValidatorBondResponse();
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
        const message = createBaseMsgValidatorBondResponse();
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
        return MsgValidatorBondResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgValidatorBondResponse",
            value: MsgValidatorBondResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgValidatorBondResponse.decode(message.value);
    },
    toProto(message) {
        return MsgValidatorBondResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse",
            value: MsgValidatorBondResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map