import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoAmino, EpochInfoSDKType } from "./genesis";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryEpochsInfoRequest {
  pagination: PageRequest;
}
export interface QueryEpochsInfoRequestProtoMsg {
  type_url: "/quicksilver.epochs.v1.QueryEpochsInfoRequest";
  value: Uint8Array;
}
export interface QueryEpochsInfoRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryEpochsInfoRequestAminoMsg {
  type: "/quicksilver.epochs.v1.QueryEpochsInfoRequest";
  value: QueryEpochsInfoRequestAmino;
}
export interface QueryEpochsInfoRequestSDKType {
  pagination: PageRequestSDKType;
}
export interface QueryEpochsInfoResponse {
  epochs: EpochInfo[];
  pagination: PageResponse;
}
export interface QueryEpochsInfoResponseProtoMsg {
  type_url: "/quicksilver.epochs.v1.QueryEpochsInfoResponse";
  value: Uint8Array;
}
export interface QueryEpochsInfoResponseAmino {
  epochs: EpochInfoAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryEpochsInfoResponseAminoMsg {
  type: "/quicksilver.epochs.v1.QueryEpochsInfoResponse";
  value: QueryEpochsInfoResponseAmino;
}
export interface QueryEpochsInfoResponseSDKType {
  epochs: EpochInfoSDKType[];
  pagination: PageResponseSDKType;
}
export interface QueryCurrentEpochRequest {
  identifier: string;
}
export interface QueryCurrentEpochRequestProtoMsg {
  type_url: "/quicksilver.epochs.v1.QueryCurrentEpochRequest";
  value: Uint8Array;
}
export interface QueryCurrentEpochRequestAmino {
  identifier: string;
}
export interface QueryCurrentEpochRequestAminoMsg {
  type: "/quicksilver.epochs.v1.QueryCurrentEpochRequest";
  value: QueryCurrentEpochRequestAmino;
}
export interface QueryCurrentEpochRequestSDKType {
  identifier: string;
}
export interface QueryCurrentEpochResponse {
  current_epoch: Long;
}
export interface QueryCurrentEpochResponseProtoMsg {
  type_url: "/quicksilver.epochs.v1.QueryCurrentEpochResponse";
  value: Uint8Array;
}
export interface QueryCurrentEpochResponseAmino {
  current_epoch: string;
}
export interface QueryCurrentEpochResponseAminoMsg {
  type: "/quicksilver.epochs.v1.QueryCurrentEpochResponse";
  value: QueryCurrentEpochResponseAmino;
}
export interface QueryCurrentEpochResponseSDKType {
  current_epoch: Long;
}
function createBaseQueryEpochsInfoRequest(): QueryEpochsInfoRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryEpochsInfoRequest = {
  typeUrl: "/quicksilver.epochs.v1.QueryEpochsInfoRequest",
  encode(message: QueryEpochsInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoRequest {
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
  fromJSON(object: any): QueryEpochsInfoRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryEpochsInfoRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryEpochsInfoRequest>): QueryEpochsInfoRequest {
    const message = createBaseQueryEpochsInfoRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEpochsInfoRequestAmino): QueryEpochsInfoRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEpochsInfoRequestAminoMsg): QueryEpochsInfoRequest {
    return QueryEpochsInfoRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochsInfoRequestProtoMsg): QueryEpochsInfoRequest {
    return QueryEpochsInfoRequest.decode(message.value);
  },
  toProto(message: QueryEpochsInfoRequest): Uint8Array {
    return QueryEpochsInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochsInfoRequest): QueryEpochsInfoRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.epochs.v1.QueryEpochsInfoRequest",
      value: QueryEpochsInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEpochsInfoResponse(): QueryEpochsInfoResponse {
  return {
    epochs: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryEpochsInfoResponse = {
  typeUrl: "/quicksilver.epochs.v1.QueryEpochsInfoResponse",
  encode(message: QueryEpochsInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEpochsInfoResponse {
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
  fromJSON(object: any): QueryEpochsInfoResponse {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryEpochsInfoResponse): unknown {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toJSON(e) : undefined);
    } else {
      obj.epochs = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryEpochsInfoResponse>): QueryEpochsInfoResponse {
    const message = createBaseQueryEpochsInfoResponse();
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryEpochsInfoResponseAmino): QueryEpochsInfoResponse {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseAmino {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toAmino(e) : undefined);
    } else {
      obj.epochs = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEpochsInfoResponseAminoMsg): QueryEpochsInfoResponse {
    return QueryEpochsInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEpochsInfoResponseProtoMsg): QueryEpochsInfoResponse {
    return QueryEpochsInfoResponse.decode(message.value);
  },
  toProto(message: QueryEpochsInfoResponse): Uint8Array {
    return QueryEpochsInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochsInfoResponse): QueryEpochsInfoResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.epochs.v1.QueryEpochsInfoResponse",
      value: QueryEpochsInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentEpochRequest(): QueryCurrentEpochRequest {
  return {
    identifier: ""
  };
}
export const QueryCurrentEpochRequest = {
  typeUrl: "/quicksilver.epochs.v1.QueryCurrentEpochRequest",
  encode(message: QueryCurrentEpochRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochRequest {
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
  fromJSON(object: any): QueryCurrentEpochRequest {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : ""
    };
  },
  toJSON(message: QueryCurrentEpochRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    message.identifier = object.identifier ?? "";
    return message;
  },
  fromAmino(object: QueryCurrentEpochRequestAmino): QueryCurrentEpochRequest {
    return {
      identifier: object.identifier
    };
  },
  toAmino(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestAmino {
    const obj: any = {};
    obj.identifier = message.identifier;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentEpochRequestAminoMsg): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentEpochRequestProtoMsg): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.decode(message.value);
  },
  toProto(message: QueryCurrentEpochRequest): Uint8Array {
    return QueryCurrentEpochRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.epochs.v1.QueryCurrentEpochRequest",
      value: QueryCurrentEpochRequest.encode(message).finish()
    };
  }
};
function createBaseQueryCurrentEpochResponse(): QueryCurrentEpochResponse {
  return {
    current_epoch: Long.ZERO
  };
}
export const QueryCurrentEpochResponse = {
  typeUrl: "/quicksilver.epochs.v1.QueryCurrentEpochResponse",
  encode(message: QueryCurrentEpochResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.current_epoch.isZero()) {
      writer.uint32(8).int64(message.current_epoch);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentEpochResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.current_epoch = (reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentEpochResponse {
    return {
      current_epoch: isSet(object.current_epoch) ? Long.fromValue(object.current_epoch) : Long.ZERO
    };
  },
  toJSON(message: QueryCurrentEpochResponse): unknown {
    const obj: any = {};
    message.current_epoch !== undefined && (obj.current_epoch = (message.current_epoch || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    message.current_epoch = object.current_epoch !== undefined && object.current_epoch !== null ? Long.fromValue(object.current_epoch) : Long.ZERO;
    return message;
  },
  fromAmino(object: QueryCurrentEpochResponseAmino): QueryCurrentEpochResponse {
    return {
      current_epoch: Long.fromString(object.current_epoch)
    };
  },
  toAmino(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseAmino {
    const obj: any = {};
    obj.current_epoch = message.current_epoch ? message.current_epoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentEpochResponseAminoMsg): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCurrentEpochResponseProtoMsg): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.decode(message.value);
  },
  toProto(message: QueryCurrentEpochResponse): Uint8Array {
    return QueryCurrentEpochResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.epochs.v1.QueryCurrentEpochResponse",
      value: QueryCurrentEpochResponse.encode(message).finish()
    };
  }
};