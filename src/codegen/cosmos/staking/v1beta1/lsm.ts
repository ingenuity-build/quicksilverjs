import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "../../../helpers";
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeShares {
  delegator_address: string;
  validator_address: string;
  amount: Coin;
  tokenized_share_owner: string;
}
export interface MsgTokenizeSharesProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgTokenizeShares";
  value: Uint8Array;
}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeSharesAmino {
  delegator_address: string;
  validator_address: string;
  amount?: CoinAmino;
  tokenized_share_owner: string;
}
export interface MsgTokenizeSharesAminoMsg {
  type: "cosmos-sdk/MsgTokenizeShares";
  value: MsgTokenizeSharesAmino;
}
/** MsgTokenizeShares tokenizes a delegation */
export interface MsgTokenizeSharesSDKType {
  delegator_address: string;
  validator_address: string;
  amount: CoinSDKType;
  tokenized_share_owner: string;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponse {
  amount: Coin;
}
export interface MsgTokenizeSharesResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse";
  value: Uint8Array;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponseAmino {
  amount?: CoinAmino;
}
export interface MsgTokenizeSharesResponseAminoMsg {
  type: "cosmos-sdk/MsgTokenizeSharesResponse";
  value: MsgTokenizeSharesResponseAmino;
}
/** MsgTokenizeSharesResponse defines the Msg/MsgTokenizeShares response type. */
export interface MsgTokenizeSharesResponseSDKType {
  amount: CoinSDKType;
}
/** MsgRedeemTokensForShares redeems a tokenized share back into a native delegation */
export interface MsgRedeemTokensForShares {
  delegator_address: string;
  amount: Coin;
}
export interface MsgRedeemTokensForSharesProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares";
  value: Uint8Array;
}
/** MsgRedeemTokensForShares redeems a tokenized share back into a native delegation */
export interface MsgRedeemTokensForSharesAmino {
  delegator_address: string;
  amount?: CoinAmino;
}
export interface MsgRedeemTokensForSharesAminoMsg {
  type: "cosmos-sdk/MsgRedeemTokensForShares";
  value: MsgRedeemTokensForSharesAmino;
}
/** MsgRedeemTokensForShares redeems a tokenized share back into a native delegation */
export interface MsgRedeemTokensForSharesSDKType {
  delegator_address: string;
  amount: CoinSDKType;
}
/** MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares response type. */
export interface MsgRedeemTokensForSharesResponse {
  amount: Coin;
}
export interface MsgRedeemTokensForSharesResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse";
  value: Uint8Array;
}
/** MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares response type. */
export interface MsgRedeemTokensForSharesResponseAmino {
  amount?: CoinAmino;
}
export interface MsgRedeemTokensForSharesResponseAminoMsg {
  type: "cosmos-sdk/MsgRedeemTokensForSharesResponse";
  value: MsgRedeemTokensForSharesResponseAmino;
}
/** MsgRedeemTokensForSharesResponse defines the Msg/MsgRedeemTokensForShares response type. */
export interface MsgRedeemTokensForSharesResponseSDKType {
  amount: CoinSDKType;
}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeShares {
  delegator_address: string;
}
export interface MsgDisableTokenizeSharesProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares";
  value: Uint8Array;
}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeSharesAmino {
  delegator_address: string;
}
export interface MsgDisableTokenizeSharesAminoMsg {
  type: "cosmos-sdk/MsgDisableTokenizeShares";
  value: MsgDisableTokenizeSharesAmino;
}
/**
 * MsgDisableTokenizeShares prevents the tokenization of shares for a given
 * address
 */
export interface MsgDisableTokenizeSharesSDKType {
  delegator_address: string;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponse {}
export interface MsgDisableTokenizeSharesResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse";
  value: Uint8Array;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponseAmino {}
export interface MsgDisableTokenizeSharesResponseAminoMsg {
  type: "cosmos-sdk/MsgDisableTokenizeSharesResponse";
  value: MsgDisableTokenizeSharesResponseAmino;
}
/**
 * MsgDisableTokenizeSharesResponse defines the Msg/DisableTokenizeShares
 * response type.
 */
export interface MsgDisableTokenizeSharesResponseSDKType {}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeShares {
  delegator_address: string;
}
export interface MsgEnableTokenizeSharesProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares";
  value: Uint8Array;
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeSharesAmino {
  delegator_address: string;
}
export interface MsgEnableTokenizeSharesAminoMsg {
  type: "cosmos-sdk/MsgEnableTokenizeShares";
  value: MsgEnableTokenizeSharesAmino;
}
/** MsgEnableTokenizeShares re-enables tokenization of shares for a given address */
export interface MsgEnableTokenizeSharesSDKType {
  delegator_address: string;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponse {
  completion_time: Date;
}
export interface MsgEnableTokenizeSharesResponseProtoMsg {
  type_url: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse";
  value: Uint8Array;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponseAmino {
  completion_time?: Date;
}
export interface MsgEnableTokenizeSharesResponseAminoMsg {
  type: "cosmos-sdk/MsgEnableTokenizeSharesResponse";
  value: MsgEnableTokenizeSharesResponseAmino;
}
/**
 * MsgEnableTokenizeSharesResponse defines the Msg/EnableTokenizeShares response
 * type.
 */
export interface MsgEnableTokenizeSharesResponseSDKType {
  completion_time: Date;
}
function createBaseMsgTokenizeShares(): MsgTokenizeShares {
  return {
    delegator_address: "",
    validator_address: "",
    amount: Coin.fromPartial({}),
    tokenized_share_owner: ""
  };
}
export const MsgTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
  aminoType: "cosmos-sdk/MsgTokenizeShares",
  encode(message: MsgTokenizeShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.validator_address !== "") {
      writer.uint32(18).string(message.validator_address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenized_share_owner !== "") {
      writer.uint32(34).string(message.tokenized_share_owner);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.validator_address = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenized_share_owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTokenizeShares {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      validator_address: isSet(object.validator_address) ? String(object.validator_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      tokenized_share_owner: isSet(object.tokenized_share_owner) ? String(object.tokenized_share_owner) : ""
    };
  },
  toJSON(message: MsgTokenizeShares): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.validator_address !== undefined && (obj.validator_address = message.validator_address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.tokenized_share_owner !== undefined && (obj.tokenized_share_owner = message.tokenized_share_owner);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTokenizeShares>): MsgTokenizeShares {
    const message = createBaseMsgTokenizeShares();
    message.delegator_address = object.delegator_address ?? "";
    message.validator_address = object.validator_address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    message.tokenized_share_owner = object.tokenized_share_owner ?? "";
    return message;
  },
  fromAmino(object: MsgTokenizeSharesAmino): MsgTokenizeShares {
    return {
      delegator_address: object.delegator_address,
      validator_address: object.validator_address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined,
      tokenized_share_owner: object.tokenized_share_owner
    };
  },
  toAmino(message: MsgTokenizeShares): MsgTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address;
    obj.validator_address = message.validator_address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    obj.tokenized_share_owner = message.tokenized_share_owner;
    return obj;
  },
  fromAminoMsg(object: MsgTokenizeSharesAminoMsg): MsgTokenizeShares {
    return MsgTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTokenizeShares): MsgTokenizeSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgTokenizeShares",
      value: MsgTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTokenizeSharesProtoMsg): MsgTokenizeShares {
    return MsgTokenizeShares.decode(message.value);
  },
  toProto(message: MsgTokenizeShares): Uint8Array {
    return MsgTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgTokenizeShares): MsgTokenizeSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeShares",
      value: MsgTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgTokenizeSharesResponse(): MsgTokenizeSharesResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse",
  aminoType: "cosmos-sdk/MsgTokenizeSharesResponse",
  encode(message: MsgTokenizeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTokenizeSharesResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgTokenizeSharesResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgTokenizeSharesResponse>): MsgTokenizeSharesResponse {
    const message = createBaseMsgTokenizeSharesResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgTokenizeSharesResponseAmino): MsgTokenizeSharesResponse {
    return {
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgTokenizeSharesResponseAminoMsg): MsgTokenizeSharesResponse {
    return MsgTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTokenizeSharesResponse",
      value: MsgTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgTokenizeSharesResponseProtoMsg): MsgTokenizeSharesResponse {
    return MsgTokenizeSharesResponse.decode(message.value);
  },
  toProto(message: MsgTokenizeSharesResponse): Uint8Array {
    return MsgTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTokenizeSharesResponse): MsgTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgTokenizeSharesResponse",
      value: MsgTokenizeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemTokensForShares(): MsgRedeemTokensForShares {
  return {
    delegator_address: "",
    amount: Coin.fromPartial({})
  };
}
export const MsgRedeemTokensForShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
  aminoType: "cosmos-sdk/MsgRedeemTokensForShares",
  encode(message: MsgRedeemTokensForShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokensForShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedeemTokensForShares {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgRedeemTokensForShares): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRedeemTokensForShares>): MsgRedeemTokensForShares {
    const message = createBaseMsgRedeemTokensForShares();
    message.delegator_address = object.delegator_address ?? "";
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemTokensForSharesAmino): MsgRedeemTokensForShares {
    return {
      delegator_address: object.delegator_address,
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemTokensForSharesAminoMsg): MsgRedeemTokensForShares {
    return MsgRedeemTokensForShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgRedeemTokensForShares",
      value: MsgRedeemTokensForShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedeemTokensForSharesProtoMsg): MsgRedeemTokensForShares {
    return MsgRedeemTokensForShares.decode(message.value);
  },
  toProto(message: MsgRedeemTokensForShares): Uint8Array {
    return MsgRedeemTokensForShares.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemTokensForShares): MsgRedeemTokensForSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForShares",
      value: MsgRedeemTokensForShares.encode(message).finish()
    };
  }
};
function createBaseMsgRedeemTokensForSharesResponse(): MsgRedeemTokensForSharesResponse {
  return {
    amount: Coin.fromPartial({})
  };
}
export const MsgRedeemTokensForSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse",
  aminoType: "cosmos-sdk/MsgRedeemTokensForSharesResponse",
  encode(message: MsgRedeemTokensForSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemTokensForSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemTokensForSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedeemTokensForSharesResponse {
    return {
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined
    };
  },
  toJSON(message: MsgRedeemTokensForSharesResponse): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRedeemTokensForSharesResponse>): MsgRedeemTokensForSharesResponse {
    const message = createBaseMsgRedeemTokensForSharesResponse();
    message.amount = object.amount !== undefined && object.amount !== null ? Coin.fromPartial(object.amount) : undefined;
    return message;
  },
  fromAmino(object: MsgRedeemTokensForSharesResponseAmino): MsgRedeemTokensForSharesResponse {
    return {
      amount: object?.amount ? Coin.fromAmino(object.amount) : undefined
    };
  },
  toAmino(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseAmino {
    const obj: any = {};
    obj.amount = message.amount ? Coin.toAmino(message.amount) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgRedeemTokensForSharesResponseAminoMsg): MsgRedeemTokensForSharesResponse {
    return MsgRedeemTokensForSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRedeemTokensForSharesResponse",
      value: MsgRedeemTokensForSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRedeemTokensForSharesResponseProtoMsg): MsgRedeemTokensForSharesResponse {
    return MsgRedeemTokensForSharesResponse.decode(message.value);
  },
  toProto(message: MsgRedeemTokensForSharesResponse): Uint8Array {
    return MsgRedeemTokensForSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRedeemTokensForSharesResponse): MsgRedeemTokensForSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgRedeemTokensForSharesResponse",
      value: MsgRedeemTokensForSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgDisableTokenizeShares(): MsgDisableTokenizeShares {
  return {
    delegator_address: ""
  };
}
export const MsgDisableTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
  aminoType: "cosmos-sdk/MsgDisableTokenizeShares",
  encode(message: MsgDisableTokenizeShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDisableTokenizeShares {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
    };
  },
  toJSON(message: MsgDisableTokenizeShares): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDisableTokenizeShares>): MsgDisableTokenizeShares {
    const message = createBaseMsgDisableTokenizeShares();
    message.delegator_address = object.delegator_address ?? "";
    return message;
  },
  fromAmino(object: MsgDisableTokenizeSharesAmino): MsgDisableTokenizeShares {
    return {
      delegator_address: object.delegator_address
    };
  },
  toAmino(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address;
    return obj;
  },
  fromAminoMsg(object: MsgDisableTokenizeSharesAminoMsg): MsgDisableTokenizeShares {
    return MsgDisableTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgDisableTokenizeShares",
      value: MsgDisableTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDisableTokenizeSharesProtoMsg): MsgDisableTokenizeShares {
    return MsgDisableTokenizeShares.decode(message.value);
  },
  toProto(message: MsgDisableTokenizeShares): Uint8Array {
    return MsgDisableTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableTokenizeShares): MsgDisableTokenizeSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeShares",
      value: MsgDisableTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgDisableTokenizeSharesResponse(): MsgDisableTokenizeSharesResponse {
  return {};
}
export const MsgDisableTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse",
  aminoType: "cosmos-sdk/MsgDisableTokenizeSharesResponse",
  encode(_: MsgDisableTokenizeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDisableTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDisableTokenizeSharesResponse();
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
  fromJSON(_: any): MsgDisableTokenizeSharesResponse {
    return {};
  },
  toJSON(_: MsgDisableTokenizeSharesResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDisableTokenizeSharesResponse>): MsgDisableTokenizeSharesResponse {
    const message = createBaseMsgDisableTokenizeSharesResponse();
    return message;
  },
  fromAmino(_: MsgDisableTokenizeSharesResponseAmino): MsgDisableTokenizeSharesResponse {
    return {};
  },
  toAmino(_: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDisableTokenizeSharesResponseAminoMsg): MsgDisableTokenizeSharesResponse {
    return MsgDisableTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgDisableTokenizeSharesResponse",
      value: MsgDisableTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgDisableTokenizeSharesResponseProtoMsg): MsgDisableTokenizeSharesResponse {
    return MsgDisableTokenizeSharesResponse.decode(message.value);
  },
  toProto(message: MsgDisableTokenizeSharesResponse): Uint8Array {
    return MsgDisableTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDisableTokenizeSharesResponse): MsgDisableTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgDisableTokenizeSharesResponse",
      value: MsgDisableTokenizeSharesResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEnableTokenizeShares(): MsgEnableTokenizeShares {
  return {
    delegator_address: ""
  };
}
export const MsgEnableTokenizeShares = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
  aminoType: "cosmos-sdk/MsgEnableTokenizeShares",
  encode(message: MsgEnableTokenizeShares, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator_address !== "") {
      writer.uint32(10).string(message.delegator_address);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableTokenizeShares {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEnableTokenizeShares {
    return {
      delegator_address: isSet(object.delegator_address) ? String(object.delegator_address) : ""
    };
  },
  toJSON(message: MsgEnableTokenizeShares): unknown {
    const obj: any = {};
    message.delegator_address !== undefined && (obj.delegator_address = message.delegator_address);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgEnableTokenizeShares>): MsgEnableTokenizeShares {
    const message = createBaseMsgEnableTokenizeShares();
    message.delegator_address = object.delegator_address ?? "";
    return message;
  },
  fromAmino(object: MsgEnableTokenizeSharesAmino): MsgEnableTokenizeShares {
    return {
      delegator_address: object.delegator_address
    };
  },
  toAmino(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAmino {
    const obj: any = {};
    obj.delegator_address = message.delegator_address;
    return obj;
  },
  fromAminoMsg(object: MsgEnableTokenizeSharesAminoMsg): MsgEnableTokenizeShares {
    return MsgEnableTokenizeShares.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesAminoMsg {
    return {
      type: "cosmos-sdk/MsgEnableTokenizeShares",
      value: MsgEnableTokenizeShares.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEnableTokenizeSharesProtoMsg): MsgEnableTokenizeShares {
    return MsgEnableTokenizeShares.decode(message.value);
  },
  toProto(message: MsgEnableTokenizeShares): Uint8Array {
    return MsgEnableTokenizeShares.encode(message).finish();
  },
  toProtoMsg(message: MsgEnableTokenizeShares): MsgEnableTokenizeSharesProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeShares",
      value: MsgEnableTokenizeShares.encode(message).finish()
    };
  }
};
function createBaseMsgEnableTokenizeSharesResponse(): MsgEnableTokenizeSharesResponse {
  return {
    completion_time: new Date()
  };
}
export const MsgEnableTokenizeSharesResponse = {
  typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
  aminoType: "cosmos-sdk/MsgEnableTokenizeSharesResponse",
  encode(message: MsgEnableTokenizeSharesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completion_time !== undefined) {
      Timestamp.encode(toTimestamp(message.completion_time), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEnableTokenizeSharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEnableTokenizeSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completion_time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEnableTokenizeSharesResponse {
    return {
      completion_time: isSet(object.completion_time) ? fromJsonTimestamp(object.completion_time) : undefined
    };
  },
  toJSON(message: MsgEnableTokenizeSharesResponse): unknown {
    const obj: any = {};
    message.completion_time !== undefined && (obj.completion_time = message.completion_time.toISOString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgEnableTokenizeSharesResponse>): MsgEnableTokenizeSharesResponse {
    const message = createBaseMsgEnableTokenizeSharesResponse();
    message.completion_time = object.completion_time ?? undefined;
    return message;
  },
  fromAmino(object: MsgEnableTokenizeSharesResponseAmino): MsgEnableTokenizeSharesResponse {
    return {
      completion_time: object.completion_time
    };
  },
  toAmino(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseAmino {
    const obj: any = {};
    obj.completion_time = message.completion_time;
    return obj;
  },
  fromAminoMsg(object: MsgEnableTokenizeSharesResponseAminoMsg): MsgEnableTokenizeSharesResponse {
    return MsgEnableTokenizeSharesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgEnableTokenizeSharesResponse",
      value: MsgEnableTokenizeSharesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgEnableTokenizeSharesResponseProtoMsg): MsgEnableTokenizeSharesResponse {
    return MsgEnableTokenizeSharesResponse.decode(message.value);
  },
  toProto(message: MsgEnableTokenizeSharesResponse): Uint8Array {
    return MsgEnableTokenizeSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEnableTokenizeSharesResponse): MsgEnableTokenizeSharesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.staking.v1beta1.MsgEnableTokenizeSharesResponse",
      value: MsgEnableTokenizeSharesResponse.encode(message).finish()
    };
  }
};