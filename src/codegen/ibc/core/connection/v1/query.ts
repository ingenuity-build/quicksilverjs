import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { ConnectionEnd, ConnectionEndAmino, ConnectionEndSDKType, IdentifiedConnection, IdentifiedConnectionAmino, IdentifiedConnectionSDKType } from "./connection";
import { Height, HeightAmino, HeightSDKType, IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType } from "../../client/v1/client";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequest {
  /** connection unique identifier */
  connection_id: string;
}
export interface QueryConnectionRequestProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequestAmino {
  /** connection unique identifier */
  connection_id: string;
}
export interface QueryConnectionRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionRequest";
  value: QueryConnectionRequestAmino;
}
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequestSDKType {
  connection_id: string;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponse {
  /** connection associated with the request identifier */
  connection: ConnectionEnd;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryConnectionResponseProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponseAmino {
  /** connection associated with the request identifier */
  connection?: ConnectionEndAmino;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryConnectionResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionResponse";
  value: QueryConnectionResponseAmino;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponseSDKType {
  connection: ConnectionEndSDKType;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequest {
  pagination: PageRequest;
}
export interface QueryConnectionsRequestProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionsRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequestAmino {
  pagination?: PageRequestAmino;
}
export interface QueryConnectionsRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionsRequest";
  value: QueryConnectionsRequestAmino;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequestSDKType {
  pagination: PageRequestSDKType;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponse {
  /** list of stored connections of the chain. */
  connections: IdentifiedConnection[];
  /** pagination response */
  pagination: PageResponse;
  /** query block height */
  height: Height;
}
export interface QueryConnectionsResponseProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionsResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponseAmino {
  /** list of stored connections of the chain. */
  connections: IdentifiedConnectionAmino[];
  /** pagination response */
  pagination?: PageResponseAmino;
  /** query block height */
  height?: HeightAmino;
}
export interface QueryConnectionsResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionsResponse";
  value: QueryConnectionsResponseAmino;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponseSDKType {
  connections: IdentifiedConnectionSDKType[];
  pagination: PageResponseSDKType;
  height: HeightSDKType;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequest {
  /** client identifier associated with a connection */
  client_id: string;
}
export interface QueryClientConnectionsRequestProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryClientConnectionsRequest";
  value: Uint8Array;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequestAmino {
  /** client identifier associated with a connection */
  client_id: string;
}
export interface QueryClientConnectionsRequestAminoMsg {
  type: "cosmos-sdk/QueryClientConnectionsRequest";
  value: QueryClientConnectionsRequestAmino;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequestSDKType {
  client_id: string;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponse {
  /** slice of all the connection paths associated with a client. */
  connection_paths: string[];
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was generated */
  proof_height: Height;
}
export interface QueryClientConnectionsResponseProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryClientConnectionsResponse";
  value: Uint8Array;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponseAmino {
  /** slice of all the connection paths associated with a client. */
  connection_paths: string[];
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was generated */
  proof_height?: HeightAmino;
}
export interface QueryClientConnectionsResponseAminoMsg {
  type: "cosmos-sdk/QueryClientConnectionsResponse";
  value: QueryClientConnectionsResponseAmino;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponseSDKType {
  connection_paths: string[];
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequest {
  /** connection identifier */
  connection_id: string;
}
export interface QueryConnectionClientStateRequestProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionClientStateRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequestAmino {
  /** connection identifier */
  connection_id: string;
}
export interface QueryConnectionClientStateRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionClientStateRequest";
  value: QueryConnectionClientStateRequestAmino;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequestSDKType {
  connection_id: string;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponse {
  /** client state associated with the channel */
  identified_client_state: IdentifiedClientState;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryConnectionClientStateResponseProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionClientStateResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponseAmino {
  /** client state associated with the channel */
  identified_client_state?: IdentifiedClientStateAmino;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryConnectionClientStateResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionClientStateResponse";
  value: QueryConnectionClientStateResponseAmino;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponseSDKType {
  identified_client_state: IdentifiedClientStateSDKType;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequest {
  /** connection identifier */
  connection_id: string;
  revision_number: Long;
  revision_height: Long;
}
export interface QueryConnectionConsensusStateRequestProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest";
  value: Uint8Array;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequestAmino {
  /** connection identifier */
  connection_id: string;
  revision_number: string;
  revision_height: string;
}
export interface QueryConnectionConsensusStateRequestAminoMsg {
  type: "cosmos-sdk/QueryConnectionConsensusStateRequest";
  value: QueryConnectionConsensusStateRequestAmino;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequestSDKType {
  connection_id: string;
  revision_number: Long;
  revision_height: Long;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponse {
  /** consensus state associated with the channel */
  consensus_state: Any;
  /** client ID associated with the consensus state */
  client_id: string;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height: Height;
}
export interface QueryConnectionConsensusStateResponseProtoMsg {
  type_url: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse";
  value: Uint8Array;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponseAmino {
  /** consensus state associated with the channel */
  consensus_state?: AnyAmino;
  /** client ID associated with the consensus state */
  client_id: string;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proof_height?: HeightAmino;
}
export interface QueryConnectionConsensusStateResponseAminoMsg {
  type: "cosmos-sdk/QueryConnectionConsensusStateResponse";
  value: QueryConnectionConsensusStateResponseAmino;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponseSDKType {
  consensus_state: AnySDKType;
  client_id: string;
  proof: Uint8Array;
  proof_height: HeightSDKType;
}
function createBaseQueryConnectionRequest(): QueryConnectionRequest {
  return {
    connection_id: ""
  };
}
export const QueryConnectionRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
  aminoType: "cosmos-sdk/QueryConnectionRequest",
  encode(message: QueryConnectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConnectionRequest {
    return {
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : ""
    };
  },
  toJSON(message: QueryConnectionRequest): unknown {
    const obj: any = {};
    message.connection_id !== undefined && (obj.connection_id = message.connection_id);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConnectionRequest>): QueryConnectionRequest {
    const message = createBaseQueryConnectionRequest();
    message.connection_id = object.connection_id ?? "";
    return message;
  },
  fromAmino(object: QueryConnectionRequestAmino): QueryConnectionRequest {
    return {
      connection_id: object.connection_id
    };
  },
  toAmino(message: QueryConnectionRequest): QueryConnectionRequestAmino {
    const obj: any = {};
    obj.connection_id = message.connection_id;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionRequestAminoMsg): QueryConnectionRequest {
    return QueryConnectionRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionRequest): QueryConnectionRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionRequest",
      value: QueryConnectionRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionRequestProtoMsg): QueryConnectionRequest {
    return QueryConnectionRequest.decode(message.value);
  },
  toProto(message: QueryConnectionRequest): Uint8Array {
    return QueryConnectionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionRequest): QueryConnectionRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionRequest",
      value: QueryConnectionRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionResponse(): QueryConnectionResponse {
  return {
    connection: ConnectionEnd.fromPartial({}),
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryConnectionResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
  aminoType: "cosmos-sdk/QueryConnectionResponse",
  encode(message: QueryConnectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection !== undefined) {
      ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection = ConnectionEnd.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConnectionResponse {
    return {
      connection: isSet(object.connection) ? ConnectionEnd.fromJSON(object.connection) : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
    };
  },
  toJSON(message: QueryConnectionResponse): unknown {
    const obj: any = {};
    message.connection !== undefined && (obj.connection = message.connection ? ConnectionEnd.toJSON(message.connection) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConnectionResponse>): QueryConnectionResponse {
    const message = createBaseQueryConnectionResponse();
    message.connection = object.connection !== undefined && object.connection !== null ? ConnectionEnd.fromPartial(object.connection) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionResponseAmino): QueryConnectionResponse {
    return {
      connection: object?.connection ? ConnectionEnd.fromAmino(object.connection) : undefined,
      proof: object.proof,
      proof_height: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },
  toAmino(message: QueryConnectionResponse): QueryConnectionResponseAmino {
    const obj: any = {};
    obj.connection = message.connection ? ConnectionEnd.toAmino(message.connection) : undefined;
    obj.proof = message.proof;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionResponseAminoMsg): QueryConnectionResponse {
    return QueryConnectionResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionResponse): QueryConnectionResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionResponse",
      value: QueryConnectionResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionResponseProtoMsg): QueryConnectionResponse {
    return QueryConnectionResponse.decode(message.value);
  },
  toProto(message: QueryConnectionResponse): Uint8Array {
    return QueryConnectionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionResponse): QueryConnectionResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionResponse",
      value: QueryConnectionResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionsRequest(): QueryConnectionsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryConnectionsRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
  aminoType: "cosmos-sdk/QueryConnectionsRequest",
  encode(message: QueryConnectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionsRequest();
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
  fromJSON(object: any): QueryConnectionsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryConnectionsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConnectionsRequest>): QueryConnectionsRequest {
    const message = createBaseQueryConnectionsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionsRequestAmino): QueryConnectionsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryConnectionsRequest): QueryConnectionsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionsRequestAminoMsg): QueryConnectionsRequest {
    return QueryConnectionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionsRequest): QueryConnectionsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionsRequest",
      value: QueryConnectionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionsRequestProtoMsg): QueryConnectionsRequest {
    return QueryConnectionsRequest.decode(message.value);
  },
  toProto(message: QueryConnectionsRequest): Uint8Array {
    return QueryConnectionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionsRequest): QueryConnectionsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionsRequest",
      value: QueryConnectionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionsResponse(): QueryConnectionsResponse {
  return {
    connections: [],
    pagination: PageResponse.fromPartial({}),
    height: Height.fromPartial({})
  };
}
export const QueryConnectionsResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
  aminoType: "cosmos-sdk/QueryConnectionsResponse",
  encode(message: QueryConnectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.connections) {
      IdentifiedConnection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    if (message.height !== undefined) {
      Height.encode(message.height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connections.push(IdentifiedConnection.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConnectionsResponse {
    return {
      connections: Array.isArray(object?.connections) ? object.connections.map((e: any) => IdentifiedConnection.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
      height: isSet(object.height) ? Height.fromJSON(object.height) : undefined
    };
  },
  toJSON(message: QueryConnectionsResponse): unknown {
    const obj: any = {};
    if (message.connections) {
      obj.connections = message.connections.map(e => e ? IdentifiedConnection.toJSON(e) : undefined);
    } else {
      obj.connections = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    message.height !== undefined && (obj.height = message.height ? Height.toJSON(message.height) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConnectionsResponse>): QueryConnectionsResponse {
    const message = createBaseQueryConnectionsResponse();
    message.connections = object.connections?.map(e => IdentifiedConnection.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Height.fromPartial(object.height) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionsResponseAmino): QueryConnectionsResponse {
    return {
      connections: Array.isArray(object?.connections) ? object.connections.map((e: any) => IdentifiedConnection.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined,
      height: object?.height ? Height.fromAmino(object.height) : undefined
    };
  },
  toAmino(message: QueryConnectionsResponse): QueryConnectionsResponseAmino {
    const obj: any = {};
    if (message.connections) {
      obj.connections = message.connections.map(e => e ? IdentifiedConnection.toAmino(e) : undefined);
    } else {
      obj.connections = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    obj.height = message.height ? Height.toAmino(message.height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionsResponseAminoMsg): QueryConnectionsResponse {
    return QueryConnectionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionsResponse): QueryConnectionsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionsResponse",
      value: QueryConnectionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionsResponseProtoMsg): QueryConnectionsResponse {
    return QueryConnectionsResponse.decode(message.value);
  },
  toProto(message: QueryConnectionsResponse): Uint8Array {
    return QueryConnectionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionsResponse): QueryConnectionsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionsResponse",
      value: QueryConnectionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryClientConnectionsRequest(): QueryClientConnectionsRequest {
  return {
    client_id: ""
  };
}
export const QueryClientConnectionsRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
  aminoType: "cosmos-sdk/QueryClientConnectionsRequest",
  encode(message: QueryClientConnectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientConnectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientConnectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientConnectionsRequest {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : ""
    };
  },
  toJSON(message: QueryClientConnectionsRequest): unknown {
    const obj: any = {};
    message.client_id !== undefined && (obj.client_id = message.client_id);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientConnectionsRequest>): QueryClientConnectionsRequest {
    const message = createBaseQueryClientConnectionsRequest();
    message.client_id = object.client_id ?? "";
    return message;
  },
  fromAmino(object: QueryClientConnectionsRequestAmino): QueryClientConnectionsRequest {
    return {
      client_id: object.client_id
    };
  },
  toAmino(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestAmino {
    const obj: any = {};
    obj.client_id = message.client_id;
    return obj;
  },
  fromAminoMsg(object: QueryClientConnectionsRequestAminoMsg): QueryClientConnectionsRequest {
    return QueryClientConnectionsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientConnectionsRequest",
      value: QueryClientConnectionsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientConnectionsRequestProtoMsg): QueryClientConnectionsRequest {
    return QueryClientConnectionsRequest.decode(message.value);
  },
  toProto(message: QueryClientConnectionsRequest): Uint8Array {
    return QueryClientConnectionsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientConnectionsRequest): QueryClientConnectionsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsRequest",
      value: QueryClientConnectionsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryClientConnectionsResponse(): QueryClientConnectionsResponse {
  return {
    connection_paths: [],
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryClientConnectionsResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
  aminoType: "cosmos-sdk/QueryClientConnectionsResponse",
  encode(message: QueryClientConnectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.connection_paths) {
      writer.uint32(10).string(v!);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientConnectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientConnectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_paths.push(reader.string());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientConnectionsResponse {
    return {
      connection_paths: Array.isArray(object?.connection_paths) ? object.connection_paths.map((e: any) => String(e)) : [],
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
    };
  },
  toJSON(message: QueryClientConnectionsResponse): unknown {
    const obj: any = {};
    if (message.connection_paths) {
      obj.connection_paths = message.connection_paths.map(e => e);
    } else {
      obj.connection_paths = [];
    }
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryClientConnectionsResponse>): QueryClientConnectionsResponse {
    const message = createBaseQueryClientConnectionsResponse();
    message.connection_paths = object.connection_paths?.map(e => e) || [];
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryClientConnectionsResponseAmino): QueryClientConnectionsResponse {
    return {
      connection_paths: Array.isArray(object?.connection_paths) ? object.connection_paths.map((e: any) => e) : [],
      proof: object.proof,
      proof_height: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },
  toAmino(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseAmino {
    const obj: any = {};
    if (message.connection_paths) {
      obj.connection_paths = message.connection_paths.map(e => e);
    } else {
      obj.connection_paths = [];
    }
    obj.proof = message.proof;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryClientConnectionsResponseAminoMsg): QueryClientConnectionsResponse {
    return QueryClientConnectionsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientConnectionsResponse",
      value: QueryClientConnectionsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientConnectionsResponseProtoMsg): QueryClientConnectionsResponse {
    return QueryClientConnectionsResponse.decode(message.value);
  },
  toProto(message: QueryClientConnectionsResponse): Uint8Array {
    return QueryClientConnectionsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientConnectionsResponse): QueryClientConnectionsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryClientConnectionsResponse",
      value: QueryClientConnectionsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionClientStateRequest(): QueryConnectionClientStateRequest {
  return {
    connection_id: ""
  };
}
export const QueryConnectionClientStateRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
  aminoType: "cosmos-sdk/QueryConnectionClientStateRequest",
  encode(message: QueryConnectionClientStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConnectionClientStateRequest {
    return {
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : ""
    };
  },
  toJSON(message: QueryConnectionClientStateRequest): unknown {
    const obj: any = {};
    message.connection_id !== undefined && (obj.connection_id = message.connection_id);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConnectionClientStateRequest>): QueryConnectionClientStateRequest {
    const message = createBaseQueryConnectionClientStateRequest();
    message.connection_id = object.connection_id ?? "";
    return message;
  },
  fromAmino(object: QueryConnectionClientStateRequestAmino): QueryConnectionClientStateRequest {
    return {
      connection_id: object.connection_id
    };
  },
  toAmino(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestAmino {
    const obj: any = {};
    obj.connection_id = message.connection_id;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionClientStateRequestAminoMsg): QueryConnectionClientStateRequest {
    return QueryConnectionClientStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionClientStateRequest",
      value: QueryConnectionClientStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionClientStateRequestProtoMsg): QueryConnectionClientStateRequest {
    return QueryConnectionClientStateRequest.decode(message.value);
  },
  toProto(message: QueryConnectionClientStateRequest): Uint8Array {
    return QueryConnectionClientStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionClientStateRequest): QueryConnectionClientStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateRequest",
      value: QueryConnectionClientStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionClientStateResponse(): QueryConnectionClientStateResponse {
  return {
    identified_client_state: IdentifiedClientState.fromPartial({}),
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryConnectionClientStateResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
  aminoType: "cosmos-sdk/QueryConnectionClientStateResponse",
  encode(message: QueryConnectionClientStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identified_client_state !== undefined) {
      IdentifiedClientState.encode(message.identified_client_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionClientStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identified_client_state = IdentifiedClientState.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConnectionClientStateResponse {
    return {
      identified_client_state: isSet(object.identified_client_state) ? IdentifiedClientState.fromJSON(object.identified_client_state) : undefined,
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
    };
  },
  toJSON(message: QueryConnectionClientStateResponse): unknown {
    const obj: any = {};
    message.identified_client_state !== undefined && (obj.identified_client_state = message.identified_client_state ? IdentifiedClientState.toJSON(message.identified_client_state) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConnectionClientStateResponse>): QueryConnectionClientStateResponse {
    const message = createBaseQueryConnectionClientStateResponse();
    message.identified_client_state = object.identified_client_state !== undefined && object.identified_client_state !== null ? IdentifiedClientState.fromPartial(object.identified_client_state) : undefined;
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionClientStateResponseAmino): QueryConnectionClientStateResponse {
    return {
      identified_client_state: object?.identified_client_state ? IdentifiedClientState.fromAmino(object.identified_client_state) : undefined,
      proof: object.proof,
      proof_height: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },
  toAmino(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseAmino {
    const obj: any = {};
    obj.identified_client_state = message.identified_client_state ? IdentifiedClientState.toAmino(message.identified_client_state) : undefined;
    obj.proof = message.proof;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionClientStateResponseAminoMsg): QueryConnectionClientStateResponse {
    return QueryConnectionClientStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionClientStateResponse",
      value: QueryConnectionClientStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionClientStateResponseProtoMsg): QueryConnectionClientStateResponse {
    return QueryConnectionClientStateResponse.decode(message.value);
  },
  toProto(message: QueryConnectionClientStateResponse): Uint8Array {
    return QueryConnectionClientStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionClientStateResponse): QueryConnectionClientStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionClientStateResponse",
      value: QueryConnectionClientStateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionConsensusStateRequest(): QueryConnectionConsensusStateRequest {
  return {
    connection_id: "",
    revision_number: Long.UZERO,
    revision_height: Long.UZERO
  };
}
export const QueryConnectionConsensusStateRequest = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
  aminoType: "cosmos-sdk/QueryConnectionConsensusStateRequest",
  encode(message: QueryConnectionConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.connection_id !== "") {
      writer.uint32(10).string(message.connection_id);
    }
    if (!message.revision_number.isZero()) {
      writer.uint32(16).uint64(message.revision_number);
    }
    if (!message.revision_height.isZero()) {
      writer.uint32(24).uint64(message.revision_height);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.connection_id = reader.string();
          break;
        case 2:
          message.revision_number = (reader.uint64() as Long);
          break;
        case 3:
          message.revision_height = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConnectionConsensusStateRequest {
    return {
      connection_id: isSet(object.connection_id) ? String(object.connection_id) : "",
      revision_number: isSet(object.revision_number) ? Long.fromValue(object.revision_number) : Long.UZERO,
      revision_height: isSet(object.revision_height) ? Long.fromValue(object.revision_height) : Long.UZERO
    };
  },
  toJSON(message: QueryConnectionConsensusStateRequest): unknown {
    const obj: any = {};
    message.connection_id !== undefined && (obj.connection_id = message.connection_id);
    message.revision_number !== undefined && (obj.revision_number = (message.revision_number || Long.UZERO).toString());
    message.revision_height !== undefined && (obj.revision_height = (message.revision_height || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConnectionConsensusStateRequest>): QueryConnectionConsensusStateRequest {
    const message = createBaseQueryConnectionConsensusStateRequest();
    message.connection_id = object.connection_id ?? "";
    message.revision_number = object.revision_number !== undefined && object.revision_number !== null ? Long.fromValue(object.revision_number) : Long.UZERO;
    message.revision_height = object.revision_height !== undefined && object.revision_height !== null ? Long.fromValue(object.revision_height) : Long.UZERO;
    return message;
  },
  fromAmino(object: QueryConnectionConsensusStateRequestAmino): QueryConnectionConsensusStateRequest {
    return {
      connection_id: object.connection_id,
      revision_number: Long.fromString(object.revision_number),
      revision_height: Long.fromString(object.revision_height)
    };
  },
  toAmino(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestAmino {
    const obj: any = {};
    obj.connection_id = message.connection_id;
    obj.revision_number = message.revision_number ? message.revision_number.toString() : undefined;
    obj.revision_height = message.revision_height ? message.revision_height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConnectionConsensusStateRequestAminoMsg): QueryConnectionConsensusStateRequest {
    return QueryConnectionConsensusStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionConsensusStateRequest",
      value: QueryConnectionConsensusStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionConsensusStateRequestProtoMsg): QueryConnectionConsensusStateRequest {
    return QueryConnectionConsensusStateRequest.decode(message.value);
  },
  toProto(message: QueryConnectionConsensusStateRequest): Uint8Array {
    return QueryConnectionConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionConsensusStateRequest): QueryConnectionConsensusStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateRequest",
      value: QueryConnectionConsensusStateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryConnectionConsensusStateResponse(): QueryConnectionConsensusStateResponse {
  return {
    consensus_state: Any.fromPartial({}),
    client_id: "",
    proof: new Uint8Array(),
    proof_height: Height.fromPartial({})
  };
}
export const QueryConnectionConsensusStateResponse = {
  typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
  aminoType: "cosmos-sdk/QueryConnectionConsensusStateResponse",
  encode(message: QueryConnectionConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.client_id !== "") {
      writer.uint32(18).string(message.client_id);
    }
    if (message.proof.length !== 0) {
      writer.uint32(26).bytes(message.proof);
    }
    if (message.proof_height !== undefined) {
      Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConnectionConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConnectionConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensus_state = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.client_id = reader.string();
          break;
        case 3:
          message.proof = reader.bytes();
          break;
        case 4:
          message.proof_height = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConnectionConsensusStateResponse {
    return {
      consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined,
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      proof: isSet(object.proof) ? bytesFromBase64(object.proof) : new Uint8Array(),
      proof_height: isSet(object.proof_height) ? Height.fromJSON(object.proof_height) : undefined
    };
  },
  toJSON(message: QueryConnectionConsensusStateResponse): unknown {
    const obj: any = {};
    message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
    message.client_id !== undefined && (obj.client_id = message.client_id);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proof_height !== undefined && (obj.proof_height = message.proof_height ? Height.toJSON(message.proof_height) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryConnectionConsensusStateResponse>): QueryConnectionConsensusStateResponse {
    const message = createBaseQueryConnectionConsensusStateResponse();
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    message.client_id = object.client_id ?? "";
    message.proof = object.proof ?? new Uint8Array();
    message.proof_height = object.proof_height !== undefined && object.proof_height !== null ? Height.fromPartial(object.proof_height) : undefined;
    return message;
  },
  fromAmino(object: QueryConnectionConsensusStateResponseAmino): QueryConnectionConsensusStateResponse {
    return {
      consensus_state: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined,
      client_id: object.client_id,
      proof: object.proof,
      proof_height: object?.proof_height ? Height.fromAmino(object.proof_height) : undefined
    };
  },
  toAmino(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseAmino {
    const obj: any = {};
    obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
    obj.client_id = message.client_id;
    obj.proof = message.proof;
    obj.proof_height = message.proof_height ? Height.toAmino(message.proof_height) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConnectionConsensusStateResponseAminoMsg): QueryConnectionConsensusStateResponse {
    return QueryConnectionConsensusStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConnectionConsensusStateResponse",
      value: QueryConnectionConsensusStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConnectionConsensusStateResponseProtoMsg): QueryConnectionConsensusStateResponse {
    return QueryConnectionConsensusStateResponse.decode(message.value);
  },
  toProto(message: QueryConnectionConsensusStateResponse): Uint8Array {
    return QueryConnectionConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConnectionConsensusStateResponse): QueryConnectionConsensusStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.connection.v1.QueryConnectionConsensusStateResponse",
      value: QueryConnectionConsensusStateResponse.encode(message).finish()
    };
  }
};