import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseMsgRequestRedemption() {
    return {
        value: Coin.fromPartial({}),
        destination_address: "",
        from_address: ""
    };
}
export const MsgRequestRedemption = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
    aminoType: "quicksilver/MsgRequestRedemption",
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        if (message.destination_address !== "") {
            writer.uint32(18).string(message.destination_address);
        }
        if (message.from_address !== "") {
            writer.uint32(26).string(message.from_address);
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
                    message.destination_address = reader.string();
                    break;
                case 3:
                    message.from_address = reader.string();
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
            destination_address: isSet(object.destination_address) ? String(object.destination_address) : "",
            from_address: isSet(object.from_address) ? String(object.from_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? Coin.toJSON(message.value) : undefined);
        message.destination_address !== undefined && (obj.destination_address = message.destination_address);
        message.from_address !== undefined && (obj.from_address = message.from_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRequestRedemption();
        message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
        message.destination_address = object.destination_address ?? "";
        message.from_address = object.from_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            value: object?.value ? Coin.fromAmino(object.value) : undefined,
            destination_address: object.destination_address,
            from_address: object.from_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.value = message.value ? Coin.toAmino(message.value) : undefined;
        obj.destination_address = message.destination_address;
        obj.from_address = message.from_address;
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
        chain_id: "",
        intents: "",
        from_address: ""
    };
}
export const MsgSignalIntent = {
    typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
    aminoType: "quicksilver/MsgSignalIntent",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.intents !== "") {
            writer.uint32(18).string(message.intents);
        }
        if (message.from_address !== "") {
            writer.uint32(26).string(message.from_address);
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.intents = reader.string();
                    break;
                case 3:
                    message.from_address = reader.string();
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
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            intents: isSet(object.intents) ? String(object.intents) : "",
            from_address: isSet(object.from_address) ? String(object.from_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.intents !== undefined && (obj.intents = message.intents);
        message.from_address !== undefined && (obj.from_address = message.from_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSignalIntent();
        message.chain_id = object.chain_id ?? "";
        message.intents = object.intents ?? "";
        message.from_address = object.from_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            intents: object.intents,
            from_address: object.from_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.intents = message.intents;
        obj.from_address = message.from_address;
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