import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
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
//# sourceMappingURL=lsm.js.map