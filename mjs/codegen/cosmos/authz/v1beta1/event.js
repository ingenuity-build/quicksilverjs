import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseEventGrant() {
    return {
        msg_type_url: "",
        granter: "",
        grantee: ""
    };
}
export const EventGrant = {
    typeUrl: "/cosmos.authz.v1beta1.EventGrant",
    aminoType: "cosmos-sdk/EventGrant",
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg_type_url !== "") {
            writer.uint32(18).string(message.msg_type_url);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.msg_type_url = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
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
            msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventGrant();
        message.msg_type_url = object.msg_type_url ?? "";
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            msg_type_url: object.msg_type_url,
            granter: object.granter,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.msg_type_url = message.msg_type_url;
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return EventGrant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventGrant",
            value: EventGrant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventGrant.decode(message.value);
    },
    toProto(message) {
        return EventGrant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.EventGrant",
            value: EventGrant.encode(message).finish()
        };
    }
};
function createBaseEventRevoke() {
    return {
        msg_type_url: "",
        granter: "",
        grantee: ""
    };
}
export const EventRevoke = {
    typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
    aminoType: "cosmos-sdk/EventRevoke",
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg_type_url !== "") {
            writer.uint32(18).string(message.msg_type_url);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRevoke();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.msg_type_url = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
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
            msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEventRevoke();
        message.msg_type_url = object.msg_type_url ?? "";
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            msg_type_url: object.msg_type_url,
            granter: object.granter,
            grantee: object.grantee
        };
    },
    toAmino(message) {
        const obj = {};
        obj.msg_type_url = message.msg_type_url;
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        return obj;
    },
    fromAminoMsg(object) {
        return EventRevoke.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/EventRevoke",
            value: EventRevoke.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return EventRevoke.decode(message.value);
    },
    toProto(message) {
        return EventRevoke.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.EventRevoke",
            value: EventRevoke.encode(message).finish()
        };
    }
};
//# sourceMappingURL=event.js.map