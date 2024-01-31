import { Any } from "../../../../google/protobuf/any";
import { ConnectionEnd } from "../../../core/connection/v1/connection";
import { Channel } from "../../../core/channel/v1/channel";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
export var DataType;
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
})(DataType || (DataType = {}));
export const DataTypeSDKType = DataType;
export const DataTypeAmino = DataType;
export function dataTypeFromJSON(object) {
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
export function dataTypeToJSON(object) {
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
function createBaseClientState() {
    return {
        sequence: Long.UZERO,
        frozen_sequence: Long.UZERO,
        consensus_state: ConsensusState.fromPartial({}),
        allow_update_after_proposal: false
    };
}
export const ClientState = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ClientState",
    aminoType: "cosmos-sdk/ClientState",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.sequence.isZero()) {
            writer.uint32(8).uint64(message.sequence);
        }
        if (!message.frozen_sequence.isZero()) {
            writer.uint32(16).uint64(message.frozen_sequence);
        }
        if (message.consensus_state !== undefined) {
            ConsensusState.encode(message.consensus_state, writer.uint32(26).fork()).ldelim();
        }
        if (message.allow_update_after_proposal === true) {
            writer.uint32(32).bool(message.allow_update_after_proposal);
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
                    message.frozen_sequence = reader.uint64();
                    break;
                case 3:
                    message.consensus_state = ConsensusState.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.allow_update_after_proposal = reader.bool();
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
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
            frozen_sequence: isSet(object.frozen_sequence) ? Long.fromValue(object.frozen_sequence) : Long.UZERO,
            consensus_state: isSet(object.consensus_state) ? ConsensusState.fromJSON(object.consensus_state) : undefined,
            allow_update_after_proposal: isSet(object.allow_update_after_proposal) ? Boolean(object.allow_update_after_proposal) : false
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
        message.frozen_sequence !== undefined && (obj.frozen_sequence = (message.frozen_sequence || Long.UZERO).toString());
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? ConsensusState.toJSON(message.consensus_state) : undefined);
        message.allow_update_after_proposal !== undefined && (obj.allow_update_after_proposal = message.allow_update_after_proposal);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientState();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        message.frozen_sequence = object.frozen_sequence !== undefined && object.frozen_sequence !== null ? Long.fromValue(object.frozen_sequence) : Long.UZERO;
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? ConsensusState.fromPartial(object.consensus_state) : undefined;
        message.allow_update_after_proposal = object.allow_update_after_proposal ?? false;
        return message;
    },
    fromAmino(object) {
        return {
            sequence: Long.fromString(object.sequence),
            frozen_sequence: Long.fromString(object.frozen_sequence),
            consensus_state: object?.consensus_state ? ConsensusState.fromAmino(object.consensus_state) : undefined,
            allow_update_after_proposal: object.allow_update_after_proposal
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.frozen_sequence = message.frozen_sequence ? message.frozen_sequence.toString() : undefined;
        obj.consensus_state = message.consensus_state ? ConsensusState.toAmino(message.consensus_state) : undefined;
        obj.allow_update_after_proposal = message.allow_update_after_proposal;
        return obj;
    },
    fromAminoMsg(object) {
        return ClientState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientState",
            value: ClientState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientState.decode(message.value);
    },
    toProto(message) {
        return ClientState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ClientState",
            value: ClientState.encode(message).finish()
        };
    }
};
function createBaseConsensusState() {
    return {
        public_key: Any.fromPartial({}),
        diversifier: "",
        timestamp: Long.UZERO
    };
}
export const ConsensusState = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusState",
    aminoType: "cosmos-sdk/ConsensusState",
    encode(message, writer = _m0.Writer.create()) {
        if (message.public_key !== undefined) {
            Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
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
                    message.public_key = Any.decode(reader, reader.uint32());
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
            public_key: isSet(object.public_key) ? Any.fromJSON(object.public_key) : undefined,
            diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
            timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.public_key !== undefined && (obj.public_key = message.public_key ? Any.toJSON(message.public_key) : undefined);
        message.diversifier !== undefined && (obj.diversifier = message.diversifier);
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusState();
        message.public_key = object.public_key !== undefined && object.public_key !== null ? Any.fromPartial(object.public_key) : undefined;
        message.diversifier = object.diversifier ?? "";
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            public_key: object?.public_key ? Any.fromAmino(object.public_key) : undefined,
            diversifier: object.diversifier,
            timestamp: Long.fromString(object.timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.public_key = message.public_key ? Any.toAmino(message.public_key) : undefined;
        obj.diversifier = message.diversifier;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConsensusState.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusState",
            value: ConsensusState.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConsensusState.decode(message.value);
    },
    toProto(message) {
        return ConsensusState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusState",
            value: ConsensusState.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        sequence: Long.UZERO,
        timestamp: Long.UZERO,
        signature: new Uint8Array(),
        new_public_key: Any.fromPartial({}),
        new_diversifier: ""
    };
}
export const Header = {
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
        if (message.new_public_key !== undefined) {
            Any.encode(message.new_public_key, writer.uint32(34).fork()).ldelim();
        }
        if (message.new_diversifier !== "") {
            writer.uint32(42).string(message.new_diversifier);
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
                    message.new_public_key = Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.new_diversifier = reader.string();
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
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
            timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO,
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
            new_public_key: isSet(object.new_public_key) ? Any.fromJSON(object.new_public_key) : undefined,
            new_diversifier: isSet(object.new_diversifier) ? String(object.new_diversifier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
        message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.new_public_key !== undefined && (obj.new_public_key = message.new_public_key ? Any.toJSON(message.new_public_key) : undefined);
        message.new_diversifier !== undefined && (obj.new_diversifier = message.new_diversifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
        message.signature = object.signature ?? new Uint8Array();
        message.new_public_key = object.new_public_key !== undefined && object.new_public_key !== null ? Any.fromPartial(object.new_public_key) : undefined;
        message.new_diversifier = object.new_diversifier ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            sequence: Long.fromString(object.sequence),
            timestamp: Long.fromString(object.timestamp),
            signature: object.signature,
            new_public_key: object?.new_public_key ? Any.fromAmino(object.new_public_key) : undefined,
            new_diversifier: object.new_diversifier
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        obj.signature = message.signature;
        obj.new_public_key = message.new_public_key ? Any.toAmino(message.new_public_key) : undefined;
        obj.new_diversifier = message.new_diversifier;
        return obj;
    },
    fromAminoMsg(object) {
        return Header.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Header",
            value: Header.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Header.decode(message.value);
    },
    toProto(message) {
        return Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.Header",
            value: Header.encode(message).finish()
        };
    }
};
function createBaseMisbehaviour() {
    return {
        client_id: "",
        sequence: Long.UZERO,
        signature_one: SignatureAndData.fromPartial({}),
        signature_two: SignatureAndData.fromPartial({})
    };
}
export const Misbehaviour = {
    typeUrl: "/ibc.lightclients.solomachine.v1.Misbehaviour",
    aminoType: "cosmos-sdk/Misbehaviour",
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (!message.sequence.isZero()) {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.signature_one !== undefined) {
            SignatureAndData.encode(message.signature_one, writer.uint32(26).fork()).ldelim();
        }
        if (message.signature_two !== undefined) {
            SignatureAndData.encode(message.signature_two, writer.uint32(34).fork()).ldelim();
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
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.sequence = reader.uint64();
                    break;
                case 3:
                    message.signature_one = SignatureAndData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signature_two = SignatureAndData.decode(reader, reader.uint32());
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
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
            signature_one: isSet(object.signature_one) ? SignatureAndData.fromJSON(object.signature_one) : undefined,
            signature_two: isSet(object.signature_two) ? SignatureAndData.fromJSON(object.signature_two) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
        message.signature_one !== undefined && (obj.signature_one = message.signature_one ? SignatureAndData.toJSON(message.signature_one) : undefined);
        message.signature_two !== undefined && (obj.signature_two = message.signature_two ? SignatureAndData.toJSON(message.signature_two) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMisbehaviour();
        message.client_id = object.client_id ?? "";
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        message.signature_one = object.signature_one !== undefined && object.signature_one !== null ? SignatureAndData.fromPartial(object.signature_one) : undefined;
        message.signature_two = object.signature_two !== undefined && object.signature_two !== null ? SignatureAndData.fromPartial(object.signature_two) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            client_id: object.client_id,
            sequence: Long.fromString(object.sequence),
            signature_one: object?.signature_one ? SignatureAndData.fromAmino(object.signature_one) : undefined,
            signature_two: object?.signature_two ? SignatureAndData.fromAmino(object.signature_two) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.client_id = message.client_id;
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.signature_one = message.signature_one ? SignatureAndData.toAmino(message.signature_one) : undefined;
        obj.signature_two = message.signature_two ? SignatureAndData.toAmino(message.signature_two) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Misbehaviour.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/Misbehaviour",
            value: Misbehaviour.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return Misbehaviour.decode(message.value);
    },
    toProto(message) {
        return Misbehaviour.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.Misbehaviour",
            value: Misbehaviour.encode(message).finish()
        };
    }
};
function createBaseSignatureAndData() {
    return {
        signature: new Uint8Array(),
        data_type: 0,
        data: new Uint8Array(),
        timestamp: Long.UZERO
    };
}
export const SignatureAndData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.SignatureAndData",
    aminoType: "cosmos-sdk/SignatureAndData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.signature.length !== 0) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.data_type !== 0) {
            writer.uint32(16).int32(message.data_type);
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
                    message.data_type = reader.int32();
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
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
            data_type: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.data_type !== undefined && (obj.data_type = dataTypeToJSON(message.data_type));
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignatureAndData();
        message.signature = object.signature ?? new Uint8Array();
        message.data_type = object.data_type ?? 0;
        message.data = object.data ?? new Uint8Array();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            signature: object.signature,
            data_type: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
            data: object.data,
            timestamp: Long.fromString(object.timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signature = message.signature;
        obj.data_type = message.data_type;
        obj.data = message.data;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SignatureAndData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignatureAndData",
            value: SignatureAndData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SignatureAndData.decode(message.value);
    },
    toProto(message) {
        return SignatureAndData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.SignatureAndData",
            value: SignatureAndData.encode(message).finish()
        };
    }
};
function createBaseTimestampedSignatureData() {
    return {
        signature_data: new Uint8Array(),
        timestamp: Long.UZERO
    };
}
export const TimestampedSignatureData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.TimestampedSignatureData",
    aminoType: "cosmos-sdk/TimestampedSignatureData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.signature_data.length !== 0) {
            writer.uint32(10).bytes(message.signature_data);
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
                    message.signature_data = reader.bytes();
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
            signature_data: isSet(object.signature_data) ? bytesFromBase64(object.signature_data) : new Uint8Array(),
            timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.signature_data !== undefined && (obj.signature_data = base64FromBytes(message.signature_data !== undefined ? message.signature_data : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTimestampedSignatureData();
        message.signature_data = object.signature_data ?? new Uint8Array();
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            signature_data: object.signature_data,
            timestamp: Long.fromString(object.timestamp)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signature_data = message.signature_data;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TimestampedSignatureData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/TimestampedSignatureData",
            value: TimestampedSignatureData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return TimestampedSignatureData.decode(message.value);
    },
    toProto(message) {
        return TimestampedSignatureData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.TimestampedSignatureData",
            value: TimestampedSignatureData.encode(message).finish()
        };
    }
};
function createBaseSignBytes() {
    return {
        sequence: Long.UZERO,
        timestamp: Long.UZERO,
        diversifier: "",
        data_type: 0,
        data: new Uint8Array()
    };
}
export const SignBytes = {
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
        if (message.data_type !== 0) {
            writer.uint32(32).int32(message.data_type);
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
                    message.data_type = reader.int32();
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
            sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
            timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO,
            diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
            data_type: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
        message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
        message.diversifier !== undefined && (obj.diversifier = message.diversifier);
        message.data_type !== undefined && (obj.data_type = dataTypeToJSON(message.data_type));
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignBytes();
        message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
        message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
        message.diversifier = object.diversifier ?? "";
        message.data_type = object.data_type ?? 0;
        message.data = object.data ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            sequence: Long.fromString(object.sequence),
            timestamp: Long.fromString(object.timestamp),
            diversifier: object.diversifier,
            data_type: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
            data: object.data
        };
    },
    toAmino(message) {
        const obj = {};
        obj.sequence = message.sequence ? message.sequence.toString() : undefined;
        obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
        obj.diversifier = message.diversifier;
        obj.data_type = message.data_type;
        obj.data = message.data;
        return obj;
    },
    fromAminoMsg(object) {
        return SignBytes.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SignBytes",
            value: SignBytes.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return SignBytes.decode(message.value);
    },
    toProto(message) {
        return SignBytes.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.SignBytes",
            value: SignBytes.encode(message).finish()
        };
    }
};
function createBaseHeaderData() {
    return {
        new_pub_key: Any.fromPartial({}),
        new_diversifier: ""
    };
}
export const HeaderData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.HeaderData",
    aminoType: "cosmos-sdk/HeaderData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.new_pub_key !== undefined) {
            Any.encode(message.new_pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.new_diversifier !== "") {
            writer.uint32(18).string(message.new_diversifier);
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
                    message.new_pub_key = Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.new_diversifier = reader.string();
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
            new_pub_key: isSet(object.new_pub_key) ? Any.fromJSON(object.new_pub_key) : undefined,
            new_diversifier: isSet(object.new_diversifier) ? String(object.new_diversifier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.new_pub_key !== undefined && (obj.new_pub_key = message.new_pub_key ? Any.toJSON(message.new_pub_key) : undefined);
        message.new_diversifier !== undefined && (obj.new_diversifier = message.new_diversifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeaderData();
        message.new_pub_key = object.new_pub_key !== undefined && object.new_pub_key !== null ? Any.fromPartial(object.new_pub_key) : undefined;
        message.new_diversifier = object.new_diversifier ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            new_pub_key: object?.new_pub_key ? Any.fromAmino(object.new_pub_key) : undefined,
            new_diversifier: object.new_diversifier
        };
    },
    toAmino(message) {
        const obj = {};
        obj.new_pub_key = message.new_pub_key ? Any.toAmino(message.new_pub_key) : undefined;
        obj.new_diversifier = message.new_diversifier;
        return obj;
    },
    fromAminoMsg(object) {
        return HeaderData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/HeaderData",
            value: HeaderData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return HeaderData.decode(message.value);
    },
    toProto(message) {
        return HeaderData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.HeaderData",
            value: HeaderData.encode(message).finish()
        };
    }
};
function createBaseClientStateData() {
    return {
        path: new Uint8Array(),
        client_state: Any.fromPartial({})
    };
}
export const ClientStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ClientStateData",
    aminoType: "cosmos-sdk/ClientStateData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.client_state !== undefined) {
            Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
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
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toJSON(message.client_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClientStateData();
        message.path = object.path ?? new Uint8Array();
        message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            client_state: object?.client_state ? Any.fromAmino(object.client_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.client_state = message.client_state ? Any.toAmino(message.client_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ClientStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ClientStateData",
            value: ClientStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ClientStateData.decode(message.value);
    },
    toProto(message) {
        return ClientStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ClientStateData",
            value: ClientStateData.encode(message).finish()
        };
    }
};
function createBaseConsensusStateData() {
    return {
        path: new Uint8Array(),
        consensus_state: Any.fromPartial({})
    };
}
export const ConsensusStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusStateData",
    aminoType: "cosmos-sdk/ConsensusStateData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.consensus_state !== undefined) {
            Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
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
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusStateData();
        message.path = object.path ?? new Uint8Array();
        message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            consensus_state: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConsensusStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConsensusStateData",
            value: ConsensusStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConsensusStateData.decode(message.value);
    },
    toProto(message) {
        return ConsensusStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusStateData",
            value: ConsensusStateData.encode(message).finish()
        };
    }
};
function createBaseConnectionStateData() {
    return {
        path: new Uint8Array(),
        connection: ConnectionEnd.fromPartial({})
    };
}
export const ConnectionStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ConnectionStateData",
    aminoType: "cosmos-sdk/ConnectionStateData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.connection !== undefined) {
            ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
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
                    message.connection = ConnectionEnd.decode(reader, reader.uint32());
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
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            connection: isSet(object.connection) ? ConnectionEnd.fromJSON(object.connection) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.connection !== undefined && (obj.connection = message.connection ? ConnectionEnd.toJSON(message.connection) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConnectionStateData();
        message.path = object.path ?? new Uint8Array();
        message.connection = object.connection !== undefined && object.connection !== null ? ConnectionEnd.fromPartial(object.connection) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            connection: object?.connection ? ConnectionEnd.fromAmino(object.connection) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.connection = message.connection ? ConnectionEnd.toAmino(message.connection) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ConnectionStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ConnectionStateData",
            value: ConnectionStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ConnectionStateData.decode(message.value);
    },
    toProto(message) {
        return ConnectionStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ConnectionStateData",
            value: ConnectionStateData.encode(message).finish()
        };
    }
};
function createBaseChannelStateData() {
    return {
        path: new Uint8Array(),
        channel: Channel.fromPartial({})
    };
}
export const ChannelStateData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.ChannelStateData",
    aminoType: "cosmos-sdk/ChannelStateData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.channel !== undefined) {
            Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
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
                    message.channel = Channel.decode(reader, reader.uint32());
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
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseChannelStateData();
        message.path = object.path ?? new Uint8Array();
        message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            channel: object?.channel ? Channel.fromAmino(object.channel) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ChannelStateData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/ChannelStateData",
            value: ChannelStateData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return ChannelStateData.decode(message.value);
    },
    toProto(message) {
        return ChannelStateData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.ChannelStateData",
            value: ChannelStateData.encode(message).finish()
        };
    }
};
function createBasePacketCommitmentData() {
    return {
        path: new Uint8Array(),
        commitment: new Uint8Array()
    };
}
export const PacketCommitmentData = {
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
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.commitment !== undefined && (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
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
        return PacketCommitmentData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketCommitmentData",
            value: PacketCommitmentData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketCommitmentData.decode(message.value);
    },
    toProto(message) {
        return PacketCommitmentData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.PacketCommitmentData",
            value: PacketCommitmentData.encode(message).finish()
        };
    }
};
function createBasePacketAcknowledgementData() {
    return {
        path: new Uint8Array(),
        acknowledgement: new Uint8Array()
    };
}
export const PacketAcknowledgementData = {
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
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.acknowledgement !== undefined && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
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
        return PacketAcknowledgementData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketAcknowledgementData",
            value: PacketAcknowledgementData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketAcknowledgementData.decode(message.value);
    },
    toProto(message) {
        return PacketAcknowledgementData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.PacketAcknowledgementData",
            value: PacketAcknowledgementData.encode(message).finish()
        };
    }
};
function createBasePacketReceiptAbsenceData() {
    return {
        path: new Uint8Array()
    };
}
export const PacketReceiptAbsenceData = {
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
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
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
        return PacketReceiptAbsenceData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/PacketReceiptAbsenceData",
            value: PacketReceiptAbsenceData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return PacketReceiptAbsenceData.decode(message.value);
    },
    toProto(message) {
        return PacketReceiptAbsenceData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData",
            value: PacketReceiptAbsenceData.encode(message).finish()
        };
    }
};
function createBaseNextSequenceRecvData() {
    return {
        path: new Uint8Array(),
        next_seq_recv: Long.UZERO
    };
}
export const NextSequenceRecvData = {
    typeUrl: "/ibc.lightclients.solomachine.v1.NextSequenceRecvData",
    aminoType: "cosmos-sdk/NextSequenceRecvData",
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (!message.next_seq_recv.isZero()) {
            writer.uint32(16).uint64(message.next_seq_recv);
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
                    message.next_seq_recv = reader.uint64();
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
            path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
            next_seq_recv: isSet(object.next_seq_recv) ? Long.fromValue(object.next_seq_recv) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.next_seq_recv !== undefined && (obj.next_seq_recv = (message.next_seq_recv || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseNextSequenceRecvData();
        message.path = object.path ?? new Uint8Array();
        message.next_seq_recv = object.next_seq_recv !== undefined && object.next_seq_recv !== null ? Long.fromValue(object.next_seq_recv) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            path: object.path,
            next_seq_recv: Long.fromString(object.next_seq_recv)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.path = message.path;
        obj.next_seq_recv = message.next_seq_recv ? message.next_seq_recv.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return NextSequenceRecvData.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/NextSequenceRecvData",
            value: NextSequenceRecvData.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return NextSequenceRecvData.decode(message.value);
    },
    toProto(message) {
        return NextSequenceRecvData.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.lightclients.solomachine.v1.NextSequenceRecvData",
            value: NextSequenceRecvData.encode(message).finish()
        };
    }
};
//# sourceMappingURL=solomachine.js.map