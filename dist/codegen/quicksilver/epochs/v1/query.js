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
exports.QueryCurrentEpochResponse = exports.QueryCurrentEpochRequest = exports.QueryEpochsInfoResponse = exports.QueryEpochsInfoRequest = void 0;
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const genesis_1 = require("./genesis");
const helpers_1 = require("../../../helpers");
const _m0 = __importStar(require("protobufjs/minimal"));
function createBaseQueryEpochsInfoRequest() {
    return {
        pagination: pagination_1.PageRequest.fromPartial({})
    };
}
exports.QueryEpochsInfoRequest = {
    typeUrl: "/quicksilver.epochs.v1.QueryEpochsInfoRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochsInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochsInfoRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? pagination_1.PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? pagination_1.PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEpochsInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEpochsInfoRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEpochsInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.epochs.v1.QueryEpochsInfoRequest",
            value: exports.QueryEpochsInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEpochsInfoResponse() {
    return {
        epochs: [],
        pagination: pagination_1.PageResponse.fromPartial({})
    };
}
exports.QueryEpochsInfoResponse = {
    typeUrl: "/quicksilver.epochs.v1.QueryEpochsInfoResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.epochs) {
            genesis_1.EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEpochsInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.epochs.push(genesis_1.EpochInfo.decode(reader, reader.uint32()));
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
            epochs: Array.isArray(object?.epochs) ? object.epochs.map((e) => genesis_1.EpochInfo.fromJSON(e)) : [],
            pagination: (0, helpers_1.isSet)(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map(e => e ? genesis_1.EpochInfo.toJSON(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochsInfoResponse();
        message.epochs = object.epochs?.map(e => genesis_1.EpochInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            epochs: Array.isArray(object?.epochs) ? object.epochs.map((e) => genesis_1.EpochInfo.fromAmino(e)) : [],
            pagination: object?.pagination ? pagination_1.PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map(e => e ? genesis_1.EpochInfo.toAmino(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        obj.pagination = message.pagination ? pagination_1.PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryEpochsInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryEpochsInfoResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryEpochsInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.epochs.v1.QueryEpochsInfoResponse",
            value: exports.QueryEpochsInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentEpochRequest() {
    return {
        identifier: ""
    };
}
exports.QueryCurrentEpochRequest = {
    typeUrl: "/quicksilver.epochs.v1.QueryCurrentEpochRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentEpochRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
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
            identifier: (0, helpers_1.isSet)(object.identifier) ? String(object.identifier) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.identifier !== undefined && (obj.identifier = message.identifier);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentEpochRequest();
        message.identifier = object.identifier ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            identifier: object.identifier
        };
    },
    toAmino(message) {
        const obj = {};
        obj.identifier = message.identifier;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentEpochRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentEpochRequest.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentEpochRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.epochs.v1.QueryCurrentEpochRequest",
            value: exports.QueryCurrentEpochRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentEpochResponse() {
    return {
        current_epoch: helpers_1.Long.ZERO
    };
}
exports.QueryCurrentEpochResponse = {
    typeUrl: "/quicksilver.epochs.v1.QueryCurrentEpochResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.current_epoch.isZero()) {
            writer.uint32(8).int64(message.current_epoch);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentEpochResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.current_epoch = reader.int64();
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
            current_epoch: (0, helpers_1.isSet)(object.current_epoch) ? helpers_1.Long.fromValue(object.current_epoch) : helpers_1.Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.current_epoch !== undefined && (obj.current_epoch = (message.current_epoch || helpers_1.Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentEpochResponse();
        message.current_epoch = object.current_epoch !== undefined && object.current_epoch !== null ? helpers_1.Long.fromValue(object.current_epoch) : helpers_1.Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            current_epoch: helpers_1.Long.fromString(object.current_epoch)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.current_epoch = message.current_epoch ? message.current_epoch.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return exports.QueryCurrentEpochResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return exports.QueryCurrentEpochResponse.decode(message.value);
    },
    toProto(message) {
        return exports.QueryCurrentEpochResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.epochs.v1.QueryCurrentEpochResponse",
            value: exports.QueryCurrentEpochResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map