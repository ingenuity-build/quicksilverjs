import { ProofOps } from "../../../tendermint/crypto/proof";
import { Long, isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseMsgSubmitQueryResponse() {
    return {
        chain_id: "",
        query_id: "",
        result: new Uint8Array(),
        proof_ops: ProofOps.fromPartial({}),
        height: Long.ZERO,
        from_address: ""
    };
}
export const MsgSubmitQueryResponse = {
    typeUrl: "/quicksilver.interchainquery.v1.MsgSubmitQueryResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.query_id !== "") {
            writer.uint32(18).string(message.query_id);
        }
        if (message.result.length !== 0) {
            writer.uint32(26).bytes(message.result);
        }
        if (message.proof_ops !== undefined) {
            ProofOps.encode(message.proof_ops, writer.uint32(34).fork()).ldelim();
        }
        if (!message.height.isZero()) {
            writer.uint32(40).int64(message.height);
        }
        if (message.from_address !== "") {
            writer.uint32(50).string(message.from_address);
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.query_id = reader.string();
                    break;
                case 3:
                    message.result = reader.bytes();
                    break;
                case 4:
                    message.proof_ops = ProofOps.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.height = reader.int64();
                    break;
                case 6:
                    message.from_address = reader.string();
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
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            query_id: isSet(object.query_id) ? String(object.query_id) : "",
            result: isSet(object.result) ? bytesFromBase64(object.result) : new Uint8Array(),
            proof_ops: isSet(object.proof_ops) ? ProofOps.fromJSON(object.proof_ops) : undefined,
            height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
            from_address: isSet(object.from_address) ? String(object.from_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.query_id !== undefined && (obj.query_id = message.query_id);
        message.result !== undefined && (obj.result = base64FromBytes(message.result !== undefined ? message.result : new Uint8Array()));
        message.proof_ops !== undefined && (obj.proof_ops = message.proof_ops ? ProofOps.toJSON(message.proof_ops) : undefined);
        message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
        message.from_address !== undefined && (obj.from_address = message.from_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitQueryResponse();
        message.chain_id = object.chain_id ?? "";
        message.query_id = object.query_id ?? "";
        message.result = object.result ?? new Uint8Array();
        message.proof_ops = object.proof_ops !== undefined && object.proof_ops !== null ? ProofOps.fromPartial(object.proof_ops) : undefined;
        message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
        message.from_address = object.from_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            chain_id: object.chain_id,
            query_id: object.query_id,
            result: object.result,
            proof_ops: object?.proof_ops ? ProofOps.fromAmino(object.proof_ops) : undefined,
            height: Long.fromString(object.height),
            from_address: object.from_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.chain_id = message.chain_id;
        obj.query_id = message.query_id;
        obj.result = message.result;
        obj.proof_ops = message.proof_ops ? ProofOps.toAmino(message.proof_ops) : undefined;
        obj.height = message.height ? message.height.toString() : undefined;
        obj.from_address = message.from_address;
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