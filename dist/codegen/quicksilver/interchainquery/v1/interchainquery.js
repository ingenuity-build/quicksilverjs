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
exports.DataPoint = exports.Query = void 0;
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQuery() {
    return {
        id: "",
        connection_id: "",
        chain_id: "",
        query_type: "",
        request: new Uint8Array(),
        period: "",
        last_height: "",
        callback_id: "",
        ttl: helpers_1.Long.UZERO,
        last_emission: ""
    };
}
exports.Query = {
    typeUrl: "/quicksilver.interchainquery.v1.Query",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        if (message.chain_id !== "") {
            writer.uint32(26).string(message.chain_id);
        }
        if (message.query_type !== "") {
            writer.uint32(34).string(message.query_type);
        }
        if (message.request.length !== 0) {
            writer.uint32(42).bytes(message.request);
        }
        if (message.period !== "") {
            writer.uint32(50).string(message.period);
        }
        if (message.last_height !== "") {
            writer.uint32(58).string(message.last_height);
        }
        if (message.callback_id !== "") {
            writer.uint32(66).string(message.callback_id);
        }
        if (!message.ttl.isZero()) {
            writer.uint32(72).uint64(message.ttl);
        }
        if (message.last_emission !== "") {
            writer.uint32(82).string(message.last_emission);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.connection_id = reader.string();
                    break;
                case 3:
                    message.chain_id = reader.string();
                    break;
                case 4:
                    message.query_type = reader.string();
                    break;
                case 5:
                    message.request = reader.bytes();
                    break;
                case 6:
                    message.period = reader.string();
                    break;
                case 7:
                    message.last_height = reader.string();
                    break;
                case 8:
                    message.callback_id = reader.string();
                    break;
                case 9:
                    message.ttl = reader.uint64();
                    break;
                case 10:
                    message.last_emission = reader.string();
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
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : "",
            connection_id: (0, helpers_1.isSet)(object.connection_id) ? String(object.connection_id) : "",
            chain_id: (0, helpers_1.isSet)(object.chain_id) ? String(object.chain_id) : "",
            query_type: (0, helpers_1.isSet)(object.query_type) ? String(object.query_type) : "",
            request: (0, helpers_1.isSet)(object.request) ? (0, helpers_1.bytesFromBase64)(object.request) : new Uint8Array(),
            period: (0, helpers_1.isSet)(object.period) ? String(object.period) : "",
            last_height: (0, helpers_1.isSet)(object.last_height) ? String(object.last_height) : "",
            callback_id: (0, helpers_1.isSet)(object.callback_id) ? String(object.callback_id) : "",
            ttl: (0, helpers_1.isSet)(object.ttl) ? helpers_1.Long.fromValue(object.ttl) : helpers_1.Long.UZERO,
            last_emission: (0, helpers_1.isSet)(object.last_emission) ? String(object.last_emission) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.connection_id !== undefined && (obj.connection_id = message.connection_id);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.query_type !== undefined && (obj.query_type = message.query_type);
        message.request !== undefined && (obj.request = (0, helpers_1.base64FromBytes)(message.request !== undefined ? message.request : new Uint8Array()));
        message.period !== undefined && (obj.period = message.period);
        message.last_height !== undefined && (obj.last_height = message.last_height);
        message.callback_id !== undefined && (obj.callback_id = message.callback_id);
        message.ttl !== undefined && (obj.ttl = (message.ttl || helpers_1.Long.UZERO).toString());
        message.last_emission !== undefined && (obj.last_emission = message.last_emission);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuery();
        message.id = object.id ?? "";
        message.connection_id = object.connection_id ?? "";
        message.chain_id = object.chain_id ?? "";
        message.query_type = object.query_type ?? "";
        message.request = object.request ?? new Uint8Array();
        message.period = object.period ?? "";
        message.last_height = object.last_height ?? "";
        message.callback_id = object.callback_id ?? "";
        message.ttl = object.ttl !== undefined && object.ttl !== null ? helpers_1.Long.fromValue(object.ttl) : helpers_1.Long.UZERO;
        message.last_emission = object.last_emission ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            connection_id: object.connection_id,
            chain_id: object.chain_id,
            query_type: object.query_type,
            request: object.request,
            period: object.period,
            last_height: object.last_height,
            callback_id: object.callback_id,
            ttl: helpers_1.Long.fromString(object.ttl),
            last_emission: object.last_emission
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.connection_id = message.connection_id;
        obj.chain_id = message.chain_id;
        obj.query_type = message.query_type;
        obj.request = message.request;
        obj.period = message.period;
        obj.last_height = message.last_height;
        obj.callback_id = message.callback_id;
        obj.ttl = message.ttl ? message.ttl.toString() : undefined;
        obj.last_emission = message.last_emission;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.Query.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.Query.decode(message.value);
    },
    toProto(message) {
        return exports.Query.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainquery.v1.Query",
            value: exports.Query.encode(message).finish()
        };
    }
};
function createBaseDataPoint() {
    return {
        id: "",
        remote_height: "",
        local_height: "",
        value: new Uint8Array()
    };
}
exports.DataPoint = {
    typeUrl: "/quicksilver.interchainquery.v1.DataPoint",
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.remote_height !== "") {
            writer.uint32(18).string(message.remote_height);
        }
        if (message.local_height !== "") {
            writer.uint32(26).string(message.local_height);
        }
        if (message.value.length !== 0) {
            writer.uint32(34).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDataPoint();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.remote_height = reader.string();
                    break;
                case 3:
                    message.local_height = reader.string();
                    break;
                case 4:
                    message.value = reader.bytes();
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
            id: (0, helpers_1.isSet)(object.id) ? String(object.id) : "",
            remote_height: (0, helpers_1.isSet)(object.remote_height) ? String(object.remote_height) : "",
            local_height: (0, helpers_1.isSet)(object.local_height) ? String(object.local_height) : "",
            value: (0, helpers_1.isSet)(object.value) ? (0, helpers_1.bytesFromBase64)(object.value) : new Uint8Array()
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.remote_height !== undefined && (obj.remote_height = message.remote_height);
        message.local_height !== undefined && (obj.local_height = message.local_height);
        message.value !== undefined && (obj.value = (0, helpers_1.base64FromBytes)(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDataPoint();
        message.id = object.id ?? "";
        message.remote_height = object.remote_height ?? "";
        message.local_height = object.local_height ?? "";
        message.value = object.value ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        return {
            id: object.id,
            remote_height: object.remote_height,
            local_height: object.local_height,
            value: object.value
        };
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id;
        obj.remote_height = message.remote_height;
        obj.local_height = message.local_height;
        obj.value = message.value;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.DataPoint.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.DataPoint.decode(message.value);
    },
    toProto(message) {
        return exports.DataPoint.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.interchainquery.v1.DataPoint",
            value: exports.DataPoint.encode(message).finish()
        };
    }
};
//# sourceMappingURL=interchainquery.js.map