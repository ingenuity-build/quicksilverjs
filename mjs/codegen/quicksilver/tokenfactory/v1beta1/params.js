import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
function createBaseParams() {
    return {
        denom_creation_fee: []
    };
}
export const Params = {
    typeUrl: "/quicksilver.tokenfactory.v1beta1.Params",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.denom_creation_fee) {
            Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom_creation_fee.push(Coin.decode(reader, reader.uint32()));
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
            denom_creation_fee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e) => Coin.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.denom_creation_fee) {
            obj.denom_creation_fee = message.denom_creation_fee.map(e => e ? Coin.toJSON(e) : undefined);
        }
        else {
            obj.denom_creation_fee = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.denom_creation_fee = object.denom_creation_fee?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            denom_creation_fee: Array.isArray(object?.denom_creation_fee) ? object.denom_creation_fee.map((e) => Coin.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.denom_creation_fee) {
            obj.denom_creation_fee = message.denom_creation_fee.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.denom_creation_fee = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.tokenfactory.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map