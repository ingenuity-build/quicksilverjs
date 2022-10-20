import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { ValidatorIntent, ValidatorIntentSDKType } from "./interchainstaking";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../../helpers";
/**
 * MsgRequestRedemption represents a message type to request a burn of qAssets
 * for native assets.
 */

export interface MsgRequestRedemption {
  value?: Coin;
  destinationAddress: string;
  fromAddress: string;
}
/**
 * MsgRequestRedemption represents a message type to request a burn of qAssets
 * for native assets.
 */

export interface MsgRequestRedemptionSDKType {
  value?: CoinSDKType;
  destination_address: string;
  from_address: string;
}
/**
 * MsgSignalIntent represents a message type for signalling voting intent for
 * one or more validators.
 */

export interface MsgSignalIntent {
  chainId: string;
  intents: ValidatorIntent[];
  fromAddress: string;
}
/**
 * MsgSignalIntent represents a message type for signalling voting intent for
 * one or more validators.
 */

export interface MsgSignalIntentSDKType {
  chain_id: string;
  intents: ValidatorIntentSDKType[];
  from_address: string;
}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */

export interface MsgRequestRedemptionResponse {}
/** MsgRequestRedemptionResponse defines the MsgRequestRedemption response type. */

export interface MsgRequestRedemptionResponseSDKType {}
/** MsgSignalIntentResponse defines the MsgSignalIntent response type. */

export interface MsgSignalIntentResponse {}
/** MsgSignalIntentResponse defines the MsgSignalIntent response type. */

export interface MsgSignalIntentResponseSDKType {}

function createBaseMsgRequestRedemption(): MsgRequestRedemption {
  return {
    value: undefined,
    destinationAddress: "",
    fromAddress: ""
  };
}

export const MsgRequestRedemption = {
  encode(message: MsgRequestRedemption, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Coin.encode(message.value, writer.uint32(10).fork()).ldelim();
    }

    if (message.destinationAddress !== "") {
      writer.uint32(18).string(message.destinationAddress);
    }

    if (message.fromAddress !== "") {
      writer.uint32(26).string(message.fromAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestRedemption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestRedemption();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = Coin.decode(reader, reader.uint32());
          break;

        case 2:
          message.destinationAddress = reader.string();
          break;

        case 3:
          message.fromAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgRequestRedemption>): MsgRequestRedemption {
    const message = createBaseMsgRequestRedemption();
    message.value = object.value !== undefined && object.value !== null ? Coin.fromPartial(object.value) : undefined;
    message.destinationAddress = object.destinationAddress ?? "";
    message.fromAddress = object.fromAddress ?? "";
    return message;
  }

};

function createBaseMsgSignalIntent(): MsgSignalIntent {
  return {
    chainId: "",
    intents: [],
    fromAddress: ""
  };
}

export const MsgSignalIntent = {
  encode(message: MsgSignalIntent, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }

    for (const v of message.intents) {
      ValidatorIntent.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.fromAddress !== "") {
      writer.uint32(26).string(message.fromAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignalIntent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignalIntent();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;

        case 2:
          message.intents.push(ValidatorIntent.decode(reader, reader.uint32()));
          break;

        case 3:
          message.fromAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromPartial(object: DeepPartial<MsgSignalIntent>): MsgSignalIntent {
    const message = createBaseMsgSignalIntent();
    message.chainId = object.chainId ?? "";
    message.intents = object.intents?.map(e => ValidatorIntent.fromPartial(e)) || [];
    message.fromAddress = object.fromAddress ?? "";
    return message;
  }

};

function createBaseMsgRequestRedemptionResponse(): MsgRequestRedemptionResponse {
  return {};
}

export const MsgRequestRedemptionResponse = {
  encode(_: MsgRequestRedemptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestRedemptionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestRedemptionResponse();

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

  fromPartial(_: DeepPartial<MsgRequestRedemptionResponse>): MsgRequestRedemptionResponse {
    const message = createBaseMsgRequestRedemptionResponse();
    return message;
  }

};

function createBaseMsgSignalIntentResponse(): MsgSignalIntentResponse {
  return {};
}

export const MsgSignalIntentResponse = {
  encode(_: MsgSignalIntentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignalIntentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignalIntentResponse();

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

  fromPartial(_: DeepPartial<MsgSignalIntentResponse>): MsgSignalIntentResponse {
    const message = createBaseMsgSignalIntentResponse();
    return message;
  }

};