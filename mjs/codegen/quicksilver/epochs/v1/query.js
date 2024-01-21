import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo } from "./genesis";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
function createBaseQueryEpochsInfoRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QueryEpochsInfoRequest = {
    typeUrl: "/quicksilver.epochs.v1.QueryEpochsInfoRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
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
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochsInfoRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEpochsInfoRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryEpochsInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QueryEpochsInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.epochs.v1.QueryEpochsInfoRequest",
            value: QueryEpochsInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQueryEpochsInfoResponse() {
    return {
        epochs: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QueryEpochsInfoResponse = {
    typeUrl: "/quicksilver.epochs.v1.QueryEpochsInfoResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.epochs) {
            EpochInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
                    message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
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
            epochs: Array.isArray(object?.epochs) ? object.epochs.map((e) => EpochInfo.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map(e => e ? EpochInfo.toJSON(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEpochsInfoResponse();
        message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            epochs: Array.isArray(object?.epochs) ? object.epochs.map((e) => EpochInfo.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.epochs) {
            obj.epochs = message.epochs.map(e => e ? EpochInfo.toAmino(e) : undefined);
        }
        else {
            obj.epochs = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryEpochsInfoResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryEpochsInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QueryEpochsInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.epochs.v1.QueryEpochsInfoResponse",
            value: QueryEpochsInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentEpochRequest() {
    return {
        identifier: ""
    };
}
export const QueryCurrentEpochRequest = {
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
            identifier: isSet(object.identifier) ? String(object.identifier) : ""
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
        return QueryCurrentEpochRequest.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCurrentEpochRequest.decode(message.value);
    },
    toProto(message) {
        return QueryCurrentEpochRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.epochs.v1.QueryCurrentEpochRequest",
            value: QueryCurrentEpochRequest.encode(message).finish()
        };
    }
};
function createBaseQueryCurrentEpochResponse() {
    return {
        currentEpoch: Long.ZERO
    };
}
export const QueryCurrentEpochResponse = {
    typeUrl: "/quicksilver.epochs.v1.QueryCurrentEpochResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (!message.currentEpoch.isZero()) {
            writer.uint32(8).int64(message.currentEpoch);
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
                    message.currentEpoch = reader.int64();
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
            currentEpoch: isSet(object.currentEpoch) ? Long.fromValue(object.currentEpoch) : Long.ZERO
        };
    },
    toJSON(message) {
        const obj = {};
        message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || Long.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentEpochResponse();
        message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? Long.fromValue(object.currentEpoch) : Long.ZERO;
        return message;
    },
    fromAmino(object) {
        return {
            currentEpoch: Long.fromString(object.current_epoch)
        };
    },
    toAmino(message) {
        const obj = {};
        obj.current_epoch = message.currentEpoch ? message.currentEpoch.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryCurrentEpochResponse.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return QueryCurrentEpochResponse.decode(message.value);
    },
    toProto(message) {
        return QueryCurrentEpochResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/quicksilver.epochs.v1.QueryCurrentEpochResponse",
            value: QueryCurrentEpochResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map