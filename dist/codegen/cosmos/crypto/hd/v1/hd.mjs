import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
function createBaseBIP44Params() {
    return {
        purpose: 0,
        coin_type: 0,
        account: 0,
        change: false,
        address_index: 0
    };
}
export const BIP44Params = {
    typeUrl: "/cosmos.crypto.hd.v1.BIP44Params",
    aminoType: "cosmos-sdk/BIP44Params",
    encode(message, writer = _m0.Writer.create()) {
        if (message.purpose !== 0) {
            writer.uint32(8).uint32(message.purpose);
        }
        if (message.coin_type !== 0) {
            writer.uint32(16).uint32(message.coin_type);
        }
        if (message.account !== 0) {
            writer.uint32(24).uint32(message.account);
        }
        if (message.change === true) {
            writer.uint32(32).bool(message.change);
        }
        if (message.address_index !== 0) {
            writer.uint32(40).uint32(message.address_index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBIP44Params();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.purpose = reader.uint32();
                    break;
                case 2:
                    message.coin_type = reader.uint32();
                    break;
                case 3:
                    message.account = reader.uint32();
                    break;
                case 4:
                    message.change = reader.bool();
                    break;
                case 5:
                    message.address_index = reader.uint32();
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
            purpose: isSet(object.purpose) ? Number(object.purpose) : 0,
            coin_type: isSet(object.coin_type) ? Number(object.coin_type) : 0,
            account: isSet(object.account) ? Number(object.account) : 0,
            change: isSet(object.change) ? Boolean(object.change) : false,
            address_index: isSet(object.address_index) ? Number(object.address_index) : 0
        };
    },
    toJSON(message) {
        const obj = {};
        message.purpose !== undefined && (obj.purpose = Math.round(message.purpose));
        message.coin_type !== undefined && (obj.coin_type = Math.round(message.coin_type));
        message.account !== undefined && (obj.account = Math.round(message.account));
        message.change !== undefined && (obj.change = message.change);
        message.address_index !== undefined && (obj.address_index = Math.round(message.address_index));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBIP44Params();
        message.purpose = object.purpose ?? 0;
        message.coin_type = object.coin_type ?? 0;
        message.account = object.account ?? 0;
        message.change = object.change ?? false;
        message.address_index = object.address_index ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            purpose: object.purpose,
            coin_type: object.coin_type,
            account: object.account,
            change: object.change,
            address_index: object.address_index
        };
    },
    toAmino(message) {
        const obj = {};
        obj.purpose = message.purpose;
        obj.coin_type = message.coin_type;
        obj.account = message.account;
        obj.change = message.change;
        obj.address_index = message.address_index;
        return obj;
    },
    fromAminoMsg(object) {
        return BIP44Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BIP44Params",
            value: BIP44Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return BIP44Params.decode(message.value);
    },
    toProto(message) {
        return BIP44Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.crypto.hd.v1.BIP44Params",
            value: BIP44Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=hd.js.map