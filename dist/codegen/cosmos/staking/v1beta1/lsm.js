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
exports.MsgEnableTokenizeSharesResponse = exports.MsgEnableTokenizeShares = exports.MsgDisableTokenizeSharesResponse = exports.MsgDisableTokenizeShares = exports.MsgRedeemTokensForSharesResponse = exports.MsgRedeemTokensForShares = exports.MsgTokenizeSharesResponse = exports.MsgTokenizeShares = void 0;
const coin_1 = require("../../base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseMsgTokenizeShares() {
    return {
        delegator_address: "",
        validator_address: "",
        amount: coin_1.Coin.fromPartial({}),
        tokenized_share_owner: ""
    };
}
exports.MsgTokenizeShares = {
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
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
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
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? String(object.validator_address) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
            tokenized_share_owner: (0, helpers_1.isSet)(object.tokenized_share_owner) ? String(object.tokenized_share_owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined && (obj.validator_address = message.validator_address);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        message.tokenized_share_owner !== undefined && (obj.tokenized_share_owner = message.tokenized_share_owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTokenizeShares();
        message.delegator_address = object.delegator_address ?? "";
        message.validator_address = object.validator_address ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        message.tokenized_share_owner = object.tokenized_share_owner ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            validator_address: object.validator_address,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined,
            tokenized_share_owner: object.tokenized_share_owner
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
        obj.validator_address = message.validator_address;
        obj.amount = message.amount ? coin_1.Coin.toAmino(message.amount) : undefined;
        obj.tokenized_share_owner = message.tokenized_share_owner;
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
        delegator_address: "",
        amount: coin_1.Coin.fromPartial({})
    };
}
exports.MsgRedeemTokensForShares = {
    typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
    aminoType: "cosmos-sdk/MsgRedeemTokensForShares",
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
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
                    message.delegator_address = reader.string();
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
        message.amount !== undefined && (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRedeemTokensForShares();
        message.delegator_address = object.delegator_address ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? coin_1.Coin.fromPartial(object.amount) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            delegator_address: object.delegator_address,
            amount: object?.amount ? coin_1.Coin.fromAmino(object.amount) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.delegator_address = message.delegator_address;
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
function createBaseMsgDisableTokenizeShares() {
    return {
        delegator_address: ""
    };
}
exports.MsgDisableTokenizeShares = {
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : ""
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
        delegator_address: ""
    };
}
exports.MsgEnableTokenizeShares = {
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
            delegator_address: (0, helpers_1.isSet)(object.delegator_address) ? String(object.delegator_address) : ""
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
        completion_time: new Date()
    };
}
exports.MsgEnableTokenizeSharesResponse = {
    typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
    aminoType: "cosmos-sdk/MsgEnableTokenizeSharesResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.completion_time), writer.uint32(10).fork()).ldelim();
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
//# sourceMappingURL=lsm.js.map