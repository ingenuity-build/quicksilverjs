import { IdentifiedClientState, IdentifiedClientStateAmino, IdentifiedClientStateSDKType, ClientConsensusStates, ClientConsensusStatesAmino, ClientConsensusStatesSDKType, Params, ParamsAmino, ParamsSDKType } from "./client";
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisState {
  /** client states with their corresponding identifiers */
  clients: IdentifiedClientState[];
  /** consensus states from each client */
  clients_consensus: ClientConsensusStates[];
  /** metadata from each client */
  clients_metadata: IdentifiedGenesisMetadata[];
  params: Params;
  /** create localhost on initialization */
  create_localhost: boolean;
  /** the sequence for the next generated client identifier */
  next_client_sequence: Long;
}
export interface GenesisStateProtoMsg {
  type_url: "/ibc.core.client.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisStateAmino {
  /** client states with their corresponding identifiers */
  clients: IdentifiedClientStateAmino[];
  /** consensus states from each client */
  clients_consensus: ClientConsensusStatesAmino[];
  /** metadata from each client */
  clients_metadata: IdentifiedGenesisMetadataAmino[];
  params?: ParamsAmino;
  /** create localhost on initialization */
  create_localhost: boolean;
  /** the sequence for the next generated client identifier */
  next_client_sequence: string;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisStateSDKType {
  clients: IdentifiedClientStateSDKType[];
  clients_consensus: ClientConsensusStatesSDKType[];
  clients_metadata: IdentifiedGenesisMetadataSDKType[];
  params: ParamsSDKType;
  create_localhost: boolean;
  next_client_sequence: Long;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadata {
  /** store key of metadata without clientID-prefix */
  key: Uint8Array;
  /** metadata value */
  value: Uint8Array;
}
export interface GenesisMetadataProtoMsg {
  type_url: "/ibc.core.client.v1.GenesisMetadata";
  value: Uint8Array;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadataAmino {
  /** store key of metadata without clientID-prefix */
  key: Uint8Array;
  /** metadata value */
  value: Uint8Array;
}
export interface GenesisMetadataAminoMsg {
  type: "cosmos-sdk/GenesisMetadata";
  value: GenesisMetadataAmino;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadataSDKType {
  key: Uint8Array;
  value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadata {
  client_id: string;
  client_metadata: GenesisMetadata[];
}
export interface IdentifiedGenesisMetadataProtoMsg {
  type_url: "/ibc.core.client.v1.IdentifiedGenesisMetadata";
  value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadataAmino {
  client_id: string;
  client_metadata: GenesisMetadataAmino[];
}
export interface IdentifiedGenesisMetadataAminoMsg {
  type: "cosmos-sdk/IdentifiedGenesisMetadata";
  value: IdentifiedGenesisMetadataAmino;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadataSDKType {
  client_id: string;
  client_metadata: GenesisMetadataSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    clients: [],
    clients_consensus: [],
    clients_metadata: [],
    params: Params.fromPartial({}),
    create_localhost: false,
    next_client_sequence: Long.UZERO
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.client.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.clients) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.clients_consensus) {
      ClientConsensusStates.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.clients_metadata) {
      IdentifiedGenesisMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    if (message.create_localhost === true) {
      writer.uint32(40).bool(message.create_localhost);
    }
    if (!message.next_client_sequence.isZero()) {
      writer.uint32(48).uint64(message.next_client_sequence);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clients.push(IdentifiedClientState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.clients_consensus.push(ClientConsensusStates.decode(reader, reader.uint32()));
          break;
        case 3:
          message.clients_metadata.push(IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 5:
          message.create_localhost = reader.bool();
          break;
        case 6:
          message.next_client_sequence = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      clients: Array.isArray(object?.clients) ? object.clients.map((e: any) => IdentifiedClientState.fromJSON(e)) : [],
      clients_consensus: Array.isArray(object?.clients_consensus) ? object.clients_consensus.map((e: any) => ClientConsensusStates.fromJSON(e)) : [],
      clients_metadata: Array.isArray(object?.clients_metadata) ? object.clients_metadata.map((e: any) => IdentifiedGenesisMetadata.fromJSON(e)) : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      create_localhost: isSet(object.create_localhost) ? Boolean(object.create_localhost) : false,
      next_client_sequence: isSet(object.next_client_sequence) ? Long.fromValue(object.next_client_sequence) : Long.UZERO
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.clients) {
      obj.clients = message.clients.map(e => e ? IdentifiedClientState.toJSON(e) : undefined);
    } else {
      obj.clients = [];
    }
    if (message.clients_consensus) {
      obj.clients_consensus = message.clients_consensus.map(e => e ? ClientConsensusStates.toJSON(e) : undefined);
    } else {
      obj.clients_consensus = [];
    }
    if (message.clients_metadata) {
      obj.clients_metadata = message.clients_metadata.map(e => e ? IdentifiedGenesisMetadata.toJSON(e) : undefined);
    } else {
      obj.clients_metadata = [];
    }
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.create_localhost !== undefined && (obj.create_localhost = message.create_localhost);
    message.next_client_sequence !== undefined && (obj.next_client_sequence = (message.next_client_sequence || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.clients = object.clients?.map(e => IdentifiedClientState.fromPartial(e)) || [];
    message.clients_consensus = object.clients_consensus?.map(e => ClientConsensusStates.fromPartial(e)) || [];
    message.clients_metadata = object.clients_metadata?.map(e => IdentifiedGenesisMetadata.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.create_localhost = object.create_localhost ?? false;
    message.next_client_sequence = object.next_client_sequence !== undefined && object.next_client_sequence !== null ? Long.fromValue(object.next_client_sequence) : Long.UZERO;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      clients: Array.isArray(object?.clients) ? object.clients.map((e: any) => IdentifiedClientState.fromAmino(e)) : [],
      clients_consensus: Array.isArray(object?.clients_consensus) ? object.clients_consensus.map((e: any) => ClientConsensusStates.fromAmino(e)) : [],
      clients_metadata: Array.isArray(object?.clients_metadata) ? object.clients_metadata.map((e: any) => IdentifiedGenesisMetadata.fromAmino(e)) : [],
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      create_localhost: object.create_localhost,
      next_client_sequence: Long.fromString(object.next_client_sequence)
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.clients) {
      obj.clients = message.clients.map(e => e ? IdentifiedClientState.toAmino(e) : undefined);
    } else {
      obj.clients = [];
    }
    if (message.clients_consensus) {
      obj.clients_consensus = message.clients_consensus.map(e => e ? ClientConsensusStates.toAmino(e) : undefined);
    } else {
      obj.clients_consensus = [];
    }
    if (message.clients_metadata) {
      obj.clients_metadata = message.clients_metadata.map(e => e ? IdentifiedGenesisMetadata.toAmino(e) : undefined);
    } else {
      obj.clients_metadata = [];
    }
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.create_localhost = message.create_localhost;
    obj.next_client_sequence = message.next_client_sequence ? message.next_client_sequence.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseGenesisMetadata(): GenesisMetadata {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
export const GenesisMetadata = {
  typeUrl: "/ibc.core.client.v1.GenesisMetadata",
  aminoType: "cosmos-sdk/GenesisMetadata",
  encode(message: GenesisMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisMetadata {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON(message: GenesisMetadata): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisMetadata>): GenesisMetadata {
    const message = createBaseGenesisMetadata();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: GenesisMetadataAmino): GenesisMetadata {
    return {
      key: object.key,
      value: object.value
    };
  },
  toAmino(message: GenesisMetadata): GenesisMetadataAmino {
    const obj: any = {};
    obj.key = message.key;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: GenesisMetadataAminoMsg): GenesisMetadata {
    return GenesisMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisMetadata): GenesisMetadataAminoMsg {
    return {
      type: "cosmos-sdk/GenesisMetadata",
      value: GenesisMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisMetadataProtoMsg): GenesisMetadata {
    return GenesisMetadata.decode(message.value);
  },
  toProto(message: GenesisMetadata): Uint8Array {
    return GenesisMetadata.encode(message).finish();
  },
  toProtoMsg(message: GenesisMetadata): GenesisMetadataProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.GenesisMetadata",
      value: GenesisMetadata.encode(message).finish()
    };
  }
};
function createBaseIdentifiedGenesisMetadata(): IdentifiedGenesisMetadata {
  return {
    client_id: "",
    client_metadata: []
  };
}
export const IdentifiedGenesisMetadata = {
  typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
  aminoType: "cosmos-sdk/IdentifiedGenesisMetadata",
  encode(message: IdentifiedGenesisMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    for (const v of message.client_metadata) {
      GenesisMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IdentifiedGenesisMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.client_metadata.push(GenesisMetadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IdentifiedGenesisMetadata {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      client_metadata: Array.isArray(object?.client_metadata) ? object.client_metadata.map((e: any) => GenesisMetadata.fromJSON(e)) : []
    };
  },
  toJSON(message: IdentifiedGenesisMetadata): unknown {
    const obj: any = {};
    message.client_id !== undefined && (obj.client_id = message.client_id);
    if (message.client_metadata) {
      obj.client_metadata = message.client_metadata.map(e => e ? GenesisMetadata.toJSON(e) : undefined);
    } else {
      obj.client_metadata = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<IdentifiedGenesisMetadata>): IdentifiedGenesisMetadata {
    const message = createBaseIdentifiedGenesisMetadata();
    message.client_id = object.client_id ?? "";
    message.client_metadata = object.client_metadata?.map(e => GenesisMetadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: IdentifiedGenesisMetadataAmino): IdentifiedGenesisMetadata {
    return {
      client_id: object.client_id,
      client_metadata: Array.isArray(object?.client_metadata) ? object.client_metadata.map((e: any) => GenesisMetadata.fromAmino(e)) : []
    };
  },
  toAmino(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataAmino {
    const obj: any = {};
    obj.client_id = message.client_id;
    if (message.client_metadata) {
      obj.client_metadata = message.client_metadata.map(e => e ? GenesisMetadata.toAmino(e) : undefined);
    } else {
      obj.client_metadata = [];
    }
    return obj;
  },
  fromAminoMsg(object: IdentifiedGenesisMetadataAminoMsg): IdentifiedGenesisMetadata {
    return IdentifiedGenesisMetadata.fromAmino(object.value);
  },
  toAminoMsg(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataAminoMsg {
    return {
      type: "cosmos-sdk/IdentifiedGenesisMetadata",
      value: IdentifiedGenesisMetadata.toAmino(message)
    };
  },
  fromProtoMsg(message: IdentifiedGenesisMetadataProtoMsg): IdentifiedGenesisMetadata {
    return IdentifiedGenesisMetadata.decode(message.value);
  },
  toProto(message: IdentifiedGenesisMetadata): Uint8Array {
    return IdentifiedGenesisMetadata.encode(message).finish();
  },
  toProtoMsg(message: IdentifiedGenesisMetadata): IdentifiedGenesisMetadataProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.IdentifiedGenesisMetadata",
      value: IdentifiedGenesisMetadata.encode(message).finish()
    };
  }
};