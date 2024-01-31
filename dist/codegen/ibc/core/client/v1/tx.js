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
exports.MsgSubmitMisbehaviourResponse = exports.MsgSubmitMisbehaviour = exports.MsgUpgradeClientResponse = exports.MsgUpgradeClient = exports.MsgUpdateClientResponse = exports.MsgUpdateClient = exports.MsgCreateClientResponse = exports.MsgCreateClient = void 0;
const any_1 = require("../../../../google/protobuf/any");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../../helpers");
function createBaseMsgCreateClient() {
    return {
        client_state: any_1.Any.fromPartial({}),
        consensus_state: any_1.Any.fromPartial({}),
        signer: ""
    };
}
exports.MsgCreateClient = {
    typeUrl: "/ibc.core.client.v1.MsgCreateClient",
    aminoType: "cosmos-sdk/MsgCreateClient",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signer = reader.string();
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
            client_state: (0, helpers_1.isSet)(object.client_state) ? any_1.Any.fromJSON(object.client_state) : undefined,
            consensus_state: (0, helpers_1.isSet)(object.consensus_state) ? any_1.Any.fromJSON(object.consensus_state) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_state !== undefined && (obj.client_state = message.client_state ? any_1.Any.toJSON(message.client_state) : undefined);
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? any_1.Any.toJSON(message.consensus_state) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateClient();
        message.client_state = object.client_state !== undefined && object.client_state !== null ? any_1.Any.fromPartial(object.client_state) : undefined;
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? any_1.Any.fromPartial(object.consensus_state) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            client_state: object?.client_state ? any_1.Any.fromAmino(object.client_state) : undefined,
            consensus_state: object?.consensus_state ? any_1.Any.fromAmino(object.consensus_state) : undefined,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_state = message.client_state ? any_1.Any.toAmino(message.client_state) : undefined;
        obj.consensus_state = message.consensus_state ? any_1.Any.toAmino(message.consensus_state) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgCreateClient.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateClient",
            value: exports.MsgCreateClient.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateClient.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateClient.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgCreateClient",
            value: exports.MsgCreateClient.encode(message).finish()
        };
    }
};
function createBaseMsgCreateClientResponse() {
    return {};
}
exports.MsgCreateClientResponse = {
    typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
    aminoType: "cosmos-sdk/MsgCreateClientResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClientResponse();
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
        const message = createBaseMsgCreateClientResponse();
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
        return exports.MsgCreateClientResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgCreateClientResponse",
            value: exports.MsgCreateClientResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgCreateClientResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgCreateClientResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
            value: exports.MsgCreateClientResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClient() {
    return {
        client_id: "",
        header: any_1.Any.fromPartial({}),
        signer: ""
    };
}
exports.MsgUpdateClient = {
    typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
    aminoType: "cosmos-sdk/MsgUpdateClient",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.header !== undefined) {
            any_1.Any.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.header = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signer = reader.string();
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            header: (0, helpers_1.isSet)(object.header) ? any_1.Any.fromJSON(object.header) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.header !== undefined && (obj.header = message.header ? any_1.Any.toJSON(message.header) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateClient();
        message.client_id = object.client_id ?? "";
        message.header = object.header !== undefined && object.header !== null ? any_1.Any.fromPartial(object.header) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            header: object?.header ? any_1.Any.fromAmino(object.header) : undefined,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.header = message.header ? any_1.Any.toAmino(message.header) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpdateClient.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateClient",
            value: exports.MsgUpdateClient.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClient.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClient.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
            value: exports.MsgUpdateClient.encode(message).finish()
        };
    }
};
function createBaseMsgUpdateClientResponse() {
    return {};
}
exports.MsgUpdateClientResponse = {
    typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
    aminoType: "cosmos-sdk/MsgUpdateClientResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClientResponse();
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
        const message = createBaseMsgUpdateClientResponse();
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
        return exports.MsgUpdateClientResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpdateClientResponse",
            value: exports.MsgUpdateClientResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpdateClientResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpdateClientResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
            value: exports.MsgUpdateClientResponse.encode(message).finish()
        };
    }
};
function createBaseMsgUpgradeClient() {
    return {
        client_id: "",
        client_state: any_1.Any.fromPartial({}),
        consensus_state: any_1.Any.fromPartial({}),
        proof_upgrade_client: new Uint8Array(),
        proof_upgrade_consensus_state: new Uint8Array(),
        signer: ""
    };
}
exports.MsgUpgradeClient = {
    typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
    aminoType: "cosmos-sdk/MsgUpgradeClient",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
        }
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(26).fork()).ldelim();
        }
        if (message.proof_upgrade_client.length !== 0) {
            writer.uint32(34).bytes(message.proof_upgrade_client);
        }
        if (message.proof_upgrade_consensus_state.length !== 0) {
            writer.uint32(42).bytes(message.proof_upgrade_consensus_state);
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpgradeClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.proof_upgrade_client = reader.bytes();
                    break;
                case 5:
                    message.proof_upgrade_consensus_state = reader.bytes();
                    break;
                case 6:
                    message.signer = reader.string();
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            client_state: (0, helpers_1.isSet)(object.client_state) ? any_1.Any.fromJSON(object.client_state) : undefined,
            consensus_state: (0, helpers_1.isSet)(object.consensus_state) ? any_1.Any.fromJSON(object.consensus_state) : undefined,
            proof_upgrade_client: (0, helpers_1.isSet)(object.proof_upgrade_client) ? (0, helpers_1.bytesFromBase64)(object.proof_upgrade_client) : new Uint8Array(),
            proof_upgrade_consensus_state: (0, helpers_1.isSet)(object.proof_upgrade_consensus_state) ? (0, helpers_1.bytesFromBase64)(object.proof_upgrade_consensus_state) : new Uint8Array(),
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.client_state !== undefined && (obj.client_state = message.client_state ? any_1.Any.toJSON(message.client_state) : undefined);
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? any_1.Any.toJSON(message.consensus_state) : undefined);
        message.proof_upgrade_client !== undefined && (obj.proof_upgrade_client = (0, helpers_1.base64FromBytes)(message.proof_upgrade_client !== undefined ? message.proof_upgrade_client : new Uint8Array()));
        message.proof_upgrade_consensus_state !== undefined && (obj.proof_upgrade_consensus_state = (0, helpers_1.base64FromBytes)(message.proof_upgrade_consensus_state !== undefined ? message.proof_upgrade_consensus_state : new Uint8Array()));
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpgradeClient();
        message.client_id = object.client_id ?? "";
        message.client_state = object.client_state !== undefined && object.client_state !== null ? any_1.Any.fromPartial(object.client_state) : undefined;
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? any_1.Any.fromPartial(object.consensus_state) : undefined;
        message.proof_upgrade_client = object.proof_upgrade_client ?? new Uint8Array();
        message.proof_upgrade_consensus_state = object.proof_upgrade_consensus_state ?? new Uint8Array();
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            client_state: object?.client_state ? any_1.Any.fromAmino(object.client_state) : undefined,
            consensus_state: object?.consensus_state ? any_1.Any.fromAmino(object.consensus_state) : undefined,
            proof_upgrade_client: object.proof_upgrade_client,
            proof_upgrade_consensus_state: object.proof_upgrade_consensus_state,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.client_state = message.client_state ? any_1.Any.toAmino(message.client_state) : undefined;
        obj.consensus_state = message.consensus_state ? any_1.Any.toAmino(message.consensus_state) : undefined;
        obj.proof_upgrade_client = message.proof_upgrade_client;
        obj.proof_upgrade_consensus_state = message.proof_upgrade_consensus_state;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgUpgradeClient.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpgradeClient",
            value: exports.MsgUpgradeClient.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpgradeClient.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpgradeClient.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
            value: exports.MsgUpgradeClient.encode(message).finish()
        };
    }
};
function createBaseMsgUpgradeClientResponse() {
    return {};
}
exports.MsgUpgradeClientResponse = {
    typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
    aminoType: "cosmos-sdk/MsgUpgradeClientResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpgradeClientResponse();
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
        const message = createBaseMsgUpgradeClientResponse();
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
        return exports.MsgUpgradeClientResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgUpgradeClientResponse",
            value: exports.MsgUpgradeClientResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgUpgradeClientResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgUpgradeClientResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
            value: exports.MsgUpgradeClientResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitMisbehaviour() {
    return {
        client_id: "",
        misbehaviour: any_1.Any.fromPartial({}),
        signer: ""
    };
}
exports.MsgSubmitMisbehaviour = {
    typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
    aminoType: "cosmos-sdk/MsgSubmitMisbehaviour",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.misbehaviour !== undefined) {
            any_1.Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.misbehaviour = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signer = reader.string();
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
            client_id: (0, helpers_1.isSet)(object.client_id) ? String(object.client_id) : "",
            misbehaviour: (0, helpers_1.isSet)(object.misbehaviour) ? any_1.Any.fromJSON(object.misbehaviour) : undefined,
            signer: (0, helpers_1.isSet)(object.signer) ? String(object.signer) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.misbehaviour !== undefined && (obj.misbehaviour = message.misbehaviour ? any_1.Any.toJSON(message.misbehaviour) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitMisbehaviour();
        message.client_id = object.client_id ?? "";
        message.misbehaviour = object.misbehaviour !== undefined && object.misbehaviour !== null ? any_1.Any.fromPartial(object.misbehaviour) : undefined;
        message.signer = object.signer ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            misbehaviour: object?.misbehaviour ? any_1.Any.fromAmino(object.misbehaviour) : undefined,
            signer: object.signer
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.misbehaviour = message.misbehaviour ? any_1.Any.toAmino(message.misbehaviour) : undefined;
        obj.signer = message.signer;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitMisbehaviour.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitMisbehaviour",
            value: exports.MsgSubmitMisbehaviour.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitMisbehaviour.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitMisbehaviour.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
            value: exports.MsgSubmitMisbehaviour.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitMisbehaviourResponse() {
    return {};
}
exports.MsgSubmitMisbehaviourResponse = {
    typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
    aminoType: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitMisbehaviourResponse();
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
        const message = createBaseMsgSubmitMisbehaviourResponse();
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
        return exports.MsgSubmitMisbehaviourResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
            value: exports.MsgSubmitMisbehaviourResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitMisbehaviourResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitMisbehaviourResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
            value: exports.MsgSubmitMisbehaviourResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=tx.js.map