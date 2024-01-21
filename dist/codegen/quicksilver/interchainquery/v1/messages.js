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
exports.MsgSubmitQueryResponseResponse = exports.MsgSubmitQueryResponse = void 0;
const proof_1 = require("../../../tendermint/crypto/proof");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseMsgSubmitQueryResponse() {
    return {
        chainId: "",
        queryId: "",
        result: new Uint8Array(),
        proofOps: proof_1.ProofOps.fromPartial({}),
        height: helpers_1.Long.ZERO,
        fromAddress: ""
    };
}
exports.MsgSubmitQueryResponse = {
    typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chainId !== "") {
            writer.uint32(10).string(message.chainId);
        }
        if (message.queryId !== "") {
            writer.uint32(18).string(message.queryId);
        }
        if (message.result.length !== 0) {
            writer.uint32(26).bytes(message.result);
        }
        if (message.proofOps !== undefined) {
            proof_1.ProofOps.encode(message.proofOps, writer.uint32(34).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(40).int64(message.height);
        }
        if (message.fromAddress !== "") {
            writer.uint32(50).string(message.fromAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitQueryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.string();
                    break;
                case 2:
                    message.queryId = reader.string();
                    break;
                case 3:
                    message.result = reader.bytes();
                    break;
                case 4:
                    message.proofOps = proof_1.ProofOps.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.height = reader.int64();
                    break;
                case 6:
                    message.fromAddress = reader.string();
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
            chainId: (0, helpers_1.isSet)(object.chainId) ? String(object.chainId) : "",
            queryId: (0, helpers_1.isSet)(object.queryId) ? String(object.queryId) : "",
            result: (0, helpers_1.isSet)(object.result) ? (0, helpers_1.bytesFromBase64)(object.result) : new Uint8Array(),
            proofOps: (0, helpers_1.isSet)(object.proofOps) ? proof_1.ProofOps.fromJSON(object.proofOps) : undefined,
            height: (0, helpers_1.isSet)(object.height) ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO,
            fromAddress: (0, helpers_1.isSet)(object.fromAddress) ? String(object.fromAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.queryId !== undefined && (obj.queryId = message.queryId);
        message.result !== undefined && (obj.result = (0, helpers_1.base64FromBytes)(message.result !== undefined ? message.result : new Uint8Array()));
        message.proofOps !== undefined && (obj.proofOps = message.proofOps ? proof_1.ProofOps.toJSON(message.proofOps) : undefined);
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitQueryResponse();
        message.chainId = object.chainId ?? "";
        message.queryId = object.queryId ?? "";
        message.result = object.result ?? new Uint8Array();
        message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? proof_1.ProofOps.fromPartial(object.proofOps) : undefined;
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.fromAddress = object.fromAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            queryId: object.query_id,
            result: object.result,
            proofOps: object?.proof_ops ? proof_1.ProofOps.fromAmino(object.proof_ops) : undefined,
            height: helpers_1.Long.fromString(object.height),
            fromAddress: object.from_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.query_id = message.queryId;
        obj.result = message.result;
        obj.proof_ops = message.proofOps ? proof_1.ProofOps.toAmino(message.proofOps) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.from_address = message.fromAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.MsgSubmitQueryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitQueryResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitQueryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse",
            value: exports.MsgSubmitQueryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitQueryResponseResponse() {
    return {};
}
exports.MsgSubmitQueryResponseResponse = {
    typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponseResponse",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitQueryResponseResponse();
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
        const message = createBaseMsgSubmitQueryResponseResponse();
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
        return exports.MsgSubmitQueryResponseResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.MsgSubmitQueryResponseResponse.decode(message.value);
    },
    toProto(message) {
        return exports.MsgSubmitQueryResponseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponseResponse",
            value: exports.MsgSubmitQueryResponseResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=messages.js.map