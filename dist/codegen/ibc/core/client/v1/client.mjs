import { Any } from "../../../../google/protobuf/any";
import { Plan } from "../../../../cosmos/upgrade/v1beta1/upgrade";
import { Long, isSet } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseIdentifiedClientState() {
    return {
        client_id: "",
        client_state: Any.fromPartial({})
    };
}
export const IdentifiedClientState = {
    typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
    aminoType: "cosmos-sdk/IdentifiedClientState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.client_state !== undefined) {
            Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
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
                    message.client_state = Any.decode(reader, reader.uint32());
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toJSON(message.client_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseIdentifiedClientState();
        message.client_id = object.client_id ?? "";
        message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            client_state: object?.client_state ? Any.fromAmino(object.client_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.client_state = message.client_state ? Any.toAmino(message.client_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return IdentifiedClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/IdentifiedClientState",
            value: IdentifiedClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return IdentifiedClientState.decode(message.value);
    },
    toProto(message) {
        return IdentifiedClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.IdentifiedClientState",
            value: IdentifiedClientState.encode(message).finish()
        };
    }
};
function createBaseConsensusStateWithHeight() {
    return {
        height: Height.fromPartial({}),
        consensus_state: Any.fromPartial({})
    };
}
export const ConsensusStateWithHeight = {
    typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
    aminoType: "cosmos-sdk/ConsensusStateWithHeight",
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== undefined) {
            Height.encode(message.height, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensus_state !== undefined) {
            Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
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
                    message.height = Height.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.consensus_state = Any.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? Height.fromJSON(object.height) : undefined,
            consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusStateWithHeight();
        message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            height: object?.height ? Height.fromAmino(object.height) : undefined,
            consensus_state: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? Height.toAmino(message.height) : undefined;
        obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConsensusStateWithHeight.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusStateWithHeight",
            value: ConsensusStateWithHeight.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConsensusStateWithHeight.decode(message.value);
    },
    toProto(message) {
        return ConsensusStateWithHeight.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ConsensusStateWithHeight",
            value: ConsensusStateWithHeight.encode(message).finish()
        };
    }
};
function createBaseClientConsensusStates() {
    return {
        client_id: "",
        consensus_states: []
    };
}
export const ClientConsensusStates = {
    typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
    aminoType: "cosmos-sdk/ClientConsensusStates",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.consensus_states) {
            ConsensusStateWithHeight.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.consensus_states.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            consensus_states: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e) => ConsensusStateWithHeight.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.consensus_states) {
            obj.consensus_states = message.consensus_states.map(e => e ? ConsensusStateWithHeight.toJSON(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientConsensusStates();
        message.client_id = object.client_id ?? "";
        message.consensus_states = object.consensus_states?.map(e => ConsensusStateWithHeight.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            consensus_states: Array.isArray(object?.consensus_states) ? object.consensus_states.map((e) => ConsensusStateWithHeight.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        if (message.consensus_states) {
            obj.consensus_states = message.consensus_states.map(e => e ? ConsensusStateWithHeight.toAmino(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return ClientConsensusStates.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientConsensusStates",
            value: ClientConsensusStates.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientConsensusStates.decode(message.value);
    },
    toProto(message) {
        return ClientConsensusStates.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ClientConsensusStates",
            value: ClientConsensusStates.encode(message).finish()
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
export const ClientUpdateProposal = {
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            subject_client_id: isSet(object.subject_client_id) ? String(object.subject_client_id) : "",
            substitute_client_id: isSet(object.substitute_client_id) ? String(object.substitute_client_id) : ""
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
        return ClientUpdateProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientUpdateProposal",
            value: ClientUpdateProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientUpdateProposal.decode(message.value);
    },
    toProto(message) {
        return ClientUpdateProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.ClientUpdateProposal",
            value: ClientUpdateProposal.encode(message).finish()
        };
    }
};
function createBaseUpgradeProposal() {
    return {
        $typeUrl: "/ibc.core.client.v1.UpgradeProposal",
        title: "",
        description: "",
        plan: Plan.fromPartial({}),
        upgraded_client_state: Any.fromPartial({})
    };
}
export const UpgradeProposal = {
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
            Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
        }
        if (message.upgraded_client_state !== undefined) {
            Any.encode(message.upgraded_client_state, writer.uint32(34).fork()).ldelim();
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
                    message.plan = Plan.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.upgraded_client_state = Any.decode(reader, reader.uint32());
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
            plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined,
            upgraded_client_state: isSet(object.upgraded_client_state) ? Any.fromJSON(object.upgraded_client_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined && (obj.description = message.description);
        message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
        message.upgraded_client_state !== undefined && (obj.upgraded_client_state = message.upgraded_client_state ? Any.toJSON(message.upgraded_client_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseUpgradeProposal();
        message.title = object.title ?? "";
        message.description = object.description ?? "";
        message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
        message.upgraded_client_state = object.upgraded_client_state !== undefined && object.upgraded_client_state !== null ? Any.fromPartial(object.upgraded_client_state) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            title: object.title,
            description: object.description,
            plan: object?.plan ? Plan.fromAmino(object.plan) : undefined,
            upgraded_client_state: object?.upgraded_client_state ? Any.fromAmino(object.upgraded_client_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.title = message.title;
        obj.description = message.description;
        obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
        obj.upgraded_client_state = message.upgraded_client_state ? Any.toAmino(message.upgraded_client_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return UpgradeProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/UpgradeProposal",
            value: UpgradeProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return UpgradeProposal.decode(message.value);
    },
    toProto(message) {
        return UpgradeProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.UpgradeProposal",
            value: UpgradeProposal.encode(message).finish()
        };
    }
};
function createBaseHeight() {
    return {
        revision_number: Long.UZERO,
        revision_height: Long.UZERO
    };
}
export const Height = {
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
            revision_number: isSet(object.revision_number) ? Long.fromValue(object.revision_number) : Long.UZERO,
            revision_height: isSet(object.revision_height) ? Long.fromValue(object.revision_height) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.revision_number !== undefined && (obj.revision_number = (message.revision_number || Long.UZERO).toString());
        message.revision_height !== undefined && (obj.revision_height = (message.revision_height || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeight();
        message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? Long.fromValue(object.revision_number) : Long.UZERO;
        message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? Long.fromValue(object.revision_height) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            revision_number: Long.fromString(object.revision_number || "0", true),
            revision_height: Long.fromString(object.revision_height || "0", true)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.revision_number = message.revision_number ? message.revision_number.toString() : undefined;
        obj.revision_height = message.revision_height ? message.revision_height.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Height.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Height",
            value: Height.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Height.decode(message.value);
    },
    toProto(message) {
        return Height.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.Height",
            value: Height.encode(message).finish()
        };
    }
};
function createBaseParams() {
    return {
        allowed_clients: []
    };
}
export const Params = {
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
        return Params.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Params",
            value: Params.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.client.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
//# sourceMappingURL=client.js.map