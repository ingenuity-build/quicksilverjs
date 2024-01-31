import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { SendAuthorization } from "../../bank/v1beta1/authz";
import { StakeAuthorization } from "../../staking/v1beta1/authz";
import * as _m0 from "protobufjs/minimal";
import { isSet, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
function createBaseGenericAuthorization() {
    return {
        $typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
        msg: ""
    };
}
export const GenericAuthorization = {
    typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
    aminoType: "cosmos-sdk/GenericAuthorization",
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg !== "") {
            writer.uint32(10).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenericAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
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
            msg: isSet(object.msg) ? String(object.msg) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenericAuthorization();
        message.msg = object.msg ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            msg: object.msg
        };
    },
    toAmino(message) {
        const obj = {};
        obj.msg = message.msg;
        return obj;
    },
    fromAminoMsg(object) {
        return GenericAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GenericAuthorization",
            value: GenericAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GenericAuthorization.decode(message.value);
    },
    toProto(message) {
        return GenericAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
            value: GenericAuthorization.encode(message).finish()
        };
    }
};
function createBaseGrant() {
    return {
        authorization: Any.fromPartial({}),
        expiration: undefined
    };
}
export const Grant = {
    typeUrl: "/cosmos.authz.v1beta1.Grant",
    aminoType: "cosmos-sdk/Grant",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authorization !== undefined) {
            Any.encode(message.authorization, writer.uint32(10).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authorization = Cosmos_authzAuthorization_InterfaceDecoder(reader);
                    break;
                case 2:
                    message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            authorization: isSet(object.authorization) ? Any.fromJSON(object.authorization) : undefined,
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authorization !== undefined && (obj.authorization = message.authorization ? Any.toJSON(message.authorization) : undefined);
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrant();
        message.authorization = object.authorization !== undefined && object.authorization !== null ? Any.fromPartial(object.authorization) : undefined;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            authorization: object?.authorization ? Cosmos_authzAuthorization_FromAmino(object.authorization) : undefined,
            expiration: object?.expiration
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authorization = message.authorization ? Cosmos_authzAuthorization_ToAmino(message.authorization) : undefined;
        obj.expiration = message.expiration;
        return obj;
    },
    fromAminoMsg(object) {
        return Grant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Grant",
            value: Grant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Grant.decode(message.value);
    },
    toProto(message) {
        return Grant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.Grant",
            value: Grant.encode(message).finish()
        };
    }
};
function createBaseGrantAuthorization() {
    return {
        granter: "",
        grantee: "",
        authorization: Any.fromPartial({}),
        expiration: new Date()
    };
}
export const GrantAuthorization = {
    typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
    aminoType: "cosmos-sdk/GrantAuthorization",
    encode(message, writer = _m0.Writer.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.authorization !== undefined) {
            Any.encode(message.authorization, writer.uint32(26).fork()).ldelim();
        }
        if (message.expiration !== undefined) {
            Timestamp.encode(toTimestamp(message.expiration), writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantAuthorization();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.granter = reader.string();
                    break;
                case 2:
                    message.grantee = reader.string();
                    break;
                case 3:
                    message.authorization = Cosmos_authzAuthorization_InterfaceDecoder(reader);
                    break;
                case 4:
                    message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            authorization: isSet(object.authorization) ? Any.fromJSON(object.authorization) : undefined,
            expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.authorization !== undefined && (obj.authorization = message.authorization ? Any.toJSON(message.authorization) : undefined);
        message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrantAuthorization();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.authorization = object.authorization !== undefined && object.authorization !== null ? Any.fromPartial(object.authorization) : undefined;
        message.expiration = object.expiration ?? undefined;
        return message;
    },
    fromAmino(object) {
        return {
            granter: object.granter,
            grantee: object.grantee,
            authorization: object?.authorization ? Cosmos_authzAuthorization_FromAmino(object.authorization) : undefined,
            expiration: object.expiration
        };
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.authorization = message.authorization ? Cosmos_authzAuthorization_ToAmino(message.authorization) : undefined;
        obj.expiration = message.expiration;
        return obj;
    },
    fromAminoMsg(object) {
        return GrantAuthorization.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GrantAuthorization",
            value: GrantAuthorization.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GrantAuthorization.decode(message.value);
    },
    toProto(message) {
        return GrantAuthorization.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GrantAuthorization",
            value: GrantAuthorization.encode(message).finish()
        };
    }
};
function createBaseGrantQueueItem() {
    return {
        msg_type_urls: []
    };
}
export const GrantQueueItem = {
    typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
    aminoType: "cosmos-sdk/GrantQueueItem",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.msg_type_urls) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGrantQueueItem();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg_type_urls.push(reader.string());
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
            msg_type_urls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.msg_type_urls) {
            obj.msg_type_urls = message.msg_type_urls.map(e => e);
        }
        else {
            obj.msg_type_urls = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGrantQueueItem();
        message.msg_type_urls = object.msg_type_urls?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            msg_type_urls: Array.isArray(object?.msg_type_urls) ? object.msg_type_urls.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.msg_type_urls) {
            obj.msg_type_urls = message.msg_type_urls.map(e => e);
        }
        else {
            obj.msg_type_urls = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return GrantQueueItem.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GrantQueueItem",
            value: GrantQueueItem.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GrantQueueItem.decode(message.value);
    },
    toProto(message) {
        return GrantQueueItem.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.GrantQueueItem",
            value: GrantQueueItem.encode(message).finish()
        };
    }
};
export const Cosmos_authzAuthorization_InterfaceDecoder = (input) => {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.authz.v1beta1.GenericAuthorization":
            return GenericAuthorization.decode(data.value);
        case "/cosmos.bank.v1beta1.SendAuthorization":
            return SendAuthorization.decode(data.value);
        case "/cosmos.staking.v1beta1.StakeAuthorization":
            return StakeAuthorization.decode(data.value);
        default:
            return data;
    }
};
export const Cosmos_authzAuthorization_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/GenericAuthorization":
            return Any.fromPartial({
                typeUrl: "/cosmos.authz.v1beta1.GenericAuthorization",
                value: GenericAuthorization.encode(GenericAuthorization.fromPartial(GenericAuthorization.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/SendAuthorization":
            return Any.fromPartial({
                typeUrl: "/cosmos.bank.v1beta1.SendAuthorization",
                value: SendAuthorization.encode(SendAuthorization.fromPartial(SendAuthorization.fromAmino(content.value))).finish()
            });
        case "cosmos-sdk/StakeAuthorization":
            return Any.fromPartial({
                typeUrl: "/cosmos.staking.v1beta1.StakeAuthorization",
                value: StakeAuthorization.encode(StakeAuthorization.fromPartial(StakeAuthorization.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const Cosmos_authzAuthorization_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.authz.v1beta1.GenericAuthorization":
            return {
                type: "cosmos-sdk/GenericAuthorization",
                value: GenericAuthorization.toAmino(GenericAuthorization.decode(content.value))
            };
        case "/cosmos.bank.v1beta1.SendAuthorization":
            return {
                type: "cosmos-sdk/SendAuthorization",
                value: SendAuthorization.toAmino(SendAuthorization.decode(content.value))
            };
        case "/cosmos.staking.v1beta1.StakeAuthorization":
            return {
                type: "cosmos-sdk/StakeAuthorization",
                value: StakeAuthorization.toAmino(StakeAuthorization.decode(content.value))
            };
        default:
            return Any.toAmino(content);
    }
};
//# sourceMappingURL=authz.js.map