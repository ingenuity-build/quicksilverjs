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
exports.GetTxWithProofResponse = exports.QueryRequestsResponse = exports.QueryRequestsRequest = void 0;
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const interchainquery_1 = require("./interchainquery");
const tx_1 = require("../../../cosmos/tx/v1beta1/tx");
const abci_1 = require("../../../cosmos/base/abci/v1beta1/abci");
const types_1 = require("../../../tendermint/types/types");
const tendermint_1 = require("../../../ibc/lightclients/tendermint/v1/tendermint");
const _m0 = __importStar(require("protobufjs/minimal"));
const helpers_1 = require("../../../helpers");
function createBaseQueryRequestsRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({}),
        chain_id: ""
    };
}
exports.QueryRequestsRequest = {
    typeUrl: "/quicksilver.interchainquery.v1.QueryRequestsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain_id = reader.string();
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRequestsRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        message.chain_id = object.chain_id ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined,
            chain_id: object.chain_id
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        obj.chain_id = message.chain_id;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryRequestsRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryRequestsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryRequestsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainquery.v1.QueryRequestsRequest",
            value: exports.QueryRequestsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryRequestsResponse() {
    return {
        queries: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryRequestsResponse = {
    typeUrl: "/quicksilver.interchainquery.v1.QueryRequestsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.queries) {
            interchainquery_1.Query.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.queries.push(interchainquery_1.Query.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => interchainquery_1.Query.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.queries) {
            obj.queries = message.queries.map(e => e ? interchainquery_1.Query.toJSON(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryRequestsResponse();
        message.queries = object.queries?.map(e => interchainquery_1.Query.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            queries: Array.isArray(object?.queries) ? object.queries.map((e) => interchainquery_1.Query.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.queries) {
            obj.queries = message.queries.map(e => e ? interchainquery_1.Query.toAmino(e) : undefined);
        }
        else {
            obj.queries = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryRequestsResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryRequestsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryRequestsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainquery.v1.QueryRequestsResponse",
            value: exports.QueryRequestsResponse.encode(message).finish()
        };
    }
};
function createBaseGetTxWithProofResponse() {
    return {
        tx: tx_1.Tx.fromPartial({}),
        tx_response: abci_1.TxResponse.fromPartial({}),
        proof: types_1.TxProof.fromPartial({}),
        header: tendermint_1.Header.fromPartial({}),
        tx_bytes: new Uint8Array()
    };
}
exports.GetTxWithProofResponse = {
    typeUrl: "/quicksilver.interchainquery.v1.GetTxWithProofResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.tx_response !== undefined) {
            abci_1.TxResponse.encode(message.tx_response, writer.uint32(18).fork()).ldelim();
        }
        if (message.proof !== undefined) {
            types_1.TxProof.encode(message.proof, writer.uint32(26).fork()).ldelim();
        }
        if (message.header !== undefined) {
            tendermint_1.Header.encode(message.header, writer.uint32(34).fork()).ldelim();
        }
        if (message.tx_bytes.length !== 0) {
            writer.uint32(42).bytes(message.tx_bytes);
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
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tx_response = abci_1.TxResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.proof = types_1.TxProof.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.header = tendermint_1.Header.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.tx_bytes = reader.bytes();
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
            tx: (0, helpers_1.isSet)(object.tx) ? tx_1.Tx.fromJSON(object.tx) : undefined,
            tx_response: (0, helpers_1.isSet)(object.tx_response) ? abci_1.TxResponse.fromJSON(object.tx_response) : undefined,
            proof: (0, helpers_1.isSet)(object.proof) ? types_1.TxProof.fromJSON(object.proof) : undefined,
            header: (0, helpers_1.isSet)(object.header) ? tendermint_1.Header.fromJSON(object.header) : undefined,
            tx_bytes: (0, helpers_1.isSet)(object.tx_bytes) ? (0, helpers_1.bytesFromBase64)(object.tx_bytes) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? tx_1.Tx.toJSON(message.tx) : undefined);
        message.tx_response !== undefined && (obj.tx_response = message.tx_response ? abci_1.TxResponse.toJSON(message.tx_response) : undefined);
        message.proof !== undefined && (obj.proof = message.proof ? types_1.TxProof.toJSON(message.proof) : undefined);
        message.header !== undefined && (obj.header = message.header ? tendermint_1.Header.toJSON(message.header) : undefined);
        message.tx_bytes !== undefined && (obj.tx_bytes = (0, helpers_1.base64FromBytes)(message.tx_bytes !== undefined ? message.tx_bytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxWithProofResponse();
        message.tx = object.tx !== undefined && object.tx !== null ? tx_1.Tx.fromPartial(object.tx) : undefined;
        message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? abci_1.TxResponse.fromPartial(object.tx_response) : undefined;
        message.proof = object.proof !== undefined && object.proof !== null ? types_1.TxProof.fromPartial(object.proof) : undefined;
        message.header = object.header !== undefined && object.header !== null ? tendermint_1.Header.fromPartial(object.header) : undefined;
        message.tx_bytes = object.tx_bytes ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            tx: object?.tx ? tx_1.Tx.fromAmino(object.tx) : undefined,
            tx_response: object?.tx_response ? abci_1.TxResponse.fromAmino(object.tx_response) : undefined,
            proof: object?.proof ? types_1.TxProof.fromAmino(object.proof) : undefined,
            header: object?.header ? tendermint_1.Header.fromAmino(object.header) : undefined,
            tx_bytes: object.tx_bytes
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? tx_1.Tx.toAmino(message.tx) : undefined;
        obj.tx_response = message.tx_response ? abci_1.TxResponse.toAmino(message.tx_response) : undefined;
        obj.proof = message.proof ? types_1.TxProof.toAmino(message.proof) : undefined;
        obj.header = message.header ? tendermint_1.Header.toAmino(message.header) : undefined;
        obj.tx_bytes = message.tx_bytes;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTxWithProofResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.GetTxWithProofResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetTxWithProofResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainquery.v1.GetTxWithProofResponse",
            value: exports.GetTxWithProofResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map