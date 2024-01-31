import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjail {
  validator_addr: string;
}
export interface MsgUnjailProtoMsg {
  type_url: "/cosmos.slashing.v1beta1.MsgUnjail";
  value: Uint8Array;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailAmino {
  validator_addr: string;
}
export interface MsgUnjailAminoMsg {
  type: "cosmos-sdk/MsgUnjail";
  value: MsgUnjailAmino;
}
/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjailSDKType {
  validator_addr: string;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponse {}
export interface MsgUnjailResponseProtoMsg {
  type_url: "/cosmos.slashing.v1beta1.MsgUnjailResponse";
  value: Uint8Array;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseAmino {}
export interface MsgUnjailResponseAminoMsg {
  type: "cosmos-sdk/MsgUnjailResponse";
  value: MsgUnjailResponseAmino;
}
/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponseSDKType {}
function createBaseMsgUnjail(): MsgUnjail {
  return {
    validator_addr: ""
  };
}
export const MsgUnjail = {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
  aminoType: "cosmos-sdk/MsgUnjail",
  encode(message: MsgUnjail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator_addr !== "") {
      writer.uint32(10).string(message.validator_addr);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_addr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUnjail {
    return {
      validator_addr: isSet(object.validator_addr) ? String(object.validator_addr) : ""
    };
  },
  toJSON(message: MsgUnjail): unknown {
    const obj: any = {};
    message.validator_addr !== undefined && (obj.validator_addr = message.validator_addr);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUnjail>): MsgUnjail {
    const message = createBaseMsgUnjail();
    message.validator_addr = object.validator_addr ?? "";
    return message;
  },
  fromAmino(object: MsgUnjailAmino): MsgUnjail {
    return {
      validator_addr: object.validator_addr
    };
  },
  toAmino(message: MsgUnjail): MsgUnjailAmino {
    const obj: any = {};
    obj.validator_addr = message.validator_addr;
    return obj;
  },
  fromAminoMsg(object: MsgUnjailAminoMsg): MsgUnjail {
    return MsgUnjail.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnjail): MsgUnjailAminoMsg {
    return {
      type: "cosmos-sdk/MsgUnjail",
      value: MsgUnjail.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnjailProtoMsg): MsgUnjail {
    return MsgUnjail.decode(message.value);
  },
  toProto(message: MsgUnjail): Uint8Array {
    return MsgUnjail.encode(message).finish();
  },
  toProtoMsg(message: MsgUnjail): MsgUnjailProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MsgUnjail",
      value: MsgUnjail.encode(message).finish()
    };
  }
};
function createBaseMsgUnjailResponse(): MsgUnjailResponse {
  return {};
}
export const MsgUnjailResponse = {
  typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
  aminoType: "cosmos-sdk/MsgUnjailResponse",
  encode(_: MsgUnjailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnjailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnjailResponse();
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
  fromJSON(_: any): MsgUnjailResponse {
    return {};
  },
  toJSON(_: MsgUnjailResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUnjailResponse>): MsgUnjailResponse {
    const message = createBaseMsgUnjailResponse();
    return message;
  },
  fromAmino(_: MsgUnjailResponseAmino): MsgUnjailResponse {
    return {};
  },
  toAmino(_: MsgUnjailResponse): MsgUnjailResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUnjailResponseAminoMsg): MsgUnjailResponse {
    return MsgUnjailResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUnjailResponse): MsgUnjailResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUnjailResponse",
      value: MsgUnjailResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUnjailResponseProtoMsg): MsgUnjailResponse {
    return MsgUnjailResponse.decode(message.value);
  },
  toProto(message: MsgUnjailResponse): Uint8Array {
    return MsgUnjailResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUnjailResponse): MsgUnjailResponseProtoMsg {
    return {
      typeUrl: "/cosmos.slashing.v1beta1.MsgUnjailResponse",
      value: MsgUnjailResponse.encode(message).finish()
    };
  }
};