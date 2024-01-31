import { ProofOps } from "../../../tendermint/crypto/proof";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export var ClaimType;
(function (ClaimType) {
    /** ClaimTypeUndefined - Undefined action (per protobuf spec) */
    ClaimType[ClaimType["ClaimTypeUndefined"] = 0] = "ClaimTypeUndefined";
    ClaimType[ClaimType["ClaimTypeLiquidToken"] = 1] = "ClaimTypeLiquidToken";
    ClaimType[ClaimType["ClaimTypeOsmosisPool"] = 2] = "ClaimTypeOsmosisPool";
    ClaimType[ClaimType["ClaimTypeCrescentPool"] = 3] = "ClaimTypeCrescentPool";
    ClaimType[ClaimType["ClaimTypeSifchainPool"] = 4] = "ClaimTypeSifchainPool";
    ClaimType[ClaimType["ClaimTypeUmeeToken"] = 5] = "ClaimTypeUmeeToken";
    ClaimType[ClaimType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ClaimType || (ClaimType = {}));
export const ClaimTypeSDKType = ClaimType;
export const ClaimTypeAmino = ClaimType;
export function claimTypeFromJSON(object) {
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
export function claimTypeToJSON(object) {
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
function createBaseParams() {
    return {};
}
export const Params = {
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
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.claimsmanager.v1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseClaim() {
    return {
        user_address: "",
        chain_id: "",
        module: 0,
        source_chain_id: "",
        amount: Long.UZERO
    };
}
export const Claim = {
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
            user_address: isSet(object.user_address) ? String(object.user_address) : "",
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            module: isSet(object.module) ? claimTypeFromJSON(object.module) : -1,
            source_chain_id: isSet(object.source_chain_id) ? String(object.source_chain_id) : "",
            amount: isSet(object.amount) ? Long.fromValue(object.amount) : Long.UZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.user_address !== undefined && (obj.user_address = message.user_address);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.module !== undefined && (obj.module = claimTypeToJSON(message.module));
        message.source_chain_id !== undefined && (obj.source_chain_id = message.source_chain_id);
        message.amount !== undefined && (obj.amount = (message.amount || Long.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseClaim();
        message.user_address = object.user_address ?? "";
        message.chain_id = object.chain_id ?? "";
        message.module = object.module ?? 0;
        message.source_chain_id = object.source_chain_id ?? "";
        message.amount = object.amount !== undefined && object.amount !== null ? Long.fromValue(object.amount) : Long.UZERO;
        return message;
    },
    fromAmino(object) {
        return {
            user_address: object.user_address,
            chain_id: object.chain_id,
            module: isSet(object.module) ? claimTypeFromJSON(object.module) : -1,
            source_chain_id: object.source_chain_id,
            amount: Long.fromString(object.amount)
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
        return Claim.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Claim.decode(message.value);
    },
    toProto(message) {
        return Claim.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.claimsmanager.v1.Claim",
            value: Claim.encode(message).finish()
        };
    }
};
function createBaseProof() {
    return {
        key: new Uint8Array(),
        data: new Uint8Array(),
        proof_ops: ProofOps.fromPartial({}),
        height: Long.ZERO,
        proof_type: ""
    };
}
export const Proof = {
    typeUrl: "/quicksilver.claimsmanager.v1.Proof",
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        if (message.proof_ops !== undefined) {
            ProofOps.encode(message.proof_ops, writer.uint32(26).fork()).ldelim();
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
                    message.proof_ops = ProofOps.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            proof_ops: isSet(object.proof_ops) ? ProofOps.fromJSON(object.proof_ops) : undefined,
            height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
            proof_type: isSet(object.proof_type) ? String(object.proof_type) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.proof_ops !== undefined && (obj.proof_ops = message.proof_ops ? ProofOps.toJSON(message.proof_ops) : undefined);
        message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
        message.proof_type !== undefined && (obj.proof_type = message.proof_type);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProof();
        message.key = object.key ?? new Uint8Array();
        message.data = object.data ?? new Uint8Array();
        message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? ProofOps.fromPartial(object.proof_ops) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
        message.proof_type = object.proof_type ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            key: object.key,
            data: object.data,
            proof_ops: object?.proof_ops ? ProofOps.fromAmino(object.proof_ops) : undefined,
            height: Long.fromString(object.height),
            proof_type: object.proof_type
        };
    },
    toAmino(message) {
        const obj = {};
        obj.key = message.key;
        obj.data = message.data;
        obj.proof_ops = message.proof_ops ? ProofOps.toAmino(message.proof_ops) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.proof_type = message.proof_type;
        return obj;
    },
    fromAminoMsg(object) {
        return Proof.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Proof.decode(message.value);
    },
    toProto(message) {
        return Proof.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.claimsmanager.v1.Proof",
            value: Proof.encode(message).finish()
        };
    }
};
//# sourceMappingURL=claimsmanager.js.map