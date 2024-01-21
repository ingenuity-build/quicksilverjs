import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseMsgRequestRedemption() {
    return {
        value: Coin.fromPartial({}),
        destinationAddress: "",
        fromAddress: ""
    };
}
export const MsgRequestRedemption = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
    aminoType: "quicksilver/MsgRequestRedemption",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        if (message.destinationAddress !== "") {
            writer.uint32(18).string(message.destinationAddress);
        }
        if (message.fromAddress !== "") {
            writer.uint32(26).string(message.fromAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestRedemption();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.destinationAddress = reader.string();
                    break;
                case 3:
                    message.fromAddress = reader.string();
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
            value: isSet(object.value) ? Coin.fromJSON(object.value) : undefined,
            destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
            fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
        message.destinationAddress !== undefined && (obj.destinationAddress = message.destinationAddress);
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRequestRedemption();
        message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
        message.destinationAddress = object.destinationAddress ?? "";
        message.fromAddress = object.fromAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            value: object?.value ? Coin.fromAmino(object.value) : undefined,
            destinationAddress: object.destination_address,
            fromAddress: object.from_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value ? Coin.toAmino(message.value) : undefined;
        obj.destination_address = message.destinationAddress;
        obj.from_address = message.fromAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRequestRedemption.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "quicksilver/MsgRequestRedemption",
            value: MsgRequestRedemption.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRequestRedemption.decode(message.value);
    },
    toProto(message) {
        return MsgRequestRedemption.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
            value: MsgRequestRedemption.encode(message).finish()
        };
    }
};
function createBaseMsgRequestRedemptionResponse() {
    return {};
}
export const MsgRequestRedemptionResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemptionResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRequestRedemptionResponse();
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
        const message = createBaseMsgRequestRedemptionResponse();
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
        return MsgRequestRedemptionResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgRequestRedemptionResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRequestRedemptionResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemptionResponse",
            value: MsgRequestRedemptionResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSignalIntent() {
    return {
        chainId: "",
        intents: "",
        fromAddress: ""
    };
}
export const MsgSignalIntent = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
    aminoType: "quicksilver/MsgSignalIntent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.intents !== "") {
            writer.uint32(18).string(message.intents);
        }
        if (message.fromAddress !== "") {
            writer.uint32(26).string(message.fromAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignalIntent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.intents = reader.string();
                    break;
                case 3:
                    message.fromAddress = reader.string();
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            intents: isSet(object.intents) ? String(object.intents) : "",
            fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.intents !== undefined && (obj.intents = message.intents);
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSignalIntent();
        message.chainId = object.chainId ?? "";
        message.intents = object.intents ?? "";
        message.fromAddress = object.fromAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            intents: object.intents,
            fromAddress: object.from_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.intents = message.intents;
        obj.from_address = message.fromAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSignalIntent.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "quicksilver/MsgSignalIntent",
            value: MsgSignalIntent.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSignalIntent.decode(message.value);
    },
    toProto(message) {
        return MsgSignalIntent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
            value: MsgSignalIntent.encode(message).finish()
        };
    }
};
function createBaseMsgSignalIntentResponse() {
    return {};
}
export const MsgSignalIntentResponse = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntentResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSignalIntentResponse();
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
        const message = createBaseMsgSignalIntentResponse();
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
        return MsgSignalIntentResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSignalIntentResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSignalIntentResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntentResponse",
            value: MsgSignalIntentResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=messages.js.map