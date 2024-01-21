import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Query } from "./interchainquery";
import { Tx } from "../../../cosmos/tx/v1beta1/tx";
import { TxResponse } from "../../../cosmos/base/abci/v1beta1/abci";
import { TxProof } from "../../../tendermint/types/types";
import { Header } from "../../../ibc/lightclients/tendermint/v1/tendermint";
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseQueryRequestsRequest() {
    return {
        pagination: PageRequest.fromPartial({}),
        chainId: ""
    };
}
export const QueryRequestsRequest = {
    typeUrl: "/quicksilver.interchainquery.v1.QueryRequestsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.chainId !== "") {
            writer.uint32(18).string(message.chainId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRequestsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chainId = reader.string();
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
            chainId: isSet(object.chainId) ? String(object.chainId) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRequestsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        message.chainId = object.chainId ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
            chainId: object.chain_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        obj.chain_id = message.chainId;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRequestsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryRequestsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryRequestsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainquery.v1.QueryRequestsRequest",
            value: QueryRequestsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryRequestsResponse() {
    return {
        queries: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryRequestsResponse = {
    typeUrl: "/quicksilver.interchainquery.v1.QueryRequestsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.queries) {
            Query.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRequestsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.queries.push(Query.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => Query.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.queries) {
            obj.queries = message.queries.map(e => e ? Query.toJSON(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRequestsResponse();
        message.queries = object.queries?.map(e => Query.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => Query.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.queries) {
            obj.queries = message.queries.map(e => e ? Query.toAmino(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryRequestsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryRequestsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryRequestsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainquery.v1.QueryRequestsResponse",
            value: QueryRequestsResponse.encode(message).finish()
        };
    }
};
function createBaseGetTxWithProofResponse() {
    return {
        tx: Tx.fromPartial({}),
        txResponse: TxResponse.fromPartial({}),
        proof: TxProof.fromPartial({}),
        header: Header.fromPartial({}),
        txBytes: new Uint8Array()
    };
}
export const GetTxWithProofResponse = {
    typeUrl: "/quicksilver.interchainquery.v1.GetTxWithProofResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.txResponse !== undefined) {
            TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
        }
        if (message.proof !== undefined) {
            TxProof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        if (message.header !== undefined) {
            Header.encode(message.header, writer.uint32(34).fork()).ldelim();
        }
        if (message.txBytes.length !== 0) {
            writer.uint32(42).bytes(message.txBytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxWithProofResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.txResponse = TxResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.proof = TxProof.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.header = Header.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.txBytes = reader.bytes();
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
            tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
            txResponse: isSet(object.txResponse) ? TxResponse.fromJSON(object.txResponse) : undefined,
            proof: isSet(object.proof) ? TxProof.fromJSON(object.proof) : undefined,
            header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
            txBytes: isSet(object.txBytes) ? bytesFromBase64(object.txBytes) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
        message.txResponse !== undefined && (obj.txResponse = message.txResponse ? TxResponse.toJSON(message.txResponse) : undefined);
        message.proof !== undefined && (obj.proof = message.proof ? TxProof.toJSON(message.proof) : undefined);
        message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
        message.txBytes !== undefined && (obj.txBytes = base64FromBytes(message.txBytes !== undefined ? message.txBytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxWithProofResponse();
        message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
        message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : undefined;
        message.proof = object.proof !== undefined && object.proof !== null ? TxProof.fromPartial(object.proof) : undefined;
        message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
        message.txBytes = object.txBytes ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            tx: object?.tx ? Tx.fromAmino(object.tx) : undefined,
            txResponse: object?.tx_response ? TxResponse.fromAmino(object.tx_response) : undefined,
            proof: object?.proof ? TxProof.fromAmino(object.proof) : undefined,
            header: object?.header ? Header.fromAmino(object.header) : undefined,
            txBytes: object.tx_bytes
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
        obj.tx_response = message.txResponse ? TxResponse.toAmino(message.txResponse) : undefined;
        obj.proof = message.proof ? TxProof.toAmino(message.proof) : undefined;
        obj.header = message.header ? Header.toAmino(message.header) : undefined;
        obj.tx_bytes = message.txBytes;
        return obj;
    },
    fromAminoMsg(object) {
        return GetTxWithProofResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GetTxWithProofResponse.decode(message.value);
    },
    toProto(message) {
        return GetTxWithProofResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainquery.v1.GetTxWithProofResponse",
            value: GetTxWithProofResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map