import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Query, QueryAmino, QuerySDKType } from "./interchainquery";
import { Tx, TxAmino, TxSDKType } from "../../../cosmos/tx/v1beta1/tx";
import { TxResponse, TxResponseAmino, TxResponseSDKType } from "../../../cosmos/base/abci/v1beta1/abci";
import { TxProof, TxProofAmino, TxProofSDKType } from "../../../tendermint/types/types";
import { Header, HeaderAmino, HeaderSDKType } from "../../../ibc/lightclients/tendermint/v1/tendermint";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryRequestsRequest {
  pagination: PageRequest;
  chain_id: string;
}
export interface QueryRequestsRequestProtoMsg {
  type_url: "/quicksilver.interchainquery.v1.QueryRequestsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryRequestsRequestAmino {
  pagination?: PageRequestAmino;
  chain_id: string;
}
export interface QueryRequestsRequestAminoMsg {
  type: "/quicksilver.interchainquery.v1.QueryRequestsRequest";
  value: QueryRequestsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryRequestsRequestSDKType {
  pagination: PageRequestSDKType;
  chain_id: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryRequestsResponse {
  /** params defines the parameters of the module. */
  queries: Query[];
  pagination: PageResponse;
}
export interface QueryRequestsResponseProtoMsg {
  type_url: "/quicksilver.interchainquery.v1.QueryRequestsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryRequestsResponseAmino {
  /** params defines the parameters of the module. */
  queries: QueryAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryRequestsResponseAminoMsg {
  type: "/quicksilver.interchainquery.v1.QueryRequestsResponse";
  value: QueryRequestsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryRequestsResponseSDKType {
  queries: QuerySDKType[];
  pagination: PageResponseSDKType;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxWithProofResponse {
  /** tx is the queried transaction; deprecated. */
  tx: Tx;
  /**
   * deprecated, v1.2.13
   * proof is the tmproto.TxProof for the queried tx
   */
  tx_response: TxResponse;
  proof: TxProof;
  /** ibc-go header to validate txs */
  header: Header;
  /** tx_bytes is the byte representation of the queried tx */
  tx_bytes: Uint8Array;
}
export interface GetTxWithProofResponseProtoMsg {
  type_url: "/quicksilver.interchainquery.v1.GetTxWithProofResponse";
  value: Uint8Array;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxWithProofResponseAmino {
  /** tx is the queried transaction; deprecated. */
  tx?: TxAmino;
  /**
   * deprecated, v1.2.13
   * proof is the tmproto.TxProof for the queried tx
   */
  tx_response?: TxResponseAmino;
  proof?: TxProofAmino;
  /** ibc-go header to validate txs */
  header?: HeaderAmino;
  /** tx_bytes is the byte representation of the queried tx */
  tx_bytes: Uint8Array;
}
export interface GetTxWithProofResponseAminoMsg {
  type: "/quicksilver.interchainquery.v1.GetTxWithProofResponse";
  value: GetTxWithProofResponseAmino;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxWithProofResponseSDKType {
  tx: TxSDKType;
  tx_response: TxResponseSDKType;
  proof: TxProofSDKType;
  header: HeaderSDKType;
  tx_bytes: Uint8Array;
}
function createBaseQueryRequestsRequest(): QueryRequestsRequest {
  return {
    pagination: PageRequest.fromPartial({}),
    chain_id: ""
  };
}
export const QueryRequestsRequest = {
  typeUrl: "/quicksilver.interchainquery.v1.QueryRequestsRequest",
  encode(message: QueryRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.chain_id !== "") {
      writer.uint32(18).string(message.chain_id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestsRequest {
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
          message.chain_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryRequestsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      chain_id: isSet(object.chain_id) ? String(object.chain_id) : ""
    };
  },
  toJSON(message: QueryRequestsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    message.chain_id !== undefined && (obj.chain_id = message.chain_id);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryRequestsRequest>): QueryRequestsRequest {
    const message = createBaseQueryRequestsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.chain_id = object.chain_id ?? "";
    return message;
  },
  fromAmino(object: QueryRequestsRequestAmino): QueryRequestsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined,
      chain_id: object.chain_id
    };
  },
  toAmino(message: QueryRequestsRequest): QueryRequestsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.chain_id = message.chain_id;
    return obj;
  },
  fromAminoMsg(object: QueryRequestsRequestAminoMsg): QueryRequestsRequest {
    return QueryRequestsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestsRequestProtoMsg): QueryRequestsRequest {
    return QueryRequestsRequest.decode(message.value);
  },
  toProto(message: QueryRequestsRequest): Uint8Array {
    return QueryRequestsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestsRequest): QueryRequestsRequestProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainquery.v1.QueryRequestsRequest",
      value: QueryRequestsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRequestsResponse(): QueryRequestsResponse {
  return {
    queries: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryRequestsResponse = {
  typeUrl: "/quicksilver.interchainquery.v1.QueryRequestsResponse",
  encode(message: QueryRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.queries) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequestsResponse {
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
  fromJSON(object: any): QueryRequestsResponse {
    return {
      queries: Array.isArray(object?.queries) ? object.queries.map((e: any) => Query.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryRequestsResponse): unknown {
    const obj: any = {};
    if (message.queries) {
      obj.queries = message.queries.map(e => e ? Query.toJSON(e) : undefined);
    } else {
      obj.queries = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryRequestsResponse>): QueryRequestsResponse {
    const message = createBaseQueryRequestsResponse();
    message.queries = object.queries?.map(e => Query.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestsResponseAmino): QueryRequestsResponse {
    return {
      queries: Array.isArray(object?.queries) ? object.queries.map((e: any) => Query.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryRequestsResponse): QueryRequestsResponseAmino {
    const obj: any = {};
    if (message.queries) {
      obj.queries = message.queries.map(e => e ? Query.toAmino(e) : undefined);
    } else {
      obj.queries = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestsResponseAminoMsg): QueryRequestsResponse {
    return QueryRequestsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestsResponseProtoMsg): QueryRequestsResponse {
    return QueryRequestsResponse.decode(message.value);
  },
  toProto(message: QueryRequestsResponse): Uint8Array {
    return QueryRequestsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestsResponse): QueryRequestsResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainquery.v1.QueryRequestsResponse",
      value: QueryRequestsResponse.encode(message).finish()
    };
  }
};
function createBaseGetTxWithProofResponse(): GetTxWithProofResponse {
  return {
    tx: Tx.fromPartial({}),
    tx_response: TxResponse.fromPartial({}),
    proof: TxProof.fromPartial({}),
    header: Header.fromPartial({}),
    tx_bytes: new Uint8Array()
  };
}
export const GetTxWithProofResponse = {
  typeUrl: "/quicksilver.interchainquery.v1.GetTxWithProofResponse",
  encode(message: GetTxWithProofResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.tx_response !== undefined) {
      TxResponse.encode(message.tx_response, writer.uint32(18).fork()).ldelim();
    }
    if (message.proof !== undefined) {
      TxProof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(34).fork()).ldelim();
    }
    if (message.tx_bytes.length !== 0) {
      writer.uint32(42).bytes(message.tx_bytes);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GetTxWithProofResponse {
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
          message.tx_response = TxResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.proof = TxProof.decode(reader, reader.uint32());
          break;
        case 4:
          message.header = Header.decode(reader, reader.uint32());
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
  fromJSON(object: any): GetTxWithProofResponse {
    return {
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      tx_response: isSet(object.tx_response) ? TxResponse.fromJSON(object.tx_response) : undefined,
      proof: isSet(object.proof) ? TxProof.fromJSON(object.proof) : undefined,
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      tx_bytes: isSet(object.tx_bytes) ? bytesFromBase64(object.tx_bytes) : new Uint8Array()
    };
  },
  toJSON(message: GetTxWithProofResponse): unknown {
    const obj: any = {};
    message.tx !== undefined && (obj.tx = message.tx ? Tx.toJSON(message.tx) : undefined);
    message.tx_response !== undefined && (obj.tx_response = message.tx_response ? TxResponse.toJSON(message.tx_response) : undefined);
    message.proof !== undefined && (obj.proof = message.proof ? TxProof.toJSON(message.proof) : undefined);
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    message.tx_bytes !== undefined && (obj.tx_bytes = base64FromBytes(message.tx_bytes !== undefined ? message.tx_bytes : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<GetTxWithProofResponse>): GetTxWithProofResponse {
    const message = createBaseGetTxWithProofResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.tx_response = object.tx_response !== undefined && object.tx_response !== null ? TxResponse.fromPartial(object.tx_response) : undefined;
    message.proof = object.proof !== undefined && object.proof !== null ? TxProof.fromPartial(object.proof) : undefined;
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    message.tx_bytes = object.tx_bytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: GetTxWithProofResponseAmino): GetTxWithProofResponse {
    return {
      tx: object?.tx ? Tx.fromAmino(object.tx) : undefined,
      tx_response: object?.tx_response ? TxResponse.fromAmino(object.tx_response) : undefined,
      proof: object?.proof ? TxProof.fromAmino(object.proof) : undefined,
      header: object?.header ? Header.fromAmino(object.header) : undefined,
      tx_bytes: object.tx_bytes
    };
  },
  toAmino(message: GetTxWithProofResponse): GetTxWithProofResponseAmino {
    const obj: any = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
    obj.tx_response = message.tx_response ? TxResponse.toAmino(message.tx_response) : undefined;
    obj.proof = message.proof ? TxProof.toAmino(message.proof) : undefined;
    obj.header = message.header ? Header.toAmino(message.header) : undefined;
    obj.tx_bytes = message.tx_bytes;
    return obj;
  },
  fromAminoMsg(object: GetTxWithProofResponseAminoMsg): GetTxWithProofResponse {
    return GetTxWithProofResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GetTxWithProofResponseProtoMsg): GetTxWithProofResponse {
    return GetTxWithProofResponse.decode(message.value);
  },
  toProto(message: GetTxWithProofResponse): Uint8Array {
    return GetTxWithProofResponse.encode(message).finish();
  },
  toProtoMsg(message: GetTxWithProofResponse): GetTxWithProofResponseProtoMsg {
    return {
      typeUrl: "/quicksilver.interchainquery.v1.GetTxWithProofResponse",
      value: GetTxWithProofResponse.encode(message).finish()
    };
  }
};