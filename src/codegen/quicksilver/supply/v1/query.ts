import { Long, DeepPartial, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QuerySupplyRequest {}
export interface QuerySupplyRequestProtoMsg {
  typeUrl: "/quicksilver.supply.v1.QuerySupplyRequest";
  value: Uint8Array;
}
export interface QuerySupplyRequestAmino {}
export interface QuerySupplyRequestAminoMsg {
  type: "/quicksilver.supply.v1.QuerySupplyRequest";
  value: QuerySupplyRequestAmino;
}
export interface QuerySupplyRequestSDKType {}
export interface QuerySupplyResponse {
  supply: Long;
  circulatingSupply: Long;
}
export interface QuerySupplyResponseProtoMsg {
  typeUrl: "/quicksilver.supply.v1.QuerySupplyResponse";
  value: Uint8Array;
}
export interface QuerySupplyResponseAmino {
  supply: string;
  circulating_supply: string;
}
export interface QuerySupplyResponseAminoMsg {
  type: "/quicksilver.supply.v1.QuerySupplyResponse";
  value: QuerySupplyResponseAmino;
}
export interface QuerySupplyResponseSDKType {
  supply: Long;
  circulating_supply: Long;
}
function createBaseQuerySupplyRequest(): QuerySupplyRequest {
  return {};
}
export const QuerySupplyRequest = {
  typeUrl: "/quicksilver.supply.v1.QuerySupplyRequest",
  encode(_: QuerySupplyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyRequest();
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
  fromJSON(_: any): QuerySupplyRequest {
    return {};
  },
  toJSON(_: QuerySupplyRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QuerySupplyRequest>): QuerySupplyRequest {
    const message = createBaseQuerySupplyRequest();
    return message;
  },
  fromAmino(_: QuerySupplyRequestAmino): QuerySupplyRequest {
    return {};
  },
  toAmino(_: QuerySupplyRequest): QuerySupplyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySupplyRequestAminoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyRequestProtoMsg): QuerySupplyRequest {
    return QuerySupplyRequest.decode(message.value);
  },
  toProto(message: QuerySupplyRequest): Uint8Array {
    return QuerySupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyRequest): QuerySupplyRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.supply.v1.QuerySupplyRequest",
      value: QuerySupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySupplyResponse(): QuerySupplyResponse {
  return {
    supply: Long.UZERO,
    circulatingSupply: Long.UZERO
  };
}
export const QuerySupplyResponse = {
  typeUrl: "/quicksilver.supply.v1.QuerySupplyResponse",
  encode(message: QuerySupplyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.supply.isZero()) {
      writer.uint32(8).uint64(message.supply);
    }
    if (!message.circulatingSupply.isZero()) {
      writer.uint32(16).uint64(message.circulatingSupply);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply = (reader.uint64() as Long);
          break;
        case 2:
          message.circulatingSupply = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySupplyResponse {
    return {
      supply: isSet(object.supply) ? Long.fromValue(object.supply) : Long.UZERO,
      circulatingSupply: isSet(object.circulatingSupply) ? Long.fromValue(object.circulatingSupply) : Long.UZERO
    };
  },
  toJSON(message: QuerySupplyResponse): unknown {
    const obj: any = {};
    message.supply !== undefined && (obj.supply = (message.supply || Long.UZERO).toString());
    message.circulatingSupply !== undefined && (obj.circulatingSupply = (message.circulatingSupply || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QuerySupplyResponse>): QuerySupplyResponse {
    const message = createBaseQuerySupplyResponse();
    message.supply = object.supply !== undefined && object.supply !== null ? Long.fromValue(object.supply) : Long.UZERO;
    message.circulatingSupply = object.circulatingSupply !== undefined && object.circulatingSupply !== null ? Long.fromValue(object.circulatingSupply) : Long.UZERO;
    return message;
  },
  fromAmino(object: QuerySupplyResponseAmino): QuerySupplyResponse {
    return {
      supply: Long.fromString(object.supply),
      circulatingSupply: Long.fromString(object.circulating_supply)
    };
  },
  toAmino(message: QuerySupplyResponse): QuerySupplyResponseAmino {
    const obj: any = {};
    obj.supply = message.supply ? message.supply.toString() : undefined;
    obj.circulating_supply = message.circulatingSupply ? message.circulatingSupply.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySupplyResponseAminoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySupplyResponseProtoMsg): QuerySupplyResponse {
    return QuerySupplyResponse.decode(message.value);
  },
  toProto(message: QuerySupplyResponse): Uint8Array {
    return QuerySupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySupplyResponse): QuerySupplyResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.supply.v1.QuerySupplyResponse",
      value: QuerySupplyResponse.encode(message).finish()
    };
  }
};