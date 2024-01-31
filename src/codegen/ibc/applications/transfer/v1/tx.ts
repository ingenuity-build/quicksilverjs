import { Coin, CoinAmino, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightAmino, HeightSDKType } from "../../../core/client/v1/client";
import { Long, isSet, DeepPartial } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransfer {
  /** the port on which the packet will be sent */
  source_port: string;
  /** the channel by which the packet will be sent */
  source_channel: string;
  /** the tokens to be transferred */
  token: Coin;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeout_height: Height;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */
  timeout_timestamp: Long;
}
export interface MsgTransferProtoMsg {
  type_url: "/ibc.applications.transfer.v1.MsgTransfer";
  value: Uint8Array;
}
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransferAmino {
  /** the port on which the packet will be sent */
  source_port: string;
  /** the channel by which the packet will be sent */
  source_channel: string;
  /** the tokens to be transferred */
  token?: CoinAmino;
  /** the sender address */
  sender: string;
  /** the recipient address on the destination chain */
  receiver: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */
  timeout_height?: HeightAmino;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */
  timeout_timestamp: string;
}
export interface MsgTransferAminoMsg {
  type: "cosmos-sdk/MsgTransfer";
  value: MsgTransferAmino;
}
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgTransferSDKType {
  source_port: string;
  source_channel: string;
  token: CoinSDKType;
  sender: string;
  receiver: string;
  timeout_height: HeightSDKType;
  timeout_timestamp: Long;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponse {}
export interface MsgTransferResponseProtoMsg {
  type_url: "/ibc.applications.transfer.v1.MsgTransferResponse";
  value: Uint8Array;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponseAmino {}
export interface MsgTransferResponseAminoMsg {
  type: "cosmos-sdk/MsgTransferResponse";
  value: MsgTransferResponseAmino;
}
/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgTransferResponseSDKType {}
function createBaseMsgTransfer(): MsgTransfer {
  return {
    source_port: "",
    source_channel: "",
    token: Coin.fromPartial({}),
    sender: "",
    receiver: "",
    timeout_height: Height.fromPartial({}),
    timeout_timestamp: Long.UZERO
  };
}
export const MsgTransfer = {
  typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
  aminoType: "cosmos-sdk/MsgTransfer",
  encode(message: MsgTransfer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.source_port !== "") {
      writer.uint32(10).string(message.source_port);
    }
    if (message.source_channel !== "") {
      writer.uint32(18).string(message.source_channel);
    }
    if (message.token !== undefined) {
      Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(42).string(message.receiver);
    }
    if (message.timeout_height !== undefined) {
      Height.encode(message.timeout_height, writer.uint32(50).fork()).ldelim();
    }
    if (!message.timeout_timestamp.isZero()) {
      writer.uint32(56).uint64(message.timeout_timestamp);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransfer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransfer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.source_port = reader.string();
          break;
        case 2:
          message.source_channel = reader.string();
          break;
        case 3:
          message.token = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.sender = reader.string();
          break;
        case 5:
          message.receiver = reader.string();
          break;
        case 6:
          message.timeout_height = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.timeout_timestamp = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTransfer {
    return {
      source_port: isSet(object.source_port) ? String(object.source_port) : "",
      source_channel: isSet(object.source_channel) ? String(object.source_channel) : "",
      token: isSet(object.token) ? Coin.fromJSON(object.token) : undefined,
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      timeout_height: isSet(object.timeout_height) ? Height.fromJSON(object.timeout_height) : undefined,
      timeout_timestamp: isSet(object.timeout_timestamp) ? Long.fromValue(object.timeout_timestamp) : Long.UZERO
    };
  },
  toJSON(message: MsgTransfer): unknown {
    const obj: any = {};
    message.source_port !== undefined && (obj.source_port = message.source_port);
    message.source_channel !== undefined && (obj.source_channel = message.source_channel);
    message.token !== undefined && (obj.token = message.token ? Coin.toJSON(message.token) : undefined);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.timeout_height !== undefined && (obj.timeout_height = message.timeout_height ? Height.toJSON(message.timeout_height) : undefined);
    message.timeout_timestamp !== undefined && (obj.timeout_timestamp = (message.timeout_timestamp || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTransfer>): MsgTransfer {
    const message = createBaseMsgTransfer();
    message.source_port = object.source_port ?? "";
    message.source_channel = object.source_channel ?? "";
    message.token = object.token !== undefined && object.token !== null ? Coin.fromPartial(object.token) : undefined;
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.timeout_height = object.timeout_height !== undefined && object.timeout_height !== null ? Height.fromPartial(object.timeout_height) : undefined;
    message.timeout_timestamp = object.timeout_timestamp !== undefined && object.timeout_timestamp !== null ? Long.fromValue(object.timeout_timestamp) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgTransferAmino): MsgTransfer {
    return {
      source_port: object.source_port,
      source_channel: object.source_channel,
      token: object?.token ? Coin.fromAmino(object.token) : undefined,
      sender: object.sender,
      receiver: object.receiver,
      timeout_height: object?.timeout_height ? Height.fromAmino(object.timeout_height) : undefined,
      timeout_timestamp: Long.fromString(object.timeout_timestamp)
    };
  },
  toAmino(message: MsgTransfer): MsgTransferAmino {
    const obj: any = {};
    obj.source_port = message.source_port;
    obj.source_channel = message.source_channel;
    obj.token = message.token ? Coin.toAmino(message.token) : undefined;
    obj.sender = message.sender;
    obj.receiver = message.receiver;
    obj.timeout_height = message.timeout_height ? Height.toAmino(message.timeout_height) : {};
    obj.timeout_timestamp = message.timeout_timestamp ? message.timeout_timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTransferAminoMsg): MsgTransfer {
    return MsgTransfer.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransfer): MsgTransferAminoMsg {
    return {
      type: "cosmos-sdk/MsgTransfer",
      value: MsgTransfer.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferProtoMsg): MsgTransfer {
    return MsgTransfer.decode(message.value);
  },
  toProto(message: MsgTransfer): Uint8Array {
    return MsgTransfer.encode(message).finish();
  },
  toProtoMsg(message: MsgTransfer): MsgTransferProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
      value: MsgTransfer.encode(message).finish()
    };
  }
};
function createBaseMsgTransferResponse(): MsgTransferResponse {
  return {};
}
export const MsgTransferResponse = {
  typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
  aminoType: "cosmos-sdk/MsgTransferResponse",
  encode(_: MsgTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferResponse();
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
  fromJSON(_: any): MsgTransferResponse {
    return {};
  },
  toJSON(_: MsgTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgTransferResponse>): MsgTransferResponse {
    const message = createBaseMsgTransferResponse();
    return message;
  },
  fromAmino(_: MsgTransferResponseAmino): MsgTransferResponse {
    return {};
  },
  toAmino(_: MsgTransferResponse): MsgTransferResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgTransferResponseAminoMsg): MsgTransferResponse {
    return MsgTransferResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTransferResponse): MsgTransferResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTransferResponse",
      value: MsgTransferResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTransferResponseProtoMsg): MsgTransferResponse {
    return MsgTransferResponse.decode(message.value);
  },
  toProto(message: MsgTransferResponse): Uint8Array {
    return MsgTransferResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTransferResponse): MsgTransferResponseProtoMsg {
    return {
      typeUrl: "/ibc.applications.transfer.v1.MsgTransferResponse",
      value: MsgTransferResponse.encode(message).finish()
    };
  }
};