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
exports.TxProof = exports.BlockMeta = exports.LightBlock = exports.SignedHeader = exports.Proposal = exports.CommitSig = exports.Commit = exports.Vote = exports.Data = exports.Header = exports.BlockID = exports.Part = exports.PartSetHeader = exports.signedMsgTypeToJSON = exports.signedMsgTypeFromJSON = exports.SignedMsgTypeAmino = exports.SignedMsgTypeSDKType = exports.SignedMsgType = exports.blockIDFlagToJSON = exports.blockIDFlagFromJSON = exports.BlockIDFlagAmino = exports.BlockIDFlagSDKType = exports.BlockIDFlag = void 0;
const proof_1 = require("../crypto/proof");
const types_1 = require("../version/types");
const timestamp_1 = require("../../google/protobuf/timestamp");
const validator_1 = require("./validator");
const helpers_1 = require("../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
/** BlockIdFlag indicates which BlcokID the signature is for */
var BlockIDFlag;
(function (BlockIDFlag) {
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_UNKNOWN"] = 0] = "BLOCK_ID_FLAG_UNKNOWN";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_ABSENT"] = 1] = "BLOCK_ID_FLAG_ABSENT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_COMMIT"] = 2] = "BLOCK_ID_FLAG_COMMIT";
    BlockIDFlag[BlockIDFlag["BLOCK_ID_FLAG_NIL"] = 3] = "BLOCK_ID_FLAG_NIL";
    BlockIDFlag[BlockIDFlag["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BlockIDFlag || (exports.BlockIDFlag = BlockIDFlag = {}));
exports.BlockIDFlagSDKType = BlockIDFlag;
exports.BlockIDFlagAmino = BlockIDFlag;
function blockIDFlagFromJSON(object) {
    switch (object) {
        case 0:
        case "BLOCK_ID_FLAG_UNKNOWN":
            return BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN;
        case 1:
        case "BLOCK_ID_FLAG_ABSENT":
            return BlockIDFlag.BLOCK_ID_FLAG_ABSENT;
        case 2:
        case "BLOCK_ID_FLAG_COMMIT":
            return BlockIDFlag.BLOCK_ID_FLAG_COMMIT;
        case 3:
        case "BLOCK_ID_FLAG_NIL":
            return BlockIDFlag.BLOCK_ID_FLAG_NIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BlockIDFlag.UNRECOGNIZED;
    }
}
exports.blockIDFlagFromJSON = blockIDFlagFromJSON;
function blockIDFlagToJSON(object) {
    switch (object) {
        case BlockIDFlag.BLOCK_ID_FLAG_UNKNOWN:
            return "BLOCK_ID_FLAG_UNKNOWN";
        case BlockIDFlag.BLOCK_ID_FLAG_ABSENT:
            return "BLOCK_ID_FLAG_ABSENT";
        case BlockIDFlag.BLOCK_ID_FLAG_COMMIT:
            return "BLOCK_ID_FLAG_COMMIT";
        case BlockIDFlag.BLOCK_ID_FLAG_NIL:
            return "BLOCK_ID_FLAG_NIL";
        case BlockIDFlag.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.blockIDFlagToJSON = blockIDFlagToJSON;
/** SignedMsgType is a type of signed message in the consensus. */
var SignedMsgType;
(function (SignedMsgType) {
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_UNKNOWN"] = 0] = "SIGNED_MSG_TYPE_UNKNOWN";
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PREVOTE"] = 1] = "SIGNED_MSG_TYPE_PREVOTE";
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PRECOMMIT"] = 2] = "SIGNED_MSG_TYPE_PRECOMMIT";
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SignedMsgType[SignedMsgType["SIGNED_MSG_TYPE_PROPOSAL"] = 32] = "SIGNED_MSG_TYPE_PROPOSAL";
    SignedMsgType[SignedMsgType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SignedMsgType || (exports.SignedMsgType = SignedMsgType = {}));
exports.SignedMsgTypeSDKType = SignedMsgType;
exports.SignedMsgTypeAmino = SignedMsgType;
function signedMsgTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIGNED_MSG_TYPE_UNKNOWN":
            return SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN;
        case 1:
        case "SIGNED_MSG_TYPE_PREVOTE":
            return SignedMsgType.SIGNED_MSG_TYPE_PREVOTE;
        case 2:
        case "SIGNED_MSG_TYPE_PRECOMMIT":
            return SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT;
        case 32:
        case "SIGNED_MSG_TYPE_PROPOSAL":
            return SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SignedMsgType.UNRECOGNIZED;
    }
}
exports.signedMsgTypeFromJSON = signedMsgTypeFromJSON;
function signedMsgTypeToJSON(object) {
    switch (object) {
        case SignedMsgType.SIGNED_MSG_TYPE_UNKNOWN:
            return "SIGNED_MSG_TYPE_UNKNOWN";
        case SignedMsgType.SIGNED_MSG_TYPE_PREVOTE:
            return "SIGNED_MSG_TYPE_PREVOTE";
        case SignedMsgType.SIGNED_MSG_TYPE_PRECOMMIT:
            return "SIGNED_MSG_TYPE_PRECOMMIT";
        case SignedMsgType.SIGNED_MSG_TYPE_PROPOSAL:
            return "SIGNED_MSG_TYPE_PROPOSAL";
        case SignedMsgType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.signedMsgTypeToJSON = signedMsgTypeToJSON;
function createBasePartSetHeader() {
    return {
        total: 0,
        hash: new Uint8Array()
    };
}
exports.PartSetHeader = {
    typeUrl: "/tendermint.types.PartSetHeader",
    encode(message, writer = _m0.Writer.create()) {
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePartSetHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.uint32();
                    break;
                case 2:
                    message.hash = reader.bytes();
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
            total: (0, helpers_1.isSet)(object.total) ? Number(object.total) : 0,
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.total !== undefined && (obj.total = Math.round(message.total));
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBasePartSetHeader();
        message.total = object.total ?? 0;
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            total: object.total,
            hash: object.hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.total = message.total;
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.PartSetHeader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.PartSetHeader.decode(message.value);
    },
    toProto(message) {
        return exports.PartSetHeader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.PartSetHeader",
            value: exports.PartSetHeader.encode(message).finish()
        };
    }
};
function createBasePart() {
    return {
        index: 0,
        bytes: new Uint8Array(),
        proof: proof_1.Proof.fromPartial({})
    };
}
exports.Part = {
    typeUrl: "/tendermint.types.Part",
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== 0) {
            writer.uint32(8).uint32(message.index);
        }
        if (message.bytes.length !== 0) {
            writer.uint32(18).bytes(message.bytes);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.uint32();
                    break;
                case 2:
                    message.bytes = reader.bytes();
                    break;
                case 3:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
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
            index: (0, helpers_1.isSet)(object.index) ? Number(object.index) : 0,
            bytes: (0, helpers_1.isSet)(object.bytes) ? (0, helpers_1.bytesFromBase64)(object.bytes) : new Uint8Array(),
            proof: (0, helpers_1.isSet)(object.proof) ? proof_1.Proof.fromJSON(object.proof) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.bytes !== undefined && (obj.bytes = (0, helpers_1.base64FromBytes)(message.bytes !== undefined ? message.bytes : new Uint8Array()));
        message.proof !== undefined && (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePart();
        message.index = object.index ?? 0;
        message.bytes = object.bytes ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? proof_1.Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            index: object.index,
            bytes: object.bytes,
            proof: object?.proof ? proof_1.Proof.fromAmino(object.proof) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.index = message.index;
        obj.bytes = message.bytes;
        obj.proof = message.proof ? proof_1.Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Part.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Part.decode(message.value);
    },
    toProto(message) {
        return exports.Part.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Part",
            value: exports.Part.encode(message).finish()
        };
    }
};
function createBaseBlockID() {
    return {
        hash: new Uint8Array(),
        part_set_header: exports.PartSetHeader.fromPartial({})
    };
}
exports.BlockID = {
    typeUrl: "/tendermint.types.BlockID",
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.part_set_header !== undefined) {
            exports.PartSetHeader.encode(message.part_set_header, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.part_set_header = exports.PartSetHeader.decode(reader, reader.uint32());
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
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array(),
            part_set_header: (0, helpers_1.isSet)(object.part_set_header) ? exports.PartSetHeader.fromJSON(object.part_set_header) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.part_set_header !== undefined && (obj.part_set_header = message.part_set_header ? exports.PartSetHeader.toJSON(message.part_set_header) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockID();
        message.hash = object.hash ?? new Uint8Array();
        message.part_set_header = object.part_set_header !== undefined && object.part_set_header !== null ? exports.PartSetHeader.fromPartial(object.part_set_header) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            hash: object.hash,
            part_set_header: object?.part_set_header ? exports.PartSetHeader.fromAmino(object.part_set_header) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        obj.part_set_header = message.part_set_header ? exports.PartSetHeader.toAmino(message.part_set_header) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockID.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BlockID.decode(message.value);
    },
    toProto(message) {
        return exports.BlockID.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockID",
            value: exports.BlockID.encode(message).finish()
        };
    }
};
function createBaseHeader() {
    return {
        version: types_1.Consensus.fromPartial({}),
        chain_id: "",
        height: helpers_1.Long.ZERO,
        time: new Date(),
        last_block_id: exports.BlockID.fromPartial({}),
        last_commit_hash: new Uint8Array(),
        data_hash: new Uint8Array(),
        validators_hash: new Uint8Array(),
        next_validators_hash: new Uint8Array(),
        consensus_hash: new Uint8Array(),
        app_hash: new Uint8Array(),
        last_results_hash: new Uint8Array(),
        evidence_hash: new Uint8Array(),
        proposer_address: new Uint8Array()
    };
}
exports.Header = {
    typeUrl: "/tendermint.types.Header",
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== undefined) {
            types_1.Consensus.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        if (!message.height.isZero()) {
            writer.uint32(24).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.time), writer.uint32(34).fork()).ldelim();
        }
        if (message.last_block_id !== undefined) {
            exports.BlockID.encode(message.last_block_id, writer.uint32(42).fork()).ldelim();
        }
        if (message.last_commit_hash.length !== 0) {
            writer.uint32(50).bytes(message.last_commit_hash);
        }
        if (message.data_hash.length !== 0) {
            writer.uint32(58).bytes(message.data_hash);
        }
        if (message.validators_hash.length !== 0) {
            writer.uint32(66).bytes(message.validators_hash);
        }
        if (message.next_validators_hash.length !== 0) {
            writer.uint32(74).bytes(message.next_validators_hash);
        }
        if (message.consensus_hash.length !== 0) {
            writer.uint32(82).bytes(message.consensus_hash);
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(90).bytes(message.app_hash);
        }
        if (message.last_results_hash.length !== 0) {
            writer.uint32(98).bytes(message.last_results_hash);
        }
        if (message.evidence_hash.length !== 0) {
            writer.uint32(106).bytes(message.evidence_hash);
        }
        if (message.proposer_address.length !== 0) {
            writer.uint32(114).bytes(message.proposer_address);
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
                    message.version = types_1.Consensus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain_id = reader.string();
                    break;
                case 3:
                    message.height = reader.int64();
                    break;
                case 4:
                    message.time = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.last_block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.last_commit_hash = reader.bytes();
                    break;
                case 7:
                    message.data_hash = reader.bytes();
                    break;
                case 8:
                    message.validators_hash = reader.bytes();
                    break;
                case 9:
                    message.next_validators_hash = reader.bytes();
                    break;
                case 10:
                    message.consensus_hash = reader.bytes();
                    break;
                case 11:
                    message.app_hash = reader.bytes();
                    break;
                case 12:
                    message.last_results_hash = reader.bytes();
                    break;
                case 13:
                    message.evidence_hash = reader.bytes();
                    break;
                case 14:
                    message.proposer_address = reader.bytes();
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
            version: (0, helpers_1.isSet)(object.version) ? types_1.Consensus.fromJSON(object.version) : undefined,
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            time: (0, helpers_1.isSet)(object.time) ? (0, helpers_1.fromJsonTimestamp)(object.time) : undefined,
            last_block_id: (0, helpers_1.isSet)(object.last_block_id) ? exports.BlockID.fromJSON(object.last_block_id) : undefined,
            last_commit_hash: (0, helpers_1.isSet)(object.last_commit_hash) ? (0, helpers_1.bytesFromBase64)(object.last_commit_hash) : new Uint8Array(),
            data_hash: (0, helpers_1.isSet)(object.data_hash) ? (0, helpers_1.bytesFromBase64)(object.data_hash) : new Uint8Array(),
            validators_hash: (0, helpers_1.isSet)(object.validators_hash) ? (0, helpers_1.bytesFromBase64)(object.validators_hash) : new Uint8Array(),
            next_validators_hash: (0, helpers_1.isSet)(object.next_validators_hash) ? (0, helpers_1.bytesFromBase64)(object.next_validators_hash) : new Uint8Array(),
            consensus_hash: (0, helpers_1.isSet)(object.consensus_hash) ? (0, helpers_1.bytesFromBase64)(object.consensus_hash) : new Uint8Array(),
            app_hash: (0, helpers_1.isSet)(object.app_hash) ? (0, helpers_1.bytesFromBase64)(object.app_hash) : new Uint8Array(),
            last_results_hash: (0, helpers_1.isSet)(object.last_results_hash) ? (0, helpers_1.bytesFromBase64)(object.last_results_hash) : new Uint8Array(),
            evidence_hash: (0, helpers_1.isSet)(object.evidence_hash) ? (0, helpers_1.bytesFromBase64)(object.evidence_hash) : new Uint8Array(),
            proposer_address: (0, helpers_1.isSet)(object.proposer_address) ? (0, helpers_1.bytesFromBase64)(object.proposer_address) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version ? types_1.Consensus.toJSON(message.version) : undefined);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.time !== undefined && (obj.time = message.time.toISOString());
        message.last_block_id !== undefined && (obj.last_block_id = message.last_block_id ? exports.BlockID.toJSON(message.last_block_id) : undefined);
        message.last_commit_hash !== undefined && (obj.last_commit_hash = (0, helpers_1.base64FromBytes)(message.last_commit_hash !== undefined ? message.last_commit_hash : new Uint8Array()));
        message.data_hash !== undefined && (obj.data_hash = (0, helpers_1.base64FromBytes)(message.data_hash !== undefined ? message.data_hash : new Uint8Array()));
        message.validators_hash !== undefined && (obj.validators_hash = (0, helpers_1.base64FromBytes)(message.validators_hash !== undefined ? message.validators_hash : new Uint8Array()));
        message.next_validators_hash !== undefined && (obj.next_validators_hash = (0, helpers_1.base64FromBytes)(message.next_validators_hash !== undefined ? message.next_validators_hash : new Uint8Array()));
        message.consensus_hash !== undefined && (obj.consensus_hash = (0, helpers_1.base64FromBytes)(message.consensus_hash !== undefined ? message.consensus_hash : new Uint8Array()));
        message.app_hash !== undefined && (obj.app_hash = (0, helpers_1.base64FromBytes)(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        message.last_results_hash !== undefined && (obj.last_results_hash = (0, helpers_1.base64FromBytes)(message.last_results_hash !== undefined ? message.last_results_hash : new Uint8Array()));
        message.evidence_hash !== undefined && (obj.evidence_hash = (0, helpers_1.base64FromBytes)(message.evidence_hash !== undefined ? message.evidence_hash : new Uint8Array()));
        message.proposer_address !== undefined && (obj.proposer_address = (0, helpers_1.base64FromBytes)(message.proposer_address !== undefined ? message.proposer_address : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.version = object.version !== undefined && object.version !== null ? types_1.Consensus.fromPartial(object.version) : undefined;
        message.chain_id = object.chain_id ?? "";
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.time = object.time ?? undefined;
        message.last_block_id = object.last_block_id !== undefined && object.last_block_id !== null ? exports.BlockID.fromPartial(object.last_block_id) : undefined;
        message.last_commit_hash = object.last_commit_hash ?? new Uint8Array();
        message.data_hash = object.data_hash ?? new Uint8Array();
        message.validators_hash = object.validators_hash ?? new Uint8Array();
        message.next_validators_hash = object.next_validators_hash ?? new Uint8Array();
        message.consensus_hash = object.consensus_hash ?? new Uint8Array();
        message.app_hash = object.app_hash ?? new Uint8Array();
        message.last_results_hash = object.last_results_hash ?? new Uint8Array();
        message.evidence_hash = object.evidence_hash ?? new Uint8Array();
        message.proposer_address = object.proposer_address ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            version: object?.version ? types_1.Consensus.fromAmino(object.version) : undefined,
            chain_id: object.chain_id,
            height: helpers_1.Long.fromString(object.height),
            time: object.time,
            last_block_id: object?.last_block_id ? exports.BlockID.fromAmino(object.last_block_id) : undefined,
            last_commit_hash: object.last_commit_hash,
            data_hash: object.data_hash,
            validators_hash: object.validators_hash,
            next_validators_hash: object.next_validators_hash,
            consensus_hash: object.consensus_hash,
            app_hash: object.app_hash,
            last_results_hash: object.last_results_hash,
            evidence_hash: object.evidence_hash,
            proposer_address: object.proposer_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.version = message.version ? types_1.Consensus.toAmino(message.version) : undefined;
        obj.chain_id = message.chain_id;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.time = message.time;
        obj.last_block_id = message.last_block_id ? exports.BlockID.toAmino(message.last_block_id) : undefined;
        obj.last_commit_hash = message.last_commit_hash;
        obj.data_hash = message.data_hash;
        obj.validators_hash = message.validators_hash;
        obj.next_validators_hash = message.next_validators_hash;
        obj.consensus_hash = message.consensus_hash;
        obj.app_hash = message.app_hash;
        obj.last_results_hash = message.last_results_hash;
        obj.evidence_hash = message.evidence_hash;
        obj.proposer_address = message.proposer_address;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Header.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Header.decode(message.value);
    },
    toProto(message) {
        return exports.Header.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Header",
            value: exports.Header.encode(message).finish()
        };
    }
};
function createBaseData() {
    return {
        txs: []
    };
}
exports.Data = {
    typeUrl: "/tendermint.types.Data",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.txs) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(reader.bytes());
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => (0, helpers_1.bytesFromBase64)(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => (0, helpers_1.base64FromBytes)(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseData();
        message.txs = object.txs?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e);
        }
        else {
            obj.txs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Data.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Data.decode(message.value);
    },
    toProto(message) {
        return exports.Data.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Data",
            value: exports.Data.encode(message).finish()
        };
    }
};
function createBaseVote() {
    return {
        type: 0,
        height: helpers_1.Long.ZERO,
        round: 0,
        block_id: exports.BlockID.fromPartial({}),
        timestamp: new Date(),
        validator_address: new Uint8Array(),
        validator_index: 0,
        signature: new Uint8Array()
    };
}
exports.Vote = {
    typeUrl: "/tendermint.types.Vote",
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (!message.height.isZero()) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.block_id !== undefined) {
            exports.BlockID.encode(message.block_id, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(42).fork()).ldelim();
        }
        if (message.validator_address.length !== 0) {
            writer.uint32(50).bytes(message.validator_address);
        }
        if (message.validator_index !== 0) {
            writer.uint32(56).int32(message.validator_index);
        }
        if (message.signature.length !== 0) {
            writer.uint32(66).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validator_address = reader.bytes();
                    break;
                case 7:
                    message.validator_index = reader.int32();
                    break;
                case 8:
                    message.signature = reader.bytes();
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
            type: (0, helpers_1.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            block_id: (0, helpers_1.isSet)(object.block_id) ? exports.BlockID.fromJSON(object.block_id) : undefined,
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined,
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? (0, helpers_1.bytesFromBase64)(object.validator_address) : new Uint8Array(),
            validator_index: (0, helpers_1.isSet)(object.validator_index) ? Number(object.validator_index) : 0,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.block_id !== undefined && (obj.block_id = message.block_id ? exports.BlockID.toJSON(message.block_id) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.validator_address !== undefined && (obj.validator_address = (0, helpers_1.base64FromBytes)(message.validator_address !== undefined ? message.validator_address : new Uint8Array()));
        message.validator_index !== undefined && (obj.validator_index = Math.round(message.validator_index));
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.type = object.type ?? 0;
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.round = object.round ?? 0;
        message.block_id = object.block_id !== undefined && object.block_id !== null ? exports.BlockID.fromPartial(object.block_id) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.validator_address = object.validator_address ?? new Uint8Array();
        message.validator_index = object.validator_index ?? 0;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            type: (0, helpers_1.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: helpers_1.Long.fromString(object.height),
            round: object.round,
            block_id: object?.block_id ? exports.BlockID.fromAmino(object.block_id) : undefined,
            timestamp: object.timestamp,
            validator_address: object.validator_address,
            validator_index: object.validator_index,
            signature: object.signature
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.block_id = message.block_id ? exports.BlockID.toAmino(message.block_id) : undefined;
        obj.timestamp = message.timestamp;
        obj.validator_address = message.validator_address;
        obj.validator_index = message.validator_index;
        obj.signature = message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Vote.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Vote.decode(message.value);
    },
    toProto(message) {
        return exports.Vote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Vote",
            value: exports.Vote.encode(message).finish()
        };
    }
};
function createBaseCommit() {
    return {
        height: helpers_1.Long.ZERO,
        round: 0,
        block_id: exports.BlockID.fromPartial({}),
        signatures: []
    };
}
exports.Commit = {
    typeUrl: "/tendermint.types.Commit",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.block_id !== undefined) {
            exports.BlockID.encode(message.block_id, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.CommitSig.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signatures.push(exports.CommitSig.decode(reader, reader.uint32()));
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
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            block_id: (0, helpers_1.isSet)(object.block_id) ? exports.BlockID.fromJSON(object.block_id) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.CommitSig.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.block_id !== undefined && (obj.block_id = message.block_id ? exports.BlockID.toJSON(message.block_id) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? exports.CommitSig.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommit();
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.round = object.round ?? 0;
        message.block_id = object.block_id !== undefined && object.block_id !== null ? exports.BlockID.fromPartial(object.block_id) : undefined;
        message.signatures = object.signatures?.map(e => exports.CommitSig.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            height: helpers_1.Long.fromString(object.height),
            round: object.round,
            block_id: object?.block_id ? exports.BlockID.fromAmino(object.block_id) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.CommitSig.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.block_id = message.block_id ? exports.BlockID.toAmino(message.block_id) : undefined;
        if (message.signatures) {
            obj.signatures = message.signatures.map(e => e ? exports.CommitSig.toAmino(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Commit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Commit.decode(message.value);
    },
    toProto(message) {
        return exports.Commit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Commit",
            value: exports.Commit.encode(message).finish()
        };
    }
};
function createBaseCommitSig() {
    return {
        block_id_flag: 0,
        validator_address: new Uint8Array(),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
exports.CommitSig = {
    typeUrl: "/tendermint.types.CommitSig",
    encode(message, writer = _m0.Writer.create()) {
        if (message.block_id_flag !== 0) {
            writer.uint32(8).int32(message.block_id_flag);
        }
        if (message.validator_address.length !== 0) {
            writer.uint32(18).bytes(message.validator_address);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(26).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(34).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitSig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id_flag = reader.int32();
                    break;
                case 2:
                    message.validator_address = reader.bytes();
                    break;
                case 3:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.signature = reader.bytes();
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
            block_id_flag: (0, helpers_1.isSet)(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : -1,
            validator_address: (0, helpers_1.isSet)(object.validator_address) ? (0, helpers_1.bytesFromBase64)(object.validator_address) : new Uint8Array(),
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id_flag !== undefined && (obj.block_id_flag = blockIDFlagToJSON(message.block_id_flag));
        message.validator_address !== undefined && (obj.validator_address = (0, helpers_1.base64FromBytes)(message.validator_address !== undefined ? message.validator_address : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitSig();
        message.block_id_flag = object.block_id_flag ?? 0;
        message.validator_address = object.validator_address ?? new Uint8Array();
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            block_id_flag: (0, helpers_1.isSet)(object.block_id_flag) ? blockIDFlagFromJSON(object.block_id_flag) : -1,
            validator_address: object.validator_address,
            timestamp: object.timestamp,
            signature: object.signature
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_id_flag = message.block_id_flag;
        obj.validator_address = message.validator_address;
        obj.timestamp = message.timestamp;
        obj.signature = message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.CommitSig.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.CommitSig.decode(message.value);
    },
    toProto(message) {
        return exports.CommitSig.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.CommitSig",
            value: exports.CommitSig.encode(message).finish()
        };
    }
};
function createBaseProposal() {
    return {
        type: 0,
        height: helpers_1.Long.ZERO,
        round: 0,
        pol_round: 0,
        block_id: exports.BlockID.fromPartial({}),
        timestamp: new Date(),
        signature: new Uint8Array()
    };
}
exports.Proposal = {
    typeUrl: "/tendermint.types.Proposal",
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (!message.height.isZero()) {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.pol_round !== 0) {
            writer.uint32(32).int32(message.pol_round);
        }
        if (message.block_id !== undefined) {
            exports.BlockID.encode(message.block_id, writer.uint32(42).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode((0, helpers_1.toTimestamp)(message.timestamp), writer.uint32(50).fork()).ldelim();
        }
        if (message.signature.length !== 0) {
            writer.uint32(58).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = reader.int64();
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.pol_round = reader.int32();
                    break;
                case 5:
                    message.block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.timestamp = (0, helpers_1.fromTimestamp)(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.signature = reader.bytes();
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
            type: (0, helpers_1.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            round: (0, helpers_1.isSet)(object.round) ? Number(object.round) : 0,
            pol_round: (0, helpers_1.isSet)(object.pol_round) ? Number(object.pol_round) : 0,
            block_id: (0, helpers_1.isSet)(object.block_id) ? exports.BlockID.fromJSON(object.block_id) : undefined,
            timestamp: (0, helpers_1.isSet)(object.timestamp) ? (0, helpers_1.fromJsonTimestamp)(object.timestamp) : undefined,
            signature: (0, helpers_1.isSet)(object.signature) ? (0, helpers_1.bytesFromBase64)(object.signature) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = signedMsgTypeToJSON(message.type));
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.pol_round !== undefined && (obj.pol_round = Math.round(message.pol_round));
        message.block_id !== undefined && (obj.block_id = message.block_id ? exports.BlockID.toJSON(message.block_id) : undefined);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
        message.signature !== undefined && (obj.signature = (0, helpers_1.base64FromBytes)(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.type = object.type ?? 0;
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.round = object.round ?? 0;
        message.pol_round = object.pol_round ?? 0;
        message.block_id = object.block_id !== undefined && object.block_id !== null ? exports.BlockID.fromPartial(object.block_id) : undefined;
        message.timestamp = object.timestamp ?? undefined;
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            type: (0, helpers_1.isSet)(object.type) ? signedMsgTypeFromJSON(object.type) : -1,
            height: helpers_1.Long.fromString(object.height),
            round: object.round,
            pol_round: object.pol_round,
            block_id: object?.block_id ? exports.BlockID.fromAmino(object.block_id) : undefined,
            timestamp: object.timestamp,
            signature: object.signature
        };
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.round = message.round;
        obj.pol_round = message.pol_round;
        obj.block_id = message.block_id ? exports.BlockID.toAmino(message.block_id) : undefined;
        obj.timestamp = message.timestamp;
        obj.signature = message.signature;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Proposal.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Proposal.decode(message.value);
    },
    toProto(message) {
        return exports.Proposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.Proposal",
            value: exports.Proposal.encode(message).finish()
        };
    }
};
function createBaseSignedHeader() {
    return {
        header: exports.Header.fromPartial({}),
        commit: exports.Commit.fromPartial({})
    };
}
exports.SignedHeader = {
    typeUrl: "/tendermint.types.SignedHeader",
    encode(message, writer = _m0.Writer.create()) {
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.commit !== undefined) {
            exports.Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = exports.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commit = exports.Commit.decode(reader, reader.uint32());
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
            header: (0, helpers_1.isSet)(object.header) ? exports.Header.fromJSON(object.header) : undefined,
            commit: (0, helpers_1.isSet)(object.commit) ? exports.Commit.fromJSON(object.commit) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
        message.commit !== undefined && (obj.commit = message.commit ? exports.Commit.toJSON(message.commit) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignedHeader();
        message.header = object.header !== undefined && object.header !== null ? exports.Header.fromPartial(object.header) : undefined;
        message.commit = object.commit !== undefined && object.commit !== null ? exports.Commit.fromPartial(object.commit) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            header: object?.header ? exports.Header.fromAmino(object.header) : undefined,
            commit: object?.commit ? exports.Commit.fromAmino(object.commit) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.header = message.header ? exports.Header.toAmino(message.header) : undefined;
        obj.commit = message.commit ? exports.Commit.toAmino(message.commit) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SignedHeader.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.SignedHeader.decode(message.value);
    },
    toProto(message) {
        return exports.SignedHeader.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.SignedHeader",
            value: exports.SignedHeader.encode(message).finish()
        };
    }
};
function createBaseLightBlock() {
    return {
        signed_header: exports.SignedHeader.fromPartial({}),
        validator_set: validator_1.ValidatorSet.fromPartial({})
    };
}
exports.LightBlock = {
    typeUrl: "/tendermint.types.LightBlock",
    encode(message, writer = _m0.Writer.create()) {
        if (message.signed_header !== undefined) {
            exports.SignedHeader.encode(message.signed_header, writer.uint32(10).fork()).ldelim();
        }
        if (message.validator_set !== undefined) {
            validator_1.ValidatorSet.encode(message.validator_set, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLightBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signed_header = exports.SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validator_set = validator_1.ValidatorSet.decode(reader, reader.uint32());
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
            signed_header: (0, helpers_1.isSet)(object.signed_header) ? exports.SignedHeader.fromJSON(object.signed_header) : undefined,
            validator_set: (0, helpers_1.isSet)(object.validator_set) ? validator_1.ValidatorSet.fromJSON(object.validator_set) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.signed_header !== undefined && (obj.signed_header = message.signed_header ? exports.SignedHeader.toJSON(message.signed_header) : undefined);
        message.validator_set !== undefined && (obj.validator_set = message.validator_set ? validator_1.ValidatorSet.toJSON(message.validator_set) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseLightBlock();
        message.signed_header = object.signed_header !== undefined && object.signed_header !== null ? exports.SignedHeader.fromPartial(object.signed_header) : undefined;
        message.validator_set = object.validator_set !== undefined && object.validator_set !== null ? validator_1.ValidatorSet.fromPartial(object.validator_set) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            signed_header: object?.signed_header ? exports.SignedHeader.fromAmino(object.signed_header) : undefined,
            validator_set: object?.validator_set ? validator_1.ValidatorSet.fromAmino(object.validator_set) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.signed_header = message.signed_header ? exports.SignedHeader.toAmino(message.signed_header) : undefined;
        obj.validator_set = message.validator_set ? validator_1.ValidatorSet.toAmino(message.validator_set) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.LightBlock.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.LightBlock.decode(message.value);
    },
    toProto(message) {
        return exports.LightBlock.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.LightBlock",
            value: exports.LightBlock.encode(message).finish()
        };
    }
};
function createBaseBlockMeta() {
    return {
        block_id: exports.BlockID.fromPartial({}),
        block_size: helpers_1.Long.ZERO,
        header: exports.Header.fromPartial({}),
        num_txs: helpers_1.Long.ZERO
    };
}
exports.BlockMeta = {
    typeUrl: "/tendermint.types.BlockMeta",
    encode(message, writer = _m0.Writer.create()) {
        if (message.block_id !== undefined) {
            exports.BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (!message.block_size.isZero()) {
            writer.uint32(16).int64(message.block_size);
        }
        if (message.header !== undefined) {
            exports.Header.encode(message.header, writer.uint32(26).fork()).ldelim();
        }
        if (!message.num_txs.isZero()) {
            writer.uint32(32).int64(message.num_txs);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockMeta();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = exports.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.block_size = reader.int64();
                    break;
                case 3:
                    message.header = exports.Header.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.num_txs = reader.int64();
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
            block_id: (0, helpers_1.isSet)(object.block_id) ? exports.BlockID.fromJSON(object.block_id) : undefined,
            block_size: (0, helpers_1.isSet)(object.block_size) ? helpers_1.Long.fromValue(object.block_size) : helpers_1.Long.ZERO,
            header: (0, helpers_1.isSet)(object.header) ? exports.Header.fromJSON(object.header) : undefined,
            num_txs: (0, helpers_1.isSet)(object.num_txs) ? helpers_1.Long.fromValue(object.num_txs) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id !== undefined && (obj.block_id = message.block_id ? exports.BlockID.toJSON(message.block_id) : undefined);
        message.block_size !== undefined && (obj.block_size = (message.block_size || helpers_1.Long.ZERO).toString());
        message.header !== undefined && (obj.header = message.header ? exports.Header.toJSON(message.header) : undefined);
        message.num_txs !== undefined && (obj.num_txs = (message.num_txs || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockMeta();
        message.block_id = object.block_id !== undefined && object.block_id !== null ? exports.BlockID.fromPartial(object.block_id) : undefined;
        message.block_size = object.block_size !== undefined && object.block_size !== null ? helpers_1.Long.fromValue(object.block_size) : helpers_1.Long.ZERO;
        message.header = object.header !== undefined && object.header !== null ? exports.Header.fromPartial(object.header) : undefined;
        message.num_txs = object.num_txs !== undefined && object.num_txs !== null ? helpers_1.Long.fromValue(object.num_txs) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            block_id: object?.block_id ? exports.BlockID.fromAmino(object.block_id) : undefined,
            block_size: helpers_1.Long.fromString(object.block_size),
            header: object?.header ? exports.Header.fromAmino(object.header) : undefined,
            num_txs: helpers_1.Long.fromString(object.num_txs)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.block_id = message.block_id ? exports.BlockID.toAmino(message.block_id) : undefined;
        obj.block_size = message.block_size ? message.block_size.toString() : undefined;
        obj.header = message.header ? exports.Header.toAmino(message.header) : undefined;
        obj.num_txs = message.num_txs ? message.num_txs.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BlockMeta.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.BlockMeta.decode(message.value);
    },
    toProto(message) {
        return exports.BlockMeta.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.BlockMeta",
            value: exports.BlockMeta.encode(message).finish()
        };
    }
};
function createBaseTxProof() {
    return {
        root_hash: new Uint8Array(),
        data: new Uint8Array(),
        proof: proof_1.Proof.fromPartial({})
    };
}
exports.TxProof = {
    typeUrl: "/tendermint.types.TxProof",
    encode(message, writer = _m0.Writer.create()) {
        if (message.root_hash.length !== 0) {
            writer.uint32(10).bytes(message.root_hash);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.proof !== undefined) {
            proof_1.Proof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.root_hash = reader.bytes();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.proof = proof_1.Proof.decode(reader, reader.uint32());
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
            root_hash: (0, helpers_1.isSet)(object.root_hash) ? (0, helpers_1.bytesFromBase64)(object.root_hash) : new Uint8Array(),
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            proof: (0, helpers_1.isSet)(object.proof) ? proof_1.Proof.fromJSON(object.proof) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.root_hash !== undefined && (obj.root_hash = (0, helpers_1.base64FromBytes)(message.root_hash !== undefined ? message.root_hash : new Uint8Array()));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.proof !== undefined && (obj.proof = message.proof ? proof_1.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTxProof();
        message.root_hash = object.root_hash ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        message.proof = object.proof !== undefined && object.proof !== null ? proof_1.Proof.fromPartial(object.proof) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            root_hash: object.root_hash,
            data: object.data,
            proof: object?.proof ? proof_1.Proof.fromAmino(object.proof) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.root_hash = message.root_hash;
        obj.data = message.data;
        obj.proof = message.proof ? proof_1.Proof.toAmino(message.proof) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.TxProof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.TxProof.decode(message.value);
    },
    toProto(message) {
        return exports.TxProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/tendermint.types.TxProof",
            value: exports.TxProof.encode(message).finish()
        };
    }
};
//# sourceMappingURL=types.js.map