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
exports.Proof = exports.Claim = exports.Params = exports.claimTypeToJSON = exports.claimTypeFromJSON = exports.ClaimTypeAmino = exports.ClaimTypeSDKType = exports.ClaimType = void 0;
const proof_1 = require("../../../tendermint/crypto/proof");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
var ClaimType;
(function (ClaimType) {
    /** ClaimTypeUndefined - Undefined action (per protobuf spec) */
    ClaimType[ClaimType["ClaimTypeUndefined"] = 0] = "ClaimTypeUndefined";
    ClaimType[ClaimType["ClaimTypeLiquidToken"] = 1] = "ClaimTypeLiquidToken";
    ClaimType[ClaimType["ClaimTypeOsmosisPool"] = 2] = "ClaimTypeOsmosisPool";
    ClaimType[ClaimType["ClaimTypeCrescentPool"] = 3] = "ClaimTypeCrescentPool";
    ClaimType[ClaimType["ClaimTypeSifchainPool"] = 4] = "ClaimTypeSifchainPool";
    ClaimType[ClaimType["ClaimTypeUmeeToken"] = 5] = "ClaimTypeUmeeToken";
    ClaimType[ClaimType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClaimType || (exports.ClaimType = ClaimType = {}));
exports.ClaimTypeSDKType = ClaimType;
exports.ClaimTypeAmino = ClaimType;
function claimTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "ClaimTypeUndefined":
            return ClaimType.ClaimTypeUndefined;
        case 1:
        case "ClaimTypeLiquidToken":
            return ClaimType.ClaimTypeLiquidToken;
        case 2:
        case "ClaimTypeOsmosisPool":
            return ClaimType.ClaimTypeOsmosisPool;
        case 3:
        case "ClaimTypeCrescentPool":
            return ClaimType.ClaimTypeCrescentPool;
        case 4:
        case "ClaimTypeSifchainPool":
            return ClaimType.ClaimTypeSifchainPool;
        case 5:
        case "ClaimTypeUmeeToken":
            return ClaimType.ClaimTypeUmeeToken;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ClaimType.UNRECOGNIZED;
    }
}
exports.claimTypeFromJSON = claimTypeFromJSON;
function claimTypeToJSON(object) {
    switch (object) {
        case ClaimType.ClaimTypeUndefined:
            return "ClaimTypeUndefined";
        case ClaimType.ClaimTypeLiquidToken:
            return "ClaimTypeLiquidToken";
        case ClaimType.ClaimTypeOsmosisPool:
            return "ClaimTypeOsmosisPool";
        case ClaimType.ClaimTypeCrescentPool:
            return "ClaimTypeCrescentPool";
        case ClaimType.ClaimTypeSifchainPool:
            return "ClaimTypeSifchainPool";
        case ClaimType.ClaimTypeUmeeToken:
            return "ClaimTypeUmeeToken";
        case ClaimType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.claimTypeToJSON = claimTypeToJSON;
function createBaseParams() {
    return {};
}
exports.Params = {
    typeUrl: "/quicksilver.claimsmanager.v1.Params",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
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
        const message = createBaseParams();
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
        return exports.Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Params.decode(message.value);
    },
    toProto(message) {
        return exports.Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.claimsmanager.v1.Params",
            value: exports.Params.encode(message).finish()
        };
    }
};
function createBaseClaim() {
    return {
        user_address: "",
        chain_id: "",
        module: 0,
        source_chain_id: "",
        amount: helpers_1.Long.UZERO
    };
}
exports.Claim = {
    typeUrl: "/quicksilver.claimsmanager.v1.Claim",
    encode(message, writer = _m0.Writer.create()) {
        if (message.user_address !== "") {
            writer.uint32(10).string(message.user_address);
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        if (message.module !== 0) {
            writer.uint32(24).int32(message.module);
        }
        if (message.source_chain_id !== "") {
            writer.uint32(34).string(message.source_chain_id);
        }
        if (!message.amount.isZero()) {
            writer.uint32(40).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClaim();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.user_address = reader.string();
                    break;
                case 2:
                    message.chain_id = reader.string();
                    break;
                case 3:
                    message.module = reader.int32();
                    break;
                case 4:
                    message.source_chain_id = reader.string();
                    break;
                case 5:
                    message.amount = reader.uint64();
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
            user_address: (0, helpers_1.isSet)(object.user_address) ? String(object.user_address) : "",
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            module: (0, helpers_1.isSet)(object.module) ? claimTypeFromJSON(object.module) : -1,
            source_chain_id: (0, helpers_1.isSet)(object.source_chain_id) ? String(object.source_chain_id) : "",
            amount: (0, helpers_1.isSet)(object.amount) ? helpers_1.Long.fromValue(object.amount) : helpers_1.Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.user_address !== undefined && (obj.user_address = message.user_address);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.module !== undefined && (obj.module = claimTypeToJSON(message.module));
        message.source_chain_id !== undefined && (obj.source_chain_id = message.source_chain_id);
        message.amount !== undefined && (obj.amount = (message.amount || helpers_1.Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClaim();
        message.user_address = object.user_address ?? "";
        message.chain_id = object.chain_id ?? "";
        message.module = object.module ?? 0;
        message.source_chain_id = object.source_chain_id ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? helpers_1.Long.fromValue(object.amount) : helpers_1.Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            user_address: object.user_address,
            chain_id: object.chain_id,
            module: (0, helpers_1.isSet)(object.module) ? claimTypeFromJSON(object.module) : -1,
            source_chain_id: object.source_chain_id,
            amount: helpers_1.Long.fromString(object.amount)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.user_address = message.user_address;
        obj.chain_id = message.chain_id;
        obj.module = message.module;
        obj.source_chain_id = message.source_chain_id;
        obj.amount = message.amount ? message.amount.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Claim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Claim.decode(message.value);
    },
    toProto(message) {
        return exports.Claim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.claimsmanager.v1.Claim",
            value: exports.Claim.encode(message).finish()
        };
    }
};
function createBaseProof() {
    return {
        key: new Uint8Array(),
        data: new Uint8Array(),
        proof_ops: proof_1.ProofOps.fromPartial({}),
        height: helpers_1.Long.ZERO,
        proof_type: ""
    };
}
exports.Proof = {
    typeUrl: "/quicksilver.claimsmanager.v1.Proof",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.proof_ops !== undefined) {
            proof_1.ProofOps.encode(message.proof_ops, writer.uint32(26).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(32).int64(message.height);
        }
        if (message.proof_type !== "") {
            writer.uint32(42).string(message.proof_type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.proof_ops = proof_1.ProofOps.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.height = reader.int64();
                    break;
                case 5:
                    message.proof_type = reader.string();
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
            key: (0, helpers_1.isSet)(object.key) ? (0, helpers_1.bytesFromBase64)(object.key) : new Uint8Array(),
            data: (0, helpers_1.isSet)(object.data) ? (0, helpers_1.bytesFromBase64)(object.data) : new Uint8Array(),
            proof_ops: (0, helpers_1.isSet)(object.proof_ops) ? proof_1.ProofOps.fromJSON(object.proof_ops) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            proof_type: (0, helpers_1.isSet)(object.proof_type) ? String(object.proof_type) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = (0, helpers_1.base64FromBytes)(message.key !== undefined ? message.key : new Uint8Array()));
        message.data !== undefined && (obj.data = (0, helpers_1.base64FromBytes)(message.data !== undefined ? message.data : new Uint8Array()));
        message.proof_ops !== undefined && (obj.proof_ops = message.proof_ops ? proof_1.ProofOps.toJSON(message.proof_ops) : undefined);
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.proof_type !== undefined && (obj.proof_type = message.proof_type);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProof();
        message.key = object.key ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? proof_1.ProofOps.fromPartial(object.proof_ops) : undefined;
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.proof_type = object.proof_type ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            data: object.data,
            proof_ops: object?.proof_ops ? proof_1.ProofOps.fromAmino(object.proof_ops) : undefined,
            height: helpers_1.Long.fromString(object.height),
            proof_type: object.proof_type
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.data = message.data;
        obj.proof_ops = message.proof_ops ? proof_1.ProofOps.toAmino(message.proof_ops) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.proof_type = message.proof_type;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Proof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Proof.decode(message.value);
    },
    toProto(message) {
        return exports.Proof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.claimsmanager.v1.Proof",
            value: exports.Proof.encode(message).finish()
        };
    }
};
//# sourceMappingURL=claimsmanager.js.map