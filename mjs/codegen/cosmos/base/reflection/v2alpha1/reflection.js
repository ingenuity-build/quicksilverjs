import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
function createBaseAppDescriptor() {
    return {
        authn: AuthnDescriptor.fromPartial({}),
        chain: ChainDescriptor.fromPartial({}),
        codec: CodecDescriptor.fromPartial({}),
        configuration: ConfigurationDescriptor.fromPartial({}),
        query_services: QueryServicesDescriptor.fromPartial({}),
        tx: TxDescriptor.fromPartial({})
    };
}
export const AppDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
    aminoType: "cosmos-sdk/AppDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authn !== undefined) {
            AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain !== undefined) {
            ChainDescriptor.encode(message.chain, writer.uint32(18).fork()).ldelim();
        }
        if (message.codec !== undefined) {
            CodecDescriptor.encode(message.codec, writer.uint32(26).fork()).ldelim();
        }
        if (message.configuration !== undefined) {
            ConfigurationDescriptor.encode(message.configuration, writer.uint32(34).fork()).ldelim();
        }
        if (message.query_services !== undefined) {
            QueryServicesDescriptor.encode(message.query_services, writer.uint32(42).fork()).ldelim();
        }
        if (message.tx !== undefined) {
            TxDescriptor.encode(message.tx, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authn = AuthnDescriptor.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain = ChainDescriptor.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.codec = CodecDescriptor.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.configuration = ConfigurationDescriptor.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.query_services = QueryServicesDescriptor.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.tx = TxDescriptor.decode(reader, reader.uint32());
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
            authn: isSet(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined,
            chain: isSet(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined,
            codec: isSet(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined,
            configuration: isSet(object.configuration) ? ConfigurationDescriptor.fromJSON(object.configuration) : undefined,
            query_services: isSet(object.query_services) ? QueryServicesDescriptor.fromJSON(object.query_services) : undefined,
            tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authn !== undefined && (obj.authn = message.authn ? AuthnDescriptor.toJSON(message.authn) : undefined);
        message.chain !== undefined && (obj.chain = message.chain ? ChainDescriptor.toJSON(message.chain) : undefined);
        message.codec !== undefined && (obj.codec = message.codec ? CodecDescriptor.toJSON(message.codec) : undefined);
        message.configuration !== undefined && (obj.configuration = message.configuration ? ConfigurationDescriptor.toJSON(message.configuration) : undefined);
        message.query_services !== undefined && (obj.query_services = message.query_services ? QueryServicesDescriptor.toJSON(message.query_services) : undefined);
        message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAppDescriptor();
        message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
        message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
        message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
        message.configuration = object.configuration !== undefined && object.configuration !== null ? ConfigurationDescriptor.fromPartial(object.configuration) : undefined;
        message.query_services = object.query_services !== undefined && object.query_services !== null ? QueryServicesDescriptor.fromPartial(object.query_services) : undefined;
        message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            authn: object?.authn ? AuthnDescriptor.fromAmino(object.authn) : undefined,
            chain: object?.chain ? ChainDescriptor.fromAmino(object.chain) : undefined,
            codec: object?.codec ? CodecDescriptor.fromAmino(object.codec) : undefined,
            configuration: object?.configuration ? ConfigurationDescriptor.fromAmino(object.configuration) : undefined,
            query_services: object?.query_services ? QueryServicesDescriptor.fromAmino(object.query_services) : undefined,
            tx: object?.tx ? TxDescriptor.fromAmino(object.tx) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authn = message.authn ? AuthnDescriptor.toAmino(message.authn) : undefined;
        obj.chain = message.chain ? ChainDescriptor.toAmino(message.chain) : undefined;
        obj.codec = message.codec ? CodecDescriptor.toAmino(message.codec) : undefined;
        obj.configuration = message.configuration ? ConfigurationDescriptor.toAmino(message.configuration) : undefined;
        obj.query_services = message.query_services ? QueryServicesDescriptor.toAmino(message.query_services) : undefined;
        obj.tx = message.tx ? TxDescriptor.toAmino(message.tx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return AppDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AppDescriptor",
            value: AppDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AppDescriptor.decode(message.value);
    },
    toProto(message) {
        return AppDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.AppDescriptor",
            value: AppDescriptor.encode(message).finish()
        };
    }
};
function createBaseTxDescriptor() {
    return {
        fullname: "",
        msgs: []
    };
}
export const TxDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
    aminoType: "cosmos-sdk/TxDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.msgs) {
            MsgDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.msgs.push(MsgDescriptor.decode(reader, reader.uint32()));
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => MsgDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? MsgDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxDescriptor();
        message.fullname = object.fullname ?? "";
        message.msgs = object.msgs?.map(e => MsgDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            fullname: object.fullname,
            msgs: Array.isArray(object?.msgs) ? object.msgs.map((e) => MsgDescriptor.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.msgs) {
            obj.msgs = message.msgs.map(e => e ? MsgDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.msgs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return TxDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TxDescriptor",
            value: TxDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TxDescriptor.decode(message.value);
    },
    toProto(message) {
        return TxDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.TxDescriptor",
            value: TxDescriptor.encode(message).finish()
        };
    }
};
function createBaseAuthnDescriptor() {
    return {
        sign_modes: []
    };
}
export const AuthnDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
    aminoType: "cosmos-sdk/AuthnDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.sign_modes) {
            SigningModeDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthnDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sign_modes.push(SigningModeDescriptor.decode(reader, reader.uint32()));
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
            sign_modes: Array.isArray(object?.sign_modes) ? object.sign_modes.map((e) => SigningModeDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sign_modes) {
            obj.sign_modes = message.sign_modes.map(e => e ? SigningModeDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.sign_modes = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAuthnDescriptor();
        message.sign_modes = object.sign_modes?.map(e => SigningModeDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            sign_modes: Array.isArray(object?.sign_modes) ? object.sign_modes.map((e) => SigningModeDescriptor.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.sign_modes) {
            obj.sign_modes = message.sign_modes.map(e => e ? SigningModeDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.sign_modes = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return AuthnDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/AuthnDescriptor",
            value: AuthnDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return AuthnDescriptor.decode(message.value);
    },
    toProto(message) {
        return AuthnDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.AuthnDescriptor",
            value: AuthnDescriptor.encode(message).finish()
        };
    }
};
function createBaseSigningModeDescriptor() {
    return {
        name: "",
        number: 0,
        authn_info_provider_method_fullname: ""
    };
}
export const SigningModeDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
    aminoType: "cosmos-sdk/SigningModeDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.number !== 0) {
            writer.uint32(16).int32(message.number);
        }
        if (message.authn_info_provider_method_fullname !== "") {
            writer.uint32(26).string(message.authn_info_provider_method_fullname);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningModeDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.authn_info_provider_method_fullname = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            number: isSet(object.number) ? Number(object.number) : 0,
            authn_info_provider_method_fullname: isSet(object.authn_info_provider_method_fullname) ? String(object.authn_info_provider_method_fullname) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.number !== undefined && (obj.number = Math.round(message.number));
        message.authn_info_provider_method_fullname !== undefined && (obj.authn_info_provider_method_fullname = message.authn_info_provider_method_fullname);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSigningModeDescriptor();
        message.name = object.name ?? "";
        message.number = object.number ?? 0;
        message.authn_info_provider_method_fullname = object.authn_info_provider_method_fullname ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            number: object.number,
            authn_info_provider_method_fullname: object.authn_info_provider_method_fullname
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.number = message.number;
        obj.authn_info_provider_method_fullname = message.authn_info_provider_method_fullname;
        return obj;
    },
    fromAminoMsg(object) {
        return SigningModeDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SigningModeDescriptor",
            value: SigningModeDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SigningModeDescriptor.decode(message.value);
    },
    toProto(message) {
        return SigningModeDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.SigningModeDescriptor",
            value: SigningModeDescriptor.encode(message).finish()
        };
    }
};
function createBaseChainDescriptor() {
    return {
        id: ""
    };
}
export const ChainDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
    aminoType: "cosmos-sdk/ChainDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChainDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
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
            id: isSet(object.id) ? String(object.id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChainDescriptor();
        message.id = object.id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        return obj;
    },
    fromAminoMsg(object) {
        return ChainDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ChainDescriptor",
            value: ChainDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ChainDescriptor.decode(message.value);
    },
    toProto(message) {
        return ChainDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.ChainDescriptor",
            value: ChainDescriptor.encode(message).finish()
        };
    }
};
function createBaseCodecDescriptor() {
    return {
        interfaces: []
    };
}
export const CodecDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
    aminoType: "cosmos-sdk/CodecDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.interfaces) {
            InterfaceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodecDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interfaces.push(InterfaceDescriptor.decode(reader, reader.uint32()));
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
            interfaces: Array.isArray(object?.interfaces) ? object.interfaces.map((e) => InterfaceDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.interfaces) {
            obj.interfaces = message.interfaces.map(e => e ? InterfaceDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.interfaces = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCodecDescriptor();
        message.interfaces = object.interfaces?.map(e => InterfaceDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            interfaces: Array.isArray(object?.interfaces) ? object.interfaces.map((e) => InterfaceDescriptor.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.interfaces) {
            obj.interfaces = message.interfaces.map(e => e ? InterfaceDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.interfaces = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CodecDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/CodecDescriptor",
            value: CodecDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return CodecDescriptor.decode(message.value);
    },
    toProto(message) {
        return CodecDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.CodecDescriptor",
            value: CodecDescriptor.encode(message).finish()
        };
    }
};
function createBaseInterfaceDescriptor() {
    return {
        fullname: "",
        interface_accepting_messages: [],
        interface_implementers: []
    };
}
export const InterfaceDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
    aminoType: "cosmos-sdk/InterfaceDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.interface_accepting_messages) {
            InterfaceAcceptingMessageDescriptor.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.interface_implementers) {
            InterfaceImplementerDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterfaceDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.interface_accepting_messages.push(InterfaceAcceptingMessageDescriptor.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.interface_implementers.push(InterfaceImplementerDescriptor.decode(reader, reader.uint32()));
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            interface_accepting_messages: Array.isArray(object?.interface_accepting_messages) ? object.interface_accepting_messages.map((e) => InterfaceAcceptingMessageDescriptor.fromJSON(e)) : [],
            interface_implementers: Array.isArray(object?.interface_implementers) ? object.interface_implementers.map((e) => InterfaceImplementerDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.interface_accepting_messages) {
            obj.interface_accepting_messages = message.interface_accepting_messages.map(e => e ? InterfaceAcceptingMessageDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.interface_accepting_messages = [];
        }
        if (message.interface_implementers) {
            obj.interface_implementers = message.interface_implementers.map(e => e ? InterfaceImplementerDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.interface_implementers = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterfaceDescriptor();
        message.fullname = object.fullname ?? "";
        message.interface_accepting_messages = object.interface_accepting_messages?.map(e => InterfaceAcceptingMessageDescriptor.fromPartial(e)) || [];
        message.interface_implementers = object.interface_implementers?.map(e => InterfaceImplementerDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            fullname: object.fullname,
            interface_accepting_messages: Array.isArray(object?.interface_accepting_messages) ? object.interface_accepting_messages.map((e) => InterfaceAcceptingMessageDescriptor.fromAmino(e)) : [],
            interface_implementers: Array.isArray(object?.interface_implementers) ? object.interface_implementers.map((e) => InterfaceImplementerDescriptor.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.interface_accepting_messages) {
            obj.interface_accepting_messages = message.interface_accepting_messages.map(e => e ? InterfaceAcceptingMessageDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.interface_accepting_messages = [];
        }
        if (message.interface_implementers) {
            obj.interface_implementers = message.interface_implementers.map(e => e ? InterfaceImplementerDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.interface_implementers = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return InterfaceDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterfaceDescriptor",
            value: InterfaceDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return InterfaceDescriptor.decode(message.value);
    },
    toProto(message) {
        return InterfaceDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceDescriptor",
            value: InterfaceDescriptor.encode(message).finish()
        };
    }
};
function createBaseInterfaceImplementerDescriptor() {
    return {
        fullname: "",
        type_url: ""
    };
}
export const InterfaceImplementerDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
    aminoType: "cosmos-sdk/InterfaceImplementerDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        if (message.type_url !== "") {
            writer.uint32(18).string(message.type_url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterfaceImplementerDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.type_url = reader.string();
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            type_url: isSet(object.type_url) ? String(object.type_url) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        message.type_url !== undefined && (obj.type_url = message.type_url);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterfaceImplementerDescriptor();
        message.fullname = object.fullname ?? "";
        message.type_url = object.type_url ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            fullname: object.fullname,
            type_url: object.type_url
        };
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        obj.type_url = message.type_url;
        return obj;
    },
    fromAminoMsg(object) {
        return InterfaceImplementerDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterfaceImplementerDescriptor",
            value: InterfaceImplementerDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return InterfaceImplementerDescriptor.decode(message.value);
    },
    toProto(message) {
        return InterfaceImplementerDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceImplementerDescriptor",
            value: InterfaceImplementerDescriptor.encode(message).finish()
        };
    }
};
function createBaseInterfaceAcceptingMessageDescriptor() {
    return {
        fullname: "",
        field_descriptor_names: []
    };
}
export const InterfaceAcceptingMessageDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
    aminoType: "cosmos-sdk/InterfaceAcceptingMessageDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        for (const v of message.field_descriptor_names) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInterfaceAcceptingMessageDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.field_descriptor_names.push(reader.string());
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            field_descriptor_names: Array.isArray(object?.field_descriptor_names) ? object.field_descriptor_names.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        if (message.field_descriptor_names) {
            obj.field_descriptor_names = message.field_descriptor_names.map(e => e);
        }
        else {
            obj.field_descriptor_names = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseInterfaceAcceptingMessageDescriptor();
        message.fullname = object.fullname ?? "";
        message.field_descriptor_names = object.field_descriptor_names?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            fullname: object.fullname,
            field_descriptor_names: Array.isArray(object?.field_descriptor_names) ? object.field_descriptor_names.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        if (message.field_descriptor_names) {
            obj.field_descriptor_names = message.field_descriptor_names.map(e => e);
        }
        else {
            obj.field_descriptor_names = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return InterfaceAcceptingMessageDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/InterfaceAcceptingMessageDescriptor",
            value: InterfaceAcceptingMessageDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return InterfaceAcceptingMessageDescriptor.decode(message.value);
    },
    toProto(message) {
        return InterfaceAcceptingMessageDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.InterfaceAcceptingMessageDescriptor",
            value: InterfaceAcceptingMessageDescriptor.encode(message).finish()
        };
    }
};
function createBaseConfigurationDescriptor() {
    return {
        bech32_account_address_prefix: ""
    };
}
export const ConfigurationDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
    aminoType: "cosmos-sdk/ConfigurationDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.bech32_account_address_prefix !== "") {
            writer.uint32(10).string(message.bech32_account_address_prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigurationDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bech32_account_address_prefix = reader.string();
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
            bech32_account_address_prefix: isSet(object.bech32_account_address_prefix) ? String(object.bech32_account_address_prefix) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.bech32_account_address_prefix !== undefined && (obj.bech32_account_address_prefix = message.bech32_account_address_prefix);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConfigurationDescriptor();
        message.bech32_account_address_prefix = object.bech32_account_address_prefix ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            bech32_account_address_prefix: object.bech32_account_address_prefix
        };
    },
    toAmino(message) {
        const obj = {};
        obj.bech32_account_address_prefix = message.bech32_account_address_prefix;
        return obj;
    },
    fromAminoMsg(object) {
        return ConfigurationDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConfigurationDescriptor",
            value: ConfigurationDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConfigurationDescriptor.decode(message.value);
    },
    toProto(message) {
        return ConfigurationDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.ConfigurationDescriptor",
            value: ConfigurationDescriptor.encode(message).finish()
        };
    }
};
function createBaseMsgDescriptor() {
    return {
        msg_type_url: ""
    };
}
export const MsgDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
    aminoType: "cosmos-sdk/MsgDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg_type_url !== "") {
            writer.uint32(10).string(message.msg_type_url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            msg_type_url: isSet(object.msg_type_url) ? String(object.msg_type_url) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg_type_url !== undefined && (obj.msg_type_url = message.msg_type_url);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDescriptor();
        message.msg_type_url = object.msg_type_url ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            msg_type_url: object.msg_type_url
        };
    },
    toAmino(message) {
        const obj = {};
        obj.msg_type_url = message.msg_type_url;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDescriptor",
            value: MsgDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDescriptor.decode(message.value);
    },
    toProto(message) {
        return MsgDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.MsgDescriptor",
            value: MsgDescriptor.encode(message).finish()
        };
    }
};
function createBaseGetAuthnDescriptorRequest() {
    return {};
}
export const GetAuthnDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
    aminoType: "cosmos-sdk/GetAuthnDescriptorRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthnDescriptorRequest();
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
        const message = createBaseGetAuthnDescriptorRequest();
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
        return GetAuthnDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetAuthnDescriptorRequest",
            value: GetAuthnDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetAuthnDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return GetAuthnDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorRequest",
            value: GetAuthnDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetAuthnDescriptorResponse() {
    return {
        authn: AuthnDescriptor.fromPartial({})
    };
}
export const GetAuthnDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
    aminoType: "cosmos-sdk/GetAuthnDescriptorResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.authn !== undefined) {
            AuthnDescriptor.encode(message.authn, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAuthnDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authn = AuthnDescriptor.decode(reader, reader.uint32());
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
            authn: isSet(object.authn) ? AuthnDescriptor.fromJSON(object.authn) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.authn !== undefined && (obj.authn = message.authn ? AuthnDescriptor.toJSON(message.authn) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetAuthnDescriptorResponse();
        message.authn = object.authn !== undefined && object.authn !== null ? AuthnDescriptor.fromPartial(object.authn) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            authn: object?.authn ? AuthnDescriptor.fromAmino(object.authn) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.authn = message.authn ? AuthnDescriptor.toAmino(message.authn) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetAuthnDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetAuthnDescriptorResponse",
            value: GetAuthnDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetAuthnDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return GetAuthnDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetAuthnDescriptorResponse",
            value: GetAuthnDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetChainDescriptorRequest() {
    return {};
}
export const GetChainDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
    aminoType: "cosmos-sdk/GetChainDescriptorRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetChainDescriptorRequest();
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
        const message = createBaseGetChainDescriptorRequest();
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
        return GetChainDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetChainDescriptorRequest",
            value: GetChainDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetChainDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return GetChainDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorRequest",
            value: GetChainDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetChainDescriptorResponse() {
    return {
        chain: ChainDescriptor.fromPartial({})
    };
}
export const GetChainDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
    aminoType: "cosmos-sdk/GetChainDescriptorResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain !== undefined) {
            ChainDescriptor.encode(message.chain, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetChainDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain = ChainDescriptor.decode(reader, reader.uint32());
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
            chain: isSet(object.chain) ? ChainDescriptor.fromJSON(object.chain) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain !== undefined && (obj.chain = message.chain ? ChainDescriptor.toJSON(message.chain) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetChainDescriptorResponse();
        message.chain = object.chain !== undefined && object.chain !== null ? ChainDescriptor.fromPartial(object.chain) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            chain: object?.chain ? ChainDescriptor.fromAmino(object.chain) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain ? ChainDescriptor.toAmino(message.chain) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetChainDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetChainDescriptorResponse",
            value: GetChainDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetChainDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return GetChainDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetChainDescriptorResponse",
            value: GetChainDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetCodecDescriptorRequest() {
    return {};
}
export const GetCodecDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
    aminoType: "cosmos-sdk/GetCodecDescriptorRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCodecDescriptorRequest();
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
        const message = createBaseGetCodecDescriptorRequest();
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
        return GetCodecDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetCodecDescriptorRequest",
            value: GetCodecDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetCodecDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return GetCodecDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorRequest",
            value: GetCodecDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetCodecDescriptorResponse() {
    return {
        codec: CodecDescriptor.fromPartial({})
    };
}
export const GetCodecDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
    aminoType: "cosmos-sdk/GetCodecDescriptorResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.codec !== undefined) {
            CodecDescriptor.encode(message.codec, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetCodecDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.codec = CodecDescriptor.decode(reader, reader.uint32());
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
            codec: isSet(object.codec) ? CodecDescriptor.fromJSON(object.codec) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.codec !== undefined && (obj.codec = message.codec ? CodecDescriptor.toJSON(message.codec) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetCodecDescriptorResponse();
        message.codec = object.codec !== undefined && object.codec !== null ? CodecDescriptor.fromPartial(object.codec) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            codec: object?.codec ? CodecDescriptor.fromAmino(object.codec) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.codec = message.codec ? CodecDescriptor.toAmino(message.codec) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetCodecDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetCodecDescriptorResponse",
            value: GetCodecDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetCodecDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return GetCodecDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetCodecDescriptorResponse",
            value: GetCodecDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetConfigurationDescriptorRequest() {
    return {};
}
export const GetConfigurationDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
    aminoType: "cosmos-sdk/GetConfigurationDescriptorRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetConfigurationDescriptorRequest();
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
        const message = createBaseGetConfigurationDescriptorRequest();
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
        return GetConfigurationDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetConfigurationDescriptorRequest",
            value: GetConfigurationDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetConfigurationDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return GetConfigurationDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorRequest",
            value: GetConfigurationDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetConfigurationDescriptorResponse() {
    return {
        config: ConfigurationDescriptor.fromPartial({})
    };
}
export const GetConfigurationDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
    aminoType: "cosmos-sdk/GetConfigurationDescriptorResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.config !== undefined) {
            ConfigurationDescriptor.encode(message.config, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetConfigurationDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.config = ConfigurationDescriptor.decode(reader, reader.uint32());
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
            config: isSet(object.config) ? ConfigurationDescriptor.fromJSON(object.config) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.config !== undefined && (obj.config = message.config ? ConfigurationDescriptor.toJSON(message.config) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetConfigurationDescriptorResponse();
        message.config = object.config !== undefined && object.config !== null ? ConfigurationDescriptor.fromPartial(object.config) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            config: object?.config ? ConfigurationDescriptor.fromAmino(object.config) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.config = message.config ? ConfigurationDescriptor.toAmino(message.config) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetConfigurationDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetConfigurationDescriptorResponse",
            value: GetConfigurationDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetConfigurationDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return GetConfigurationDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetConfigurationDescriptorResponse",
            value: GetConfigurationDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetQueryServicesDescriptorRequest() {
    return {};
}
export const GetQueryServicesDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
    aminoType: "cosmos-sdk/GetQueryServicesDescriptorRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetQueryServicesDescriptorRequest();
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
        const message = createBaseGetQueryServicesDescriptorRequest();
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
        return GetQueryServicesDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetQueryServicesDescriptorRequest",
            value: GetQueryServicesDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetQueryServicesDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return GetQueryServicesDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorRequest",
            value: GetQueryServicesDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetQueryServicesDescriptorResponse() {
    return {
        queries: QueryServicesDescriptor.fromPartial({})
    };
}
export const GetQueryServicesDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
    aminoType: "cosmos-sdk/GetQueryServicesDescriptorResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.queries !== undefined) {
            QueryServicesDescriptor.encode(message.queries, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetQueryServicesDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queries = QueryServicesDescriptor.decode(reader, reader.uint32());
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
            queries: isSet(object.queries) ? QueryServicesDescriptor.fromJSON(object.queries) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.queries !== undefined && (obj.queries = message.queries ? QueryServicesDescriptor.toJSON(message.queries) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetQueryServicesDescriptorResponse();
        message.queries = object.queries !== undefined && object.queries !== null ? QueryServicesDescriptor.fromPartial(object.queries) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            queries: object?.queries ? QueryServicesDescriptor.fromAmino(object.queries) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.queries = message.queries ? QueryServicesDescriptor.toAmino(message.queries) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetQueryServicesDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetQueryServicesDescriptorResponse",
            value: GetQueryServicesDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetQueryServicesDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return GetQueryServicesDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetQueryServicesDescriptorResponse",
            value: GetQueryServicesDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseGetTxDescriptorRequest() {
    return {};
}
export const GetTxDescriptorRequest = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
    aminoType: "cosmos-sdk/GetTxDescriptorRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxDescriptorRequest();
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
        const message = createBaseGetTxDescriptorRequest();
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
        return GetTxDescriptorRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxDescriptorRequest",
            value: GetTxDescriptorRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetTxDescriptorRequest.decode(message.value);
    },
    toProto(message) {
        return GetTxDescriptorRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorRequest",
            value: GetTxDescriptorRequest.encode(message).finish()
        };
    }
};
function createBaseGetTxDescriptorResponse() {
    return {
        tx: TxDescriptor.fromPartial({})
    };
}
export const GetTxDescriptorResponse = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
    aminoType: "cosmos-sdk/GetTxDescriptorResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            TxDescriptor.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxDescriptorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = TxDescriptor.decode(reader, reader.uint32());
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
            tx: isSet(object.tx) ? TxDescriptor.fromJSON(object.tx) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? TxDescriptor.toJSON(message.tx) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxDescriptorResponse();
        message.tx = object.tx !== undefined && object.tx !== null ? TxDescriptor.fromPartial(object.tx) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            tx: object?.tx ? TxDescriptor.fromAmino(object.tx) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? TxDescriptor.toAmino(message.tx) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GetTxDescriptorResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxDescriptorResponse",
            value: GetTxDescriptorResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return GetTxDescriptorResponse.decode(message.value);
    },
    toProto(message) {
        return GetTxDescriptorResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.GetTxDescriptorResponse",
            value: GetTxDescriptorResponse.encode(message).finish()
        };
    }
};
function createBaseQueryServicesDescriptor() {
    return {
        query_services: []
    };
}
export const QueryServicesDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
    aminoType: "cosmos-sdk/QueryServicesDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.query_services) {
            QueryServiceDescriptor.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryServicesDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.query_services.push(QueryServiceDescriptor.decode(reader, reader.uint32()));
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
            query_services: Array.isArray(object?.query_services) ? object.query_services.map((e) => QueryServiceDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.query_services) {
            obj.query_services = message.query_services.map(e => e ? QueryServiceDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.query_services = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryServicesDescriptor();
        message.query_services = object.query_services?.map(e => QueryServiceDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            query_services: Array.isArray(object?.query_services) ? object.query_services.map((e) => QueryServiceDescriptor.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.query_services) {
            obj.query_services = message.query_services.map(e => e ? QueryServiceDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.query_services = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryServicesDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryServicesDescriptor",
            value: QueryServicesDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryServicesDescriptor.decode(message.value);
    },
    toProto(message) {
        return QueryServicesDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServicesDescriptor",
            value: QueryServicesDescriptor.encode(message).finish()
        };
    }
};
function createBaseQueryServiceDescriptor() {
    return {
        fullname: "",
        is_module: false,
        methods: []
    };
}
export const QueryServiceDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
    aminoType: "cosmos-sdk/QueryServiceDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.fullname !== "") {
            writer.uint32(10).string(message.fullname);
        }
        if (message.is_module === true) {
            writer.uint32(16).bool(message.is_module);
        }
        for (const v of message.methods) {
            QueryMethodDescriptor.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryServiceDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fullname = reader.string();
                    break;
                case 2:
                    message.is_module = reader.bool();
                    break;
                case 3:
                    message.methods.push(QueryMethodDescriptor.decode(reader, reader.uint32()));
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
            fullname: isSet(object.fullname) ? String(object.fullname) : "",
            is_module: isSet(object.is_module) ? Boolean(object.is_module) : false,
            methods: Array.isArray(object?.methods) ? object.methods.map((e) => QueryMethodDescriptor.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.fullname !== undefined && (obj.fullname = message.fullname);
        message.is_module !== undefined && (obj.is_module = message.is_module);
        if (message.methods) {
            obj.methods = message.methods.map(e => e ? QueryMethodDescriptor.toJSON(e) : undefined);
        }
        else {
            obj.methods = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryServiceDescriptor();
        message.fullname = object.fullname ?? "";
        message.is_module = object.is_module ?? false;
        message.methods = object.methods?.map(e => QueryMethodDescriptor.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            fullname: object.fullname,
            is_module: object.is_module,
            methods: Array.isArray(object?.methods) ? object.methods.map((e) => QueryMethodDescriptor.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.fullname = message.fullname;
        obj.is_module = message.is_module;
        if (message.methods) {
            obj.methods = message.methods.map(e => e ? QueryMethodDescriptor.toAmino(e) : undefined);
        }
        else {
            obj.methods = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return QueryServiceDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryServiceDescriptor",
            value: QueryServiceDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryServiceDescriptor.decode(message.value);
    },
    toProto(message) {
        return QueryServiceDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.QueryServiceDescriptor",
            value: QueryServiceDescriptor.encode(message).finish()
        };
    }
};
function createBaseQueryMethodDescriptor() {
    return {
        name: "",
        full_query_path: ""
    };
}
export const QueryMethodDescriptor = {
    typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
    aminoType: "cosmos-sdk/QueryMethodDescriptor",
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.full_query_path !== "") {
            writer.uint32(18).string(message.full_query_path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryMethodDescriptor();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.full_query_path = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            full_query_path: isSet(object.full_query_path) ? String(object.full_query_path) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.full_query_path !== undefined && (obj.full_query_path = message.full_query_path);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryMethodDescriptor();
        message.name = object.name ?? "";
        message.full_query_path = object.full_query_path ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            name: object.name,
            full_query_path: object.full_query_path
        };
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.full_query_path = message.full_query_path;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryMethodDescriptor.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryMethodDescriptor",
            value: QueryMethodDescriptor.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryMethodDescriptor.decode(message.value);
    },
    toProto(message) {
        return QueryMethodDescriptor.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.base.reflection.v2alpha1.QueryMethodDescriptor",
            value: QueryMethodDescriptor.encode(message).finish()
        };
    }
};
//# sourceMappingURL=reflection.js.map