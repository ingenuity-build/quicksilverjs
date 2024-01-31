import { Grant, GenericAuthorization } from "./authz";
import { Any } from "../../../google/protobuf/any";
import { SendAuthorization } from "../../bank/v1beta1/authz";
import { StakeAuthorization } from "../../staking/v1beta1/authz";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseMsgGrant() {
    return {
        granter: "",
        grantee: "",
        grant: Grant.fromPartial({})
    };
}
export const MsgGrant = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
    aminoType: "cosmos-sdk/MsgGrant",
    encode(message, writer = _m0.Writer.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.grant !== undefined) {
            Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrant();
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
                    message.grant = Grant.decode(reader, reader.uint32());
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
            grant: isSet(object.grant) ? Grant.fromJSON(object.grant) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.grant !== undefined && (obj.grant = message.grant ? Grant.toJSON(message.grant) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgGrant();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.grant = object.grant !== undefined && object.grant !== null ? Grant.fromPartial(object.grant) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            granter: object.granter,
            grantee: object.grantee,
            grant: object?.grant ? Grant.fromAmino(object.grant) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.grant = message.grant ? Grant.toAmino(message.grant) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgGrant.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrant",
            value: MsgGrant.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgGrant.decode(message.value);
    },
    toProto(message) {
        return MsgGrant.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
            value: MsgGrant.encode(message).finish()
        };
    }
};
function createBaseMsgExecResponse() {
    return {
        results: []
    };
}
export const MsgExecResponse = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
    aminoType: "cosmos-sdk/MsgExecResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.results) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.results.push(reader.bytes());
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
            results: Array.isArray(object?.results) ? object.results.map((e) => bytesFromBase64(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.results) {
            obj.results = message.results.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.results = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExecResponse();
        message.results = object.results?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            results: Array.isArray(object?.results) ? object.results.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.results) {
            obj.results = message.results.map(e => e);
        }
        else {
            obj.results = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExecResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgExecResponse",
            value: MsgExecResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExecResponse.decode(message.value);
    },
    toProto(message) {
        return MsgExecResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
            value: MsgExecResponse.encode(message).finish()
        };
    }
};
function createBaseMsgExec() {
    return {
        grantee: "",
        msgs: []
    };
}
export const MsgExec = {
    typeUrl: "/cosmos.authz.v1beta1.MsgExec",
    aminoType: "cosmos-sdk/MsgExec",
    encode(message, writer = _m0.Writer.create()) {
        if (message.grantee !== "") {
            writer.uint32(10).string(message.grantee);
        }
        for (const v of message.msgs) {
            Any.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.grantee = reader.string();
                    break;
                case 2:
                    message.msgs.push(Sdk_MsgcosmosauthzAuthorization_InterfaceDecoder(reader));
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
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => Any.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.grantee !== undefined && (obj.grantee = message.grantee);
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? Any.toJSON(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgExec();
        message.grantee = object.grantee ?? "";
        message.msgs = object.msgs?.map(e => Any.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            grantee: object.grantee,
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => Sdk_MsgcosmosauthzAuthorization_FromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.grantee = message.grantee;
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? Sdk_MsgcosmosauthzAuthorization_ToAmino(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgExec.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgExec",
            value: MsgExec.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgExec.decode(message.value);
    },
    toProto(message) {
        return MsgExec.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgExec",
            value: MsgExec.encode(message).finish()
        };
    }
};
function createBaseMsgGrantResponse() {
    return {};
}
export const MsgGrantResponse = {
    typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
    aminoType: "cosmos-sdk/MsgGrantResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGrantResponse();
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
        const message = createBaseMsgGrantResponse();
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
        return MsgGrantResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgGrantResponse",
            value: MsgGrantResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgGrantResponse.decode(message.value);
    },
    toProto(message) {
        return MsgGrantResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
            value: MsgGrantResponse.encode(message).finish()
        };
    }
};
function createBaseMsgRevoke() {
    return {
        granter: "",
        grantee: "",
        msg_type_url: ""
    };
}
export const MsgRevoke = {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
    aminoType: "cosmos-sdk/MsgRevoke",
    encode(message, writer = _m0.Writer.create()) {
        if (message.granter !== "") {
            writer.uint32(10).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(18).string(message.grantee);
        }
        if (message.msg_type_url !== "") {
            writer.uint32(26).string(message.msg_type_url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevoke();
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
                    message.msg_type_url = reader.string();
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
            msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgRevoke();
        message.granter = object.granter ?? "";
        message.grantee = object.grantee ?? "";
        message.msg_type_url = object.msg_type_url ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            granter: object.granter,
            grantee: object.grantee,
            msg_type_url: object.msg_type_url
        };
    },
    toAmino(message) {
        const obj = {};
        obj.granter = message.granter;
        obj.grantee = message.grantee;
        obj.msg_type_url = message.msg_type_url;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgRevoke.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevoke",
            value: MsgRevoke.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRevoke.decode(message.value);
    },
    toProto(message) {
        return MsgRevoke.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
            value: MsgRevoke.encode(message).finish()
        };
    }
};
function createBaseMsgRevokeResponse() {
    return {};
}
export const MsgRevokeResponse = {
    typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
    aminoType: "cosmos-sdk/MsgRevokeResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRevokeResponse();
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
        const message = createBaseMsgRevokeResponse();
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
        return MsgRevokeResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgRevokeResponse",
            value: MsgRevokeResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgRevokeResponse.decode(message.value);
    },
    toProto(message) {
        return MsgRevokeResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
            value: MsgRevokeResponse.encode(message).finish()
        };
    }
};
export const Sdk_Msg_InterfaceDecoder = (input) => {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
export const Sdk_Msg_FromAmino = (content) => {
    return Any.fromAmino(content);
};
export const Sdk_Msg_ToAmino = (content) => {
    return Any.toAmino(content);
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
//# sourceMappingURL=tx.js.map