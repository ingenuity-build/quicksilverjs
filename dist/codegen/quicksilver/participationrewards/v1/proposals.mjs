import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseAddProtocolDataProposal() {
    return {
        title: "",
        description: "",
        type: "",
        data: "",
        key: ""
    };
}
export const AddProtocolDataProposal = {
    typeUrl: "/quicksilver.participationrewards.v1.AddProtocolDataProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.type !== "") {
            writer.uint32(34).string(message.type);
        }
        if (message.data !== "") {
            writer.uint32(42).string(message.data);
        }
        if (message.key !== "") {
            writer.uint32(50).string(message.key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddProtocolDataProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 4:
                    message.type = reader.string();
                    break;
                case 5:
                    message.data = reader.string();
                    break;
                case 6:
                    message.key = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            type: isSet(object.type) ? String(object.type) : "",
            data: isSet(object.data) ? String(object.data) : "",
            key: isSet(object.key) ? String(object.key) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.type !== undefined && (obj.type = message.type);
        message.data !== undefined && (obj.data = message.data);
        message.key !== undefined && (obj.key = message.key);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddProtocolDataProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.type = object.type ?? "";
        message.data = object.data ?? "";
        message.key = object.key ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            type: object.type,
            data: object.data,
            key: object.key
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.type = message.type;
        obj.data = message.data;
        obj.key = message.key;
        return obj;
    },
    fromAminoMsg(object) {
        return AddProtocolDataProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AddProtocolDataProposal.decode(message.value);
    },
    toProto(message) {
        return AddProtocolDataProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.AddProtocolDataProposal",
            value: AddProtocolDataProposal.encode(message).finish()
        };
    }
};
function createBaseAddProtocolDataProposalWithDeposit() {
    return {
        title: "",
        description: "",
        protocol: "",
        type: "",
        key: "",
        data: new Uint8Array(),
        deposit: ""
    };
}
export const AddProtocolDataProposalWithDeposit = {
    typeUrl: "/quicksilver.participationrewards.v1.AddProtocolDataProposalWithDeposit",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.protocol !== "") {
            writer.uint32(26).string(message.protocol);
        }
        if (message.type !== "") {
            writer.uint32(34).string(message.type);
        }
        if (message.key !== "") {
            writer.uint32(42).string(message.key);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        if (message.deposit !== "") {
            writer.uint32(58).string(message.deposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddProtocolDataProposalWithDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.protocol = reader.string();
                    break;
                case 4:
                    message.type = reader.string();
                    break;
                case 5:
                    message.key = reader.string();
                    break;
                case 6:
                    message.data = reader.bytes();
                    break;
                case 7:
                    message.deposit = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            protocol: isSet(object.protocol) ? String(object.protocol) : "",
            type: isSet(object.type) ? String(object.type) : "",
            key: isSet(object.key) ? String(object.key) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            deposit: isSet(object.deposit) ? String(object.deposit) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.protocol !== undefined && (obj.protocol = message.protocol);
        message.type !== undefined && (obj.type = message.type);
        message.key !== undefined && (obj.key = message.key);
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.deposit !== undefined && (obj.deposit = message.deposit);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAddProtocolDataProposalWithDeposit();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.protocol = object.protocol ?? "";
        message.type = object.type ?? "";
        message.key = object.key ?? "";
        message.data = object.data ?? new Uint8Array();
        message.deposit = object.deposit ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            protocol: object.protocol,
            type: object.type,
            key: object.key,
            data: object.data,
            deposit: object.deposit
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.protocol = message.protocol;
        obj.type = message.type;
        obj.key = message.key;
        obj.data = message.data;
        obj.deposit = message.deposit;
        return obj;
    },
    fromAminoMsg(object) {
        return AddProtocolDataProposalWithDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return AddProtocolDataProposalWithDeposit.decode(message.value);
    },
    toProto(message) {
        return AddProtocolDataProposalWithDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.AddProtocolDataProposalWithDeposit",
            value: AddProtocolDataProposalWithDeposit.encode(message).finish()
        };
    }
};
function createBaseMsgGovRemoveProtocolData() {
    return {
        title: "",
        description: "",
        key: "",
        authority: ""
    };
}
export const MsgGovRemoveProtocolData = {
    typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.key !== "") {
            writer.uint32(26).string(message.key);
        }
        if (message.authority !== "") {
            writer.uint32(34).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGovRemoveProtocolData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.key = reader.string();
                    break;
                case 4:
                    message.authority = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            key: isSet(object.key) ? String(object.key) : "",
            authority: isSet(object.authority) ? String(object.authority) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.key !== undefined && (obj.key = message.key);
        message.authority !== undefined && (obj.authority = message.authority);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgGovRemoveProtocolData();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.key = object.key ?? "";
        message.authority = object.authority ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            key: object.key,
            authority: object.authority
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.key = message.key;
        obj.authority = message.authority;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgGovRemoveProtocolData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgGovRemoveProtocolData.decode(message.value);
    },
    toProto(message) {
        return MsgGovRemoveProtocolData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
            value: MsgGovRemoveProtocolData.encode(message).finish()
        };
    }
};
function createBaseMsgGovRemoveProtocolDataResponse() {
    return {};
}
export const MsgGovRemoveProtocolDataResponse = {
    typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolDataResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgGovRemoveProtocolDataResponse();
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
        const message = createBaseMsgGovRemoveProtocolDataResponse();
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
        return MsgGovRemoveProtocolDataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgGovRemoveProtocolDataResponse.decode(message.value);
    },
    toProto(message) {
        return MsgGovRemoveProtocolDataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolDataResponse",
            value: MsgGovRemoveProtocolDataResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proposals.js.map