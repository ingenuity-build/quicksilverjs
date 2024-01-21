"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgGovRemoveProtocolDataResponse = exports.MsgGovRemoveProtocolData = exports.AddProtocolDataProposalWithDeposit = exports.AddProtocolDataProposal = void 0;
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseAddProtocolDataProposal() {
    return {
        title: "",
        description: "",
        type: "",
        data: "",
        key: ""
    };
}
exports.AddProtocolDataProposal = {
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            type: (0, helpers_1.isSet)(object.type) ? String(object.type) : "",
            data: (0, helpers_1.isSet)(object.data) ? String(object.data) : "",
            key: (0, helpers_1.isSet)(object.key) ? String(object.key) : ""
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
        return exports.AddProtocolDataProposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AddProtocolDataProposal.decode(message.value);
    },
    toProto(message) {
        return exports.AddProtocolDataProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.AddProtocolDataProposal",
            value: exports.AddProtocolDataProposal.encode(message).finish()
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
exports.AddProtocolDataProposalWithDeposit = {
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            protocol: (0, helpers_1.isSet)(object.protocol) ? String(object.protocol) : "",
            type: (0, helpers_1.isSet)(object.type) ? String(object.type) : "",
            key: (0, helpers_1.isSet)(object.key) ? String(object.key) : "",
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            deposit: (0, helpers_1.isSet)(object.deposit) ? String(object.deposit) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.protocol !== undefined && (obj.protocol = message.protocol);
        message.type !== undefined && (obj.type = message.type);
        message.key !== undefined && (obj.key = message.key);
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
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
        return exports.AddProtocolDataProposalWithDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.AddProtocolDataProposalWithDeposit.decode(message.value);
    },
    toProto(message) {
        return exports.AddProtocolDataProposalWithDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.AddProtocolDataProposalWithDeposit",
            value: exports.AddProtocolDataProposalWithDeposit.encode(message).finish()
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
exports.MsgGovRemoveProtocolData = {
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
            title: (0, helpers_1.isSet)(object.title) ? String(object.title) : "",
            description: (0, helpers_1.isSet)(object.description) ? String(object.description) : "",
            key: (0, helpers_1.isSet)(object.key) ? String(object.key) : "",
            authority: (0, helpers_1.isSet)(object.authority) ? String(object.authority) : ""
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
        return exports.MsgGovRemoveProtocolData.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgGovRemoveProtocolData.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGovRemoveProtocolData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
            value: exports.MsgGovRemoveProtocolData.encode(message).finish()
        };
    }
};
function createBaseMsgGovRemoveProtocolDataResponse() {
    return {};
}
exports.MsgGovRemoveProtocolDataResponse = {
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
        return exports.MsgGovRemoveProtocolDataResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgGovRemoveProtocolDataResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgGovRemoveProtocolDataResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolDataResponse",
            value: exports.MsgGovRemoveProtocolDataResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=proposals.js.map