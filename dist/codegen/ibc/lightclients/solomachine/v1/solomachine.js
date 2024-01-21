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
exports.NextSequenceRecvData = exports.PacketReceiptAbsenceData = exports.PacketAcknowledgementData = exports.PacketCommitmentData = exports.ChannelStateData = exports.ConnectionStateData = exports.ConsensusStateData = exports.ClientStateData = exports.HeaderData = exports.SignBytes = exports.TimestampedSignatureData = exports.SignatureAndData = exports.Misbehaviour = exports.Header = exports.ConsensusState = exports.ClientState = exports.dataTypeToJSON = exports.dataTypeFromJSON = exports.DataTypeAmino = exports.DataTypeSDKType = exports.DataType = void 0;
const any_1 = require("../../../../google/protobuf/any");
const connection_1 = require("../../../core/connection/v1/connection");
const channel_1 = require("../../../core/channel/v1/channel");
const helpers_1 = require("../../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
var DataType;
(function (DataType) {
    /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
    DataType[DataType["DATA_TYPE_UNINITIALIZED_UNSPECIFIED"] = 0] = "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
    /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
    DataType[DataType["DATA_TYPE_CLIENT_STATE"] = 1] = "DATA_TYPE_CLIENT_STATE";
    /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
    DataType[DataType["DATA_TYPE_CONSENSUS_STATE"] = 2] = "DATA_TYPE_CONSENSUS_STATE";
    /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
    DataType[DataType["DATA_TYPE_CONNECTION_STATE"] = 3] = "DATA_TYPE_CONNECTION_STATE";
    /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
    DataType[DataType["DATA_TYPE_CHANNEL_STATE"] = 4] = "DATA_TYPE_CHANNEL_STATE";
    /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
    DataType[DataType["DATA_TYPE_PACKET_COMMITMENT"] = 5] = "DATA_TYPE_PACKET_COMMITMENT";
    /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
    DataType[DataType["DATA_TYPE_PACKET_ACKNOWLEDGEMENT"] = 6] = "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
    /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
    DataType[DataType["DATA_TYPE_PACKET_RECEIPT_ABSENCE"] = 7] = "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
    /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
    DataType[DataType["DATA_TYPE_NEXT_SEQUENCE_RECV"] = 8] = "DATA_TYPE_NEXT_SEQUENCE_RECV";
    /** DATA_TYPE_HEADER - Data type for header verification */
    DataType[DataType["DATA_TYPE_HEADER"] = 9] = "DATA_TYPE_HEADER";
    DataType[DataType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DataType || (exports.DataType = DataType = {}));
exports.DataTypeSDKType = DataType;
exports.DataTypeAmino = DataType;
function dataTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
            return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "DATA_TYPE_CLIENT_STATE":
            return DataType.DATA_TYPE_CLIENT_STATE;
        case 2:
        case "DATA_TYPE_CONSENSUS_STATE":
            return DataType.DATA_TYPE_CONSENSUS_STATE;
        case 3:
        case "DATA_TYPE_CONNECTION_STATE":
            return DataType.DATA_TYPE_CONNECTION_STATE;
        case 4:
        case "DATA_TYPE_CHANNEL_STATE":
            return DataType.DATA_TYPE_CHANNEL_STATE;
        case 5:
        case "DATA_TYPE_PACKET_COMMITMENT":
            return DataType.DATA_TYPE_PACKET_COMMITMENT;
        case 6:
        case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
            return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;
        case 7:
        case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
            return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;
        case 8:
        case "DATA_TYPE_NEXT_SEQUENCE_RECV":
            return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;
        case 9:
        case "DATA_TYPE_HEADER":
            return DataType.DATA_TYPE_HEADER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DataType.UNRECOGNIZED;
    }
}
exports.dataTypeFromJSON = dataTypeFromJSON;
function dataTypeToJSON(object) {
    switch (object) {
        case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
            return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
        case DataType.DATA_TYPE_CLIENT_STATE:
            return "DATA_TYPE_CLIENT_STATE";
        case DataType.DATA_TYPE_CONSENSUS_STATE:
            return "DATA_TYPE_CONSENSUS_STATE";
        case DataType.DATA_TYPE_CONNECTION_STATE:
            return "DATA_TYPE_CONNECTION_STATE";
        case DataType.DATA_TYPE_CHANNEL_STATE:
            return "DATA_TYPE_CHANNEL_STATE";
        case DataType.DATA_TYPE_PACKET_COMMITMENT:
            return "DATA_TYPE_PACKET_COMMITMENT";
        case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
            return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
        case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
            return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
        case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
            return "DATA_TYPE_NEXT_SEQUENCE_RECV";
        case DataType.DATA_TYPE_HEADER:
            return "DATA_TYPE_HEADER";
        case DataType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.dataTypeToJSON = dataTypeToJSON;
function createBaseClientState() {
    return {
        sequence: helpers_1.Long.UZERO,
        frozenSequence: helpers_1.Long.UZERO,
        consensusState: exports.ConsensusState.fromPartial({}),
        allowUpdateAfterProposal: false
    };
}
exports.ClientState = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ClientState",
    aminoType: "cosmos-sdk/ClientState",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (!message.frozenSequence.isZero()) {
            writer.uint32(16).uint64(message.frozenSequence);
        }
        if (message.consensusState !== undefined) {
            exports.ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
        }
        if (message.allowUpdateAfterProposal === true) {
            writer.uint32(32).bool(message.allowUpdateAfterProposal);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.frozenSequence = reader.uint64();
                    break;
                case 3:
                    message.consensusState = exports.ConsensusState.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.allowUpdateAfterProposal = reader.bool();
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
            sequence: (0, helpers_1.isSet)(object.sequence) ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO,
            frozenSequence: (0, helpers_1.isSet)(object.frozenSequence) ? helpers_1.Long.fromValue(object.frozenSequence) : helpers_1.Long.UZERO,
            consensusState: (0, helpers_1.isSet)(object.consensusState) ? exports.ConsensusState.fromJSON(object.consensusState) : undefined,
            allowUpdateAfterProposal: (0, helpers_1.isSet)(object.allowUpdateAfterProposal) ? Boolean(object.allowUpdateAfterProposal) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || helpers_1.Long.UZERO).toString());
        message.frozenSequence !== undefined && (obj.frozenSequence = (message.frozenSequence || helpers_1.Long.UZERO).toString());
        message.consensusState !== undefined && (obj.consensusState = message.consensusState ? exports.ConsensusState.toJSON(message.consensusState) : undefined);
        message.allowUpdateAfterProposal !== undefined && (obj.allowUpdateAfterProposal = message.allowUpdateAfterProposal);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO;
        message.frozenSequence = object.frozenSequence !== undefined && object.frozenSequence !== null ? helpers_1.Long.fromValue(object.frozenSequence) : helpers_1.Long.UZERO;
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? exports.ConsensusState.fromPartial(object.consensusState) : undefined;
        message.allowUpdateAfterProposal = object.allowUpdateAfterProposal ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            sequence: helpers_1.Long.fromString(object.sequence),
            frozenSequence: helpers_1.Long.fromString(object.frozen_sequence),
            consensusState: object?.consensus_state ? exports.ConsensusState.fromAmino(object.consensus_state) : undefined,
            allowUpdateAfterProposal: object.allow_update_after_proposal
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.frozen_sequence = message.frozenSequence ? message.frozenSequence.toString() : undefined;
        obj.consensus_state = message.consensusState ? exports.ConsensusState.toAmino(message.consensusState) : undefined;
        obj.allow_update_after_proposal = message.allowUpdateAfterProposal;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: exports.ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientState.decode(message.value);
    },
    toProto(message) {
        return exports.ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ClientState",
            value: exports.ClientState.encode(message).finish()
        };
    }
};
function createBaseConsensusState() {
    return {
        publicKey: any_1.Any.fromPartial({}),
        diversifier: "",
        timestamp: helpers_1.Long.UZERO
    };
}
exports.ConsensusState = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusState",
    aminoType: "cosmos-sdk/ConsensusState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.publicKey !== undefined) {
            any_1.Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.diversifier !== "") {
            writer.uint32(18).string(message.diversifier);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(24).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.publicKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.diversifier = reader.string();
                    break;
                case 3:
                    message.timestamp = reader.uint64();
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
            publicKey: (0, helpers_1.isSet)(object.publicKey) ? any_1.Any.fromJSON(object.publicKey) : undefined,
            diversifier: (0, helpers_1.isSet)(object.diversifier) ? String(object.diversifier) : "",
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? helpers_1.Long.fromValue(object.timestamp) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.publicKey !== undefined && (obj.publicKey = message.publicKey ? any_1.Any.toJSON(message.publicKey) : undefined);
        message.diversifier !== undefined && (obj.diversifier = message.diversifier);
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusState();
        message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? any_1.Any.fromPartial(object.publicKey) : undefined;
        message.diversifier = object.diversifier ?? "";
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? helpers_1.Long.fromValue(object.timestamp) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            publicKey: object?.public_key ? any_1.Any.fromAmino(object.public_key) : undefined,
            diversifier: object.diversifier,
            timestamp: helpers_1.Long.fromString(object.timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.public_key = message.publicKey ? any_1.Any.toAmino(message.publicKey) : undefined;
        obj.diversifier = message.diversifier;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusState",
            value: exports.ConsensusState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConsensusState.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusState",
            value: exports.ConsensusState.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        sequence: helpers_1.Long.UZERO,
        timestamp: helpers_1.Long.UZERO,
        signature: new Uint8Array(),
        newPublicKey: any_1.Any.fromPartial({}),
        newDiversifier: ""
    };
}
exports.Header = {
    typeUrl: "/ibc.lightclients.solomachine.v1.Header",
    aminoType: "cosmos-sdk/Header",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.signature.length !== 0) {
            writer.uint32(26).bytes(message.signature);
        }
        if (message.newPublicKey !== undefined) {
            any_1.Any.encode(message.newPublicKey, writer.uint32(34).fork()).ldelim();
        }
        if (message.newDiversifier !== "") {
            writer.uint32(42).string(message.newDiversifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                case 3:
                    message.signature = reader.bytes();
                    break;
                case 4:
                    message.newPublicKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.newDiversifier = reader.string();
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
            sequence: (0, helpers_1.isSet)(object.sequence) ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO,
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? helpers_1.Long.fromValue(object.timestamp) : helpers_1.Long.UZERO,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array(),
            newPublicKey: (0, helpers_1.isSet)(object.newPublicKey) ? any_1.Any.fromJSON(object.newPublicKey) : undefined,
            newDiversifier: (0, helpers_1.isSet)(object.newDiversifier) ? String(object.newDiversifier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || helpers_1.Long.UZERO).toString());
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || helpers_1.Long.UZERO).toString());
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.newPublicKey !== undefined && (obj.newPublicKey = message.newPublicKey ? any_1.Any.toJSON(message.newPublicKey) : undefined);
        message.newDiversifier !== undefined && (obj.newDiversifier = message.newDiversifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO;
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? helpers_1.Long.fromValue(object.timestamp) : helpers_1.Long.UZERO;
        message.signature = object.signature ?? new Uint8Array();
        message.newPublicKey = object.newPublicKey !== undefined && object.newPublicKey !== null ? any_1.Any.fromPartial(object.newPublicKey) : undefined;
        message.newDiversifier = object.newDiversifier ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            sequence: helpers_1.Long.fromString(object.sequence),
            timestamp: helpers_1.Long.fromString(object.timestamp),
            signature: object.signature,
            newPublicKey: object?.new_public_key ? any_1.Any.fromAmino(object.new_public_key) : undefined,
            newDiversifier: object.new_diversifier
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        obj.signature = message.signature;
        obj.new_public_key = message.newPublicKey ? any_1.Any.toAmino(message.newPublicKey) : undefined;
        obj.new_diversifier = message.newDiversifier;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Header.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Header",
            value: exports.Header.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Header.decode(message.value);
    },
    toProto(message) {
        return exports.Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.Header",
            value: exports.Header.encode(message).finish()
        };
    }
};
function createBaseMisbehaviour() {
    return {
        clientId: "",
        sequence: helpers_1.Long.UZERO,
        signatureOne: exports.SignatureAndData.fromPartial({}),
        signatureTwo: exports.SignatureAndData.fromPartial({})
    };
}
exports.Misbehaviour = {
    typeUrl: "/ibc.lightclients.solomachine.v1.Misbehaviour",
    aminoType: "cosmos-sdk/Misbehaviour",
    encode(message, writer = _m0.Writer.create()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.signatureOne !== undefined) {
            exports.SignatureAndData.encode(message.signatureOne, writer.uint32(26).fork()).ldelim();
        }
        if (message.signatureTwo !== undefined) {
            exports.SignatureAndData.encode(message.signatureTwo, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.sequence = reader.uint64();
                    break;
                case 3:
                    message.signatureOne = exports.SignatureAndData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signatureTwo = exports.SignatureAndData.decode(reader, reader.uint32());
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
            clientId: (0, helpers_1.isSet)(object.clientId) ? String(object.clientId) : "",
            sequence: (0, helpers_1.isSet)(object.sequence) ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO,
            signatureOne: (0, helpers_1.isSet)(object.signatureOne) ? exports.SignatureAndData.fromJSON(object.signatureOne) : undefined,
            signatureTwo: (0, helpers_1.isSet)(object.signatureTwo) ? exports.SignatureAndData.fromJSON(object.signatureTwo) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.sequence !== undefined && (obj.sequence = (message.sequence || helpers_1.Long.UZERO).toString());
        message.signatureOne !== undefined && (obj.signatureOne = message.signatureOne ? exports.SignatureAndData.toJSON(message.signatureOne) : undefined);
        message.signatureTwo !== undefined && (obj.signatureTwo = message.signatureTwo ? exports.SignatureAndData.toJSON(message.signatureTwo) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMisbehaviour();
        message.clientId = object.clientId ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO;
        message.signatureOne = object.signatureOne !== undefined && object.signatureOne !== null ? exports.SignatureAndData.fromPartial(object.signatureOne) : undefined;
        message.signatureTwo = object.signatureTwo !== undefined && object.signatureTwo !== null ? exports.SignatureAndData.fromPartial(object.signatureTwo) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            clientId: object.client_id,
            sequence: helpers_1.Long.fromString(object.sequence),
            signatureOne: object?.signature_one ? exports.SignatureAndData.fromAmino(object.signature_one) : undefined,
            signatureTwo: object?.signature_two ? exports.SignatureAndData.fromAmino(object.signature_two) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.clientId;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.signature_one = message.signatureOne ? exports.SignatureAndData.toAmino(message.signatureOne) : undefined;
        obj.signature_two = message.signatureTwo ? exports.SignatureAndData.toAmino(message.signatureTwo) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Misbehaviour.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Misbehaviour",
            value: exports.Misbehaviour.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.Misbehaviour.decode(message.value);
    },
    toProto(message) {
        return exports.Misbehaviour.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.Misbehaviour",
            value: exports.Misbehaviour.encode(message).finish()
        };
    }
};
function createBaseSignatureAndData() {
    return {
        signature: new Uint8Array(),
        dataType: 0,
        data: new Uint8Array(),
        timestamp: helpers_1.Long.UZERO
    };
}
exports.SignatureAndData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.SignatureAndData",
    aminoType: "cosmos-sdk/SignatureAndData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.signature.length !== 0) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.dataType !== 0) {
            writer.uint32(16).int32(message.dataType);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(32).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureAndData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signature = reader.bytes();
                    break;
                case 2:
                    message.dataType = reader.int32();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.timestamp = reader.uint64();
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
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array(),
            dataType: (0, helpers_1.isSet)(object.dataType) ? dataTypeFromJSON(object.dataType) : -1,
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? helpers_1.Long.fromValue(object.timestamp) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.dataType !== undefined && (obj.dataType = dataTypeToJSON(message.dataType));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignatureAndData();
        message.signature = object.signature ?? new Uint8Array();
        message.dataType = object.dataType ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? helpers_1.Long.fromValue(object.timestamp) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            signature: object.signature,
            dataType: (0, helpers_1.isSet)(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
            data: object.data,
            timestamp: helpers_1.Long.fromString(object.timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signature = message.signature;
        obj.data_type = message.dataType;
        obj.data = message.data;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignatureAndData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignatureAndData",
            value: exports.SignatureAndData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignatureAndData.decode(message.value);
    },
    toProto(message) {
        return exports.SignatureAndData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.SignatureAndData",
            value: exports.SignatureAndData.encode(message).finish()
        };
    }
};
function createBaseTimestampedSignatureData() {
    return {
        signatureData: new Uint8Array(),
        timestamp: helpers_1.Long.UZERO
    };
}
exports.TimestampedSignatureData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.TimestampedSignatureData",
    aminoType: "cosmos-sdk/TimestampedSignatureData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.signatureData.length !== 0) {
            writer.uint32(10).bytes(message.signatureData);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(16).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestampedSignatureData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatureData = reader.bytes();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
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
            signatureData: (0, helpers_1.isSet)(object.signatureData) ? (0, helpers_1.bytesFromBase64)(object.signatureData) : new Uint8Array(),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? helpers_1.Long.fromValue(object.timestamp) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.signatureData !== undefined && (obj.signatureData = (0, helpers_1.base64FromBytes)(message.signatureData !== undefined ? message.signatureData : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTimestampedSignatureData();
        message.signatureData = object.signatureData ?? new Uint8Array();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? helpers_1.Long.fromValue(object.timestamp) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            signatureData: object.signature_data,
            timestamp: helpers_1.Long.fromString(object.timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signature_data = message.signatureData;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TimestampedSignatureData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TimestampedSignatureData",
            value: exports.TimestampedSignatureData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.TimestampedSignatureData.decode(message.value);
    },
    toProto(message) {
        return exports.TimestampedSignatureData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.TimestampedSignatureData",
            value: exports.TimestampedSignatureData.encode(message).finish()
        };
    }
};
function createBaseSignBytes() {
    return {
        sequence: helpers_1.Long.UZERO,
        timestamp: helpers_1.Long.UZERO,
        diversifier: "",
        dataType: 0,
        data: new Uint8Array()
    };
}
exports.SignBytes = {
    typeUrl: "/ibc.lightclients.solomachine.v1.SignBytes",
    aminoType: "cosmos-sdk/SignBytes",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (!message.timestamp.isZero()) {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.diversifier !== "") {
            writer.uint32(26).string(message.diversifier);
        }
        if (message.dataType !== 0) {
            writer.uint32(32).int32(message.dataType);
        }
        if (message.data.length !== 0) {
            writer.uint32(42).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignBytes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = reader.uint64();
                    break;
                case 2:
                    message.timestamp = reader.uint64();
                    break;
                case 3:
                    message.diversifier = reader.string();
                    break;
                case 4:
                    message.dataType = reader.int32();
                    break;
                case 5:
                    message.data = reader.bytes();
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
            sequence: (0, helpers_1.isSet)(object.sequence) ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO,
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? helpers_1.Long.fromValue(object.timestamp) : helpers_1.Long.UZERO,
            diversifier: (0, helpers_1.isSet)(object.diversifier) ? String(object.diversifier) : "",
            dataType: (0, helpers_1.isSet)(object.dataType) ? dataTypeFromJSON(object.dataType) : -1,
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || helpers_1.Long.UZERO).toString());
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || helpers_1.Long.UZERO).toString());
        message.diversifier !== undefined && (obj.diversifier = message.diversifier);
        message.dataType !== undefined && (obj.dataType = dataTypeToJSON(message.dataType));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignBytes();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? helpers_1.Long.fromValue(object.sequence) : helpers_1.Long.UZERO;
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? helpers_1.Long.fromValue(object.timestamp) : helpers_1.Long.UZERO;
        message.diversifier = object.diversifier ?? "";
        message.dataType = object.dataType ?? 0;
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            sequence: helpers_1.Long.fromString(object.sequence),
            timestamp: helpers_1.Long.fromString(object.timestamp),
            diversifier: object.diversifier,
            dataType: (0, helpers_1.isSet)(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
            data: object.data
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        obj.diversifier = message.diversifier;
        obj.data_type = message.dataType;
        obj.data = message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignBytes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignBytes",
            value: exports.SignBytes.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SignBytes.decode(message.value);
    },
    toProto(message) {
        return exports.SignBytes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.SignBytes",
            value: exports.SignBytes.encode(message).finish()
        };
    }
};
function createBaseHeaderData() {
    return {
        newPubKey: any_1.Any.fromPartial({}),
        newDiversifier: ""
    };
}
exports.HeaderData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.HeaderData",
    aminoType: "cosmos-sdk/HeaderData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.newPubKey !== undefined) {
            any_1.Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
        }
        if (message.newDiversifier !== "") {
            writer.uint32(18).string(message.newDiversifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeaderData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newPubKey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.newDiversifier = reader.string();
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
            newPubKey: (0, helpers_1.isSet)(object.newPubKey) ? any_1.Any.fromJSON(object.newPubKey) : undefined,
            newDiversifier: (0, helpers_1.isSet)(object.newDiversifier) ? String(object.newDiversifier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.newPubKey !== undefined && (obj.newPubKey = message.newPubKey ? any_1.Any.toJSON(message.newPubKey) : undefined);
        message.newDiversifier !== undefined && (obj.newDiversifier = message.newDiversifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeaderData();
        message.newPubKey = object.newPubKey !== undefined && object.newPubKey !== null ? any_1.Any.fromPartial(object.newPubKey) : undefined;
        message.newDiversifier = object.newDiversifier ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            newPubKey: object?.new_pub_key ? any_1.Any.fromAmino(object.new_pub_key) : undefined,
            newDiversifier: object.new_diversifier
        };
    },
    toAmino(message) {
        const obj = {};
        obj.new_pub_key = message.newPubKey ? any_1.Any.toAmino(message.newPubKey) : undefined;
        obj.new_diversifier = message.newDiversifier;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.HeaderData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HeaderData",
            value: exports.HeaderData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.HeaderData.decode(message.value);
    },
    toProto(message) {
        return exports.HeaderData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.HeaderData",
            value: exports.HeaderData.encode(message).finish()
        };
    }
};
function createBaseClientStateData() {
    return {
        path: new Uint8Array(),
        clientState: any_1.Any.fromPartial({})
    };
}
exports.ClientStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ClientStateData",
    aminoType: "cosmos-sdk/ClientStateData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.clientState !== undefined) {
            any_1.Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.clientState = any_1.Any.decode(reader, reader.uint32());
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            clientState: (0, helpers_1.isSet)(object.clientState) ? any_1.Any.fromJSON(object.clientState) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.clientState !== undefined && (obj.clientState = message.clientState ? any_1.Any.toJSON(message.clientState) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientStateData();
        message.path = object.path ?? new Uint8Array();
        message.clientState = object.clientState !== undefined && object.clientState !== null ? any_1.Any.fromPartial(object.clientState) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            clientState: object?.client_state ? any_1.Any.fromAmino(object.client_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.client_state = message.clientState ? any_1.Any.toAmino(message.clientState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ClientStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientStateData",
            value: exports.ClientStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ClientStateData.decode(message.value);
    },
    toProto(message) {
        return exports.ClientStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ClientStateData",
            value: exports.ClientStateData.encode(message).finish()
        };
    }
};
function createBaseConsensusStateData() {
    return {
        path: new Uint8Array(),
        consensusState: any_1.Any.fromPartial({})
    };
}
exports.ConsensusStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusStateData",
    aminoType: "cosmos-sdk/ConsensusStateData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.consensusState !== undefined) {
            any_1.Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.consensusState = any_1.Any.decode(reader, reader.uint32());
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            consensusState: (0, helpers_1.isSet)(object.consensusState) ? any_1.Any.fromJSON(object.consensusState) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.consensusState !== undefined && (obj.consensusState = message.consensusState ? any_1.Any.toJSON(message.consensusState) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusStateData();
        message.path = object.path ?? new Uint8Array();
        message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? any_1.Any.fromPartial(object.consensusState) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            consensusState: object?.consensus_state ? any_1.Any.fromAmino(object.consensus_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.consensus_state = message.consensusState ? any_1.Any.toAmino(message.consensusState) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConsensusStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusStateData",
            value: exports.ConsensusStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConsensusStateData.decode(message.value);
    },
    toProto(message) {
        return exports.ConsensusStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusStateData",
            value: exports.ConsensusStateData.encode(message).finish()
        };
    }
};
function createBaseConnectionStateData() {
    return {
        path: new Uint8Array(),
        connection: connection_1.ConnectionEnd.fromPartial({})
    };
}
exports.ConnectionStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ConnectionStateData",
    aminoType: "cosmos-sdk/ConnectionStateData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.connection !== undefined) {
            connection_1.ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectionStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.connection = connection_1.ConnectionEnd.decode(reader, reader.uint32());
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            connection: (0, helpers_1.isSet)(object.connection) ? connection_1.ConnectionEnd.fromJSON(object.connection) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.connection !== undefined && (obj.connection = message.connection ? connection_1.ConnectionEnd.toJSON(message.connection) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectionStateData();
        message.path = object.path ?? new Uint8Array();
        message.connection = object.connection !== undefined && object.connection !== null ? connection_1.ConnectionEnd.fromPartial(object.connection) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            connection: object?.connection ? connection_1.ConnectionEnd.fromAmino(object.connection) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.connection = message.connection ? connection_1.ConnectionEnd.toAmino(message.connection) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ConnectionStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConnectionStateData",
            value: exports.ConnectionStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ConnectionStateData.decode(message.value);
    },
    toProto(message) {
        return exports.ConnectionStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ConnectionStateData",
            value: exports.ConnectionStateData.encode(message).finish()
        };
    }
};
function createBaseChannelStateData() {
    return {
        path: new Uint8Array(),
        channel: channel_1.Channel.fromPartial({})
    };
}
exports.ChannelStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ChannelStateData",
    aminoType: "cosmos-sdk/ChannelStateData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChannelStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            channel: (0, helpers_1.isSet)(object.channel) ? channel_1.Channel.fromJSON(object.channel) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.channel !== undefined && (obj.channel = message.channel ? channel_1.Channel.toJSON(message.channel) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChannelStateData();
        message.path = object.path ?? new Uint8Array();
        message.channel = object.channel !== undefined && object.channel !== null ? channel_1.Channel.fromPartial(object.channel) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            channel: object?.channel ? channel_1.Channel.fromAmino(object.channel) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.channel = message.channel ? channel_1.Channel.toAmino(message.channel) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.ChannelStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ChannelStateData",
            value: exports.ChannelStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.ChannelStateData.decode(message.value);
    },
    toProto(message) {
        return exports.ChannelStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ChannelStateData",
            value: exports.ChannelStateData.encode(message).finish()
        };
    }
};
function createBasePacketCommitmentData() {
    return {
        path: new Uint8Array(),
        commitment: new Uint8Array()
    };
}
exports.PacketCommitmentData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.PacketCommitmentData",
    aminoType: "cosmos-sdk/PacketCommitmentData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.commitment.length !== 0) {
            writer.uint32(18).bytes(message.commitment);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketCommitmentData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.commitment = reader.bytes();
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            commitment: (0, helpers_1.isSet)(object.commitment) ? (0, helpers_1.bytesFromBase64)(object.commitment) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.commitment !== undefined && (obj.commitment = (0, helpers_1.base64FromBytes)(message.commitment !== undefined ? message.commitment : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacketCommitmentData();
        message.path = object.path ?? new Uint8Array();
        message.commitment = object.commitment ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            commitment: object.commitment
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.commitment = message.commitment;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PacketCommitmentData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketCommitmentData",
            value: exports.PacketCommitmentData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PacketCommitmentData.decode(message.value);
    },
    toProto(message) {
        return exports.PacketCommitmentData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.PacketCommitmentData",
            value: exports.PacketCommitmentData.encode(message).finish()
        };
    }
};
function createBasePacketAcknowledgementData() {
    return {
        path: new Uint8Array(),
        acknowledgement: new Uint8Array()
    };
}
exports.PacketAcknowledgementData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.PacketAcknowledgementData",
    aminoType: "cosmos-sdk/PacketAcknowledgementData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketAcknowledgementData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.acknowledgement = reader.bytes();
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            acknowledgement: (0, helpers_1.isSet)(object.acknowledgement) ? (0, helpers_1.bytesFromBase64)(object.acknowledgement) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.acknowledgement !== undefined && (obj.acknowledgement = (0, helpers_1.base64FromBytes)(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacketAcknowledgementData();
        message.path = object.path ?? new Uint8Array();
        message.acknowledgement = object.acknowledgement ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            acknowledgement: object.acknowledgement
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.acknowledgement = message.acknowledgement;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PacketAcknowledgementData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketAcknowledgementData",
            value: exports.PacketAcknowledgementData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PacketAcknowledgementData.decode(message.value);
    },
    toProto(message) {
        return exports.PacketAcknowledgementData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.PacketAcknowledgementData",
            value: exports.PacketAcknowledgementData.encode(message).finish()
        };
    }
};
function createBasePacketReceiptAbsenceData() {
    return {
        path: new Uint8Array()
    };
}
exports.PacketReceiptAbsenceData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData",
    aminoType: "cosmos-sdk/PacketReceiptAbsenceData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketReceiptAbsenceData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacketReceiptAbsenceData();
        message.path = object.path ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PacketReceiptAbsenceData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketReceiptAbsenceData",
            value: exports.PacketReceiptAbsenceData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.PacketReceiptAbsenceData.decode(message.value);
    },
    toProto(message) {
        return exports.PacketReceiptAbsenceData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData",
            value: exports.PacketReceiptAbsenceData.encode(message).finish()
        };
    }
};
function createBaseNextSequenceRecvData() {
    return {
        path: new Uint8Array(),
        nextSeqRecv: helpers_1.Long.UZERO
    };
}
exports.NextSequenceRecvData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.NextSequenceRecvData",
    aminoType: "cosmos-sdk/NextSequenceRecvData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (!message.nextSeqRecv.isZero()) {
            writer.uint32(16).uint64(message.nextSeqRecv);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNextSequenceRecvData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.nextSeqRecv = reader.uint64();
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
            path: (0, helpers_1.isSet)(object.path) ? (0, helpers_1.bytesFromBase64)(object.path) : new Uint8Array(),
            nextSeqRecv: (0, helpers_1.isSet)(object.nextSeqRecv) ? helpers_1.Long.fromValue(object.nextSeqRecv) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = (0, helpers_1.base64FromBytes)(message.path !== undefined ? message.path : new Uint8Array()));
        message.nextSeqRecv !== undefined && (obj.nextSeqRecv = (message.nextSeqRecv || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNextSequenceRecvData();
        message.path = object.path ?? new Uint8Array();
        message.nextSeqRecv = object.nextSeqRecv !== undefined && object.nextSeqRecv !== null ? helpers_1.Long.fromValue(object.nextSeqRecv) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            nextSeqRecv: helpers_1.Long.fromString(object.next_seq_recv)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.next_seq_recv = message.nextSeqRecv ? message.nextSeqRecv.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.NextSequenceRecvData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/NextSequenceRecvData",
            value: exports.NextSequenceRecvData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.NextSequenceRecvData.decode(message.value);
    },
    toProto(message) {
        return exports.NextSequenceRecvData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.NextSequenceRecvData",
            value: exports.NextSequenceRecvData.encode(message).finish()
        };
    }
};
//# sourceMappingURL=solomachine.js.map