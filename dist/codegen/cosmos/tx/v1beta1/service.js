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
exports.GetBlockWithTxsResponse = exports.GetBlockWithTxsRequest = exports.GetTxResponse = exports.GetTxRequest = exports.SimulateResponse = exports.SimulateRequest = exports.BroadcastTxResponse = exports.BroadcastTxRequest = exports.GetTxsEventResponse = exports.GetTxsEventRequest = exports.broadcastModeToJSON = exports.broadcastModeFromJSON = exports.BroadcastModeAmino = exports.BroadcastModeSDKType = exports.BroadcastMode = exports.orderByToJSON = exports.orderByFromJSON = exports.OrderByAmino = exports.OrderBySDKType = exports.OrderBy = void 0;
const tx_1 = require("./tx");
const pagination_1 = require("../../base/query/v1beta1/pagination");
const abci_1 = require("../../base/abci/v1beta1/abci");
const types_1 = require("../../../tendermint/types/types");
const block_1 = require("../../../tendermint/types/block");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
/** OrderBy defines the sorting order */
var OrderBy;
(function (OrderBy) {
    /** ORDER_BY_UNSPECIFIED - ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case. */
    OrderBy[OrderBy["ORDER_BY_UNSPECIFIED"] = 0] = "ORDER_BY_UNSPECIFIED";
    /** ORDER_BY_ASC - ORDER_BY_ASC defines ascending order */
    OrderBy[OrderBy["ORDER_BY_ASC"] = 1] = "ORDER_BY_ASC";
    /** ORDER_BY_DESC - ORDER_BY_DESC defines descending order */
    OrderBy[OrderBy["ORDER_BY_DESC"] = 2] = "ORDER_BY_DESC";
    OrderBy[OrderBy["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderBy || (exports.OrderBy = OrderBy = {}));
exports.OrderBySDKType = OrderBy;
exports.OrderByAmino = OrderBy;
function orderByFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_BY_UNSPECIFIED":
            return OrderBy.ORDER_BY_UNSPECIFIED;
        case 1:
        case "ORDER_BY_ASC":
            return OrderBy.ORDER_BY_ASC;
        case 2:
        case "ORDER_BY_DESC":
            return OrderBy.ORDER_BY_DESC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderBy.UNRECOGNIZED;
    }
}
exports.orderByFromJSON = orderByFromJSON;
function orderByToJSON(object) {
    switch (object) {
        case OrderBy.ORDER_BY_UNSPECIFIED:
            return "ORDER_BY_UNSPECIFIED";
        case OrderBy.ORDER_BY_ASC:
            return "ORDER_BY_ASC";
        case OrderBy.ORDER_BY_DESC:
            return "ORDER_BY_DESC";
        case OrderBy.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.orderByToJSON = orderByToJSON;
/** BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method. */
var BroadcastMode;
(function (BroadcastMode) {
    /** BROADCAST_MODE_UNSPECIFIED - zero-value for mode ordering */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = 0] = "BROADCAST_MODE_UNSPECIFIED";
    /**
     * BROADCAST_MODE_BLOCK - BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
     * the tx to be committed in a block.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_BLOCK"] = 1] = "BROADCAST_MODE_BLOCK";
    /**
     * BROADCAST_MODE_SYNC - BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
     * a CheckTx execution response only.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_SYNC"] = 2] = "BROADCAST_MODE_SYNC";
    /**
     * BROADCAST_MODE_ASYNC - BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
     * immediately.
     */
    BroadcastMode[BroadcastMode["BROADCAST_MODE_ASYNC"] = 3] = "BROADCAST_MODE_ASYNC";
    BroadcastMode[BroadcastMode["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BroadcastMode || (exports.BroadcastMode = BroadcastMode = {}));
exports.BroadcastModeSDKType = BroadcastMode;
exports.BroadcastModeAmino = BroadcastMode;
function broadcastModeFromJSON(object) {
    switch (object) {
        case 0:
        case "BROADCAST_MODE_UNSPECIFIED":
            return BroadcastMode.BROADCAST_MODE_UNSPECIFIED;
        case 1:
        case "BROADCAST_MODE_BLOCK":
            return BroadcastMode.BROADCAST_MODE_BLOCK;
        case 2:
        case "BROADCAST_MODE_SYNC":
            return BroadcastMode.BROADCAST_MODE_SYNC;
        case 3:
        case "BROADCAST_MODE_ASYNC":
            return BroadcastMode.BROADCAST_MODE_ASYNC;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BroadcastMode.UNRECOGNIZED;
    }
}
exports.broadcastModeFromJSON = broadcastModeFromJSON;
function broadcastModeToJSON(object) {
    switch (object) {
        case BroadcastMode.BROADCAST_MODE_UNSPECIFIED:
            return "BROADCAST_MODE_UNSPECIFIED";
        case BroadcastMode.BROADCAST_MODE_BLOCK:
            return "BROADCAST_MODE_BLOCK";
        case BroadcastMode.BROADCAST_MODE_SYNC:
            return "BROADCAST_MODE_SYNC";
        case BroadcastMode.BROADCAST_MODE_ASYNC:
            return "BROADCAST_MODE_ASYNC";
        case BroadcastMode.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.broadcastModeToJSON = broadcastModeToJSON;
function createBaseGetTxsEventRequest() {
    return {
        events: [],
        pagination: pagination_1.PageRequest.fromPartial({}),
        order_by: 0
    };
}
exports.GetTxsEventRequest = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
    aminoType: "cosmos-sdk/GetTxsEventRequest",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.events) {
            writer.uint32(10).string(v);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.order_by !== 0) {
            writer.uint32(24).int32(message.order_by);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsEventRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.events.push(reader.string());
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.order_by = reader.int32();
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
            events: Array.isArray(object?.events) ? object.events.map((e) => String(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
            order_by: (0, helpers_1.isSet)(object.order_by) ? orderByFromJSON(object.order_by) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e);
        }
        else {
            obj.events = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        message.order_by !== undefined && (obj.order_by = orderByToJSON(message.order_by));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxsEventRequest();
        message.events = object.events?.map(e => e) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        message.order_by = object.order_by ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            events: Array.isArray(object?.events) ? object.events.map((e) => e) : [],
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined,
            order_by: (0, helpers_1.isSet)(object.order_by) ? orderByFromJSON(object.order_by) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.events) {
            obj.events = message.events.map(e => e);
        }
        else {
            obj.events = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        obj.order_by = message.order_by;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTxsEventRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxsEventRequest",
            value: exports.GetTxsEventRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetTxsEventRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetTxsEventRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxsEventRequest",
            value: exports.GetTxsEventRequest.encode(message).finish()
        };
    }
};
function createBaseGetTxsEventResponse() {
    return {
        txs: [],
        tx_responses: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.GetTxsEventResponse = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
    aminoType: "cosmos-sdk/GetTxsEventResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.txs) {
            tx_1.Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.tx_responses) {
            abci_1.TxResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxsEventResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(tx_1.Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.tx_responses.push(abci_1.TxResponse.decode(reader, reader.uint32()));
                    break;
                case 3:
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => tx_1.Tx.fromJSON(e)) : [],
            tx_responses: Array.isArray(object?.tx_responses) ? object.tx_responses.map((e) => abci_1.TxResponse.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? tx_1.Tx.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        if (message.tx_responses) {
            obj.tx_responses = message.tx_responses.map(e => e ? abci_1.TxResponse.toJSON(e) : undefined);
        }
        else {
            obj.tx_responses = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxsEventResponse();
        message.txs = object.txs?.map(e => tx_1.Tx.fromPartial(e)) || [];
        message.tx_responses = object.tx_responses?.map(e => abci_1.TxResponse.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => tx_1.Tx.fromAmino(e)) : [],
            tx_responses: Array.isArray(object?.tx_responses) ? object.tx_responses.map((e) => abci_1.TxResponse.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? tx_1.Tx.toAmino(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        if (message.tx_responses) {
            obj.tx_responses = message.tx_responses.map(e => e ? abci_1.TxResponse.toAmino(e) : undefined);
        }
        else {
            obj.tx_responses = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTxsEventResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxsEventResponse",
            value: exports.GetTxsEventResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetTxsEventResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetTxsEventResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxsEventResponse",
            value: exports.GetTxsEventResponse.encode(message).finish()
        };
    }
};
function createBaseBroadcastTxRequest() {
    return {
        tx_bytes: new Uint8Array(),
        mode: 0
    };
}
exports.BroadcastTxRequest = {
    typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
    aminoType: "cosmos-sdk/BroadcastTxRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx_bytes.length !== 0) {
            writer.uint32(10).bytes(message.tx_bytes);
        }
        if (message.mode !== 0) {
            writer.uint32(16).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBroadcastTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_bytes = reader.bytes();
                    break;
                case 2:
                    message.mode = reader.int32();
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
            tx_bytes: (0, helpers_1.isSet)(object.tx_bytes) ? (0, helpers_1.bytesFromBase64)(object.tx_bytes) : new Uint8Array(),
            mode: (0, helpers_1.isSet)(object.mode) ? broadcastModeFromJSON(object.mode) : -1
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx_bytes !== undefined && (obj.tx_bytes = (0, helpers_1.base64FromBytes)(message.tx_bytes !== undefined ? message.tx_bytes : new Uint8Array()));
        message.mode !== undefined && (obj.mode = broadcastModeToJSON(message.mode));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBroadcastTxRequest();
        message.tx_bytes = object.tx_bytes ?? new Uint8Array();
        message.mode = object.mode ?? 0;
        return message;
    },
    fromAmino(object) {
        return {
            tx_bytes: object.tx_bytes,
            mode: (0, helpers_1.isSet)(object.mode) ? broadcastModeFromJSON(object.mode) : -1
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx_bytes = message.tx_bytes;
        obj.mode = message.mode;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BroadcastTxRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BroadcastTxRequest",
            value: exports.BroadcastTxRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BroadcastTxRequest.decode(message.value);
    },
    toProto(message) {
        return exports.BroadcastTxRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.BroadcastTxRequest",
            value: exports.BroadcastTxRequest.encode(message).finish()
        };
    }
};
function createBaseBroadcastTxResponse() {
    return {
        tx_response: abci_1.TxResponse.fromPartial({})
    };
}
exports.BroadcastTxResponse = {
    typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
    aminoType: "cosmos-sdk/BroadcastTxResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx_response !== undefined) {
            abci_1.TxResponse.encode(message.tx_response, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBroadcastTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_response = abci_1.TxResponse.decode(reader, reader.uint32());
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
            tx_response: (0, helpers_1.isSet)(object.tx_response) ? abci_1.TxResponse.fromJSON(object.tx_response) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx_response !== undefined && (obj.tx_response = message.tx_response ? abci_1.TxResponse.toJSON(message.tx_response) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBroadcastTxResponse();
        message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? abci_1.TxResponse.fromPartial(object.tx_response) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            tx_response: object?.tx_response ? abci_1.TxResponse.fromAmino(object.tx_response) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx_response = message.tx_response ? abci_1.TxResponse.toAmino(message.tx_response) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.BroadcastTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/BroadcastTxResponse",
            value: exports.BroadcastTxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.BroadcastTxResponse.decode(message.value);
    },
    toProto(message) {
        return exports.BroadcastTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.BroadcastTxResponse",
            value: exports.BroadcastTxResponse.encode(message).finish()
        };
    }
};
function createBaseSimulateRequest() {
    return {
        tx: tx_1.Tx.fromPartial({}),
        tx_bytes: new Uint8Array()
    };
}
exports.SimulateRequest = {
    typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
    aminoType: "cosmos-sdk/SimulateRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.tx_bytes.length !== 0) {
            writer.uint32(18).bytes(message.tx_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    break;
                case 2:
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
            tx_bytes: (0, helpers_1.isSet)(object.tx_bytes) ? (0, helpers_1.bytesFromBase64)(object.tx_bytes) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? tx_1.Tx.toJSON(message.tx) : undefined);
        message.tx_bytes !== undefined && (obj.tx_bytes = (0, helpers_1.base64FromBytes)(message.tx_bytes !== undefined ? message.tx_bytes : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSimulateRequest();
        message.tx = object.tx !== undefined && object.tx !== null ? tx_1.Tx.fromPartial(object.tx) : undefined;
        message.tx_bytes = object.tx_bytes ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            tx: object?.tx ? tx_1.Tx.fromAmino(object.tx) : undefined,
            tx_bytes: object.tx_bytes
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? tx_1.Tx.toAmino(message.tx) : undefined;
        obj.tx_bytes = message.tx_bytes;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SimulateRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SimulateRequest",
            value: exports.SimulateRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SimulateRequest.decode(message.value);
    },
    toProto(message) {
        return exports.SimulateRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SimulateRequest",
            value: exports.SimulateRequest.encode(message).finish()
        };
    }
};
function createBaseSimulateResponse() {
    return {
        gas_info: abci_1.GasInfo.fromPartial({}),
        result: abci_1.Result.fromPartial({})
    };
}
exports.SimulateResponse = {
    typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
    aminoType: "cosmos-sdk/SimulateResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.gas_info !== undefined) {
            abci_1.GasInfo.encode(message.gas_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.result !== undefined) {
            abci_1.Result.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSimulateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gas_info = abci_1.GasInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.result = abci_1.Result.decode(reader, reader.uint32());
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
            gas_info: (0, helpers_1.isSet)(object.gas_info) ? abci_1.GasInfo.fromJSON(object.gas_info) : undefined,
            result: (0, helpers_1.isSet)(object.result) ? abci_1.Result.fromJSON(object.result) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.gas_info !== undefined && (obj.gas_info = message.gas_info ? abci_1.GasInfo.toJSON(message.gas_info) : undefined);
        message.result !== undefined && (obj.result = message.result ? abci_1.Result.toJSON(message.result) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSimulateResponse();
        message.gas_info = object.gas_info !== undefined && object.gas_info !== null ? abci_1.GasInfo.fromPartial(object.gas_info) : undefined;
        message.result = object.result !== undefined && object.result !== null ? abci_1.Result.fromPartial(object.result) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            gas_info: object?.gas_info ? abci_1.GasInfo.fromAmino(object.gas_info) : undefined,
            result: object?.result ? abci_1.Result.fromAmino(object.result) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.gas_info = message.gas_info ? abci_1.GasInfo.toAmino(message.gas_info) : undefined;
        obj.result = message.result ? abci_1.Result.toAmino(message.result) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.SimulateResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/SimulateResponse",
            value: exports.SimulateResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.SimulateResponse.decode(message.value);
    },
    toProto(message) {
        return exports.SimulateResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.SimulateResponse",
            value: exports.SimulateResponse.encode(message).finish()
        };
    }
};
function createBaseGetTxRequest() {
    return {
        hash: ""
    };
}
exports.GetTxRequest = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
    aminoType: "cosmos-sdk/GetTxRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
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
            hash: (0, helpers_1.isSet)(object.hash) ? String(object.hash) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxRequest();
        message.hash = object.hash ?? "";
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
        return exports.GetTxRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxRequest",
            value: exports.GetTxRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetTxRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetTxRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxRequest",
            value: exports.GetTxRequest.encode(message).finish()
        };
    }
};
function createBaseGetTxResponse() {
    return {
        tx: tx_1.Tx.fromPartial({}),
        tx_response: abci_1.TxResponse.fromPartial({})
    };
}
exports.GetTxResponse = {
    typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
    aminoType: "cosmos-sdk/GetTxResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx !== undefined) {
            tx_1.Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.tx_response !== undefined) {
            abci_1.TxResponse.encode(message.tx_response, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetTxResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = tx_1.Tx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.tx_response = abci_1.TxResponse.decode(reader, reader.uint32());
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
            tx_response: (0, helpers_1.isSet)(object.tx_response) ? abci_1.TxResponse.fromJSON(object.tx_response) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined && (obj.tx = message.tx ? tx_1.Tx.toJSON(message.tx) : undefined);
        message.tx_response !== undefined && (obj.tx_response = message.tx_response ? abci_1.TxResponse.toJSON(message.tx_response) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetTxResponse();
        message.tx = object.tx !== undefined && object.tx !== null ? tx_1.Tx.fromPartial(object.tx) : undefined;
        message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? abci_1.TxResponse.fromPartial(object.tx_response) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            tx: object?.tx ? tx_1.Tx.fromAmino(object.tx) : undefined,
            tx_response: object?.tx_response ? abci_1.TxResponse.fromAmino(object.tx_response) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.tx = message.tx ? tx_1.Tx.toAmino(message.tx) : undefined;
        obj.tx_response = message.tx_response ? abci_1.TxResponse.toAmino(message.tx_response) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetTxResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetTxResponse",
            value: exports.GetTxResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetTxResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetTxResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetTxResponse",
            value: exports.GetTxResponse.encode(message).finish()
        };
    }
};
function createBaseGetBlockWithTxsRequest() {
    return {
        height: helpers_1.Long.ZERO,
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.GetBlockWithTxsRequest = {
    typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
    aminoType: "cosmos-sdk/GetBlockWithTxsRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.height.isZero()) {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockWithTxsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = reader.int64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = (message.height || helpers_1.Long.ZERO).toString());
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetBlockWithTxsRequest();
        message.height = object.height !== undefined && object.height !== null ? helpers_1.Long.fromValue(object.height) : helpers_1.Long.ZERO;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            height: helpers_1.Long.fromString(object.height),
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.height = message.height ? message.height.toString() : undefined;
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetBlockWithTxsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockWithTxsRequest",
            value: exports.GetBlockWithTxsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetBlockWithTxsRequest.decode(message.value);
    },
    toProto(message) {
        return exports.GetBlockWithTxsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsRequest",
            value: exports.GetBlockWithTxsRequest.encode(message).finish()
        };
    }
};
function createBaseGetBlockWithTxsResponse() {
    return {
        txs: [],
        block_id: types_1.BlockID.fromPartial({}),
        block: block_1.Block.fromPartial({}),
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.GetBlockWithTxsResponse = {
    typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
    aminoType: "cosmos-sdk/GetBlockWithTxsResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.txs) {
            tx_1.Tx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.block_id !== undefined) {
            types_1.BlockID.encode(message.block_id, writer.uint32(18).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(26).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockWithTxsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.txs.push(tx_1.Tx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.block_id = types_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.block = block_1.Block.decode(reader, reader.uint32());
                    break;
                case 4:
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
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => tx_1.Tx.fromJSON(e)) : [],
            block_id: (0, helpers_1.isSet)(object.block_id) ? types_1.BlockID.fromJSON(object.block_id) : undefined,
            block: (0, helpers_1.isSet)(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? tx_1.Tx.toJSON(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        message.block_id !== undefined && (obj.block_id = message.block_id ? types_1.BlockID.toJSON(message.block_id) : undefined);
        message.block !== undefined && (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetBlockWithTxsResponse();
        message.txs = object.txs?.map(e => tx_1.Tx.fromPartial(e)) || [];
        message.block_id = object.block_id !== undefined && object.block_id !== null ? types_1.BlockID.fromPartial(object.block_id) : undefined;
        message.block = object.block !== undefined && object.block !== null ? block_1.Block.fromPartial(object.block) : undefined;
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            txs: Array.isArray(object?.txs) ? object.txs.map((e) => tx_1.Tx.fromAmino(e)) : [],
            block_id: object?.block_id ? types_1.BlockID.fromAmino(object.block_id) : undefined,
            block: object?.block ? block_1.Block.fromAmino(object.block) : undefined,
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.txs) {
            obj.txs = message.txs.map(e => e ? tx_1.Tx.toAmino(e) : undefined);
        }
        else {
            obj.txs = [];
        }
        obj.block_id = message.block_id ? types_1.BlockID.toAmino(message.block_id) : undefined;
        obj.block = message.block ? block_1.Block.toAmino(message.block) : undefined;
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.GetBlockWithTxsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/GetBlockWithTxsResponse",
            value: exports.GetBlockWithTxsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return exports.GetBlockWithTxsResponse.decode(message.value);
    },
    toProto(message) {
        return exports.GetBlockWithTxsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.tx.v1beta1.GetBlockWithTxsResponse",
            value: exports.GetBlockWithTxsResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=service.js.map