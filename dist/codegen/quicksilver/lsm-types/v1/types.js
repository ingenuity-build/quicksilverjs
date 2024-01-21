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
exports.MsgValidatorBondResponse = exports.MsgValidatorBond = exports.MsgEnableTokenizeSharesResponse = exports.MsgEnableTokenizeShares = exports.MsgDisableTokenizeSharesResponse = exports.MsgDisableTokenizeShares = exports.MsgTransferTokenizeShareRecordResponse = exports.MsgTransferTokenizeShareRecord = exports.MsgRedeemTokensForSharesResponse = exports.MsgRedeemTokensForShares = exports.MsgTokenizeSharesResponse = exports.MsgTokenizeShares = exports.MsgUnbondValidatorResponse = exports.MsgUnbondValidator = exports.PendingTokenizeShareAuthorizations = exports.TokenizeShareRecord = exports.QueryTokenizeShareLockInfoResponse = exports.QueryTokenizeShareLockInfo = exports.QueryTotalLiquidStakedResponse = exports.QueryTotalLiquidStaked = exports.QueryTotalTokenizeSharedAssetsResponse = exports.QueryTotalTokenizeSharedAssetsRequest = exports.QueryLastTokenizeShareRecordIdResponse = exports.QueryLastTokenizeShareRecordIdRequest = exports.QueryAllTokenizeShareRecordsResponse = exports.QueryAllTokenizeShareRecordsRequest = exports.QueryTokenizeShareRecordsOwnedResponse = exports.QueryTokenizeShareRecordsOwnedRequest = exports.QueryTokenizeShareRecordByDenomResponse = exports.QueryTokenizeShareRecordByDenomRequest = exports.QueryTokenizeShareRecordByIdResponse = exports.QueryTokenizeShareRecordByIdRequest = exports.MsgWithdrawAllTokenizeShareRecordRewardResponse = exports.MsgWithdrawAllTokenizeShareRecordReward = exports.MsgWithdrawTokenizeShareRecordRewardResponse = exports.MsgWithdrawTokenizeShareRecordReward = exports.QueryTokenizeShareRecordRewardResponse = exports.QueryTokenizeShareRecordRewardRequest = exports.TokenizeShareRecordReward = exports.tokenizeShareLockStatusToJSON = exports.tokenizeShareLockStatusFromJSON = exports.TokenizeShareLockStatusAmino = exports.TokenizeShareLockStatusSDKType = exports.TokenizeShareLockStatus = void 0;
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
/**
 * TokenizeShareLockStatus indicates whether the address is able to tokenize
 * shares
 */
var TokenizeShareLockStatus;
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
})(TokenizeShareLockStatus || (exports.TokenizeShareLockStatus = TokenizeShareLockStatus = {}));
exports.TokenizeShareLockStatusSDKType = TokenizeShareLockStatus;
exports.TokenizeShareLockStatusAmino = TokenizeShareLockStatus;
function tokenizeShareLockStatusFromJSON(object) {
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
exports.tokenizeShareLockStatusFromJSON = tokenizeShareLockStatusFromJSON;
function tokenizeShareLockStatusToJSON(object) {
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
exports.tokenizeShareLockStatusToJSON = tokenizeShareLockStatusToJSON;
function createBaseTokenizeShareRecordReward() {
    return {
        recordId: helpers_1.Long.UZERO,
        reward: []
    };
}
exports.TokenizeShareRecordReward = {
    typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecordReward",
    aminoType: "cosmos-sdk/TokenizeShareRecordReward",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.recordId.isZero()) {
            writer.uint32(8).uint64(message.recordId);
        }
        for (const v of message.reward) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.recordId = reader.uint64();
                    break;
                case 2:
                    message.reward.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            recordId: (0, helpers_1.isSet)(object.recordId) ? helpers_1.Long.fromValue(object.recordId) : helpers_1.Long.UZERO,
            reward: Array.isArray(object?.reward) ? object.reward.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.recordId !== undefined && (obj.recordId = (message.recordId || helpers_1.Long.UZERO).toString());
        if (message.reward) {
            obj.reward = message.reward.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTokenizeShareRecordReward();
        message.recordId = object.recordId !== undefined && object.recordId !== null ? helpers_1.Long.fromValue(object.recordId) : helpers_1.Long.UZERO;
        message.reward = object.reward?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            recordId: helpers_1.Long.fromString(object.record_id),
            reward: Array.isArray(object?.reward) ? object.reward.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.record_id = message.recordId ? message.recordId.toString() : undefined;
        if (message.reward) {
            obj.reward = message.reward.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TokenizeShareRecordReward.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TokenizeShareRecordReward",
            value: exports.TokenizeShareRecordReward.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TokenizeShareRecordReward.decode(message.value);
    },
    toProto(message) {
        return exports.TokenizeShareRecordReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecordReward",
            value: exports.TokenizeShareRecordReward.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordRewardRequest() {
    return {
        ownerAddress: ""
    };
}
exports.QueryTokenizeShareRecordRewardRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardRequest",
    aminoType: "cosmos-sdk/QueryTokenizeShareRecordRewardRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.ownerAddress !== "") {
            writer.uint32(10).string(message.ownerAddress);
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
                    message.ownerAddress = reader.string();
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
            ownerAddress: (0, helpers_1.isSet)(object.ownerAddress) ? String(object.ownerAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareRecordRewardRequest();
        message.ownerAddress = object.ownerAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            ownerAddress: object.owner_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner_address = message.ownerAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTokenizeShareRecordRewardRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordRewardRequest",
            value: exports.QueryTokenizeShareRecordRewardRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTokenizeShareRecordRewardRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTokenizeShareRecordRewardRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardRequest",
            value: exports.QueryTokenizeShareRecordRewardRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordRewardResponse() {
    return {
        rewards: [],
        total: []
    };
}
exports.QueryTokenizeShareRecordRewardResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardResponse",
    aminoType: "cosmos-sdk/QueryTokenizeShareRecordRewardResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            exports.TokenizeShareRecordReward.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.total) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.rewards.push(exports.TokenizeShareRecordReward.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.total.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => exports.TokenizeShareRecordReward.fromJSON(e)) : [],
            total: Array.isArray(object?.total) ? object.total.map((e) => coin_1.DecCoin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? exports.TokenizeShareRecordReward.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        if (message.total) {
            obj.total = message.total.map(e => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareRecordRewardResponse();
        message.rewards = object.rewards?.map(e => exports.TokenizeShareRecordReward.fromPartial(e)) || [];
        message.total = object.total?.map(e => coin_1.DecCoin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            rewards: Array.isArray(object?.rewards) ? object.rewards.map((e) => exports.TokenizeShareRecordReward.fromAmino(e)) : [],
            total: Array.isArray(object?.total) ? object.total.map((e) => coin_1.DecCoin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map(e => e ? exports.TokenizeShareRecordReward.toAmino(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        if (message.total) {
            obj.total = message.total.map(e => e ? coin_1.DecCoin.toAmino(e) : undefined);
        }
        else {
            obj.total = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTokenizeShareRecordRewardResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordRewardResponse",
            value: exports.QueryTokenizeShareRecordRewardResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTokenizeShareRecordRewardResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTokenizeShareRecordRewardResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordRewardResponse",
            value: exports.QueryTokenizeShareRecordRewardResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawTokenizeShareRecordReward() {
    return {
        ownerAddress: "",
        recordId: helpers_1.Long.UZERO
    };
}
exports.MsgWithdrawTokenizeShareRecordReward = {
    typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordReward",
    aminoType: "cosmos-sdk/MsgWithdrawTokenizeShareRecordReward",
    encode(message, writer = _m0.Writer.create()) {
        if (message.ownerAddress !== "") {
            writer.uint32(10).string(message.ownerAddress);
        }
        if (!message.recordId.isZero()) {
            writer.uint32(16).uint64(message.recordId);
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
                    message.ownerAddress = reader.string();
                    break;
                case 2:
                    message.recordId = reader.uint64();
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
            ownerAddress: (0, helpers_1.isSet)(object.ownerAddress) ? String(object.ownerAddress) : "",
            recordId: (0, helpers_1.isSet)(object.recordId) ? helpers_1.Long.fromValue(object.recordId) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
        message.recordId !== undefined && (obj.recordId = (message.recordId || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawTokenizeShareRecordReward();
        message.ownerAddress = object.ownerAddress ?? "";
        message.recordId = object.recordId !== undefined && object.recordId !== null ? helpers_1.Long.fromValue(object.recordId) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            ownerAddress: object.owner_address,
            recordId: helpers_1.Long.fromString(object.record_id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner_address = message.ownerAddress;
        obj.record_id = message.recordId ? message.recordId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawTokenizeShareRecordReward.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordReward",
            value: exports.MsgWithdrawTokenizeShareRecordReward.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawTokenizeShareRecordReward.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawTokenizeShareRecordReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordReward",
            value: exports.MsgWithdrawTokenizeShareRecordReward.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawTokenizeShareRecordRewardResponse() {
    return {};
}
exports.MsgWithdrawTokenizeShareRecordRewardResponse = {
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
        return exports.MsgWithdrawTokenizeShareRecordRewardResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawTokenizeShareRecordRewardResponse",
            value: exports.MsgWithdrawTokenizeShareRecordRewardResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawTokenizeShareRecordRewardResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawTokenizeShareRecordRewardResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawTokenizeShareRecordRewardResponse",
            value: exports.MsgWithdrawTokenizeShareRecordRewardResponse.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawAllTokenizeShareRecordReward() {
    return {
        ownerAddress: ""
    };
}
exports.MsgWithdrawAllTokenizeShareRecordReward = {
    typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
    aminoType: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordReward",
    encode(message, writer = _m0.Writer.create()) {
        if (message.ownerAddress !== "") {
            writer.uint32(10).string(message.ownerAddress);
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
                    message.ownerAddress = reader.string();
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
            ownerAddress: (0, helpers_1.isSet)(object.ownerAddress) ? String(object.ownerAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.ownerAddress !== undefined && (obj.ownerAddress = message.ownerAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgWithdrawAllTokenizeShareRecordReward();
        message.ownerAddress = object.ownerAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            ownerAddress: object.owner_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.owner_address = message.ownerAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgWithdrawAllTokenizeShareRecordReward.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordReward",
            value: exports.MsgWithdrawAllTokenizeShareRecordReward.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawAllTokenizeShareRecordReward.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawAllTokenizeShareRecordReward.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordReward",
            value: exports.MsgWithdrawAllTokenizeShareRecordReward.encode(message).finish()
        };
    }
};
function createBaseMsgWithdrawAllTokenizeShareRecordRewardResponse() {
    return {};
}
exports.MsgWithdrawAllTokenizeShareRecordRewardResponse = {
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
        return exports.MsgWithdrawAllTokenizeShareRecordRewardResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgWithdrawAllTokenizeShareRecordRewardResponse",
            value: exports.MsgWithdrawAllTokenizeShareRecordRewardResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgWithdrawAllTokenizeShareRecordRewardResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgWithdrawAllTokenizeShareRecordRewardResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgWithdrawAllTokenizeShareRecordRewardResponse",
            value: exports.MsgWithdrawAllTokenizeShareRecordRewardResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordByIdRequest() {
    return {
        id: helpers_1.Long.UZERO
    };
}
exports.QueryTokenizeShareRecordByIdRequest = {
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
            id: (0, helpers_1.isSet)(object.id) ? helpers_1.Long.fromValue(object.id) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareRecordByIdRequest();
        message.id = object.id !== undefined && object.id !== null ? helpers_1.Long.fromValue(object.id) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            id: helpers_1.Long.fromString(object.id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTokenizeShareRecordByIdRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordByIdRequest",
            value: exports.QueryTokenizeShareRecordByIdRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTokenizeShareRecordByIdRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTokenizeShareRecordByIdRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdRequest",
            value: exports.QueryTokenizeShareRecordByIdRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordByIdResponse() {
    return {
        record: exports.TokenizeShareRecord.fromPartial({})
    };
}
exports.QueryTokenizeShareRecordByIdResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse",
    aminoType: "cosmos-sdk/QueryTokenizeShareRecordByIdResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.record !== undefined) {
            exports.TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
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
                    message.record = exports.TokenizeShareRecord.decode(reader, reader.uint32());
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
            record: (0, helpers_1.isSet)(object.record) ? exports.TokenizeShareRecord.fromJSON(object.record) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.record !== undefined && (obj.record = message.record ? exports.TokenizeShareRecord.toJSON(message.record) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareRecordByIdResponse();
        message.record = object.record !== undefined && object.record !== null ? exports.TokenizeShareRecord.fromPartial(object.record) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            record: object?.record ? exports.TokenizeShareRecord.fromAmino(object.record) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.record = message.record ? exports.TokenizeShareRecord.toAmino(message.record) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTokenizeShareRecordByIdResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordByIdResponse",
            value: exports.QueryTokenizeShareRecordByIdResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTokenizeShareRecordByIdResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTokenizeShareRecordByIdResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByIdResponse",
            value: exports.QueryTokenizeShareRecordByIdResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordByDenomRequest() {
    return {
        denom: ""
    };
}
exports.QueryTokenizeShareRecordByDenomRequest = {
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
            denom: (0, helpers_1.isSet)(object.denom) ? String(object.denom) : ""
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
        return exports.QueryTokenizeShareRecordByDenomRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordByDenomRequest",
            value: exports.QueryTokenizeShareRecordByDenomRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTokenizeShareRecordByDenomRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTokenizeShareRecordByDenomRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomRequest",
            value: exports.QueryTokenizeShareRecordByDenomRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordByDenomResponse() {
    return {
        record: exports.TokenizeShareRecord.fromPartial({})
    };
}
exports.QueryTokenizeShareRecordByDenomResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse",
    aminoType: "cosmos-sdk/QueryTokenizeShareRecordByDenomResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.record !== undefined) {
            exports.TokenizeShareRecord.encode(message.record, writer.uint32(10).fork()).ldelim();
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
                    message.record = exports.TokenizeShareRecord.decode(reader, reader.uint32());
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
            record: (0, helpers_1.isSet)(object.record) ? exports.TokenizeShareRecord.fromJSON(object.record) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.record !== undefined && (obj.record = message.record ? exports.TokenizeShareRecord.toJSON(message.record) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareRecordByDenomResponse();
        message.record = object.record !== undefined && object.record !== null ? exports.TokenizeShareRecord.fromPartial(object.record) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            record: object?.record ? exports.TokenizeShareRecord.fromAmino(object.record) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.record = message.record ? exports.TokenizeShareRecord.toAmino(message.record) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTokenizeShareRecordByDenomResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordByDenomResponse",
            value: exports.QueryTokenizeShareRecordByDenomResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTokenizeShareRecordByDenomResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTokenizeShareRecordByDenomResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordByDenomResponse",
            value: exports.QueryTokenizeShareRecordByDenomResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordsOwnedRequest() {
    return {
        owner: ""
    };
}
exports.QueryTokenizeShareRecordsOwnedRequest = {
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
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : ""
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
        return exports.QueryTokenizeShareRecordsOwnedRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedRequest",
            value: exports.QueryTokenizeShareRecordsOwnedRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTokenizeShareRecordsOwnedRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTokenizeShareRecordsOwnedRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedRequest",
            value: exports.QueryTokenizeShareRecordsOwnedRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareRecordsOwnedResponse() {
    return {
        records: []
    };
}
exports.QueryTokenizeShareRecordsOwnedResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
    aminoType: "cosmos-sdk/QueryTokenizeShareRecordsOwnedResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.records) {
            exports.TokenizeShareRecord.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.records.push(exports.TokenizeShareRecord.decode(reader, reader.uint32()));
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
            records: Array.isArray(object?.records) ? object.records.map((e) => exports.TokenizeShareRecord.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.records) {
            obj.records = message.records.map(e => e ? exports.TokenizeShareRecord.toJSON(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareRecordsOwnedResponse();
        message.records = object.records?.map(e => exports.TokenizeShareRecord.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            records: Array.isArray(object?.records) ? object.records.map((e) => exports.TokenizeShareRecord.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.records) {
            obj.records = message.records.map(e => e ? exports.TokenizeShareRecord.toAmino(e) : undefined);
        }
        else {
            obj.records = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTokenizeShareRecordsOwnedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareRecordsOwnedResponse",
            value: exports.QueryTokenizeShareRecordsOwnedResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTokenizeShareRecordsOwnedResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTokenizeShareRecordsOwnedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareRecordsOwnedResponse",
            value: exports.QueryTokenizeShareRecordsOwnedResponse.encode(message).finish()
        };
    }
};
function createBaseQueryAllTokenizeShareRecordsRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryAllTokenizeShareRecordsRequest = {
    typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest",
    aminoType: "cosmos-sdk/QueryAllTokenizeShareRecordsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllTokenizeShareRecordsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllTokenizeShareRecordsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllTokenizeShareRecordsRequest",
            value: exports.QueryAllTokenizeShareRecordsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllTokenizeShareRecordsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllTokenizeShareRecordsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsRequest",
            value: exports.QueryAllTokenizeShareRecordsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryAllTokenizeShareRecordsResponse() {
    return {
        records: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryAllTokenizeShareRecordsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse",
    aminoType: "cosmos-sdk/QueryAllTokenizeShareRecordsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.records) {
            exports.TokenizeShareRecord.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.records.push(exports.TokenizeShareRecord.decode(reader, reader.uint32()));
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
            records: Array.isArray(object?.records) ? object.records.map((e) => exports.TokenizeShareRecord.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.records) {
            obj.records = message.records.map(e => e ? exports.TokenizeShareRecord.toJSON(e) : undefined);
        }
        else {
            obj.records = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllTokenizeShareRecordsResponse();
        message.records = object.records?.map(e => exports.TokenizeShareRecord.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            records: Array.isArray(object?.records) ? object.records.map((e) => exports.TokenizeShareRecord.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.records) {
            obj.records = message.records.map(e => e ? exports.TokenizeShareRecord.toAmino(e) : undefined);
        }
        else {
            obj.records = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryAllTokenizeShareRecordsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryAllTokenizeShareRecordsResponse",
            value: exports.QueryAllTokenizeShareRecordsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryAllTokenizeShareRecordsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryAllTokenizeShareRecordsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryAllTokenizeShareRecordsResponse",
            value: exports.QueryAllTokenizeShareRecordsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryLastTokenizeShareRecordIdRequest() {
    return {};
}
exports.QueryLastTokenizeShareRecordIdRequest = {
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
        return exports.QueryLastTokenizeShareRecordIdRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryLastTokenizeShareRecordIdRequest",
            value: exports.QueryLastTokenizeShareRecordIdRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryLastTokenizeShareRecordIdRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastTokenizeShareRecordIdRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdRequest",
            value: exports.QueryLastTokenizeShareRecordIdRequest.encode(message).finish()
        };
    }
};
function createBaseQueryLastTokenizeShareRecordIdResponse() {
    return {
        id: helpers_1.Long.UZERO
    };
}
exports.QueryLastTokenizeShareRecordIdResponse = {
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
            id: (0, helpers_1.isSet)(object.id) ? helpers_1.Long.fromValue(object.id) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryLastTokenizeShareRecordIdResponse();
        message.id = object.id !== undefined && object.id !== null ? helpers_1.Long.fromValue(object.id) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            id: helpers_1.Long.fromString(object.id)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryLastTokenizeShareRecordIdResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryLastTokenizeShareRecordIdResponse",
            value: exports.QueryLastTokenizeShareRecordIdResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryLastTokenizeShareRecordIdResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryLastTokenizeShareRecordIdResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryLastTokenizeShareRecordIdResponse",
            value: exports.QueryLastTokenizeShareRecordIdResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalTokenizeSharedAssetsRequest() {
    return {};
}
exports.QueryTotalTokenizeSharedAssetsRequest = {
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
        return exports.QueryTotalTokenizeSharedAssetsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsRequest",
            value: exports.QueryTotalTokenizeSharedAssetsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalTokenizeSharedAssetsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalTokenizeSharedAssetsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsRequest",
            value: exports.QueryTotalTokenizeSharedAssetsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryTotalTokenizeSharedAssetsResponse() {
    return {
        value: coin_1.Coin.fromPartial({})
    };
}
exports.QueryTotalTokenizeSharedAssetsResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
    aminoType: "cosmos-sdk/QueryTotalTokenizeSharedAssetsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            coin_1.Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
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
            value: (0, helpers_1.isSet)(object.value) ? coin_1.Coin.fromJSON(object.value) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? coin_1.Coin.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalTokenizeSharedAssetsResponse();
        message.value = object.value !== undefined && object.value !== null ? coin_1.Coin.fromPartial(object.value) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            value: object?.value ? coin_1.Coin.fromAmino(object.value) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value ? coin_1.Coin.toAmino(message.value) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTotalTokenizeSharedAssetsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalTokenizeSharedAssetsResponse",
            value: exports.QueryTotalTokenizeSharedAssetsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalTokenizeSharedAssetsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalTokenizeSharedAssetsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTotalTokenizeSharedAssetsResponse",
            value: exports.QueryTotalTokenizeSharedAssetsResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTotalLiquidStaked() {
    return {};
}
exports.QueryTotalLiquidStaked = {
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
        return exports.QueryTotalLiquidStaked.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalLiquidStaked",
            value: exports.QueryTotalLiquidStaked.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalLiquidStaked.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalLiquidStaked.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStaked",
            value: exports.QueryTotalLiquidStaked.encode(message).finish()
        };
    }
};
function createBaseQueryTotalLiquidStakedResponse() {
    return {
        tokens: ""
    };
}
exports.QueryTotalLiquidStakedResponse = {
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
            tokens: (0, helpers_1.isSet)(object.tokens) ? String(object.tokens) : ""
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
        return exports.QueryTotalLiquidStakedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTotalLiquidStakedResponse",
            value: exports.QueryTotalLiquidStakedResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTotalLiquidStakedResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTotalLiquidStakedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTotalLiquidStakedResponse",
            value: exports.QueryTotalLiquidStakedResponse.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareLockInfo() {
    return {
        address: ""
    };
}
exports.QueryTokenizeShareLockInfo = {
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
            address: (0, helpers_1.isSet)(object.address) ? String(object.address) : ""
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
        return exports.QueryTokenizeShareLockInfo.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareLockInfo",
            value: exports.QueryTokenizeShareLockInfo.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTokenizeShareLockInfo.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTokenizeShareLockInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfo",
            value: exports.QueryTokenizeShareLockInfo.encode(message).finish()
        };
    }
};
function createBaseQueryTokenizeShareLockInfoResponse() {
    return {
        status: "",
        expirationTime: ""
    };
}
exports.QueryTokenizeShareLockInfoResponse = {
    typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse",
    aminoType: "cosmos-sdk/QueryTokenizeShareLockInfoResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        if (message.expirationTime !== "") {
            writer.uint32(18).string(message.expirationTime);
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
                    message.expirationTime = reader.string();
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
            status: (0, helpers_1.isSet)(object.status) ? String(object.status) : "",
            expirationTime: (0, helpers_1.isSet)(object.expirationTime) ? String(object.expirationTime) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.expirationTime !== undefined && (obj.expirationTime = message.expirationTime);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTokenizeShareLockInfoResponse();
        message.status = object.status ?? "";
        message.expirationTime = object.expirationTime ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            status: object.status,
            expirationTime: object.expiration_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.status = message.status;
        obj.expiration_time = message.expirationTime;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryTokenizeShareLockInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryTokenizeShareLockInfoResponse",
            value: exports.QueryTokenizeShareLockInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.QueryTokenizeShareLockInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryTokenizeShareLockInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.QueryTokenizeShareLockInfoResponse",
            value: exports.QueryTokenizeShareLockInfoResponse.encode(message).finish()
        };
    }
};
function createBaseTokenizeShareRecord() {
    return {
        id: helpers_1.Long.UZERO,
        owner: "",
        moduleAccount: "",
        validator: ""
    };
}
exports.TokenizeShareRecord = {
    typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecord",
    aminoType: "cosmos-sdk/TokenizeShareRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        if (message.moduleAccount !== "") {
            writer.uint32(26).string(message.moduleAccount);
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
                    message.moduleAccount = reader.string();
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
            id: (0, helpers_1.isSet)(object.id) ? helpers_1.Long.fromValue(object.id) : helpers_1.Long.UZERO,
            owner: (0, helpers_1.isSet)(object.owner) ? String(object.owner) : "",
            moduleAccount: (0, helpers_1.isSet)(object.moduleAccount) ? String(object.moduleAccount) : "",
            validator: (0, helpers_1.isSet)(object.validator) ? String(object.validator) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = (message.id || helpers_1.Long.UZERO).toString());
        message.owner !== undefined && (obj.owner = message.owner);
        message.moduleAccount !== undefined && (obj.moduleAccount = message.moduleAccount);
        message.validator !== undefined && (obj.validator = message.validator);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTokenizeShareRecord();
        message.id = object.id !== undefined && object.id !== null ? helpers_1.Long.fromValue(object.id) : helpers_1.Long.UZERO;
        message.owner = object.owner ?? "";
        message.moduleAccount = object.moduleAccount ?? "";
        message.validator = object.validator ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: helpers_1.Long.fromString(object.id),
            owner: object.owner,
            moduleAccount: object.module_account,
            validator: object.validator
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? message.id.toString() : undefined;
        obj.owner = message.owner;
        obj.module_account = message.moduleAccount;
        obj.validator = message.validator;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TokenizeShareRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TokenizeShareRecord",
            value: exports.TokenizeShareRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TokenizeShareRecord.decode(message.value);
    },
    toProto(message) {
        return exports.TokenizeShareRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.TokenizeShareRecord",
            value: exports.TokenizeShareRecord.encode(message).finish()
        };
    }
};
function createBasePendingTokenizeShareAuthorizations() {
    return {
        addresses: []
    };
}
exports.PendingTokenizeShareAuthorizations = {
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
        return exports.PendingTokenizeShareAuthorizations.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PendingTokenizeShareAuthorizations",
            value: exports.PendingTokenizeShareAuthorizations.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PendingTokenizeShareAuthorizations.decode(message.value);
    },
    toProto(message) {
        return exports.PendingTokenizeShareAuthorizations.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.PendingTokenizeShareAuthorizations",
            value: exports.PendingTokenizeShareAuthorizations.encode(message).finish()
        };
    }
};
function createBaseMsgUnbondValidator() {
    return {
        validatorAddress: ""
    };
}
exports.MsgUnbondValidator = {
    typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
    aminoType: "cosmos-sdk/MsgUnbondValidator",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validatorAddress !== "") {
            writer.uint32(10).string(message.validatorAddress);
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
                    message.validatorAddress = reader.string();
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
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnbondValidator();
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validatorAddress: object.validator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_address = message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUnbondValidator.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUnbondValidator",
            value: exports.MsgUnbondValidator.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnbondValidator.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnbondValidator.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidator",
            value: exports.MsgUnbondValidator.encode(message).finish()
        };
    }
};
function createBaseMsgUnbondValidatorResponse() {
    return {};
}
exports.MsgUnbondValidatorResponse = {
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
        return exports.MsgUnbondValidatorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUnbondValidatorResponse",
            value: exports.MsgUnbondValidatorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUnbondValidatorResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUnbondValidatorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgUnbondValidatorResponse",
            value: exports.MsgUnbondValidatorResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTokenizeShares() {
    return {
        delegatorAddress: "",
        validatorAddress: "",
        amount: coin_1.Coin.fromPartial({}),
        tokenizedShareOwner: ""
    };
}
exports.MsgTokenizeShares = {
    typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
    aminoType: "cosmos-sdk/MsgTokenizeShares",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenizedShareOwner !== "") {
            writer.uint32(34).string(message.tokenizedShareOwner);
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
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tokenizedShareOwner = reader.string();
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
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            tokenizedShareOwner: (0, helpers_1.isSet)(object.tokenizedShareOwner) ? String(object.tokenizedShareOwner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.tokenizedShareOwner !== undefined && (obj.tokenizedShareOwner = message.tokenizedShareOwner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTokenizeShares();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.tokenizedShareOwner = object.tokenizedShareOwner ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address,
            validatorAddress: object.validator_address,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined,
            tokenizedShareOwner: object.tokenized_share_owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.tokenized_share_owner = message.tokenizedShareOwner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTokenizeShares.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTokenizeShares",
            value: exports.MsgTokenizeShares.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTokenizeShares.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTokenizeShares.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
            value: exports.MsgTokenizeShares.encode(message).finish()
        };
    }
};
function createBaseMsgTokenizeSharesResponse() {
    return {
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgTokenizeSharesResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse",
    aminoType: "cosmos-sdk/MsgTokenizeSharesResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
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
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTokenizeSharesResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTokenizeSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTokenizeSharesResponse",
            value: exports.MsgTokenizeSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTokenizeSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTokenizeSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse",
            value: exports.MsgTokenizeSharesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRedeemTokensForShares() {
    return {
        delegatorAddress: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgRedeemTokensForShares = {
    typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
    aminoType: "cosmos-sdk/MsgRedeemTokensForShares",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
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
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
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
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRedeemTokensForShares();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRedeemTokensForShares.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRedeemTokensForShares",
            value: exports.MsgRedeemTokensForShares.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRedeemTokensForShares.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRedeemTokensForShares.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
            value: exports.MsgRedeemTokensForShares.encode(message).finish()
        };
    }
};
function createBaseMsgRedeemTokensForSharesResponse() {
    return {
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgRedeemTokensForSharesResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse",
    aminoType: "cosmos-sdk/MsgRedeemTokensForSharesResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
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
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRedeemTokensForSharesResponse();
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgRedeemTokensForSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRedeemTokensForSharesResponse",
            value: exports.MsgRedeemTokensForSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgRedeemTokensForSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgRedeemTokensForSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse",
            value: exports.MsgRedeemTokensForSharesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgTransferTokenizeShareRecord() {
    return {
        tokenizeShareRecordId: helpers_1.Long.UZERO,
        sender: "",
        newOwner: ""
    };
}
exports.MsgTransferTokenizeShareRecord = {
    typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
    aminoType: "cosmos-sdk/MsgTransferTokenizeShareRecord",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.tokenizeShareRecordId.isZero()) {
            writer.uint32(8).uint64(message.tokenizeShareRecordId);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        if (message.newOwner !== "") {
            writer.uint32(26).string(message.newOwner);
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
                    message.tokenizeShareRecordId = reader.uint64();
                    break;
                case 2:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.newOwner = reader.string();
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
            tokenizeShareRecordId: (0, helpers_1.isSet)(object.tokenizeShareRecordId) ? helpers_1.Long.fromValue(object.tokenizeShareRecordId) : helpers_1.Long.UZERO,
            sender: (0, helpers_1.isSet)(object.sender) ? String(object.sender) : "",
            newOwner: (0, helpers_1.isSet)(object.newOwner) ? String(object.newOwner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.tokenizeShareRecordId !== undefined && (obj.tokenizeShareRecordId = (message.tokenizeShareRecordId || helpers_1.Long.UZERO).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        message.newOwner !== undefined && (obj.newOwner = message.newOwner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTransferTokenizeShareRecord();
        message.tokenizeShareRecordId = object.tokenizeShareRecordId !== undefined && object.tokenizeShareRecordId !== null ? helpers_1.Long.fromValue(object.tokenizeShareRecordId) : helpers_1.Long.UZERO;
        message.sender = object.sender ?? "";
        message.newOwner = object.newOwner ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            tokenizeShareRecordId: helpers_1.Long.fromString(object.tokenize_share_record_id),
            sender: object.sender,
            newOwner: object.new_owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tokenize_share_record_id = message.tokenizeShareRecordId ? message.tokenizeShareRecordId.toString() : undefined;
        obj.sender = message.sender;
        obj.new_owner = message.newOwner;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgTransferTokenizeShareRecord.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransferTokenizeShareRecord",
            value: exports.MsgTransferTokenizeShareRecord.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTransferTokenizeShareRecord.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTransferTokenizeShareRecord.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecord",
            value: exports.MsgTransferTokenizeShareRecord.encode(message).finish()
        };
    }
};
function createBaseMsgTransferTokenizeShareRecordResponse() {
    return {};
}
exports.MsgTransferTokenizeShareRecordResponse = {
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
        return exports.MsgTransferTokenizeShareRecordResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransferTokenizeShareRecordResponse",
            value: exports.MsgTransferTokenizeShareRecordResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgTransferTokenizeShareRecordResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgTransferTokenizeShareRecordResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgTransferTokenizeShareRecordResponse",
            value: exports.MsgTransferTokenizeShareRecordResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDisableTokenizeShares() {
    return {
        delegatorAddress: ""
    };
}
exports.MsgDisableTokenizeShares = {
    typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
    aminoType: "cosmos-sdk/MsgDisableTokenizeShares",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
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
                    message.delegatorAddress = reader.string();
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
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDisableTokenizeShares();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgDisableTokenizeShares.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDisableTokenizeShares",
            value: exports.MsgDisableTokenizeShares.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDisableTokenizeShares.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDisableTokenizeShares.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
            value: exports.MsgDisableTokenizeShares.encode(message).finish()
        };
    }
};
function createBaseMsgDisableTokenizeSharesResponse() {
    return {};
}
exports.MsgDisableTokenizeSharesResponse = {
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
        return exports.MsgDisableTokenizeSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDisableTokenizeSharesResponse",
            value: exports.MsgDisableTokenizeSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgDisableTokenizeSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgDisableTokenizeSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse",
            value: exports.MsgDisableTokenizeSharesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgEnableTokenizeShares() {
    return {
        delegatorAddress: ""
    };
}
exports.MsgEnableTokenizeShares = {
    typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
    aminoType: "cosmos-sdk/MsgEnableTokenizeShares",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
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
                    message.delegatorAddress = reader.string();
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
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgEnableTokenizeShares();
        message.delegatorAddress = object.delegatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgEnableTokenizeShares.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgEnableTokenizeShares",
            value: exports.MsgEnableTokenizeShares.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgEnableTokenizeShares.decode(message.value);
    },
    toProto(message) {
        return exports.MsgEnableTokenizeShares.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
            value: exports.MsgEnableTokenizeShares.encode(message).finish()
        };
    }
};
function createBaseMsgEnableTokenizeSharesResponse() {
    return {
        completionTime: new Date()
    };
}
exports.MsgEnableTokenizeSharesResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
    aminoType: "cosmos-sdk/MsgEnableTokenizeSharesResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.completionTime !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completionTime), writer.uint32(10).fork()).ldelim();
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
                    message.completionTime = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
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
            completionTime: (0, helpers_1.isSet)(object.completionTime) ? (0, helpers_1.fromJsonTimestamp)(object.completionTime) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgEnableTokenizeSharesResponse();
        message.completionTime = object.completionTime ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            completionTime: object.completion_time
        };
    },
    toAmino(message) {
        const obj = {};
        obj.completion_time = message.completionTime;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgEnableTokenizeSharesResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgEnableTokenizeSharesResponse",
            value: exports.MsgEnableTokenizeSharesResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgEnableTokenizeSharesResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgEnableTokenizeSharesResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
            value: exports.MsgEnableTokenizeSharesResponse.encode(message).finish()
        };
    }
};
function createBaseMsgValidatorBond() {
    return {
        delegatorAddress: "",
        validatorAddress: ""
    };
}
exports.MsgValidatorBond = {
    typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
    aminoType: "cosmos-sdk/MsgValidatorBond",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegatorAddress !== "") {
            writer.uint32(10).string(message.delegatorAddress);
        }
        if (message.validatorAddress !== "") {
            writer.uint32(18).string(message.validatorAddress);
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
                    message.delegatorAddress = reader.string();
                    break;
                case 2:
                    message.validatorAddress = reader.string();
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
            delegatorAddress: (0, helpers_1.isSet)(object.delegatorAddress) ? String(object.delegatorAddress) : "",
            validatorAddress: (0, helpers_1.isSet)(object.validatorAddress) ? String(object.validatorAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
        message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgValidatorBond();
        message.delegatorAddress = object.delegatorAddress ?? "";
        message.validatorAddress = object.validatorAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegatorAddress: object.delegator_address,
            validatorAddress: object.validator_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegatorAddress;
        obj.validator_address = message.validatorAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgValidatorBond.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgValidatorBond",
            value: exports.MsgValidatorBond.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgValidatorBond.decode(message.value);
    },
    toProto(message) {
        return exports.MsgValidatorBond.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBond",
            value: exports.MsgValidatorBond.encode(message).finish()
        };
    }
};
function createBaseMsgValidatorBondResponse() {
    return {};
}
exports.MsgValidatorBondResponse = {
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
        return exports.MsgValidatorBondResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgValidatorBondResponse",
            value: exports.MsgValidatorBondResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgValidatorBondResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgValidatorBondResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.staking.v1beta1.MsgValidatorBondResponse",
            value: exports.MsgValidatorBondResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map