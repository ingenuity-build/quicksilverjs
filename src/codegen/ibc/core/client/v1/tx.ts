import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClient {
  /** light client state */
  client_state: Any;
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   */
  consensus_state: Any;
  /** signer address */
  signer: string;
}
export interface MsgCreateClientProtoMsg {
  type_url: "/ibc.core.client.v1.MsgCreateClient";
  value: Uint8Array;
}
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClientAmino {
  /** light client state */
  client_state?: AnyAmino;
  /**
   * consensus state associated with the client that corresponds to a given
   * height.
   */
  consensus_state?: AnyAmino;
  /** signer address */
  signer: string;
}
export interface MsgCreateClientAminoMsg {
  type: "cosmos-sdk/MsgCreateClient";
  value: MsgCreateClientAmino;
}
/** MsgCreateClient defines a message to create an IBC client */
export interface MsgCreateClientSDKType {
  client_state: AnySDKType;
  consensus_state: AnySDKType;
  signer: string;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponse {}
export interface MsgCreateClientResponseProtoMsg {
  type_url: "/ibc.core.client.v1.MsgCreateClientResponse";
  value: Uint8Array;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponseAmino {}
export interface MsgCreateClientResponseAminoMsg {
  type: "cosmos-sdk/MsgCreateClientResponse";
  value: MsgCreateClientResponseAmino;
}
/** MsgCreateClientResponse defines the Msg/CreateClient response type. */
export interface MsgCreateClientResponseSDKType {}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClient {
  /** client unique identifier */
  client_id: string;
  /** header to update the light client */
  header: Any;
  /** signer address */
  signer: string;
}
export interface MsgUpdateClientProtoMsg {
  type_url: "/ibc.core.client.v1.MsgUpdateClient";
  value: Uint8Array;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClientAmino {
  /** client unique identifier */
  client_id: string;
  /** header to update the light client */
  header?: AnyAmino;
  /** signer address */
  signer: string;
}
export interface MsgUpdateClientAminoMsg {
  type: "cosmos-sdk/MsgUpdateClient";
  value: MsgUpdateClientAmino;
}
/**
 * MsgUpdateClient defines an sdk.Msg to update a IBC client state using
 * the given header.
 */
export interface MsgUpdateClientSDKType {
  client_id: string;
  header: AnySDKType;
  signer: string;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponse {}
export interface MsgUpdateClientResponseProtoMsg {
  type_url: "/ibc.core.client.v1.MsgUpdateClientResponse";
  value: Uint8Array;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponseAmino {}
export interface MsgUpdateClientResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateClientResponse";
  value: MsgUpdateClientResponseAmino;
}
/** MsgUpdateClientResponse defines the Msg/UpdateClient response type. */
export interface MsgUpdateClientResponseSDKType {}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClient {
  /** client unique identifier */
  client_id: string;
  /** upgraded client state */
  client_state: Any;
  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   */
  consensus_state: Any;
  /** proof that old chain committed to new client */
  proof_upgrade_client: Uint8Array;
  /** proof that old chain committed to new consensus state */
  proof_upgrade_consensus_state: Uint8Array;
  /** signer address */
  signer: string;
}
export interface MsgUpgradeClientProtoMsg {
  type_url: "/ibc.core.client.v1.MsgUpgradeClient";
  value: Uint8Array;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClientAmino {
  /** client unique identifier */
  client_id: string;
  /** upgraded client state */
  client_state?: AnyAmino;
  /**
   * upgraded consensus state, only contains enough information to serve as a
   * basis of trust in update logic
   */
  consensus_state?: AnyAmino;
  /** proof that old chain committed to new client */
  proof_upgrade_client: Uint8Array;
  /** proof that old chain committed to new consensus state */
  proof_upgrade_consensus_state: Uint8Array;
  /** signer address */
  signer: string;
}
export interface MsgUpgradeClientAminoMsg {
  type: "cosmos-sdk/MsgUpgradeClient";
  value: MsgUpgradeClientAmino;
}
/**
 * MsgUpgradeClient defines an sdk.Msg to upgrade an IBC client to a new client
 * state
 */
export interface MsgUpgradeClientSDKType {
  client_id: string;
  client_state: AnySDKType;
  consensus_state: AnySDKType;
  proof_upgrade_client: Uint8Array;
  proof_upgrade_consensus_state: Uint8Array;
  signer: string;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponse {}
export interface MsgUpgradeClientResponseProtoMsg {
  type_url: "/ibc.core.client.v1.MsgUpgradeClientResponse";
  value: Uint8Array;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponseAmino {}
export interface MsgUpgradeClientResponseAminoMsg {
  type: "cosmos-sdk/MsgUpgradeClientResponse";
  value: MsgUpgradeClientResponseAmino;
}
/** MsgUpgradeClientResponse defines the Msg/UpgradeClient response type. */
export interface MsgUpgradeClientResponseSDKType {}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviour {
  /** client unique identifier */
  client_id: string;
  /** misbehaviour used for freezing the light client */
  misbehaviour: Any;
  /** signer address */
  signer: string;
}
export interface MsgSubmitMisbehaviourProtoMsg {
  type_url: "/ibc.core.client.v1.MsgSubmitMisbehaviour";
  value: Uint8Array;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviourAmino {
  /** client unique identifier */
  client_id: string;
  /** misbehaviour used for freezing the light client */
  misbehaviour?: AnyAmino;
  /** signer address */
  signer: string;
}
export interface MsgSubmitMisbehaviourAminoMsg {
  type: "cosmos-sdk/MsgSubmitMisbehaviour";
  value: MsgSubmitMisbehaviourAmino;
}
/**
 * MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for
 * light client misbehaviour.
 */
export interface MsgSubmitMisbehaviourSDKType {
  client_id: string;
  misbehaviour: AnySDKType;
  signer: string;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponse {}
export interface MsgSubmitMisbehaviourResponseProtoMsg {
  type_url: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponseAmino {}
export interface MsgSubmitMisbehaviourResponseAminoMsg {
  type: "cosmos-sdk/MsgSubmitMisbehaviourResponse";
  value: MsgSubmitMisbehaviourResponseAmino;
}
/**
 * MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
 * type.
 */
export interface MsgSubmitMisbehaviourResponseSDKType {}
function createBaseMsgCreateClient(): MsgCreateClient {
  return {
    client_state: Any.fromPartial({}),
    consensus_state: Any.fromPartial({}),
    signer: ""
  };
}
export const MsgCreateClient = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClient",
  aminoType: "cosmos-sdk/MsgCreateClient",
  encode(message: MsgCreateClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_state !== undefined) {
      Any.encode(message.client_state, writer.uint32(10).fork()).ldelim();
    }
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_state = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.consensus_state = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateClient {
    return {
      client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined,
      consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgCreateClient): unknown {
    const obj: any = {};
    message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toJSON(message.client_state) : undefined);
    message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgCreateClient>): MsgCreateClient {
    const message = createBaseMsgCreateClient();
    message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgCreateClientAmino): MsgCreateClient {
    return {
      client_state: object?.client_state ? Any.fromAmino(object.client_state) : undefined,
      consensus_state: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgCreateClient): MsgCreateClientAmino {
    const obj: any = {};
    obj.client_state = message.client_state ? Any.toAmino(message.client_state) : undefined;
    obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgCreateClientAminoMsg): MsgCreateClient {
    return MsgCreateClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateClient): MsgCreateClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateClient",
      value: MsgCreateClient.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateClientProtoMsg): MsgCreateClient {
    return MsgCreateClient.decode(message.value);
  },
  toProto(message: MsgCreateClient): Uint8Array {
    return MsgCreateClient.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClient): MsgCreateClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClient",
      value: MsgCreateClient.encode(message).finish()
    };
  }
};
function createBaseMsgCreateClientResponse(): MsgCreateClientResponse {
  return {};
}
export const MsgCreateClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
  aminoType: "cosmos-sdk/MsgCreateClientResponse",
  encode(_: MsgCreateClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateClientResponse();
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
  fromJSON(_: any): MsgCreateClientResponse {
    return {};
  },
  toJSON(_: MsgCreateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgCreateClientResponse>): MsgCreateClientResponse {
    const message = createBaseMsgCreateClientResponse();
    return message;
  },
  fromAmino(_: MsgCreateClientResponseAmino): MsgCreateClientResponse {
    return {};
  },
  toAmino(_: MsgCreateClientResponse): MsgCreateClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateClientResponseAminoMsg): MsgCreateClientResponse {
    return MsgCreateClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCreateClientResponse",
      value: MsgCreateClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateClientResponseProtoMsg): MsgCreateClientResponse {
    return MsgCreateClientResponse.decode(message.value);
  },
  toProto(message: MsgCreateClientResponse): Uint8Array {
    return MsgCreateClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateClientResponse): MsgCreateClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgCreateClientResponse",
      value: MsgCreateClientResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClient(): MsgUpdateClient {
  return {
    client_id: "",
    header: Any.fromPartial({}),
    signer: ""
  };
}
export const MsgUpdateClient = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
  aminoType: "cosmos-sdk/MsgUpdateClient",
  encode(message: MsgUpdateClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.header !== undefined) {
      Any.encode(message.header, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.header = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateClient {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      header: isSet(object.header) ? Any.fromJSON(object.header) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgUpdateClient): unknown {
    const obj: any = {};
    message.client_id !== undefined && (obj.client_id = message.client_id);
    message.header !== undefined && (obj.header = message.header ? Any.toJSON(message.header) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpdateClient>): MsgUpdateClient {
    const message = createBaseMsgUpdateClient();
    message.client_id = object.client_id ?? "";
    message.header = object.header !== undefined && object.header !== null ? Any.fromPartial(object.header) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateClientAmino): MsgUpdateClient {
    return {
      client_id: object.client_id,
      header: object?.header ? Any.fromAmino(object.header) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgUpdateClient): MsgUpdateClientAmino {
    const obj: any = {};
    obj.client_id = message.client_id;
    obj.header = message.header ? Any.toAmino(message.header) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClientAminoMsg): MsgUpdateClient {
    return MsgUpdateClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClient): MsgUpdateClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateClient",
      value: MsgUpdateClient.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateClientProtoMsg): MsgUpdateClient {
    return MsgUpdateClient.decode(message.value);
  },
  toProto(message: MsgUpdateClient): Uint8Array {
    return MsgUpdateClient.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClient): MsgUpdateClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
      value: MsgUpdateClient.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateClientResponse(): MsgUpdateClientResponse {
  return {};
}
export const MsgUpdateClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
  aminoType: "cosmos-sdk/MsgUpdateClientResponse",
  encode(_: MsgUpdateClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientResponse();
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
  fromJSON(_: any): MsgUpdateClientResponse {
    return {};
  },
  toJSON(_: MsgUpdateClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpdateClientResponse>): MsgUpdateClientResponse {
    const message = createBaseMsgUpdateClientResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClientResponseAmino): MsgUpdateClientResponse {
    return {};
  },
  toAmino(_: MsgUpdateClientResponse): MsgUpdateClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClientResponseAminoMsg): MsgUpdateClientResponse {
    return MsgUpdateClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateClientResponse",
      value: MsgUpdateClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateClientResponseProtoMsg): MsgUpdateClientResponse {
    return MsgUpdateClientResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClientResponse): Uint8Array {
    return MsgUpdateClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClientResponse): MsgUpdateClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpdateClientResponse",
      value: MsgUpdateClientResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpgradeClient(): MsgUpgradeClient {
  return {
    client_id: "",
    client_state: Any.fromPartial({}),
    consensus_state: Any.fromPartial({}),
    proof_upgrade_client: new Uint8Array(),
    proof_upgrade_consensus_state: new Uint8Array(),
    signer: ""
  };
}
export const MsgUpgradeClient = {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
  aminoType: "cosmos-sdk/MsgUpgradeClient",
  encode(message: MsgUpgradeClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.client_state !== undefined) {
      Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
    }
    if (message.consensus_state !== undefined) {
      Any.encode(message.consensus_state, writer.uint32(26).fork()).ldelim();
    }
    if (message.proof_upgrade_client.length !== 0) {
      writer.uint32(34).bytes(message.proof_upgrade_client);
    }
    if (message.proof_upgrade_consensus_state.length !== 0) {
      writer.uint32(42).bytes(message.proof_upgrade_consensus_state);
    }
    if (message.signer !== "") {
      writer.uint32(50).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.client_state = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.consensus_state = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.proof_upgrade_client = reader.bytes();
          break;
        case 5:
          message.proof_upgrade_consensus_state = reader.bytes();
          break;
        case 6:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpgradeClient {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      client_state: isSet(object.client_state) ? Any.fromJSON(object.client_state) : undefined,
      consensus_state: isSet(object.consensus_state) ? Any.fromJSON(object.consensus_state) : undefined,
      proof_upgrade_client: isSet(object.proof_upgrade_client) ? bytesFromBase64(object.proof_upgrade_client) : new Uint8Array(),
      proof_upgrade_consensus_state: isSet(object.proof_upgrade_consensus_state) ? bytesFromBase64(object.proof_upgrade_consensus_state) : new Uint8Array(),
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgUpgradeClient): unknown {
    const obj: any = {};
    message.client_id !== undefined && (obj.client_id = message.client_id);
    message.client_state !== undefined && (obj.client_state = message.client_state ? Any.toJSON(message.client_state) : undefined);
    message.consensus_state !== undefined && (obj.consensus_state = message.consensus_state ? Any.toJSON(message.consensus_state) : undefined);
    message.proof_upgrade_client !== undefined && (obj.proof_upgrade_client = base64FromBytes(message.proof_upgrade_client !== undefined ? message.proof_upgrade_client : new Uint8Array()));
    message.proof_upgrade_consensus_state !== undefined && (obj.proof_upgrade_consensus_state = base64FromBytes(message.proof_upgrade_consensus_state !== undefined ? message.proof_upgrade_consensus_state : new Uint8Array()));
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUpgradeClient>): MsgUpgradeClient {
    const message = createBaseMsgUpgradeClient();
    message.client_id = object.client_id ?? "";
    message.client_state = object.client_state !== undefined && object.client_state !== null ? Any.fromPartial(object.client_state) : undefined;
    message.consensus_state = object.consensus_state !== undefined && object.consensus_state !== null ? Any.fromPartial(object.consensus_state) : undefined;
    message.proof_upgrade_client = object.proof_upgrade_client ?? new Uint8Array();
    message.proof_upgrade_consensus_state = object.proof_upgrade_consensus_state ?? new Uint8Array();
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgUpgradeClientAmino): MsgUpgradeClient {
    return {
      client_id: object.client_id,
      client_state: object?.client_state ? Any.fromAmino(object.client_state) : undefined,
      consensus_state: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined,
      proof_upgrade_client: object.proof_upgrade_client,
      proof_upgrade_consensus_state: object.proof_upgrade_consensus_state,
      signer: object.signer
    };
  },
  toAmino(message: MsgUpgradeClient): MsgUpgradeClientAmino {
    const obj: any = {};
    obj.client_id = message.client_id;
    obj.client_state = message.client_state ? Any.toAmino(message.client_state) : undefined;
    obj.consensus_state = message.consensus_state ? Any.toAmino(message.consensus_state) : undefined;
    obj.proof_upgrade_client = message.proof_upgrade_client;
    obj.proof_upgrade_consensus_state = message.proof_upgrade_consensus_state;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUpgradeClientAminoMsg): MsgUpgradeClient {
    return MsgUpgradeClient.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpgradeClient): MsgUpgradeClientAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpgradeClient",
      value: MsgUpgradeClient.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpgradeClientProtoMsg): MsgUpgradeClient {
    return MsgUpgradeClient.decode(message.value);
  },
  toProto(message: MsgUpgradeClient): Uint8Array {
    return MsgUpgradeClient.encode(message).finish();
  },
  toProtoMsg(message: MsgUpgradeClient): MsgUpgradeClientProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
      value: MsgUpgradeClient.encode(message).finish()
    };
  }
};
function createBaseMsgUpgradeClientResponse(): MsgUpgradeClientResponse {
  return {};
}
export const MsgUpgradeClientResponse = {
  typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
  aminoType: "cosmos-sdk/MsgUpgradeClientResponse",
  encode(_: MsgUpgradeClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpgradeClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpgradeClientResponse();
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
  fromJSON(_: any): MsgUpgradeClientResponse {
    return {};
  },
  toJSON(_: MsgUpgradeClientResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUpgradeClientResponse>): MsgUpgradeClientResponse {
    const message = createBaseMsgUpgradeClientResponse();
    return message;
  },
  fromAmino(_: MsgUpgradeClientResponseAmino): MsgUpgradeClientResponse {
    return {};
  },
  toAmino(_: MsgUpgradeClientResponse): MsgUpgradeClientResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpgradeClientResponseAminoMsg): MsgUpgradeClientResponse {
    return MsgUpgradeClientResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpgradeClientResponse",
      value: MsgUpgradeClientResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpgradeClientResponseProtoMsg): MsgUpgradeClientResponse {
    return MsgUpgradeClientResponse.decode(message.value);
  },
  toProto(message: MsgUpgradeClientResponse): Uint8Array {
    return MsgUpgradeClientResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpgradeClientResponse): MsgUpgradeClientResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgUpgradeClientResponse",
      value: MsgUpgradeClientResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitMisbehaviour(): MsgSubmitMisbehaviour {
  return {
    client_id: "",
    misbehaviour: Any.fromPartial({}),
    signer: ""
  };
}
export const MsgSubmitMisbehaviour = {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
  aminoType: "cosmos-sdk/MsgSubmitMisbehaviour",
  encode(message: MsgSubmitMisbehaviour, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.client_id !== "") {
      writer.uint32(10).string(message.client_id);
    }
    if (message.misbehaviour !== undefined) {
      Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMisbehaviour {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.client_id = reader.string();
          break;
        case 2:
          message.misbehaviour = Any.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitMisbehaviour {
    return {
      client_id: isSet(object.client_id) ? String(object.client_id) : "",
      misbehaviour: isSet(object.misbehaviour) ? Any.fromJSON(object.misbehaviour) : undefined,
      signer: isSet(object.signer) ? String(object.signer) : ""
    };
  },
  toJSON(message: MsgSubmitMisbehaviour): unknown {
    const obj: any = {};
    message.client_id !== undefined && (obj.client_id = message.client_id);
    message.misbehaviour !== undefined && (obj.misbehaviour = message.misbehaviour ? Any.toJSON(message.misbehaviour) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSubmitMisbehaviour>): MsgSubmitMisbehaviour {
    const message = createBaseMsgSubmitMisbehaviour();
    message.client_id = object.client_id ?? "";
    message.misbehaviour = object.misbehaviour !== undefined && object.misbehaviour !== null ? Any.fromPartial(object.misbehaviour) : undefined;
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitMisbehaviourAmino): MsgSubmitMisbehaviour {
    return {
      client_id: object.client_id,
      misbehaviour: object?.misbehaviour ? Any.fromAmino(object.misbehaviour) : undefined,
      signer: object.signer
    };
  },
  toAmino(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAmino {
    const obj: any = {};
    obj.client_id = message.client_id;
    obj.misbehaviour = message.misbehaviour ? Any.toAmino(message.misbehaviour) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitMisbehaviourAminoMsg): MsgSubmitMisbehaviour {
    return MsgSubmitMisbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitMisbehaviourProtoMsg): MsgSubmitMisbehaviour {
    return MsgSubmitMisbehaviour.decode(message.value);
  },
  toProto(message: MsgSubmitMisbehaviour): Uint8Array {
    return MsgSubmitMisbehaviour.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitMisbehaviour): MsgSubmitMisbehaviourProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
      value: MsgSubmitMisbehaviour.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitMisbehaviourResponse(): MsgSubmitMisbehaviourResponse {
  return {};
}
export const MsgSubmitMisbehaviourResponse = {
  typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
  aminoType: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
  encode(_: MsgSubmitMisbehaviourResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitMisbehaviourResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitMisbehaviourResponse();
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
  fromJSON(_: any): MsgSubmitMisbehaviourResponse {
    return {};
  },
  toJSON(_: MsgSubmitMisbehaviourResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSubmitMisbehaviourResponse>): MsgSubmitMisbehaviourResponse {
    const message = createBaseMsgSubmitMisbehaviourResponse();
    return message;
  },
  fromAmino(_: MsgSubmitMisbehaviourResponseAmino): MsgSubmitMisbehaviourResponse {
    return {};
  },
  toAmino(_: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitMisbehaviourResponseAminoMsg): MsgSubmitMisbehaviourResponse {
    return MsgSubmitMisbehaviourResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSubmitMisbehaviourResponse",
      value: MsgSubmitMisbehaviourResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSubmitMisbehaviourResponseProtoMsg): MsgSubmitMisbehaviourResponse {
    return MsgSubmitMisbehaviourResponse.decode(message.value);
  },
  toProto(message: MsgSubmitMisbehaviourResponse): Uint8Array {
    return MsgSubmitMisbehaviourResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitMisbehaviourResponse): MsgSubmitMisbehaviourResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviourResponse",
      value: MsgSubmitMisbehaviourResponse.encode(message).finish()
    };
  }
};