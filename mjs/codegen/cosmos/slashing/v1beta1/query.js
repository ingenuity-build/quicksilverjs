import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Params, ValidatorSigningInfo } from "./slashing";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
function createBaseQueryParamsRequest() {
    return {};
}
export const QueryParamsRequest = {
    typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest",
    aminoType: "cosmos-sdk/QueryParamsRequest",
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
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
        return QueryParamsRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsRequest",
            value: QueryParamsRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsRequest.decode(message.value);
    },
    toProto(message) {
        return QueryParamsRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.QueryParamsRequest",
            value: QueryParamsRequest.encode(message).finish()
        };
    }
};
function createBaseQueryParamsResponse() {
    return {
        params: Params.fromPartial({})
    };
}
export const QueryParamsResponse = {
    typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse",
    aminoType: "cosmos-sdk/QueryParamsResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            params: object?.params ? Params.fromAmino(object.params) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QueryParamsResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QueryParamsResponse",
            value: QueryParamsResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QueryParamsResponse.decode(message.value);
    },
    toProto(message) {
        return QueryParamsResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.QueryParamsResponse",
            value: QueryParamsResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySigningInfoRequest() {
    return {
        cons_address: ""
    };
}
export const QuerySigningInfoRequest = {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest",
    aminoType: "cosmos-sdk/QuerySigningInfoRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.cons_address !== "") {
            writer.uint32(10).string(message.cons_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cons_address = reader.string();
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
            cons_address: isSet(object.cons_address) ? String(object.cons_address) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.cons_address !== undefined && (obj.cons_address = message.cons_address);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfoRequest();
        message.cons_address = object.cons_address ?? "";
        return message;
    },
    fromAmino(object) {
        return {
            cons_address: object.cons_address
        };
    },
    toAmino(message) {
        const obj = {};
        obj.cons_address = message.cons_address;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySigningInfoRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySigningInfoRequest",
            value: QuerySigningInfoRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySigningInfoRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySigningInfoRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoRequest",
            value: QuerySigningInfoRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySigningInfoResponse() {
    return {
        val_signing_info: ValidatorSigningInfo.fromPartial({})
    };
}
export const QuerySigningInfoResponse = {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse",
    aminoType: "cosmos-sdk/QuerySigningInfoResponse",
    encode(message, writer = _m0.Writer.create()) {
        if (message.val_signing_info !== undefined) {
            ValidatorSigningInfo.encode(message.val_signing_info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.val_signing_info = ValidatorSigningInfo.decode(reader, reader.uint32());
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
            val_signing_info: isSet(object.val_signing_info) ? ValidatorSigningInfo.fromJSON(object.val_signing_info) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.val_signing_info !== undefined && (obj.val_signing_info = message.val_signing_info ? ValidatorSigningInfo.toJSON(message.val_signing_info) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfoResponse();
        message.val_signing_info = object.val_signing_info !== undefined && object.val_signing_info !== null ? ValidatorSigningInfo.fromPartial(object.val_signing_info) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            val_signing_info: object?.val_signing_info ? ValidatorSigningInfo.fromAmino(object.val_signing_info) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        obj.val_signing_info = message.val_signing_info ? ValidatorSigningInfo.toAmino(message.val_signing_info) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySigningInfoResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySigningInfoResponse",
            value: QuerySigningInfoResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySigningInfoResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySigningInfoResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfoResponse",
            value: QuerySigningInfoResponse.encode(message).finish()
        };
    }
};
function createBaseQuerySigningInfosRequest() {
    return {
        pagination: PageRequest.fromPartial({})
    };
}
export const QuerySigningInfosRequest = {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest",
    aminoType: "cosmos-sdk/QuerySigningInfosRequest",
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfosRequest();
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
        const message = createBaseQuerySigningInfosRequest();
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
        return QuerySigningInfosRequest.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySigningInfosRequest",
            value: QuerySigningInfosRequest.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySigningInfosRequest.decode(message.value);
    },
    toProto(message) {
        return QuerySigningInfosRequest.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosRequest",
            value: QuerySigningInfosRequest.encode(message).finish()
        };
    }
};
function createBaseQuerySigningInfosResponse() {
    return {
        info: [],
        pagination: PageResponse.fromPartial({})
    };
}
export const QuerySigningInfosResponse = {
    typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse",
    aminoType: "cosmos-sdk/QuerySigningInfosResponse",
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.info) {
            ValidatorSigningInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfosResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info.push(ValidatorSigningInfo.decode(reader, reader.uint32()));
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
            info: Array.isArray(object?.info) ? object.info.map((e) => ValidatorSigningInfo.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.info) {
            obj.info = message.info.map(e => e ? ValidatorSigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.info = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfosResponse();
        message.info = object.info?.map(e => ValidatorSigningInfo.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    },
    fromAmino(object) {
        return {
            info: Array.isArray(object?.info) ? object.info.map((e) => ValidatorSigningInfo.fromAmino(e)) : [],
            pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
        };
    },
    toAmino(message) {
        const obj = {};
        if (message.info) {
            obj.info = message.info.map(e => e ? ValidatorSigningInfo.toAmino(e) : undefined);
        }
        else {
            obj.info = [];
        }
        obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return QuerySigningInfosResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/QuerySigningInfosResponse",
            value: QuerySigningInfosResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return QuerySigningInfosResponse.decode(message.value);
    },
    toProto(message) {
        return QuerySigningInfosResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.slashing.v1beta1.QuerySigningInfosResponse",
            value: QuerySigningInfosResponse.encode(message).finish()
        };
    }
};
//# sourceMappingURL=query.js.map