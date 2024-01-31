import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { Height } from "../../../core/client/v1/client";
import { Long, isSet } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgTransfer() {
    return {
        source_port: "",
        source_channel: "",
        token: Coin.fromPartial({}),
        sender: "",
        receiver: "",
        timeout_height: Height.fromPartial({}),
        timeout_timestamp: Long.UZERO
    };
}
export const MsgTransfer = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
    aminoType: "cosmos-sdk/MsgTransfer",
    encode(message, writer = _m0.Writer.create()) {
        if (message.source_port !== "") {
            writer.uint32(10).string(message.source_port);
        }
        if (message.source_channel !== "") {
            writer.uint32(18).string(message.source_channel);
        }
        if (message.token !== undefined) {
            Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(42).string(message.receiver);
        }
        if (message.timeout_height !== undefined) {
            Height.encode(message.timeout_height, writer.uint32(50).fork()).ldelim();
        }
        if (!message.timeout_timestamp.isZero()) {
            writer.uint32(56).uint64(message.timeout_timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source_port = reader.string();
                    break;
                case 2:
                    message.source_channel = reader.string();
                    break;
                case 3:
                    message.token = Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.receiver = reader.string();
                    break;
                case 6:
                    message.timeout_height = Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.timeout_timestamp = reader.uint64();
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
            source_port: isSet(object.source_port) ? String(object.source_port) : "",
            source_channel: isSet(object.source_channel) ? String(object.source_channel) : "",
            token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            timeout_height: isSet(object.timeout_height) ? Height.fromJSON(object.timeout_height) : undefined,
            timeout_timestamp: isSet(object.timeout_timestamp) ? Long.fromValue(object.timeout_timestamp) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.source_port !== undefined && (obj.source_port = message.source_port);
        message.source_channel !== undefined && (obj.source_channel = message.source_channel);
        message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.timeout_height !== undefined && (obj.timeout_height = message.timeout_height ? Height.toJSON(message.timeout_height) : undefined);
        message.timeout_timestamp !== undefined && (obj.timeout_timestamp = (message.timeout_timestamp || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgTransfer();
        message.source_port = object.source_port ?? "";
        message.source_channel = object.source_channel ?? "";
        message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
        message.sender = object.sender ?? "";
        message.receiver = object.receiver ?? "";
        message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? Height.fromPartial(object.timeout_height) : undefined;
        message.timeout_timestamp = object.timeout_timestamp !== undefined && object.timeout_timestamp !== null ? Long.fromValue(object.timeout_timestamp) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            source_port: object.source_port,
            source_channel: object.source_channel,
            token: object?.token ? Coin.fromAmino(object.token) : undefined,
            sender: object.sender,
            receiver: object.receiver,
            timeout_height: object?.timeout_height ? Height.fromAmino(object.timeout_height) : undefined,
            timeout_timestamp: Long.fromString(object.timeout_timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.source_port = message.source_port;
        obj.source_channel = message.source_channel;
        obj.token = message.token ? Coin.toAmino(message.token) : undefined;
        obj.sender = message.sender;
        obj.receiver = message.receiver;
        obj.timeout_height = message.timeout_height ? Height.toAmino(message.timeout_height) : {};
        obj.timeout_timestamp = message.timeout_timestamp ? message.timeout_timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgTransfer.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransfer",
            value: MsgTransfer.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTransfer.decode(message.value);
    },
    toProto(message) {
        return MsgTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
            value: MsgTransfer.encode(message).finish()
        };
    }
};
function createBaseMsgTransferResponse() {
    return {};
}
export const MsgTransferResponse = {
    typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
    aminoType: "cosmos-sdk/MsgTransferResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferResponse();
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
        const message = createBaseMsgTransferResponse();
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
        return MsgTransferResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgTransferResponse",
            value: MsgTransferResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgTransferResponse.decode(message.value);
    },
    toProto(message) {
        return MsgTransferResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
            value: MsgTransferResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map