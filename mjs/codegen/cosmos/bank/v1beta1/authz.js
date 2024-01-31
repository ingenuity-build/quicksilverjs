import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
function createBaseSendAuthorization() {
    return {
        $typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
        spend_limit: []
    };
}
export const SendAuthorization = {
    typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
    aminoType: "cosmos-sdk/SendAuthorization",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.spend_limit) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSendAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spend_limit.push(Coin.decode(reader, reader.uint32()));
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
            spend_limit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSendAuthorization();
        message.spend_limit = object.spend_limit?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            spend_limit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.spend_limit) {
            obj.spend_limit = message.spend_limit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.spend_limit = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return SendAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SendAuthorization",
            value: SendAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SendAuthorization.decode(message.value);
    },
    toProto(message) {
        return SendAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
            value: SendAuthorization.encode(message).finish()
        };
    }
};
//# sourceMappingURL=authz.js.map