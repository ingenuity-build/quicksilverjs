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
exports.MerkleProof = exports.MerklePath = exports.MerklePrefix = exports.MerkleRoot = void 0;
const proofs_1 = require("../../../../confio/proofs");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../../helpers");
function createBaseMerkleRoot() {
    return {
        hash: new Uint8Array()
    };
}
exports.MerkleRoot = {
    typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
    aminoType: "cosmos-sdk/MerkleRoot",
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerkleRoot();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            hash: (0, helpers_1.isSet)(object.hash) ? (0, helpers_1.bytesFromBase64)(object.hash) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = (0, helpers_1.base64FromBytes)(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerkleRoot();
        message.hash = object.hash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            hash: object.hash
        };
    },
    toAmino(message) {
        const obj = {};
        obj.hash = message.hash;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MerkleRoot.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerkleRoot",
            value: exports.MerkleRoot.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MerkleRoot.decode(message.value);
    },
    toProto(message) {
        return exports.MerkleRoot.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerkleRoot",
            value: exports.MerkleRoot.encode(message).finish()
        };
    }
};
function createBaseMerklePrefix() {
    return {
        key_prefix: new Uint8Array()
    };
}
exports.MerklePrefix = {
    typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
    aminoType: "cosmos-sdk/MerklePrefix",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key_prefix.length !== 0) {
            writer.uint32(10).bytes(message.key_prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerklePrefix();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key_prefix = reader.bytes();
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
            key_prefix: (0, helpers_1.isSet)(object.key_prefix) ? (0, helpers_1.bytesFromBase64)(object.key_prefix) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.key_prefix !== undefined && (obj.key_prefix = (0, helpers_1.base64FromBytes)(message.key_prefix !== undefined ? message.key_prefix : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerklePrefix();
        message.key_prefix = object.key_prefix ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            key_prefix: object.key_prefix
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key_prefix = message.key_prefix;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MerklePrefix.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerklePrefix",
            value: exports.MerklePrefix.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MerklePrefix.decode(message.value);
    },
    toProto(message) {
        return exports.MerklePrefix.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerklePrefix",
            value: exports.MerklePrefix.encode(message).finish()
        };
    }
};
function createBaseMerklePath() {
    return {
        key_path: []
    };
}
exports.MerklePath = {
    typeUrl: "/ibc.core.commitment.v1.MerklePath",
    aminoType: "cosmos-sdk/MerklePath",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.key_path) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerklePath();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key_path.push(reader.string());
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
            key_path: Array.isArray(object?.key_path) ? object.key_path.map((e) => String(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.key_path) {
            obj.key_path = message.key_path.map(e => e);
        }
        else {
            obj.key_path = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerklePath();
        message.key_path = object.key_path?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        return {
            key_path: Array.isArray(object?.key_path) ? object.key_path.map((e) => e) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.key_path) {
            obj.key_path = message.key_path.map(e => e);
        }
        else {
            obj.key_path = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MerklePath.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerklePath",
            value: exports.MerklePath.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MerklePath.decode(message.value);
    },
    toProto(message) {
        return exports.MerklePath.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerklePath",
            value: exports.MerklePath.encode(message).finish()
        };
    }
};
function createBaseMerkleProof() {
    return {
        proofs: []
    };
}
exports.MerkleProof = {
    typeUrl: "/ibc.core.commitment.v1.MerkleProof",
    aminoType: "cosmos-sdk/MerkleProof",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.proofs) {
            proofs_1.CommitmentProof.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMerkleProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proofs.push(proofs_1.CommitmentProof.decode(reader, reader.uint32()));
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
            proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => proofs_1.CommitmentProof.fromJSON(e)) : []
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? proofs_1.CommitmentProof.toJSON(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMerkleProof();
        message.proofs = object.proofs?.map(e => proofs_1.CommitmentProof.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        return {
            proofs: Array.isArray(object?.proofs) ? object.proofs.map((e) => proofs_1.CommitmentProof.fromAmino(e)) : []
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.proofs) {
            obj.proofs = message.proofs.map(e => e ? proofs_1.CommitmentProof.toAmino(e) : undefined);
        }
        else {
            obj.proofs = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MerkleProof.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MerkleProof",
            value: exports.MerkleProof.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.MerkleProof.decode(message.value);
    },
    toProto(message) {
        return exports.MerkleProof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/ibc.core.commitment.v1.MerkleProof",
            value: exports.MerkleProof.encode(message).finish()
        };
    }
};
//# sourceMappingURL=commitment.js.map