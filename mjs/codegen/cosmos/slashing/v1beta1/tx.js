import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseMsgUnjail() {
    return {
        validator_addr: ""
    };
}
export const MsgUnjail = {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
    aminoType: "cosmos-sdk/MsgUnjail",
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnjail();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_addr = reader.string();
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
            validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUnjail();
        message.validator_addr = object.validator_addr ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            validator_addr: object.validator_addr
        };
    },
    toAmino(message) {
        const obj = {};
        obj.validator_addr = message.validator_addr;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgUnjail.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUnjail",
            value: MsgUnjail.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUnjail.decode(message.value);
    },
    toProto(message) {
        return MsgUnjail.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
            value: MsgUnjail.encode(message).finish()
        };
    }
};
function createBaseMsgUnjailResponse() {
    return {};
}
export const MsgUnjailResponse = {
    typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
    aminoType: "cosmos-sdk/MsgUnjailResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUnjailResponse();
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
        const message = createBaseMsgUnjailResponse();
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
        return MsgUnjailResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUnjailResponse",
            value: MsgUnjailResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgUnjailResponse.decode(message.value);
    },
    toProto(message) {
        return MsgUnjailResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
            value: MsgUnjailResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map