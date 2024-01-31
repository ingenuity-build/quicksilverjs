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
exports.Params = exports.Height = exports.UpgradeProposal = exports.ClientUpdateProposal = exports.ClientConsensusStates = exports.ConsensusStateWithHeight = exports.IdentifiedClientState = void 0;
const any_1 = require("../../../../google/protobuf/any");
const upgrade_1 = require("../../../../cosmos/upgrade/v1beta1/upgrade");
const helpers_1 = require("../../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseIdentifiedClientState() {
    return {
        client_id: "",
        client_state: any_1.Any.fromPartial({})
    };
}
exports.IdentifiedClientState = {
    typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
    aminoType: "cosmos-sdk/IdentifiedClientState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
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
            client_state: (0, helpers_1.isSet)(object.client_state) ? any_1.Any.fromJSON(object.client_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.client_state !== undefined && (obj.client_state = message.client_state ? any_1.Any.toJSON(message.client_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIdentifiedClientState();
        message.client_id = object.client_id ?? "";
        message.client_state = object.client_state !== undefined && object.client_state !== null ? any_1.Any.fromPartial(object.client_state) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            client_state: object?.client_state ? any_1.Any.fromAmino(object.client_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.client_state = message.client_state ? any_1.Any.toAmino(message.client_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.IdentifiedClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedClientState",
            value: exports.IdentifiedClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.IdentifiedClientState.decode(message.value);
    },
    toProto(message) {
        return exports.IdentifiedClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
            value: exports.IdentifiedClientState.encode(message).finish()
        };
    }
};
function createBaseConsensusStateWithHeight() {
    return {
        height: exports.Height.fromPartial({}),
        consensus_state: any_1.Any.fromPartial({})
    };
}
exports.ConsensusStateWithHeight = {
    typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
    aminoType: "cosmos-sdk/ConsensusStateWithHeight",
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== undefined) {
            exports.Height.encode(message.height, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusStateWithHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = exports.Height.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
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
            height: (0, helpers_1.isSet)(object.height) ? exports.Height.fromJSON(object.height) : undefined,
            consensus_state: (0, helpers_1.isSet)(object.consensus_state) ? any_1.Any.fromJSON(object.consensus_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height ? exports.Height.toJSON(message.height) : undefined);
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? any_1.Any.toJSON(message.consensus_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusStateWithHeight();
        message.height = object.height !== undefined && object.height !== null ? exports.Height.fromPartial(object.height) : undefined;
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? any_1.Any.fromPartial(object.consensus_state) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            height: object?.height ? exports.Height.fromAmino(object.height) : undefined,
            consensus_state: object?.consensus_state ? any_1.Any.fromAmino(object.consensus_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? exports.Height.toAmino(message.height) : undefined;
        obj.consensus_state = message.consensus_state ? any_1.Any.toAmino(message.consensus_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusStateWithHeight.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusStateWithHeight",
            value: exports.ConsensusStateWithHeight.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConsensusStateWithHeight.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusStateWithHeight.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
            value: exports.ConsensusStateWithHeight.encode(message).finish()
        };
    }
};
function createBaseClientConsensusStates() {
    return {
        client_id: "",
        consensus_states: []
    };
}
exports.ClientConsensusStates = {
    typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
    aminoType: "cosmos-sdk/ClientConsensusStates",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.consensus_states) {
            exports.ConsensusStateWithHeight.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientConsensusStates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.consensus_states.push(exports.ConsensusStateWithHeight.decode(reader, reader.uint32()));
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
            consensus_states: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e) => exports.ConsensusStateWithHeight.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.consensus_states) {
            obj.consensus_states = message.consensus_states.map(e => e ? exports.ConsensusStateWithHeight.toJSON(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientConsensusStates();
        message.client_id = object.client_id ?? "";
        message.consensus_states = object.consensus_states?.map(e => exports.ConsensusStateWithHeight.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            consensus_states: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e) => exports.ConsensusStateWithHeight.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        if (message.consensus_states) {
            obj.consensus_states = message.consensus_states.map(e => e ? exports.ConsensusStateWithHeight.toAmino(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientConsensusStates.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientConsensusStates",
            value: exports.ClientConsensusStates.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientConsensusStates.decode(message.value);
    },
    toProto(message) {
        return exports.ClientConsensusStates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
            value: exports.ClientConsensusStates.encode(message).finish()
        };
    }
};
function createBaseClientUpdateProposal() {
    return {
        $typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
        title: "",
        description: "",
        subject_client_id: "",
        substitute_client_id: ""
    };
}
exports.ClientUpdateProposal = {
    typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
    aminoType: "cosmos-sdk/ClientUpdateProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.subject_client_id !== "") {
            writer.uint32(26).string(message.subject_client_id);
        }
        if (message.substitute_client_id !== "") {
            writer.uint32(34).string(message.substitute_client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientUpdateProposal();
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
                    message.subject_client_id = reader.string();
                    break;
                case 4:
                    message.substitute_client_id = reader.string();
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
            subject_client_id: (0, helpers_1.isSet)(object.subject_client_id) ? String(object.subject_client_id) : "",
            substitute_client_id: (0, helpers_1.isSet)(object.substitute_client_id) ? String(object.substitute_client_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.subject_client_id !== undefined && (obj.subject_client_id = message.subject_client_id);
        message.substitute_client_id !== undefined && (obj.substitute_client_id = message.substitute_client_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientUpdateProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.subject_client_id = object.subject_client_id ?? "";
        message.substitute_client_id = object.substitute_client_id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            subject_client_id: object.subject_client_id,
            substitute_client_id: object.substitute_client_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.subject_client_id = message.subject_client_id;
        obj.substitute_client_id = message.substitute_client_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientUpdateProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientUpdateProposal",
            value: exports.ClientUpdateProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return exports.ClientUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
            value: exports.ClientUpdateProposal.encode(message).finish()
        };
    }
};
function createBaseUpgradeProposal() {
    return {
        $typeUrl: "/ibc.core.client.v1.UpgradeProposal",
        title: "",
        description: "",
        plan: upgrade_1.Plan.fromPartial({}),
        upgraded_client_state: any_1.Any.fromPartial({})
    };
}
exports.UpgradeProposal = {
    typeUrl: "/ibc.core.client.v1.UpgradeProposal",
    aminoType: "cosmos-sdk/UpgradeProposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
        }
        if (message.upgraded_client_state !== undefined) {
            any_1.Any.encode(message.upgraded_client_state, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpgradeProposal();
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
                    message.plan = upgrade_1.Plan.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.upgraded_client_state = any_1.Any.decode(reader, reader.uint32());
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
            plan: (0, helpers_1.isSet)(object.plan) ? upgrade_1.Plan.fromJSON(object.plan) : undefined,
            upgraded_client_state: (0, helpers_1.isSet)(object.upgraded_client_state) ? any_1.Any.fromJSON(object.upgraded_client_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.plan !== undefined && (obj.plan = message.plan ? upgrade_1.Plan.toJSON(message.plan) : undefined);
        message.upgraded_client_state !== undefined && (obj.upgraded_client_state = message.upgraded_client_state ? any_1.Any.toJSON(message.upgraded_client_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.plan = object.plan !== undefined && object.plan !== null ? upgrade_1.Plan.fromPartial(object.plan) : undefined;
        message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? any_1.Any.fromPartial(object.upgraded_client_state) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            plan: object?.plan ? upgrade_1.Plan.fromAmino(object.plan) : undefined,
            upgraded_client_state: object?.upgraded_client_state ? any_1.Any.fromAmino(object.upgraded_client_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.plan = message.plan ? upgrade_1.Plan.toAmino(message.plan) : undefined;
        obj.upgraded_client_state = message.upgraded_client_state ? any_1.Any.toAmino(message.upgraded_client_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.UpgradeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UpgradeProposal",
            value: exports.UpgradeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.UpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return exports.UpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.UpgradeProposal",
            value: exports.UpgradeProposal.encode(message).finish()
        };
    }
};
function createBaseHeight() {
    return {
        revision_number: helpers_1.Long.UZERO,
        revision_height: helpers_1.Long.UZERO
    };
}
exports.Height = {
    typeUrl: "/ibc.core.client.v1.Height",
    aminoType: "cosmos-sdk/Height",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.revision_number.isZero()) {
            writer.uint32(8).uint64(message.revision_number);
        }
        if (!message.revision_height.isZero()) {
            writer.uint32(16).uint64(message.revision_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.revision_number = reader.uint64();
                    break;
                case 2:
                    message.revision_height = reader.uint64();
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
            revision_number: (0, helpers_1.isSet)(object.revision_number) ? helpers_1.Long.fromValue(object.revision_number) : helpers_1.Long.UZERO,
            revision_height: (0, helpers_1.isSet)(object.revision_height) ? helpers_1.Long.fromValue(object.revision_height) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.revision_number !== undefined && (obj.revision_number = (message.revision_number || helpers_1.Long.UZERO).toString());
        message.revision_height !== undefined && (obj.revision_height = (message.revision_height || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeight();
        message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? helpers_1.Long.fromValue(object.revision_number) : helpers_1.Long.UZERO;
        message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? helpers_1.Long.fromValue(object.revision_height) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            revision_number: helpers_1.Long.fromString(object.revision_number || "0", true),
            revision_height: helpers_1.Long.fromString(object.revision_height || "0", true)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.revision_number = message.revision_number ? message.revision_number.toString() : undefined;
        obj.revision_height = message.revision_height ? message.revision_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Height.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Height",
            value: exports.Height.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Height.decode(message.value);
    },
    toProto(message) {
        return exports.Height.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.Height",
            value: exports.Height.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        allowed_clients: []
    };
}
exports.Params = {
    typeUrl: "/ibc.core.client.v1.Params",
    aminoType: "cosmos-sdk/Params",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.allowed_clients) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.allowed_clients.push(reader.string());
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
            allowed_clients: Array.isArray(object?.allowed_clients) ? object.allowed_clients.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowed_clients) {
            obj.allowed_clients = message.allowed_clients.map(e => e);
        }
        else {
            obj.allowed_clients = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.allowed_clients = object.allowed_clients?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            allowed_clients: Array.isArray(object?.allowed_clients) ? object.allowed_clients.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.allowed_clients) {
            obj.allowed_clients = message.allowed_clients.map(e => e);
        }
        else {
            obj.allowed_clients = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: exports.Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=client.js.map