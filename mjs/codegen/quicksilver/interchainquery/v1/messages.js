import { ProofOps } from "../../../tendermint/crypto/proof";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgSubmitQueryResponse() {
    return {
        chainId: "",
        queryId: "",
        result: new Uint8Array(),
        proofOps: ProofOps.fromPartial({}),
        height: Long.ZERO,
        fromAddress: ""
    };
}
export const MsgSubmitQueryResponse = {
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
            ProofOps.encode(message.proofOps, writer.uint32(34).fork()).ldelim();
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
                    message.proofOps = ProofOps.decode(reader, reader.uint32());
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
            chainId: isSet(object.chainId) ? String(object.chainId) : "",
            queryId: isSet(object.queryId) ? String(object.queryId) : "",
            result: isSet(object.result) ? bytesFromBase64(object.result) : new Uint8Array(),
            proofOps: isSet(object.proofOps) ? ProofOps.fromJSON(object.proofOps) : undefined,
            height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
            fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.queryId !== undefined && (obj.queryId = message.queryId);
        message.result !== undefined && (obj.result = base64FromBytes(message.result !== undefined ? message.result : new Uint8Array()));
        message.proofOps !== undefined && (obj.proofOps = message.proofOps ? ProofOps.toJSON(message.proofOps) : undefined);
        message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitQueryResponse();
        message.chainId = object.chainId ?? "";
        message.queryId = object.queryId ?? "";
        message.result = object.result ?? new Uint8Array();
        message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
        message.fromAddress = object.fromAddress ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chainId: object.chain_id,
            queryId: object.query_id,
            result: object.result,
            proofOps: object?.proof_ops ? ProofOps.fromAmino(object.proof_ops) : undefined,
            height: Long.fromString(object.height),
            fromAddress: object.from_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chainId;
        obj.query_id = message.queryId;
        obj.result = message.result;
        obj.proof_ops = message.proofOps ? ProofOps.toAmino(message.proofOps) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.from_address = message.fromAddress;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitQueryResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSubmitQueryResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitQueryResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse",
            value: MsgSubmitQueryResponse.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitQueryResponseResponse() {
    return {};
}
export const MsgSubmitQueryResponseResponse = {
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
        return MsgSubmitQueryResponseResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return MsgSubmitQueryResponseResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitQueryResponseResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponseResponse",
            value: MsgSubmitQueryResponseResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=messages.js.map